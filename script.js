document.addEventListener('DOMContentLoaded', () => {
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
