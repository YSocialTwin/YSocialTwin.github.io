---
layout: default-full
title: "Docker"
subtitle: "Deploy YSocial on a server or a laptop with one command."
eyebrow: "Container"
header_title: "Install with Docker"
header_type: hero
show_sidetoc: true
---

<div class="ys-article" markdown="1">

<p class="ys-lede">Need to deploy on a <mark>server</mark>, or just keep your machine clean? Use the prebuilt container image.</p>

<div class="alert-info-custom">
<strong>Platform compatibility.</strong> Docker works on GNU/Linux, macOS and Windows, and is a good choice for Windows users who prefer not to install Python.
</div>

## Quick start

The image is published on the GitHub Container Registry. Your data lives in the `ysocial-data` volume, so it survives restarts and upgrades.

<div class="ys-cmd"><code>docker run -d --name ysocial -p 5000:5000 -v ysocial-data:/data ghcr.io/ysocialtwin/ysocial:latest</code></div>

Open [http://localhost:5000](http://localhost:5000) and log in with <mark>admin@y-not.social</mark> / <mark>admin</mark>. Change the password afterwards.

<div class="alert-warning-custom">
<strong>The LLM server runs outside the container.</strong> YSocial needs an OpenAI-compatible endpoint (Ollama, vLLM or a commercial API). Set its address from the admin panel. To reach Ollama on your host from the container use <code>http://host.docker.internal:11434</code> (with plain <code>docker run</code> on Linux, add <code>--add-host=host.docker.internal:host-gateway</code>).
</div>

## Prerequisites

- **Docker** (Docker Desktop includes Compose), or Docker Engine on Linux.
- Enough resources for your simulation: a few GB of RAM and free disk space for the data volume. The LLM server needs its own resources.

```bash
docker --version
docker compose version
```

## Options

<details open>
<summary data-excerpt="Build the image yourself and start it with Compose.">Docker Compose from the repository</summary>
<div markdown="1">

The repository ships `docker/compose.yml`. It builds the image and starts YSocial with SQLite:

```bash
git clone https://github.com/YSocialTwin/YSocial.git
cd YSocial
docker compose -f docker/compose.yml up
```

The web interface is on [http://localhost:5000](http://localhost:5000). Use `YSOCIAL_PORT` to change the host port:

```bash
YSOCIAL_PORT=8080 docker compose -f docker/compose.yml up
```

</div>
</details>

<details>
<summary data-excerpt="Add a PostgreSQL service for larger deployments.">PostgreSQL</summary>
<div markdown="1">

SQLite is the default and is ideal for development and single-user use. For many users or heavier traffic, enable the `postgres` profile, which adds a PostgreSQL 16 service with its own volume:

```bash
docker compose -f docker/compose.yml --profile postgres up
```

Database name and credentials can be overridden with `POSTGRES_DB`, `POSTGRES_USER` and `POSTGRES_PASSWORD`. Change the defaults before exposing the service.

</div>
</details>

<details>
<summary data-excerpt="Build the image with detoxify and torch included.">Toxicity detection</summary>
<div markdown="1">

Toxicity detection pulls in large dependencies, so it is off by default. To build an image that includes it:

```bash
WITH_TOXICITY=1 docker compose -f docker/compose.yml build
```

</div>
</details>

<details>
<summary data-excerpt="Logs, stop, update and shell access.">Everyday commands</summary>
<div markdown="1">

```bash
docker logs -f ysocial                       # follow logs
docker stop ysocial && docker start ysocial  # stop and start
docker exec -it ysocial bash                 # shell inside the container

# update to the latest image, keeping your data
docker pull ghcr.io/ysocialtwin/ysocial:latest
docker rm -f ysocial
docker run -d --name ysocial -p 5000:5000 -v ysocial-data:/data ghcr.io/ysocialtwin/ysocial:latest
```

Back up the `ysocial-data` volume before major upgrades. It holds the data folder (`YSOCIAL_HOME=/data`).

</div>
</details>

<details>
<summary data-excerpt="Common problems and how to fix them.">Troubleshooting</summary>
<div markdown="1">

- **Port already in use.** Map another host port, for example `-p 8081:5000`.
- **Agents cannot reach Ollama.** Inside a container, `localhost` is the container itself. Use `http://host.docker.internal:11434`, and make sure Ollama listens on an address reachable from Docker.
- **Lost data after removing the container.** Always mount a volume on `/data`.

</div>
</details>

<div class="cta-buttons">
<a href="{{ site.baseurl }}/download" class="cta-primary">Desktop installer</a>
<a href="{{ site.baseurl }}/ysocial" class="cta-secondary">Developer installation</a>
</div>

</div>
