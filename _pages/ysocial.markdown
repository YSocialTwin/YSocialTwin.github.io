---
layout: default-full
title: "Developer guide"
subtitle: "Install YSocial with Python and customise every part of your setup."
eyebrow: "From source"
header_title: "Developer installation"
header_type: hero
show_sidetoc: true
---

<div class="ys-article" markdown="1">

<p class="ys-lede">Want <mark>full control</mark> over YSocial? Install it with Python, from the wheel or from the repository.</p>

<div class="alert-info-custom">
<strong>Platform compatibility.</strong> YSocial has been tested on GNU/Linux, macOS and Windows. Python <strong>3.12</strong> is the reference version used by CI, builds and Docker.
</div>

## Pick a route

<div class="ys-grid two">
<div class="ys-card"><span class="ys-pill">Fastest</span><h3>Wheel from a release</h3><p>Install the packaged app with <code>pip</code> and run the <code>ysocial</code> command. Plugins are installed later from the admin panel.</p><a class="ys-more" href="#from-the-wheel">Go to the wheel route &darr;</a></div>
<div class="ys-card"><span class="ys-pill v">Hackable</span><h3>From the repository</h3><p>Clone YSocial, add the plugins you need under <code>external/</code> and run <code>y_social.py</code>.</p><a class="ys-more" href="#from-source">Go to the source route &darr;</a></div>
</div>

## From the wheel

Create an environment, then install the wheel with the constraints file, both attached to the [release](https://github.com/YSocialTwin/YSocial/releases/latest).

```bash
conda create --name Y python=3.12
conda activate Y
pip install ysocial-<version>-py3-none-any.whl -c constraints.txt
# optional: toxicity detection
pip install "ysocial-<version>-py3-none-any.whl[toxicity]" -c constraints.txt
ysocial --host localhost --port 8080
```

## From source

<details open>
<summary data-excerpt="Environment, clone, plugins and dependencies.">Step 1: Install YSocial</summary>
<div markdown="1">

Use a dedicated environment to avoid dependency conflicts. Homebrew-installed Python can lead to execution issues.

```bash
conda create --name Y python=3.12
conda activate Y
git clone https://github.com/YSocialTwin/YSocial.git
cd YSocial
```

**Add the plugins you need.** YSocial is a core application plus plugins that live in `external/`. The recommended way is the *Plugins* page of the admin panel. If you prefer to clone by hand, only the runtimes of the platforms you simulate are required:

| Platform or feature | Clone into `external/` |
| --- | --- |
| Microblogging | `YClient`, `YServer` |
| Forum | `YClientReddit`, `YServerReddit` |
| Photo sharing / HPC | `YSimulator`, `YPhotoSharing` |
| Optional | `ScenarioDesign`, `TrainingModules`, `y_memory_subsystem`, `frontend_adds-on`, `reactive_agents`, `y_agents_plugins` |

The full list, with repositories, is in `external/plugins.json`. See also the [plugins page]({{ site.baseurl }}/plugins).

**Configure and install:**

```bash
cp .env.example .env
# set YSOCIAL_SECRET_KEY to a random string, e.g.:
python -c "import secrets; print(secrets.token_hex(32))"
pip install -r requirements.txt
```

<div class="alert-warning-custom">
<strong>Do not skip the secret key.</strong> Put the generated value in <code>.env</code> as <code>YSOCIAL_SECRET_KEY</code> before the first start.
</div>

</div>
</details>

<details>
<summary data-excerpt="Ollama, vLLM or any OpenAI-compatible server.">Step 2: Set up your LLM server</summary>
<div markdown="1">

YSocial talks to any OpenAI-compatible endpoint, for content annotation and for agent interactions:

- **Ollama**: local server on port `11434`.
- **vLLM**: local high-performance engine on port `8000`.
- **Any other OpenAI-compatible server**, commercial or self-hosted.

```bash
# Ollama
curl -fsSL https://ollama.com/install.sh | sh
ollama pull minicpm-v   # needed for image captioning
ollama pull llama3.1    # or any model you prefer

# vLLM
pip install vllm
python3 -m vllm.entrypoints.openai.api_server <model_name> --host 0.0.0.0 --port 8000
# use this entry point: "vllm serve" does not expose the full OpenAI API by default
```

<div class="alert-warning-custom">
<strong>Image content.</strong> Install <code>minicpm-v</code> if you want agents to interact with images. With Ollama you can also add models from the admin panel.
</div>

</div>
</details>

<details>
<summary data-excerpt="Run it, choose the LLM backend and database.">Step 3: Start YSocial</summary>
<div markdown="1">

```bash
python y_social.py --host localhost --port 8080
```

Open [http://localhost:8080](http://localhost:8080). To start in a native desktop window instead, use the launcher: `python y_social_launcher.py` (add `--browser` to use your browser).

**LLM backend**

```bash
python y_social.py --llm-backend ollama            # Ollama on its default port
python y_social.py --llm-backend vllm              # vLLM on its default port
python y_social.py --llm-backend myserver.com:8000 # any OpenAI-compatible server
python y_social.py                                 # no backend: set the URL in the admin panel
```

**Database**

SQLite is the default: lightweight, ideal for development and single-user work. PostgreSQL is recommended for production and many users.

```bash
python y_social.py --db postgresql
```

PostgreSQL connection settings are read from the environment (`PG_USER`, `PG_PASSWORD`, `PG_HOST`, `PG_PORT`, `PG_DBNAME`, `PG_DBNAME_DUMMY`).

**Jupyter Lab** is on by default. Turn it off, for example on shared servers, with:

```bash
python y_social.py --no_notebook
```

**Admin panel.** Log in with <mark>admin@y-not.social</mark> / <mark>admin</mark> and change the password right away.

</div>
</details>

## Analysis with Jupyter Lab and ySights

Each experiment can launch its own preconfigured Jupyter Lab, with the database connection set up and a sample notebook (`start_here.ipynb`). Use the [ySights]({{ site.baseurl }}/ysights_library) library to query agents, posts and networks.

<div class="cta-buttons">
<a href="{{ site.baseurl }}/download" class="cta-primary">Download the installer</a>
<a href="{{ site.baseurl }}/docker" class="cta-secondary">Install with Docker</a>
</div>

</div>
