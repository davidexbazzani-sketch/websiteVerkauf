<?php
/**
 * Referenz-Endpoint für das Kontaktformular auf klassischem PHP-Hosting.
 *
 * Einsatz: diese Datei auf den Server legen (z. B. als /api/anfrage/index.php oder
 * /anfrage.php), `formEndpoint` in src/config.ts auf den Pfad setzen und unten
 * EMPFAENGER eintragen. Prüft dieselben Regeln wie das Skript im Browser,
 * ignoriert Bot-Einsendungen über das Honeypot-Feld und antwortet
 * - mit JSON (Status 200 / 422 / 500), wenn der Browser `Accept: application/json` sendet,
 * - sonst mit einer Weiterleitung auf /danke (Formular ohne JavaScript).
 *
 * Bei anderem Hosting (Netlify, Cloudflare Pages, Vercel …) dient die Datei als Vorlage
 * für eine Serverless-Funktion.
 */

declare(strict_types=1);

const EMPFAENGER   = '[hallo@DOMAIN.de]';          // Zieladresse eintragen, sobald sie existiert
const ABSENDER     = 'website@[DOMAIN.de]';        // Absender der Benachrichtigung (gleiche Domain)
const DANKE_PFAD   = '/danke';
const STARTSEITE   = '/#kontakt';

header('X-Content-Type-Options: nosniff');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    header('Allow: POST');
    exit;
}

$wantsJson = str_contains($_SERVER['HTTP_ACCEPT'] ?? '', 'application/json');

$field = static function (string $key): string {
    $v = $_POST[$key] ?? '';
    return is_string($v) ? trim($v) : '';
};

// Honeypot: ausgefüllt → still „Erfolg“ melden, aber nichts senden
if ($field('website') !== '') {
    $wantsJson ? respondJson(200, ['ok' => true]) : redirect(DANKE_PFAD);
}

$name     = $field('name');
$business = $field('business');
$phone    = $field('phone');
$email    = $field('email');
$package  = $field('package');
$message  = $field('message');
$privacy  = ($_POST['privacy'] ?? '') !== '';

$errors = [];
if ($name === '')     { $errors['name'] = 'Bitte geben Sie Ihren Namen an.'; }
if ($business === '') { $errors['business'] = 'Bitte nennen Sie den Namen Ihres Geschäfts.'; }
if ($email === '')    { $errors['email'] = 'Bitte geben Sie Ihre E-Mail-Adresse an.'; }
elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) { $errors['email'] = 'Bitte prüfen Sie die E-Mail-Adresse – zum Beispiel name@beispiel.de.'; }
if (!$privacy)        { $errors['privacy'] = 'Bitte bestätigen Sie, dass Sie die Datenschutzerklärung gelesen haben.'; }

// Header-Injection verhindern
foreach ([$name, $business, $email, $package] as $v) {
    if (preg_match('/[\r\n]/', $v)) { $errors['name'] = 'Ungültige Eingabe.'; break; }
}

if ($errors) {
    $wantsJson ? respondJson(422, ['ok' => false, 'errors' => $errors]) : redirect(STARTSEITE);
}

$subject = 'Anfrage über die Website: ' . $business;
$body = implode("\n", [
    'Name:           ' . $name,
    'Geschäft:       ' . $business,
    'Telefon:        ' . ($phone !== '' ? $phone : '–'),
    'E-Mail:         ' . $email,
    'Wunschpaket:    ' . ($package !== '' ? $package : '–'),
    '',
    'Nachricht:',
    $message !== '' ? $message : '–',
    '',
    'Datenschutz bestätigt: ja',
    'Gesendet am: ' . date('d.m.Y H:i'),
]);

$headers = [
    'From: ' . ABSENDER,
    'Reply-To: ' . $email,
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
];

$sent = @mail(EMPFAENGER, '=?UTF-8?B?' . base64_encode($subject) . '?=', $body, implode("\r\n", $headers));

if (!$sent) {
    $wantsJson ? respondJson(500, ['ok' => false]) : redirect(STARTSEITE);
}

$wantsJson ? respondJson(200, ['ok' => true]) : redirect(DANKE_PFAD);

function respondJson(int $status, array $data): never
{
    http_response_code($status);
    header('Content-Type: application/json; charset=UTF-8');
    echo json_encode($data, JSON_UNESCAPED_UNICODE);
    exit;
}

function redirect(string $path): never
{
    http_response_code(303);
    header('Location: ' . $path);
    exit;
}
