// Zwei-Klick-Lösung für Google Maps (Datenschutz/Abmahnrisiko, siehe docs/Kontext.md).
// Die Karte wird NICHT beim Seitenaufruf geladen, sondern erst nach bewusstem Klick
// des Besuchers - vorher besteht keine Verbindung zu Google-Servern.
// Kein API-Key nötig (einfache iframe-Einbettung, keine Maps-/Embed-API).
document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('map-consent-btn');
  var wrap = document.getElementById('map-consent');
  if (!btn || !wrap) return;

  btn.addEventListener('click', function () {
    var iframe = document.createElement('iframe');
    iframe.src = 'https://www.google.com/maps?q=Hanauer+Stra%C3%9Fe+39,+63755+Alzenau&output=embed';
    iframe.width = '100%';
    iframe.height = '320';
    iframe.style.border = '0';
    iframe.loading = 'lazy';
    iframe.referrerPolicy = 'no-referrer-when-downgrade';
    iframe.title = 'Anfahrtskarte Naturheilpraxis Beitat (Google Maps)';
    wrap.innerHTML = '';
    wrap.className = 'map-consent map-consent-loaded';
    wrap.appendChild(iframe);
  });
});
