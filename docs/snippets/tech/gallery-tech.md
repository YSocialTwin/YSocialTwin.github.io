Nella sezione qui sopra ci sono differenti esempi di componenti che possono essere utilizzati per realizzare una pagina web.che

**Cards Gallery**: una galleria di immagini realizzata partendo da un file di dati in formato YAML. Ogni immagine è rappresentata da una card con un'immagine, un titolo e una descrizione.
{% raw %}
```markdown
{% include img-gallery-cards.html width='23%' datasource=site.data.img-selector url='url' name='name' description='description' %}
```
{% endraw %}

I parametri accettati da questo componente sono:
- `width`: la larghezza della card in percentuale.
- `datasource`: il nome del file YAML contenente i dati.
- `url`: il campo del file YAML contenente l'URL dell'immagine.
- `name`: il campo del file YAML contenente il titolo dell'immagine.
- `description`: il campo del file YAML contenente la descrizione dell'immagine.

**Image selector**: un selettore di immagini realizzato partendo da un file di dati in formato YAML. Si tratta di un elenco di pulsanti che cambiano l'immagine nel `div` accanto.
{% raw %}
```markdown
{% include img-selector.html dataset="img-selector" button_name="name" url="url" %}
```
{% endraw %}
I parametri accettati da questo componente sono:
- `dataset`: il nome del file YAML contenente i dati.
- `button_name`: il campo del file YAML contenente il testo del pulsante.
- `url`: il campo del file YAML contenente l'URL dell'immagine.

**Chart selector**: un selettore di grafici realizzato partendo da un file di dati in formato YAML. Si tratta di un elenco di pulsanti che cambiano il grafico nel `div` sottostante.
{% raw %}
```markdown
{% include chart-selector.html dimension="small" dataset="chart-selector" %}
```
{% endraw %}
I parametri accettati da questo componente sono:
- `dimension`: la dimensione del grafico. Può essere `small`.
- `dataset`: il nome del file YAML contenente i dati.
