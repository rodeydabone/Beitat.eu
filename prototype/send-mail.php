<?php
/**
 * Verarbeitet das Kontaktformular auf kontakt.html und verschickt eine E-Mail
 * an die Praxis. Kein externer Dienst, kein Datenbank-Speichern – die Daten
 * werden nur zum Versand der einen E-Mail verwendet und danach nicht abgelegt.
 */

declare(strict_types=1);

$empfaenger = 'naturheilpraxis-beitat@web.de';
$absenderDomain = 'beitat.eu';
$rueckkehrseite = 'kontakt.html';

function redirect_mit_status(string $status): never
{
    global $rueckkehrseite;
    header('Location: ' . $rueckkehrseite . '?status=' . $status . '#kontaktformular');
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    redirect_mit_status('error');
}

// Honeypot: unsichtbares Feld, das nur Bots ausfuellen. Ist es befuellt,
// tun wir so, als waere alles gut gegangen, verschicken aber nichts.
if (!empty($_POST['website'] ?? '')) {
    redirect_mit_status('success');
}

$name = trim((string) ($_POST['name'] ?? ''));
$email = trim((string) ($_POST['email'] ?? ''));
$telefon = trim((string) ($_POST['phone'] ?? ''));
$nachricht = trim((string) ($_POST['message'] ?? ''));
$datenschutzAkzeptiert = ($_POST['privacy'] ?? '') === 'on';

if ($name === '' || $nachricht === '' || !$datenschutzAkzeptiert) {
    redirect_mit_status('error');
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    redirect_mit_status('error');
}

// Schutz gegen Header-Injection: Zeilenumbrueche aus Feldern entfernen,
// die in Mail-Headern (From/Reply-To) landen.
$einzeilig = static fn (string $wert): string => trim(str_replace(["\r", "\n"], '', $wert));

$name = $einzeilig($name);
$email = $einzeilig($email);
$telefon = $einzeilig($telefon);

$betreff = 'Neue Kontaktanfrage über die Website von ' . $name;

$body = "Neue Nachricht über das Kontaktformular auf beitat.eu:\n\n";
$body .= 'Name: ' . $name . "\n";
$body .= 'E-Mail: ' . $email . "\n";
if ($telefon !== '') {
    $body .= 'Telefon: ' . $telefon . "\n";
}
$body .= "\nNachricht:\n" . $nachricht . "\n";

$headers = [
    'From: Kontaktformular <formular@' . $absenderDomain . '>',
    'Reply-To: ' . $name . ' <' . $email . '>',
    'Content-Type: text/plain; charset=UTF-8',
];

// @-Operator: verhindert, dass eine mail()-Warnung als HTML ausgegeben wird
// und damit den header()-Redirect in redirect_mit_status() verhindert
// ("headers already sent"). Der Erfolg wird ohnehin ueber den Rueckgabewert geprueft.
$erfolg = @mail($empfaenger, $betreff, $body, implode("\r\n", $headers));

redirect_mit_status($erfolg ? 'success' : 'error');
