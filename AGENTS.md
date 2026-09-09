# Istruzioni operative — mylandingpage

## Scopo

Questo repository contiene la landing page personale statica di Glauco Silvestri, pubblicata
direttamente da GitHub Pages. Non richiede build, package manager, framework, backend o servizi
esterni.

## File principali

- `index.html`: contenuto semantico italiano di fallback e struttura della pagina.
- `styles.css`: design responsive e temi chiaro/scuro.
- `translations.js`: dizionari italiano/inglese, da mantenere sempre sincronizzati.
- `i18n.js`: rilevamento, selezione e persistenza della lingua.
- `theme.js`: rilevamento, selezione e persistenza del tema.
- `script.js`: navigazione, reveal, indicatore di scorrimento e gestione dei video.
- `assets/`: immagini e media effettivamente pubblicabili.
- `README.md`, `SECURITY_MODEL.md`, `LICENSE`: documentazione e condizioni d'uso.

## Regole di modifica

- Controllare il worktree prima di intervenire e non sovrascrivere modifiche dell'utente.
- Preferire patch piccole e coerenti con l'architettura statica esistente.
- Non introdurre dipendenze o un processo di build senza una motivazione esplicita.
- Conservare HTML semantico, navigazione da tastiera, focus visibile e supporto a
  `prefers-reduced-motion`.
- Verificare sempre desktop e mobile alle soglie principali di 980, 780 e 580 px.
- Ogni testo visibile aggiunto in `index.html` deve avere una chiave corrispondente e sincronizzata
  in entrambe le lingue di `translations.js`.
- Ogni nuovo colore o componente deve risultare leggibile in entrambi i temi.
- Usare percorsi relativi, compatibili con la pubblicazione nella sottocartella GitHub Pages.
- Aggiornare il parametro di cache-busting degli asset modificati in `index.html`.

## Sicurezza e contenuti pubblici

- Non committare segreti, token, documenti interni, log o dati aziendali riservati.
- `STARTUP_PREFERENCES.md` è un riferimento locale e deve restare fuori da Git.
- Non reintrodurre GIF o MP4 sorgente non sfocati. Il sito deve usare soltanto i file
  `*-blurred.mp4` e i poster approvati.
- Prima di aggiungere CV, fotografie, schermate o loghi, verificare che siano destinati alla
  pubblicazione e coerenti con `SECURITY_MODEL.md`.
- Le chiavi GitHub o altri segreti non devono mai essere usati dal browser per recuperare dati
  privati. I conteggi privati sono aggiornati manualmente.
- Mantenere una Content Security Policy compatibile con le funzionalità effettive del sito.

## Verifica proporzionata

Il progetto non adotta una suite di test automatica. Prima di consegnare una modifica:

1. eseguire `git diff --check`;
2. verificare che tutti i percorsi locali referenziati da `index.html` esistano;
3. eseguire `node --check` sui file JavaScript;
4. avviare `python -m http.server 8000` ed effettuare uno smoke test;
5. controllare italiano e inglese, tema chiaro e scuro, menu mobile e riduzione movimento;
6. riportare chiaramente le verifiche non eseguibili nell'ambiente corrente.

## Git e pubblicazione

- Prima di operazioni Git/GitHub verificare l'identità locale e l'account GitHub autenticato.
- Usare un branch dedicato per modifiche funzionali o strutturali; mantenere i commit focalizzati.
- Non creare tag, release o workflow CI per normali aggiornamenti di contenuto, salvo richiesta
  esplicita.
- Richiedere l'avallo del proprietario prima di merge, force-push o riscritture della cronologia.
