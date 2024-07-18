{% capture onepage_tech %}
{% include_relative snippets/tech/onepage-tech.md %}
{% endcapture %}

{% include tech-content.html content=onepage_tech %}

# Agorà: discussing political issues

The y/politics scenario describes a social network where users can discuss political issues. 

To allows LLM agent to focus on political discussions the topics provided in the [config.json](../../../assets/recipes/config_politics1k.json) file are the following:

```json
{"interests": [
      "gun control", "immigration", "minorities discrimination", "economics", 
      "safety", "healthcare", "taxes", "crime", "abortion", "climate change", 
      "culture", "national identity", "human rights", "LGBTQ+", "education issues",
      "social issues", "death penalty", "drugs legislation", "corruption", "justice", 
      "AI regulation", "sustainable energy", "pollution control", "science funding", 
      "private sector", "industry", "tourism", "welfare", "family support", 
      "elections", "religion", "law enforcement", "constitutional rights", 
      "war", "terrorism", "pace-keeping operations", "veteran affairs",
      "constitution"
    ]
}
```

Moreover, agents are segmented by the following political leanings

```json
{
  "political_leanings": [
    "Democrat",
    "Republican",
    "Libertarian",
    "Green",
    "Independent",
    "Alt-Right",
    "Alt-Left",
    "Anarchist",
    "Centrist"
  ]
}
```

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