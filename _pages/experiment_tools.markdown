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

<p class="ys-lede">Studies need many runs, not one. These tools reuse, vary and queue experiments for you. All live in <mark>Experiments</mark>.</p>

<div class="ys-grid three">
<a class="ys-card hover" href="#copy"><h3><i class="fas fa-copy" aria-hidden="true"></i> Copy experiment</h3><p>Clone one setup.</p></a>
<a class="ys-card hover" href="#copy-group"><h3><i class="fas fa-layer-group" aria-hidden="true"></i> Copy group</h3><p>Clone a whole set.</p></a>
<a class="ys-card hover" href="#upload"><h3><i class="fas fa-file-archive" aria-hidden="true"></i> Upload experiment</h3><p>Import from a ZIP.</p></a>
<a class="ys-card hover" href="#matrix"><h3><i class="fas fa-th" aria-hidden="true"></i> Experiment matrix</h3><p>Vary parameters.</p></a>
<a class="ys-card hover" href="#schedule"><h3><i class="fas fa-calendar-alt" aria-hidden="true"></i> Experiment schedule</h3><p>Run many, unattended.</p></a>
</div>

<div class="alert-info-custom" markdown="1">
**Groups:** an experiment can belong to a named *group* of related runs. Copy group, matrix and schedule work on groups.
</div>

## Copy experiment {#copy}

<p class="ys-muted"><i class="fas fa-map-marker-alt" aria-hidden="true"></i> *Experiments*, Copy experiment</p>

Clone a setup to replicate it or try a variation.

<div class="ys-grid three">
<div class="ys-card" markdown="1">
<h4><i class="fas fa-bullseye" aria-hidden="true"></i> Use it for</h4>

- Replications
- A baseline to tweak
</div>
<div class="ys-card" markdown="1">
<h4><i class="fas fa-pen" aria-hidden="true"></i> You provide</h4>

- Source experiment
- New name
- Number of copies
- Group (optional)
</div>
<div class="ys-card" markdown="1">
<h4><i class="fas fa-check" aria-hidden="true"></i> You get</h4>

- Copies named `name_1`, `name_2`…
- Configuration, populations, clients, prompts
- Fresh database and port, **no data or logs**
</div>
</div>

## Copy group {#copy-group}

<p class="ys-muted"><i class="fas fa-map-marker-alt" aria-hidden="true"></i> *Experiments*, Copy group</p>

Duplicate a whole design in one step.

<div class="ys-grid three">
<div class="ys-card" markdown="1">
<h4><i class="fas fa-bullseye" aria-hidden="true"></i> Use it for</h4>

- Rerunning a full design, e.g. with another model
</div>
<div class="ys-card" markdown="1">
<h4><i class="fas fa-pen" aria-hidden="true"></i> You provide</h4>

- Source group
- New group name
</div>
<div class="ys-card" markdown="1">
<h4><i class="fas fa-check" aria-hidden="true"></i> You get</h4>

- Every experiment copied as in *Copy experiment*
- A report if one copy fails; the others still go through
</div>
</div>

## Upload experiment {#upload}

<p class="ys-muted"><i class="fas fa-map-marker-alt" aria-hidden="true"></i> *Experiments*, Upload experiment</p>

Bring in an experiment made elsewhere.

<div class="ys-grid three">
<div class="ys-card" markdown="1">
<h4><i class="fas fa-bullseye" aria-hidden="true"></i> Use it for</h4>

- A colleague's or archived experiment
- Moving between installations
</div>
<div class="ys-card" markdown="1">
<h4><i class="fas fa-pen" aria-hidden="true"></i> You provide</h4>

- A ZIP of the experiment folder
- Name and group (optional)
</div>
<div class="ys-card" markdown="1">
<h4><i class="fas fa-check" aria-hidden="true"></i> You get</h4>

- A registered experiment, ready to run
- Settings read from `config_server.json` or `server_config.json`, also in nested folders
</div>
</div>

## Experiment matrix {#matrix}

<p class="ys-muted"><i class="fas fa-map-marker-alt" aria-hidden="true"></i> *Experiments*, Experiment matrix</p>

Explore a parameter space from one source experiment.

<div class="ys-grid three">
<div class="ys-card" markdown="1">
<h4><i class="fas fa-bullseye" aria-hidden="true"></i> Use it for</h4>

- Sensitivity analyses
- Factorial designs, e.g. recommenders × content filters
</div>
<div class="ys-card" markdown="1">
<h4><i class="fas fa-pen" aria-hidden="true"></i> You provide</h4>

- Source experiment and target group
- Settings to **unlock**
- Alternative values for each
</div>
<div class="ys-card" markdown="1">
<h4><i class="fas fa-check" aria-hidden="true"></i> You get</h4>

- A new group of experiments
- Everything else inherited
- Ports, paths and databases regenerated
</div>
</div>

<div class="ys-grid two">
<div class="ys-card" markdown="1">
<h4>Independent</h4>

One experiment per alternative, one setting at a time.
</div>
<div class="ys-card" markdown="1">
<h4>Cartesian</h4>

One experiment per combination. The count grows fast.
</div>
</div>

## Experiment schedule {#schedule}

<p class="ys-muted"><i class="fas fa-map-marker-alt" aria-hidden="true"></i> *Experiments*, Experiment schedule</p>

Run many experiments unattended.

<div class="ys-grid three">
<div class="ys-card" markdown="1">
<h4><i class="fas fa-bullseye" aria-hidden="true"></i> Use it for</h4>

- Overnight batches
- Running a whole group
</div>
<div class="ys-card" markdown="1">
<h4><i class="fas fa-pen" aria-hidden="true"></i> You provide</h4>

- Groups, in the order you want
- Dynamic filling (optional)
</div>
<div class="ys-card" markdown="1">
<h4><i class="fas fa-check" aria-hidden="true"></i> You get</h4>

- Groups run **in sequence**, experiments in a group **in parallel**
- Start, stop, progress and logs
</div>
</div>

<div class="ys-grid two">
<div class="ys-card" markdown="1">
<h4>Good to know</h4>

- HPC groups: at most **4** at once, never mixed with Standard.
- Dynamic filling starts the next run when a slot frees.
</div>
<div class="ys-card" markdown="1">
<h4>Eligible experiments</h4>

- Stopped, not completed
- Not already in a group
- No infinite client
</div>
</div>

<div class="alert-info-custom" markdown="1">
**Typical workflow:** one experiment, then *Matrix* into a group, *Schedule* to run it, *Copy group* to replicate the study.
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
