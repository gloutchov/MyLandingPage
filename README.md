# Glauco Silvestri — personal landing page

Landing page statica personale, pronta per GitHub Pages. Non richiede build, dipendenze o servizi esterni.

## Anteprima locale

Da PowerShell, nella cartella del progetto:

```powershell
python -m http.server 8000
```

Aprire quindi `http://localhost:8000`.

## Pubblicazione su GitHub Pages

1. Creare un repository GitHub e caricare il contenuto di questa cartella nel branch principale.
2. In **Settings → Pages**, scegliere **Deploy from a branch**.
3. Selezionare il branch principale e la cartella `/ (root)`.
4. Salvare e attendere la pubblicazione.

Tutti i percorsi sono relativi e la pagina può essere pubblicata sia in un repository utente sia in un project site.

Le GIF originali dei tool restano disponibili solo nella cartella di lavoro locale. Il repository pubblico usa copie MP4 ottimizzate e poster statici per ridurre sensibilmente il peso trasferito al browser. I README tecnici dei tool interni non vengono pubblicati.
