// Filtert die Therapieverfahren-Gruppen auf therapieangebot.html nach Anwendungsart.
// Kein Beschwerdebild-Bezug (rechtlich bewusst getrennt, siehe Hinweistext auf der Seite).
document.addEventListener('DOMContentLoaded', function () {
  var fieldset = document.getElementById('verfahren-filter');
  if (!fieldset) return;

  var checkboxes = fieldset.querySelectorAll('input[type="checkbox"]');
  var groups = document.querySelectorAll('.verfahren-group');
  var emptyNote = document.getElementById('verfahren-empty-note');
  var resetBtn = document.getElementById('verfahren-filter-reset');

  function applyFilter() {
    var active = Array.prototype.filter.call(checkboxes, function (cb) { return cb.checked; })
      .map(function (cb) { return cb.value; });

    var visibleCount = 0;
    groups.forEach(function (group) {
      var show = active.length === 0 || active.indexOf(group.getAttribute('data-cat')) !== -1;
      group.hidden = !show;
      if (show) visibleCount++;
    });

    if (emptyNote) emptyNote.hidden = visibleCount !== 0;
  }

  checkboxes.forEach(function (cb) {
    cb.addEventListener('change', applyFilter);
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', function () {
      checkboxes.forEach(function (cb) { cb.checked = false; });
      applyFilter();
    });
  }

  applyFilter();
});
