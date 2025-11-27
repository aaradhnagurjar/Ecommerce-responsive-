// Mobile nav toggle
const mobileBtn = document.getElementById('mobile-menu');
const navbar = document.getElementById('navbar');

mobileBtn && mobileBtn.addEventListener('click', () => {
  if (!navbar) return;
  const isShown = getComputedStyle(navbar).display !== 'none';
  navbar.style.display = isShown ? 'none' : 'block';
});

// Close nav when clicking outside (mobile)
document.addEventListener('click', (e) => {
  if (!navbar) return;
  const target = e.target;
  if (window.innerWidth <= 768 && !navbar.contains(target) && !mobileBtn.contains(target)) {
    navbar.style.display = 'none';
  }
});

// Auto focus email input on page load (non-intrusive)
window.addEventListener('load', () => {
  const emailField = document.getElementById('email-address-input');
  if (emailField) {
    try { emailField.focus({preventScroll: true}); } catch(e) { emailField.focus(); }
  }
});
