# Modello di sicurezza / Security model

## Italiano

### Modello operativo

`mylandingpage` è un sito statico pubblicato tramite GitHub Pages. Il browser scarica soltanto
HTML, CSS, JavaScript, immagini, video e il curriculum PDF. Non esistono backend, database,
autenticazione, moduli di invio, analytics o codice di terze parti.

### Dati e persistenza

Il sito non raccoglie né trasmette dati personali. Salva in `localStorage` esclusivamente due
preferenze non sensibili:

- `glauco-site-language`: lingua scelta (`it` o `en`);
- `glauco-site-theme`: tema scelto (`light` o `dark`).

L'indirizzo email, il curriculum, le immagini e i contenuti presenti nel repository sono
deliberatamente pubblici. I collegamenti a GitHub, LinkedIn, YouTube, Amazon e alle landing page
dei progetti causano una navigazione esterna soltanto dopo un'azione dell'utente.

### Controlli implementati

- Content Security Policy dichiarata nell'HTML: script e media sono limitati all'origine del sito;
  connessioni applicative e oggetti incorporati sono bloccati.
- Referrer policy `strict-origin-when-cross-origin`.
- Link esterni aperti con `rel="noreferrer"`.
- Nessun segreto o token nel codice client; nessuna dipendenza runtime remota.
- Video dimostrativi pubblicati soltanto in versioni sfocate e senza audio.
- Rispetto di `prefers-reduced-motion`, con arresto dei video quando opportuno.

### Limiti residui

- Tutti i file presenti nella cronologia Git pubblica devono essere considerati accessibili anche
  dopo la rimozione dalla versione corrente. Una bonifica richiede la riscrittura della cronologia.
- La sfocatura riduce la leggibilità ma non costituisce una barriera crittografica o una garanzia di
  anonimizzazione. Non devono essere pubblicate registrazioni contenenti segreti o dati riservati.
- GitHub Pages non consente di configurare liberamente tutte le intestazioni HTTP. In particolare,
  direttive come `frame-ancestors` richiederebbero il controllo degli header del server.
- I siti esterni seguono le proprie politiche di sicurezza e privacy.

### Segnalazioni

Per segnalazioni relative alla sicurezza utilizzare l'indirizzo email pubblicato nella landing
page, evitando di includere segreti o dati personali non necessari nel primo messaggio.

## English

### Operating model

`mylandingpage` is a static website published through GitHub Pages. The browser downloads only
HTML, CSS, JavaScript, images, videos and the résumé PDF. There is no backend, database,
authentication, submission form, analytics or third-party runtime code.

### Data and persistence

The site does not collect or transmit personal data. It stores only two non-sensitive preferences
in `localStorage`:

- `glauco-site-language`: selected language (`it` or `en`);
- `glauco-site-theme`: selected theme (`light` or `dark`).

The email address, résumé, images and repository content are deliberately public. Links to GitHub,
LinkedIn, YouTube, Amazon and project landing pages navigate to external services only after a user
action.

### Implemented controls

- An HTML Content Security Policy restricts scripts and media to the site origin and blocks
  application connections and embedded objects.
- Referrer policy set to `strict-origin-when-cross-origin`.
- External links opened with `rel="noreferrer"`.
- No secrets or tokens in client code and no remote runtime dependencies.
- Demonstration videos are published only as blurred, silent versions.
- `prefers-reduced-motion` is respected and videos are paused when appropriate.

### Residual limitations

- Every file in public Git history must be considered accessible even after deletion from the
  current version. Complete removal requires a history rewrite.
- Blur reduces readability but is not a cryptographic boundary or an anonymisation guarantee.
  Recordings containing secrets or confidential data must never be published.
- GitHub Pages does not provide full control over HTTP response headers. Directives such as
  `frame-ancestors` would require server-header control.
- External sites apply their own security and privacy policies.

### Reporting

Use the email address published on the landing page for security reports. Do not include
unnecessary secrets or personal data in the initial message.
