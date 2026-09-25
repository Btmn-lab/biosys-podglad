<?php
// Grafiki PNG rysowane w GD: karta do podglądu posta na LinkedIn (1200×627)
// i odznaka programu (600×600, obraz Open Badges).
//
// Dlaczego PNG z serwera, a nie SVG albo zrzut HTML: LinkedIn w og:image
// przyjmuje tylko rastry, a GD jest na każdym hostingu PHP. Rysujemy w 2–3×
// większej skali i zmniejszamy — GD nie wygładza krawędzi kół, zmniejszenie
// robi to za niego.
declare(strict_types=1);

namespace BioSys\Certyfikat;

use GdImage;

const OG_SZER = 1200;
const OG_WYS = 627;
// Zmiana wyglądu grafik → podbij wersję, żeby pamięć podręczna się odświeżyła.
const WERSJA_GRAFIKI = '1';

const GRANAT = '#0F172A';
const LUPEK = '#334155';
const SZARY = '#64748B';
const CZERWONY = '#DC2626';

function font(string $nazwa): string
{
    return LIB . '/fonts/' . $nazwa . '.ttf';
}

/** @return array{int,int,int} */
function rgb(string $hex): array
{
    $h = ltrim($hex, '#');
    return [hexdec(substr($h, 0, 2)), hexdec(substr($h, 2, 2)), hexdec(substr($h, 4, 2))];
}

/** Kolor rozjaśniony w stronę bieli: $udzial = 0 → biały, 1 → pełny kolor. */
function odcien(string $hex, float $udzial): string
{
    [$r, $g, $b] = rgb($hex);
    $m = fn(int $c) => (int) round(255 - (255 - $c) * $udzial);
    return sprintf('#%02X%02X%02X', $m($r), $m($g), $m($b));
}

function kolor(GdImage $img, string $hex, int $alfa = 0): int
{
    [$r, $g, $b] = rgb($hex);
    return imagecolorallocatealpha($img, $r, $g, $b, $alfa);
}

function szerokoscTekstu(float $rozmiar, string $font, string $tekst): float
{
    $b = imagettfbbox($rozmiar, 0, $font, $tekst);
    return (float) ($b[2] - $b[0]);
}

function tekst(GdImage $img, float $rozmiar, string $font, string $hex, float $x, float $y, string $t): void
{
    imagettftext($img, $rozmiar, 0, (int) round($x), (int) round($y), kolor($img, $hex), $font, $t);
}

function tekstNaSrodku(GdImage $img, float $rozmiar, string $font, string $hex, float $cx, float $y, string $t): void
{
    tekst($img, $rozmiar, $font, $hex, $cx - szerokoscTekstu($rozmiar, $font, $t) / 2, $y, $t);
}

/** Wersaliki z rozstrzeleniem — GD nie ma letter-spacing, więc znak po znaku. */
function tekstRozstrzelony(GdImage $img, float $rozmiar, string $font, string $hex, float $x, float $y, string $t, float $odstep, bool $naSrodku = false): void
{
    $znaki = mb_str_split($t);
    if ($naSrodku) {
        $szer = array_sum(array_map(fn($z) => szerokoscTekstu($rozmiar, $font, $z) + $odstep, $znaki)) - $odstep;
        $x -= $szer / 2;
    }
    foreach ($znaki as $z) {
        tekst($img, $rozmiar, $font, $hex, $x, $y, $z);
        $x += szerokoscTekstu($rozmiar, $font, $z) + $odstep;
    }
}

/** Największy rozmiar z przedziału, przy którym tekst mieści się w szerokości. */
function dopasujRozmiar(string $t, string $font, float $maksSzer, float $od, float $do): float
{
    for ($r = $od; $r > $do; $r -= 1) {
        if (szerokoscTekstu($r, $font, $t) <= $maksSzer) {
            return $r;
        }
    }
    return $do;
}

/** Łamanie na wiersze po słowach. */
function zlamWiersze(string $t, string $font, float $rozmiar, float $maksSzer): array
{
    $wiersze = [];
    $biezacy = '';
    foreach (explode(' ', $t) as $slowo) {
        $proba = $biezacy === '' ? $slowo : $biezacy . ' ' . $slowo;
        if ($biezacy !== '' && szerokoscTekstu($rozmiar, $font, $proba) > $maksSzer) {
            $wiersze[] = $biezacy;
            $biezacy = $slowo;
        } else {
            $biezacy = $proba;
        }
    }
    if ($biezacy !== '') {
        $wiersze[] = $biezacy;
    }
    return $wiersze;
}

function kolo(GdImage $img, float $cx, float $cy, float $r, string $hex): void
{
    imagefilledellipse($img, (int) round($cx), (int) round($cy), (int) round(2 * $r), (int) round(2 * $r), kolor($img, $hex));
}

function gwiazdka(GdImage $img, float $cx, float $cy, float $r, string $hex): void
{
    $pkt = [];
    for ($i = 0; $i < 10; $i++) {
        $kat = -M_PI / 2 + $i * M_PI / 5;
        $rr = $i % 2 === 0 ? $r : $r * 0.42;
        $pkt[] = (int) round($cx + $rr * cos($kat));
        $pkt[] = (int) round($cy + $rr * sin($kat));
    }
    imagefilledpolygon($img, $pkt, kolor($img, $hex));
}

/**
 * Odznaka programu: pierścień w kolorze systemu, skrót systemu w środku,
 * poziom pod spodem. Administrator ma dodatkowy granatowy pierścień
 * i trzy gwiazdki zamiast jednej — różnicę widać nawet w miniaturze.
 */
function rysujOdznake(GdImage $img, float $cx, float $cy, float $r, array $program): void
{
    $akcent = $program['kolor'];
    $admin = $program['poziom'] === 'Administrator';

    if ($admin) {
        kolo($img, $cx, $cy, $r, GRANAT);
        kolo($img, $cx, $cy, $r * 0.94, '#FFFFFF');
        kolo($img, $cx, $cy, $r * 0.90, $akcent);
    } else {
        kolo($img, $cx, $cy, $r, $akcent);
    }
    kolo($img, $cx, $cy, $r * 0.80, '#FFFFFF');
    kolo($img, $cx, $cy, $r * 0.75, $akcent);

    $m800 = font('Montserrat-800');
    $m700 = font('Montserrat-700');
    tekstRozstrzelony($img, $r * 0.085, $m700, '#FFFFFF', $cx, $cy - $r * 0.36, 'BIOSYS', $r * 0.03, true);
    $skrot = $program['system'];
    $rozm = dopasujRozmiar($skrot, $m800, $r * 1.05, $r * 0.42, $r * 0.2);
    tekstNaSrodku($img, $rozm, $m800, '#FFFFFF', $cx, $cy + $rozm * 0.48, $skrot);

    $poziom = mb_strtoupper($program['poziom']);
    $rozmP = dopasujRozmiar($poziom, $m700, $r * 1.0, $r * 0.095, $r * 0.06);
    tekstRozstrzelony($img, $rozmP, $m700, '#FFFFFF', $cx, $cy + $r * 0.43, $poziom, $r * 0.012, true);

    $ile = $admin ? 3 : 1;
    $g = $r * 0.055;
    for ($i = 0; $i < $ile; $i++) {
        gwiazdka($img, $cx + ($i - ($ile - 1) / 2) * $g * 2.6, $cy + $r * 0.58, $g, '#FFFFFF');
    }
}

function nowyObraz(int $w, int $h, ?string $tlo): GdImage
{
    $img = imagecreatetruecolor($w, $h);
    if ($tlo === null) {
        imagealphablending($img, false);
        imagefill($img, 0, 0, imagecolorallocatealpha($img, 0, 0, 0, 127));
        imagesavealpha($img, true);
        imagealphablending($img, true);
    } else {
        imagefill($img, 0, 0, kolor($img, $tlo));
    }
    return $img;
}

function zmniejsz(GdImage $duzy, int $w, int $h): GdImage
{
    $maly = nowyObraz($w, $h, null);
    imagealphablending($maly, false);
    imagecopyresampled($maly, $duzy, 0, 0, 0, 0, $w, $h, imagesx($duzy), imagesy($duzy));
    imagesavealpha($maly, true);
    return $maly;
}

function wklejLogo(GdImage $img, float $x, float $y, float $wys): void
{
    $plik = dirname(LIB, 2) . '/assets/biosys-logo-cropped.webp';
    if (!is_file($plik) || !function_exists('imagecreatefromwebp')) {
        tekst($img, $wys * 0.7, font('Montserrat-700'), GRANAT, $x, $y + $wys * 0.8, 'BioSys');
        return;
    }
    $logo = imagecreatefromwebp($plik);
    $szer = $wys * imagesx($logo) / imagesy($logo);
    imagecopyresampled($img, $logo, (int) $x, (int) $y, 0, 0, (int) $szer, (int) $wys, imagesx($logo), imagesy($logo));
}

/** Karta do podglądu posta na LinkedIn. Zwraca bajty PNG. */
function rysujKarteOg(array $cert): string
{
    $program = program($cert['program']) ?? ['kolor' => '#2563EB', 'system' => '', 'poziom' => 'Operator'];
    $akcent = $program['kolor'];
    $s = 2; // skala robocza
    $img = nowyObraz(OG_SZER * $s, OG_WYS * $s, '#FFFFFF');
    $m800 = font('Montserrat-800');
    $m700 = font('Montserrat-700');
    $o400 = font('OpenSans-400');
    $o600 = font('OpenSans-600');

    // Prawa część: jasne tło w kolorze systemu i odznaka.
    $podzial = 790 * $s;
    imagefilledrectangle($img, $podzial, 0, OG_SZER * $s, OG_WYS * $s, kolor($img, odcien($akcent, 0.12)));
    rysujOdznake($img, 995 * $s, 290 * $s, 150 * $s, $program);
    tekstNaSrodku($img, 15 * $s, $o600, LUPEK, 995 * $s, 505 * $s, $cert['id']);

    // Lewa część: treść.
    $x = 64 * $s;
    $maks = 680 * $s;
    wklejLogo($img, $x, 52 * $s, 46 * $s);

    // Imię i nazwisko: jeden wiersz, a gdy się nie zmieści nawet po
    // zmniejszeniu — dwa. Długie nazwiska dwuczłonowe to u nas norma.
    $imie = $cert['imie_nazwisko'];
    $rozm = dopasujRozmiar($imie, $m800, $maks, 50 * $s, 34 * $s);
    $wierszeImienia = [$imie];
    if (szerokoscTekstu($rozm, $m800, $imie) > $maks) {
        $wierszeImienia = array_slice(zlamWiersze($imie, $m800, 40 * $s, $maks), 0, 2);
        $rozm = min(array_map(fn($w) => dopasujRozmiar($w, $m800, $maks, 40 * $s, 24 * $s), $wierszeImienia));
    }
    $y = 200 * $s;
    tekstRozstrzelony($img, 15 * $s, $m700, $akcent, $x, $y, 'CERTYFIKAT BIOSYS', 3 * $s);
    $y += 22 * $s;
    foreach ($wierszeImienia as $w) {
        $y += $rozm * 1.25;
        tekst($img, $rozm, $m800, GRANAT, $x, $y, $w);
    }

    $y += 50 * $s;
    foreach (array_slice(zlamWiersze($cert['program_nazwa'], $o600, 24 * $s, $maks), 0, 2) as $w) {
        tekst($img, 24 * $s, $o600, LUPEK, $x, $y, $w);
        $y += 36 * $s;
    }
    if (!empty($cert['pokaz_firme']) && !empty($cert['firma'])) {
        $firma = $cert['firma'];
        tekst($img, dopasujRozmiar($firma, $o400, $maks, 19 * $s, 12 * $s), $o400, SZARY, $x, $y + 4 * $s, $firma);
    }

    // Stopka: data i adres weryfikacji.
    $yStopki = 505 * $s;
    tekst($img, 13 * $s, $o400, SZARY, $x, $yStopki - 26 * $s, 'Data wydania');
    tekst($img, 17 * $s, $o600, GRANAT, $x, $yStopki, dataSlownie($cert['data_wydania']));
    $xw = $x + 260 * $s;
    tekst($img, 13 * $s, $o400, SZARY, $xw, $yStopki - 26 * $s, 'Weryfikacja');
    $adres = preg_replace('#^https?://#', '', urlCertyfikatu($cert['id']));
    tekst($img, dopasujRozmiar($adres, $o600, 400 * $s, 17 * $s, 11 * $s), $o600, GRANAT, $xw, $yStopki, $adres);

    imagefilledrectangle($img, 0, (OG_WYS - 10) * $s, OG_SZER * $s, OG_WYS * $s, kolor($img, $akcent));

    if ($cert['status'] !== 'wazny') {
        imagefilledrectangle($img, 0, 0, OG_SZER * $s, 40 * $s, kolor($img, CZERWONY));
        tekstRozstrzelony($img, 15 * $s, $m700, '#FFFFFF', OG_SZER * $s / 2, 27 * $s, 'CERTYFIKAT UNIEWAŻNIONY', 3 * $s, true);
    }

    $maly = zmniejsz($img, OG_SZER, OG_WYS);
    ob_start();
    imagepng($maly, null, 6);
    return (string) ob_get_clean();
}

function rysujOdznakePng(array $program, int $bok = 600): string
{
    $s = 3;
    $img = nowyObraz($bok * $s, $bok * $s, null);
    rysujOdznake($img, $bok * $s / 2, $bok * $s / 2, $bok * $s / 2 - 2 * $s, $program);
    $maly = zmniejsz($img, $bok, $bok);
    ob_start();
    imagepng($maly, null, 6);
    return (string) ob_get_clean();
}

/**
 * Grafika z pamięci podręcznej na dysku. Klucz zawiera wszystko, co widać
 * na obrazku — zmiana statusu albo nazwiska daje nowy plik, stary znika.
 */
function grafikaOg(array $cert): string
{
    $klucz = substr(md5(implode('|', [WERSJA_GRAFIKI, $cert['imie_nazwisko'], $cert['program_nazwa'],
        $cert['data_wydania'], $cert['status'], $cert['pokaz_firme'] ? $cert['firma'] : '', konfig()['url_serwisu']])), 0, 12);
    $plik = katalogDanych('grafiki') . '/' . $cert['id'] . '-' . $klucz . '.png';
    if (!is_file($plik)) {
        usunGrafiki($cert['id']);
        file_put_contents($plik, rysujKarteOg($cert), LOCK_EX);
    }
    return $plik;
}

function odznakaPng(string $kod): ?string
{
    $program = program($kod);
    if ($program === null) {
        return null;
    }
    $plik = katalogDanych('grafiki') . '/odznaka-' . $kod . '-' . WERSJA_GRAFIKI . '.png';
    if (!is_file($plik)) {
        file_put_contents($plik, rysujOdznakePng($program), LOCK_EX);
    }
    return $plik;
}

function usunGrafiki(string $id): void
{
    foreach (glob(katalogDanych('grafiki') . '/' . $id . '-*.png') ?: [] as $f) {
        @unlink($f);
    }
}
