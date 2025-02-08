import type { ProjectDocumentation } from '../types';
import { marked } from 'marked';

const createDocContent = (content: string) => marked(content);

export const documentation: Record<string, ProjectDocumentation> = {
  'tpo-portal': {
    title: 'TPO Portal Documentation',
    sections: {
      overview: {
        title: 'Overview',
        content: createDocContent(`
# TPO Portal Documentation

## Project Overview
The Training and Placement Office (TPO) Portal is a comprehensive platform designed to streamline the placement process at Poornima College of Engineering. This documentation provides detailed information about the project's architecture, features, and implementation.

### Quick Links
- [GitHub Repository](https://github.com/example/tpo-portal)
- [Live Demo](https://tpo-portal-demo.example.com)
- [Issue Tracker](https://github.com/example/tpo-portal/issues)
        `)
      },
      introduction: {
        title: 'Introduction',
        content: createDocContent(`
# Introduction

## Purpose
The TPO Portal serves as a centralized platform for managing placement activities, connecting students with potential employers, and streamlining the recruitment process.

## Problem Statement
Traditional placement processes face several challenges:
- Manual management of student data
- Inefficient communication between stakeholders
- Difficulty in tracking placement statistics
- Limited access to resources and opportunities

## Solution
Our platform addresses these challenges by:
- Automating student data management
- Providing real-time updates and notifications
- Offering analytics and reporting tools
- Creating a resource hub for placement preparation
        `)
      },
      objectives: {
        title: 'Objectives',
        content: createDocContent(`
# Project Objectives

## Primary Goals
1. Create a user-friendly interface for placement activities
2. Streamline the recruitment process
3. Improve communication between students and recruiters
4. Provide comprehensive placement analytics

## Success Metrics
- Number of successful placements
- User engagement rates
- Recruiter satisfaction scores
- System response times
        `)
      },
      technologies: {
        title: 'Technologies',
        content: createDocContent(`
# Technologies Used

## Frontend
- React 18.3.1
- TypeScript 5.5.3
- Tailwind CSS 3.4.1
- Lucide React (for icons)

## Backend
- Node.js 18.x
- Express.js
- MongoDB
- Redis (for caching)

## Development Tools
- Vite
- ESLint
- Jest
- Cypress

## Deployment
- Docker
- GitHub Actions
- AWS
        `)
      },
      requirements: {
        title: 'Requirements',
        content: createDocContent(`
# System Requirements

## Hardware Requirements
- Processor: 2.0 GHz or higher
- RAM: 8GB minimum
- Storage: 256GB SSD recommended

## Software Requirements
- Node.js 18.x or higher
- npm 9.x or yarn 1.22.x
- Git 2.x
- Modern web browser
- Code editor (VS Code recommended)

## Development Environment
- Operating System: Windows 10/11, macOS, or Linux
- Docker Desktop
- MongoDB Community Edition
        `)
      },
      installation: {
        title: 'Installation',
        content: createDocContent(`
# Installation Guide

## Prerequisites
Before installation, ensure you have:
- Node.js and npm installed
- Git installed
- MongoDB running locally

## Step-by-step Installation
\`\`\`bash
# Clone the repository
git clone https://github.com/example/tpo-portal.git

# Navigate to project directory
cd tpo-portal

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env

# Start development server
npm run dev
\`\`\`

## Configuration
1. Update \`.env\` with your settings
2. Configure database connection
3. Set up authentication keys
        `)
      },
      features: {
        title: 'Features',
        content: createDocContent(`
# Features

## Core Features
1. User Management
   - Student profiles
   - Company profiles
   - Admin dashboard

2. Job Portal
   - Job postings
   - Application tracking
   - Resume builder

3. Interview Management
   - Scheduling system
   - Interview feedback
   - Status tracking

4. Analytics
   - Placement statistics
   - Company-wise reports
   - Branch-wise analysis

## Advanced Features
- AI-powered resume analysis
- Automated email notifications
- Resource recommendation system
- Mock interview platform
        `)
      },
      architecture: {
        title: 'Architecture',
        content: createDocContent(`
# System Architecture

## High-L

## Components
1. Frontend Layer
   - React components
   - State management
   - API integration

2. Backend Layer
   - REST API
   - Authentication
   - Business logic

3. Database Layer
   - Data models
   - Relationships
   - Indexing
        `)
      },
      database: {
        title: 'Database',
        content: createDocContent(`
# Database Design

## Schema Design
\`\`\`javascript
// User Schema
{
  id: ObjectId,
  name: String,
  email: String,
  role: Enum['student', 'company', 'admin'],
  profile: {
    // Profile details
  }
}

// Job Schema
{
  id: ObjectId,
  title: String,
  company: Ref(Company),
  requirements: Array,
  applications: Array
}
\`\`\`

## Relationships
- One-to-Many: Company to Jobs
- Many-to-Many: Students to Jobs
- One-to-One: User to Profile

## Indexing Strategy
- Compound indexes for queries
- Text indexes for search
- Geospatial indexes for location
        `)
      },
      testing: {
        title: 'Testing',
        content: createDocContent(`
# Testing Guide

## Testing Strategy
1. Unit Tests
   - Component testing
   - Service testing
   - Utility testing

2. Integration Tests
   - API endpoints
   - Database operations
   - Authentication flows

3. E2E Tests
   - User journeys
   - Critical paths
   - Edge cases

## Running Tests
\`\`\`bash
# Run unit tests
npm run test

# Run integration tests
npm run test:integration

# Run E2E tests
npm run test:e2e
\`\`\`
        `)
      },
      community: {
        title: 'Community',
        content: createDocContent(`
# Community Guidelines

## Code of Conduct
We are committed to providing a welcoming and inspiring community for all.

### Our Standards
- Be respectful and inclusive
- Welcome newcomers
- Focus on collaboration
- Maintain professionalism

## Contributing
1. Fork the repository
2. Create a feature branch
3. Submit a pull request
4. Wait for review

## Communication
- GitHub Discussions
- Discord Server
- Monthly Meetings
        `)
      },
      support: {
        title: 'Support',
        content: createDocContent(`
# Support

## Getting Help
- Check the FAQ section
- Search existing issues
- Join our Discord server
- Contact maintainers

## Reporting Issues
1. Check existing issues
2. Use issue templates
3. Provide reproduction steps
4. Include relevant logs

## Contact
- Email: support@example.com
- Discord: [Join Server]
- Twitter: @tpo_portal
        `)
      }
    }
  }
  // Add documentation for other projects...
};