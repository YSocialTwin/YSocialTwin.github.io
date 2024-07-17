---
layout: home
title:  "Folium Map"
subtitle: "Come incorporare una mappa realizzata con Folium"
header_type: hero #base, post, hero,image, splash
header_img: assets/images/folium_map.webp
header_title: "Folium maps"
vega: false
---


# Incorporare una mappa realizzata con Folium

In questa pagina viene spiegato come incorporare una mappa realizzata con Folium in una pagina web. Folium è una libreria Python che permette di creare mappe interattive utilizzando Leaflet.js. Per incorporare una mappa realizzata con Folium in una pagina web, è necessario salvare la mappa in un file `.html` e includerlo nella pagina web.

## Incorporare una mappa realizzata con Folium in una pagina web

Per incorporare una mappa realizzata con Folium in una pagina web, è necessario seguire i seguenti passaggi:
- Creare una mappa con Folium
- Salvare la mappa in un file `.html`
- Includere il file `.html` nella pagina web
    - Utilizzare il tag `iframe` per incorporare il file `.html` nella pagina web
    - Specificare il percorso del file `.html` come valore dell'attributo `src` del tag `iframe`
    - Specificare le dimensioni della mappa utilizzando gli attributi `width` e `height` del tag `iframe`
    - Esempio di codice HTML per incorporare una mappa realizzata con Folium in una pagina web:
    
```<iframe src="{{site.baseurl}}/assets/charts/map.html" width="100%" height="500"></iframe>```

**Nota che la mappa realizzata con Folium è stata esportata con width e height a 100%.**

È possibile regolare le dimensioni della mappa modificando i valori degli attributi `width` e `height` del tag `iframe`.

## Metodo alternativo in questo tema:

Per questo tema è stato realizzato un componente `html` per incorporare una mappa realizzata con Folium.
È possibile utilizzare infatti il tag `include` di Jekyll per includere il file `.html` della mappa nella pagina web. Per utilizzare questo metodo, è necessario creare il file `.html` con folium e includerlo nella pagina web utilizzando il tag `ìnclude` e importare `folium-map.html.`.

Sarà possibile regolare le dimensioni della mappa modificando i valori degli attributi `width` e `height` del tag `iframe`.
Ecco un esempio:

`{% include folium-map.html folium-map="usa.html"  width="100%" height="500px" %}`

{% include folium-map.html folium-map="usa.html"  width="100%" height="500px" %}