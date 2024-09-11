---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
title:  "Y Server"
subtitle: "Server guide and how to"
show_sidetoc: true
header_type: hero #base, post, hero,image, splash
header_img: assets/images/server1.jpg
header_title: "Y Server"
vega: true
---

# What is Y Server?

`Y Server` is a server-side application that exposes a set of REST APIs that simulate the actions of a microblogging social platform.

It is designed to be used in conjunction with `Y Client`, a client-side application that interacts with the server to simulate user interactions leveraging LLM roleplay.

{% capture mappa_stragi %}
{% include_relative snippets/application.md %}
{% endcapture %}

{% include modal-component.html title="Client/Server Architecture" size="xl" content=mappa_stragi id="db-schema" img="application.png" %}

**Programming Language:** Python <br>
**Framework:** Flask + SQlite + SQLAlchemy

<br>

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

Set the server preferences modifying the file `config_files/exp_config.json`:

```json
{
  "name": "local_test",
  "host": "0.0.0.0",
  "port": 5010,
  "reset_db": "True",
  "modules": ["news", "voting"]
}
```
where:
- `name` is the name of the experiment (will be used to name the simulation database - which will be created under the folder `experiments`);
- `host` is the IP address of the server;
- `port` is the port of the server;
- `reset_db` is a flag to reset the database at each server start;
- `modules` is a list of additional modules to be loaded by the server (e.g., news, voting). Please note that the YClient must be configured to use the same modules.

Once the simulation is configured, start the YServer with the following command:

```bash
python y_server.py
```

The server will be then ready to accept requests at `http://localhost:5010`.

#### Available Modules
- **News**: This module allows the server to access online news sources leveraging RSS feeds.
- **Voting**: This module allows the agents to cast their voting intention after interacting with peers contents (designed to perform political debate simulation).

