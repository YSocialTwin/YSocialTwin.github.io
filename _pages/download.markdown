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

<div class="ys-grid four ys-pick">
<a class="ys-card hover" href="#installer"><span class="ys-pill">Easiest</span><strong class="ys-ct">Desktop installer</strong><p>No terminal, no Python. macOS, Windows, Linux.</p></a>
<a class="ys-card hover" href="#pip"><span class="ys-pill v">Command line</span><strong class="ys-ct">pip wheel</strong><p>Python 3.12 and the <code>ysocial</code> command.</p></a>
<a class="ys-card hover" href="#docker"><span class="ys-pill o">Servers</span><strong class="ys-ct">Docker</strong><p>One command, data in a volume.</p></a>
<a class="ys-card hover" href="#source"><span class="ys-pill v">Developers</span><strong class="ys-ct">From source</strong><p>Clone, add plugins, run <code>y_social.py</code>.</p></a>
</div>

## Choose how to install

<div class="ys-tabs" data-tabs>

<div class="ys-tabpanel" id="installer" data-title="Desktop installer">
<p>Version <strong>{{ site.ysocial_version }}</strong>. The installer prepares a private Python environment the first time you run it (a few minutes, internet required).</p>
<p class="ys-detect">We think you are on <strong id="ys-detected">your system</strong>, highlighted below.</p>
<div class="download-grid">
<div class="download-box" data-os="macos">
<span class="ys-mine">Your system</span>
<span class="os-ic"><i class="fab fa-apple" aria-hidden="true"></i></span>
<h3>macOS</h3>
<p>Apple silicon and Intel, <code>.dmg</code></p>
<div class="ys-dl">
<a class="ys-btn primary small" href="{{ site.release_url }}/YSocial-{{ site.ysocial_version }}-macos-arm64.dmg">Apple silicon (arm64)</a>
<a class="ys-btn ghost small" href="{{ site.release_url }}/YSocial-{{ site.ysocial_version }}-macos-x64.dmg">Intel (x64)</a>
</div>
</div>
<div class="download-box" data-os="windows">
<span class="ys-mine">Your system</span>
<span class="os-ic"><i class="fab fa-windows" aria-hidden="true"></i></span>
<h3>Windows</h3>
<p>Windows 10 and later, <code>.exe</code></p>
<div class="ys-dl">
<a class="ys-btn primary small" href="{{ site.release_url }}/YSocial-{{ site.ysocial_version }}-windows-x64.exe">Windows (x64)</a>
</div>
</div>
<div class="download-box" data-os="linux">
<span class="ys-mine">Your system</span>
<span class="os-ic"><i class="fab fa-linux" aria-hidden="true"></i></span>
<h3>Linux</h3>
<p>x64 and arm64, <code>.AppImage</code> or <code>.deb</code></p>
<div class="ys-dl">
<a class="ys-btn primary small" href="{{ site.release_url }}/YSocial-{{ site.ysocial_version }}-linux-x64.AppImage">x64 AppImage</a>
<a class="ys-btn ghost small" href="{{ site.release_url }}/YSocial-{{ site.ysocial_version }}-linux-x64.deb">x64 .deb</a>
<a class="ys-btn ghost small" href="{{ site.release_url }}/YSocial-{{ site.ysocial_version }}-linux-arm64.AppImage">arm64 AppImage</a>
<a class="ys-btn ghost small" href="{{ site.release_url }}/YSocial-{{ site.ysocial_version }}-linux-arm64.deb">arm64 .deb</a>
</div>
</div>
</div>
<p class="ys-fine">Something not downloading? Open the <a href="https://github.com/YSocialTwin/YSocial/releases/latest">latest release page</a>. Every file is listed in <a href="{{ site.release_url }}/SHA256SUMS.txt">SHA256SUMS.txt</a> so you can verify your download.</p>
{% capture t_installer %}
**First run**

1. Open the installer and press *Install YSocial*, then **Start**. YSocial opens in its own window. Closing the window stops YSocial and every service it started.
2. Log in with `admin@y-not.social` / `admin` and change the password.
3. Connect an LLM from the admin panel, create an experiment and press start.

The installers are not code-signed, so your system will warn you once:
{% endcapture %}
{{ t_installer | markdownify }}
<div class="alert-warning-custom">
<strong>macOS:</strong> right-click the app and choose <em>Open</em> (or run <code>xattr -dr com.apple.quarantine /Applications/YSocial.app</code>). <strong>Windows:</strong> choose <em>More info</em> and then <em>Run anyway</em>.
</div>
{% capture t_installer2 %}
Under *More options* you can open YSocial in your default browser instead of its own window, start Jupyter Lab (off by default), change the address and port (`127.0.0.1:8080` by default), and switch off the update check.
{% endcapture %}
{{ t_installer2 | markdownify }}
</div>

<div class="ys-tabpanel" id="pip" data-title="pip wheel">
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

<div class="ys-tabpanel" id="docker" data-title="Docker">
{% capture t_docker %}
The image is published on the GitHub Container Registry, for every release. Your data lives in the `ysocial-data` volume, so it survives restarts and upgrades.

```bash
docker run -d --name ysocial -p 5000:5000 -v ysocial-data:/data ghcr.io/ysocialtwin/ysocial:latest
```

Pin a version with `ghcr.io/ysocialtwin/ysocial:v{{ site.ysocial_version }}`. Then open [http://localhost:5000](http://localhost:5000) and log in with `admin@y-not.social` / `admin`.

**Compose, from the repository**

```bash
git clone https://github.com/YSocialTwin/YSocial.git && cd YSocial
docker compose -f docker/compose.yml up                       # YSocial + SQLite
docker compose -f docker/compose.yml --profile postgres up    # + PostgreSQL 16
WITH_TOXICITY=1 docker compose -f docker/compose.yml build    # image with toxicity detection
YSOCIAL_PORT=8080 docker compose -f docker/compose.yml up     # another host port
```

**Good to know**

- The **LLM server is not in the image.** Run Ollama, vLLM or any OpenAI-compatible service outside and set its address in the admin panel. From the container, the host is `http://host.docker.internal:11434` (with plain `docker run` on Linux add `--add-host=host.docker.internal:host-gateway`).
- Extra arguments after the image name go to `ysocial`, for example `--db postgresql`.
- Change the PostgreSQL defaults (`POSTGRES_DB`, `POSTGRES_USER`, `POSTGRES_PASSWORD`) before exposing the service.
- Update: `docker pull`, `docker rm -f ysocial`, then run again with the same volume. Back the volume up before major upgrades.
- Logs: `docker logs -f ysocial`. Port busy? Map another one, for example `-p 8081:5000`.
- Older compose variants (GPU, reverse proxy) are described in `deployment/docker/README.md` in the repository.
{% endcapture %}
{{ t_docker | markdownify }}
</div>

<div class="ys-tabpanel" id="source" data-title="From source">
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
python y_social_launcher.py                                # native window (add --browser for a browser)
python y_social.py --llm-backend ollama                    # or vllm, or myserver.com:8000
python y_social.py --db postgresql                         # SQLite is the default
python y_social.py --no_notebook                           # disable Jupyter Lab
```

PostgreSQL settings come from `PG_USER`, `PG_PASSWORD`, `PG_HOST`, `PG_PORT`, `PG_DBNAME`, `PG_DBNAME_DUMMY`. Open [http://localhost:8080](http://localhost:8080). Use a dedicated environment: Homebrew-installed Python can cause problems.
{% endcapture %}
{{ t_source | markdownify }}
</div>

</div>

## Requirements

{% capture t_req %}
| Need | Desktop installer | pip | Docker | Source |
| --- | --- | --- | --- | --- |
| Python needed | No (private environment) | 3.12 | No | 3.12 |
| Internet at install | Yes | Yes | Yes (pull) | Yes |
| Disk | A few GB, more for toxicity models | A few GB | Image plus a data volume | A few GB |
| Admin login | `admin@y-not.social` / `admin` | same | same | same |

- **An LLM endpoint is always separate.** YSocial talks to any OpenAI-compatible server, commercial or self-hosted (Ollama, vLLM). How much memory and compute you need depends on the model you choose and on how many agents you run, not on YSocial itself.
- **Profile pictures** of the simulated agents are downloaded the first time they are needed.
- **Toxicity detection** is optional and needs PyTorch and a model: several extra GB.
- **PostgreSQL** is optional. SQLite is the default and is fine for most single-user work.
{% endcapture %}
{{ t_req | markdownify }}

## Where your data lives

{% capture t_data %}
YSocial keeps everything in a single data folder (`YSOCIAL_HOME`). Backing up or moving an installation means copying one directory.

| System | Default data folder |
| --- | --- |
| macOS | `~/Library/Application Support/YSocial` |
| Windows | `%USERPROFILE%\AppData\Local\YSocial` |
| Linux | `~/.ysocial` |
| Docker | `/data` (the `ysocial-data` volume) |

If YSocial does not start, the last lines of `logs/launch.log` inside the data folder say why.
{% endcapture %}
{{ t_data | markdownify }}

## Updating and uninstalling

{% capture t_upd %}
With the desktop installer, the launcher checks the latest published release when it opens (you can switch this off). **Update** installs the new version over the current one after you confirm, and the database is upgraded automatically on the next start. Your data and experiments are kept. Plugins are updated separately from the plugin page of the admin panel.

To remove YSocial choose **Uninstall** in the launcher. You decide whether to delete the data folder and the downloaded toxicity models. Then remove the installer app like any other app.
{% endcapture %}
{{ t_upd | markdownify }}

## Privacy and telemetry

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
