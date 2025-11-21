/**
 * Script de gestion du formulaire de contact sans PHP
 * Utilise EmailJS pour l'envoi d'emails (compatible GitHub Pages)
 * 
 * Configuration requise :
 * 1. Créer un compte sur https://www.emailjs.com/
 * 2. Créer un service email (Gmail, Outlook, etc.)
 * 3. Créer un template d'email
 * 4. Remplacer les valeurs ci-dessous avec vos identifiants EmailJS
 */

// Configuration EmailJS - À REMPLACER avec vos identifiants
const EMAILJS_CONFIG = {
  serviceID: 'service_chvdwfn',      // Ex: 'gmail', 'outlook', etc.
  templateID: 'template_ytklofq',    // ID du template créé dans EmailJS
  publicKey: '-i4yumns_0QOPl8RY'       // Clé publique EmailJS
};

// Initialiser EmailJS (script chargé depuis CDN)
function initEmailJS() {
  if (typeof emailjs === 'undefined') {
    // Ne logger que en développement
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      console.error('EmailJS n\'est pas chargé. Vérifiez que le script est inclus dans le HTML.');
    }
    return false;
  }
  
  // Initialiser EmailJS avec la clé publique
  emailjs.init(EMAILJS_CONFIG.publicKey);
  return true;
}

// Fonction de validation des données
function validateForm(formData) {
  const errors = [];
  
  const name = formData.get('name') || '';
  const email = formData.get('email') || '';
  const service = formData.get('service') || '';
  const message = formData.get('message') || '';
  const honeypot = formData.get('website') || '';
  
  // Vérification honeypot (anti-spam)
  if (honeypot) {
    // C'est probablement un bot, on retourne un succès factice
    return { valid: true, isBot: true };
  }
  
  // Validation du nom
  if (!name || name.trim().length < 2) {
    errors.push('Le nom doit contenir au moins 2 caractères.');
  }
  
  // Validation de l'email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errors.push('Veuillez entrer une adresse email valide.');
  }
  
  // Validation du service
  if (!service) {
    errors.push('Veuillez sélectionner un type de projet.');
  }
  
  // Validation du message
  if (!message || message.trim().length < 10) {
    errors.push('Le message doit contenir au moins 10 caractères.');
  } else if (message.length > 2000) {
    errors.push('Le message ne doit pas dépasser 2000 caractères.');
  }
  
  return {
    valid: errors.length === 0,
    errors: errors,
    isBot: false
  };
}

// Fonction d'envoi via EmailJS
async function sendEmailViaEmailJS(formData) {
  try {
    // Préparer les données pour EmailJS
    const serviceLabels = {
      'webdev': 'Développement Web',
      'ecommerce': 'E-commerce',
      'backend': 'Développement Backend',
      'design': 'Web Design',
      'maintenance': 'Maintenance & Support',
      'seo': 'SEO & Performance',
      'other': 'Autre'
    };
    
    const templateParams = {
      from_name: formData.get('name'),
      from_email: formData.get('email'),
      company: formData.get('company') || 'Non spécifié',
      service: serviceLabels[formData.get('service')] || formData.get('service'),
      budget: formData.get('budget') || 'Non spécifié',
      message: formData.get('message'),
      to_email: 'imadbussines@gmail.com', // Votre email de réception
      date: new Date().toLocaleString('fr-FR')
    };
    
    // Envoyer l'email via EmailJS
    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceID,
      EMAILJS_CONFIG.templateID,
      templateParams
    );
    
    return {
      success: true,
      message: 'Votre message a été envoyé avec succès ! Je vous répondrai dans les plus brefs délais.',
      response: response
    };
    
  } catch (error) {
    // Ne logger que en développement
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      console.error('Erreur EmailJS:', error);
    }
    return {
      success: false,
      message: 'Erreur lors de l\'envoi du message. Veuillez réessayer plus tard ou me contacter directement à imadbussines@gmail.com'
    };
  }
}

// Fonction pour afficher les erreurs de manière accessible
function showFormError(formElement, message) {
  // Supprimer les messages d'erreur existants
  const existingError = formElement.querySelector('.form-error-message');
  if (existingError) {
    existingError.remove();
  }
  
  // Créer le message d'erreur
  const errorDiv = document.createElement('div');
  errorDiv.className = 'form-error-message';
  errorDiv.setAttribute('role', 'alert');
  errorDiv.setAttribute('aria-live', 'polite');
  errorDiv.setAttribute('aria-atomic', 'true');
  errorDiv.style.cssText = 'background-color: #fee; border: 2px solid #f00; color: #c00; padding: 1rem; margin: 1rem 0; border-radius: 4px; font-weight: 500;';
  errorDiv.innerHTML = '<i class="fas fa-exclamation-circle" aria-hidden="true"></i> ' + message;
  
  // Insérer au début du formulaire
  formElement.insertBefore(errorDiv, formElement.firstChild);
  
  // Faire défiler vers le message d'erreur
  errorDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  
  // Focus sur le message d'erreur pour les lecteurs d'écran
  errorDiv.setAttribute('tabindex', '-1');
  errorDiv.focus();
  
  // Supprimer après 10 secondes (optionnel)
  setTimeout(() => {
    if (errorDiv.parentNode) {
      errorDiv.style.transition = 'opacity 0.5s';
      errorDiv.style.opacity = '0';
      setTimeout(() => errorDiv.remove(), 500);
    }
  }, 10000);
}

// Fonction pour afficher un message de succès
function showFormSuccess(formElement, message) {
  const successDiv = document.createElement('div');
  successDiv.className = 'form-success-message';
  successDiv.setAttribute('role', 'status');
  successDiv.setAttribute('aria-live', 'polite');
  successDiv.setAttribute('aria-atomic', 'true');
  successDiv.style.cssText = 'background-color: #efe; border: 2px solid #0a0; color: #060; padding: 1rem; margin: 1rem 0; border-radius: 4px; font-weight: 500;';
  successDiv.innerHTML = '<i class="fas fa-check-circle" aria-hidden="true"></i> ' + message;
  
  formElement.insertBefore(successDiv, formElement.firstChild);
  successDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Fonction principale de gestion du formulaire
async function handleContactFormSubmit(event, formElement) {
  event.preventDefault();
  
  // Désactiver le bouton pour éviter les doubles envois
  const submitBtn = formElement.querySelector('button[type="submit"]');
  const originalBtnText = submitBtn.innerHTML;
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
  
  try {
    // Récupérer les données du formulaire
    const formData = new FormData(formElement);
    
    // Valider les données
    const validation = validateForm(formData);
    
    if (validation.isBot) {
      // Bot détecté, simuler un succès
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
        window.location.href = 'merci.html?status=success';
      }, 1000);
      return;
    }
    
    if (!validation.valid) {
      // Afficher les erreurs de manière accessible
      showFormError(formElement, validation.errors.join(' '));
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
      return;
    }
    
    // Vérifier que EmailJS est initialisé
    if (!initEmailJS()) {
      throw new Error('EmailJS n\'est pas disponible');
    }
    
    // Envoyer l'email
    const result = await sendEmailViaEmailJS(formData);
    
    if (result.success) {
      // Succès - redirection vers la page de remerciement
      window.location.href = 'merci.html?status=success';
    } else {
      // Erreur - afficher le message de manière accessible
      showFormError(formElement, result.message);
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
    }
    
  } catch (error) {
    // En production, ne pas logger les erreurs dans la console
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      console.error('Erreur:', error);
    }
    showFormError(formElement, 'Une erreur est survenue. Veuillez réessayer ou me contacter directement à imadbussines@gmail.com');
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalBtnText;
  }
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
  // Charger le script EmailJS depuis le CDN
  if (typeof emailjs === 'undefined') {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
    script.onload = function() {
      initEmailJS();
      setupContactForms();
    };
    document.head.appendChild(script);
  } else {
    initEmailJS();
    setupContactForms();
  }
});

// Configuration des formulaires de contact
function setupContactForms() {
  // Formulaire sur index.html
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      handleContactFormSubmit(e, this);
    });
  }
  
  // Formulaire sur Contact.html
  const contactFormPage = document.getElementById('contactFormPage');
  if (contactFormPage) {
    contactFormPage.addEventListener('submit', function(e) {
      handleContactFormSubmit(e, this);
    });
  }
}

