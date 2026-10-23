**Aggiunta di testo in una colonna**

Il blocco precedente è un testo introduttivo, scritto interamente in _markdown_. Questo testo è stato scritto nel file `introduction.md` ed appare in una singola colonna (layout: `one-column.html`).

Per caricare il paragrafo all'interno della pagina è necessario fare le seguenti operazioni:
- Creare una variabile in `single.md` che includa il contenuto del file `introduction.md` utilizzando la seguente sintassi:
{% raw %}
```
{% capture introduction_content %}
{% include_relative introduction.md %}
{% endcapture %}
```
{% endraw %}
- Inserire la variabile all'interno del layout `one-column.html`:
{% raw %}
```
{% include one-column.html dimension="small" content=introduction_content %}
```
{% endraw %}
- Inserire le 4 righe di codice appena scritte all'interno del file `single.markdown` nel punto della pagina in cui si vuole visualizzare il paragrafo.
- Il layout `one-column.html` è stato creato per visualizzare un solo paragrafo di testo all'interno di una pagina. Questo layout si trova all'interno della cartella `_includes`

N.B. Il layout `one-column.html` accetta due parametri:
- `dimension`: accetta il valore: `small`. Questo valore definisce la suddivisione della griglia bootstrap secondo lo schema `col-md-8 col-offset-2`. Questo valore è stato scelto per visualizzare il paragrafo in una colonna centrata all'interno della pagina e garantisce una buona leggibilità del testo.
- `container`: accetta il valore: `fluid`. Questo valore definisce la larghezza del contenitore in cui è inserito il paragrafo. Il valore `fluid` permette di visualizzare il paragrafo a tutta larghezza della pagina e si adatta a grafici complessi.