---
layout: default-full
title: "Experiment tools"
subtitle: "Five facilities to repeat, vary and schedule experiments at scale."
eyebrow: "Guides"
header_title: "Experiment tools"
header_type: hero
show_sidetoc: true
---

<div class="ys-article" markdown="1">

<p class="ys-lede">A study rarely needs one run. These facilities, all in the <mark>Experiments</mark> section of the admin panel, help you <mark>reuse</mark>, <mark>vary</mark> and <mark>queue</mark> experiments without rebuilding them by hand.</p>

<ol class="ys-steps">
<li><h3><a href="#copy">Copy experiment</a></h3><p>Clone one setup, N times.</p></li>
<li><h3><a href="#copy-group">Copy group</a></h3><p>Clone a whole set.</p></li>
<li><h3><a href="#upload">Upload experiment</a></h3><p>Import from a ZIP.</p></li>
<li><h3><a href="#matrix">Experiment matrix</a></h3><p>Vary parameters.</p></li>
<li><h3><a href="#schedule">Experiment schedule</a></h3><p>Run them in order.</p></li>
</ol>

<div class="alert-info-custom" markdown="1">
**Groups.** Every experiment can belong to a *group*, a named set of related runs. Copy group, matrix and schedule all work on groups.
</div>

## Copy experiment {#copy}

**Use it to:** repeat the same setup (replications, random seeds, a baseline you then tweak).

1. Choose the **source** experiment and give the new **name**.
2. Set how many **copies** you want: they are named `name_1`, `name_2`, and so on.
3. Optionally put them in a **group**.

**What is copied:** configuration, populations, clients and prompts.
**What is not:** simulation data, logs and runtime state. Each copy gets a fresh database and its own port, so it starts from zero and never interferes with the original.

## Copy group {#copy-group}

**Use it to:** duplicate a whole set of experiments, for instance to rerun a full design with a different model.

Pick a **source group** and a **new group name**. Every experiment in the source is copied into the new group with the same rules as *Copy experiment*. If one copy fails, the others still go through and you get a per-experiment report.

## Upload experiment {#upload}

**Use it to:** import an experiment made elsewhere: a colleague's, another installation, or an archived one.

Upload a **ZIP** of the experiment folder, with an optional new name and group. YSocial finds the configuration (`config_server.json` for Standard, `server_config.json` for HPC), also inside nested folders, and registers the experiment. Platform type and configuration are read from the files, so you do not enter them again.

## Experiment matrix {#matrix}

**Use it to:** explore a parameter space, such as several recommender systems crossed with several content filters.

1. Pick a **source experiment** or group and a **target group**.
2. **Unlock** the settings you want to vary: server parameters and recommender options are listed as editable items.
3. For each unlocked setting, list its **alternative values**.
4. Choose how to combine them:

<div class="ys-grid two">
<div class="ys-card" markdown="1">
#### Independent
One new experiment per alternative, changing one setting at a time. Use it for **sensitivity analysis**.
</div>
<div class="ys-card" markdown="1">
#### Cartesian
One experiment for **every combination** of values. Use it for **factorial designs**; the count grows quickly.
</div>
</div>

Everything else is inherited from the source. Identity settings (ports, paths, database) are never varied: they are regenerated for each experiment. The result is a new group, ready for the schedule.

## Experiment schedule {#schedule}

**Use it to:** run many experiments unattended, in order.

- **Groups run one after another**; experiments **inside** a group can run in parallel.
- **HPC groups** run at most **4** experiments at once (configurable) and cannot be mixed with Standard ones.
- **Dynamic filling** (optional) starts the next experiment as soon as a slot frees.
- **Eligible** experiments are stopped, not in a group, not completed, and with no infinite client.
- You can **start, stop**, follow **progress** and read **logs**. Helpers create groups automatically and clean up finished ones.
- A background monitor keeps the queue moving. Non-admin users see and run only their own experiments.

<div class="alert-info-custom" markdown="1">
**Typical workflow:** build one experiment → *Experiment matrix* into a group → *Experiment schedule* to run it → *Copy group* to replicate the whole study.
</div>

<div class="cta-buttons">
<a class="btn btn-primary" href="{{ site.baseurl }}/parameters">Parameter reference</a>
<a class="btn btn-secondary" href="{{ site.baseurl }}/user_roles">Who can do what</a>
</div>

## Where next {#next}

<ul class="ys-next">
<li><a href="{{ site.baseurl }}/first_simulation"><strong>Your first simulation</strong><span>The basics, step by step.</span></a></li>
<li><a href="{{ site.baseurl }}/parameters"><strong>Parameter reference</strong><span>What each setting does.</span></a></li>
<li><a href="{{ site.baseurl }}/user_roles"><strong>User roles</strong><span>Who can use these tools.</span></a></li>
</ul>

</div>
