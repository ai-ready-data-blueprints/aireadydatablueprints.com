// AI Ready Data Blueprints Website - Main JavaScript

// Static Data
const bookData = {
  title: "AI Ready Data Blueprints",
  subtitle: "From Raw Data to AI-Driven Innovation",
  publisher: "O'Reilly Media",
  publicationDate: "February 2026",
  coverImage: "book-assets/AIReadyDataBlueprintsCover.pdf"
};

const authorsData = [
  {
    name: "Kien Pham",
    title: "Principal Solutions Architect at AWS",
    email: "kien@example.com",
    linkedin: "https://linkedin.com/in/kienpham"
  },
  {
    name: "Navnit Shukla", 
    title: "Sr. Specialist Solutions Architect at AWS",
    email: "navnit@example.com",
    linkedin: "https://linkedin.com/in/navnitshukla"
  },
  {
    name: "Harsha Tadiparthi",
    title: "Principal GenAI Solutions Architect at AWS", 
    email: "harsha@example.com",
    linkedin: "https://linkedin.com/in/harshatadiparthi"
  },
  {
    name: "Srikanth Sopirala",
    title: "Principal GenAI Solutions Architect at AWS",
    email: "srikanth@example.com", 
    linkedin: "https://linkedin.com/in/srikanthsopirala"
  }
];

// Theme Manager (Foundation Component)
const ThemeManager = {
  init() {
    this.applyTheme(this.getTheme());
    this.setupAutoDetection();
  },

  getTheme() {
    const stored = localStorage.getItem('theme');
    if (stored) return stored;
    
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  },

  setTheme(theme) {
    localStorage.setItem('theme', theme);
    this.applyTheme(theme);
  },

  applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
  },

  setupAutoDetection() {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) {
        this.applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  },

  toggle() {
    const current = this.getTheme();
    const newTheme = current === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }
};

// Page Router (Foundation Component)
const PageRouter = {
  init() {
    this.updateActiveNavigation();
  },

  updateActiveNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.navigation__link');
    
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        link.classList.add('navigation__link--active');
      } else {
        link.classList.remove('navigation__link--active');
      }
    });
  }
};

// External Link Handler (Foundation Component)
const ExternalLinkHandler = {
  init() {
    this.setupExternalLinks();
  },

  setupExternalLinks() {
    const externalLinks = document.querySelectorAll('a[href^="http"]');
    externalLinks.forEach(link => {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
      
      // Track external link clicks
      link.addEventListener('click', (e) => {
        this.trackExternalClick(link.href);
      });
    });
  },

  trackExternalClick(url) {
    console.log('External link clicked:', url);
    // Add analytics tracking here if needed
  }
};

// Download Handler (Foundation Component)
const DownloadHandler = {
  init() {
    this.setupDownloadLinks();
  },

  setupDownloadLinks() {
    const downloadLinks = document.querySelectorAll('[data-download]');
    downloadLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        this.handleDownload(e, link);
      });
    });
  },

  handleDownload(event, link) {
    const url = link.getAttribute('href');
    const filename = link.getAttribute('data-download');
    
    console.log('Download initiated:', filename);
    this.trackDownload(filename, url);
  },

  trackDownload(filename, url) {
    console.log('Download tracked:', filename, url);
    // Add download analytics here if needed
  }
};

// Navigation Component (Utility Component)
const NavigationComponent = {
  init() {
    this.setupMobileMenu();
    PageRouter.updateActiveNavigation();
  },

  setupMobileMenu() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const menu = document.querySelector('.mobile-menu');
    
    if (toggle && menu) {
      toggle.addEventListener('click', () => {
        menu.classList.toggle('mobile-menu--open');
        toggle.setAttribute('aria-expanded', 
          menu.classList.contains('mobile-menu--open'));
      });

      // Close menu when clicking outside
      document.addEventListener('click', (e) => {
        if (!toggle.contains(e.target) && !menu.contains(e.target)) {
          menu.classList.remove('mobile-menu--open');
          toggle.setAttribute('aria-expanded', 'false');
        }
      });
    }
  }
};

// Theme Toggle Component (Utility Component)
const ThemeToggle = {
  init() {
    this.setupToggleButton();
  },

  setupToggleButton() {
    const toggleButton = document.querySelector('.theme-toggle');
    if (toggleButton) {
      toggleButton.addEventListener('click', () => {
        ThemeManager.toggle();
        this.updateToggleButton();
      });
      
      this.updateToggleButton();
    }
  },

  updateToggleButton() {
    const button = document.querySelector('.theme-toggle');
    if (button) {
      const currentTheme = ThemeManager.getTheme();
      button.textContent = currentTheme === 'light' ? '🌙' : '☀️';
      button.setAttribute('aria-label', 
        `Switch to ${currentTheme === 'light' ? 'dark' : 'light'} mode`);
    }
  }
};

// Book Info Component (Shared Component)
const BookInfoComponent = {
  init() {
    this.renderBookInfo();
  },

  renderBookInfo() {
    const bookInfoElements = document.querySelectorAll('[data-book-info]');
    bookInfoElements.forEach(element => {
      const type = element.getAttribute('data-book-info');
      
      switch(type) {
        case 'title':
          element.textContent = bookData.title;
          break;
        case 'subtitle':
          element.textContent = bookData.subtitle;
          break;
        case 'publisher':
          element.textContent = bookData.publisher;
          break;
        case 'date':
          element.textContent = bookData.publicationDate;
          break;
        case 'cover':
          if (element.tagName === 'IMG') {
            element.src = bookData.coverImage;
            element.alt = `${bookData.title} book cover`;
          }
          break;
      }
    });
  }
};

// Author Card Component (Shared Component)
const AuthorCardComponent = {
  init() {
    this.renderAuthorCards();
  },

  renderAuthorCards() {
    const authorContainer = document.querySelector('[data-authors]');
    if (authorContainer) {
      authorContainer.innerHTML = authorsData.map(author => 
        this.createAuthorCard(author)
      ).join('');
    }
  },

  createAuthorCard(author) {
    return `
      <div class="author-card">
        <div class="author-card__photo"></div>
        <h3 class="author-card__name">${author.name}</h3>
        <p class="author-card__title">${author.title}</p>
        <div class="author-card__links">
          <a href="${author.linkedin}" class="author-card__link" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    `;
  }
};

// Main Application Initialization
document.addEventListener('DOMContentLoaded', () => {
  // Initialize foundation components
  ThemeManager.init();
  PageRouter.init();
  ExternalLinkHandler.init();
  DownloadHandler.init();
  
  // Initialize utility components
  NavigationComponent.init();
  ThemeToggle.init();
  
  // Initialize shared components
  BookInfoComponent.init();
  AuthorCardComponent.init();
  
  console.log('AI Ready Data Blueprints website initialized');
});