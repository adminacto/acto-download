# Actogeam Messenger Landing Page

## Overview

This is a full-stack landing page application for Actogeam Messenger, a messaging application. The project is built with a React frontend and Express backend, featuring download tracking, user feedback collection, and a modern, responsive design. The website now focuses on Android and Windows platforms with universal cross-platform support, featuring animated buttons and real app interface screenshots.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Framework**: Tailwind CSS for styling with shadcn/ui component library
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Animations**: Framer Motion for smooth animations and transitions

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL-backed sessions with connect-pg-simple
- **Development**: Hot module replacement with Vite integration

### Database Schema
The application uses two main tables:
- **Downloads**: Tracks download events with platform, version, user agent, and IP address
- **Feedback**: Stores user feedback with name, email, message, and rating

## Key Components

### Frontend Components
- **Landing Page**: Hero section, features showcase, download section, testimonials
- **Download Modal**: Interactive download experience with progress simulation
- **Testimonials**: Dynamic testimonial display fetched from backend
- **UI Components**: Comprehensive shadcn/ui component library integration

### Backend Services
- **Download Tracking**: API endpoints for recording and retrieving download statistics
- **Feedback Management**: Collection and retrieval of user feedback
- **Storage Layer**: In-memory storage implementation with mock data for development

### Shared Resources
- **Schema Definitions**: Shared TypeScript types and Zod validation schemas
- **Database Models**: Drizzle ORM table definitions with type inference

## Data Flow

1. **User Interactions**: Users interact with the landing page components
2. **API Requests**: Frontend makes HTTP requests to backend endpoints
3. **Data Validation**: Zod schemas validate incoming data
4. **Database Operations**: Drizzle ORM handles database interactions
5. **Response Handling**: TanStack Query manages API responses and caching
6. **UI Updates**: React components re-render with updated data

## External Dependencies

### Frontend Dependencies
- **UI Library**: Radix UI primitives for accessible components
- **Styling**: Tailwind CSS with custom design system
- **Form Handling**: React Hook Form with Zod resolvers
- **Date Management**: date-fns for date formatting
- **Animations**: Framer Motion for component animations

### Backend Dependencies
- **Database**: @neondatabase/serverless for PostgreSQL connectivity
- **ORM**: Drizzle ORM for type-safe database operations
- **Validation**: Zod for schema validation
- **Session Storage**: connect-pg-simple for PostgreSQL session storage

### Development Tools
- **Build**: Vite for frontend bundling, esbuild for backend
- **Database**: Drizzle Kit for migrations and schema management
- **Replit Integration**: Replit-specific plugins for development environment

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite bundles React application to `dist/public`
2. **Backend Build**: esbuild compiles TypeScript server to `dist/index.js`
3. **Database Setup**: Drizzle Kit manages schema migrations

### Environment Configuration
- **Development**: Uses NODE_ENV=development with hot reloading
- **Production**: NODE_ENV=production with optimized builds
- **Database**: Uses DATABASE_URL environment variable for connection

### File Structure
```
├── client/          # React frontend application
├── server/          # Express backend application
├── shared/          # Shared TypeScript types and schemas
├── migrations/      # Database migration files
└── dist/           # Built application files
```

The application is designed to be deployed on platforms that support Node.js applications with PostgreSQL databases, with specific optimizations for Replit's environment.