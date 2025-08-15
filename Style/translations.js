// Translation system
const translations = {
  fr: {
    // Navigation
    nav: {
      about: "À propos",
      skills: "Compétences", 
      projects: "Projets",
      contact: "Contact"
    },
    
    // Hero Section
    hero: {
      greeting: "Bonjour, je suis",
      role: "Développeur Informatique",
      downloadCV: "Télécharger CV",
      contact: "Me contacter"
    },
    
    // About Section
    about: {
      title: "À propos de moi",
      experience: {
        title: "Expérience Professionnelle"
      },
      education: {
        title: "Formation"
      }
    },
    
    // Skills Section
    skills: {
      title: "Mes Compétences",
      technologies: "Technologies",
      general: "Compétences Générales"
    },
    
    // Projects Section
    projects: {
      title: "Mes Projets",
      subtitle: "Découvrez une sélection de mes réalisations récentes",
      details: "Détails",
      viewAll: "Voir tous mes projets"
    },
    
    // Contact Section
    contact: {
      title: "Contactez-moi",
      subtitle: "N'hésitez pas à me contacter pour discuter de vos projets ou opportunités"
    },
    
    // Footer
    footer: {
      description: "Développeur Informatique passionné par la création de solutions digitales innovantes et performantes.",
      navigation: "Navigation",
      aboutMe: "À propos de moi",
      mySkills: "Mes compétences",
      myProjects: "Mes projets",
      detailedPortfolio: "Portfolio détaillé",
      contactMe: "Me contacter",
      socialNetworks: "Réseaux Sociaux",
      downloadCV: "Télécharger CV",
      rights: "Tous droits réservés.",
      legalMentions: "Mentions légales"
    }
  },
  
  en: {
    // Navigation
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects", 
      contact: "Contact"
    },
    
    // Hero Section
    hero: {
      greeting: "Hello, I'm",
      role: "Software Developer",
      downloadCV: "Download CV",
      contact: "Contact me"
    },
    
    // About Section
    about: {
      title: "About me",
      experience: {
        title: "Professional Experience"
      },
      education: {
        title: "Education"
      }
    },
    
    // Skills Section
    skills: {
      title: "My Skills",
      technologies: "Technologies",
      general: "General Skills"
    },
    
    // Projects Section
    projects: {
      title: "My Projects",
      subtitle: "Discover a selection of my recent achievements",
      details: "Details",
      viewAll: "View all my projects"
    },
    
    // Contact Section
    contact: {
      title: "Contact me",
      subtitle: "Feel free to contact me to discuss your projects or opportunities"
    },
    
    // Footer
    footer: {
      description: "Software Developer passionate about creating innovative and high-performance digital solutions.",
      navigation: "Navigation",
      aboutMe: "About me",
      mySkills: "My skills",
      myProjects: "My projects", 
      detailedPortfolio: "Detailed portfolio",
      contactMe: "Contact me",
      socialNetworks: "Social Networks",
      downloadCV: "Download CV",
      rights: "All rights reserved.",
      legalMentions: "Legal mentions"
    }
  }
};

// Language management
class LanguageManager {
  constructor() {
    this.currentLanguage = localStorage.getItem('preferred-language') || 'fr';
    this.init();
  }
  
  init() {
    this.updateLanguageDisplay();
    this.setupEventListeners();
    this.translate();
    this.updateDirection();
  }
  
  setupEventListeners() {
    // Language button toggle
    const langBtn = document.getElementById('currentLang');
    const langOptions = document.getElementById('langOptions');
    const languageDropdown = document.querySelector('.language-dropdown');
    
    if (langBtn && langOptions) {
      langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        languageDropdown.classList.toggle('active');
      });
      
      // Close dropdown when clicking outside
      document.addEventListener('click', () => {
        languageDropdown.classList.remove('active');
      });
      
      // Language selection
      const langOptionElements = document.querySelectorAll('.lang-option');
      langOptionElements.forEach(option => {
        option.addEventListener('click', (e) => {
          e.stopPropagation();
          const selectedLang = option.getAttribute('data-lang');
          this.changeLanguage(selectedLang);
          languageDropdown.classList.remove('active');
        });
      });
    }
  }
  
  changeLanguage(lang) {
    if (translations[lang]) {
      this.currentLanguage = lang;
      localStorage.setItem('preferred-language', lang);
      this.updateLanguageDisplay();
      this.translate();
      this.updateDirection();
    }
  }
  
  updateLanguageDisplay() {
    const currentLangBtn = document.querySelector('#currentLang span');
    if (currentLangBtn) {
      const langNames = { fr: 'FR', en: 'EN' };
      currentLangBtn.textContent = langNames[this.currentLanguage];
    }
  }
  
  updateDirection() {
    const htmlElement = document.documentElement;
    htmlElement.setAttribute('dir', 'ltr');
    htmlElement.setAttribute('lang', this.currentLanguage);
  }
  
  translate() {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
      const key = element.getAttribute('data-translate');
      const translation = this.getNestedTranslation(translations[this.currentLanguage], key);
      
      if (translation) {
        element.textContent = translation;
      }
    });
  }
  
  getNestedTranslation(obj, path) {
    return path.split('.').reduce((current, key) => current && current[key], obj);
  }
  
  getCurrentLanguage() {
    return this.currentLanguage;
  }
}

// Initialize language manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.languageManager = new LanguageManager();
});

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { translations, LanguageManager };
}
