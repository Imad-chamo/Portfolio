// Translation system
const translations = {
  fr: {
    // Navigation
    nav: {
      about: "À propos",
      education: "Formation",
      experience: "Expérience",
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
    
    // Services Section
    services: {
      title: "Des Solutions Qui Génèrent des Résultats",
      subtitle: "Je ne crée pas juste des sites web, je construis des machines à convertir qui font croître votre business",
      webdev: {
        title: "Développement Web",
        desc: "Augmentez votre visibilité et vos ventes avec un site web moderne, rapide et optimisé pour convertir vos visiteurs en clients."
      },
      ecommerce: {
        title: "E-commerce",
        desc: "Vendez en ligne 24/7 avec une boutique qui convertit. Mes clients e-commerce voient en moyenne +40% de chiffre d'affaires après optimisation."
      },
      design: {
        title: "Identité Visuelle pour les Entreprises",
        desc: "Créez une image de marque forte et mémorable qui vous différencie de la concurrence et renforce la confiance de vos clients."
      },
      maintenance: {
        title: "Maintenance & Support",
        desc: "Expérience en maintenance préventive, mises à jour de sécurité et optimisation continue pour assurer la performance des applications."
      },
      seo: {
        title: "SEO & Performance",
        desc: "Expertise SEO et optimisation : audit technique, optimisation des performances et stratégie de référencement pour améliorer la visibilité web."
      }
    },
    
    // Skills Section
    skills: {
      title: "Ce que je peux faire pour vous",
      technologies: "Technologies",
      general: "Compétences Générales"
    },
    
    // Projects Section
    projects: {
      title: "Des Résultats Concrets Pour Mes Clients",
      subtitle: "Découvrez comment j'ai aidé mes clients à augmenter leur trafic, leurs ventes et leur visibilité",
      details: "Détails",
      viewAll: "Voir tous mes projets et leurs résultats"
    },
    
    // Testimonials Section
    testimonials: {
      title: "Témoignages Clients",
      subtitle: "Ce que mes clients disent de mon travail"
    },
    
    // Contact Section
      contact: {
        title: "Contactez-moi",
        subtitle: "Intéressé par mon profil ? N'hésitez pas à me contacter pour discuter d'opportunités professionnelles ou de collaborations"
      },
    
    // Footer
    footer: {
      description: "Développeur Informatique passionné par la création de solutions digitales innovantes et performantes.",
      navigation: "Navigation",
      aboutMe: "Moi",
      mySkills: "Mes compétences",
      services: "Mes services",
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
      education: "Education",
      experience: "Experience",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact"
    },
    
    // Hero Section
    hero: {
      greeting: "Hello, I'm",
      role: "IT Developer",
      downloadCV: "Download CV",
      contact: "Start my project for free"
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
    
    // Services Section
    services: {
      title: "Solutions That Generate Results",
      subtitle: "I don't just create websites, I build conversion machines that grow your business",
      webdev: {
        title: "Web Development",
        desc: "Increase your visibility and sales with a modern, fast website optimized to convert visitors into customers."
      },
      ecommerce: {
        title: "E-commerce",
        desc: "Sell online 24/7 with a converting store. My e-commerce clients see an average +40% revenue after optimization."
      },
      design: {
        title: "Visual Identity for Companies",
        desc: "Create a strong and memorable brand image that differentiates you from the competition and strengthens your clients' trust."
      },
      maintenance: {
        title: "Maintenance & Support",
        desc: "Regular maintenance, security updates and technical support to ensure your site's performance."
      },
      seo: {
        title: "SEO & Performance",
        desc: "Appear on Google's first page and multiply your organic traffic. Visible results in 3-6 months with a custom SEO strategy."
      }
    },
    
    // Skills Section
    skills: {
      title: "What I Can Do For You",
      technologies: "Technologies",
      general: "General Skills"
    },
    
    // Projects Section
    projects: {
      title: "Concrete Results For My Clients",
      subtitle: "Discover how I helped my clients increase their traffic, sales and visibility",
      details: "Details",
      viewAll: "View all my projects and their results"
    },
    
    // Testimonials Section
    testimonials: {
      title: "Client Testimonials",
      subtitle: "What my clients say about my work"
    },
    
    // Contact Section
    contact: {
      title: "Transform Your Vision Into Reality",
      subtitle: "Free 30-minute consultation to discuss your project and discover how I can grow your business"
    },
    
    // Footer
    footer: {
      description: "IT Developer passionate about creating innovative and high-performance digital solutions.",
      navigation: "Navigation",
      aboutMe: "Me",
      mySkills: "My Skills",
      services: "My Services",
      myProjects: "My Projects", 
      detailedPortfolio: "Detailed Portfolio",
      contactMe: "Contact Me",
      socialNetworks: "Social Networks",
      downloadCV: "Download CV",
      rights: "All rights reserved.",
      legalMentions: "Legal Mentions"
    }
  },
  
  de: {
    // Navigation
    nav: {
      about: "Über mich",
      education: "Ausbildung",
      experience: "Berufserfahrung",
      skills: "Kompetenzen",
      projects: "Projekte",
      contact: "Kontakt"
    },
    
    // Hero Section
    hero: {
      greeting: "Hallo, ich bin",
      role: "IT-Entwickler",
      downloadCV: "Lebenslauf herunterladen",
      contact: "Mein Projekt kostenlos starten"
    },
    
    // About Section
    about: {
      title: "Über mich",
      experience: {
        title: "Berufserfahrung"
      },
      education: {
        title: "Ausbildung"
      }
    },
    
    // Services Section
    services: {
      title: "Lösungen, Die Ergebnisse Generieren",
      subtitle: "Ich erstelle nicht nur Websites, ich baue Konversionsmaschinen, die Ihr Geschäft wachsen lassen",
      webdev: {
        title: "Webentwicklung",
        desc: "Steigern Sie Ihre Sichtbarkeit und Verkäufe mit einer modernen, schnellen Website, die optimiert ist, um Besucher in Kunden zu verwandeln."
      },
      ecommerce: {
        title: "E-Commerce",
        desc: "Verkaufen Sie online 24/7 mit einem konvertierenden Shop. Meine E-Commerce-Kunden sehen durchschnittlich +40% Umsatz nach Optimierung."
      },
      design: {
        title: "Visuelle Identität für Unternehmen",
        desc: "Erstellen Sie ein starkes und unvergessliches Markenimage, das Sie von der Konkurrenz abhebt und das Vertrauen Ihrer Kunden stärkt."
      },
      maintenance: {
        title: "Wartung & Support",
        desc: "Regelmäßige Wartung, Sicherheitsupdates und technischer Support, um die Leistung Ihrer Website zu gewährleisten."
      },
      seo: {
        title: "SEO & Performance",
        desc: "Erscheinen Sie auf der ersten Seite von Google und multiplizieren Sie Ihren organischen Traffic. Sichtbare Ergebnisse in 3-6 Monaten mit einer maßgeschneiderten SEO-Strategie."
      }
    },
    
    // Skills Section
    skills: {
      title: "Was Ich Für Sie Tun Kann",
      technologies: "Technologien",
      general: "Allgemeine Fähigkeiten"
    },
    
    // Projects Section
    projects: {
      title: "Konkrete Ergebnisse Für Meine Kunden",
      subtitle: "Entdecken Sie, wie ich meinen Kunden geholfen habe, ihren Traffic, ihre Verkäufe und ihre Sichtbarkeit zu steigern",
      details: "Details",
      viewAll: "Alle meine Projekte und ihre Ergebnisse ansehen"
    },
    
    // Testimonials Section
    testimonials: {
      title: "Kundenbewertungen",
      subtitle: "Was meine Kunden über meine Arbeit sagen"
    },
    
    // Contact Section
    contact: {
      title: "Verwandeln Sie Ihre Vision In Realität",
      subtitle: "Kostenlose 30-minütige Beratung, um Ihr Projekt zu besprechen und zu erfahren, wie ich Ihr Geschäft wachsen lassen kann"
    },
    
    // Footer
    footer: {
      description: "IT-Entwickler, leidenschaftlich an der Erstellung innovativer und leistungsstarker digitaler Lösungen.",
      navigation: "Navigation",
      aboutMe: "Über mich",
      mySkills: "Meine Fähigkeiten",
      services: "Meine Dienstleistungen",
      myProjects: "Meine Projekte", 
      detailedPortfolio: "Detailliertes Portfolio",
      contactMe: "Kontaktieren Sie mich",
      socialNetworks: "Soziale Netzwerke",
      downloadCV: "Lebenslauf herunterladen",
      rights: "Alle Rechte vorbehalten.",
      legalMentions: "Rechtliche Hinweise"
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
      const langNames = { fr: 'FR', en: 'EN', de: 'DE' };
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
