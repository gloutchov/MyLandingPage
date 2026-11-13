# Glauco Silvestri — personal landing page

[Italiano](#italiano) · [English](#english)

## Italiano

Landing page personale statica di Glauco Silvestri, pubblicata tramite GitHub Pages. Racconta il
percorso dall'elettronica e dal PCB design al process engineering, alla transizione digitale e ai
progetti personali sviluppati con l'AI.

**Stato:** attivo<br>
**Sito:** [glaucosilvestri.it](https://glaucosilvestri.it)

### Funzionalità

- layout responsive per desktop e dispositivi mobili;
- contenuti in italiano e inglese, con rilevamento automatico e selezione manuale;
- tema chiaro/scuro basato sul sistema, con override persistente;
- navigazione accessibile da tastiera e supporto a `prefers-reduced-motion`;
- demo video ottimizzate dei progetti personali e demo sfocate dei tool professionali;
- nessuna dipendenza, build, analytics, autenticazione o servizio runtime esterno.

Tra i progetti personali presentati sono inclusi
[LocalAgent Benchmark](https://localagentbenchmark.glaucosilvestri.it/), per confrontare in locale
i modelli Ollama usati come coding agent, e
[Markdown2PDF](https://markdown2pdf.glaucosilvestri.it/), per convertire documenti Markdown in PDF
direttamente dal browser. In fondo alla lista si trova
[Plancia Comandi](https://planciacomandi.glaucosilvestri.it/), che riunisce shell e CLI in una finestra
desktop con fino a 12 sessioni, viste affiancate o a griglia e indicatori di stato. La scheda include
una demo MP4 senza audio e l'immagine di anteprima fornita dal proprietario. Il riepilogo indica
7 progetti personali online.

Tra i tool professionali, **BPConverter** converte file pick & place e BOM per Fuji Aimex II e III,
con offset X, Y e rotazione dei componenti. La demo è sfocata, senza audio e accelerata 4×.

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
- `CNAME`: configurazione del dominio personalizzato `glaucosilvestri.it`;
- `AGENTS.md`: regole operative per manutentori e agenti;
- [`PLAN.md`](PLAN.md): milestone e verifiche, con chiusura subordinata all'approvazione del commit;
- [`MAP.md`](MAP.md): mappa dei sorgenti, dei media pubblici e dei file locali esclusi da Git;
- `SECURITY_MODEL.md`: modello di sicurezza e privacy.

### Pubblicazione

GitHub Pages pubblica direttamente la root del branch `main` sul dominio personalizzato
`glaucosilvestri.it`, configurato tramite `CNAME`. Tutti i percorsi sono relativi e non è richiesto
alcun passaggio di build. Il sito pubblico include soltanto derivati MP4 ottimizzati; le demo dei
tool professionali hanno la sfocatura incorporata, mentre le catture sorgente non devono essere
aggiunte al repository.

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
**Website:** [glaucosilvestri.it](https://glaucosilvestri.it)

### Features

- responsive layout for desktop and mobile devices;
- Italian and English content with automatic detection and manual selection;
- system-aware light/dark theme with a persistent override;
- keyboard-accessible navigation and `prefers-reduced-motion` support;
- optimised video demonstrations, blurred for professional tools and clear for personal projects;
- no dependencies, build step, analytics, authentication or external runtime services.

Featured personal projects include
[LocalAgent Benchmark](https://localagentbenchmark.glaucosilvestri.it/), for comparing Ollama models
used locally as coding agents, and [Markdown2PDF](https://markdown2pdf.glaucosilvestri.it/), for
converting Markdown documents to PDF directly in the browser.
[Plancia Comandi](https://planciacomandi.glaucosilvestri.it/) appears at the end of the list, bringing
shells and CLIs into one desktop window with up to 12 sessions, side-by-side or grid views and
status indicators. Its card includes a silent MP4 demo and the preview image supplied by the
owner. The summary shows 7 personal projects online.

Professional tools include **BPConverter**, which converts pick & place files and BOMs for Fuji
Aimex II and III, with X, Y and component rotation offsets. The demo is blurred, silent and sped up 4×.

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
- `CNAME`: custom-domain configuration for `glaucosilvestri.it`;
- `AGENTS.md`: operational rules for maintainers and agents;
- [`PLAN.md`](PLAN.md): milestones and validation, with closure subject to commit approval;
- [`MAP.md`](MAP.md): map of sources, public media and local files excluded from Git;
- `SECURITY_MODEL.md`: security and privacy model.

### Publishing

GitHub Pages publishes the root of the `main` branch directly at the `glaucosilvestri.it` custom
domain, configured through `CNAME`. All paths are relative and no build step is required. The
public site contains only optimised MP4 derivatives; professional-tool demos have blur baked into
the files, while source captures must not be added to the repository.

### Privacy and security

The site does not collect personal data or make application requests to external services. Only
the selected language and theme are stored in the browser. See [`SECURITY_MODEL.md`](SECURITY_MODEL.md)
for controls, residual limitations and external-link behaviour.

### Licence

Source code is distributed under the [Apache License 2.0](LICENSE). The résumé, photographs,
personal logo, biographical copy and third-party trademarks are not granted under that licence;
see [`NOTICE`](NOTICE).
