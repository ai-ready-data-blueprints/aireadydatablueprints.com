# Requirements Document: AI Ready Data Blueprints Website

## Project Overview
A static HTML5 website for promoting the O'Reilly book "AI Ready Data Blueprints: From Raw Data to AI-Driven Innovation" by four AWS Solutions Architects.

## Book Information
- **Title**: AI Ready Data Blueprints
- **Subtitle**: From Raw Data to AI-Driven Innovation
- **Publisher**: O'Reilly Media
- **Publication Date**: February 2026
- **Purchase Locations**: Amazon and O'Reilly
- **Cover Asset**: Available at `book-assets/AIReadyDataBlueprintsCover.pdf`

## Authors
1. **Kien Pham** - Principal Solutions Architect at AWS
2. **Navnit Shukla** - Sr. Specialist Solutions Architect at AWS  
3. **Harsha Tadiparthi** - Principal GenAI Solutions Architect at AWS
4. **Srikanth Sopirala** - Principal GenAI Solutions Architect at AWS

## Functional Requirements

### Core Pages
1. **Home Page**
   - Book overview and benefits
   - Author credentials and expertise
   - Table of contents preview
   - Hero section with book cover
   - Call-to-action for purchasing

2. **How to Buy the Book**
   - Purchase links to Amazon and O'Reilly
   - Pricing information
   - Available formats (print, digital)

3. **Code Samples**
   - GitHub repository links
   - Brief descriptions of code examples
   - Instructions for accessing samples

4. **Download Blueprints**
   - PDF documents available for download
   - Blueprint descriptions and use cases
   - Download tracking/analytics

5. **Contact Authors**
   - Author contact information display
   - Social media links
   - Professional profiles/LinkedIn

6. **Request for Engagement**
   - Information about available services:
     - Consulting services
     - Speaking engagements  
     - Training workshops
   - Contact information for engagement requests

### User Interface Requirements
- **Design Style**: Modern, flat UI, clean aesthetic
- **Responsive Design**: Mobile-friendly across all devices
- **Theme Support**: Dark and light mode toggle
- **Navigation**: Clear, intuitive menu structure
- **Accessibility**: WCAG 2.1 AA compliance

### Content Management
- **Static Content**: No CMS required
- **Updates**: Technical team members will handle content updates
- **Version Control**: All content managed through Git

## Non-Functional Requirements

### Performance
- **Loading**: No specific performance requirements
- **Optimization**: Standard web optimization practices
- **Caching**: Browser caching for static assets

### Technical Stack
- **Frontend**: HTML5, CSS3, JavaScript (vanilla or minimal framework)
- **Hosting**: GitHub Pages
- **Build**: GitHub Actions for automated deployment
- **Domain**: https://aireadydatablueprints.com/

### Build and Deployment
- **CI/CD**: GitHub Actions workflow
- **Build Process**: Basic build and deploy (no advanced testing)
- **Deployment Target**: GitHub Pages
- **Branch Strategy**: Deploy from main branch

### Security and Privacy
- **Analytics**: No tracking required
- **Forms**: No contact forms needed
- **Data Collection**: Minimal to none
- **HTTPS**: Enforced via GitHub Pages

### Browser Support
- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest 2 versions)
- **Mobile Browsers**: iOS Safari, Chrome Mobile
- **Fallbacks**: Graceful degradation for older browsers

## Technical Constraints
- **Static Site**: No server-side processing required
- **GitHub Pages Limitations**: Jekyll-compatible or pure HTML/CSS/JS
- **File Size**: Optimize images and assets for web delivery
- **SEO**: Basic meta tags and structured data

## Success Criteria
- **Functionality**: All pages load and display correctly
- **Responsiveness**: Works on mobile, tablet, and desktop
- **Theme Toggle**: Dark/light mode functions properly
- **Deployment**: Automated build and deploy via GitHub Actions
- **Accessibility**: Basic accessibility standards met
- **Cross-browser**: Consistent experience across supported browsers

## Out of Scope
- Content Management System
- User authentication/login
- E-commerce functionality
- Blog or news section
- Advanced analytics or tracking
- Performance testing in CI/CD
- Accessibility testing automation
- HTML validation in build process