# Mappa delle stragi

L’elaborazione su base geografica dell’insieme dei dati.
La mappa mostra le stragi suddivise per matrice politica e luogo dell'evento.
La dimensione dei cerchi è proporzionale al numero di vittime.

{% capture mappa_stragi %}
{% include_relative snippets/mappa-stragi.md %}
{% endcapture %}

{% include modal-component.html title="Mappa delle stragi in Italia" size="xl" content=mappa_stragi id="mappa-stragi" img="mappa_stragi.png" %}

<br>

{% capture modal_mappa_tech %}
{% include_relative snippets/tech/modal-mappa-tech.md %}
{% endcapture %}
{% include tech-content.html content=modal_mappa_tech %}
<br>