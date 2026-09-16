// Lightbox fuer Flyer-/Dokumentbilder: vergroessert im selben Tab statt neuem Tab,
// abgedunkelter Hintergrund, Klick ausserhalb des Bildes (oder Escape) schliesst es.
// Betrifft alle <a class="lightbox-link"> mit einem <img> darin. Links mit gleichem
// data-lightbox-group gehoeren zusammen (z. B. Vorder-/Rueckseite eines Flyers) und
// koennen im Overlay per Pfeil-Buttons/Pfeiltasten durchgeblaettert werden.
document.addEventListener('DOMContentLoaded', function () {
  var links = document.querySelectorAll('a.lightbox-link');
  if (!links.length) return;

  var overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-hidden', 'true');
  overlay.innerHTML =
    '<button type="button" class="lightbox-close" aria-label="Schließen">&times;</button>' +
    '<button type="button" class="lightbox-nav lightbox-prev" aria-label="Vorherige Seite">&#8249;</button>' +
    '<img class="lightbox-img" alt="">' +
    '<button type="button" class="lightbox-nav lightbox-next" aria-label="Nächste Seite">&#8250;</button>';
  document.body.appendChild(overlay);

  var imgEl = overlay.querySelector('.lightbox-img');
  var closeBtn = overlay.querySelector('.lightbox-close');
  var prevBtn = overlay.querySelector('.lightbox-prev');
  var nextBtn = overlay.querySelector('.lightbox-next');

  var groups = {};
  links.forEach(function (link, index) {
    var group = link.getAttribute('data-lightbox-group') || ('_single' + index);
    (groups[group] = groups[group] || []).push(link);
  });

  var currentGroup = [];
  var currentIndex = 0;

  function showIndex(index) {
    currentIndex = (index + currentGroup.length) % currentGroup.length;
    var link = currentGroup[currentIndex];
    var img = link.querySelector('img');
    imgEl.src = link.getAttribute('href');
    imgEl.alt = img ? img.alt : '';
    var multi = currentGroup.length > 1;
    prevBtn.hidden = !multi;
    nextBtn.hidden = !multi;
  }

  function openLightbox(link) {
    var group = link.getAttribute('data-lightbox-group');
    currentGroup = group ? groups[group] : [link];
    showIndex(currentGroup.indexOf(link));
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
      openLightbox(link);
    });
  });

  // Mehrseitige Bilder (z.B. Flyer Vorder-/Rückseite): Pfeil-Buttons blättern
  // per Wisch-Übergang (CSS transform) direkt im Bild um, statt die Lightbox
  // zu öffnen. Klick auf das sichtbare Bild selbst öffnet weiterhin die
  // Lightbox (Vollbild-Zoom) über den normalen a.lightbox-link-Handler oben.
  document.querySelectorAll('.doc-page-track').forEach(function (track) {
    var slides = track.children.length;
    track.style.width = (slides * 100) + '%';
    Array.prototype.forEach.call(track.children, function (slide) {
      slide.style.width = (100 / slides) + '%';
    });
    track.dataset.index = '0';
  });

  function slideDocPage(track, delta) {
    var slides = track.children.length;
    var index = (parseInt(track.dataset.index, 10) + delta + slides) % slides;
    track.dataset.index = String(index);
    track.style.transform = 'translateX(-' + (index * 100 / slides) + '%)';
  }

  document.querySelectorAll('.doc-page-nav').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var track = btn.closest('.doc-page-wrap').querySelector('.doc-page-track');
      slideDocPage(track, btn.classList.contains('doc-page-nav-next') ? 1 : -1);
    });
  });

  prevBtn.addEventListener('click', function (e) { e.stopPropagation(); showIndex(currentIndex - 1); });
  nextBtn.addEventListener('click', function (e) { e.stopPropagation(); showIndex(currentIndex + 1); });

  // Klick auf den abgedunkelten Hintergrund (nicht auf das Bild selbst) schliesst die Lightbox
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closeLightbox();
  });
  closeBtn.addEventListener('click', closeLightbox);
  document.addEventListener('keydown', function (e) {
    if (!overlay.classList.contains('is-open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showIndex(currentIndex - 1);
    if (e.key === 'ArrowRight') showIndex(currentIndex + 1);
  });
});
