document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menuToggle');
  const siteNav = document.getElementById('siteNav');
  const header = document.querySelector('.site-header');

  if (!menuToggle || !siteNav) return;

  function openMenu() {
    siteNav.classList.add('show');
    menuToggle.setAttribute('aria-expanded', 'true');
    menuToggle.setAttribute('aria-label', 'Close menu');
    menuToggle.textContent = '✕';
  }

  function closeMenu() {
    siteNav.classList.remove('show');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open menu');
    menuToggle.textContent = '☰';
  }

  menuToggle.addEventListener('click', function (event) {
    event.stopPropagation();
    if (siteNav.classList.contains('show')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  document.addEventListener('click', function (event) {
    if (!siteNav.contains(event.target) && !menuToggle.contains(event.target)) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') closeMenu();
  });

  siteNav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      closeMenu();
    });
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth >= 980) closeMenu();
  });

  window.addEventListener('scroll', function () {
    header.style.boxShadow = window.scrollY > 8 ? '0 10px 30px rgba(61,22,35,0.08)' : 'none';
  });
});
