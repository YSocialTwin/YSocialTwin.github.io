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


<div class="alert-info-custom">
<strong>💡 Do you want a "soft" installation experience? </strong> Y Social can be easily deployed as with a preconfigured Docker container.</div>

<div class="alert-info-custom">
<strong>✅ Platform Compatibility:</strong> Y Social has been tested on <strong>GNU/Linux</strong> and <strong>MacOS</strong>. Windows users are advised to use <strong>Docker</strong>.
</div>

<div style="text-align: center; margin: 2rem 0;">
<a href="{{site.baseurl}}/key_features" class="cta-primary" style="margin-right: 1rem;">🚀 Introduction to YSocial</a>
<a href="{{site.baseurl}}/ysocial" class="cta-secondary">📖 Quick Start</a>
</div>

---

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

<div class="alert-info-custom">
<strong>💡 GPU Support:</strong> Ensure you have the <a href="https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/install-guide.html">NVIDIA Container Toolkit</a> installed.
</div>

<div class="alert-warning-custom">
<strong>⚠️ Note:</strong> MacOS does not support GPU pass-through in Docker.
</div>


**Docker:**
```bash
# Set environment variable (ollama)
docker run -e LLM_BACKEND=ollama -p 5000:5000 ysocial:latest

# Set environment variable (vllm)
docker run -e LLM_BACKEND=vllm -p 5000:5000 ysocial:latest

# Or with custom server
docker run -e LLM_BACKEND=myserver.com:8000 -p 5000:5000 ysocial:latest
```
