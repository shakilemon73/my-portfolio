# Portfolio Website

## Overview

This is a modern portfolio website for Shakil Ahmed Emon, a Senior UX/UI Designer. The application showcases a professional portfolio with project case studies, skills, and contact functionality. Built as a full-stack TypeScript application with a React frontend and Express backend, it features a sleek dark theme with custom cursor interactions and glassmorphism design elements.

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