import type { Express } from "express";
import express from "express";
import { createServer, type Server } from "http";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import multer from "multer";
import sharp from "sharp";
import rateLimit from "express-rate-limit";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";
import { storage } from "./storage";
import {
  loginSchema,
  insertProfileSchema, updateProfileSchema,
  insertThemeSchema, updateThemeSchema,
  insertSectionConfigSchema, updateSectionConfigSchema,
  insertCaseStudySchema, updateCaseStudySchema,
  insertWorkExperienceSchema, updateWorkExperienceSchema,
  insertTestimonialSchema, updateTestimonialSchema,
  insertEducationSchema, updateEducationSchema,
  insertCertificationSchema, updateCertificationSchema,
  insertAchievementSchema, updateAchievementSchema,
  insertSkillSchema, updateSkillSchema,
  insertContactSubmissionSchema, updateContactSubmissionSchema,
  reorderSchema,
  type User
} from "@shared/schema";
import path from "path";
import { randomUUID } from "crypto";
import fs from "fs/promises";

// ===========================================
// WORLD-CLASS CMS API ENDPOINTS
// Enterprise-Grade Security & Functionality
// ===========================================

// Environment variables with secure defaults
const JWT_SECRET = process.env.JWT_SECRET || "your-super-secure-jwt-secret-change-in-production";
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@shakil-portfolio.com";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123"; // Change in production!
const UPLOADS_DIR = path.join(process.cwd(), "uploads");

// Rate limiting for security
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 attempts per window
  message: { error: "Too many login attempts, please try again later." },
  standardHeaders: true,
  legacyHeaders: false,
});

const uploadLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 10, // 10 uploads per minute
  message: { error: "Too many upload attempts, please try again later." },
});

// ===========================================
// AUTHENTICATION MIDDLEWARE
// ===========================================

interface AuthenticatedRequest extends express.Request {
  user?: User;
}

const authenticateToken = async (req: AuthenticatedRequest, res: express.Response, next: express.NextFunction) => {
  try {
    const token = req.cookies.authToken;
    
    if (!token) {
      return res.status(401).json({ error: "Access denied. No token provided." });
    }

    const decoded = jwt.verify(token, JWT_SECRET) as { userId: string };
    const user = await storage.getUser(decoded.userId);
    
    if (!user) {
      return res.status(401).json({ error: "Invalid token. User not found." });
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(403).json({ error: "Invalid token." });
  }
};

// ===========================================
// UTILITY FUNCTIONS
// ===========================================

const validateRequest = (schema: z.ZodSchema) => {
  return (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({
          error: "Validation failed",
          details: validationError.message,
          issues: error.issues
        });
      }
      next(error);
    }
  };
};

const handleAsync = (fn: Function) => {
  return (req: express.Request, res: express.Response, next: express.NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};

// ===========================================
// FILE UPLOAD CONFIGURATION
// ===========================================

const uploadConfig = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
    files: 5 // Max 5 files per request
  },
  fileFilter: (req, file, cb) => {
    // Allow images and PDFs
    const allowedMimes = [
      'image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp',
      'application/pdf'
    ];
    
    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only images and PDFs are allowed.'));
    }
  }
});

export async function registerRoutes(app: Express): Promise<Server> {
  // ===========================================
  // SECURITY & MIDDLEWARE SETUP
  // ===========================================
  
  // Security headers
  app.use(helmet({
    contentSecurityPolicy: false, // Disable for development with Vite
    crossOriginEmbedderPolicy: false
  }));
  
  // Cookie parser for authentication
  app.use(cookieParser());

  // Ensure uploads directory exists
  try {
    await fs.access(UPLOADS_DIR);
  } catch {
    await fs.mkdir(UPLOADS_DIR, { recursive: true });
  }

  // Create API router
  const apiRouter = express.Router();

  // ===========================================
  // AUTHENTICATION ROUTES
  // ===========================================

  // Login endpoint
  apiRouter.post("/auth/login", authLimiter, validateRequest(loginSchema), handleAsync(async (req: express.Request, res: express.Response) => {
    const { username, password } = req.body;

    // Check if this is the admin account (in production, use proper user management)
    if (username === "admin" && password === ADMIN_PASSWORD) {
      // Create or get admin user
      let adminUser = await storage.getUserByUsername("admin");
      
      if (!adminUser) {
        const hashedPassword = await bcrypt.hash(ADMIN_PASSWORD, 10);
        adminUser = await storage.createUser({
          username: "admin",
          email: ADMIN_EMAIL,
          password: hashedPassword
        });
      }

      const token = jwt.sign({ userId: adminUser.id }, JWT_SECRET, { expiresIn: "7d" });
      
      // Set secure HTTP-only cookie
      res.cookie("authToken", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
      });

      await storage.logActivity({
        userId: adminUser.id,
        action: "login",
        entityType: "auth",
        entityId: adminUser.id,
        oldData: null,
        newData: { loginTime: new Date() },
        ipAddress: req.ip,
        userAgent: req.get("User-Agent") || null
      });

      res.json({
        success: true,
        user: {
          id: adminUser.id,
          username: adminUser.username,
          email: adminUser.email,
          role: adminUser.role
        }
      });
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  }));

  // Logout endpoint
  apiRouter.post("/auth/logout", handleAsync(async (req: express.Request, res: express.Response) => {
    res.clearCookie("authToken");
    res.json({ success: true, message: "Logged out successfully" });
  }));

  // Get current user
  apiRouter.get("/auth/me", authenticateToken, handleAsync(async (req: AuthenticatedRequest, res: express.Response) => {
    res.json({
      user: {
        id: req.user!.id,
        username: req.user!.username,
        email: req.user!.email,
        role: req.user!.role
      }
    });
  }));

  // ===========================================
  // PROFILE SETTINGS ROUTES
  // ===========================================

  apiRouter.get("/settings/profile", authenticateToken, handleAsync(async (req: AuthenticatedRequest, res: express.Response) => {
    const profile = await storage.getProfileSettings();
    res.json(profile || null);
  }));

  apiRouter.post("/settings/profile", authenticateToken, validateRequest(insertProfileSchema), handleAsync(async (req: AuthenticatedRequest, res: express.Response) => {
    const profile = await storage.createProfileSettings(req.body);
    
    await storage.logActivity({
      userId: req.user!.id,
      action: "create",
      entityType: "profile_settings",
      entityId: profile.id,
      oldData: null,
      newData: req.body,
      ipAddress: req.ip,
      userAgent: req.get("User-Agent") || null
    });

    res.status(201).json(profile);
  }));

  apiRouter.put("/settings/profile", authenticateToken, validateRequest(updateProfileSchema), handleAsync(async (req: AuthenticatedRequest, res: express.Response) => {
    const profile = await storage.updateProfileSettings(req.body);
    
    if (!profile) {
      return res.status(404).json({ error: "Profile settings not found" });
    }

    await storage.logActivity({
      userId: req.user!.id,
      action: "update",
      entityType: "profile_settings",
      entityId: profile.id,
      oldData: null,
      newData: req.body,
      ipAddress: req.ip,
      userAgent: req.get("User-Agent") || null
    });

    res.json(profile);
  }));

  // ===========================================
  // THEME SETTINGS ROUTES
  // ===========================================

  apiRouter.get("/settings/themes", authenticateToken, handleAsync(async (req: AuthenticatedRequest, res: express.Response) => {
    const themes = await storage.getAllThemes();
    res.json(themes);
  }));

  apiRouter.get("/settings/themes/active", authenticateToken, handleAsync(async (req: AuthenticatedRequest, res: express.Response) => {
    const activeTheme = await storage.getActiveTheme();
    res.json(activeTheme || null);
  }));

  apiRouter.post("/settings/themes", authenticateToken, validateRequest(insertThemeSchema), handleAsync(async (req: AuthenticatedRequest, res: express.Response) => {
    const theme = await storage.createTheme(req.body);
    res.status(201).json(theme);
  }));

  apiRouter.put("/settings/themes/:id", authenticateToken, validateRequest(updateThemeSchema), handleAsync(async (req: AuthenticatedRequest, res: express.Response) => {
    const theme = await storage.updateTheme(req.params.id, req.body);
    
    if (!theme) {
      return res.status(404).json({ error: "Theme not found" });
    }

    res.json(theme);
  }));

  // ===========================================
  // CASE STUDIES ROUTES
  // ===========================================

  apiRouter.get("/case-studies", handleAsync(async (req: express.Request, res: express.Response) => {
    const includeDrafts = req.query.drafts === "true";
    const caseStudies = await storage.getAllCaseStudies(includeDrafts);
    res.json(caseStudies);
  }));

  apiRouter.get("/case-studies/:id", handleAsync(async (req: express.Request, res: express.Response) => {
    const caseStudy = await storage.getCaseStudy(req.params.id);
    
    if (!caseStudy) {
      return res.status(404).json({ error: "Case study not found" });
    }

    res.json(caseStudy);
  }));

  apiRouter.post("/case-studies", authenticateToken, validateRequest(insertCaseStudySchema), handleAsync(async (req: AuthenticatedRequest, res: express.Response) => {
    const caseStudy = await storage.createCaseStudy(req.body);
    
    await storage.logActivity({
      userId: req.user!.id,
      action: "create",
      entityType: "case_study",
      entityId: caseStudy.id,
      oldData: null,
      newData: req.body,
      ipAddress: req.ip,
      userAgent: req.get("User-Agent") || null
    });

    res.status(201).json(caseStudy);
  }));

  apiRouter.put("/case-studies/:id", authenticateToken, validateRequest(updateCaseStudySchema), handleAsync(async (req: AuthenticatedRequest, res: express.Response) => {
    const oldCaseStudy = await storage.getCaseStudy(req.params.id);
    const caseStudy = await storage.updateCaseStudy(req.params.id, req.body);
    
    if (!caseStudy) {
      return res.status(404).json({ error: "Case study not found" });
    }

    await storage.logActivity({
      userId: req.user!.id,
      action: "update",
      entityType: "case_study",
      entityId: caseStudy.id,
      oldData: oldCaseStudy,
      newData: req.body,
      ipAddress: req.ip,
      userAgent: req.get("User-Agent") || null
    });

    res.json(caseStudy);
  }));

  apiRouter.delete("/case-studies/:id", authenticateToken, handleAsync(async (req: AuthenticatedRequest, res: express.Response) => {
    const success = await storage.deleteCaseStudy(req.params.id);
    
    if (!success) {
      return res.status(404).json({ error: "Case study not found" });
    }

    await storage.logActivity({
      userId: req.user!.id,
      action: "delete",
      entityType: "case_study",
      entityId: req.params.id,
      oldData: null,
      newData: null,
      ipAddress: req.ip,
      userAgent: req.get("User-Agent") || null
    });

    res.json({ success: true, message: "Case study deleted successfully" });
  }));

  // ===========================================
  // WORK EXPERIENCE ROUTES
  // ===========================================

  apiRouter.get("/experiences", handleAsync(async (req: express.Request, res: express.Response) => {
    const experiences = await storage.getAllWorkExperiences();
    res.json(experiences);
  }));

  apiRouter.post("/experiences", authenticateToken, validateRequest(insertWorkExperienceSchema), handleAsync(async (req: AuthenticatedRequest, res: express.Response) => {
    const experience = await storage.createWorkExperience(req.body);
    res.status(201).json(experience);
  }));

  apiRouter.put("/experiences/:id", authenticateToken, validateRequest(updateWorkExperienceSchema), handleAsync(async (req: AuthenticatedRequest, res: express.Response) => {
    const experience = await storage.updateWorkExperience(req.params.id, req.body);
    
    if (!experience) {
      return res.status(404).json({ error: "Work experience not found" });
    }

    res.json(experience);
  }));

  apiRouter.delete("/experiences/:id", authenticateToken, handleAsync(async (req: AuthenticatedRequest, res: express.Response) => {
    const success = await storage.deleteWorkExperience(req.params.id);
    
    if (!success) {
      return res.status(404).json({ error: "Work experience not found" });
    }

    res.json({ success: true, message: "Work experience deleted successfully" });
  }));

  // ===========================================
  // TESTIMONIALS ROUTES
  // ===========================================

  apiRouter.get("/testimonials", handleAsync(async (req: express.Request, res: express.Response) => {
    const testimonials = await storage.getAllTestimonials();
    res.json(testimonials);
  }));

  apiRouter.post("/testimonials", authenticateToken, validateRequest(insertTestimonialSchema), handleAsync(async (req: AuthenticatedRequest, res: express.Response) => {
    const testimonial = await storage.createTestimonial(req.body);
    res.status(201).json(testimonial);
  }));

  apiRouter.put("/testimonials/:id", authenticateToken, validateRequest(updateTestimonialSchema), handleAsync(async (req: AuthenticatedRequest, res: express.Response) => {
    const testimonial = await storage.updateTestimonial(req.params.id, req.body);
    
    if (!testimonial) {
      return res.status(404).json({ error: "Testimonial not found" });
    }

    res.json(testimonial);
  }));

  apiRouter.delete("/testimonials/:id", authenticateToken, handleAsync(async (req: AuthenticatedRequest, res: express.Response) => {
    const success = await storage.deleteTestimonial(req.params.id);
    
    if (!success) {
      return res.status(404).json({ error: "Testimonial not found" });
    }

    res.json({ success: true, message: "Testimonial deleted successfully" });
  }));

  // ===========================================
  // FILE UPLOAD ROUTES
  // ===========================================

  apiRouter.post("/uploads", uploadLimiter, authenticateToken, uploadConfig.array("files"), handleAsync(async (req: AuthenticatedRequest, res: express.Response) => {
    const files = req.files as Express.Multer.File[];
    
    if (!files || files.length === 0) {
      return res.status(400).json({ error: "No files uploaded" });
    }

    const uploadedAssets = [];

    for (const file of files) {
      try {
        const fileId = randomUUID();
        const fileExtension = path.extname(file.originalname);
        const filename = `${fileId}${fileExtension}`;
        const filePath = path.join(UPLOADS_DIR, filename);

        let processedBuffer = file.buffer;
        let width: number | undefined;
        let height: number | undefined;

        // Process images with Sharp
        if (file.mimetype.startsWith('image/')) {
          const image = sharp(file.buffer);
          const metadata = await image.metadata();
          width = metadata.width;
          height = metadata.height;

          // Optimize image (resize if too large, compress)
          processedBuffer = await image
            .resize(2000, 2000, { fit: 'inside', withoutEnlargement: true })
            .jpeg({ quality: 85 })
            .png({ compressionLevel: 8 })
            .webp({ quality: 85 })
            .toBuffer();
        }

        // Save file
        await fs.writeFile(filePath, processedBuffer);

        // Create asset record
        const asset = await storage.createAsset({
          filename,
          originalName: file.originalname,
          url: `/uploads/${filename}`,
          mimeType: file.mimetype,
          size: processedBuffer.length,
          width,
          height,
          altText: null,
          tags: null,
          folder: "uploads",
          isPublic: true,
          uploadedBy: req.user!.id
        });

        uploadedAssets.push(asset);

        await storage.logActivity({
          userId: req.user!.id,
          action: "upload",
          entityType: "asset",
          entityId: asset.id,
          oldData: null,
          newData: { filename: asset.filename, size: asset.size },
          ipAddress: req.ip,
          userAgent: req.get("User-Agent") || null
        });

      } catch (error) {
        console.error("File upload error:", error);
        return res.status(500).json({ error: "Failed to process file upload" });
      }
    }

    res.status(201).json({
      success: true,
      message: `${uploadedAssets.length} file(s) uploaded successfully`,
      assets: uploadedAssets
    });
  }));

  // Serve uploaded files
  apiRouter.get("/uploads/:filename", handleAsync(async (req: express.Request, res: express.Response) => {
    const filePath = path.join(UPLOADS_DIR, req.params.filename);
    
    try {
      await fs.access(filePath);
      res.sendFile(filePath);
    } catch {
      res.status(404).json({ error: "File not found" });
    }
  }));

  // Get all assets
  apiRouter.get("/assets", authenticateToken, handleAsync(async (req: AuthenticatedRequest, res: express.Response) => {
    const assets = await storage.getAllAssets();
    res.json(assets);
  }));

  // Delete asset
  apiRouter.delete("/assets/:id", authenticateToken, handleAsync(async (req: AuthenticatedRequest, res: express.Response) => {
    const asset = await storage.getAsset(req.params.id);
    
    if (!asset) {
      return res.status(404).json({ error: "Asset not found" });
    }

    // Delete file from filesystem
    const filePath = path.join(UPLOADS_DIR, asset.filename);
    try {
      await fs.unlink(filePath);
    } catch (error) {
      console.error("Failed to delete file:", error);
    }

    // Delete from storage
    const success = await storage.deleteAsset(req.params.id);
    
    if (!success) {
      return res.status(404).json({ error: "Asset not found" });
    }

    res.json({ success: true, message: "Asset deleted successfully" });
  }));

  // ===========================================
  // CONTACT SUBMISSIONS ROUTES
  // ===========================================

  apiRouter.get("/contact-submissions", authenticateToken, handleAsync(async (req: AuthenticatedRequest, res: express.Response) => {
    const submissions = await storage.getAllContactSubmissions();
    res.json(submissions);
  }));

  apiRouter.post("/contact-submissions", validateRequest(insertContactSubmissionSchema), handleAsync(async (req: express.Request, res: express.Response) => {
    const submission = await storage.createContactSubmission(req.body);
    res.status(201).json(submission);
  }));

  apiRouter.put("/contact-submissions/:id", authenticateToken, validateRequest(updateContactSubmissionSchema), handleAsync(async (req: AuthenticatedRequest, res: express.Response) => {
    const submission = await storage.updateContactSubmission(req.params.id, req.body);
    
    if (!submission) {
      return res.status(404).json({ error: "Contact submission not found" });
    }

    res.json(submission);
  }));

  // ===========================================
  // DASHBOARD & ANALYTICS ROUTES
  // ===========================================

  apiRouter.get("/dashboard/stats", authenticateToken, handleAsync(async (req: AuthenticatedRequest, res: express.Response) => {
    const stats = await storage.getDashboardStats();
    res.json(stats);
  }));

  apiRouter.get("/activity-logs", authenticateToken, handleAsync(async (req: AuthenticatedRequest, res: express.Response) => {
    const limit = parseInt(req.query.limit as string) || 50;
    const logs = await storage.getActivityLogs(limit);
    res.json(logs);
  }));

  // ===========================================
  // PUBLIC API ENDPOINTS (for frontend)
  // ===========================================

  // Get all public portfolio data
  apiRouter.get("/portfolio", handleAsync(async (req: express.Request, res: express.Response) => {
    const [
      profile,
      activeTheme,
      sections,
      caseStudies,
      experiences,
      testimonials
    ] = await Promise.all([
      storage.getProfileSettings(),
      storage.getActiveTheme(),
      storage.getAllSectionConfigs(),
      storage.getAllCaseStudies(false), // Only published case studies
      storage.getAllWorkExperiences(),
      storage.getAllTestimonials()
    ]);

    res.json({
      profile,
      theme: activeTheme,
      sections: sections.filter(s => s.isVisible),
      caseStudies: caseStudies.filter(cs => !cs.isDraft),
      experiences,
      testimonials
    });
  }));

  // ===========================================
  // ERROR HANDLING MIDDLEWARE
  // ===========================================

  apiRouter.use((error: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error("API Error:", error);
    
    if (error instanceof multer.MulterError) {
      if (error.code === 'LIMIT_FILE_SIZE') {
        return res.status(400).json({ error: "File size too large. Maximum size is 10MB." });
      }
      if (error.code === 'LIMIT_FILE_COUNT') {
        return res.status(400).json({ error: "Too many files. Maximum is 5 files per upload." });
      }
    }

    res.status(500).json({ 
      error: "Internal server error",
      message: process.env.NODE_ENV === "development" ? error.message : "Something went wrong"
    });
  });

  // Mount all API routes under /api prefix
  app.use("/api", apiRouter);

  // Create and return HTTP server
  const httpServer = createServer(app);
  return httpServer;
}