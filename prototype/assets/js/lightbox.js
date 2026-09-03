// Lightbox fuer Flyer-/Dokumentbilder: vergroessert im selben Tab statt neuem Tab,
// abgedunkelter Hintergrund, Klick ausserhalb des Bildes (oder Escape) schliesst es.
// Betrifft alle <a class="lightbox-link"> mit einem <img> darin.
document.addEventListener('DOMContentLoaded', function () {
  var links = document.querySelectorAll('a.lightbox-link');
  if (!links.length) return;

  var overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-hidden', 'true');
  overlay.innerHTML = '<button type="button" class="lightbox-close" aria-label="Schließen">&times;</button><img class="lightbox-img" alt="">';
  document.body.appendChild(overlay);

  var imgEl = overlay.querySelector('.lightbox-img');
  var closeBtn = overlay.querySelector('.lightbox-close');

  function openLightbox(href, alt) {
    imgEl.src = href;
    imgEl.alt = alt || '';
    overlay.classList.add('is-open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lightbox-active');
  }

  function closeLightbox() {
    overlay.classList.remove('is-open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('lightbox-active');
    imgEl.src = '';
  }

  links.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var img = link.querySelector('img');
      openLightbox(link.getAttribute('href'), img ? img.alt : '');
    });
  });

  // Klick auf den abgedunkelten Hintergrund (nicht auf das Bild selbst) schliesst die Lightbox
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closeLightbox();
  });
  closeBtn.addEventListener('click', closeLightbox);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay.classList.contains('is-open')) closeLightbox();
  });
});
