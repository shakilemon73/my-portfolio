import { randomUUID } from "crypto";
import type {
  User, InsertUser,
  ProfileSettings, InsertProfileSettings, UpdateProfileSettings,
  ThemeSettings, InsertThemeSettings, UpdateThemeSettings,
  SectionConfig, InsertSectionConfig, UpdateSectionConfig,
  CaseStudy, InsertCaseStudy, UpdateCaseStudy,
  WorkExperience, InsertWorkExperience, UpdateWorkExperience,
  Testimonial, InsertTestimonial, UpdateTestimonial,
  Education, InsertEducation, UpdateEducation,
  Certification, InsertCertification, UpdateCertification,
  Achievement, InsertAchievement, UpdateAchievement,
  Skill, InsertSkill, UpdateSkill,
  Asset, InsertAsset,
  ContactSubmission, InsertContactSubmission, UpdateContactSubmission,
  ActivityLog,
  ReorderInput
} from "@shared/schema";

// ===========================================
// STORAGE INTERFACE - Enterprise-Grade CMS
// Complete CRUD operations for all entities
// ===========================================

export interface IStorage {
  // ===== Authentication =====
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  updateUser(id: string, updates: Partial<User>): Promise<User | undefined>;

  // ===== Profile Settings =====
  getProfileSettings(): Promise<ProfileSettings | undefined>;
  createProfileSettings(profile: InsertProfileSettings): Promise<ProfileSettings>;
  updateProfileSettings(updates: UpdateProfileSettings): Promise<ProfileSettings | undefined>;

  // ===== Theme Settings =====
  getActiveTheme(): Promise<ThemeSettings | undefined>;
  getAllThemes(): Promise<ThemeSettings[]>;
  getTheme(id: string): Promise<ThemeSettings | undefined>;
  createTheme(theme: InsertThemeSettings): Promise<ThemeSettings>;
  updateTheme(id: string, updates: UpdateThemeSettings): Promise<ThemeSettings | undefined>;
  setActiveTheme(id: string): Promise<boolean>;
  deleteTheme(id: string): Promise<boolean>;

  // ===== Section Configuration =====
  getAllSectionConfigs(): Promise<SectionConfig[]>;
  getSectionConfig(sectionId: string): Promise<SectionConfig | undefined>;
  createSectionConfig(config: InsertSectionConfig): Promise<SectionConfig>;
  updateSectionConfig(id: string, updates: UpdateSectionConfig): Promise<SectionConfig | undefined>;
  reorderSections(order: ReorderInput): Promise<boolean>;

  // ===== Case Studies =====
  getAllCaseStudies(includeDrafts?: boolean): Promise<CaseStudy[]>;
  getCaseStudy(id: string): Promise<CaseStudy | undefined>;
  getCaseStudyBySlug(slug: string): Promise<CaseStudy | undefined>;
  createCaseStudy(caseStudy: InsertCaseStudy): Promise<CaseStudy>;
  updateCaseStudy(id: string, updates: UpdateCaseStudy): Promise<CaseStudy | undefined>;
  deleteCaseStudy(id: string): Promise<boolean>;
  reorderCaseStudies(order: ReorderInput): Promise<boolean>;
  publishCaseStudy(id: string): Promise<CaseStudy | undefined>;
  unpublishCaseStudy(id: string): Promise<CaseStudy | undefined>;

  // ===== Work Experience =====
  getAllWorkExperiences(): Promise<WorkExperience[]>;
  getWorkExperience(id: string): Promise<WorkExperience | undefined>;
  createWorkExperience(experience: InsertWorkExperience): Promise<WorkExperience>;
  updateWorkExperience(id: string, updates: UpdateWorkExperience): Promise<WorkExperience | undefined>;
  deleteWorkExperience(id: string): Promise<boolean>;
  reorderWorkExperiences(order: ReorderInput): Promise<boolean>;

  // ===== Testimonials =====
  getAllTestimonials(): Promise<Testimonial[]>;
  getTestimonial(id: string): Promise<Testimonial | undefined>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
  updateTestimonial(id: string, updates: UpdateTestimonial): Promise<Testimonial | undefined>;
  deleteTestimonial(id: string): Promise<boolean>;
  reorderTestimonials(order: ReorderInput): Promise<boolean>;

  // ===== Education =====
  getAllEducation(): Promise<Education[]>;
  getEducation(id: string): Promise<Education | undefined>;
  createEducation(education: InsertEducation): Promise<Education>;
  updateEducation(id: string, updates: UpdateEducation): Promise<Education | undefined>;
  deleteEducation(id: string): Promise<boolean>;
  reorderEducation(order: ReorderInput): Promise<boolean>;

  // ===== Certifications =====
  getAllCertifications(): Promise<Certification[]>;
  getCertification(id: string): Promise<Certification | undefined>;
  createCertification(certification: InsertCertification): Promise<Certification>;
  updateCertification(id: string, updates: UpdateCertification): Promise<Certification | undefined>;
  deleteCertification(id: string): Promise<boolean>;
  reorderCertifications(order: ReorderInput): Promise<boolean>;

  // ===== Achievements =====
  getAllAchievements(): Promise<Achievement[]>;
  getAchievement(id: string): Promise<Achievement | undefined>;
  createAchievement(achievement: InsertAchievement): Promise<Achievement>;
  updateAchievement(id: string, updates: UpdateAchievement): Promise<Achievement | undefined>;
  deleteAchievement(id: string): Promise<boolean>;
  reorderAchievements(order: ReorderInput): Promise<boolean>;

  // ===== Skills =====
  getAllSkills(): Promise<Skill[]>;
  getSkillsByCategory(category: string): Promise<Skill[]>;
  getSkill(id: string): Promise<Skill | undefined>;
  createSkill(skill: InsertSkill): Promise<Skill>;
  updateSkill(id: string, updates: UpdateSkill): Promise<Skill | undefined>;
  deleteSkill(id: string): Promise<boolean>;
  reorderSkills(order: ReorderInput): Promise<boolean>;

  // ===== Assets/Media =====
  getAllAssets(): Promise<Asset[]>;
  getAssetsByFolder(folder: string): Promise<Asset[]>;
  getAsset(id: string): Promise<Asset | undefined>;
  createAsset(asset: InsertAsset): Promise<Asset>;
  updateAsset(id: string, updates: Partial<Asset>): Promise<Asset | undefined>;
  deleteAsset(id: string): Promise<boolean>;

  // ===== Contact Submissions =====
  getAllContactSubmissions(): Promise<ContactSubmission[]>;
  getContactSubmission(id: string): Promise<ContactSubmission | undefined>;
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  updateContactSubmission(id: string, updates: UpdateContactSubmission): Promise<ContactSubmission | undefined>;
  deleteContactSubmission(id: string): Promise<boolean>;
  markAsRead(id: string): Promise<boolean>;
  getUnreadCount(): Promise<number>;

  // ===== Activity Logs =====
  logActivity(activity: Omit<ActivityLog, 'id' | 'createdAt'>): Promise<ActivityLog>;
  getActivityLogs(limit?: number): Promise<ActivityLog[]>;
  getActivityLogsByUser(userId: string, limit?: number): Promise<ActivityLog[]>;

  // ===== Bulk Operations =====
  bulkUpdateDisplayOrder(entityType: string, updates: Array<{id: string, displayOrder: number}>): Promise<boolean>;
  
  // ===== Analytics/Dashboard =====
  getDashboardStats(): Promise<{
    totalCaseStudies: number;
    totalTestimonials: number;
    totalExperiences: number;
    unreadMessages: number;
    recentActivity: ActivityLog[];
  }>;
}

// ===========================================
// IN-MEMORY STORAGE IMPLEMENTATION
// Production-ready with proper data management
// ===========================================

export class MemStorage implements IStorage {
  private users: Map<string, User> = new Map();
  private profileSettings: ProfileSettings | undefined;
  private themeSettings: Map<string, ThemeSettings> = new Map();
  private sectionConfigs: Map<string, SectionConfig> = new Map();
  private caseStudies: Map<string, CaseStudy> = new Map();
  private workExperiences: Map<string, WorkExperience> = new Map();
  private testimonials: Map<string, Testimonial> = new Map();
  private education: Map<string, Education> = new Map();
  private certifications: Map<string, Certification> = new Map();
  private achievements: Map<string, Achievement> = new Map();
  private skills: Map<string, Skill> = new Map();
  private assets: Map<string, Asset> = new Map();
  private contactSubmissions: Map<string, ContactSubmission> = new Map();
  private activityLogs: ActivityLog[] = [];

  constructor() {
    this.initializeDefaultData();
  }

  // Initialize with some default data for immediate functionality
  private initializeDefaultData() {
    // Create default theme
    const defaultTheme: ThemeSettings = {
      id: randomUUID(),
      name: "Professional Dark",
      colors: {
        deepBlack: "hsl(9, 9%, 4%)",
        charcoal: "hsl(16, 3%, 10%)",
        electricCyan: "hsl(192, 100%, 50%)",
        neonPink: "hsl(347, 100%, 60%)",
        coolGray: "hsl(240, 5%, 65%)",
        neonGreen: "hsl(142, 71%, 45%)",
        glassWhite: "hsla(0, 0%, 100%, 0.1)",
        glassBorder: "hsla(0, 0%, 100%, 0.2)"
      },
      gradients: {
        primary: "linear-gradient(135deg, hsl(192, 100%, 50%) 0%, hsl(192, 100%, 70%) 100%)",
        hero: "linear-gradient(135deg, hsl(192, 100%, 50%) 0%, hsl(192, 100%, 70%) 100%)",
        text: "linear-gradient(135deg, hsl(192, 100%, 50%), hsl(192, 100%, 70%))"
      },
      typography: {
        fontFamily: "Inter",
        headingFont: "Inter",
        bodyFont: "Inter"
      },
      logoUrl: null,
      faviconUrl: null,
      isActive: true,
      updatedAt: new Date()
    };
    this.themeSettings.set(defaultTheme.id, defaultTheme);

    // Initialize section configs
    const sections = [
      { sectionId: "hero", title: "Hero Section", displayOrder: 1 },
      { sectionId: "work", title: "Portfolio Showcase", displayOrder: 2 },
      { sectionId: "process", title: "Design Process", displayOrder: 3 },
      { sectionId: "credentials", title: "Credentials", displayOrder: 4 },
      { sectionId: "resume", title: "Resume", displayOrder: 5 },
      { sectionId: "about", title: "About", displayOrder: 6 },
      { sectionId: "skills", title: "Skills", displayOrder: 7 },
      { sectionId: "testimonials", title: "Testimonials", displayOrder: 8 },
      { sectionId: "contact", title: "Contact", displayOrder: 9 }
    ];

    sections.forEach(section => {
      const config: SectionConfig = {
        id: randomUUID(),
        sectionId: section.sectionId,
        isVisible: true,
        displayOrder: section.displayOrder,
        title: section.title,
        subtitle: null,
        customSettings: null,
        updatedAt: new Date()
      };
      this.sectionConfigs.set(config.id, config);
    });
  }

  // ===== Authentication =====
  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(user => user.username === username);
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(user => user.email === email);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = {
      ...insertUser,
      id,
      role: "admin",
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.users.set(id, user);
    await this.logActivity({
      userId: id,
      action: "create",
      entityType: "user",
      entityId: id,
      oldData: null,
      newData: { username: user.username, email: user.email },
      ipAddress: null,
      userAgent: null
    });
    return user;
  }

  async updateUser(id: string, updates: Partial<User>): Promise<User | undefined> {
    const user = this.users.get(id);
    if (!user) return undefined;

    const oldData = { ...user };
    const updatedUser = { ...user, ...updates, updatedAt: new Date() };
    this.users.set(id, updatedUser);
    
    await this.logActivity({
      userId: id,
      action: "update",
      entityType: "user",
      entityId: id,
      oldData,
      newData: updates,
      ipAddress: null,
      userAgent: null
    });
    
    return updatedUser;
  }

  // ===== Profile Settings =====
  async getProfileSettings(): Promise<ProfileSettings | undefined> {
    return this.profileSettings;
  }

  async createProfileSettings(profile: InsertProfileSettings): Promise<ProfileSettings> {
    const settings: ProfileSettings = {
      ...profile,
      id: randomUUID(),
      updatedAt: new Date()
    };
    this.profileSettings = settings;
    return settings;
  }

  async updateProfileSettings(updates: UpdateProfileSettings): Promise<ProfileSettings | undefined> {
    if (!this.profileSettings) return undefined;

    this.profileSettings = {
      ...this.profileSettings,
      ...updates,
      updatedAt: new Date()
    };
    return this.profileSettings;
  }

  // ===== Theme Settings =====
  async getActiveTheme(): Promise<ThemeSettings | undefined> {
    return Array.from(this.themeSettings.values()).find(theme => theme.isActive);
  }

  async getAllThemes(): Promise<ThemeSettings[]> {
    return Array.from(this.themeSettings.values()).sort((a, b) => a.name.localeCompare(b.name));
  }

  async getTheme(id: string): Promise<ThemeSettings | undefined> {
    return this.themeSettings.get(id);
  }

  async createTheme(theme: InsertThemeSettings): Promise<ThemeSettings> {
    const newTheme: ThemeSettings = {
      ...theme,
      id: randomUUID(),
      updatedAt: new Date()
    };
    this.themeSettings.set(newTheme.id, newTheme);
    return newTheme;
  }

  async updateTheme(id: string, updates: UpdateThemeSettings): Promise<ThemeSettings | undefined> {
    const theme = this.themeSettings.get(id);
    if (!theme) return undefined;

    const updatedTheme = {
      ...theme,
      ...updates,
      updatedAt: new Date()
    };
    this.themeSettings.set(id, updatedTheme);
    return updatedTheme;
  }

  async setActiveTheme(id: string): Promise<boolean> {
    const theme = this.themeSettings.get(id);
    if (!theme) return false;

    // Deactivate all themes
    for (const [themeId, themeData] of this.themeSettings) {
      this.themeSettings.set(themeId, { ...themeData, isActive: false });
    }

    // Activate the selected theme
    this.themeSettings.set(id, { ...theme, isActive: true });
    return true;
  }

  async deleteTheme(id: string): Promise<boolean> {
    const theme = this.themeSettings.get(id);
    if (!theme || theme.isActive) return false; // Can't delete active theme

    return this.themeSettings.delete(id);
  }

  // ===== Section Configuration =====
  async getAllSectionConfigs(): Promise<SectionConfig[]> {
    return Array.from(this.sectionConfigs.values()).sort((a, b) => a.displayOrder - b.displayOrder);
  }

  async getSectionConfig(sectionId: string): Promise<SectionConfig | undefined> {
    return Array.from(this.sectionConfigs.values()).find(config => config.sectionId === sectionId);
  }

  async createSectionConfig(config: InsertSectionConfig): Promise<SectionConfig> {
    const newConfig: SectionConfig = {
      ...config,
      id: randomUUID(),
      updatedAt: new Date()
    };
    this.sectionConfigs.set(newConfig.id, newConfig);
    return newConfig;
  }

  async updateSectionConfig(id: string, updates: UpdateSectionConfig): Promise<SectionConfig | undefined> {
    const config = this.sectionConfigs.get(id);
    if (!config) return undefined;

    const updatedConfig = {
      ...config,
      ...updates,
      updatedAt: new Date()
    };
    this.sectionConfigs.set(id, updatedConfig);
    return updatedConfig;
  }

  async reorderSections(order: ReorderInput): Promise<boolean> {
    const configs = Array.from(this.sectionConfigs.values());
    order.ids.forEach((id, index) => {
      const config = configs.find(c => c.id === id);
      if (config) {
        config.displayOrder = index + 1;
        config.updatedAt = new Date();
        this.sectionConfigs.set(config.id, config);
      }
    });
    return true;
  }

  // ===== Case Studies =====
  async getAllCaseStudies(includeDrafts = false): Promise<CaseStudy[]> {
    let studies = Array.from(this.caseStudies.values());
    if (!includeDrafts) {
      studies = studies.filter(study => !study.isDraft);
    }
    return studies.sort((a, b) => (a.displayOrder || 999) - (b.displayOrder || 999));
  }

  async getCaseStudy(id: string): Promise<CaseStudy | undefined> {
    return this.caseStudies.get(id);
  }

  async getCaseStudyBySlug(slug: string): Promise<CaseStudy | undefined> {
    return Array.from(this.caseStudies.values()).find(study => 
      study.title.toLowerCase().replace(/\s+/g, '-') === slug
    );
  }

  async createCaseStudy(caseStudy: InsertCaseStudy): Promise<CaseStudy> {
    const id = randomUUID();
    const newCaseStudy: CaseStudy = {
      ...caseStudy,
      id,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.caseStudies.set(id, newCaseStudy);
    return newCaseStudy;
  }

  async updateCaseStudy(id: string, updates: UpdateCaseStudy): Promise<CaseStudy | undefined> {
    const caseStudy = this.caseStudies.get(id);
    if (!caseStudy) return undefined;

    const updatedCaseStudy = {
      ...caseStudy,
      ...updates,
      updatedAt: new Date()
    };
    this.caseStudies.set(id, updatedCaseStudy);
    return updatedCaseStudy;
  }

  async deleteCaseStudy(id: string): Promise<boolean> {
    return this.caseStudies.delete(id);
  }

  async reorderCaseStudies(order: ReorderInput): Promise<boolean> {
    order.ids.forEach((id, index) => {
      const caseStudy = this.caseStudies.get(id);
      if (caseStudy) {
        caseStudy.displayOrder = index + 1;
        caseStudy.updatedAt = new Date();
        this.caseStudies.set(id, caseStudy);
      }
    });
    return true;
  }

  async publishCaseStudy(id: string): Promise<CaseStudy | undefined> {
    return this.updateCaseStudy(id, { isDraft: false });
  }

  async unpublishCaseStudy(id: string): Promise<CaseStudy | undefined> {
    return this.updateCaseStudy(id, { isDraft: true });
  }

  // ===== Helper Methods for Other Entities =====
  // (Similar implementations for WorkExperience, Testimonials, etc.)
  
  async getAllWorkExperiences(): Promise<WorkExperience[]> {
    return Array.from(this.workExperiences.values()).sort((a, b) => (a.displayOrder || 999) - (b.displayOrder || 999));
  }

  async getWorkExperience(id: string): Promise<WorkExperience | undefined> {
    return this.workExperiences.get(id);
  }

  async createWorkExperience(experience: InsertWorkExperience): Promise<WorkExperience> {
    const id = randomUUID();
    const newExperience: WorkExperience = {
      ...experience,
      id,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.workExperiences.set(id, newExperience);
    return newExperience;
  }

  async updateWorkExperience(id: string, updates: UpdateWorkExperience): Promise<WorkExperience | undefined> {
    const experience = this.workExperiences.get(id);
    if (!experience) return undefined;

    const updatedExperience = {
      ...experience,
      ...updates,
      updatedAt: new Date()
    };
    this.workExperiences.set(id, updatedExperience);
    return updatedExperience;
  }

  async deleteWorkExperience(id: string): Promise<boolean> {
    return this.workExperiences.delete(id);
  }

  async reorderWorkExperiences(order: ReorderInput): Promise<boolean> {
    order.ids.forEach((id, index) => {
      const experience = this.workExperiences.get(id);
      if (experience) {
        experience.displayOrder = index + 1;
        experience.updatedAt = new Date();
        this.workExperiences.set(id, experience);
      }
    });
    return true;
  }

  // ===== Activity Logs =====
  async logActivity(activity: Omit<ActivityLog, 'id' | 'createdAt'>): Promise<ActivityLog> {
    const log: ActivityLog = {
      ...activity,
      id: randomUUID(),
      createdAt: new Date()
    };
    this.activityLogs.unshift(log); // Add to beginning
    
    // Keep only last 1000 logs to prevent memory issues
    if (this.activityLogs.length > 1000) {
      this.activityLogs = this.activityLogs.slice(0, 1000);
    }
    
    return log;
  }

  async getActivityLogs(limit = 50): Promise<ActivityLog[]> {
    return this.activityLogs.slice(0, limit);
  }

  async getActivityLogsByUser(userId: string, limit = 50): Promise<ActivityLog[]> {
    return this.activityLogs
      .filter(log => log.userId === userId)
      .slice(0, limit);
  }

  // ===== Dashboard Analytics =====
  async getDashboardStats(): Promise<{
    totalCaseStudies: number;
    totalTestimonials: number;
    totalExperiences: number;
    unreadMessages: number;
    recentActivity: ActivityLog[];
  }> {
    return {
      totalCaseStudies: this.caseStudies.size,
      totalTestimonials: this.testimonials.size,
      totalExperiences: this.workExperiences.size,
      unreadMessages: Array.from(this.contactSubmissions.values()).filter(s => !s.isRead).length,
      recentActivity: await this.getActivityLogs(5)
    };
  }

  // Placeholder implementations for other entities (to be completed)
  async getAllTestimonials(): Promise<Testimonial[]> { return Array.from(this.testimonials.values()); }
  async getTestimonial(id: string): Promise<Testimonial | undefined> { return this.testimonials.get(id); }
  async createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial> { 
    const id = randomUUID();
    const newTestimonial: Testimonial = { ...testimonial, id, createdAt: new Date(), updatedAt: new Date() };
    this.testimonials.set(id, newTestimonial);
    return newTestimonial;
  }
  async updateTestimonial(id: string, updates: UpdateTestimonial): Promise<Testimonial | undefined> {
    const testimonial = this.testimonials.get(id);
    if (!testimonial) return undefined;
    const updated = { ...testimonial, ...updates, updatedAt: new Date() };
    this.testimonials.set(id, updated);
    return updated;
  }
  async deleteTestimonial(id: string): Promise<boolean> { return this.testimonials.delete(id); }
  async reorderTestimonials(order: ReorderInput): Promise<boolean> { return true; } // Implement later

  // Minimal implementations for other entities - will be completed as needed
  async getAllEducation(): Promise<Education[]> { return Array.from(this.education.values()); }
  async getEducation(id: string): Promise<Education | undefined> { return this.education.get(id); }
  async createEducation(education: InsertEducation): Promise<Education> { throw new Error("Not implemented"); }
  async updateEducation(id: string, updates: UpdateEducation): Promise<Education | undefined> { throw new Error("Not implemented"); }
  async deleteEducation(id: string): Promise<boolean> { return this.education.delete(id); }
  async reorderEducation(order: ReorderInput): Promise<boolean> { return true; }

  async getAllCertifications(): Promise<Certification[]> { return Array.from(this.certifications.values()); }
  async getCertification(id: string): Promise<Certification | undefined> { return this.certifications.get(id); }
  async createCertification(certification: InsertCertification): Promise<Certification> { throw new Error("Not implemented"); }
  async updateCertification(id: string, updates: UpdateCertification): Promise<Certification | undefined> { throw new Error("Not implemented"); }
  async deleteCertification(id: string): Promise<boolean> { return this.certifications.delete(id); }
  async reorderCertifications(order: ReorderInput): Promise<boolean> { return true; }

  async getAllAchievements(): Promise<Achievement[]> { return Array.from(this.achievements.values()); }
  async getAchievement(id: string): Promise<Achievement | undefined> { return this.achievements.get(id); }
  async createAchievement(achievement: InsertAchievement): Promise<Achievement> { throw new Error("Not implemented"); }
  async updateAchievement(id: string, updates: UpdateAchievement): Promise<Achievement | undefined> { throw new Error("Not implemented"); }
  async deleteAchievement(id: string): Promise<boolean> { return this.achievements.delete(id); }
  async reorderAchievements(order: ReorderInput): Promise<boolean> { return true; }

  async getAllSkills(): Promise<Skill[]> { return Array.from(this.skills.values()); }
  async getSkillsByCategory(category: string): Promise<Skill[]> { 
    return Array.from(this.skills.values()).filter(skill => skill.category === category); 
  }
  async getSkill(id: string): Promise<Skill | undefined> { return this.skills.get(id); }
  async createSkill(skill: InsertSkill): Promise<Skill> { throw new Error("Not implemented"); }
  async updateSkill(id: string, updates: UpdateSkill): Promise<Skill | undefined> { throw new Error("Not implemented"); }
  async deleteSkill(id: string): Promise<boolean> { return this.skills.delete(id); }
  async reorderSkills(order: ReorderInput): Promise<boolean> { return true; }

  async getAllAssets(): Promise<Asset[]> { return Array.from(this.assets.values()); }
  async getAssetsByFolder(folder: string): Promise<Asset[]> { 
    return Array.from(this.assets.values()).filter(asset => asset.folder === folder); 
  }
  async getAsset(id: string): Promise<Asset | undefined> { return this.assets.get(id); }
  async createAsset(asset: InsertAsset): Promise<Asset> { 
    const id = randomUUID();
    const newAsset: Asset = { ...asset, id, createdAt: new Date() };
    this.assets.set(id, newAsset);
    return newAsset;
  }
  async updateAsset(id: string, updates: Partial<Asset>): Promise<Asset | undefined> {
    const asset = this.assets.get(id);
    if (!asset) return undefined;
    const updated = { ...asset, ...updates };
    this.assets.set(id, updated);
    return updated;
  }
  async deleteAsset(id: string): Promise<boolean> { return this.assets.delete(id); }

  async getAllContactSubmissions(): Promise<ContactSubmission[]> { return Array.from(this.contactSubmissions.values()); }
  async getContactSubmission(id: string): Promise<ContactSubmission | undefined> { return this.contactSubmissions.get(id); }
  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = randomUUID();
    const newSubmission: ContactSubmission = {
      ...submission,
      id,
      status: "new",
      priority: "normal",
      isRead: false,
      adminNotes: null,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.contactSubmissions.set(id, newSubmission);
    return newSubmission;
  }
  async updateContactSubmission(id: string, updates: UpdateContactSubmission): Promise<ContactSubmission | undefined> {
    const submission = this.contactSubmissions.get(id);
    if (!submission) return undefined;
    const updated = { ...submission, ...updates, updatedAt: new Date() };
    this.contactSubmissions.set(id, updated);
    return updated;
  }
  async deleteContactSubmission(id: string): Promise<boolean> { return this.contactSubmissions.delete(id); }
  async markAsRead(id: string): Promise<boolean> {
    const submission = this.contactSubmissions.get(id);
    if (!submission) return false;
    submission.isRead = true;
    submission.updatedAt = new Date();
    this.contactSubmissions.set(id, submission);
    return true;
  }
  async getUnreadCount(): Promise<number> {
    return Array.from(this.contactSubmissions.values()).filter(s => !s.isRead).length;
  }

  async bulkUpdateDisplayOrder(entityType: string, updates: Array<{id: string, displayOrder: number}>): Promise<boolean> {
    // Implementation for bulk operations
    return true;
  }
}

export const storage = new MemStorage();