---
layout: default-full
title: "Resources"
subtitle: "Datasets, publications and outreach"
eyebrow: "Open data and outreach"
header_type: hero
header_title: "Resources"
show_sidetoc: true
---

<div class="ys-article" markdown="1">

<p class="ys-lede">Explore YSocial-generated <mark>datasets</mark>, see where we have <mark>presented</mark> the project and find out <mark>who is citing us</mark>.</p>

## Datasets

<div class="ys-split-2 ys-top">
<div>
<p>Datasets are SQLite database files produced by <code>YSocial</code> simulations with different configurations. They were generated with <strong>YSocial v3.0.0</strong>.</p>
<p>To analyse them, use the <a href="{{ site.baseurl }}/ysights_library">ySights</a> library.</p>
</div>
<div class="alert-info-custom">Datasets are released under the <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a> license. They contain only the SQLite file: complete datasets, with logs and configuration files, are available on request.</div>
</div>

<table class="ys-data" data-label="Search datasets" data-placeholder="Search datasets, recsys, graph">
<thead><tr><th>Dataset</th><th>Platform</th><th>YSocial</th><th>LLM</th><th>Agents</th><th>Content recsys</th><th>Follow recsys</th><th>Start graph</th><th>Days</th><th data-nosort>File</th></tr></thead>
<tbody>
<tr><td><code>Recsys1</code></td><td>Microblogging</td><td>v3.0.0</td><td>Llama3.1-8B</td><td>1000</td><td>Reverse Chrono</td><td>Disabled</td><td>Random</td><td>60</td><td><a href="https://github.com/YSocialTwin/YSocialTwin.github.io/blob/main/assets/datasets/1k_60d_ReverseChrono_ER_database.db.zip" aria-label="Download Recsys1">Download</a></td></tr>
<tr><td><code>Recsys2</code></td><td>Microblogging</td><td>v3.0.0</td><td>Llama3.1-8B</td><td>1000</td><td>Reverse Chrono Popularity</td><td>Disabled</td><td>Random</td><td>60</td><td><a href="https://github.com/YSocialTwin/YSocialTwin.github.io/blob/main/assets/datasets/1k_60d_Popularity_ER_database.db.zip" aria-label="Download Recsys2">Download</a></td></tr>
<tr><td><code>Recsys2a</code></td><td>Microblogging</td><td>v3.0.0</td><td>Llama3.1-8B</td><td>1000</td><td>Reverse Chrono Popularity</td><td>Disabled</td><td>Scale-free</td><td>60</td><td><a href="https://github.com/YSocialTwin/YSocialTwin.github.io/blob/main/assets/datasets/1k_60d_Popularity_BA_database.db.zip" aria-label="Download Recsys2a">Download</a></td></tr>
<tr><td><code>Recsys3</code></td><td>Microblogging</td><td>v3.0.0</td><td>Llama3.1-8B</td><td>1000</td><td>Reverse Chrono Follower</td><td>Disabled</td><td>Random</td><td>60</td><td><a href="https://github.com/YSocialTwin/YSocialTwin.github.io/blob/main/assets/datasets/1k_60d_Follower_ER_database.db.zip" aria-label="Download Recsys3">Download</a></td></tr>
<tr><td><code>Recsys3a</code></td><td>Microblogging</td><td>v3.0.0</td><td>Llama3.1-8B</td><td>1000</td><td>Reverse Chrono Follower</td><td>Disabled</td><td>Scale-free</td><td>60</td><td><a href="https://github.com/YSocialTwin/YSocialTwin.github.io/blob/main/assets/datasets/1k_60d_Follower_BA_database.db.zip" aria-label="Download Recsys3a">Download</a></td></tr>
<tr><td><code>Recsys4</code></td><td>Microblogging</td><td>v3.0.0</td><td>Llama3.1-8B</td><td>1000</td><td>Reverse Chrono Popularity Follower</td><td>Disabled</td><td>Random</td><td>60</td><td><a href="https://github.com/YSocialTwin/YSocialTwin.github.io/blob/main/assets/datasets/1k_60d_FollowerPopularity_ER_database.db.zip" aria-label="Download Recsys4">Download</a></td></tr>
<tr><td><code>Recsys4a</code></td><td>Microblogging</td><td>v3.0.0</td><td>Llama3.1-8B</td><td>1000</td><td>Reverse Chrono Popularity Follower</td><td>Disabled</td><td>Scale-free</td><td>60</td><td><a href="https://github.com/YSocialTwin/YSocialTwin.github.io/blob/main/assets/datasets/1k_60d_FollowerPopularity_BA_database.db.zip" aria-label="Download Recsys4a">Download</a></td></tr>
</tbody>
</table>

<details>
<summary data-excerpt="Downloaded SQLite files that look corrupted can be recovered in two commands.">The file looks corrupted?</summary>
{% capture recover %}
Sometimes SQLite files appear as corrupted once downloaded. Recover them with:

```bash
sqlite3 database_server.db .recover > data.sql
sqlite3 database_recovered.db < data.sql
```

After the recovery, the database is ready to be queried.
{% endcapture %}
{{ recover | markdownify }}
</details>

### What is inside

<p class="ys-intro" style="text-align:left;margin:0 0 14px">Each database holds the following tables, grouped by what they describe.</p>

<dl class="ys-feat">
<div><dt>Agents and network</dt><dd><code>user_mgmt</code> agents' metadata, <code>follows</code> social ties, <code>mentions</code> mentions between agents.</dd></div>
<div><dt>Content</dt><dd><code>post</code> posts and comments, <code>articles</code> shared news, <code>websites</code> their sources, <code>images</code> shared images with LLM annotations, <code>hashtags</code> and <code>post_hashtags</code>.</dd></div>
<div><dt>Annotations</dt><dd><code>post_sentiment</code> (VADER), <code>post_toxicity</code>, <code>emotions</code> and <code>post_emotions</code>, <code>post_topics</code>.</dd></div>
<div><dt>Interests</dt><dd><code>interests</code> the topics used in the simulation, <code>user_interests</code> the topics agents use to write.</dd></div>
<div><dt>Platform activity</dt><dd><code>reactions</code> to contents, <code>voting</code> (when enabled), <code>recommendations</code> served to agents, <code>rounds</code> simulation rounds.</dd></div>
</dl>

## Research and outreach

<p class="ys-intro" style="text-align:left;margin:0 0 14px"><code>YSocial</code> is a research project and we are always looking for collaborations. It has been presented at conferences, workshops and schools.</p>

<dl class="ys-feat one ys-events">
<div><dt>2025</dt><dd><ul>
<li><a href="{{ site.baseurl }}/events/hhai">Tutorial &ldquo;LLM-powered Simulations of Social Media Environments&rdquo;</a> at <a href="https://hhai-conference.org/2025/">HHAI</a></li>
<li>Workshop &ldquo;Simulating Societies&rdquo; at the <a href="https://ccs25.cssociety.org/">Conference on Complex Systems</a></li>
<li><a href="https://summerschool2025.sobigdata.eu/">SoBigData Summer School</a>, From Data to Social Innovation</li>
<li><a href="https://tcn2025.wordpress.com/tcn2025/">The Threads of Complex Networks</a> Summer School</li>
<li>Future Artificial Intelligence Research (FAIR) workshop</li>
<li><a href="https://www.fairconference2025.it/">FAIR 2025 Conference</a></li>
<li>ICT4Intel Trends</li>
</ul></dd></div>
<div><dt>2024</dt><dd><ul>
<li>International Conference on Advances in Social Networks Analysis and Mining (ASONAM)</li>
<li>International Conference on Complex Networks and their Applications</li>
<li>Italian Conference on Computational Social Science (CS2Italy)</li>
<li>ICT4Intel Trends</li>
</ul></dd></div>
</dl>

<p>A slide deck about the project:</p>

<iframe title="YSocial project slide deck" loading="lazy" src="https://docs.google.com/presentation/d/e/2PACX-1vSWYu2s09mEJwL7mskYHC3XFuIeTdBPTnHEpee3KyCCFbr5eyix7UZMyUEMYrSfm_ZMI9_ZJt64Ql1Z/embed?start=false&loop=false&delayms=3000" frameborder="0" width="100%" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

## Who is citing us?

<div class="alert-info-custom"><strong>Are you using <code>YSocial</code> in your research?</strong> Let us know and we will add your publication to the list.</div>

<p>Publications related to, or citing, the <code>YSocial</code> project. Last updated: October 2026.</p>

<table class="ys-data ys-pubs" data-label="Search publications" data-placeholder="Search title, author, venue" data-year-col="0">
<thead><tr><th>Year</th><th>Title</th><th>Authors</th><th>Venue</th></tr></thead>
<tbody>
{% for c in site.data.citations %}<tr><td>{{ c.year }}</td><td>{{ c.title | escape }}</td><td>{{ c.authors | escape }}</td><td>{{ c.venue | escape }}</td></tr>
{% endfor %}</tbody>
</table>

</div>
