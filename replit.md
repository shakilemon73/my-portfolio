# Portfolio Website

## Overview

This is a world-class UX/UI portfolio website for Shakil Ahmed Emon, a Senior UX/UI Designer with 6+ years of experience. The application showcases a professional portfolio with comprehensive project case studies, design process methodology, client testimonials, and contact functionality. Built as a full-stack TypeScript application with a React frontend and Express backend, it features a sleek dark theme with custom cursor interactions, glassmorphism design elements, and an advanced UX Enhancement System that automatically applies expert design principles.

## Recent Changes (January 2025)

### Major Feature Additions
- **UX Enhancement System**: Automatic application of world-class UX principles from experts like Don Norman, Steve Krug, Luke Wroblewski, and others
- **Design Process Section**: Interactive timeline showcasing systematic UX methodology with detailed process steps
- **Case Study Modal**: Comprehensive project showcase with detailed process, metrics, and visual documentation
- **Testimonials Section**: Rotating client testimonials with professional feedback
- **Enhanced Navigation**: Added "Process" section and improved mobile experience

### Design Philosophy Integration
- Applied principles from Don Norman's "The Design of Everyday Things" (discoverability, feedback, constraints)
- Implemented Steve Krug's "Don't Make Me Think" (scannability, clarity, navigation)
- Followed Luke Wroblewski's mobile-first approach (44px touch targets, form optimization)
- Integrated Aarron Walter's emotional design principles (delight, personality)
- Applied inclusive design principles for WCAG AA compliance

### Technical Enhancements
- Real-time UX compliance validation system
- Automatic touch target optimization
- Enhanced accessibility features (keyboard navigation, screen reader support)
- Performance optimizations for smooth animations and interactions

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React 18** with TypeScript for component-based UI development
- **Vite** as the build tool and development server for fast HMR and optimized builds
- **Wouter** for lightweight client-side routing instead of React Router
- **TanStack Query** for server state management and data fetching
- **Tailwind CSS** with custom design tokens for styling and responsive design
- **shadcn/ui** component library providing accessible, customizable UI components

The frontend follows a component-driven architecture with reusable UI components, custom hooks for shared logic, and a clean separation between presentation and business logic.

### Backend Architecture
- **Express.js** server with TypeScript for API endpoints
- **Memory-based storage** with an interface-driven design that can be easily swapped for database persistence
- **Middleware-based request handling** with logging, error handling, and CORS support
- **Development/production environment separation** with Vite integration in development

The backend uses a repository pattern with an `IStorage` interface, currently implemented with in-memory storage but designed to be easily replaced with database implementations.

### Database Schema
- **Drizzle ORM** configured for PostgreSQL with type-safe schema definitions
- **User table** with basic authentication fields (id, username, password)
- **Migration system** using Drizzle Kit for schema changes
- Database connection ready for Neon Database serverless PostgreSQL

### UI/UX Design System
- **Custom design tokens** with CSS variables for consistent theming
- **Glass morphism effects** and custom cursor interactions for modern aesthetics
- **Mobile-first responsive design** with Tailwind breakpoints
- **Accessibility-first approach** using Radix UI primitives
- **Animation system** with CSS transitions and scroll-based interactions

### Build and Deployment
- **ESM module system** throughout the application
- **Separate build processes** for client (Vite) and server (esbuild)
- **Development tooling** with TypeScript checking, hot reload, and error overlays
- **Production optimization** with code splitting and asset optimization

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: PostgreSQL serverless database connectivity
- **drizzle-orm**: Type-safe ORM for database operations
- **express**: Node.js web framework for API server
- **react & react-dom**: Frontend framework and rendering
- **typescript**: Type safety and development tooling

### UI Component Libraries
- **@radix-ui/***: Comprehensive set of accessible UI primitives (30+ components)
- **lucide-react**: Modern icon library with React components
- **tailwindcss**: Utility-first CSS framework with custom configuration

### Development and Build Tools
- **vite**: Frontend build tool and development server
- **esbuild**: Fast JavaScript bundler for server build
- **tsx**: TypeScript execution for development
- **drizzle-kit**: Database migration and schema management tool

### Utility Libraries
- **@tanstack/react-query**: Server state management and caching
- **@hookform/resolvers**: Form validation with Zod integration
- **clsx & tailwind-merge**: Conditional CSS class utilities
- **date-fns**: Date manipulation and formatting
- **wouter**: Lightweight React router alternative

### Specialized Features
- **cmdk**: Command palette component for enhanced UX
- **embla-carousel-react**: Touch-friendly carousel component
- **vaul**: Drawer component for mobile interactions
- **input-otp**: One-time password input component