**Modal**

Alla fine del paragrafo introduttivo è presente un bottone che apre un modal. Questo bottone è stato creato utilizzando il componente `modal-component-intro.html` che si trova all'interno della cartella `_includes`.
Per richiamarlo è necessario fare le seguenti operazioni:

- Creare la variabile per includere il contenuto del modal che si trova all'interno di un file```.md```:
{% raw %}
```
{% capture dataset_details %}
{% include_relative dataset-details.md %}
{% endcapture %}
```
{% endraw %}    
- Includere lo snippet di codice seguente dove si vuole visualizzarlo (nell'esempio all'interno del file `introduction.md`):
{% raw %}
```
{% include modal-component-intro.html title="Dettagli del dataset" content=dataset_details %}
```
{% endraw %}

- `title="Dettagli del dataset"` è il testo visualizzato nel bottone che apre il modal.
- `size`= è la dimensione del modal. Può essere `sm`, Default, `lg`, `xl`.
- `img`= è l'immagine visualizzata sopra il bottone, utilizzabile anch'essa per aprire il modal (opzionale).
