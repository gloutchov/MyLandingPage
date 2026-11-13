# Piano di sviluppo — mylandingpage

Il piano registra le attività da questa modifica in avanti; la cronologia precedente resta in Git.
Le milestone `M` si eseguono in ordine numerico e diventano `C`, conservando il numero, dopo la
chiusura. Le attività future `P` hanno una numerazione indipendente e richiedono una decisione
esplicita prima di entrare nel piano esecutivo.

## M1 — Plancia Comandi tra le app personali

- **Obiettivo:** presentare Plancia Comandi come settima e ultima app personale, con descrizione
  bilingue, demo, immagine di anteprima e link alla sua landing page.
- **Branch:** `milestone/M1-plancia-comandi`, da `main` verificato su `origin/main` al commit
  `87f1fc39cce4a6b784a1f400afc4f0921e2b69ca`.
- **Checkpoint previsto:** `milestone/C1`, da creare su `main` solo dopo controllo personale e
  approvazione esplicita del commit finale locale.
- **Versione:** nessun incremento o tag versione previsto per questo aggiornamento di contenuto
  statico; nessuna GitHub release.
- **Fonte dei contenuti:** [landing di Plancia Comandi](https://planciacomandi.glaucosilvestri.it/),
  consultata il 13 novembre 2026; immagine e registrazione fornite dal proprietario.
- **Attività:** aggiungere la scheda dopo Markdown2PDF; sincronizzare italiano e inglese;
  aggiornare il conteggio a 7; usare il PNG come poster e un derivato MP4 ottimizzato e senza audio,
  lasciando il MOV fuori da Git; aggiornare il cache-busting degli asset modificati.
- **Criteri di accettazione:** ordine preservato; link HTTPS corretto con `rel="noreferrer"`;
  testi leggibili in entrambe le lingue e i temi; media locali caricabili; nessun overflow alle
  soglie responsive; video fermo con riduzione movimento; nessuna nuova dipendenza.
- **Verifiche richieste:** `git diff --check`, sintassi JavaScript, parità dei dizionari e
  risoluzione dei percorsi HTML; smoke HTTP; verifica browser desktop/mobile alle soglie di
  980, 780 e 580 px, lingua, tema, menu mobile e riduzione movimento; controllo del derivato MP4.
- **Documentazione:** `README.md`, `SECURITY_MODEL.md`, `PLAN.md`, `MAP.md`; aggiornamento dell'elenco
  documenti in `AGENTS.md`. I manuali separati non sono presenti nel progetto: il README documenta
  questa modifica in entrambe le lingue.
- **Stato:** implementazione e verifiche locali completate; branch pronto per il controllo
  personale del proprietario. Pubblicazione e chiusura ancora da autorizzare.

### Riepilogo e verifiche locali — 13 novembre 2026

Scheda aggiunta dopo Markdown2PDF con link alla landing, testi IT/EN, poster fornito dal
proprietario e demo MP4 H.264 ottimizzata (960 × 642, 15 fps, 31 secondi, 182.662 byte, senza
tracce audio). Il MOV originale è rimasto locale e ignorato. Il conteggio dei progetti è ora 7;
aggiornati cache-busting, README bilingue, modello di sicurezza ed elenco documenti.

Verifiche completate con esito positivo:

- `git diff --check` e `node --check` sui quattro file JavaScript;
- 110 chiavi sincronizzate IT/EN, 125 riferimenti di traduzione risolti, ordine e conteggio app;
- 42 percorsi locali esistenti; HTTP 200 per la pagina e le 42 risorse referenziate;
- decodifica completa del derivato MP4 e verifica dell'assenza di audio;
- Chrome su macOS: 48 combinazioni di larghezza, lingua e tema, a 1440, 981, 980, 979, 781,
  780, 779, 581, 580, 579, 375 e 320 px, senza overflow della pagina o tagli ai contenuti
  della nuova scheda; anteprime ispezionate a 1440, 980, 780, 580 e 375 px;
- video fermo e autoplay disabilitato con riduzione movimento, riproduzione inline in loop
  senza audio con movimento normale;
- menu mobile, chiusura con Escape e dopo navigazione, selettori lingua/tema e persistenza
  dopo reload, focus visibile da tastiera e apertura della landing pubblica;
- nessun errore JavaScript o messaggio di errore nella console durante lo smoke.

**Limiti:** verifica browser eseguita in Chrome con viewport simulate, senza dispositivi fisici
o prove Safari/Firefox. Non esistono suite automatica, build o workflow CI nel checkout;
nessuno aggiunto o avviato. GitHub Pages non è ancora aggiornato: la verifica online del
portfolio e il checkpoint `milestone/C1` seguiranno soltanto l'approvazione del commit.

### Checklist di chiusura

- [x] Identità Git/GitHub verificata e `main` allineato al remoto.
- [x] Branch dedicato creato.
- [x] Implementazione e documentazione completate.
- [x] Verifiche statiche e smoke HTTP eseguiti.
- [x] Layout, lingue, temi, menu e riduzione movimento verificati nel browser.
- [x] Commit locale sul branch dedicato congelato per la consegna di hash, diff, verifiche e limiti.
- [ ] Controllo personale e approvazione esplicita del proprietario sul commit indicato.
- [ ] Merge su `main`, checkpoint `milestone/C1`, push e verifica dei riferimenti remoti.
- [ ] Pubblicazione GitHub Pages verificata, senza avvii manuali o riesecuzioni CI superflui.
- [ ] Voce rinominata `C1` con riepilogo, verifiche e limiti finali.
- [ ] Branch eliminato solo dopo autorizzazione e verifiche di chiusura.

Non sono previsti nuovi workflow: le verifiche locali sono proporzionate alla modifica. Nessun
merge, tag, push o eliminazione del branch precede l'approvazione esplicita del commit esaminato.
Se quel commit cambia, è necessario un nuovo controllo e una nuova approvazione.
