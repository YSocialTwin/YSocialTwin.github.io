---
layout: default-full
title: "User roles"
subtitle: "Who can do what in YSocial."
eyebrow: "Guides"
header_title: "User roles"
header_type: hero
show_sidetoc: true
---

<div class="ys-article" markdown="1">

<p class="ys-lede">Three roles. <mark>Admin</mark> and <mark>researcher</mark> run experiments; <mark>user</mark> takes part in them.</p>

<div class="ys-grid three">
<a class="ys-card hover" href="#admin"><h3><i class="fas fa-user-shield" aria-hidden="true"></i> Admin</h3><p>Everything, including users and system.</p></a>
<a class="ys-card hover" href="#researcher"><h3><i class="fas fa-user-graduate" aria-hidden="true"></i> Researcher</h3><p>Runs studies, creates participants.</p></a>
<a class="ys-card hover" href="#user"><h3><i class="fas fa-user" aria-hidden="true"></i> User</h3><p>Joins assigned experiments.</p></a>
</div>

## Admin {#admin}

Owner of the installation (default `admin@y-not.social`).

<div class="ys-grid two">
<div class="ys-card" markdown="1">
<h4><i class="fas fa-check" aria-hidden="true"></i> Can</h4>

- See and manage **all experiments**
- Create users of **any role**, one by one or in bulk, and change roles
- Use the **Admin** menu: *Users*, *Miscellanea*, *Plugin Manager*
- Set self-registration, check updates, watchdog, telemetry
- Moderate inside the social platforms
</div>
<div class="ys-card" markdown="1">
<h4><i class="fas fa-ban" aria-hidden="true"></i> Cannot</h4>

- Demote itself
- Change another admin's role
- Delete its own account
</div>
</div>

## Researcher {#researcher}

The everyday role for people running studies.

<div class="ys-grid two">
<div class="ys-card" markdown="1">
<h4><i class="fas fa-check" aria-hidden="true"></i> Can</h4>

- Use the admin panel
- Create populations, experiments and clients, and run them
- Use [experiment tools]({{ site.baseurl }}/experiment_tools) on its **own and shared** experiments
- Create **user** accounts and assign them to experiments
- Join a simulation, and interview agents when memory is on
</div>
<div class="ys-card" markdown="1">
<h4><i class="fas fa-ban" aria-hidden="true"></i> Cannot</h4>

- Open the Admin menu
- See others' experiments, unless shared with it
- Create admins or researchers
- Change roles or delete users
</div>
</div>

## User {#user}

A participant, not an operator.

<div class="ys-grid two">
<div class="ys-card" markdown="1">
<h4><i class="fas fa-check" aria-hidden="true"></i> Can</h4>

- Log in straight to the platform
- Join the experiments it is **assigned to**, once active
- See the feed as set by the experiment's *Frontend Settings*
</div>
<div class="ys-card" markdown="1">
<h4><i class="fas fa-ban" aria-hidden="true"></i> Cannot</h4>

- Open the admin panel
- Create or run experiments
- See experiments it is not assigned to
</div>
</div>

## At a glance {#glance}

| Capability | Admin | Researcher | User |
|---|:-:|:-:|:-:|
| Admin panel | ✓ | ✓ | — |
| Create experiments, populations, clients | ✓ | ✓ | — |
| See experiments | all | own and shared | assigned |
| Copy, matrix, schedule | all | own and shared | — |
| Create user accounts | ✓ | ✓ | — |
| Create researchers and admins | ✓ | — | — |
| Change roles, delete users | ✓ | — | — |
| Plugin Manager, updates, system | ✓ | — | — |

## Where next {#next}

<ul class="ys-next">
<li><a href="{{ site.baseurl }}/first_simulation"><strong>Your first simulation</strong><span>Create and run an experiment.</span></a></li>
<li><a href="{{ site.baseurl }}/experiment_tools"><strong>Experiment tools</strong><span>Copy, matrix and schedule.</span></a></li>
</ul>

</div>
