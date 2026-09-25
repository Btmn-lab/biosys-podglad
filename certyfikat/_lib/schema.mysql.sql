-- Schemat dla MySQL 8 / MariaDB 10.5+. Import jednorazowy (np. phpMyAdmin),
-- potem w config.php ustaw 'dsn' => 'mysql:host=...;dbname=...;charset=utf8mb4'.

CREATE TABLE IF NOT EXISTS cert_certyfikaty (
    id                  VARCHAR(16)  NOT NULL PRIMARY KEY,
    program             VARCHAR(16)  NOT NULL,
    program_nazwa       VARCHAR(200) NOT NULL,
    imie_nazwisko       VARCHAR(160) NOT NULL,
    email               VARCHAR(254) NULL,
    firma               VARCHAR(200) NULL,
    pokaz_firme         SMALLINT     NOT NULL DEFAULT 1,
    data_wydania        DATE         NOT NULL,
    data_szkolenia      DATE         NULL,
    trener              VARCHAR(160) NULL,
    status              VARCHAR(16)  NOT NULL DEFAULT 'wazny',
    powod_uniewaznienia VARCHAR(500) NULL,
    uniewazniono_at     DATETIME     NULL,
    sol_odbiorcy        VARCHAR(32)  NOT NULL,
    wystawil            VARCHAR(80)  NOT NULL,
    utworzono_at        DATETIME     NOT NULL,
    wyslano_email_at    DATETIME     NULL,
    CONSTRAINT cert_status CHECK (status IN ('wazny', 'uniewazniony')),
    INDEX cert_certyfikaty_email (email),
    INDEX cert_certyfikaty_data (data_wydania)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_polish_ci;

CREATE TABLE IF NOT EXISTS cert_zdarzenia (
    id              VARCHAR(32)  NOT NULL PRIMARY KEY,
    certyfikat_id   VARCHAR(16)  NOT NULL,
    rodzaj          VARCHAR(32)  NOT NULL,
    uzytkownik      VARCHAR(80)  NOT NULL,
    opis            VARCHAR(500) NULL,
    kiedy           DATETIME     NOT NULL,
    INDEX cert_zdarzenia_cert (certyfikat_id),
    CONSTRAINT cert_zdarzenia_fk FOREIGN KEY (certyfikat_id) REFERENCES cert_certyfikaty (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_polish_ci;
