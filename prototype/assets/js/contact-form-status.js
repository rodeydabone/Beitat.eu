// Zeigt nach dem Redirect von send-mail.php eine Erfolgs- oder Fehlermeldung
// an (Status kommt als ?status=success/error in der URL) und raeumt die URL
// danach wieder auf, damit ein Reload nicht erneut die Meldung zeigt.
document.addEventListener('DOMContentLoaded', function () {
  var params = new URLSearchParams(window.location.search);
  var status = params.get('status');
  if (!status) return;

  var successEl = document.getElementById('form-status-success');
  var errorEl = document.getElementById('form-status-error');
  if (status === 'success' && successEl) successEl.hidden = false;
  if (status === 'error' && errorEl) errorEl.hidden = false;

  params.delete('status');
  var neueUrl = window.location.pathname + (params.toString() ? '?' + params.toString() : '') + window.location.hash;
  window.history.replaceState({}, '', neueUrl);
});
