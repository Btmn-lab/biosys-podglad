-- Schemat dla SQLite. Wykonywany przy każdym połączeniu, więc wyłącznie
-- instrukcje „IF NOT EXISTS”. Odpowiednik dla MySQL: schema.mysql.sql.

CREATE TABLE IF NOT EXISTS cert_certyfikaty (
    id                  VARCHAR(16)  NOT NULL PRIMARY KEY,   -- BSC-XXXX-XXXX
    program             VARCHAR(16)  NOT NULL,               -- kod z programy.php
    program_nazwa       VARCHAR(200) NOT NULL,               -- nazwa z dnia wydania
    imie_nazwisko       VARCHAR(160) NOT NULL,
    email               VARCHAR(254),
    firma               VARCHAR(200),
    pokaz_firme         SMALLINT     NOT NULL DEFAULT 1,
    data_wydania        DATE         NOT NULL,
    data_szkolenia      DATE,
    trener              VARCHAR(160),
    status              VARCHAR(16)  NOT NULL DEFAULT 'wazny'
                        CHECK (status IN ('wazny', 'uniewazniony')),
    powod_uniewaznienia VARCHAR(500),
    uniewazniono_at     DATETIME,
    sol_odbiorcy        VARCHAR(32)  NOT NULL,
    wystawil            VARCHAR(80)  NOT NULL,
    utworzono_at        DATETIME     NOT NULL,
    wyslano_email_at    DATETIME
);

CREATE INDEX IF NOT EXISTS cert_certyfikaty_email ON cert_certyfikaty (email);
CREATE INDEX IF NOT EXISTS cert_certyfikaty_data ON cert_certyfikaty (data_wydania);

-- Dziennik: kto co zrobił z certyfikatem. Tylko dopisywanie.
CREATE TABLE IF NOT EXISTS cert_zdarzenia (
    id              VARCHAR(32)  NOT NULL PRIMARY KEY,
    certyfikat_id   VARCHAR(16)  NOT NULL REFERENCES cert_certyfikaty (id),
    rodzaj          VARCHAR(32)  NOT NULL,
    uzytkownik      VARCHAR(80)  NOT NULL,
    opis            VARCHAR(500),
    kiedy           DATETIME     NOT NULL
);

CREATE INDEX IF NOT EXISTS cert_zdarzenia_cert ON cert_zdarzenia (certyfikat_id);
