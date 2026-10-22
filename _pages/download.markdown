---
layout: default-full
title: "Download and install"
subtitle: "One page, four ways to run YSocial. Pick the one that fits you."
eyebrow: "Version 4.0.0"
header_title: "Install YSocial"
header_type: hero
show_sidetoc: true
---

<div class="ys-article" markdown="1">

<p class="ys-lede">Start with the <mark>desktop installer</mark> if you just want to try YSocial. Use <mark>pip</mark>, <mark>Docker</mark> or the <mark>source</mark> when you need a server, automation or a hackable setup.</p>

## Choose how to install

<div class="ys-tabs" data-tabs data-cards data-label="Installation method">

<div class="ys-tabpanel" id="installer" data-title="Desktop installer" data-kicker="Easiest" data-pill="" data-desc="No terminal, no Python. macOS, Windows, Linux.">
<p>Version <strong>{{ site.ysocial_version }}</strong>. The installer prepares a private Python environment the first time you run it (a few minutes, internet required).</p>
<p class="ys-detect">We think you are on <strong id="ys-detected">your system</strong>, highlighted below.</p>
<div class="download-grid">
<div class="download-box" data-os="macos">
<span class="ys-mine">Your system</span>
<span class="os-ic"><i class="fab fa-apple" aria-hidden="true"></i></span>
<h3>macOS</h3>
<p>Apple silicon and Intel</p>
<div class="ys-dl">
<div class="ys-dlrow"><span>Apple silicon</span><a class="ys-btn primary small" href="{{ site.release_url }}/YSocial-{{ site.ysocial_version }}-macos-arm64.dmg">.dmg</a></div>
<div class="ys-dlrow"><span>Intel</span><a class="ys-btn ghost small" href="{{ site.release_url }}/YSocial-{{ site.ysocial_version }}-macos-x64.dmg">.dmg</a></div>
</div>
</div>
<div class="download-box" data-os="windows">
<span class="ys-mine">Your system</span>
<span class="os-ic"><i class="fab fa-windows" aria-hidden="true"></i></span>
<h3>Windows</h3>
<p>Windows 10 and later</p>
<div class="ys-dl">
<div class="ys-dlrow"><span>x64</span><a class="ys-btn primary small" href="{{ site.release_url }}/YSocial-{{ site.ysocial_version }}-windows-x64.exe">.exe</a></div>
</div>
</div>
<div class="download-box" data-os="linux">
<span class="ys-mine">Your system</span>
<span class="os-ic"><i class="fab fa-linux" aria-hidden="true"></i></span>
<h3>Linux</h3>
<p>x64 and arm64</p>
<div class="ys-dl">
<div class="ys-dlrow"><span>x64</span><a class="ys-btn primary small" href="{{ site.release_url }}/YSocial-{{ site.ysocial_version }}-linux-x64.AppImage">AppImage</a><a class="ys-btn ghost small" href="{{ site.release_url }}/YSocial-{{ site.ysocial_version }}-linux-x64.deb">.deb</a></div>
<div class="ys-dlrow"><span>arm64</span><a class="ys-btn ghost small" href="{{ site.release_url }}/YSocial-{{ site.ysocial_version }}-linux-arm64.AppImage">AppImage</a><a class="ys-btn ghost small" href="{{ site.release_url }}/YSocial-{{ site.ysocial_version }}-linux-arm64.deb">.deb</a></div>
</div>
</div>
</div>
<p class="ys-fine">Something not downloading? Open the <a href="https://github.com/YSocialTwin/YSocial/releases/latest">latest release page</a>. Every file is listed in <a href="{{ site.release_url }}/SHA256SUMS.txt">SHA256SUMS.txt</a> so you can verify your download, and each file comes with a GPG signature (<code>.asc</code>). To check one: <code>gpg --import release-signing-key.asc</code>, then <code>gpg --verify YSocial-{{ site.ysocial_version }}-linux-x64.AppImage.asc YSocial-{{ site.ysocial_version }}-linux-x64.AppImage</code>. The public key is attached to every <a href="https://github.com/YSocialTwin/YSocial/releases/latest">release</a>.</p>
<div class="ys-shots">
<figure><img src="{{ site.baseurl }}/assets/images/screen_v4/Install1.webp" alt="The installer: Install YSocial" loading="lazy" style="aspect-ratio: 4 / 3; object-position: center;"><figcaption>1. Press <em>Install YSocial</em></figcaption></figure>
<figure><img src="{{ site.baseurl }}/assets/images/screen_v4/Install2a.webp" alt="The installer preparing the Python environment" loading="lazy" style="aspect-ratio: 4 / 3; object-position: center;"><figcaption>2. It prepares Python and a private environment</figcaption></figure>
<figure><img src="{{ site.baseurl }}/assets/images/screen_v4/Install2b.webp" alt="The installer installing YSocial" loading="lazy" style="aspect-ratio: 4 / 3; object-position: center;"><figcaption>3. It installs YSocial, then you press <em>Start</em></figcaption></figure>
</div>
{% capture t_installer %}
Open the installer, press *Install YSocial*, then **Start**. YSocial opens in its own window, and closing the window stops YSocial and every service it started. The installers are not code-signed, so your system will warn you once:
{% endcapture %}
{{ t_installer | markdownify }}
<div class="alert-warning-custom">
<p><strong>macOS:</strong> if you see <em>"The application cannot be opened"</em> (or that it is damaged or from an unverified developer), macOS has quarantined the download. Drag <em>YSocial</em> to <em>Applications</em>, then run this once in Terminal:</p>
<pre><code>xattr -cr /Applications/YSocial.app</code></pre>
<p>Then open the app again. Without Terminal: right-click the app, choose <em>Open</em>, and confirm; on recent macOS versions also use <em>System Settings → Privacy &amp; Security → Open Anyway</em>.</p>
<p><strong>Windows:</strong> because the installer is not code-signed, <em>Microsoft Defender SmartScreen</em> may block it ("Windows protected your PC"), and Windows Security or your browser may flag or quarantine the <code>.exe</code> as unrecognised. This is a false positive. To continue:</p>
<ol>
<li>If the browser blocks the download, open its downloads list and choose <em>Keep</em> (Edge: <em>…</em> → <em>Keep</em> → <em>Keep anyway</em>).</li>
<li>Double-click the installer. On the blue SmartScreen window click <em>More info</em>, then <em>Run anyway</em>.</li>
<li>If Windows Security removed the file, open <em>Windows Security → Virus &amp; threat protection → Protection history</em>, select the YSocial entry and choose <em>Actions → Restore</em> (or <em>Allow on device</em>), then run it again.</li>
<li>If a managed (work or university) PC does not offer <em>Run anyway</em>, ask your IT department to allow the installer.</li>
</ol>
<p>Download the installer only from this page or from the official GitHub release. You can also right-click the file, choose <em>Properties</em> and tick <em>Unblock</em> before running it.</p>
<p><strong>Linux:</strong> Chrome may block the <code>.AppImage</code> or <code>.deb</code> as a <em>"dangerous download"</em> because it is an executable that few people have downloaded yet. This is a false positive. Open <code>chrome://downloads</code>, choose <em>…</em> next to the file and then <em>Keep</em> (<em>Keep anyway</em>). For an <code>.AppImage</code>, make it executable before the first run: <code>chmod +x YSocial-*.AppImage</code>. You can check the file against its signature first, see below.</p>
</div>
{% capture t_installer2 %}
Under *More options* you can open YSocial in your default browser instead of its own window, start Jupyter Lab (off by default), change the address and port (`127.0.0.1:8080` by default), and switch off the update check.
{% endcapture %}
{{ t_installer2 | markdownify }}
</div>

<div class="ys-tabpanel" id="pip" data-title="pip wheel" data-kicker="Command line" data-pill="v" data-desc="Python 3.12 and the <code>ysocial</code> command.">
{% capture t_pip %}
Use this on servers, in notebooks or in scripts. You need **Python 3.12**.

Download `ysocial-{{ site.ysocial_version }}-py3-none-any.whl` and `constraints.txt` from the [release]({{ site.release_url }}/ysocial-{{ site.ysocial_version }}-py3-none-any.whl) (the constraints file is [here]({{ site.release_url }}/constraints.txt)), then:

```bash
python3.12 -m venv ysocial-env && source ysocial-env/bin/activate
pip install ysocial-{{ site.ysocial_version }}-py3-none-any.whl -c constraints.txt
ysocial --host localhost --port 8080
```

Add the `[toxicity]` extra if you want local toxicity detection (large download):

```bash
pip install "ysocial-{{ site.ysocial_version }}-py3-none-any.whl[toxicity]" -c constraints.txt
```

Open [http://localhost:8080](http://localhost:8080). Plugins are installed afterwards from the admin panel.
{% endcapture %}
{{ t_pip | markdownify }}
</div>

<div class="ys-tabpanel" id="docker" data-title="Docker" data-kicker="Servers" data-pill="o" data-desc="One command, data in a volume.">
{% capture t_docker %}
The image is published on the GitHub Container Registry, for every release. Your data lives in the `ysocial-data` volume, so it survives restarts and upgrades.

```bash
docker run -d --name ysocial -p 5000:5000 -v ysocial-data:/data ghcr.io/ysocialtwin/ysocial:latest
```

Pin a version with `ghcr.io/ysocialtwin/ysocial:v{{ site.ysocial_version }}`. Then open [http://localhost:5000](http://localhost:5000).

**Compose, from the repository**

```bash
git clone https://github.com/YSocialTwin/YSocial.git && cd YSocial
docker compose -f docker/compose.yml up                       # YSocial + SQLite
WITH_TOXICITY=1 docker compose -f docker/compose.yml build    # image with toxicity detection
YSOCIAL_PORT=8080 docker compose -f docker/compose.yml up     # another host port
```

**Good to know**

- The **LLM server is not in the image.** Run Ollama, vLLM or any OpenAI-compatible service outside and set its address in the admin panel. From the container, the host is `http://host.docker.internal:11434` (with plain `docker run` on Linux add `--add-host=host.docker.internal:host-gateway`).
- Update: `docker pull`, `docker rm -f ysocial`, then run again with the same volume. Back the volume up before major upgrades.
- Logs: `docker logs -f ysocial`. Port busy? Map another one, for example `-p 8081:5000`.
- Older compose variants (GPU, reverse proxy) are described in `deployment/docker/README.md` in the repository.
{% endcapture %}
{{ t_docker | markdownify }}
</div>

<div class="ys-tabpanel" id="source" data-title="From source" data-kicker="Developers" data-pill="v" data-desc="Clone, add plugins, run <code>y_social.py</code>.">
{% capture t_source %}
For development and customisation. Python **3.12** is the reference version (CI, builds and Docker).

**1. Environment and code**

```bash
conda create --name Y python=3.12
conda activate Y
git clone https://github.com/YSocialTwin/YSocial.git
cd YSocial
```

**2. Plugins.** YSocial is a core plus plugins that live in `external/`. The recommended way is the *Plugins* page of the admin panel. By hand, clone only the runtimes you simulate (full list in `external/plugins.json`, see also the [plugins page]({{ site.baseurl }}/plugins)):

| Platform or feature | Clone into `external/` |
| --- | --- |
| Microblogging | `YClient`, `YServer` |
| Forum | `YClientReddit`, `YServerReddit` |
| Photo sharing and HPC | `YSimulator`, `YPhotoSharing` |
| Optional | `ScenarioDesign`, `TrainingModules`, `y_memory_subsystem`, `frontend_adds-on`, `reactive_agents`, `y_agents_plugins` |

**3. Configure and install**

```bash
cp .env.example .env
python -c "import secrets; print(secrets.token_hex(32))"   # paste as YSOCIAL_SECRET_KEY in .env
pip install -r requirements.txt
```

**4. LLM server (optional locally)**

```bash
curl -fsSL https://ollama.com/install.sh | sh
ollama pull minicpm-v    # image captioning
ollama pull llama3.1     # or any model you prefer
# vLLM: use the OpenAI-compatible entry point, not "vllm serve"
pip install vllm && python3 -m vllm.entrypoints.openai.api_server <model_name> --host 0.0.0.0 --port 8000
```

**5. Run**

```bash
python y_social.py --host localhost --port 8080            # browser
python y_social.py --no_notebook                           # disable Jupyter Lab
```

{% endcapture %}
{{ t_source | markdownify }}
</div>

</div>

## After installing

<div class="ys-cols">
<div>
{% capture t_first %}
1. Open YSocial at the address shown on the right.
2. Log in with `admin@y-not.social` / `admin`, then change the password.
3. In the admin panel, connect an LLM, create an experiment and press start.
{% endcapture %}
{{ t_first | markdownify }}
<img class="ys-row-img ys-fig" src="{{ site.baseurl }}/assets/images/screen_v4/Login.webp" alt="The YSocial login page" loading="lazy" width="1600" height="994" style="width:100%;height:auto;margin-top:12px">
</div>
<div>
{% capture t_open %}
| If you used | YSocial opens at |
| --- | --- |
| Desktop installer | Its own window, or `http://127.0.0.1:8080` in your browser |
| pip | `http://localhost:8080` |
| Docker | `http://localhost:5000` |
| Source | `http://localhost:8080` |
{% endcapture %}
{{ t_open | markdownify }}
</div>
</div>

## Requirements

<dl class="ys-feat one">
<div><dt>An LLM server</dt><dd>Always separate from YSocial. Any OpenAI-compatible server works, commercial or self-hosted (Ollama, vLLM). The memory and compute you need depend on the model and on how many agents you run.</dd></div>
<div><dt>Python</dt><dd>Version 3.12, only for pip and source. The desktop installer prepares its own private environment, and the Docker image ships it.</dd></div>
<div><dt>Internet</dt><dd>Needed while installing: the installer downloads its environment and Docker pulls the image.</dd></div>
<div><dt>Disk</dt><dd>A few GB. Toxicity detection is optional and adds several more (PyTorch and a model).</dd></div>
</dl>

## Looking after your installation

<details open>
<summary data-excerpt="One folder to back up or move.">Where your data lives <span class="ys-pill ys-scope">Desktop installer only</span></summary>
{% capture t_data %}
YSocial keeps everything in a single data folder (`YSOCIAL_HOME`), so backing up or moving an installation means copying one directory.

| System | Default data folder |
| --- | --- |
| macOS | `~/Library/Application Support/YSocial` |
| Windows | `%USERPROFILE%\AppData\Local\YSocial` |
| Linux | `~/.ysocial` |

If YSocial does not start, the last lines of `logs/launch.log` inside the data folder say why.
{% endcapture %}
{{ t_data | markdownify }}
</details>

<details>
<summary data-excerpt="Your data and experiments are kept.">Updating and uninstalling <span class="ys-pill ys-scope">Desktop installer only</span></summary>
{% capture t_upd %}
With the desktop installer, the launcher checks the latest published release when it opens (you can switch this off). **Update** installs the new version over the current one after you confirm, and the database is upgraded on the next start. Plugins are updated separately, from the plugin page of the admin panel.

To remove YSocial choose **Uninstall** in the launcher. You decide whether to delete the data folder and the downloaded toxicity models, then remove the installer app like any other app.
{% endcapture %}
{{ t_upd | markdownify }}
</details>

<details>
<summary data-excerpt="Minimal, anonymised usage data. You can switch it off in the admin panel.">Anonymised telemetry, and how to turn it off</summary>
{% capture t_tel %}
YSocial collects minimal, anonymised telemetry to help us fix bugs and prioritise work. You can disable it at any time from the admin panel. The code that receives it is public: [yTelemetry](https://github.com/YSocialTwin/yTelemetry).

**Collected:** number of experiments, populations, agents and pages; the recommender system and LLM model in use; simulation duration; installation or update date, YSocial version, operating system and locale; error types, frequency and anonymised stack traces.

**Not collected:** personal data, IP addresses or location, simulation content or user-generated data, emails, passwords or credentials, or any tracking of individuals across sessions.

Telemetry data is aggregated, stored with access controls, used only to improve YSocial and never shared with third parties.
{% endcapture %}
{{ t_tel | markdownify }}
</details>


</div>

<section class="ys-section ys-left ys-alt">
<div class="ys-wrap">
<span class="ys-kicker">Keep exploring</span>
<h2 class="ys-title" id="next">Where to next</h2>
<ul class="ys-next ys-reveal">
<li><a href="{{ site.baseurl }}/first_simulation"><strong>Your first simulation</strong><span>A step-by-step tutorial: population, experiment, client, run.</span></a></li>
<li><a href="{{ site.baseurl }}/key_features"><strong>Key features</strong><span>What a simulation looks like and what you can configure.</span></a></li>
<li><a href="https://github.com/orgs/YSocialTwin/discussions" target="_blank" rel="noopener"><strong>GitHub Discussions</strong><span>Ask for help and share your experiments.</span></a></li>
<li><a href="https://github.com/YSocialTwin/YSocial/issues" target="_blank" rel="noopener"><strong>Report an issue</strong><span>Found a bug? Tell us, with logs if you can.</span></a></li>
<li><a href="{{ site.baseurl }}/about#how-to-cite"><strong>Cite YSocial</strong><span>Using it in a paper? The reference is on the About page.</span></a></li>
</ul>
</div>
</section>

