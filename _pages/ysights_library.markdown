---
layout: default-full
title: "ySights"
subtitle: "Streamline Y Social Data Analysis"
show_sidetoc: true
header_type: hero
header_img: assets/images/politics1.jpg
header_title: "ySights"
---

<div class="container py-3">
<div class="row">
<div class="col-md-12" markdown="1">

<div style="text-align: center; margin: 2rem 0;">
<p style="font-size: 1.25rem; color: #666; max-width: 800px; margin: 0 auto 2rem;">
<mark><b><a href="https://github.com/YSocialTwin/ysights">ySights</a></b></mark> is a Python library for analyzing YSocial simulations, giving researchers powerful tools to <mark>extract insights</mark> from rich agent-based behavioral data.
</p>
</div>

<details open>
<summary data-excerpt="Which are the fundamental ideas behind ySights?"><strong>Key Features</strong></summary>

{% capture features %}

`ySights` offers a suite of features tailored for analyzing YSocial simulation data, focusing on ease of use, flexibility, and depth of analysis.

{% raw %}
<div style="display:flex; flex-direction:column; align-items:center; gap:2rem; width:100%; box-sizing:border-box; text-align:center;">
  <div style="display:flex; justify-content:center; flex-wrap:wrap; gap:2rem; width:100%;">
    <div style="max-width:500px; text-align:center;">
      <img src="../assets/images/libs/ysigth.png" style="width:100%; height:auto;">
    </div>
  </div>

</div>
{% endraw %}

🔍 **Data Extraction**
- Easy access to simulation databases (via SQLite and PostgreSQL): connect to and query simulation data.
- Streamlined querying of agent interactions: retrieve posts, comments, likes, shares, and other interactions.
- Export capabilities for further analysis..

📈 **Analytics Tools**
- Network analysis of social connections and interactions: analyze follower networks, interaction graphs, and community structures.
- Temporal evolution tracking: monitor how agent behaviors and network structures change over time.
- Content and sentiment analysis: evaluate the nature of posts, comments, and interactions among agents.
- Agent behavior profiling: categorize agents based on activity patterns, influence, and engagement levels.
- Recommendation system impact assessment: study how recommendation algorithms affect information spread and agent behavior.

📊 **Visualization**
- Built-in plotting functions: generate graphs and charts directly from analysis results.
- Timeline visualizations: track activity over time
- Network graph rendering: visualize social connections
- Statistical summaries: generate reports and summaries of key metrics

`ySights` plays well with other Python data science libraries like Pandas, NumPy, and Matplotlib, enabling seamless integration into existing workflows.

Moreover, `ySights` is designed to be extensible, allowing users to build custom analyses and visualizations tailored to their specific research needs.

To enhance its network analysis capabilities, `ySights` integrates by design with task-oriented libraries such as

{% raw %}
<div style="display:flex; flex-direction:column; align-items:center; gap:2rem; width:100%; box-sizing:border-box; text-align:center;">

  <div style="display:flex; justify-content:center; flex-wrap:wrap; gap:2rem; width:100%;">

<div style="max-width:180px; text-align:center;">
      <img src="../assets/images/libs/DyNetx%20v.png" style="width:100%; height:auto;">
      <div>Dynamic Network<br><a href="https://dynetx.readthedocs.io">DyNetX</a></div>
    </div>
    <div style="max-width:180px; text-align:center;">
      <img src="../assets/images/libs/CDlib%20v.png" style="width:100%; height:auto;">
      <div>Community Detection<br><a href="https://cdlib.readthedocs.io">CDlib</a></div>
    </div>
    <div style="max-width:180px; text-align:center;">
      <img src="../assets/images/libs/NDlib%20v.png" style="width:100%; height:auto;">
      <div>Opinion Dynamics<br><a href="https://ndlib.readthedocs.io">NDlib</a></div>
    </div>
    <div style="max-width:180px; text-align:center;">
      <img src="../assets/images/libs/ASH%20v.png" style="width:100%; height:auto;">
      <div>Higher-order Network<br><a href="https://ash-model.readthedocs.i">ASH</a></div>
    </div>
  </div>

</div>
{% endraw %}

{% endcapture %}
{{ features | markdownify }}

</details>

<details>
<summary data-excerpt="Install the library and load an existing YSocial experiment. "><strong>Install ySights</strong></summary>

{% capture getting_started %}

<div class="alert-warning-custom">
⚠️ <strong>Requirements</strong>: ySights requires Python 3.8+ and is designed to work with YSocial simulation databases.
</div>

`ySights` can be easily installed via pip. Once installed, you can connect it to your existing `YSocial` simulation database (SQLite or PostgreSQL) to start analyzing data.

**Installation:**

```bash
pip install ysights
```

Here is a quick example to get you started with `ySights`. 

**Basic Usage:**

```python
from ysights import YSocialAnalyzer

# Load simulation data
analyzer = YSocialAnalyzer('path/to/database.db') // For PostgreSQL, use connection string

# Get basic statistics
stats = analyzer.get_statistics()

# Analyze network structure
network = analyzer.build_network()

# Visualize activity timeline
analyzer.plot_timeline()
```


For detailed documentation and advanced usage, visit the <a href="https://ysocialtwin.github.io/ysights">`ySights` Documentation</a>.

{% endcapture %}
{{ getting_started | markdownify }}

</details>

<details>
<summary data-excerpt="What can you actually do with ySights?"><strong>Use Cases</strong></summary>

{% capture usecase %}

Whether you're a researcher studying social dynamics or a developer refining Y Social simulations, `ySights` provides the tools you need.

Some common use cases include:

**Research Applications:**
- Study information diffusion patterns: understand how information spreads through agent networks
- Analyze polarization dynamics: track the formation of echo chambers
- Investigate recommendation algorithm effects: assess how different algorithms influence agent behavior
- Examine agent behavior evolution: monitor changes in posting and interaction patterns over time

**Development Support:**
- Debug simulation configurations: identify issues in agent setups
- Validate agent implementations: ensure agents behave as intended
- Monitor simulation health: track key metrics during runs
- Benchmark different scenarios: compare outcomes across various simulation setups

All these use cases are made easier with `ySights` robust data extraction, analysis, and visualization capabilities.
Moreover, `ySights` is extensible, allowing users to build custom analyses tailored to their specific research or development needs.

{% endcapture %}
{{ usecase | markdownify }}

</details>

<div class="alert-info-custom">
📚 Related Resources: Explore our <a href="/resources">datasets</a> to practice with ySights on real simulation data.
</div>

<div style="text-align: center; margin: 2rem 0;">
  <a href="https://ysocialtwin.github.io/ysights" class="cta-primary" style="display: inline-block; padding: 1rem 2rem; text-decoration: none;">
    📖 View Full Documentation
  </a>
</div>


</div>
</div>
</div>
