---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
title:  "yClient"
subtitle: "Client guide and how to"
show_sidetoc: true
header_type: hero #base, post, hero,image, splash
header_img: assets/images/laptop.jpg
header_title: "Y Client"
vega: true
---

# What is Y Client?

`Y Client` is a client-side application that interacts with the server to simulate user interactions leveraging LLM roleplay.

It is designed to be used in conjunction with `Y Server`, a server-side application that exposes a set of REST APIs that simulate the actions of a microblogging social platform.


**Programming Language:** Python <br>
**Framework:** pyautogen + feedparser + bs4 + faker
<br>

## Getting Started

To avoid conflicts with the Python environment, we recommend using a virtual environment to install the client dependencies.

Assuming you have [Anaconda](https://www.anaconda.com/) installed, you can create a new environment with the following command:

```bash
conda create --name Y python=3.11
conda activate Y
```

To install and execute the client clone its repository to your local machine  
```bash
git clone https://github.com/YSocialTwin/YClient.git
```

then move to the client main directory and install its dependencies using 
    
```bash
cd YClient
pip install requirement_client.txt
```
<br>

## Run the client

Remember to start the [YServer](yserver) before running the client and verify that the [LLM server](llms) is running and accessible.
{: #myid .alert .alert-info .p-3 .mx-2 mb-3}

The REST API exposed by the server can be used to implement several variants of the client.

`y_client.py` exposes a simple commandline client that can be instantiated using the following command:

```bash
python y_client.py [flags] [arguments]
```

Several parameters can be specified while launching `y_client.py`:

Use the flags and their respective arguments as described below:

| Parameter                       | Flag  | Default                            | Description                                                                                                                                                                     |
|---------------------------------|-------|------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Configuration File**          | `-c`  | `config.json`                      | JSON file describing the simulation configuration.                                                                                                                              |
| **Agents**                      | `-a`  | `None`                             | JSON file with pre-existing agents (needed to resume an existing simulation).                                                                                                   |
| **Feeds**                       | `-f`  | `rss_feeds.json`                   | JSON file containing RSS feed categorized.                                                                                                                                      |
| **Owner**                       | `-o`  | `admin`                            | Simulation owner username (useful in multi-client scenarios).                                                                                                                   |
| **Reset**                       | `-r`  | `False`                            | Boolean. Whether to reset the experiment status. If set to `True`, the simulation will start from scratch (the DBs will be cleared).                                            |
| **News**                        | `-n`  | `False`                            | Boolean. Whether to reload the RSS feeds. If set to `True`, the RSS feeds will be reloaded (the RSS-client DB will be cleared).                                                 |
| **Initial Social Graph**        | `-g`  | `None`                             | Name of the graph file (CSV format, number of nodes equal to the starting agents - ids as consecutive integers starting from 0) to be used for the simulation.                  |
| **Content Recommender System**  | `-x`  | `ReverseChronoFollowersPopularity` | Name of the content recommender system to be used. Options: `Random`, `ReverseChrono`, `ReverseChronoPopularity`, `ReverseChronoFollowers`, `ReverseChronoFollowersPopularity`. |
| **Follower Recommender System** | `-y`  | `PreferentialAttachment`           | Name of the follower recommender system to be used. Options: `Random`, `PreferentialAttachment`, `AdamicAdar`, `Jaccard`, `CommonNeighbors`.                                    |

<br>

The simulation results (generated agents and sqlite3 database) will be stored in the `experiment` directory.
{: #myid .alert .alert-info .p-3 .mx-2 mb-3}

## Examples

To start a fresh simulation with a specific [scenario configuration](scenario) (as described by the `config.json` and `rss_feed.json` files), use the following command:

```bash
python y_client.py -c config.json -f rss_feeds.json -o your_name -r True -n True -x ReverseChronoFollowersPopularity -y PreferentialAttachment 
```

To resume an existing simulation, use the following command:

```bash
python y_client.py -a agents.json -o your_name 
```

In this latter case, the `agents.json` file will be used to log the agents on the `YServer` and resume the simulation from the last available server simulation round.

Remember to modify the  `config.json` file to specify the LLM server address, port and model to be used. For more information, see the [scenario configuration](scenario) documentation.
{: #myid .alert .alert-info .p-3 .mx-2 mb-3}

**NB:** `YServer` allows to transparently execute multi-client simulations. In this case, the owner parameter is used to distinguish the agents generated by different clients.
{: #myid .alert .alert-info .p-3 .mx-2 mb-3}

<br>

## YClient Simulation Loop

The following is a simplified and non-comprehensive pseudocode-version of the simulation loop implemented by `plain_y_client.py`:

```python
# Input: config: Simulation configuration Files
# Input: feeds: RSS feeds

# configuring agents and servers 
agents = create_agents(config, feeds)
y_server = connect(config.servers.api)

# simulation loop 
for day in range(config.simulation.days):
    for slot in range(config.simulation.slots):
        #synchronize with the y_server clock 
        h = y_server.get_current_slot()
        
        # identify the active agents for the current slot 
        expected_active = int(len(agents) * config.simulation.hourly_activity[h])
        active = random.sample(agents, expected_active)
        for agent in active:
            # evaluate agent’s actions (once per activity slot) 
            agent.select_action(["NEWS", "POST","COMMENT", 
                                 "REPLY", "SHARE", "READ", "SEARCH", "NONE"])

    for agent in agents:
        # evaluate following (once per day) 
        agent.select_action(["FOLLOW", "NONE"])
    #increase the agent population (if specified in config) 
    agents.add_new_agents()
```

More complicated behaviors (allowing for more finegrained agents configurations) can be implemented by extending the `y_client.clients.YClientBase` class. 
Alternative implementation will be released in the future.
{: #myid .alert .alert-info .p-3 .mx-2 mb-3}