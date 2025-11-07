---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default-full
title:  "Y Social"
subtitle: "Quick Start"
show_sidetoc: true
header_type: hero #base, post, hero,image, splash
header_img: assets/images/server1.jpg
header_title: "Y Social"
vega: true
---

<div class="container py-3">
<div class="row">
<div class="col-md-12" markdown="1">

<div class="alert-info-custom">
<strong>💡 Do you want "complete control" on your YSocial instance?</strong> Follow this guide to prepare your local setup.
</div>

<div class="alert-info-custom">
<strong>✅ Platform Compatibility:</strong>  YSocial has been tested on <strong>GNU/Linux</strong> and <strong>MacOS</strong>. 
Windows users should generally have no trouble installing or running YSocial - assuming they use WSL. 
However, if something mysteriously refuses to cooperate, they are encouraged to try <strong>Docker</strong> <small>(...or simply install GNU/Linux)</small>.
</div>

---

### Getting Started with YSocial {#getting-started}


Run `YSocial` is easy and straightforward. Just follow these three simple steps to get your local instance up and running:

<details>
<summary data-excerpt="Set up WSL support (or change OS 🥸)"><strong>Step 0: Windows user - Install WSL</strong></summary>

{% capture y_client_content_win %}

If you are on Windows, the recommended way to run YSocial is through the Windows Subsystem for Linux (WSL).
This provides a native Linux environment directly on Windows and ensures compatibility with Python and other dependencies.

Open PowerShell as Administrator and run:

```bash
wsl --install
```

This command will:

- Enable the WSL feature
- Install Ubuntu as the default Linux distribution
- Set up the required virtualization features

<div class="alert-warning-custom">
<strong>⚠️ Important Notes:</strong>
<ul style="margin-bottom: 0;">
<li><strong>Note:</strong> If prompted, restart your computer. </li>
</ul>
</div>


{% endcapture %}
{{ y_client_content_win | markdownify }}

</details>


<details open>
<summary data-excerpt="Set up YSocial on your machine with Python virtual environment, clone the repository, and install dependencies."><strong>Step 1: Install YSocial</strong></summary>

{% capture y_client_content %}

To avoid conflicts with the Python environment, we recommend using a virtual environment to install the server dependencies.

Assuming you have [Anaconda](https://www.anaconda.com/) installed, you can create a new environment with the following command:

```bash
conda create --name Y python=3.11
conda activate Y
```

###### Clone the repository to your local machine

```bash
git clone https://github.com/YSocialTwin/YSocial.git
cd YSocial
```

###### Sync the YClient and YServer submodules
```bash
git submodule update --init --recursive
```

###### Install the required dependencies
```bash
pip install -r requirements.txt
```

<div class="alert-warning-custom">
<strong>⚠️ Important Notes:</strong>
<ul style="margin-bottom: 0;">
<li><strong>Note 1:</strong> Run the application in a dedicated conda/miniconda/pipenv environment to avoid dependency conflicts. Homebrew installations of Python may lead to execution issues.</li>
</ul>
</div>

{% endcapture %}
{{ y_client_content | markdownify }}

</details>


<details>
<summary data-excerpt="Configure your LLM backend: Ollama, vLLM, or custom OpenAI-compatible servers for agent interactions."><strong>Step 2: Setup your LLM server</strong></summary>

{% capture y_client_server %}

`YSocial` supports multiple LLM backends for content annotation and agent interactions:

- **Ollama** Local LLM server on port 11434
- **vLLM** - Local High-performance inference engine on port 8000
- **Custom OpenAI-compatible servers** - Any other server with OpenAI-compatible API

Below are instructions to set up Ollama or vLLM as your LLM backend.

###### Install Ollama 
```bash
curl -fsSL https://ollama.com/install.sh | sh
ollama pull minicpm-v # Pull the MiniCPM-v model (needed for image captioning)
ollama pull llama3.1 # Pull the Llama3.1 model (or any other model you want to use)
```

###### Install vLLM 
```bash
pip install vllm
python3 -m vllm.entrypoints.openai.api_server <model_name> --host 0.0.0.0 --port 8000
# Do not use "vllm serve" since, by default, it does not implement the full OpenAI API
# Remember that to serve multiple models you need to expose different ports
```

<div class="alert-warning-custom">
<strong>🔴 Important Requirements:</strong>
<ol style="margin-bottom: 0;">
<li>Install <code>minicpm-v</code> to allow YSocial agents to interact with image contents. If you run ollama, you can use the admin panel to add LLM models.</li>
</ol>
</div>

{% endcapture %}
{{ y_client_server | markdownify }}
</details>

<details>
<summary data-excerpt="Run YSocial with your chosen LLM & DBMS backends."><strong>Step 3: Start YSocial</strong></summary>

{% capture y_client_start %}

To start the `YSocial`, run the following command in your terminal. You can specify the host and port as needed.

```bash
python y_social.py --host localhost --port 8080
```

YSocial will start and be accessible via your web browser at [http://localhost:8080](http://localhost:8080).

<br>
##### Advanced Configuration

By default, YSocial:
- starts on `localhost:8080`;
- SQlite as the DBMS;
- load the Jupyter Lab module for advanced analytics.

All those options can be changed via command-line arguments.
<br>
###### Choose Your (local) LLM Backend

`YSocial` supports OpenAI compatible, local, LLM backends.

```bash
# Use Ollama 
python y_social.py --llm-backend ollama

# Use vLLM
python y_social.py --llm-backend vllm

# Use custom OpenAI-compatible server
python y_social.py --llm-backend myserver.com:8000
```

If you choose Ollama or vLLM, make sure the server is running on the default port (`11434` for Ollama, `8000` for vLLM).

If you plan to use a remote server just start `YSocial` without the `--llm-backend` argument and set the LLM server URL in the Admin Panel.

```bash
python y_social.py 
```

###### Choose Your Database

`YSocial` supports two database backends:

- **SQLite** (default): Lightweight, file-based database. Perfect for development and testing.
- **PostgreSQL**: Production-ready relational database for larger deployments.

```bash
# Start YSocial with PostgreSQL
python y_social.py --db postgresql # (assuming you have PostgreSQL running and configured)
```

By default, `YSocial` will search for the following environment variables to access PostgreSQL:
- `PG_USER` (default: "postgres")
- `PG_PASSWORD` (default: "password")
- `PG_HOST` (default: "localhost")
- `PG_PORT` (default: "5432")
- `PG_DBNAME` (default: "dashboard")
- `PG_DBNAME_DUMMY` (default: "dummy")

<div class="alert-info-custom">
<strong>💡 Database Choice:</strong> SQLite is ideal for single-user scenarios and development. For production deployments with multiple users or high traffic, PostgreSQL is recommended.
</div>

###### Disable Jupyter Lab Module
Jupyter Lab is included for advanced data analytics. If you don't need it, you can disable it with the following command:

```bash
# Start YSocial without Jupyter Lab
python y_social.py --no_notebook
```

<div class="alert-info-custom">
<strong>💡 Success!</strong> The web interface will be available at <strong><a href="http://localhost:8080">http://localhost:8080</a></strong>
</div>


##### 🔑 Admin Panel Access

To access the **admin panel**, use the default credentials:

- **Email:** `admin@ysocial.com`
- **Password:** `test`

Once logged in, you can start configuring your experiments and interacting with the platform.


{% endcapture %}
{{ y_client_start | markdownify }}
</details>

</div>
</div>

<div style="text-align: center; margin: 2rem 0;">
<a href="https://ysocialtwin.github.io/key_features" class="cta-primary" style="margin-right: 1rem;">🚀 Introduction to YSocial</a>
<a href="https://ysocialtwin.github.io/docker" class="cta-secondary">📖 Install with Docker</a>
</div>

</div>
