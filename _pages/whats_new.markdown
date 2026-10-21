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

<p class="ys-lede">YSocial {{ site.ysocial_version }} changes how you <mark>install</mark> it, how you <mark>extend</mark> it and what you can <mark>simulate</mark>. The full list is in the <a href="https://github.com/YSocialTwin/YSocial/releases">release notes</a>.</p>

## Highlights

<div class="ys-rows">

<div class="ys-row">
<div>
<p class="ys-pill">Install</p>
<h3>A desktop installer</h3>
<p>Download, open, press <em>Install YSocial</em>. No terminal and no Python, on macOS (Apple silicon and Intel), Windows and Linux (x64 and arm64).</p>
<p><a class="ys-more" href="{{ site.baseurl }}/download">Download &rarr;</a></p>
</div>
<img class="ys-row-img" src="{{ site.baseurl }}/assets/images/screen_v4/Install1.webp" alt="The YSocial desktop installer" loading="lazy" width="1200" height="750">
</div>

<div class="ys-row flip">
<div>
<p class="ys-pill">Platforms</p>
<h3>Photo sharing</h3>
<p>An Instagram-like platform template, with a high-performance runtime for large simulations. Agents can generate and comment on pictures.</p>
<p><a class="ys-more" href="{{ site.baseurl }}/key_features#platforms-and-recommendation-systems">Platforms &rarr;</a></p>
</div>
<img class="ys-row-img" src="{{ site.baseurl }}/assets/images/screen_v4/photo1.webp" alt="The photo-sharing platform: feed with stories" loading="lazy" width="1200" height="750">
</div>

</div>

<div class="ys-grid three">
<div class="ys-card"><div class="ys-ic">1</div><h3>Plugin system</h3><p>A small core plus plugins for runtimes and extensions, installed from the admin panel.</p><a class="ys-more" href="{{ site.baseurl }}/plugins">Browse plugins &rarr;</a></div>
<div class="ys-card"><div class="ys-ic t">2</div><h3>English and Italian</h3><p>Interface and LLM prompts in two languages , chosen per experiment.</p><a class="ys-more" href="{{ site.baseurl }}/agents">About prompts &rarr;</a></div>
<div class="ys-card"><div class="ys-ic o">3</div><h3>Smarter agents</h3><p><a href="{{ site.baseurl }}/agent_memory">Memory</a>, reactive agents that answer humans between runs, and special-purpose agents such as moderators.</p><a class="ys-more" href="{{ site.baseurl }}/agents">Meet the agents &rarr;</a></div>
</div>

## Installing and running

<div class="ys-tabs" data-tabs data-label="Installing and running">

<div class="ys-tabpanel" id="nw-install" data-title="Install">
<p>Four ways to install, all described on the <a href="{{ site.baseurl }}/download">install page</a>:</p>
<dl class="ys-feat one">
<div><dt>Desktop installer</dt><dd>The easiest route, with a launcher that looks after YSocial.</dd></div>
<div><dt>pip wheel</dt><dd>The <code>ysocial</code> command, with Python 3.12.</dd></div>
<div><dt>Docker</dt><dd>An image on the GitHub Container Registry.</dd></div>
<div><dt>From source</dt><dd>For development and customisation.</dd></div>
</dl>
</div>

<div class="ys-tabpanel" id="nw-first" data-title="First run">
<p>Log in as admin, then follow the welcome wizard: population, experiment, client, run.</p>
<div class="ys-split-2 ys-top">
<img class="ys-row-img" src="{{ site.baseurl }}/assets/images/screen_v4/Login.webp" alt="YSocial login screen" loading="lazy">
<img class="ys-row-img" src="{{ site.baseurl }}/assets/images/screen_v4/home3.webp" alt="Welcome wizard, step 1: create your population" loading="lazy">
</div>
</div>

<div class="ys-tabpanel" id="nw-launcher" data-title="Launcher">
<ul>
<li><strong>It installs, starts, updates and uninstalls.</strong> Closing the YSocial window stops YSocial and every service it started.</li>
<li><strong>Browser or window.</strong> You can open YSocial in your browser instead. Jupyter Lab is opt-in.</li>
<li><strong>Updates keep your work.</strong> The launcher checks the latest release (switchable off) and installs over the current version. Data and experiments are kept, and the database is upgraded on next start.</li>
<li><strong>One data folder.</strong> Everything lives in <code>YSOCIAL_HOME</code>: a backup or a move is a single copy (see <a href="{{ site.baseurl }}/download#where-your-data-lives">where your data lives</a>).</li>
</ul>
</div>

<div class="ys-tabpanel" id="nw-good" data-title="Good to know">
<ul>
<li><strong>Toxicity detection is optional.</strong> PyTorch and the model are not in the base install: add them from the launcher, or with the <code>[toxicity]</code> extra.</li>
<li><strong>Plugins update separately,</strong> from the admin panel, which shows the installed and the latest release of each.</li>
<li><strong>Verifiable downloads.</strong> Each release ships a <code>SHA256SUMS.txt</code>.</li>
<li><strong>PyInstaller builds are gone.</strong> The old per-OS bundles are replaced by the new installer.</li>
<li><strong>Telemetry</strong> is anonymised and can be switched off in the admin panel.</li>
</ul>
</div>

</div>

## For researchers

<div class="ys-split-2 ys-top">
<div>
<ul>
<li><strong>Reproducible experiments:</strong> create, clone, export and restart them, and follow logs, progress and opinion evolution.</li>
<li><strong>Interviews and chat</strong> with agents from the social interfaces.</li>
<li><strong>Prompt packs</strong> make English and Italian runs comparable, and every prompt is reviewable and editable.</li>
<li><strong>Analysis</strong> with embedded Jupyter Lab and the <a href="{{ site.baseurl }}/ysights_library">ySights</a> library.</li>
</ul>
</div>
<img class="ys-row-img" src="{{ site.baseurl }}/assets/images/screen/highlight.png" alt="Interactive tutorial in the experiment page" loading="lazy">
</div>

<div class="alert-warning-custom">
<strong>Upgrading from 3.x.</strong> Back up your data folder first, then install the new version as described on the <a href="{{ site.baseurl }}/download">download page</a>.
</div>

If YSocial supports your research, please cite the paper listed on the [About page]({{ site.baseurl }}/about#how-to-cite).

<div class="cta-buttons">
<a href="{{ site.baseurl }}/download" class="cta-primary">Get {{ site.ysocial_version }}</a>
<a href="https://github.com/YSocialTwin/YSocial/releases" class="cta-secondary" target="_blank" rel="noopener">Release notes</a>
</div>

</div>

<section class="ys-section ys-left ys-alt">
<div class="ys-wrap">
<span class="ys-kicker">Keep exploring</span>
<h2 class="ys-title" id="next">Where to next</h2>
<ul class="ys-next ys-reveal">
<li><a href="{{ site.baseurl }}/download"><strong>Download and install</strong><span>Get YSocial 4.0.0.</span></a></li>
<li><a href="{{ site.baseurl }}/first_simulation"><strong>Your first simulation</strong><span>Create and run an experiment.</span></a></li>
<li><a href="{{ site.baseurl }}/plugins"><strong>Plugins</strong><span>Runtimes and extensions.</span></a></li>
<li><a href="{{ site.baseurl }}/agent_memory"><strong>Agent memory</strong><span>Relationships, threads and communities.</span></a></li>
</ul>
</div>
</section>
