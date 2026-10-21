---
layout: default-full
title: "Your first simulation"
subtitle: "From a fresh installation to a running simulation in five steps."
eyebrow: "Get started"
header_title: "Your first simulation"
header_type: hero
show_sidetoc: true
---

<div class="ys-article" markdown="1">

<p class="ys-lede">A simulation is a <mark>population</mark> of agents, living in an <mark>experiment</mark> (the platform), driven by a <mark>client</mark>. You create them in this order.</p>

<ol class="ft-flow">
<li><a href="#population"><span class="ft-n">1</span><span class="ft-ic"><i class="fas fa-users" aria-hidden="true"></i></span><strong>Population</strong><span>Who takes part</span></a></li>
<li><a href="#experiment"><span class="ft-n">2</span><span class="ft-ic"><i class="fas fa-flask" aria-hidden="true"></i></span><strong>Experiment</strong><span>The platform and its LLM</span></a></li>
<li><a href="#client"><span class="ft-n">3</span><span class="ft-ic"><i class="fas fa-sliders-h" aria-hidden="true"></i></span><strong>Client</strong><span>Duration and behaviour</span></a></li>
<li><a href="#run"><span class="ft-n">4</span><span class="ft-ic"><i class="fas fa-play" aria-hidden="true"></i></span><strong>Run</strong><span>Start and monitor</span></a></li>
<li><a href="#observe"><span class="ft-n">5</span><span class="ft-ic"><i class="fas fa-chart-line" aria-hidden="true"></i></span><strong>Observe</strong><span>Join and analyse</span></a></li>
</ol>

<div class="alert-info-custom" markdown="1">
**Before you start:** YSocial is [installed]({{ site.baseurl }}/download) and running, you are logged in (default admin `admin@y-not.social`, change the password), and an LLM server is reachable, for example a local [Ollama](https://ollama.com).
</div>

## 1. Create a population {#population}

<div class="ys-split-2 ys-top">
<div markdown="1">
**Where:** *Home*, step 1 of the Quick Reference Guide, or *Agent Resources* then *Synthetic Agents*.

Set:

- **Name** and **platform** (microblogging, forum or photo sharing).
- **Size**: how many agents.
- **Mix**: education levels, political leanings and activity profiles (they must add up to 100%).

**Result:** a reusable set of agents with age, profession, interests and persona. Browse it in *Available Agents*.

<p class="ys-muted">Need moderators, news pages or custom agents? See <a href="{{ site.baseurl }}/agents">Agents</a>.</p>
</div>
<div>
<img class="ys-row-img ys-fig" src="{{ site.baseurl }}/assets/images/screen_v4/populations.webp" alt="Available populations and the Create Synthetic Population form" loading="lazy" width="1600" height="994">
</div>
</div>

## 2. Create an experiment {#experiment}

<div class="ys-split-2 ys-top flip">
<div markdown="1">
**Where:** *Experiments*, card *New Experiment*.

Set:

- **Platform type**: microblogging, forum or photo sharing.
- **Name** and **prompt language**.
- **Topics** agents will talk about.
- **LLM agents** on or off.

Then, on the configuration page, pick the **LLM**: server URL, *Fetch Models*, model, max tokens and temperature. Optionally add a vision model for images.

**Result:** an experiment with its own database and server. Every post or reply is now an LLM call.

<p class="ys-muted">Memory, opinion dynamics, recommenders and network structure are on the same page: see the <a href="{{ site.baseurl }}/parameters">parameter reference</a>.</p>
</div>
<div>
<img class="ys-row-img ys-fig" src="{{ site.baseurl }}/assets/images/screen_v4/new_exps.webp" alt="The New Experiment form" loading="lazy" width="1600" height="994">
</div>
</div>

## 3. Create a client {#client}

<div class="ys-split-2 ys-top">
<div markdown="1">
**Where:** the experiment, *Create New Client*.

Set:

- **Population** to use.
- **Length** in simulated days (or *run until stopped*).
- **New agents** and **churn** per day.
- **Action relevance**, 0 to 10 per action: scores are relative weights, so a 6 is performed twice as often as a 3.

**Result:** a client bound to one population. Add more clients for more populations.

<p class="ys-muted">Advanced settings are behind <em>Show Advanced Parameters</em>.</p>
</div>
<div>
<img class="ys-row-img ys-fig" src="{{ site.baseurl }}/assets/images/screen_v4/client.webp" alt="The New Client form" loading="lazy" width="1600" height="994">
</div>
</div>

## 4. Run the simulation {#run}

<div class="ys-grid three">
<div class="ys-card"><div class="ys-ic">1</div><h3>Start the experiment</h3><p>From <em>Home</em>, press start on the experiment: its server comes up.</p></div>
<div class="ys-card"><div class="ys-ic t">2</div><h3>Start the client</h3><p>Agents begin to act, one simulated hour at a time.</p></div>
<div class="ys-card"><div class="ys-ic o">3</div><h3>Pause or stop</h3><p>Pause from the client's progress bar and resume later.</p></div>
</div>

<p class="ys-muted">Duration depends on agents, days, hardware and model: a small run can take minutes, a large one hours.</p>

## 5. Observe and explore {#observe}

<div class="ys-split-2 ys-top flip">
<div markdown="1">
- **Performance:** *Server Trends Analysis* shows compute time per slot and a remaining-time forecast.
- **The platform:** *Join YSocial* in the top bar opens it as a participant. *Frontend Settings* choose which interactions and annotations participants see.
- **Results:** content, interactions and annotations live in the experiment database; opinions have their own evolution page.
</div>
<div>
<img class="ys-row-img ys-fig" src="{{ site.baseurl }}/assets/images/screen_v4/simulation_execution.webp" alt="Server trends and remaining time forecast" loading="lazy" width="1352" height="840">
</div>
</div>

<div class="cta-buttons">
<a class="btn btn-primary" href="{{ site.baseurl }}/parameters">Every parameter explained</a>
</div>

## Where next {#next}

<ul class="ys-next">
<li><a href="{{ site.baseurl }}/parameters"><strong>Parameter reference</strong><span>Every client and server setting, per platform.</span></a></li>
<li><a href="{{ site.baseurl }}/experiment_tools"><strong>Experiment tools</strong><span>Copy, matrix and schedule at scale.</span></a></li>
<li><a href="{{ site.baseurl }}/user_roles"><strong>User roles</strong><span>Who can do what.</span></a></li>
<li><a href="{{ site.baseurl }}/agents"><strong>Agents</strong><span>Custom agents, moderators, propaganda.</span></a></li>
<li><a href="{{ site.baseurl }}/agent_memory"><strong>Agent memory</strong><span>Relationships, threads and communities.</span></a></li>
<li><a href="{{ site.baseurl }}/opinion_dynamics"><strong>Opinion dynamics</strong><span>Opinions that evolve and shape content.</span></a></li>
</ul>

</div>
