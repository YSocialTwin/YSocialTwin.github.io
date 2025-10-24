---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default-full
title:  "Resources"
subtitle: "Datasets, Publications and more"
show_sidetoc: true
header_type: hero #base, post, hero,image, splash
header_img: assets/images/resources.png
header_title: "Resources"
vega: true
---

<div class="container py-3">
<div class="row">
<div class="alert-info-custom">
💡 Here you can find some datasets generated with YSocial, as well as collections of predefined thematic agent populations and news pages.
</div>

<div class="col-md-12" markdown="1">

#### Resources

For simplicity, we provide datasets as SQlite database files generated running `YSocial` simulations with different configurations.
To analyze these datasets, you can use our [ySights](https://ysocialtwin.github.io/ysights/) library, which provides several functions to query and analyze the data stored in the database files.

| Dataset Name | LLM          | Number of Starting Agents | Content Recsys                     | Follow Recsys | Starting Graph | Days | File                                                       |
|--------------|--------------|---------------------------|------------------------------------|---------------|----------------|------|------------------------------------------------------------|
| `Recsys1`    | LLama3.1-8B  | 1000                      | Reverse Chrono                     | Disabled      | Random Graph   | 60   | [📕](https://github.com/YSocialTwin/YSocialTwin.github.io/blob/main/assets/datasets/1k_60d_ReverseChrono_ER_database.db.zip) |
| `Recsys2`    | LLama3.1-8B  | 1000                      | Reverse Chrono Popularity          | Disabled      | Random Graph   | 60   | [📕](https://github.com/YSocialTwin/YSocialTwin.github.io/blob/main/assets/datasets/1k_60d_Popularity_ER_database.db.zip) |
| `Recsys2a`   | LLama3.1-8B  | 1000                      | Reverse Chrono Popularity          | Disabled      | Scale-free     | 60   | [📕](https://github.com/YSocialTwin/YSocialTwin.github.io/blob/main/assets/datasets/1k_60d_Popularity_BA_database.db.zip) |
| `Recsys3`    | LLama3.1-8B  | 1000                      | Reverse Chrono Follower            | Disabled      | Random Graph   | 60   | [📕](https://github.com/YSocialTwin/YSocialTwin.github.io/blob/main/assets/datasets/1k_60d_Follower_ER_database.db.zip) |
| `Recsys3a`   | LLama3.1-8B  | 1000                      | Reverse Chrono Follower            | Disabled      | Scale-free     | 60   | [📕](https://github.com/YSocialTwin/YSocialTwin.github.io/blob/main/assets/datasets/1k_60d_Follower_BA_database.db.zip) |
| `Recsys4`    | LLama3.1-8B  | 1000                      | Reverse Chrono Popularity Follower | Disabled      | Random Graph   | 60   | [📕](https://github.com/YSocialTwin/YSocialTwin.github.io/blob/main/assets/datasets/1k_60d_FollowerPopularity_ER_database.db.zip) |
| `Recsys4a`   | LLama3.1-8B  | 1000                      | Reverse Chrono Popularity Follower | Disabled      | Scale-free     | 60   | [📕](https://github.com/YSocialTwin/YSocialTwin.github.io/blob/main/assets/datasets/1k_60d_FollowerPopularity_BA_database.db.zip) |

Sometimes sqlite files might appear as corrupted when downloaded. 
In such an eventuality, recover them by running the following command:

```bash
sqlite3 database_server.db .recover > data.sql
sqlite3 database_recovered.db < data.sql
```

After the recovery, the database will be ready to be queried.

Datasets are released under the [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) license. 
{: #myid .alert .alert-info .p-3 .mx-2 mb-3}

<details>
<summary data-excerpt="SQLite database with 17+ tables: agents, posts, emotions, follows, hashtags, images, toxicity, sentiment, and more."><strong>Data in Brief</strong></summary>

{% capture y_client_content %}

Each experiment produces several files, primarily containing metadata about the agents or the simulation setup.

The datasets in the table above contain only the sqlite database file storing the data generated during the simulation.
More complete datasets, including logs and configuration files, are available upon request.

This database includes the following tables:

- `user_mgmt`: contains the agents' metadata;
- `articles`: contains the news articles that agents shared;
- `websites`: contains the websites whose articles shared by the agents;
- `emotions`: contains the emotions that contents can elicit;
- `follows`: contains the social connections between agents;
- `hashtags`: contains the hashtags used by agents;
- `images`: contains the images (along with their LLM textual annotation) shared by agents;
- `post`: contains the posts/comments shared by agents;
- `post_emotions`: contains the emotions elicited by agents' contents;
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


{% endcapture %}
{{ y_client_content | markdownify }}

</details>
<br>
#### Research and Outreach

`YSocial` is a research project: as such, we are always looking for collaborations and opportunities to share our work with the community.

The `YSocial` platform (and project) has been presented at several conferences and workshops, including:
- ICT4Intel Trends, 2024
- Int. Conference on Advances in Social Networks Analysis and Mining (ASONAM), 2024
- Int. Conference on Complex Networks and their Applications, 2024
- Italian Conference on Computational Social Science (CS2Italy), 2024
- Future Artificial Intelligence Research (FAIR) workshop, 2025
- [Tutorial](events/hhai) *"LLM-powered Simulations of Social Media Environments"* @[HHAI](https://hhai-conference.org/2025/), 2025
- Workshop *"Simulating Societies"* @[Conference on Complex Systems](https://ccs25.cssociety.org/), 2025
- SoBigData Summer School - [From Data to Social Innovation](https://summerschool2025.sobigdata.eu/), 2025
- [The Threads of Complex Networks](https://tcn2025.wordpress.com/tcn2025/) Summer School, 2025
- ICT4Intel Trends, 2025

Forthcoming Events:
- FAIR 2025 Conference @[FAIR](https://www.fairconference2025.it/), 2025


Here a slide deck about the `YSocial` project.

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSWYu2s09mEJwL7mskYHC3XFuIeTdBPTnHEpee3KyCCFbr5eyix7UZMyUEMYrSfm_ZMI9_ZJt64Ql1Z/embed?start=false&loop=false&delayms=3000" frameborder="0" width="100%" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>





<details>
<summary data-excerpt="Publications and pre-prints citing the YSocial project"><strong>Who is citing and referencing us?</strong></summary>

{% capture research %}


Here are some publications related, or citing, the `YSocial` project. Last updated: October 2025.

- *Rossetti, Giulio* et al. "[Y Social: an LLM-powered Social Media Digital Twin](https://arxiv.org/abs/2408.00818)", arXiv:2408.00818, 2024.
- *Cau, Erica* et al. "Selective agreement, not sycophancy: investigating opinion dynamics in LLM interactions." EPJ Data Science 14.1, 2025: 59.
- *Cau, Erica,* et al. "Bots of a Feather: Mixing Biases in LLMs’ Opinion Dynamics." International Conference on Complex Networks and Their Applications. Cham: Springer Nature Switzerland, 2024.
- *Morini, Virginia*. "The Duality of Social Media Discourse: Characterizing Polluted and Supportive Online Behaviors.", 2025.
- Xie, Chengxing, et al. "Can large language model agents simulate human trust behavior?." Advances in neural information processing systems 37, 2024: 15674-15729.
- Ashery, Ariel Flint et al. "Emergent social conventions and collective bias in LLM populations." Science Advances 11.20, 2025. eadu9368.
- Giorgi, Tommaso, et al. "Human and LLM biases in hate speech annotations: A socio-demographic analysis of annotators and targets." Proceedings of the International AAAI Conference on Web and Social Media. Vol. 19. 2025.
- Zhao, Bingxi, et al. "Llm-based agentic reasoning frameworks: A survey from methods to scenarios." arXiv preprint arXiv:2508.17692, 2025.
- Mao, Rui, et al. "Bridging Minds and Machines: Toward an Integration of AI and Cognitive Science." arXiv preprint arXiv:2508.20674, 2025.
- Mumuni, Alhassan, and Fuseini Mumuni. "Large language models for artificial general intelligence (AGI): A survey of foundational principles and approaches." arXiv preprint arXiv:2501.03151, 2025.
- De Duro, Edoardo Sebastiano, et al. "Measuring and identifying factors of individuals' trust in Large Language Models." arXiv preprint arXiv:2502.21028, 2025.
- Coppolillo, Erica et al. "Unmasking conversational bias in ai multiagent systems." arXiv preprint arXiv:2501.14844, 2025.
- Cerina, Roberto. "Possum: A protocol for surveying social-media users with multimodal llms." arXiv preprint arXiv:2503.05529, 2025.
- Qiu, Zhongyi, et al. "Can LLMs Simulate Social Media Engagement? A Study on Action-Guided Response Generation." arXiv preprint arXiv:2502.12073, 2025.
- Liu, Qi, et al. "GATSim: Urban Mobility Simulation with Generative Agents." arXiv preprint arXiv:2506.23306, 2025.
- Hong, Yoojin, et al. "Prototyping Digital Social Spaces through Metaphor-Driven Design: Translating Spatial Concepts into an Interactive Social Simulation." arXiv preprint arXiv:2510.02759, 2025.
- Composta, Elisa, et al. "Simulating Online Social Media Conversations on Controversial Topics Using AI Agents Calibrated on Real-World Data." arXiv preprint arXiv:2509.18985, 2025.
- De Marzo, Giordano, et al. "AI agents can coordinate beyond human scale." arXiv preprint arXiv:2409.02822, 2024.
- Breve, Bernardo, et al. "Leveraging EUD and Generative AI for Ethical Phishing Campaigns." International Symposium on End User Development. Cham: Springer Nature Switzerland, 2025.
- Lee, HwiJoon, et al. "Inject, Fork, Compare: Defining an Interaction Vocabulary for Multi-Agent Simulation Platforms." arXiv preprint arXiv:2509.13712, 2025.
- Kleiman, Jacob, et al. "Simulation Agent: A Framework for Integrating Simulation and Large Language Models for Enhanced Decision-Making." arXiv preprint arXiv:2505.13761, 2025.
- Zignani, Matteo, et al. "Network Science Meets AI: A Converging Frontier." ESANN 2025: Proceedings. i6doc. com, 2025.
- He, Zihao. Aligning Large Language Models With Human Perspectives. Diss. University of Southern California, 2025.
- Sen, Indira, et al. "VALIDATING GENERATIVE AGENT-BASED MODELS." 2025.
- Wang, Zixu, et al. "A Survey on LLM-based Agents for Social Simulation: Taxonomy, Evaluation and Applications.", 2025
- Münker, Simon et al. "twony: A Micro-Simulation of the Impact of OSN Mechanics on the Emotionality of Online Discourse." 2025.



Are you using `YSocial` in your research? <br>
Let us know and we will add your publication to the list!
{: #myid .alert .alert-info .p-3 .mx-2 mb-3}

{% endcapture %}
{{ research | markdownify }}

</details>

</div>
</div>
</div>


