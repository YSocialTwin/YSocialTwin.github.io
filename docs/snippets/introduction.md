{% capture onepage_tech %}
{% include_relative snippets/tech/onepage-tech.md %}
{% endcapture %}

{% include tech-content.html content=onepage_tech %}

# L’Atlante delle stragi nazifasciste

L’Atlante delle stragi naziste e fasciste si compone di una banca dati e dei materiali di corredo (documentari, iconografici, video) correlati agli episodi censiti, ospitati all’interno del sito web.

Nella banca dati sono state catalogate e analizzate tutte le stragi e le uccisioni singole di civili e partigiani uccisi al di fuori dello scontro armato, commesse da reparti tedeschi e della Repubblica Sociale Italiana in Italia dopo l’8 settembre 1943, a partire dalle prime uccisioni nel Meridione fino alle stragi della ritirata eseguite in Piemonte, Lombardia, Veneto e Trentino Alto Adige nei giorni successivi alla liberazione.

L’elaborazione su base cronologica e geografica dell’insieme dei dati censiti ha consentito la definizione di una _cronografia della guerra nazista in Italia_, che mette in correlazione modalità, autori, tempi e luoghi della violenza contro gli inermi sul territorio nazionale.

{% capture introduction_tech %}
{% include_relative snippets/tech/introduction-tech.md %}
{% endcapture %}

{% include tech-content.html content=introduction_tech %}

<br>
{% capture dataset_details %}
{% include_relative snippets/dataset-details.md %}
{% endcapture %}

{% include modal-component.html title="Dettagli del dataset" content=dataset_details id="dataset-details" size="lg" %}

{% capture modal_tech %}
{% include_relative snippets/tech/modal-tech.md %}
{% endcapture %}

{% include tech-content.html content=modal_tech %}