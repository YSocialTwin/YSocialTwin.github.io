---
layout: default-full
title: "Your first simulation"
subtitle: "From an empty installation to a running, observable simulation in five steps."
eyebrow: "Get started"
header_title: "Your first simulation"
header_type: hero
show_sidetoc: true
---

<div class="ys-article" markdown="1">

<p class="ys-lede">A simulation in YSocial is built from three things: a <mark>population</mark> of agents, an <mark>experiment</mark> that defines the platform and the topics, and a <mark>client</mark> that makes that population live on the platform. This page walks through them in the order the admin panel expects, with the values used in the screenshots so you can reproduce them.</p>

<ol class="ys-steps">
<li><h3>Population</h3><p>Who takes part: how many agents, with which education, politics and activity.</p></li>
<li><h3>Experiment</h3><p>Where they meet: platform type, language, topics and the LLM that writes for them.</p></li>
<li><h3>Client</h3><p>How long and how: days, churn, new agents and action weights.</p></li>
<li><h3>Run</h3><p>Start the experiment and the client, then follow the progress.</p></li>
<li><h3>Observe</h3><p>Open the platform as a participant and read the trends.</p></li>
</ol>

<div class="alert-info-custom" markdown="1">
**Before you start.** YSocial must be installed and running (see [Download and install]({{ site.baseurl }}/download)), and you need an LLM server to generate content. The screenshots use a local [Ollama](https://ollama.com) server at `http://127.0.0.1:11434/v1` with a small instruct model; any OpenAI-compatible endpoint works. Agents without an LLM are possible but only follow rules.
</div>

## 0. Sign in and find your way {#start}

<div class="ys-split-2 ys-top">
<div markdown="1">
Open the address printed at startup (port `8080` when started from source, `5000` in Docker) and log in. On a fresh installation the default administrator is `admin@y-not.social`; change the password afterwards. You land on the **Home** page, which lists running and stopped experiments and carries a **Quick Reference Guide** with the same four steps used below.

The left bar gives you **Home**, **Experiments** and **Extensions** (plugins). New here? Press **Show Tutorial**: a four-step wizard creates a first population for you.
</div>
<div>
<img class="ys-row-img ys-fig" src="{{ site.baseurl }}/assets/images/screen_v4/home2.webp" alt="The Home page with the Quick Reference Guide" loading="lazy" width="1352" height="840">
</div>
</div>

## 1. Create a population {#population}

<div class="ys-split-2 ys-top flip">
<div markdown="1">
A population is a reusable set of synthetic agents. Open **Agent Resources** (the dashboard of everything that can act in a simulation), choose **Synthetic Agents** and fill in the form:

| Field | Example | Meaning |
|---|---|---|
| Population Name | `Roshar` | Free label, shown when you create a client |
| Platform | Microblogging | The population is built for one platform type |
| Population Size | 100 | Wizard: 10 to 100 agents; the full form accepts any size from 1 |
| Education Levels, Political Leanings | multiple choice | The mix the generator draws from |
| Activity Patterns | e.g. *Always On* 100% | Profiles must add up to 100% |

The **Activity Patterns** panel decides **when** agents are awake. The green bars show the hours of the simulated day in which the agents of a profile are active.

**What happens:** YSocial generates the agents (age, profession, traits, interests, a personality-based persona) and stores them. You can browse them in **Available Agents** and open any agent with **Details**.
</div>
<div>
<img class="ys-row-img ys-fig" src="{{ site.baseurl }}/assets/images/screen_v4/populations.webp" alt="Available Populations and the Create Synthetic Population form" loading="lazy" width="1600" height="994">
<img class="ys-row-img ys-fig" src="{{ site.baseurl }}/assets/images/screen_v4/agents.webp" alt="The list of generated agents with age, profession and activity profile" loading="lazy" width="1352" height="840" style="margin-top:12px">
</div>
</div>

<div class="alert-info-custom" markdown="1">
Want something more specific than draws from distributions? Add [custom agents and special agent types]({{ site.baseurl }}/agents) (news pages, moderators, propaganda agents) from the same dashboard, and segment opinions on demographics with [opinion dynamics]({{ site.baseurl }}/opinion_dynamics).
</div>

## 2. Create an experiment {#experiment}

<div class="ys-split-2 ys-top">
<div markdown="1">
Go to **Experiments** and use the **New Experiment** card.

| Field | Example | Meaning |
|---|---|---|
| Platform Type | Microblogging | Microblogging (X/Bluesky-like), Forum (Reddit-like) or Photo sharing |
| HPC | on | Faster, more scalable simulator, with less fine-grained configuration |
| Name | `YSocial` | Used to identify the experiment everywhere |
| Prompt language | English | Language of the prompts sent to the LLM |
| Enable LLM Agents | on | Let agents write with an LLM; off means rule-based content |
| Simulation Topics | Climate Change, Elections, AI Slop, Gardening | The subjects agents discuss, picked by interest |
| Experiment Group | *(optional)* | Groups experiments to run in sequence |

Press **Create**. The experiment appears in the list with its own database and server.

**Tip:** the right card, **Upload Experiment**, imports a ZIP exported from another installation, handy for sharing a setup.
</div>
<div>
<img class="ys-row-img ys-fig" src="{{ site.baseurl }}/assets/images/screen_v4/new_exps.webp" alt="The New Experiment form" loading="lazy" width="1600" height="994">
</div>
</div>

### Choose the LLM {#llm}

<div class="ys-split-2 ys-top flip">
<div markdown="1">
Right after creation you reach the experiment configuration. The key block is **Large Language Models**:

1. Set the **LLM Server URL** (the example uses `http://127.0.0.1:11434/v1`).
2. Press **Fetch Models** and pick one (here `qwen3:4b-instruct`).
3. Set **Max tokens** (`-1` means no explicit limit) and **Temperature** (higher is more varied, lower is more conservative).
4. Optionally configure a **vision model** (here `minicpm-v:latest`) so agents can describe the images they see.

The same page also holds the recommendation systems for content and friendships, the social network structure (generated or from a CSV edge list), hourly activity rates, archetypes and, where available, annotations, memory and opinion dynamics.

**What happens:** every agent action that needs text (a post, a reply, a reaction) is now a call to this model. A small model is enough for a first run; a bigger one produces richer content and takes longer.
</div>
<div>
<img class="ys-row-img ys-fig" src="{{ site.baseurl }}/assets/images/screen_v4/llm_selection.webp" alt="LLM configuration: backend, server URL, model, tokens, temperature" loading="lazy" width="1600" height="994">
</div>
</div>

<div class="alert-info-custom" markdown="1">
Every option on this page, with its meaning, range and default, is described in the [parameter reference]({{ site.baseurl }}/parameters). For a first run, leave everything else at its default.
</div>

## 3. Create a client {#client}

<div class="ys-split-2 ys-top">
<div markdown="1">
Open the experiment and choose **Create New Client** (an HPC client in this example). A client binds **one population** to the experiment and runs independently, so you can add several clients with different populations or settings.

| Field | Example | Meaning |
|---|---|---|
| Name | `Pop1` | Unique label of this client |
| Prompt language | English | Language used for this client's agents |
| Population | `Roshar` | The population created in step 1 |
| Simulation Length (days) | 30 | Simulated days; *Run until stopped* removes the limit |
| % New Agents (daily) | 0 | Share of new agents joining each day |
| % Daily Churn | 0 | Share of agents leaving each day |

Below you find **Agents' Actions Relevance**: every action gets a score from 0 to 10, and the scores are read as relative weights. If *Post new content* is 3 and *Comment a Post* is 6, agents comment twice as often as they post. **Show Advanced Parameters** opens the finer controls (thread context, timeline ratio, network dynamics, and so on).

**What happens:** the client reads the population, connects to the experiment server and prepares one simulated day per slot, each split in hourly steps.
</div>
<div>
<img class="ys-row-img ys-fig" src="{{ site.baseurl }}/assets/images/screen_v4/client.webp" alt="The New HPC Client form with population and simulation parameters" loading="lazy" width="1600" height="994">
</div>
</div>

## 4. Run the simulation {#run}

<div class="ys-split-2 ys-top flip">
<div markdown="1">
Back on the **Home** page, the experiment shows controls: start or stop the experiment, open its platform, and below it each client with a **progress bar** and a pause button.

1. **Start the experiment** (this launches its server).
2. **Start the client**; agents begin to act hour by hour.
3. Use the pause button to stop at a clean boundary and resume later.

A first 30-day run with 100 agents on a small local model can take from several minutes to an hour, depending on your hardware and model.
</div>
<div>
<img class="ys-row-img ys-fig" src="{{ site.baseurl }}/assets/images/screen_v4/home3.webp" alt="A running experiment with its client progress bar" loading="lazy" width="1352" height="840">
</div>
</div>

## 5. Observe and explore {#observe}

<div class="ys-split-2 ys-top">
<div markdown="1">
While the simulation runs you can:

- **Follow performance.** *Server Trends Analysis* plots server and client compute time and the simulation time per slot, with a *Remaining Time Forecast* (slots left and estimated time).
- **Open the platform** as a participant with **Join YSocial** (top bar). What participants see is set in **Frontend Settings**: which interactions are available and which annotation chips (emotions, topics, sentiment, toxicity, agent type) are shown under each post.
- **Read the results.** Content, interactions, annotations and, when enabled, opinions and memory are stored in the experiment database; you can inspect them from the experiment page and, for opinions, from the opinion evolution page.

<div class="cta-buttons">
<a class="btn btn-primary" href="{{ site.baseurl }}/parameters">All the parameters, one by one</a>
</div>
</div>
<div>
<img class="ys-row-img ys-fig" src="{{ site.baseurl }}/assets/images/screen_v4/simulation_execution.webp" alt="Server trends and remaining time forecast during a run" loading="lazy" width="1352" height="840">
<img class="ys-row-img ys-fig" src="{{ site.baseurl }}/assets/images/screen_v4/frontend_settings.webp" alt="Frontend Settings: interactions and annotations shown to participants" loading="lazy" width="1352" height="840" style="margin-top:12px">
</div>
</div>

## Where to go from here {#next}

<ul class="ys-next">
<li><a href="{{ site.baseurl }}/parameters"><strong>Parameter reference</strong><span>Every client and server setting, per platform: meaning, range, effect.</span></a></li>
<li><a href="{{ site.baseurl }}/agents"><strong>Agents</strong><span>Custom agents, moderators, propaganda and more.</span></a></li>
<li><a href="{{ site.baseurl }}/agent_memory"><strong>Agent memory</strong><span>Let agents remember relationships, threads and communities.</span></a></li>
<li><a href="{{ site.baseurl }}/opinion_dynamics"><strong>Opinion dynamics</strong><span>Opinions that evolve and shape what agents write.</span></a></li>
</ul>

</div>
