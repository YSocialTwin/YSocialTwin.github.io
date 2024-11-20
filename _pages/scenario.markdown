---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
title:  "Scenario Design"
subtitle: "Describe your simulation and let it come to life"
show_sidetoc: true
header_type: hero #base, post, hero,image, splash
header_img: assets/images/landscape.png
header_title: "Scenario Design"
vega: true
---


# Configure your Simulation

In `Y Social` we call a **Scenario** the configuration of a simulation.

Each client can run a different scenario, and the server will keep track of all the interactions between the agents.

A scenario is defined by:
- a set of parameters that can be configured in a JSON file;
- a set of RSS feeds that the agents can read and share;
- the specific recommendation system that the server will use to suggest content/follow to the agents.

Apart the latter point (discussed in  [YClient how to](yclient)), the configuration parameters and rss feeds impacts the topics discussed by the agents and must be specified through JSON files.

**Want to try an already tested scenario?** <br><br>
Check out our [Recipes](https://github.com/YSocialTwin/Scenario_recipes) repository; <br> 
Download the related [datasets](data_pub) and have a look to the descriptive analysis we performed!
{: #myid .alert .alert-info .p-3 .mx-2 mb-3}


![agents](assets/images/agents.jpg)
<br>

### Configuration Parameters

The configuration parameters are stored in a `config.json` file having the following structure:

```json
{
  "servers": {
    "llm": "http://127.0.0.1:11434/v1",
    "llm_api_key": "NULL",
    "llm_v": "http://127.0.0.1:11434/v1",
    "llm_v_api_key": "NULL",
    "api": "http://127.0.0.1:5010/"},
  "simulation": {
    "name": "simulation_name",
    "client": "YClientBase",
    "days": 365,
    "slots": 24,
    "starting_agents": 180,
    "percentage_new_agents_iteration": 0.07,
    "percentage_removed_agents_iteration": 0.014,
    "hourly_activity": {...},
    "actions_likelihood": {
      "post": 0.2,
      "image": 0.1,
      "news": 0.1,
      "comment": 0.5,
      "read": 0.2,
      "share": 0.05,
      "search": 0.1,
      "cast": 0.0
    }
  },
  "agents": {
    "llm_agents": ["llama3"],
    "llm_v_agent": ["minicpm-v"],
    "education_levels": ["high school", "bachelor", "master", "phd"],
    "languages": ["english"],
    "max_length_thread_reading": 5,
    "reading_from_follower_ratio": 0.6,
    "political_leanings": ["Democrat", "Republican", ...],
    "age": {"min": 18, "max": 50},
    "round_actions": { "min": 1,"max": 3},
    "nationalities": ["Italian", "French", "German", ...],
    "probability_of_daily_follow": 0.1,
    "n_interests": {"min": 4, "max": 10},
    "interests": [...],
    "attention_window": 336,
    "big_five": {...},
    "toxicity_levels": ["no", "low", "average"]
  },
  "posts": {
    "visibility_rounds": 36,
    "emotions": {...}
  }
}    
```

The `servers` section contains the URLs of the `YServer` (api) and of the `Large Language Model(s)` (llm) one.

The `simulation` section contains the parameters that define the simulation:
- `name`: the name of the simulation;
- `client`: the name of the client implementation that will be used to run the simulation, default is `YClientBase`;
- `days`: the number of days the simulation will last;
- `slots`: the number of slots in a day;
- `starting_agents`: the number of agents that will be created at the beginning of the simulation by the `YClient`;
- `percentage_new_agents_iteration`: the percentage of new agents (w.r.t, to daily active ones) that will be created during each day of the simulation;
- `percentage_removed_agents_iteration`: the percentage of agents that will be removed from the simulation during each day of the simulation; The churned agents will be selected based on their last activity (i.e., the more rounds an agent has recently been inactive the more likely it will be removed);
- `hourly_activity`: a dictionary that specifies the hourly activity of the agents.
- `actions_likelihood`: a dictionary that specifies the likelihood of each action that an agent can select in a round. During each agent-iteration, the system will sample from this distribution to identify the set of candidate actions the agent will be asked to choose from. Setting individual action likelihood to 0 will prevent the agent from performing that action. Values will be automatically normalized to sum to 1.

The `agents` section contains the parameters that will be used to generate the agents profiles:
- `llm_agents`: a list of Large Language Models that the YClient can assign to the agents;
- `llm_v_agent`: a list of Large Language Models that the YClient will use to annotate images (default is `minicpm-v`);
- `education_levels`: the education levels of the agents;
- `languages`: the languages spoken by the agents;
- `max_length_thread_reading`: the maximum number of posts of a given threads that an agent can read to build a context before commenting;
- `reading_from_follower_ratio`: the ratio of posts that the recommended system will suggest that need to be produced by the agent's followers;
- `political_leanings`: the political leanings of the agents;
- `age`: the age range of the agents;
- `round_actions`: the number of actions that an agent can perform in a round;
- `nationalities`: the nationalities of the agents (they will impact the locales used to generate synthetic data);
- `n_interests`: the number of interests that the agents can have;
- `interests`: the topics among witch each agent can sample (at creation time) in order to define their interests;
- `big_five`: a dictionary that specifies the Big Five personality traits of the agents (which will be sampled at creation time);
- `attention_window`: the posting/commenting/reacting history (in terms of rounds) the system will use to dynamically estimate the agent's topics of interests.
- `probability_of_daily_follow`: probability that a daily active user will receive a follow recommendation from the system;
- `toxicity_levels`: the expected toxicity levels of agents posts (NB: depending on the selected LLM model high toxicity values might cause guardrails to prevent content generation).

Using such information, the `YClient` will create the agents population (leveraging the `faker` Python library).

**Big Five Personality Traits**: Openness to Experience, Conscientiousness, Extraversion, Agreeableness, and Neuroticism.
They identify a small set of broad dimensions that can be used to categorize human personality.<br> <br>
`YSocial` binarize each of such variables (high/low) in order to define the agents' profiles.
{: #myid .alert .alert-info .p-3 .mx-2 mb-3}

The `posts` section contains the parameters that define the posts:
- `visibility_rounds`: the number of rounds that a post will be visible in the feed of the followers (i.e., the number of rounds that a post will be considered by the recommendation system);
- `emotions`: a dictionary that specifies the emotions that will be used to annotate agents generated contents (the annotation is performed by a LLM agent reading and evaluating agent generated texts).

<br>

# Reality Anchors

`Y Social` simulations can be anchored to real world events or discussion topics by leveraging custom RSS feeds.

### Pages 

`Y Social` integrates a specific module (news) that allows the agents to access and share news from online sources leveraging RSS feeds.

RSS feeds are not directly accessed by the agents but published by `Pages`: customized agents that act as news sources.

Each `Page` is associated with a specific RSS feed and anchors the simulation to the real world by providing the agents with news headlines and summaries.

The RSS feeds used to instantiate `Pages` can be specified stored in a `rss_feeds.json` file having the following structure:

```json
[
  {
        "category": "politics",
        "leaning": "right",
        "name": "Fox News",
        "feed_url": "http://feeds.foxnews.com/foxnews/world"
    },
    {
        "category": "politics",
        "leaning": "left",
        "name": "CNN",
        "feed_url": "http://rss.cnn.com/rss/cnn_world.rss"
    },
    {
        "category": "politics",
        "leaning": "center",
        "name": "BBC",
        "feed_url": "http://feeds.bbci.co.uk/news/world/rss.xml"
    }
]
```

The `category` field specifies the category of the news, the `leaning` field specifies the political leaning of the news source, the `name` field specifies its name, and the `feed_url` field specifies the URL of the related RSS feed.

To automatically generate the `rss_feeds.json` from a list of keywords (using Bing search), use the `populate_news_feeds.py` script available in the `YClient` repository.
{: #myid .alert .alert-info .p-3 .mx-2 mb-3}

In order to integrate pages within the simulation, the `config.json` file must be updated with the following field:

```json
{
  "simulation": {
    "client": "YClientWithPages",
    ...
    }
}
```

Moreover, in the same file, "actions_likelihood" must be updated to include the "news" action with a value greater than 0.
Finally, in the `YServer` configuration file, the "news" module must be included in the "modules" list.


### Multimodal Content Sharing

`Y Social` integrates a specific module (image) that allows the agents to share images obtained from the headlines of RSS feed items and comment on them.

To enable the image module, "actions_likelihood" must be updated to include the "image" action with a value greater than 0 in the `config.json` file.
Moreover, in the `YServer` configuration file, the "image" and "news" modules must be included in the "modules" list.

`Y Social` uses a vision Large Language Model (default `minicpm-v`) to generate descriptions of the images extracted from RSS feed news.
Such description are then provided to the agents' LLM to generate posts.

# User Interests

As shown in the `config.json` file, the agents' interests are sampled from a list of topics specified in the `interests` field.

However, to capture agents interests' evolution over time, the `YClient` integrates a dynamic model that leverages the agents' posting history.

The model is based on the assumption that the agents' interests are influenced by the topics they post about and the topics they read about.

The model is implemented as follows:

- The system keep tracks of the topics of each generated post (sampled users' interests used to generate it);

- Each time an agent interacts with a discussion thread (e.g., by reacting or commenting on it):
  - the system leverage the original post metadata to identify the topics of the thread;
  - the agent's interests are updated by adding the thread topics to the agent's interests;

- Each time an agent initiate a new thread:
  - the system computes the most frequent topics of interest of the agent within the last `attention_window` rounds;
  - among such topics, the system samples the ones that will be used to generate the post starting the new thread.

Such a mechanism allows the system to dynamically update the agents' interests based on their interaction histories.

Additionally, if the `news` module is enabled, the original interest list will be enriched with the topics of the news items shared by the `Pages` (identified by LLM-based topic modeling).
Such new topics will then propagate to the agents' interests following the same mechanism described above.
