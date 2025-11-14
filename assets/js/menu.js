/**
 * Hamburger Menu Toggle
 * Handles the responsive mobile menu functionality
 */
(function() {
  'use strict';

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMenu);
  } else {
    initMenu();
  }

  function initMenu() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.sidebar-nav');

    if (!hamburger || !nav) {
      return; // Exit if elements don't exist
    }

    // Toggle menu when hamburger is clicked
    hamburger.addEventListener('click', function() {
      const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';

      // Toggle active classes
      hamburger.classList.toggle('active');
      nav.classList.toggle('active');

      // Update ARIA attribute for accessibility
      hamburger.setAttribute('aria-expanded', !isExpanded);
    });

    // Close menu when clicking a link (mobile)
    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
          hamburger.classList.remove('active');
          nav.classList.remove('active');
          hamburger.setAttribute('aria-expanded', 'false');
        }
      });
    });

    // Close menu when pressing Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && nav.classList.contains('active')) {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }
})();
