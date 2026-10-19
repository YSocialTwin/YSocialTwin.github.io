---
layout: default-full
title: "Download"
subtitle: "Pick your platform and start simulating in minutes."
eyebrow: "Version 4.0.0"
header_title: "Download YSocial"
header_type: hero
show_sidetoc: true
---

<div class="ys-article" markdown="1">

<p class="ys-lede">Install YSocial with a <mark>desktop installer</mark>, a <mark>pip wheel</mark> or <mark>Docker</mark>. Same platform, your choice of how much control you want.</p>

## Desktop installer

Version **{{ site.ysocial_version }}** is on GitHub. No terminal and no Python needed: the installer prepares a private Python environment the first time you run it (a few minutes, internet required).

<p class="ys-intro" style="margin-bottom:10px">We think you are on <strong id="ys-detected">your system</strong>, highlighted below.</p>

<div class="download-grid">
<div class="download-box" data-os="macos">
<span class="ys-mine">Your system</span>
<span class="os-ic"><i class="fab fa-apple" aria-hidden="true"></i></span>
<h3>macOS</h3>
<p>Apple silicon and Intel, <code>.dmg</code></p>
<div class="ys-dl">
<a class="ys-btn primary small" href="https://github.com/YSocialTwin/YSocial/releases/latest">Apple silicon (arm64)</a>
<a class="ys-btn ghost small" href="https://github.com/YSocialTwin/YSocial/releases/latest">Intel (x64)</a>
</div>
</div>
<div class="download-box" data-os="windows">
<span class="ys-mine">Your system</span>
<span class="os-ic"><i class="fab fa-windows" aria-hidden="true"></i></span>
<h3>Windows</h3>
<p>Windows 10 and later, <code>.exe</code></p>
<div class="ys-dl">
<a class="ys-btn primary small" href="https://github.com/YSocialTwin/YSocial/releases/latest">Windows (x64)</a>
</div>
</div>
<div class="download-box" data-os="linux">
<span class="ys-mine">Your system</span>
<span class="os-ic"><i class="fab fa-linux" aria-hidden="true"></i></span>
<h3>Linux</h3>
<p>x64 and arm64, <code>.AppImage</code> or <code>.deb</code></p>
<div class="ys-dl">
<a class="ys-btn primary small" href="https://github.com/YSocialTwin/YSocial/releases/latest">Linux (x64)</a>
<a class="ys-btn ghost small" href="https://github.com/YSocialTwin/YSocial/releases/latest">Linux (arm64)</a>
</div>
</div>
<div class="download-box">
<span class="os-ic"><i class="fas fa-code" aria-hidden="true"></i></span>
<h3>Source code</h3>
<p>Clone it and run it your way</p>
<div class="ys-dl">
<a class="ys-btn ghost small" href="https://github.com/YSocialTwin/YSocial">GitHub repository</a>
<a class="ys-btn ghost small" href="{{ site.baseurl }}/ysocial">Developer guide</a>
</div>
</div>
</div>

All buttons open the [latest release](https://github.com/YSocialTwin/YSocial/releases/latest), where each installer is attached as `YSocial-<version>-<system>.<ext>` (for example `YSocial-{{ site.ysocial_version }}-macos-arm64.dmg`). The same files are listed in the [release changelog](https://github.com/YSocialTwin/YSocial/releases).

### First run

1. **Open the installer** and press *Install YSocial*, then **Start**. YSocial opens in its own window. Closing the window stops YSocial and the services it started.
2. **Log in** with <mark>admin@y-not.social</mark> / <mark>admin</mark>, then change the password.
3. **Connect an LLM** from the admin panel (see the notes below), create an experiment and press start.

<div class="alert-warning-custom">
<strong>Installers are not code-signed.</strong> On macOS, right-click the app and choose <em>Open</em> (or run <code>xattr -dr com.apple.quarantine</code> on it). On Windows, choose <em>More info</em> and then <em>Run anyway</em>.
</div>

<div class="alert-info-custom">
<strong>Good to know.</strong> YSocial needs an OpenAI-compatible LLM endpoint, commercial or self-hosted (Ollama and vLLM work well). Jupyter Lab is opt-in in the installer. You can open YSocial in your browser instead of its own window if you prefer.
</div>

## pip and Docker

Prefer the command line? Both options below give you the same platform.

<div class="ys-grid two">
<div class="ys-card">
<span class="ys-pill">Python 3.12</span>
<h3>pip wheel</h3>
<p>Download <code>ysocial-&lt;version&gt;-py3-none-any.whl</code> and <code>constraints.txt</code> from the release page, then:</p>
<div class="ys-cmd" style="margin-top:12px"><code>pip install ysocial-&lt;version&gt;-py3-none-any.whl -c constraints.txt</code></div>
<div class="ys-cmd" style="margin-top:8px"><code>ysocial --host localhost --port 8080</code></div>
<p style="margin-top:12px">Optional extra <code>[toxicity]</code> adds toxicity detection. Details in the <a href="{{ site.baseurl }}/ysocial">developer guide</a>.</p>
</div>
<div class="ys-card">
<span class="ys-pill v">Container</span>
<h3>Docker</h3>
<p>One command, data kept in a named volume:</p>
<div class="ys-cmd" style="margin-top:12px"><code>docker run -d --name ysocial -p 5000:5000 -v ysocial-data:/data ghcr.io/ysocialtwin/ysocial:latest</code></div>
<p style="margin-top:12px">Then open <a href="http://localhost:5000">localhost:5000</a>. Compose, PostgreSQL and GPU notes in the <a href="{{ site.baseurl }}/docker">Docker guide</a>.</p>
</div>
</div>

## Where your data lives

YSocial keeps everything in a single data folder (`YSOCIAL_HOME`), so backing up or moving an installation is a matter of copying one directory.

| System | Default data folder |
| --- | --- |
| macOS | `~/Library/Application Support/YSocial` |
| Windows | `%USERPROFILE%\AppData\Local\YSocial` |
| Linux | `~/.ysocial` |
| Docker | `/data` (the `ysocial-data` volume) |

## Privacy and telemetry

<details>
<summary data-excerpt="Minimal, anonymised usage data. You can switch it off in the admin panel.">Anonymised telemetry, and how to turn it off</summary>
<div markdown="1">

YSocial collects minimal, anonymised telemetry to help us fix bugs and prioritise work. You can disable it at any time from the admin panel. The code that receives it is public: [yTelemetry](https://github.com/YSocialTwin/yTelemetry).

**What is collected:** number of experiments, populations, agents and pages; the recommender system and LLM model in use; simulation duration; installation or update date, YSocial version, operating system and locale; error types, frequency and anonymised stack traces.

**What is not collected:** personal data, IP addresses or location, simulation content or user-generated data, emails, passwords or credentials, or any tracking of individuals across sessions.

Telemetry data is aggregated, stored with access controls, used only to improve YSocial and never shared with third parties.

</div>
</details>

## What next?

<div class="ys-grid three">
<a class="ys-card hover" href="{{ site.baseurl }}/key_features"><h3>Read the features</h3><p>What a simulation looks like and what you can configure.</p><span class="ys-more">Key features &rarr;</span></a>
<a class="ys-card hover" href="https://github.com/orgs/YSocialTwin/discussions" target="_blank" rel="noopener"><h3>Join the community</h3><p>Ask for help and share your experiments.</p><span class="ys-more">GitHub Discussions &rarr;</span></a>
<a class="ys-card hover" href="https://github.com/YSocialTwin/YSocial/issues" target="_blank" rel="noopener"><h3>Report an issue</h3><p>Found a bug? Tell us, with logs if you can.</p><span class="ys-more">Open an issue &rarr;</span></a>
</div>

<div class="alert-info-custom">
<strong>Using YSocial in a paper?</strong> Please cite it. The reference is on the <a href="{{ site.baseurl }}/about#how-to-cite">About page</a>.
</div>

</div>
