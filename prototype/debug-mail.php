<?php
declare(strict_types=1);
ini_set('display_errors', '1');
error_reporting(E_ALL);

$logDatei = __DIR__ . '/mail-debug.log';
@unlink($logDatei);
ini_set('mail.log', $logDatei);

$erfolg = mail(
    'naturheilpraxis-beitat@web.de',
    'Diagnose 3 (mail.log)',
    'Testinhalt',
    "From: naturheilpraxis-beitat@web.de\r\nContent-Type: text/plain; charset=UTF-8"
);
echo "mail() => " . var_export($erfolg, true) . "\n---\n";

usleep(300000);
if (is_file($logDatei)) {
    echo "mail.log Inhalt:\n" . file_get_contents($logDatei) . "\n";
} else {
    echo "mail.log wurde nicht erstellt.\n";
}
