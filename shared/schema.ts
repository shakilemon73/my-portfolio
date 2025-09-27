import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, boolean, jsonb, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// ===========================================
// PORTFOLIO CONTENT MANAGEMENT SYSTEM SCHEMA
// World-Class Database Design for Complete CMS
// ===========================================

// Core Authentication
export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  email: text("email").notNull().unique(),
  role: text("role").notNull().default("admin"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Profile Settings - Core personal information
export const profileSettings = pgTable("profile_settings", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  title: text("title").notNull(),
  experience: text("experience").notNull(),
  tagline: text("tagline").notNull(),
  email: text("email").notNull(),
  location: text("location").notNull(),
  timezone: text("timezone").notNull(),
  availability: text("availability").notNull(),
  profileImageUrl: text("profile_image_url"),
  resumePdfUrl: text("resume_pdf_url"),
  linkedinUrl: text("linkedin_url"),
  portfolioUrl: text("portfolio_url"),
  impactMetrics: jsonb("impact_metrics").$type<{
    users_impacted: string;
    revenue_generated: string;
    efficiency_improvement: string;
    user_satisfaction: string;
    projects_shipped: string;
    teams_led: string;
    success_rate: string;
  }>(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Theme Settings - Visual customization
export const themeSettings = pgTable("theme_settings", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull().default("Default"),
  colors: jsonb("colors").$type<{
    deepBlack: string;
    charcoal: string;
    electricCyan: string;
    neonPink: string;
    coolGray: string;
    neonGreen: string;
    glassWhite: string;
    glassBorder: string;
  }>(),
  gradients: jsonb("gradients").$type<{
    primary: string;
    hero: string;
    text: string;
  }>(),
  typography: jsonb("typography").$type<{
    fontFamily: string;
    headingFont: string;
    bodyFont: string;
  }>(),
  logoUrl: text("logo_url"),
  faviconUrl: text("favicon_url"),
  isActive: boolean("is_active").default(false),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Section Configuration - Layout control
export const sectionConfigs = pgTable("section_configs", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  sectionId: text("section_id").notNull().unique(),
  isVisible: boolean("is_visible").default(true),
  displayOrder: integer("display_order").notNull(),
  title: text("title"),
  subtitle: text("subtitle"),
  customSettings: jsonb("custom_settings"),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Case Studies - Project portfolio
export const caseStudies = pgTable("case_studies", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  subtitle: text("subtitle").notNull(),
  category: text("category").notNull(),
  year: text("year").notNull(),
  company: text("company").notNull(),
  timeline: text("timeline").notNull(),
  teamSize: text("team_size").notNull(),
  myRole: text("my_role").notNull(),
  businessChallenge: text("business_challenge").notNull(),
  userProblem: text("user_problem").notNull(),
  approach: text("approach").notNull(),
  process: jsonb("process").$type<{
    discovery: {
      duration: string;
      activities: string[];
      deliverables: string[];
    };
    design: {
      duration: string;
      activities: string[];
      deliverables: string[];
    };
    validation: {
      duration: string;
      activities: string[];
      deliverables: string[];
    };
    implementation?: {
      duration: string;
      activities: string[];
      deliverables: string[];
    };
  }>(),
  businessImpact: jsonb("business_impact").$type<{
    primary_metrics: Array<{
      metric: string;
      before: string;
      after: string;
      improvement: string;
    }>;
    business_outcomes: string[];
  }>(),
  technicalDetails: jsonb("technical_details").$type<{
    challenges: string[];
    solutions: string[];
  }>(),
  keyLearnings: text("key_learnings").array(),
  toolsUsed: text("tools_used").array(),
  featured: boolean("featured").default(false),
  isDraft: boolean("is_draft").default(true),
  displayOrder: integer("display_order"),
  coverImageUrl: text("cover_image_url"),
  galleryUrls: text("gallery_urls").array(),
  liveUrl: text("live_url"),
  caseStudyUrl: text("case_study_url"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Work Experience
export const workExperiences = pgTable("work_experiences", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  company: text("company").notNull(),
  duration: text("duration").notNull(),
  location: text("location").notNull(),
  description: text("description").notNull(),
  responsibilities: text("responsibilities").array(),
  achievements: text("achievements").array(),
  technologies: text("technologies").array(),
  displayOrder: integer("display_order"),
  isCurrentRole: boolean("is_current_role").default(false),
  companyLogoUrl: text("company_logo_url"),
  companyUrl: text("company_url"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Testimonials
export const testimonials = pgTable("testimonials", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  role: text("role").notNull(),
  company: text("company").notNull(),
  content: text("content").notNull(),
  rating: integer("rating").notNull().default(5),
  avatarUrl: text("avatar_url"),
  projectRelated: text("project_related"),
  hasLinkedinBadge: boolean("has_linkedin_badge").default(false),
  linkedinUrl: text("linkedin_url"),
  featured: boolean("featured").default(false),
  displayOrder: integer("display_order"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Education
export const education = pgTable("education", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  degree: text("degree").notNull(),
  institution: text("institution").notNull(),
  year: text("year").notNull(),
  focus: text("focus"),
  gpa: text("gpa"),
  honors: text("honors").array(),
  relevantCoursework: text("relevant_coursework").array(),
  displayOrder: integer("display_order"),
  institutionLogoUrl: text("institution_logo_url"),
  certificateUrl: text("certificate_url"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Certifications
export const certifications = pgTable("certifications", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  issuer: text("issuer").notNull(),
  issueDate: text("issue_date"),
  expiryDate: text("expiry_date"),
  credentialId: text("credential_id"),
  credentialUrl: text("credential_url"),
  skills: text("skills").array(),
  displayOrder: integer("display_order"),
  badgeUrl: text("badge_url"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Achievements/Awards
export const achievements = pgTable("achievements", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  organization: text("organization").notNull(),
  year: text("year").notNull(),
  description: text("description").notNull(),
  category: text("category"), // "award", "recognition", "speaking", etc.
  audience: text("audience"),
  eventUrl: text("event_url"),
  mediaUrl: text("media_url"),
  displayOrder: integer("display_order"),
  badgeUrl: text("badge_url"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Skills & Competencies
export const skills = pgTable("skills", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  category: text("category").notNull(),
  name: text("name").notNull(),
  level: integer("level").notNull(), // 1-100
  yearsOfExperience: integer("years_of_experience"),
  description: text("description"),
  iconUrl: text("icon_url"),
  endorsements: integer("endorsements").default(0),
  displayOrder: integer("display_order"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Assets/Media Management
export const assets = pgTable("assets", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  filename: text("filename").notNull(),
  originalName: text("original_name").notNull(),
  url: text("url").notNull(),
  mimeType: text("mime_type").notNull(),
  size: integer("size").notNull(), // bytes
  width: integer("width"),
  height: integer("height"),
  altText: text("alt_text"),
  tags: text("tags").array(),
  folder: text("folder").default("uploads"),
  isPublic: boolean("is_public").default(true),
  uploadedBy: varchar("uploaded_by").references(() => users.id),
  createdAt: timestamp("created_at").defaultNow(),
});

// Contact Form Submissions (for admin dashboard)
export const contactSubmissions = pgTable("contact_submissions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  company: text("company"),
  projectType: text("project_type"),
  budget: text("budget"),
  timeline: text("timeline"),
  message: text("message").notNull(),
  status: text("status").default("new"), // new, read, replied, archived
  priority: text("priority").default("normal"), // low, normal, high
  isRead: boolean("is_read").default(false),
  adminNotes: text("admin_notes"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Admin Activity Logs
export const activityLogs = pgTable("activity_logs", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").references(() => users.id),
  action: text("action").notNull(), // create, update, delete, login, etc.
  entityType: text("entity_type").notNull(), // case_study, testimonial, etc.
  entityId: varchar("entity_id"),
  oldData: jsonb("old_data"),
  newData: jsonb("new_data"),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  createdAt: timestamp("created_at").defaultNow(),
});

// ===========================================
// ZOD SCHEMAS FOR VALIDATION
// ===========================================

// Auth schemas
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
  email: true,
});

export const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

// Profile schemas
export const insertProfileSchema = createInsertSchema(profileSettings).omit({ 
  id: true, 
  updatedAt: true 
});

export const updateProfileSchema = insertProfileSchema.partial();

// Theme schemas
export const insertThemeSchema = createInsertSchema(themeSettings).omit({ 
  id: true, 
  updatedAt: true 
});

export const updateThemeSchema = insertThemeSchema.partial();

// Section config schemas
export const insertSectionConfigSchema = createInsertSchema(sectionConfigs).omit({ 
  id: true, 
  updatedAt: true 
});

export const updateSectionConfigSchema = insertSectionConfigSchema.partial();

// Case study schemas
export const insertCaseStudySchema = createInsertSchema(caseStudies).omit({ 
  id: true, 
  createdAt: true, 
  updatedAt: true 
});

export const updateCaseStudySchema = insertCaseStudySchema.partial();

// Work experience schemas
export const insertWorkExperienceSchema = createInsertSchema(workExperiences).omit({ 
  id: true, 
  createdAt: true, 
  updatedAt: true 
});

export const updateWorkExperienceSchema = insertWorkExperienceSchema.partial();

// Testimonial schemas
export const insertTestimonialSchema = createInsertSchema(testimonials).omit({ 
  id: true, 
  createdAt: true, 
  updatedAt: true 
});

export const updateTestimonialSchema = insertTestimonialSchema.partial();

// Education schemas
export const insertEducationSchema = createInsertSchema(education).omit({ 
  id: true, 
  createdAt: true, 
  updatedAt: true 
});

export const updateEducationSchema = insertEducationSchema.partial();

// Certification schemas
export const insertCertificationSchema = createInsertSchema(certifications).omit({ 
  id: true, 
  createdAt: true, 
  updatedAt: true 
});

export const updateCertificationSchema = insertCertificationSchema.partial();

// Achievement schemas
export const insertAchievementSchema = createInsertSchema(achievements).omit({ 
  id: true, 
  createdAt: true, 
  updatedAt: true 
});

export const updateAchievementSchema = insertAchievementSchema.partial();

// Skill schemas
export const insertSkillSchema = createInsertSchema(skills).omit({ 
  id: true, 
  createdAt: true, 
  updatedAt: true 
});

export const updateSkillSchema = insertSkillSchema.partial();

// Asset schemas
export const insertAssetSchema = createInsertSchema(assets).omit({ 
  id: true, 
  createdAt: true 
});

// Contact submission schemas
export const insertContactSubmissionSchema = createInsertSchema(contactSubmissions).omit({ 
  id: true, 
  createdAt: true, 
  updatedAt: true,
  status: true,
  isRead: true 
});

export const updateContactSubmissionSchema = createInsertSchema(contactSubmissions).pick({
  status: true,
  priority: true,
  isRead: true,
  adminNotes: true,
});

// Reorder schema for drag-and-drop functionality
export const reorderSchema = z.object({
  ids: z.array(z.string().uuid()),
});

// ===========================================
// TYPE EXPORTS
// ===========================================

export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;
export type LoginInput = z.infer<typeof loginSchema>;

export type ProfileSettings = typeof profileSettings.$inferSelect;
export type InsertProfileSettings = z.infer<typeof insertProfileSchema>;
export type UpdateProfileSettings = z.infer<typeof updateProfileSchema>;

export type ThemeSettings = typeof themeSettings.$inferSelect;
export type InsertThemeSettings = z.infer<typeof insertThemeSchema>;
export type UpdateThemeSettings = z.infer<typeof updateThemeSchema>;

export type SectionConfig = typeof sectionConfigs.$inferSelect;
export type InsertSectionConfig = z.infer<typeof insertSectionConfigSchema>;
export type UpdateSectionConfig = z.infer<typeof updateSectionConfigSchema>;

export type CaseStudy = typeof caseStudies.$inferSelect;
export type InsertCaseStudy = z.infer<typeof insertCaseStudySchema>;
export type UpdateCaseStudy = z.infer<typeof updateCaseStudySchema>;

export type WorkExperience = typeof workExperiences.$inferSelect;
export type InsertWorkExperience = z.infer<typeof insertWorkExperienceSchema>;
export type UpdateWorkExperience = z.infer<typeof updateWorkExperienceSchema>;

export type Testimonial = typeof testimonials.$inferSelect;
export type InsertTestimonial = z.infer<typeof insertTestimonialSchema>;
export type UpdateTestimonial = z.infer<typeof updateTestimonialSchema>;

export type Education = typeof education.$inferSelect;
export type InsertEducation = z.infer<typeof insertEducationSchema>;
export type UpdateEducation = z.infer<typeof updateEducationSchema>;

export type Certification = typeof certifications.$inferSelect;
export type InsertCertification = z.infer<typeof insertCertificationSchema>;
export type UpdateCertification = z.infer<typeof updateCertificationSchema>;

export type Achievement = typeof achievements.$inferSelect;
export type InsertAchievement = z.infer<typeof insertAchievementSchema>;
export type UpdateAchievement = z.infer<typeof updateAchievementSchema>;

export type Skill = typeof skills.$inferSelect;
export type InsertSkill = z.infer<typeof insertSkillSchema>;
export type UpdateSkill = z.infer<typeof updateSkillSchema>;

export type Asset = typeof assets.$inferSelect;
export type InsertAsset = z.infer<typeof insertAssetSchema>;

export type ContactSubmission = typeof contactSubmissions.$inferSelect;
export type InsertContactSubmission = z.infer<typeof insertContactSubmissionSchema>;
export type UpdateContactSubmission = z.infer<typeof updateContactSubmissionSchema>;

export type ActivityLog = typeof activityLogs.$inferSelect;

export type ReorderInput = z.infer<typeof reorderSchema>;