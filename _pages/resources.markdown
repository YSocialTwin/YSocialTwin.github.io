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

<div style="text-align: center; margin: 2rem 0;">
<p style="font-size: 1.25rem; color: #666; max-width: 800px; margin: 0 auto 2rem;">
Explore YSocial-generated <mark>datasets</mark>, discover our <mark>research outreach</mark>, <br> and find out <mark>who’s citing us</mark>!
</p>
</div>

<div class="container py-3">


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


Here are some publications related, or citing, the `YSocial` project. Last updated: August 2026.

1. Mou, Xinyi, et al. "From individual to society: A survey on social simulation driven by large language model-based agents." *ACM Computing Surveys* 58.11 (2026): 1-41.

2. Nudo, Jacopo, et al. "Generative exaggeration in LLM social agents: Consistency, bias, and toxicity." *Online Social Networks and Media* 51 (2026): 100344.

3. Liu, Qi, Can Li, and Wanjing Ma. "GATSim: Urban mobility simulation with generative agents." *Transportation Research Part C: Emerging Technologies* 186 (2026): 105576.

4. Jiang, Shuyu, et al. "Large language models for spreading dynamics in complex systems." *Physics Reports* 1171 (2026): 1-50.

5. Lu, Zhuoran, Gionnieve Lim, and Ming Yin. "Large Language Model (LLM)-driven Adversarial Social Influences in Online Information Spread: Risks and Interventions." *Proceedings of the 2026 CHI Conference on Human Factors in Computing Systems*. 2026.

6. Bouleimen, Azza, et al. "The collective turing test: large language models can generate realistic multi-user discussions." *Scientific Reports* (2026).

7. Bahi, Abderaouf, et al. "A Comprehensive Survey of LLMs for Sustainable and Renewable Energy Systems." *Inf.* 17.3 (2026): 271.

8. Carrillo, Alexis, et al. "Talk2AI: A Longitudinal Dataset of Human--AI Persuasive Conversations." *arXiv preprint arXiv:2604.04354* (2026).

9. Taday Morocho, Erika Elizabeth, et al. "Assessing the Reliability of Persona-Conditioned LLMs as Synthetic Survey Respondents." *Companion Proceedings of the ACM Web Conference 2026*.

10. Torres, Andrés Martínez, and Davide Morselli. "Phenomenologically human: Fine-tuning LLMs to simulate online group identity." *Computers in Human Behavior: Artificial Humans* 7 (2026): 100272.

11. Chen, Weiyue, et al. "Experimental evidence on the emergent social network patterns of LLM-driven multi-agent system for edge service collaboration." *Tsinghua Science and Technology* (2026).

12. Fidone, Giacomo, Lucia Passaro, and Riccardo Guidotti. "Evaluating online moderation via LLM-powered counterfactual simulations." *Proceedings of the AAAI Conference on Artificial Intelligence*. Vol. 40. No. 45. 2026.

13. Ardebili, Ali Aghazadeh, and Massimo Stella. "Mapping how LLMs debate societal issues when shadowing human personality traits, sociodemographics and social media behavior." *arXiv preprint arXiv:2604.27624* (2026).

14. La Gatta, Valerio, et al. "From Who They Are to How They Act: Behavioral Traits in Generative Agent-Based Models of Social Media." *arXiv preprint arXiv:2601.15114* (2026).

15. Antelmi, Alessia, et al. "Political Persuasion and Endorsement in Large Language Models." *arXiv preprint arXiv:2606.05961* (2026).

16. Carrillo, Alexis, et al. "LLMs can persuade only psychologically susceptible humans on societal issues, via trust in AI and emotional appeals, amid logical fallacies." *arXiv preprint arXiv:2604.16935* (2026).

17. Esposito, Naomi, et al. "Math Education Digital Shadows for facilitating learning with LLMs: Math performance, anxiety and confidence in simulated students and AIs." *arXiv preprint arXiv:2604.27618* (2026).

18. Wei, Shaopeng, et al. "Eco3S: Complex Socio-Economic System Simulation via Agent-Based Models." *arXiv preprint arXiv:2607.26588* (2026).

19. Cau, Erica, Andrea Failla, and Giulio Rossetti. "Network Effects and Agreement Drift in LLM Debates." *arXiv preprint arXiv:2604.11312* (2026).

20. Morini, Virginia, et al. "Joint Effects of Recommender Systems and Network Structure on the Visibility of Content and Creators." *arXiv preprint arXiv:2607.00258* (2026).

21. Zhang, Haoting, et al. "LLM-Augmented Digital Twin for Policy Evaluation in Short-Video Platforms." *arXiv preprint arXiv:2603.11333* (2026).

22. Shen, Hanyang, Jie Wu, and Zhulin Tao. "Before You Simulate: A Pre-Study Benchmark for Large Language Model Stability in Political Role-Playing Simulations." *Applied Sciences* 16.4 (2026): 2027.

23. Ji, Jiarui, et al. "GRAPHIA: Harnessing Social Graph Data to Enhance LLM-Based Social Simulation." *Proceedings of the 64th Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)*. 2026.

24. López, Alejandro Buitrago, et al. "Evaluating the Realism of LLM-powered Social Agents: A Case Study of Reactions to Spanish Online News." *arXiv preprint arXiv:2605.28598* (2026).

25. Cau, Erica, et al. "Social Simulations: from Agent-Based Modeling to Digital Twins." *arXiv preprint arXiv:2607.13693* (2026).

26. Huang, Ming, and Zi-Ke Zhang. "Influence in Motion: Tracing Persuasive Dynamics via Multi‐Agent Networks." *Computational Communication Research* 8.2 (2026): 1.

27. Burmester, Julian. *Influencing Belief in LLM-Based Agent Networks: An Empirically Validated Simulation of Bot-Driven Manipulation*. Diss. Medien-und Informationszentrum, Leuphana Universität Lüneburg, 2026.

28. Wu, Shiyu, et al. "Towards Large Language Model–Enabled Cognitive Digital Twins for Urban Mobility Systems." *2026 29th International Conference on Computer Supported Cooperative Work in Design (CSCWD)*. IEEE, 2026.

29. Münker, Simon, Achim Rettinger, and Damian Trilling. "Challenging the Myth: A Research Arc on LLMs as Human Simulacra." *Proceedings of The Big Picture v2: Crafting a Research Narrative*. 2026.

30. Yu, Yaoning, et al. "MiroBench: Benchmarking Realism in Agentic Simulation of Real-world Discussions." *arXiv preprint arXiv:2606.14715* (2026).

31. Franchino, Emma, et al. "Digital shadows in mental health map how LLMs simulate depression, anxiety, and stress through language and psychometrics." (2026).

32. Cima, Lorenzo. "ADDRESSING ONLINE HARMS THROUGH CONTENT MODERATION: DETECTION OF MISBEHAVIOR AND INTERVENTION STRATEGIES." (2026).

33. White, Benjamin, and Anastasia Shimorina. "Predicting Social Media User Actions: A Hybrid Approach for Common and Rare Behavior Prediction on Bluesky." *The 1st Workshop on Social Context (SoCon) & The 2nd Workshop on Integrating NLP and Psychology to Study Social Interactions (NLPSI)@ LREC 2026*. 2026.

34. Zhao, Bingxi, et al. "Llm-based agentic reasoning frameworks: A survey from methods to scenarios." *arXiv preprint arXiv:2508.17692* (2025).

35. Ashery, Ariel Flint, Luca Maria Aiello, and Andrea Baronchelli. "Emergent social conventions and collective bias in LLM populations." *Science Advances* 11.20 (2025): eadu9368.

36. Giorgi, Tommaso, et al. "Human and LLM biases in hate speech annotations: A socio-demographic analysis of annotators and targets." *Proceedings of the international AAAI conference on web and social media*. Vol. 19. 2025.

37. Mumuni, Alhassan, and Fuseini Mumuni. "Large language models for artificial general intelligence (agi): A survey of foundational principles and approaches." *arXiv preprint arXiv:2501.03151* (2025).

38. Chen, Chaoran, et al. "Towards a design guideline for rpa evaluation: A survey of large language model-based role-playing agents." *Findings of the Association for Computational Linguistics: ACL 2025*. 2025.

39. Papachristou, Marios, and Yuan Yuan. "Network formation and dynamics among multi-llms." *PNAS nexus* 4.12 (2025): pgaf317.

40. Naik, Akshat, et al. "Agentmisalignment: Measuring the propensity for misaligned behaviour in llm-based agents." *arXiv preprint arXiv:2506.04018* (2025).

41. De Duro, Edoardo Sebastiano, et al. "Measuring and identifying factors of individuals' trust in Large Language Models." *arXiv preprint arXiv:2502.21028* (2025).

42. Coppolillo, Erica, Giuseppe Manco, and Luca Maria Aiello. "Unmasking conversational bias in ai multiagent systems." *arXiv preprint arXiv:2501.14844* (2025).

43. Mao, Rui, et al. "Bridging minds and machines: Toward an integration of AI and cognitive science." *arXiv preprint arXiv:2508.20674* (2025).

44. De Duro, Edoardo Sebastiano, et al. "Cognitive networks identify AI biases on societal issues in Large Language Models." *EPJ Data Science* 15.1 (2025): 7.

45. Qiu, Zhongyi, et al. "Can llms simulate social media engagement? a study on action-guided response generation." *arXiv preprint arXiv:2502.12073* (2025).

46. Jeon, Min Soo, et al. "Simulating conversations on social media with generative agent-based models." *EPJ Data Science* 14.1 (2025): 79.

47. Kleiman, Jacob, et al. "Simulation agent: A framework for integrating simulation and large language models for enhanced decision-making." *arXiv preprint arXiv:2505.13761* (2025).

48. Lu, Zhixiang, et al. "PRISM: A personality-driven multi-agent framework for social media simulation." *arXiv preprint arXiv:2512.19933* (2025).

49. Cerina, Roberto. "Possum: a protocol for surveying social-media users with multimodal llms." *arXiv preprint arXiv:2503.05529* (2025).

50. Münker, Simon, and Achim Rettinger. "twony: A Micro-Simulation of the Impact of OSN Mechanics on the Emotionality of Online Discourse." *ESWC-JP*. 2025.

51. Hong, Yoojin, et al. "Prototyping Digital Social Spaces through Metaphor-Driven Design: Translating Spatial Concepts into an Interactive Social Simulation." *arXiv preprint arXiv:2510.02759* (2025).

52. Wang, Zixu, et al. "A Survey on LLM-based Agents for Social Simulation: Taxonomy, Evaluation and Applications." *arXiv preprint* (2025).

53. Zignani, Matteo, et al. "Network Science Meets AI: A Converging Frontier." *ESANN*. 2025.

54. Gerard, Patrick, Aiden Chang, and Svitlana Volkova. "Community-Aligned Behavior Under Uncertainty: Evidence of Epistemic Stance Transfer in LLMs." *arXiv preprint arXiv:2511.17572* (2025).

55. Lee, HwiJoon, et al. "Inject, Fork, Compare: Defining an Interaction Vocabulary for Multi-Agent Simulation Platforms." *arXiv preprint arXiv:2509.13712* (2025).

56. White, Benjamin, and Anastasia Shimorina. "Social-Media Based Personas Challenge: Hybrid Prediction of Common and Rare User Actions on Bluesky." *arXiv preprint arXiv:2511.17241* (2025).

57. Tsirmpas, Dimitris, Ion Androutsopoulos, and John Pavlopoulos. "Designing Synthetic Discussion Generation Systems: A Case Study for Online Facilitation." *arXiv preprint arXiv:2503.16505* (2025).

58. Morini, Virginia. "The Duality of Social Media Discourse: Characterizing Polluted and Supportive Online Behaviors." (2025).

59. Breve, Bernardo, et al. "Leveraging EUD and Generative AI for Ethical Phishing Campaigns." *International Symposium on End User Development*. Cham: Springer Nature Switzerland, 2025.

60. Avhad, Atharv S. "Cyber Security Education by integrating Digital Twins and Generative AI." (2025).

61. He, Zihao. *Aligning Large Language Models With Human Perspectives*. Diss. University of Southern California, 2025.

62. Sen, Indira, et al. "VALIDATING GENERATIVE AGENT-BASED MODELS." (2025).

63. Jia, Feiran, et al. "Can large language model agents simulate human trust behavior?." *Advances in neural information processing systems* 37 (2024): 15674-15729.

64. De Marzo, Giordano, Claudio Castellano, and David Garcia. "AI agents can coordinate beyond human scale." *arXiv preprint arXiv:2409.02822* (2024).

65. Cau, Erica, Andrea Failla, and Giulio Rossetti. "Bots of a feather: mixing biases in LLMs’ opinion dynamics." *International conference on complex networks and their applications*. Cham: Springer Nature Switzerland, 2024.

66. Pappalardo, Luca, et al. "A survey on the impacts of recommender systems on users, items, and human-AI ecosystems." *arXiv preprint arXiv:2407.01630* (2024).

67. Rakhi, Allah, and Beth Goldie. "Exploring the role of llms in e-commerce: From sentiment analysis to causal reasoning in customer feedback." (2024).


Are you using `YSocial` in your research? <br>
Let us know and we will add your publication to the list!
{: #myid .alert .alert-info .p-3 .mx-2 mb-3}

{% endcapture %}
{{ research | markdownify }}

</details>

</div>
</div>



