# Glauco Silvestri — personal landing page

[Italiano](#italiano) · [English](#english)

## Italiano

Landing page personale statica di Glauco Silvestri, pubblicata tramite GitHub Pages. Racconta il
percorso dall'elettronica e dal PCB design al process engineering, alla transizione digitale e ai
progetti personali sviluppati con l'AI.

**Stato:** attivo<br>
**Sito:** [gloutchov.github.io/mylandingpage](https://gloutchov.github.io/mylandingpage/)

### Funzionalità

- layout responsive per desktop e dispositivi mobili;
- contenuti in italiano e inglese, con rilevamento automatico e selezione manuale;
- tema chiaro/scuro basato sul sistema, con override persistente;
- navigazione accessibile da tastiera e supporto a `prefers-reduced-motion`;
- demo video ottimizzate e sfocate dei tool professionali e dei progetti personali;
- nessuna dipendenza, build, analytics, autenticazione o servizio runtime esterno.

### Anteprima locale

Da PowerShell, nella cartella del progetto:

```powershell
python -m http.server 8000
```

Aprire quindi `http://localhost:8000`.

### Struttura

- `index.html`: struttura semantica e contenuto italiano di fallback;
- `styles.css`: layout responsive e temi;
- `translations.js`, `i18n.js`: dizionari e selezione della lingua;
- `theme.js`: selezione e persistenza del tema;
- `script.js`: menu, navigazione, animazioni e gestione video;
- `assets/`: immagini, curriculum e media pubblicabili;
- `AGENTS.md`: regole operative per manutentori e agenti;
- `SECURITY_MODEL.md`: modello di sicurezza e privacy.

### Pubblicazione

GitHub Pages pubblica direttamente la root del branch `main`. Tutti i percorsi sono relativi e non
è richiesto alcun passaggio di build. Il sito pubblico include soltanto video MP4 con sfocatura
incorporata; le catture sorgente non devono essere aggiunte al repository.

### Privacy e sicurezza

Il sito non raccoglie dati personali e non effettua richieste applicative verso servizi esterni.
Nel browser vengono salvate soltanto la lingua e il tema selezionati. Per controlli, limiti residui
e comportamento dei link esterni, vedere [`SECURITY_MODEL.md`](SECURITY_MODEL.md).

### Licenza

Il codice sorgente è distribuito con [licenza Apache 2.0](LICENSE). Curriculum, fotografie, logo
personale, testi biografici e marchi di terzi non sono concessi con tale licenza; vedere
[`NOTICE`](NOTICE).

## English

Glauco Silvestri's static personal landing page, published through GitHub Pages. It presents a
career spanning electronics and PCB design, process engineering and digital transition, together
with personal AI-assisted projects.

**Status:** active<br>
**Website:** [gloutchov.github.io/mylandingpage](https://gloutchov.github.io/mylandingpage/)

### Features

- responsive layout for desktop and mobile devices;
- Italian and English content with automatic detection and manual selection;
- system-aware light/dark theme with a persistent override;
- keyboard-accessible navigation and `prefers-reduced-motion` support;
- optimised, blurred video demonstrations of professional tools and personal projects;
- no dependencies, build step, analytics, authentication or external runtime services.

### Local preview

From PowerShell, in the project directory:

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000`.

### Structure

- `index.html`: semantic structure and Italian fallback content;
- `styles.css`: responsive layout and themes;
- `translations.js`, `i18n.js`: dictionaries and language selection;
- `theme.js`: theme selection and persistence;
- `script.js`: menu, navigation, animations and video handling;
- `assets/`: publishable images, résumé and media;
- `AGENTS.md`: operational rules for maintainers and agents;
- `SECURITY_MODEL.md`: security and privacy model.

### Publishing

GitHub Pages publishes the root of the `main` branch directly. All paths are relative and no build
step is required. The public site contains only MP4 videos with blur baked into the files; source
captures must not be added to the repository.

### Privacy and security

The site does not collect personal data or make application requests to external services. Only
the selected language and theme are stored in the browser. See [`SECURITY_MODEL.md`](SECURITY_MODEL.md)
for controls, residual limitations and external-link behaviour.

### Licence

Source code is distributed under the [Apache License 2.0](LICENSE). The résumé, photographs,
personal logo, biographical copy and third-party trademarks are not granted under that licence;
see [`NOTICE`](NOTICE).
