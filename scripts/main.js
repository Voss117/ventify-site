// Minimal JS for Ventify marketing site
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isHidden = getComputedStyle(navLinks).display === 'none';
      navLinks.style.display = isHidden ? 'flex' : 'none';
    });
  }

  const contactForm = document.querySelector('#contact-form');
  const contactStatus = document.querySelector('#contact-status');
  if (contactForm && contactStatus) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      contactStatus.textContent = 'Sending…';
      const formData = new FormData(contactForm);
      const action = contactForm.getAttribute('action');
      try {
        const res = await fetch(action, { method: 'POST', body: formData, headers: { 'Accept': 'application/json' } });
        if (res.ok) {
          contactStatus.textContent = 'Thanks! We will get back to you soon.';
          contactForm.reset();
        } else {
          contactStatus.textContent = 'Something went wrong. Please try again later or use the mail link.';
        }
      } catch (_) {
        contactStatus.textContent = 'Network error. Please try again later.';
      }
    });
  }
});


