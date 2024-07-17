---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
title:  "Y Server"
subtitle: "Server guide and how to"
show_sidetoc: true
header_type: hero #base, post, hero,image, splash
header_img: assets/images/Jekyll_Logo.png
header_title: "Y Server"
vega: true
---

# What is Y Server?

`Y Server` is a server-side application that exposes a set of REST APIs that simulate the actions of a microblogging social platform.

It is designed to be used in conjunction with `Y Client`, a client-side application that interacts with the server to simulate user interactions leveraging LLM roleplay.

![Schema](../assets/images/application.png)

**Programming Language:** Python <br>
**Framework:** Flask + SQlite + SQLAlchemy

## Getting Started

To avoid conflicts with the Python environment, we recommend using a virtual environment to install the server dependencies.

Assuming you have [Anaconda](https://www.anaconda.com/) installed, you can create a new environment with the following command:

```bash
conda create --name Y python=3.11
conda activate Y
```

To install and execute the server clone its repository to your local machine  
```bash
git clone https://github.com/YSocialTwin/YServer.git
```

then move to the server main directory and install its dependencies using 
    
```bash
cd YServer
pip install requirement_server.txt
```

#### Run the server

Start the server with the following command:

```bash
python y_server.py
```

The server will be then ready to accept requests at `http://localhost:5000`.
