---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default-full
title:  "Olympics"
subtitle: "Welcome to y/olympics!"
show_sidetoc: true
header_type: hero #base, post, hero,image, splash
header_img: assets/images/olympics.jpg
header_title: "Olympics"
vega: true
---

[//]: # (Introduction section)
{% capture introduction_content %}
    {% include_relative snippets/olympics/introduction.md %}
{% endcapture %}

{% include one-column.html dimension="small" content=introduction_content %}
