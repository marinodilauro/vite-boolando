# Vue E-commerce Project

Questo progetto è una riproduzione di un e-commerce simile a Zalando.it, sviluppato utilizzando Vue.js. L'applicazione è completamente responsive e offre un'esperienza utente fluida su dispositivi di diverse dimensioni.

## Caratteristiche principali

### Catalogo prodotti
- Visualizzazione di una vasta gamma di prodotti in una griglia responsive
- Ogni prodotto mostra immagine, marca, nome, prezzo e eventuali sconti

### Lista dei preferiti
- Gli utenti possono aggiungere/rimuovere prodotti dalla lista dei preferiti
- Un contatore dinamico nell'header mostra il numero di prodotti nei preferiti

### Dettagli prodotto in modale
- Cliccando sul nome del prodotto si apre una modale con:
  - Slider di immagini del prodotto
  - Dettagli completi del prodotto
  - Pulsante per l'acquisto

### Design responsive
- Layout fluido che si adatta a schermi di diverse dimensioni
- Menu hamburger per la navigazione su dispositivi mobili

## Tecnologie utilizzate

- Vue.js 3
- Bootstrap 5
- Sass per lo styling
- Font Awesome per le icone

## Struttura del progetto

Il progetto è organizzato in componenti Vue, ciascuno responsabile di una specifica funzionalità:

- `AppHeader.vue`: Navbar responsive con logo, link di navigazione e icone utente
- `ProductCard.vue`: Card del prodotto con immagine, dettagli e funzionalità "preferiti"
- `ProductModal.vue`: Modale con slider immagini e dettagli del prodotto
- `AppLogo.vue`: Componente logo
- `ProductList.vue`: Contenitore principale per la visualizzazione dei prodotti

## Come iniziare

1. Clona il repository
2. Installa le dipendenze con `npm install`
3. Avvia il server di sviluppo con `npm run serve`
4. Apri il browser su `http://localhost:8080`

## Personalizzazione

Il progetto utilizza variabili Sass per i colori principali e le dimensioni. Puoi personalizzare l'aspetto modificando il file `src/styles/variables.scss`.

## Contribuire

Siamo aperti a contributi! Se hai suggerimenti per migliorare il progetto, non esitare ad aprire una issue o inviare una pull request.

## Licenza

Questo progetto è rilasciato sotto la licenza MIT. Vedi il file `LICENSE` per maggiori dettagli.