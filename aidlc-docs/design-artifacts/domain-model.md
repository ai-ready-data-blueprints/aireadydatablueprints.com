# Domain Model: AI Ready Data Blueprints Website

## Domain Overview
Static website domain focused on book promotion, content delivery, and author engagement services.

## Core Entities

### Book
**Properties**:
- Title: "AI Ready Data Blueprints"
- Subtitle: "From Raw Data to AI-Driven Innovation"
- Publisher: O'Reilly Media
- Publication Date: February 2026
- ISBN: [To be assigned]
- Cover Image: book-assets/AIReadyDataBlueprintsCover.pdf

**Behaviors**:
- Display book information
- Provide purchase links
- Show table of contents

### Author
**Properties**:
- Name: String
- Title: String (e.g., "Principal Solutions Architect")
- Organization: "AWS"
- Contact Information: Email, LinkedIn, Social Links
- Professional Photo: Image URL
- Bio: Text description

**Behaviors**:
- Display author credentials
- Provide contact methods
- Show professional profiles

### Page Content
**Properties**:
- Page Name: String
- Content Sections: Array of ContentSection
- Navigation Links: Array of NavigationLink
- Theme: Light/Dark mode state

**Behaviors**:
- Render page content
- Handle navigation
- Toggle theme mode

### Code Sample
**Properties**:
- Repository Name: String
- Repository URL: GitHub link
- Description: Text
- Prerequisites: Array of strings
- Usage Instructions: Text

**Behaviors**:
- Display repository information
- Provide access links
- Show usage guidance

### Blueprint
**Properties**:
- Title: String
- Description: Text
- File URL: PDF download link
- File Size: Number (bytes)
- Use Cases: Array of strings

**Behaviors**:
- Display blueprint information
- Handle PDF downloads
- Track download events

### Engagement Service
**Properties**:
- Service Type: Consulting/Speaking/Training
- Description: Text
- Contact Method: Email/Form
- Response Time: String
- Scope: Text description

**Behaviors**:
- Display service information
- Provide contact methods
- Set expectations

## Value Objects

### ContactInfo
- Email: String
- LinkedIn: URL
- Social Links: Array of URLs

### ThemePreference
- Mode: "light" | "dark"
- Persistence: localStorage key

### NavigationItem
- Label: String
- URL: String
- Active State: Boolean

## Domain Rules

### Book Information
- All book details must be consistent across pages
- Purchase links must open in new tabs
- Cover image must be optimized for web display

### Author Information
- All 4 authors must be displayed consistently
- Contact information must be current and verified
- Professional credentials must be accurate

### Navigation
- All pages must have consistent navigation
- Active page must be highlighted
- Mobile navigation must be touch-friendly

### Theme System
- User preference must persist across sessions
- All content must be readable in both themes
- Theme toggle must be accessible on all pages

### Responsive Design
- Mobile-first approach required
- Touch targets must be minimum 44px
- Content must be readable on all screen sizes

## Relationships

### Book → Authors (1:4)
- Book has exactly 4 authors
- Authors are displayed in specific order

### Page → Content Sections (1:Many)
- Each page contains multiple content sections
- Sections are rendered in defined order

### Author → Engagement Services (1:Many)
- Each author offers multiple service types
- Services are grouped by author

### Page → Code Samples (Many:Many)
- Code samples page displays multiple repositories
- Other pages may reference code samples

### Page → Blueprints (Many:Many)
- Blueprints page displays multiple PDF downloads
- Other pages may reference blueprints