document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
    // close the menu after tapping any link in it
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }

  const hero = document.getElementById('hero');
  const heroGlow = document.getElementById('hero-glow');
  if (hero && heroGlow) {
    hero.addEventListener('mousemove', (e) => {
      const rect = hero.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      heroGlow.style.background = `radial-gradient(circle 380px at ${x}% ${y}%, rgba(79,168,216,0.18), transparent 70%)`;
    });
    hero.addEventListener('mouseleave', () => {
      heroGlow.style.background = 'radial-gradient(circle 380px at 50% 40%, rgba(79,168,216,0.16), transparent 70%)';
    });
  }

  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));

  const formButtons = document.querySelectorAll('.submit-btn:not([data-live])');
  formButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      alert('Form submitted (placeholder — connect this to a real backend or form service like Formspree/Airtable).');
    });
  });
});
