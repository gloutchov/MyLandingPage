# Mappa del repository / Repository map

Sito statico pubblicato dalla root di `main`, senza build o dipendenze runtime.
Static site published from the root of `main`, with no build or runtime dependencies.

```text
myLandingpage/
|-- index.html                 HTML semantico e fallback IT / Semantic HTML and IT fallback
|-- styles.css                 Layout responsive e temi / Responsive layout and themes
|-- translations.js            Dizionari IT/EN / IT/EN dictionaries
|-- i18n.js                    Lingua e persistenza / Language and persistence
|-- theme.js                   Tema e persistenza / Theme and persistence
|-- script.js                  Menu, reveal, scorrimento, video / Menu, reveal, scroll, video
|-- assets/                    Immagini e media / Images and media
|   |-- apps/                  Demo MP4 delle app / App MP4 demos
|   |   |-- planciacomandi.mp4  Derivato ottimizzato muto / Optimised silent derivative
|   |   `-- planciacomandi.png  Poster fornito dal proprietario / Owner-supplied poster
|   |-- icons/                 Icone delle app e logo personale / App icons and personal logo
|   |-- tools/                 Demo professionali sfocate / Blurred professional demos
|   |-- cad/                   Loghi degli strumenti / Tool logos
|   |-- services/              Loghi dei servizi / Service logos
|   `-- curriculum/            CV PDF e fotografia pubblici / Public PDF CV and photograph
|-- CNAME                      Dominio glaucosilvestri.it / Custom domain
|-- .nojekyll                  Pubblicazione senza Jekyll / Publishing without Jekyll
|-- .gitignore                 Esclusioni locali e catture sorgente / Local and source exclusions
|-- AGENTS.md                  Regole operative / Maintenance instructions
|-- PLAN.md                    Milestone e verifiche / Milestones and validation
|-- MAP.md                     Questa mappa / This map
|-- README.md                  Guida IT/EN, preview e pubblicazione / IT/EN guide and publishing
|-- SECURITY_MODEL.md          Sicurezza e privacy IT/EN / IT/EN security and privacy
|-- LICENSE                    Licenza Apache 2.0 / Apache 2.0 licence
`-- NOTICE                     Diritti su contenuti e marchi / Content and trademark rights
```

Le catture `assets/apps/*.mov`, incluso `planciacomandi.mov`, e i sorgenti dei tool esclusi da
`.gitignore` sono file locali: non fanno parte del sito e non vanno aggiunti a Git. `tmp/` ospita
eventuali verifiche temporanee ignorate. Non sono presenti suite di test, script di build o
workflow CI nel checkout; i controlli proporzionati sono descritti in `AGENTS.md` e `PLAN.md`.

Captures matching `assets/apps/*.mov`, including `planciacomandi.mov`, and tool sources excluded
by `.gitignore` stay local and must not be added to Git. `tmp/` holds ignored temporary checks.
The checkout has no test suite, build scripts or CI workflows; proportionate checks are described
in `AGENTS.md` and `PLAN.md`.
