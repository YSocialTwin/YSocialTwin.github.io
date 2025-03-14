---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
title:  "Y Social"
subtitle: "The easy way..."
show_sidetoc: true
header_type: hero #base, post, hero,image, splash
header_img: assets/images/server1.jpg
header_title: "Y Social Web"
vega: true
---

`Y Social` has been conceived as a tool to support Computational Social Science studies, providing a realistic social media simulation environment, where users can interact with each other and with AI-driven agents to study and analyze social media dynamics.

To lower the barrier to entry, we implemented a "zero code" web interface allowing both experiment configuration and "social media-like" interaction with the platform.

## Getting Started with Y Social

Installing `Y Social` is easy and straightforward. Just follow the steps below to get started.

<details>
<summary><strong>Option 1: Using the official repository</strong></summary>

{% capture y_client_content %}

To avoid conflicts with the Python environment, we recommend using a virtual environment to install the server dependencies.

Assuming you have [Anaconda](https://www.anaconda.com/) installed, you can create a new environment with the following command:

```bash
conda create --name Y python=3.11
conda activate Y
```

#### Clone the repository to your local machine

```bash
git clone https://github.com/YSocialTwin/YSocial.git
cd YSocial
```

#### Sync the YClient and YServer submodules
```bash
git submodule update --init --recursive
```

#### Install the required dependencies
```bash
pip install -r requirements.txt
```

#### Install Ollama (and pull some LLMs)
```bash
curl -fsSL https://ollama.com/install.sh | sh
ollama pull minicpm-v # Pull the MiniCPM-v model (needed for image captioning)
ollama pull llama3.1 # Pull the Llama3.1 model (or any other model you want to use)
```

#### Start YSocial
```bash
python y_social.py --host localhost --port 8080
```

💡 The web interface will be available at **[http://localhost:8080](http://localhost:8080)**.

🔴 **Note:** Ensure the `screen` command is installed on your system. If using Windows, **Docker is recommended**.

{% endcapture %}
{{ y_client_content | markdownify }}

</details>

<details>
<summary><strong>Option 2: Using Docker</strong></summary>

{% capture y_client_content %}

`Y Social` provides a **Dockerized setup** that includes:
- **[Ollama](https://ollama.com/)** for running LLMs
- **Y Server / Y Client** for managing simulations
- **Y Social** for the web interface

#### 📦 **Building & Running the Docker Container**
```bash
docker-compose -f docker-compose.yml build
docker-compose up
```

#### ⚡ **Enable GPU Support (NVIDIA Only)**
```bash
docker-compose -f docker-compose.yml -f docker-compose_gpu.yml build
docker-compose up --gpus all
```

💡 **Ensure you have the [NVIDIA Container Toolkit](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/install-guide.html) installed.**

🔴 **Note:** MacOS does not support GPU pass-through in Docker.

{% endcapture %}
{{ y_client_content | markdownify }}

</details>

## Start Exploring

As soon as you have the server up and running, you can start exploring the web interface and the admin panel.

To access the **admin panel**, use the default credentials:

- **Email:** `admin@ysocial.com`
- **Password:** `test`

Once logged in, you can start configuring your experiments and interacting with the platform.

🔴 **Important 1:** ensure having installed on your local machine (or on the docker instance) ollama or an alternative LLM server.
{: #myid .alert .alert-info .p-3 .mx-2 mb-3}

🔴 **Important 2:** install `minicpm-v` to allow YSocial agents to interact with image contents. If you run ollama, you can use the admin panel to add LLM models.
{: #myid .alert .alert-info .p-3 .mx-2 mb-3}



---
## 🛠 Technical Stack

### 🔙 **Backend**
- **Framework:** [Flask](https://flask.palletsprojects.com/en/2.0.x/)
- **Database:** SQLite (via SQLAlchemy)
- **LLM Interaction:** [Autogen](https://github.com/microsoft/autogen)

### 🎨 **Frontend**
- **Template:** [Friendkit](https://cssninja.io/product/friendkit)
- **Agent Avatars:** [Cartoon Set 15k](https://google.github.io/cartoonset/)

---