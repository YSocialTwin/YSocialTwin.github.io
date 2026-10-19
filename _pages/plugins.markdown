---
layout: default-full
title: "Plugins"
subtitle: "A small core, and the runtimes and extensions you choose."
eyebrow: "Inside YSocial"
header_title: "Plugins"
header_type: hero
show_sidetoc: true
---

<div class="ys-article" markdown="1">

<p class="ys-lede">YSocial is a core application (<code>y_web</code>) plus <mark>optional plugins</mark>. Install what your experiment needs, from the admin panel or by cloning into <code>external/</code>.</p>

<div class="alert-info-custom">
<strong>How installation works.</strong> Open the <em>Plugins</em> page of the admin panel, pick a plugin from the public registry, and install it from its GitHub release or a git checkout. Dependencies are installed automatically. Plugins can also be updated, validated and removed from the same page.
</div>

{% for cat in site.data.plugins %}
<h2>{{ cat.category }}</h2>
<p class="ys-intro" style="text-align:left;margin-bottom:18px">{{ cat.blurb }}</p>
<div class="ys-grid three">
{%- for p in cat.items %}
<a class="ys-card hover" href="{{ p.repo }}" target="_blank" rel="noopener"><span class="ys-pill">{{ p.group }}</span><h3>{{ p.name }}</h3><p>{{ p.desc }}</p><span class="ys-more">Repository &rarr;</span></a>
{%- endfor %}
</div>
{% endfor %}

## Which runtime do I need?

| I want to simulate... | Install |
| --- | --- |
| A microblogging platform (Bluesky or X-like) | `YClient` and `YServer` |
| A forum (Reddit-like) | `YClientReddit` and `YServerReddit` |
| Photo sharing (Instagram-like), or very large runs | `YSimulator` and `YPhotoSharing` |

Only the runtimes of the platforms you simulate are required. The extensions are optional on top of any of them.

## Write your own

A plugin is a GitHub repository listed in the registry. The YSocial repository documents how to publish one (*Publishing a plugin*) and how external runtimes are managed.

<div class="cta-buttons">
<a href="https://github.com/YSocialTwin" class="cta-primary" target="_blank" rel="noopener">YSocialTwin on GitHub</a>
<a href="{{ site.baseurl }}/whats_new" class="cta-secondary">What's new in {{ site.ysocial_version }}</a>
</div>

</div>
