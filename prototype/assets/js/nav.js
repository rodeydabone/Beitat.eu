// Mobile-Navigation: Hamburger-Button öffnet/schließt die Nav.
// Ab 1000px Breite blendet CSS die Nav ohnehin permanent ein (siehe style.css).
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var wrapper = document.getElementById('site-nav');
  if (!toggle || !wrapper) return;

  function closeMenu() {
    wrapper.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle.addEventListener('click', function () {
    var isOpen = wrapper.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Menü schließen, sobald ein Link angetippt wird (nur relevant auf Mobile)
  wrapper.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // Beim Wechsel auf Desktop-Breite sauberen Zustand behalten
  window.addEventListener('resize', function () {
    if (window.innerWidth >= 1000) closeMenu();
  });
});
