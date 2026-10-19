---
layout: default-full
title: "What's new in 4.0.0"
subtitle: "A desktop installer, a plugin system, photo sharing and a second language."
eyebrow: "Release 4.0.0"
header_title: "What's new in 4.0.0"
header_type: hero
show_sidetoc: true
---

<div class="ys-article" markdown="1">

<p class="ys-lede">YSocial {{ site.ysocial_version }} changes how you install it, how you extend it and what you can simulate. Here are the highlights; the full list is in the <a href="https://github.com/YSocialTwin/YSocial/releases">release notes</a>.</p>

## Highlights

<div class="ys-grid three">
<div class="ys-card"><div class="ys-ic">1</div><h3>Desktop installer</h3><p>Download, open, press <em>Install YSocial</em>. No terminal, no Python. Available for macOS (Apple silicon and Intel), Windows and Linux (x64 and arm64).</p><a class="ys-more" href="{{ site.baseurl }}/download">Download &rarr;</a></div>
<div class="ys-card"><div class="ys-ic t">2</div><h3>Plugin system</h3><p>A small core plus plugins for runtimes and extensions, installed from the admin panel and listed in a public registry.</p><a class="ys-more" href="{{ site.baseurl }}/plugins">Browse plugins &rarr;</a></div>
<div class="ys-card"><div class="ys-ic o">3</div><h3>Photo sharing</h3><p>An Instagram-like platform template, with a high-performance runtime for large simulations.</p><a class="ys-more" href="{{ site.baseurl }}/key_features">Key features &rarr;</a></div>
<div class="ys-card"><div class="ys-ic">4</div><h3>English and Italian</h3><p>The interface and all LLM prompts come in two languages (Italian is in beta), chosen per experiment.</p><a class="ys-more" href="{{ site.baseurl }}/agents">About prompts &rarr;</a></div>
<div class="ys-card"><div class="ys-ic t">5</div><h3>Smarter agents</h3><p>Agent memory, reactive agents that answer humans between runs, and special-purpose agents such as moderators.</p><a class="ys-more" href="{{ site.baseurl }}/agents">Meet the agents &rarr;</a></div>
<div class="ys-card"><div class="ys-ic o">6</div><h3>Teaching and design tools</h3><p>Design multi-round scenarios, and build training courses with questionnaires and student activity export.</p><a class="ys-more" href="{{ site.baseurl }}/plugins">See the extensions &rarr;</a></div>
</div>

## Installing and running

- **Four ways to install:** desktop installer, `pip` wheel (`ysocial` command, Python 3.12), Docker image on the GitHub Container Registry, or from source.
- **One data folder.** Everything lives in `YSOCIAL_HOME`, so backups and moves are a single directory copy (see the [download page]({{ site.baseurl }}/download#where-your-data-lives)).
- **Installer behaviour:** closing the window stops YSocial and the services it started. You can open YSocial in your browser instead, and Jupyter Lab is opt-in.
- **PyInstaller builds are gone.** The previous per-OS bundles, with their longer startup times and no Jupyter Lab, are replaced by the new installer.
- **Telemetry** stays anonymised and can be switched off in the admin panel.

## For researchers

- **Reproducible experiments:** create, clone, export and restart experiments, and follow logs, progress and opinion evolution.
- **Interviews and chat** with agents from the social interfaces.
- **Prompt packs** make runs in English and Italian comparable, and every prompt is reviewable and editable.
- **Analysis** with embedded Jupyter Lab and the [ySights]({{ site.baseurl }}/ysights_library) library.

<div class="alert-warning-custom">
<strong>Upgrading from 3.x.</strong> The release page has the installers, the wheel and the changelog. Back up your data folder before you upgrade, then install the new version as described on the <a href="{{ site.baseurl }}/download">download page</a>.
</div>

## Citing YSocial

If YSocial supports your research, please cite the paper listed on the [About page]({{ site.baseurl }}/about#how-to-cite).

<div class="cta-buttons">
<a href="{{ site.baseurl }}/download" class="cta-primary">Get {{ site.ysocial_version }}</a>
<a href="https://github.com/YSocialTwin/YSocial/releases" class="cta-secondary" target="_blank" rel="noopener">Release notes</a>
</div>

</div>
