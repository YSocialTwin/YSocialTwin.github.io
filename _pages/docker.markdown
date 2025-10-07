---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
title:  "Y Social"
subtitle: "Docker Installation Guide"
show_sidetoc: true
header_type: hero #base, post, hero,image, splash
header_img: assets/images/server1.jpg
header_title: "Y Social"
vega: true
---

<div class="container py-3">
    <div class="row">
        <div class="col-md-12">

<div class="alert-info-custom">
<strong>💡 Want a hassle-free installation?</strong> Y Social can be easily deployed with a preconfigured Docker container that includes everything you need to get started.
</div>

<div class="alert-info-custom">
<strong>✅ Platform Compatibility:</strong> Docker works on <strong>GNU/Linux</strong>, <strong>MacOS</strong>, and <strong>Windows</strong>. This is the recommended installation method for Windows users.
</div>

<div style="text-align: center; margin: 2rem 0;">
<a href="{{site.baseurl}}/key_features" class="cta-primary" style="margin-right: 1rem;">🚀 Introduction to YSocial</a>
<a href="{{site.baseurl}}/ysocial" class="cta-secondary">📖 Manual Installation</a>
</div>

---

## 🐳 Running with Docker

### What is Docker?

Docker is a platform for developing, shipping, and running applications in containers. Containers package your application and all its dependencies together, ensuring it runs consistently across different environments.

Don't want to deal with dependencies? Y Social provides a **Dockerized setup** that includes:
- **[Ollama](https://ollama.com/)** for running LLMs locally
- **Y Server / Y Client** for managing simulations
- **Y Social** web interface
- Pre-configured environment with all dependencies

---

## Prerequisites

Before you begin, ensure you have:
- **Docker** installed (version 20.10+)
  - [Install Docker Desktop](https://www.docker.com/products/docker-desktop/) (includes Docker Compose)
  - Or install Docker Engine for Linux
- **Docker Compose** (usually included with Docker Desktop)
- At least **8GB RAM** available
- **10GB free disk space**

<div class="alert-info-custom">
<strong>💡 Check Your Installation:</strong>
<pre><code>docker --version
docker-compose --version</code></pre>
</div>

---

## 📦 Basic Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/YSocialTwin/YSocial.git
cd YSocial
```

### Step 2: Build & Run with Docker Compose

```bash
docker-compose -f docker-compose.yml build
docker-compose up
```

<div class="alert-info-custom">
<strong>💡 Success!</strong> The web interface will be available at <strong><a href="http://localhost:8080">http://localhost:8080</a></strong>
</div>

<div class="alert-warning-custom">
<strong>⚠️ First Run:</strong> The initial build may take 5-10 minutes as it downloads and installs all dependencies and LLM models.
</div>

### Step 3: Access the Application

Once the containers are running, open your browser and navigate to:
- **Web Interface**: [http://localhost:8080](http://localhost:8080)
- **Admin Panel**: Login with `admin@ysocial.com` / `test`

---

## ⚡ GPU Support (NVIDIA Only)

For users with NVIDIA GPUs who want accelerated LLM inference:

### Prerequisites
- NVIDIA GPU with CUDA support
- [NVIDIA Container Toolkit](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/install-guide.html) installed

### Build & Run with GPU Support

```bash
docker-compose -f docker-compose.yml -f docker-compose_gpu.yml build
docker-compose up --gpus all
```

<div class="alert-warning-custom">
<strong>⚠️ Note:</strong> MacOS does not support GPU pass-through in Docker. MacOS users should use the CPU-only configuration.
</div>

---

## 🔧 LLM Backend Configuration

Y Social supports multiple LLM backends through Docker environment variables:

### Using Ollama (Default)

Ollama is included in the Docker container by default:

```bash
docker-compose up
```

Or explicitly specify:

```bash
docker run -e LLM_BACKEND=ollama -p 8080:8080 ysocial:latest
```

### Using vLLM

For high-performance inference with vLLM:

```bash
docker run -e LLM_BACKEND=vllm -p 8080:8080 ysocial:latest
```

<div class="alert-info-custom">
<strong>💡 Note:</strong> When using vLLM, you need to start a separate vLLM server or configure it in your docker-compose.yml
</div>

### Using Custom LLM Server

Connect to any OpenAI-compatible LLM server:

```bash
docker run -e LLM_BACKEND=myserver.com:8000 -p 8080:8080 ysocial:latest
```

---

## 💾 Database Configuration

Choose your database backend with environment variables:

### Using SQLite (Default)

SQLite is the default database, perfect for development and single-user scenarios:

```bash
docker-compose up
```

### Using PostgreSQL

For production deployments with multiple users:

```yaml
# Add to your docker-compose.yml or use environment variable
services:
  ysocial:
    environment:
      - DB_TYPE=postgresql
      - DB_HOST=postgres
      - DB_PORT=5432
      - DB_NAME=ysocial
      - DB_USER=ysocial
      - DB_PASSWORD=your_password
```

Or via command line:

```bash
docker run \
  -e DB_TYPE=postgresql \
  -e DB_HOST=your-postgres-host \
  -e DB_PORT=5432 \
  -p 8080:8080 \
  ysocial:latest
```

<div class="alert-info-custom">
<strong>💡 Database Choice:</strong>
<ul style="margin-bottom: 0;">
<li><strong>SQLite:</strong> Ideal for development, testing, and single-user scenarios</li>
<li><strong>PostgreSQL:</strong> Recommended for production with multiple users or high traffic</li>
</ul>
</div>

---

## 📋 Docker Compose Configuration Example

Here's a complete `docker-compose.yml` example with all options:

```yaml
version: '3.8'

services:
  ysocial:
    build: .
    ports:
      - "8080:8080"
    environment:
      - LLM_BACKEND=ollama          # ollama, vllm, or custom server
      - DB_TYPE=sqlite              # sqlite or postgresql
      - HOST=0.0.0.0
      - PORT=8080
    volumes:
      - ./data:/app/data            # Persist data
      - ./experiments:/app/experiments  # Persist experiments
    restart: unless-stopped

  # Optional: Add PostgreSQL service
  postgres:
    image: postgres:14
    environment:
      - POSTGRES_DB=ysocial
      - POSTGRES_USER=ysocial
      - POSTGRES_PASSWORD=ysocial_password
    volumes:
      - postgres_data:/var/lib/postgresql/data
    restart: unless-stopped

volumes:
  postgres_data:
```

---

## 🛠️ Common Docker Commands

### Start Services
```bash
docker-compose up
```

### Start in Background (Detached Mode)
```bash
docker-compose up -d
```

### Stop Services
```bash
docker-compose down
```

### View Logs
```bash
docker-compose logs -f
```

### Rebuild After Changes
```bash
docker-compose down
docker-compose build --no-cache
docker-compose up
```

### Access Container Shell
```bash
docker-compose exec ysocial /bin/bash
```

---

## ❓ Troubleshooting

### Port Already in Use

If port 8080 is already in use, modify the port mapping in `docker-compose.yml`:

```yaml
ports:
  - "8081:8080"  # Use port 8081 instead
```

### Container Won't Start

Check the logs:
```bash
docker-compose logs
```

### Out of Disk Space

Remove unused Docker images and containers:
```bash
docker system prune -a
```

### Permission Issues

On Linux, you may need to run Docker commands with `sudo` or add your user to the docker group:
```bash
sudo usermod -aG docker $USER
# Log out and log back in for changes to take effect
```

---

## 🚀 Next Steps

After installation:

1. **Access the Admin Panel** with credentials: `admin@ysocial.com` / `test`
2. **Configure Your First Simulation** through the admin interface
3. **Pull LLM Models** using the admin panel's model management
4. **Explore Features** and create your first simulation

<div style="text-align: center; margin: 2rem 0;">
<a href="{{site.baseurl}}/key_features" class="cta-primary">📖 Explore Features</a>
</div>

        </div>
    </div>
</div>
