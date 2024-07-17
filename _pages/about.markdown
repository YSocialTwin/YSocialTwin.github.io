---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
title:  "Y Server"
subtitle: "Server guide and how to"
show_sidetoc: true
header_type: hero #base, post, hero,image, splash
header_img: assets/images/aboutus.jpg
header_title: "Y Server"
vega: true
---


# Cosa è Jekyll

Jekyll è un **generatore di siti web statici** pensato per la creazione di siti web personali, blog, pagine di documentazione siti web di progetti. Jekyll è scritto da Tom Preston-Werner, co-fondatore di GitHub. Jekyll è il motore di GitHub Pages, un servizio di hosting web gratuito offerto da GitHub per i repository Git.

Jekyll **prende il contenuto scritto in file di testo** ([Markdown]({{site.baseurl}}/markdown/)), **applica modelli** a quel contenuto **e genera un sito web statico** pronto per essere pubblicato. L'operazione di generazione del sito web statico è chiamata **build**. 

La struttura (semplificata) del sito web che state visualizzando è la seguente:

```plaintext
.
├── _config.yml
├── _data
│   └── dataset.csv
├── _pages
│   ├── snippets
│   │   ├── introduction.md
│   │   └── chart.md
│   ├── installation.md
│   └── index.md
├── _layouts
│   └── home.html
├── _includes
├── assets
│   ├── images
│   │   └── logo.png
│   ├── css
│   └── charts
│       └── distribution.json
├── docs
└── _site

``` 

La configurazione principale del sito è definita nel file `_config.yml`. I dati utilizzati nel sito sono memorizzati nella cartella `_data`, con un esempio di dataset in formato CSV. I contenuti delle pagine sono organizzati nella cartella `_pages`, che include file Markdown come `installation.md` e `index.md`, oltre a una sottocartella `snippets` con ulteriori frammenti di contenuto, che vengono caricati nella pagina `single.md`. I layout html da applicare alle pagine sono definiti nella cartella `_layouts`. La cartella `_includes` è utilizzata per includere file riutilizzabili in altre parti del sito (generalmente parti di layout). La cartella `assets` contiene risorse statiche come immagini, file CSS e i grafici (salvati come `.json`). La cartella _site è la directory di output dove viene generato il sito statico dopo la build, mentre la cartella docs è dove viene salvato il sito statico che poi viene caricato su _github pages_.

## Bundle e comandi da terminale

Bundler è uno strumento per la gestione delle dipendenze in progetti Ruby, che consente di installare e mantenere in modo coerente le gemme necessarie specificate nel file Gemfile. Bundler non crea direttamente la build, ma gestisce le dipendenze necessarie per eseguire i processi di build di Jekyll.

Per installare le dipendenze necessarie, eseguire il comando:

```bash
bundle install
```
Successivamente, per avviare il server locale, eseguire il comando:

```bash
bundle exec jekyll serve
```

Il sito web sarà disponibile all'indirizzo `http://localhost:4000`.

Modificare il file `_build_config.yml` con le impostazioni del server di produzione (in questo caso _github pages_):

```bash
url: "https://danielefadda.github.io"
baseurl: "/sbd-master-template/" 
destination: "docs"
```

Quindi generare il sito web statico, eseguendo il comando:

```bash
bundle exec jekyll build --config _config.yml,_build_config.yml
```

Dopo l'esecuzione del comando, il sito web statico sarà disponibile nella cartella `docs` pronto per essere caricato online. Nel caso di _github pages_ è obbligatorio denominare la cartella in cui si crea la build: `docs`.

<br>
# Configurazione generale

Il file `_config.yml` contiene le impostazioni del sito web, come il titolo, la descrizione, l'URL di base, i plugin e i temi. 


```yaml
title: "SBD Progettone Template"
subtitle: "un template per i progetti del master"
...
```

<br>
# Personalizzazione del tema

Per personalizzare il tema generale è possibile modificare la variabile `skin` nel file `_config.yml`. 
```yaml
chulapa-skin:
  skin:  "graymor"
```
L'elenco dei temi disponibili è il seguente:
`graymor`, `gitdev-dark`, `gitdev`, `universal`, `academia`, `gitdev`, `towards`, `pear`, `twitter-lights-out`, `twitter-dim`, `wandoo`, `lymcha`, `twitter`, `chulapa`, `sunset`, `sunset`, `minty`, `lux`, `journal`, `deeply`.

È possibile personalizzare in maniera più specifica la skin scelta modificando le variabili di colore nel file `_config.yml`.

```yaml
chulapa-skin:
  vars:
    primary-color: "#ff0000"
    body-bg: "#fbf1ed"
```

a [questo link](https://dieghernan.github.io/chulapa/docs/variable-dictionary) è possibile trovare la lista delle variabili modificabili 

<br>
# Fonts

Per importare font diversi da quelli del tema attraverso il servizio _google fonts_ è necessario inserire all'interno del file `_config.yml` il riferimento che si può ottenere 
da [google fonts](https://fonts.google.com/?classification=Monospace)
```yaml
googlefonts:
  - url: "https://fonts.googleapis.com/css2?family=Lekton:ital,wght@0,400;0,700;1,400&display=swap"
```
per impostare il font in tutto il sito è sufficiente aggiungere le variabili nel file `_config.yml`
```yaml
chulapa-skin:
  vars:
    headings-font-family: "Lekton"
```
Infine è possibile utilizzare i font anche in maniera più mirata, ad esempio all'interno di una sola classe. 
Apri il file `assets/css/custom.scss` per vedere come è stata creata la classe `.comic-neue-regular` utilizzata nella seguente riga:

<div class="comic-neue-regular" style="font-size: 20px; color:darkred">Questo è un test per vedere se ho importato bene l'orribile font <span class="comic-neue-bold">Comic Neue</span></div>

<br>
## Navigation Bar

La barra di navigazione è definita nel file `_includes/navbar.html`. 
Tale sezione non dovrà essere modificata direttamente ma andrà aggiornato il file `_config.yml` con le informazioni corrette. 
Lasciare invariato il logo del master prima del titolo del progetto.
Per modificare il menu `nav_links`.

```yaml
navbar:
  style :  dual #non modificare
  ...
```

<br>
## Footer

La sezione del footer è definita nel file `_includes/footer.html`. Tale sezione non dovrà essere modificata direttamente ma andrà aggiornato il file `_config.yml` con le informazioni corrette.
Nello specifico andranno aggiornati i seguenti campi:
```yaml
github_repo:
  - name: "Group 0 - Project repository"
    url: "https://github.com/sobigdata-master/progettone-template"
  - name: "Group 0 - Website repository"
    url: "https://github.com/sobigdata-master/progettone-template"
```
Una volta aggiornati i campi, modificare il file `_data/members.yml` aggiungendo le informazioni dei componenti del gruppo.

<br>

# Front Matter

Il Front Matter è una sezione che si trova all'inizio di un file e che contiene metadati relativi al file stesso. Il Front Matter è delimitato da tre trattini (`---`) e può contenere variabili, come il layout, il titolo, il sottotitolo, l'immagine di copertina, il tipo di intestazione, ecc. 
Tali informazioni vengono utilizzate per personalizzare il contenuto della pagina. Le informazioni contenute nel Front Matter di ciascuna pagina sono accessibili tramite variabili Liquid all'interno del file e vengono richiamate nei template attraverso la dichiarazione `{{ page.nome-della-variabile }}`.

## Header

In questo boilerplate sono presenti diversi tipi di header: `base`, `post`, `hero`, `image`, `splash`.

```markdown
---
header_type: hero
header_img: assets/images/Jekyll_Logo.png
header_title: "Progettone Template"
---
```

## Layout

```markdown
---
layout: home
title:  "Home"
subtitle: "un template per i progetti del master SoBigData"
show_sidetoc: true
header_type: hero #base, post, hero,image, splash
header_img: assets/images/Jekyll_Logo.png
header_title: "Progettone Template"
vega: true
---
```

N.B. title si riferisce al titolo della pagina mentre header_title è il titolo che appare nell'header della pagina.



## Icons

Per inserire icone, è possibile utilizzare il sito [Font Awesome](https://fontawesome.com/search).

<i class="fa-solid fa-pen-nib"></i> Per aggiungere un'icona al testo, è sufficiente inserire il codice HTML corrispondente.

