---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
title:  "Resources"
subtitle: "Datasets, Publications and more"
show_sidetoc: true
header_type: hero #base, post, hero,image, splash
header_img: assets/images/resources.png
header_title: "Resources"
vega: true
---

Here you can find some datasets generated with Y Social, as well as collections of predefined thematic agent populations and news pages.

Dataset compatible with `Y Social` Web will be released shortly, stay tuned!
{: #myid .alert .alert-info .p-3 .mx-2 mb-3}




<details>
<summary><strong>Experiment's Data</strong></summary>

{% capture y_client_content %}

Each experiment produces several files, primarily containing metadata about the agents or the simulation setup.

One key file is `database_server.db`, which stores the data generated during the simulation in SQLite format.

This database includes the following tables:

- `user_mgmt`: contains the agents' metadata;
- `articles`: contains the news articles that agents shared;
- `websites`: contains the websites whose articles that agents shared;
- `emotions`: contains the emotions that agents contents can elicit;
- `follows`: contains the social connections between agents;
- `hashtags`: contains the hashtags used by agents;
- `images`: contains the images (along with their LLM textual annotation) shared by agents;
- `post`: contains the posts/comments shared by agents;
- `post_emotions`: contains the emotions elicited by agents contents;
- `post_hashtags`: contains the hashtags used by agents in their contents;
- `post_sentiment`: contains the VADER sentiment annotations of agents' generated contents;
- `post_toxicity`: contains the Perspective API toxicity annotations of agents' generated contents;
- `post_topics`: contains the topics (i.e., interests) of agents' generated contents;
- `interests`: contains the interests (i.e., topics) used in the simulation;
- `user_interests`: contains the interests (i.e., topics) used by agents to generate content;
- `voting`: contains the votes cast by agents (if the "cast" action is enabled);
- `mentions`: contains the mentions between agents;
- `reactions`: contains the reactions to agents contents;
- `recommendations`: contains the content recommendations provided by the server to agents;
- `rounds`: contains the simulation rounds.

Sometimes sqlite files might appear as corrupted when downloaded. 
In such an eventuality, recover them by running the following command:

```bash
sqlite3 database_server.db .recover > data.sql
sqlite3 database_recovered.db < data.sql
```

After the recovery, the database will be ready to be queried.




![Dataset and Publications](../assets/images/data_pubs.jpg)

## Available datasets

| Dataset Name | LLM          | Number of Starting Agents | Content Recsys                     | Follow Recsys | Starting Graph | Days | File                                                                  |
|--------------|--------------|---------------------------|------------------------------------|---------------|----------------|------|-----------------------------------------------------------------------|
| `Recsys1`    | LLama3.1-8B  | 1000                      | Reverse Chrono                     | Disabled      | Random Graph   | 60   | [📕](../assets/datasets/1k_60d_ReverseChrono_ER_database.db.zip)      |
| `Recsys2`    | LLama3.1-8B  | 1000                      | Reverse Chrono Popularity          | Disabled      | Random Graph   | 60   | [📕](../assets/datasets/1k_60d_Popularity_ER_database.db.zip)         |
| `Recsys2a`   | LLama3.1-8B  | 1000                      | Reverse Chrono Popularity          | Disabled      | Scale-free     | 60   | [📕](../assets/datasets/1k_60d_Popularity_BA_database.db.zip)         |
| `Recsys3`    | LLama3.1-8B  | 1000                      | Reverse Chrono Follower            | Disabled      | Random Graph   | 60   | [📕](../assets/datasets/1k_60d_Follower_ER_database.db.zip)           |
| `Recsys3a`   | LLama3.1-8B  | 1000                      | Reverse Chrono Follower            | Disabled      | Scale-free     | 60   | [📕](../assets/datasets/1k_60d_Follower_BA_database.db.zip)           |
| `Recsys4`    | LLama3.1-8B  | 1000                      | Reverse Chrono Popularity Follower | Disabled      | Random Graph   | 60   | [📕](../assets/datasets/1k_60d_FollowerPopularity_ER_database.db.zip) |
| `Recsys4a`   | LLama3.1-8B  | 1000                      | Reverse Chrono Popularity Follower | Disabled      | Scale-free     | 60   | [📕](../assets/datasets/1k_60d_FollowerPopularity_BA_database.db.zip) |


Datasets are released under the [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) license. 
{: #myid .alert .alert-info .p-3 .mx-2 mb-3}

{% endcapture %}
{{ y_client_content | markdownify }}

</details>

#### Research and Outreach

`Y Social` is a research project: as such, we are always looking for collaborations and opportunities to share our work with the community.

Here some publications related to Y Social project.

- *Rossetti, G.* et al. [Y Social: an LLM-powered Social Media Digital Twin](https://arxiv.org/abs/2408.00818), arXiv:2408.00818, 2024.


Are you using `Y Social` in your research? <br>
Let us know and we will add your publication to the list!
{: #myid .alert .alert-info .p-3 .mx-2 mb-3}

---

##### `Y Social` presentations

`Y Social` has been presented at several conferences and workshops, including:
- ICT4Intel Trends, 2024
- ASONAM - Int. Conference on Advances in Social Networks Analysis and Mining, 2024
- Int. Conference on Complex Networks and their Applications, 2024
- CS2Italy - Conference on Computational Social Science, 2024
- FAIR (Future Artificial Intelligence Research) workshop, 2025


Forthcoming Events:
- [Tutorial](events/hhai) *"LLM-powered Simulations of Social Media Environments"* @[HHAI](https://hhai-conference.org/2025/), 2025
- Workshop *"Simulating Societies"* @[CCS](https://ccs25.cssociety.org/), 2025
- SoBigData Summer School - [From Data to Social Innovation](https://summerschool2025.sobigdata.eu/), 2025
- The Threads of Complex Networks Summer School, 2025


Here a slide deck about the `Y Social` project.

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSWYu2s09mEJwL7mskYHC3XFuIeTdBPTnHEpee3KyCCFbr5eyix7UZMyUEMYrSfm_ZMI9_ZJt64Ql1Z/embed?start=false&loop=false&delayms=3000" frameborder="0" width="100%" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

