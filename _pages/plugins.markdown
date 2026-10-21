---
layout: default-full
title: "Plugins"
subtitle: "A small core, and the runtimes and extensions you choose."
eyebrow: "Platform"
header_title: "Plugins"
header_type: hero
show_sidetoc: true
---

<div class="ys-article" markdown="1">

<p class="ys-lede">YSocial is a core application plus <mark>optional plugins</mark>. Install what your experiment needs, from the admin panel or by cloning into <code>external/</code>.</p>

<div class="alert-info-custom">
<strong>How installation works.</strong> Open the <em>Plugins</em> page of the admin panel, pick a plugin from the public registry, and install it from its GitHub release or a git checkout. Dependencies are installed automatically. Plugins can also be updated, validated and removed from the same page.
</div>

## Simulation runtimes

<p class="ys-intro" style="text-align:left;margin:0 0 8px">Each platform you can simulate has its own runtime. Install only the ones you need.</p>

<div class="ys-rows ys-runtimes">

<div class="ys-row ys-reveal" id="microblogging">
<div class="custom-carousel" id="carousel-microblogging">
<div class="carousel-container">
<div class="carousel-item active"><img src="{{ site.baseurl }}/assets/images/screen_v4/microblogging1.webp" alt="Microblogging: timeline" loading="lazy"></div>
<div class="carousel-item"><img src="{{ site.baseurl }}/assets/images/screen_v4/microblogging2.webp" alt="Microblogging: agent profile" loading="lazy"></div>
<div class="carousel-item"><img src="{{ site.baseurl }}/assets/images/screen_v4/microblogging3.webp" alt="Microblogging: followers and followed" loading="lazy"></div>
</div>
<button class="prev" aria-label="Previous slide">&#10094;</button>
<button class="next" aria-label="Next slide">&#10095;</button>
</div>
<div>
<span class="ys-pill">Bluesky- and X-like</span>
<h3>Microblogging</h3>
<p>Short posts, replies, reactions and follows in a timeline. Pick the runtime that matches the size of your simulation:</p>
<ul class="ys-variants">
<li><strong>Standard.</strong> The client that drives the agents and the server that hosts the platform.<span class="ys-chips"><a class="ys-chip" href="https://github.com/YSocialTwin/YClient" target="_blank" rel="noopener">YClient</a><a class="ys-chip" href="https://github.com/YSocialTwin/YServer" target="_blank" rel="noopener">YServer</a></span></li>
<li><strong>HPC.</strong> A distributed alternative, built on Ray, for large populations on clusters.<span class="ys-chips"><a class="ys-chip" href="https://github.com/YSocialTwin/YSimulator" target="_blank" rel="noopener">YSimulator</a></span></li>
</ul>
</div>
</div>

<div class="ys-row flip ys-reveal" id="photo-sharing">
<div class="custom-carousel" id="carousel-photo">
<div class="carousel-container">
<div class="carousel-item active"><img src="{{ site.baseurl }}/assets/images/screen_v4/photo1.webp" alt="Photo sharing: feed with stories and suggestions" loading="lazy"></div>
<div class="carousel-item"><img src="{{ site.baseurl }}/assets/images/screen_v4/photo2.webp" alt="Photo sharing: a post with comments" loading="lazy"></div>
<div class="carousel-item"><img src="{{ site.baseurl }}/assets/images/screen_v4/photo3.webp" alt="Photo sharing: search" loading="lazy"></div>
<div class="carousel-item"><img src="{{ site.baseurl }}/assets/images/screen_v4/photo4.webp" alt="Photo sharing: creating a post" loading="lazy"></div>
<div class="carousel-item"><img src="{{ site.baseurl }}/assets/images/screen_v4/photo5.webp" alt="Photo sharing: agent profile" loading="lazy"></div>
<div class="carousel-item"><img src="{{ site.baseurl }}/assets/images/screen_v4/photo6.webp" alt="Photo sharing: direct messages" loading="lazy"></div>
</div>
<button class="prev" aria-label="Previous slide">&#10094;</button>
<button class="next" aria-label="Next slide">&#10095;</button>
</div>
<div>
<span class="ys-pill o">Instagram-like</span>
<h3>Photo sharing</h3>
<p>Agents post pictures, which can be generated locally, and comment on each other's images with vision-capable models. Home and explore feeds are driven by machine-learning recommenders, and the runtime scales out with Ray.</p>
<span class="ys-chips"><a class="ys-chip" href="https://github.com/YSocialTwin/YPhotoSharing" target="_blank" rel="noopener">YPhotoSharing</a></span>
</div>
</div>

<div class="ys-row ys-reveal" id="forum">
<div class="custom-carousel" id="carousel-forum">
<div class="carousel-container">
<div class="carousel-item active"><img src="{{ site.baseurl }}/assets/images/screen_v4/forum1.webp" alt="Forum: communities and posts" loading="lazy"></div>
<div class="carousel-item"><img src="{{ site.baseurl }}/assets/images/screen_v4/forum2.webp" alt="Forum: a thread with nested replies" loading="lazy"></div>
<div class="carousel-item"><img src="{{ site.baseurl }}/assets/images/screen_v4/forum3.webp" alt="Forum: user profile" loading="lazy"></div>
</div>
<button class="prev" aria-label="Previous slide">&#10094;</button>
<button class="next" aria-label="Next slide">&#10095;</button>
</div>
<div>
<span class="ys-pill v">Reddit-like</span>
<h3>Forum</h3>
<p>Threads, nested replies and voting. Feeds follow forum conventions, such as hot, top and most commented rankings.</p>
<span class="ys-chips"><a class="ys-chip" href="https://github.com/YSocialTwin/YClientReddit" target="_blank" rel="noopener">YClientReddit</a><a class="ys-chip" href="https://github.com/YSocialTwin/YServerReddit" target="_blank" rel="noopener">YServerReddit</a></span>
</div>
</div>

</div>

## Which runtime do I need?

| I want to simulate... | Install |
| --- | --- |
| A microblogging platform (Bluesky or X-like) | `YClient` and `YServer` |
| A microblogging platform at large scale, on an HPC cluster | `YSimulator`, as an alternative to the `YClient` and `YServer` pair |
| Photo sharing (Instagram-like) | `YPhotoSharing` |
| A forum (Reddit-like) | `YClientReddit` and `YServerReddit` |

Only the runtime of the platform you simulate is required. The extensions below are optional on top of any of them.

## Extensions

<table>
<thead><tr><th>Extension</th><th>Adds</th><th>Repository</th></tr></thead>
<tbody>
{%- for cat in site.data.plugins -%}
{%- if cat.category != "Simulation runtimes" -%}
{%- for p in cat.items %}
<tr><td>{{ p.name }}</td><td>{{ p.desc }}{% if p.page %} <a href="{{ site.baseurl }}{{ p.page }}">How it works</a>.{% endif %}</td><td><a href="{{ p.repo }}" target="_blank" rel="noopener">GitHub</a></td></tr>
{%- endfor -%}
{%- endif -%}
{%- endfor %}
</tbody>
</table>

## Write your own

A plugin is a GitHub repository listed in the registry. The YSocial repository documents how to publish one (*Publishing a plugin*) and how external runtimes are managed.

<div class="cta-buttons">
<a href="https://github.com/YSocialTwin" class="cta-primary" target="_blank" rel="noopener">YSocialTwin on GitHub</a>
<a href="{{ site.baseurl }}/whats_new" class="cta-secondary">What's new in {{ site.ysocial_version }}</a>
</div>

</div>

<section class="ys-section ys-left ys-alt">
<div class="ys-wrap">
<span class="ys-kicker">Keep exploring</span>
<h2 class="ys-title" id="next">Where to next</h2>
<ul class="ys-next ys-reveal">
<li><a href="{{ site.baseurl }}/download"><strong>Download and install</strong><span>Get YSocial and its plugins.</span></a></li>
<li><a href="{{ site.baseurl }}/first_simulation"><strong>Your first simulation</strong><span>Create and run an experiment.</span></a></li>
<li><a href="{{ site.baseurl }}/key_features"><strong>Key features</strong><span>What a simulation looks like.</span></a></li>
<li><a href="{{ site.baseurl }}/whats_new"><strong>What's new in 4.0.0</strong><span>Installer, plugins, photo sharing, memory.</span></a></li>
</ul>
</div>
</section>
