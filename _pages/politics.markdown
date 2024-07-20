---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default-full
title:  "Politics"
subtitle: "Welcome to y/politics!"
show_sidetoc: true
header_type: hero #base, post, hero,image, splash
header_img: assets/images/politics1.jpg
header_title: "Agorà"
vega: true
---

[//]: # (Introduction section)
{% capture introduction_content %}
    {% include_relative snippets/politics/introduction.md %}
{% endcapture %}

{% include one-column.html dimension="small" content=introduction_content %}

[//]: # (Chart Two columns)

<div class={% if include.container=='fluid' %}"container-fluid"{% else %}"container"{% endif %}>
<h3 style="text-align: center"> Discussion Thread Examples </h3>
</div>

{% capture introduction_images %}
{% include_relative snippets/politics/thread_ex1.md %}
{% endcapture %}

{% capture section_1_content %}
    {% include_relative snippets/politics/thread_ex2.md %}
{% endcapture %}

{% include two-columns.html col-one=introduction_images col-two=section_1_content %}



[//]: # (Chart Timeline Stragi)
<br>
{% capture activity_trend %}
{% include_relative snippets/politics/activity_trend.md %}
{% endcapture %}

{% include one-column.html dimension="small" content=activity_trend %}


[//]: # (Chart Two columns)

<div class={% if include.container=='fluid' %}"container-fluid"{% else %}"container"{% endif %}>
<h3 style="text-align: center"> Political Leaning & Age Distribution </h3>
</div>

{% capture introduction_images %}
{% include_relative snippets/politics/political_leaning.md %}
{% endcapture %}

{% capture section_1_content %}
    {% include_relative snippets/politics/age_distribution.md %}
{% endcapture %}

{% include two-columns.html col-one=introduction_images col-two=section_1_content %}

[//]: # (Chart Two columns)

<div class={% if include.container=='fluid' %}"container-fluid"{% else %}"container"{% endif %}>
<h3 style="text-align: center"> Generated Content Statistics </h3>
</div>

{% capture introduction_images %}
{% include_relative snippets/politics/content_left.md %}
{% endcapture %}

{% capture section_1_content %}
    {% include_relative snippets/politics/content_right.md %}
{% endcapture %}

{% include two-columns.html col-one=introduction_images col-two=section_1_content %}

[//]: # (Chart Two columns)

<div class={% if include.container=='fluid' %}"container-fluid"{% else %}"container"{% endif %}>
<h3 style="text-align: center"> Viral Contents and Recommender Impact </h3>
</div>

{% capture introduction_images %}
{% include_relative snippets/politics/content_left1.md %}
{% endcapture %}

{% capture section_1_content %}
    {% include_relative snippets/politics/content_right1.md %}
{% endcapture %}

{% include two-columns.html col-one=introduction_images col-two=section_1_content %}
