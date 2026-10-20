---
layout: default-full
title: "ySights"
subtitle: "Streamline Y Social data analysis"
eyebrow: "Analytics"
header_type: hero
header_title: "ySights"
show_sidetoc: true
---

<div class="ys-article" markdown="1">

<p class="ys-lede"><mark><a href="https://github.com/YSocialTwin/ysights">ySights</a></mark> is a Python library for analysing YSocial simulations, with tools to <mark>extract insights</mark> from rich agent-based behavioural data.</p>

## What it does

<div class="ys-split-2 ys-top">
<img class="ys-row-img" src="{{ site.baseurl }}/assets/images/libs/ysigth.png" alt="ySights architecture overview" loading="lazy">
<div>
<div class="ys-tabs" data-tabs data-label="ySights features">

<div class="ys-tabpanel" id="ys-extract" data-title="Extract">
<ul>
<li><strong>Easy access</strong> to simulation databases (SQLite).</li>
<li><strong>Streamlined queries</strong> of posts, comments, likes, shares and other interactions.</li>
<li><strong>Export</strong> for further analysis.</li>
</ul>
</div>

<div class="ys-tabpanel" id="ys-analyse" data-title="Analyse">
<ul>
<li><strong>Networks</strong> of followers, interactions and communities.</li>
<li><strong>Temporal evolution</strong> of behaviours and structures.</li>
<li><strong>Content and sentiment</strong> of posts and comments.</li>
<li><strong>Agent profiling</strong> by activity, influence and engagement.</li>
<li><strong>Recommender impact</strong> on information spread.</li>
</ul>
</div>

<div class="ys-tabpanel" id="ys-visualise" data-title="Visualise">
<ul>
<li><strong>Built-in plots</strong> straight from analysis results.</li>
<li><strong>Timelines</strong> of activity.</li>
<li><strong>Network graphs</strong> of social connections.</li>
<li><strong>Statistical summaries</strong> of key metrics.</li>
</ul>
</div>

</div>
<p>It plays well with Pandas, NumPy and Matplotlib, and it is extensible: write your own analyses and plots.</p>
</div>
</div>

## Built on network science libraries

<p class="ys-intro" style="text-align:left;margin:0 0 14px">For network analysis, ySights integrates by design with task-oriented libraries.</p>

<div class="ys-libs">
<a class="ys-lib" href="https://dynetx.readthedocs.io"><img src="{{ site.baseurl }}/assets/images/libs/DyNetx%20v.png" alt="" loading="lazy"><strong>DyNetX</strong><span>Dynamic networks</span></a>
<a class="ys-lib" href="https://cdlib.readthedocs.io"><img src="{{ site.baseurl }}/assets/images/libs/CDlib%20v.png" alt="" loading="lazy"><strong>CDlib</strong><span>Community detection</span></a>
<a class="ys-lib" href="https://ndlib.readthedocs.io"><img src="{{ site.baseurl }}/assets/images/libs/NDlib%20v.png" alt="" loading="lazy"><strong>NDlib</strong><span>Opinion dynamics</span></a>
<a class="ys-lib" href="https://ash-model.readthedocs.io"><img src="{{ site.baseurl }}/assets/images/libs/ASH%20v.png" alt="" loading="lazy"><strong>ASH</strong><span>Higher-order networks</span></a>
</div>

## Get started

<div class="alert-warning-custom"><strong>Requirements:</strong> Python 3.8+, and a YSocial simulation database (SQLite).</div>

<div class="ys-split-2 ys-top">
<div markdown="1">

<h3>1. Install</h3>

```bash
pip install ysights
```

</div>
<div markdown="1">

<h3>2. Analyse</h3>

```python
from ysights import YSocialAnalyzer

# Load simulation data
analyzer = YSocialAnalyzer('path/to/database.db')

# Basic statistics
stats = analyzer.get_statistics()

# Network structure
network = analyzer.build_network()

# Activity timeline
analyzer.plot_timeline()
```

</div>
</div>

<p>Need data to practise on? Try the <a href="{{ site.baseurl }}/resources#datasets">datasets</a>. Full documentation is at <a href="https://ysocialtwin.github.io/ysights">ysocialtwin.github.io/ysights</a>.</p>

## Use cases

<div class="ys-cols">
<div>
<h3>Research</h3>
<dl class="ys-feat one">
<div><dt>Diffusion</dt><dd>How information spreads through agent networks.</dd></div>
<div><dt>Polarisation</dt><dd>The formation of echo chambers.</dd></div>
<div><dt>Recommenders</dt><dd>How different algorithms shape agent behaviour.</dd></div>
<div><dt>Evolution</dt><dd>Changes in posting and interaction patterns over time.</dd></div>
</dl>
</div>
<div>
<h3>Development</h3>
<dl class="ys-feat one">
<div><dt>Debugging</dt><dd>Spot issues in simulation configurations and agent set-ups.</dd></div>
<div><dt>Validation</dt><dd>Check that agents behave as intended.</dd></div>
<div><dt>Monitoring</dt><dd>Track key metrics during runs.</dd></div>
<div><dt>Benchmarking</dt><dd>Compare outcomes across scenarios.</dd></div>
</dl>
</div>
</div>

<div class="cta-buttons">
<a href="https://ysocialtwin.github.io/ysights" class="cta-primary">Full documentation</a>
<a href="https://github.com/YSocialTwin/ysights" class="cta-secondary" target="_blank" rel="noopener">GitHub</a>
</div>

</div>
