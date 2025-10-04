# System Design: AI Ready Data Blueprints Website

## Architecture Overview

### Design Philosophy
Feature-based monolithic architecture using pure HTML5/CSS3/JavaScript with BEM methodology, mobile-first responsive design, and CSS custom properties for theming.

### Key Design Principles
- **Simplicity**: No build tools or frameworks - direct file deployment
- **Performance**: Minimal overhead with optimized static assets
- **Maintainability**: BEM methodology and modular component structure
- **Accessibility**: WCAG 2.1 AA compliance with semantic HTML
- **Responsiveness**: Mobile-first design with progressive enhancement

## System Architecture

### Technology Stack
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Styling**: BEM methodology with CSS custom properties
- **Build Process**: None - direct file deployment
- **Hosting**: GitHub Pages
- **CI/CD**: GitHub Actions for automated deployment

### File Structure
```
/
├── index.html                 # Home page
├── how-to-buy.html           # Purchase information
├── code-samples.html         # GitHub repositories
├── download-blueprints.html  # PDF downloads
├── contact-authors.html      # Author contact info
├── request-engagement.html   # Service engagement
├── assets/
│   ├── css/
│   │   ├── main.css         # Global styles and CSS variables
│   │   ├── components/      # Component-specific styles
│   │   └── pages/          # Page-specific styles
│   ├── js/
│   │   ├── main.js         # Core functionality
│   │   ├── components/     # Component scripts
│   │   └── pages/         # Page-specific scripts
│   ├── images/            # Optimized images
│   └── downloads/         # PDF blueprints
├── book-assets/           # Book cover and related assets
└── .github/
    └── workflows/
        └── deploy.yml     # GitHub Actions deployment
```

## Component Architecture

### Core Components (Foundation Layer)
1. **Theme Manager**: CSS custom properties management
2. **Page Router**: Simple client-side navigation
3. **Book Info Component**: Reusable book information
4. **Download Handler**: PDF download management
5. **External Link Handler**: External link management

### UI Components (Interface Layer)
6. **Navigation Component**: Main site navigation
7. **Header Component**: Site header with branding
8. **Footer Component**: Site footer with links
9. **Author Card Component**: Author information display
10. **Theme Toggle**: Dark/light mode switch
11. **Mobile Menu**: Responsive navigation menu

### Page Components (Application Layer)
12. **Home Page**: Landing page with book overview
13. **How to Buy Page**: Purchase options and links
14. **Code Samples Page**: GitHub repository access
15. **Download Blueprints Page**: PDF blueprint downloads
16. **Contact Authors Page**: Author contact information
17. **Request Engagement Page**: Service engagement details

## Design System

### CSS Architecture (BEM Methodology)
```css
/* Block */
.navigation { }

/* Element */
.navigation__item { }
.navigation__link { }

/* Modifier */
.navigation__item--active { }
.navigation__link--external { }
```

### CSS Custom Properties (Theme System)
```css
:root {
  /* Light theme (default) */
  --color-primary: #2563eb;
  --color-background: #ffffff;
  --color-text: #1f2937;
  --color-surface: #f9fafb;
}

[data-theme="dark"] {
  /* Dark theme */
  --color-primary: #3b82f6;
  --color-background: #111827;
  --color-text: #f9fafb;
  --color-surface: #1f2937;
}
```

### Responsive Breakpoints (Mobile-First)
```css
/* Mobile: 320px - 767px (default) */
/* Tablet: 768px - 1023px */
@media (min-width: 768px) { }

/* Desktop: 1024px - 1279px */
@media (min-width: 1024px) { }

/* Large Desktop: 1280px+ */
@media (min-width: 1280px) { }
```

## Data Management

### Static Data Structure
```javascript
// Book information
const bookData = {
  title: "AI Ready Data Blueprints",
  subtitle: "From Raw Data to AI-Driven Innovation",
  publisher: "O'Reilly Media",
  publicationDate: "February 2026",
  coverImage: "book-assets/AIReadyDataBlueprintsCover.pdf"
};

// Author information
const authorsData = [
  {
    name: "Kien Pham",
    title: "Principal Solutions Architect at AWS",
    // ... other properties
  }
  // ... other authors
];
```

### Local Storage Management
```javascript
// Theme preference persistence
const themeManager = {
  getTheme: () => localStorage.getItem('theme') || 'light',
  setTheme: (theme) => localStorage.setItem('theme', theme),
  applyTheme: (theme) => document.documentElement.setAttribute('data-theme', theme)
};
```

## Performance Optimization

### Asset Optimization
- **Images**: WebP format with fallbacks, optimized sizes
- **CSS**: Minified production files, critical CSS inlined
- **JavaScript**: Minified files, lazy loading for non-critical scripts
- **Fonts**: System fonts with web font fallbacks

### Loading Strategy
- **Critical Path**: Inline critical CSS, defer non-critical JavaScript
- **Progressive Enhancement**: Core functionality works without JavaScript
- **Lazy Loading**: Images and non-critical resources loaded on demand

### Caching Strategy
```html
<!-- Cache control for static assets -->
<meta http-equiv="Cache-Control" content="public, max-age=31536000">
```

## Security Considerations

### Content Security Policy
```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; 
               script-src 'self' 'unsafe-inline'; 
               style-src 'self' 'unsafe-inline'; 
               img-src 'self' data:;">
```

### External Link Security
```javascript
// Add security attributes to external links
link.setAttribute('rel', 'noopener noreferrer');
link.setAttribute('target', '_blank');
```

## Accessibility Features

### Semantic HTML Structure
- Proper heading hierarchy (h1 → h6)
- Semantic landmarks (header, nav, main, footer)
- ARIA labels and descriptions where needed

### Keyboard Navigation
- Tab order management
- Focus indicators
- Skip links for screen readers

### Screen Reader Support
- Alt text for all images
- ARIA labels for interactive elements
- Proper form labeling

## Deployment Architecture

### GitHub Actions Workflow
```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./
```

### Domain Configuration
- Custom domain: aireadydatablueprints.com
- HTTPS enforcement via GitHub Pages
- DNS configuration for custom domain

## Monitoring and Analytics

### Performance Monitoring
- Core Web Vitals tracking
- Page load time monitoring
- Mobile performance optimization

### User Experience Tracking
- Download event tracking
- External link click tracking
- Theme preference analytics (privacy-compliant)

## Scalability Considerations

### Content Updates
- Modular content structure for easy updates
- Centralized data management for consistency
- Version control for all content changes

### Future Enhancements
- Blog section capability
- Newsletter signup integration
- Enhanced search functionality
- Multi-language support preparation

## Design Trade-offs

### Chosen Approach Benefits
- **No Build Complexity**: Direct deployment, no toolchain maintenance
- **Fast Performance**: Minimal overhead, optimized loading
- **Easy Maintenance**: Simple file structure, clear organization
- **GitHub Pages Compatible**: Perfect fit for static hosting

### Accepted Limitations
- **Manual Optimization**: No automated asset processing
- **Limited Interactivity**: Vanilla JavaScript constraints
- **Single Deployment**: All pages deploy together (acceptable for static site)

## Integration Points

### External Services
- **GitHub**: Repository links for code samples
- **Amazon/O'Reilly**: Purchase link integration
- **Social Media**: Author profile links
- **Email**: Contact information display

### Internal Integrations
- **Theme System**: Consistent across all components
- **Navigation**: Unified routing and state management
- **Content Management**: Centralized data for consistency