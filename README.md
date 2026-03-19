Cosa deve fare

Una homepage con griglia di prodotti — nome, immagine, prezzo, bottone "Aggiungi al carrello"
Un carrello accessibile da un'icona in navbar con il numero di prodotti dentro
Nella pagina carrello: lista prodotti aggiunti, quantità modificabile, rimozione singolo prodotto, totale calcolato automaticamente
Svuota carrello — bottone per rimuovere tutto
I dati del carrello persistono al refresh (localStorage)

src/
├── CartContext.jsx ← context + provider + logica carrello
├── App.jsx ← router
├── pages/
│ ├── Homepage.jsx ← griglia prodotti
│ └── Cart.jsx ← pagina carrello
├── components/
│ ├── Navbar.jsx ← con icona carrello e contatore
│ └── ProductCard.jsx ← singola card prodotto
└── products.json ← dati finti
