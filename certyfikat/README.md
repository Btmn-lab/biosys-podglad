# Certyfikaty BioSys

Moduł, dzięki któremu klient po szkoleniu z obsługi systemu BioSys dostaje
certyfikat z własną stroną weryfikacji i dodaje go do profilu LinkedIn
jednym kliknięciem.

Działa na tym samym serwerze co biosys.pl (Apache + PHP). Nie korzysta
z płatnej platformy, API LinkedIn ani zewnętrznych usług.

> **Uwaga:** podgląd na GitHub Pages (`/biosys-podglad/`) nie wykonuje PHP.
> Moduł działa dopiero na serwerze biosys.pl.

---

## Jak to działa

```
 Trener BioSys                  Rejestr (SQLite/MySQL)              Absolwent / LinkedIn
 ─────────────                  ──────────────────────              ────────────────────
 /certyfikat/admin/
   wybiera program ─┐
   wkleja listę     ├─► wystaw() ─► BSC-7K4M-Q9TD ──► mail: „Dodaj do profilu LinkedIn”
   zaznacza zgodę  ─┘                     │
                                          ▼
                              biosys.pl/certyfikat/BSC-7K4M-Q9TD
                              ├─ strona weryfikacji (status, zakres, trener)
                              ├─ tagi Open Graph ──────────────► podgląd posta na LinkedIn
                              ├─ BSC-….png (1200×627) ─────────► og:image z imieniem i nazwiskiem
                              ├─ BSC-…/druk ───────────────────► wydruk / PDF (A4)
                              └─ BSC-….json ───────────────────► Open Badges 2.0
```

### Dwie drogi na LinkedIn

1. **Sekcja „Licencje i certyfikaty”** — przycisk „Dodaj do profilu LinkedIn”
   (na stronie certyfikatu i w mailu) otwiera oficjalny formularz LinkedIn
   *Add to Profile* już wypełniony:

   | Pole LinkedIn         | Wartość                                    |
   |-----------------------|--------------------------------------------|
   | Nazwa                 | np. „Administrator systemu Etatomierz (RCP)” |
   | Organizacja wydająca  | BioSys (z logo, gdy podano `linkedin_organization_id`) |
   | Data wydania          | miesiąc i rok wydania                      |
   | Data wygaśnięcia      | brak — certyfikat bezterminowy             |
   | Identyfikator         | BSC-XXXX-XXXX                              |
   | Adres URL             | https://biosys.pl/certyfikat/BSC-XXXX-XXXX |

   Absolwent klika tylko „Zapisz”. Kod: `_lib/linkedin.php`.

2. **Post** — przycisk „Udostępnij w poście” otwiera okno posta z linkiem
   do certyfikatu. LinkedIn pobiera stronę i buduje podgląd z tagów Open
   Graph: tytuł z imieniem, nazwiskiem i programem oraz grafika PNG
   1200×627 w kolorach BioSys. Treść posta LinkedIn każe wpisać samemu —
   strona podaje gotową propozycję z przyciskiem „Kopiuj”.

### Ścieżki certyfikacji

| Kod     | Nazwa                                          |
|---------|------------------------------------------------|
| RCP-OP  | Operator systemu Etatomierz (RCP)              |
| RCP-ADM | Administrator systemu Etatomierz (RCP)         |
| KD-OP   | Operator systemu Kontroli Dostępu BioSys       |
| KD-ADM  | Administrator systemu Kontroli Dostępu BioSys  |
| TT-OP   | Operator systemu Task Timer                    |
| TT-ADM  | Administrator systemu Task Timer               |

Opisy i listy umiejętności są w `_lib/programy.php`. Nową ścieżkę dodaje
się tam jednym wpisem. **Nie zmieniaj kodu istniejącej ścieżki**, bo jest
częścią adresów Open Badges. Zmiana nazwy nie rusza wydanych certyfikatów,
bo każdy zapamiętuje nazwę z dnia wydania.

---

## Struktura

```
certyfikat/
├── index.php              publiczne adresy (router)
├── .htaccess              przekierowanie na index.php, blokada _lib i _dane
├── admin/index.php        panel trenera
├── assets/                certyfikat.css, druk.css, panel.css, certyfikat.js
├── _lib/                  (niedostępne z przeglądarki)
│   ├── bootstrap.php      konfiguracja, baza, pomocnicze funkcje
│   ├── config.example.php wzór konfiguracji → skopiuj jako config.php
│   ├── programy.php       katalog ścieżek certyfikacji
│   ├── certyfikaty.php    wystawianie, numery, unieważnianie, RODO
│   ├── linkedin.php       linki Add to Profile i udostępniania, treść posta
│   ├── grafika.php        PNG 1200×627 i odznaki (GD)
│   ├── openbadges.php     Open Badges 2.0 i schema.org
│   ├── poczta.php         mail do absolwenta
│   ├── panel.php          logowanie, sesja, CSRF, limit prób
│   ├── widoki/            szablony stron, maila i panelu
│   ├── fonts/             Montserrat, Open Sans (TTF dla GD, licencja OFL)
│   ├── schema.*.sql       schemat bazy (SQLite / MySQL)
│   ├── narzedzia.php      polecenia CLI
│   ├── testy.php          testy
│   └── dev-router.php     router do lokalnego `php -S`
└── _dane/                 baza SQLite i pamięć podręczna grafik (poza gitem)
```

### Adresy publiczne

| Adres                                   | Co zwraca                               |
|-----------------------------------------|-----------------------------------------|
| `/certyfikat/`                          | formularz weryfikacji po numerze        |
| `/certyfikat/BSC-XXXX-XXXX`             | strona certyfikatu (czyta ją LinkedIn)  |
| `/certyfikat/BSC-XXXX-XXXX.png`         | grafika og:image, `?pobierz=1` zapisuje plik |
| `/certyfikat/BSC-XXXX-XXXX/druk`        | certyfikat A4 do druku lub zapisu jako PDF |
| `/certyfikat/BSC-XXXX-XXXX.json`        | asercja Open Badges (410 po unieważnieniu) |
| `/certyfikat/odznaka/KOD.png`           | odznaka programu 600×600                |
| `/certyfikat/ob/wydawca.json`           | Open Badges: wydawca                    |
| `/certyfikat/ob/program/KOD.json`       | Open Badges: program                    |
| `/certyfikat/admin/`                    | panel trenera                           |

Numer w dowolnej postaci (`bsc7k4mq9td`, z `O` zamiast `0`) przekierowuje
na adres kanoniczny.

---

## Wdrożenie na biosys.pl

**Wymagania:** PHP 8.1+, GD z FreeType (i WebP dla logo na grafice),
PDO SQLite albo MySQL, mbstring, Apache z mod_rewrite. Standardowy hosting
PHP spełnia je zwykle bez zmian.

1. Wgraj katalog `certyfikat/` do katalogu głównego serwisu (obok `backend/`).
2. Utwórz konfigurację:
   ```
   cp certyfikat/_lib/config.example.php certyfikat/_lib/config.php
   ```
3. Dodaj konta trenerów. Skrót hasła:
   ```
   php certyfikat/_lib/narzedzia.php haslo
   ```
   i wpisz go w `uzytkownicy` (rola `admin` może też unieważniać).
4. Nadaj serwerowi prawo zapisu do `certyfikat/_dane/`.
5. (MySQL) Zaimportuj `_lib/schema.mysql.sql` i ustaw `dsn`. SQLite nie
   wymaga tego kroku, bo tabele zakładają się same.
6. Wpisz ID strony firmowej LinkedIn (`wydawca.linkedin_organization_id`).
   Jak je znaleźć: zaloguj się jako administrator strony BioSys na LinkedIn
   i otwórz widok administratora. Adres ma postać
   `linkedin.com/company/12345678/admin/`, a ta liczba to ID. Bez niego
   certyfikat też się doda, tylko bez logo BioSys.
7. Sprawdź instalację:
   ```
   php certyfikat/_lib/narzedzia.php sprawdz
   ```
8. Wystaw sobie certyfikat testowy i sprawdź podgląd w
   [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/).
   Tam też odświeża się podgląd, jeśli LinkedIn zapamiętał starą wersję.
9. Sprawdź, czy mail od `szkolenia@biosys.pl` przechodzi SPF/DKIM domeny.
   Jeśli serwer nie wysyła przez `mail()`, podmień `wyslijMail()`
   w `_lib/poczta.php` na SMTP.

Główny `.htaccess` serwisu już pasuje: CSP `'self'` obejmuje wszystkie
zasoby modułu, a pliki `.md` i `.sql` są zablokowane. `robots.txt` wyłącza
panel z indeksu. Strony certyfikatów mają `noindex`, więc nazwiska nie
trafiają do Google. LinkedIn pobiera je mimo to, bo `noindex` nie blokuje
pobierania.

**Warto dolinkować** `/certyfikat/` w stopce serwisu („Weryfikacja
certyfikatów”) oraz w Panelu klienta. Strony serwisu generuje osobny
proces, więc nie zmieniałem ich tutaj.

---

## Praca trenera

1. `/certyfikat/admin/` → **+ Wystaw**.
2. Wybierz program, daty i firmę klienta.
3. Wklej uczestników, którzy zaliczyli, jedna osoba w wierszu:
   `Imię Nazwisko; e-mail; firma`. Można wkleić kolumny prosto z Excela.
4. Zaznacz potwierdzenie (zaliczenie i poinformowanie o publikacji) i kliknij
   **Wystaw**. Każdy dostaje mail z certyfikatem i przyciskiem LinkedIn.
   Link można też skopiować z panelu i wysłać samemu.

Na liście jest wyszukiwarka, filtry i eksport CSV. W szczegółach
certyfikatu można ponownie wysłać mail, skopiować link „Dodaj do LinkedIn”,
a jako administrator unieważnić certyfikat albo usunąć dane osobowe
(RODO). Każde działanie trafia do historii certyfikatu.

---

## Bezpieczeństwo i RODO

- **Numery nie do zgadnięcia:** 8 znaków z alfabetu Crockforda
  (~10¹² kombinacji), więc listy absolwentów nie da się przejrzeć po kolei.
- **Publicznie widać** tylko imię i nazwisko, program, datę, trenera
  i (opcjonalnie) firmę. E-mail nigdy nie jest pokazywany. W Open Badges
  jest tylko jego skrót SHA-256 z solą.
- **Podstawa publikacji:** trener przy wystawianiu potwierdza, że uczestnicy
  wiedzą o publicznym certyfikacie. Tę informację warto dopisać do
  formularza zgłoszenia na szkolenie i do polityki prywatności.
- **Prawo do usunięcia:** przycisk „Usuń dane osobowe”. Numer zostaje,
  a strona pokazuje „unieważniony” zamiast błędu 404, żeby stary link
  na LinkedIn nie wprowadzał w błąd.
- **Panel:** hasła jako `password_hash`, sesja `HttpOnly` + `SameSite=Strict`,
  token CSRF w każdym formularzu, blokada po 5 nieudanych logowaniach
  w 15 minut, zapytania przez PDO z parametrami, wszystkie dane
  w szablonach przez `e()`, eksport CSV odporny na wstrzyknięcie formuł.

---

## Rozwój lokalny i testy

```
php certyfikat/_lib/testy.php          # 51 sprawdzeń, tymczasowa baza

# serwer lokalny (config z 'url_serwisu' => 'http://localhost:8080')
BIOSYS_CERT_CONFIG=/tmp/config.php php -S localhost:8080 certyfikat/_lib/dev-router.php
```

## Co można dołożyć później

- **Kod QR** na wydruku, prowadzący do strony weryfikacji.
- **Test online** jako druga droga do certyfikatu. `wystaw()` jest gotowe
  do wywołania z innego miejsca.
- **Logowanie z /zaplecze** zamiast osobnych kont. Wystarczy podmienić
  `zalogowany()` w `_lib/panel.php`.
- **Wersja angielska** nazw programów dla klientów zagranicznych.
