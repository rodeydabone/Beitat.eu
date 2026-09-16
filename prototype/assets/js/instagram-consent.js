// Zwei-Klick-Lösung für eingebettete Instagram-Beiträge (Datenschutz, gleiches Prinzip
// wie maps-consent.js): Der Beitrag wird NICHT beim Seitenaufruf geladen, sondern erst
// nach bewusstem Klick des Besuchers - vorher besteht keine Verbindung zu Instagram-Servern.
document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('instagram-embed-consent-btn');
  var wrap = document.getElementById('instagram-embed-consent');
  if (!btn || !wrap) return;

  btn.addEventListener('click', function () {
    var permalink = btn.getAttribute('data-permalink');
    var blockquote = document.createElement('blockquote');
    blockquote.className = 'instagram-media';
    blockquote.setAttribute('data-instgrm-permalink', permalink);
    blockquote.setAttribute('data-instgrm-version', '14');
    wrap.innerHTML = '';
    wrap.className = 'instagram-embed-consent instagram-embed-consent-loaded';
    wrap.appendChild(blockquote);

    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.instagram.com/embed.js';
    document.body.appendChild(script);
  });
});
