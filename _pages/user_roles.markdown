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

<div class="ys-tabs" data-tabs data-cards data-label="User role">

<div class="ys-tabpanel" id="admin" data-title="Admin" data-kicker="Full control" data-pill="" data-desc="Everything, including users and system.">
<p>Owner of the installation (default <code>admin@y-not.social</code>).</p>
<div class="ys-grid two"><div class="ys-card"><h4><i class="fas fa-check" aria-hidden="true"></i> Can</h4><ul><li>See and manage <strong>all experiments</strong></li><li>Create users of <strong>any role</strong>, one by one or in bulk, and change roles</li><li>Use the <strong>Admin</strong> menu: <em>Users</em>, <em>Miscellanea</em>, <em>Plugin Manager</em></li><li>Set self-registration, check updates, watchdog, telemetry</li><li>Moderate inside the social platforms</li></ul></div><div class="ys-card"><h4><i class="fas fa-ban" aria-hidden="true"></i> Cannot</h4><ul><li>Demote itself</li><li>Change another admin's role</li><li>Delete its own account</li></ul></div></div>
</div>

<div class="ys-tabpanel" id="researcher" data-title="Researcher" data-kicker="Runs studies" data-pill="" data-desc="Creates and runs experiments, adds participants.">
<p>The everyday role for people running studies.</p>
<div class="ys-grid two"><div class="ys-card"><h4><i class="fas fa-check" aria-hidden="true"></i> Can</h4><ul><li>Use the admin panel</li><li>Create populations, experiments and clients, and run them</li><li>Use <a href="{{ site.baseurl }}/experiment_tools">experiment tools</a> on its <strong>own and shared</strong> experiments</li><li>Create <strong>user</strong> accounts and assign them to experiments</li><li>Join a simulation, and interview agents when memory is on</li></ul></div><div class="ys-card"><h4><i class="fas fa-ban" aria-hidden="true"></i> Cannot</h4><ul><li>Open the Admin menu</li><li>See others' experiments, unless shared with it</li><li>Create admins or researchers</li><li>Change roles or delete users</li></ul></div></div>
</div>

<div class="ys-tabpanel" id="user" data-title="User" data-kicker="Participant" data-pill="" data-desc="Joins the experiments assigned to it.">
<p>A participant, not an operator.</p>
<div class="ys-grid two"><div class="ys-card"><h4><i class="fas fa-check" aria-hidden="true"></i> Can</h4><ul><li>Log in straight to the platform</li><li>Join the experiments it is <strong>assigned to</strong>, once active</li><li>See the feed as set by the experiment's <em>Frontend Settings</em></li></ul></div><div class="ys-card"><h4><i class="fas fa-ban" aria-hidden="true"></i> Cannot</h4><ul><li>Open the admin panel</li><li>Create or run experiments</li><li>See experiments it is not assigned to</li></ul></div></div>
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


</div>

<section class="ys-section ys-left ys-alt">
<div class="ys-wrap">
<span class="ys-kicker">Keep exploring</span>
<h2 class="ys-title" id="next">Where to next</h2>
<ul class="ys-next ys-reveal">
<li><a href="{{ site.baseurl }}/first_simulation"><strong>Your first simulation</strong><span>Create and run an experiment.</span></a></li>
<li><a href="{{ site.baseurl }}/experiment_tools"><strong>Experiment tools</strong><span>Copy, matrix and schedule.</span></a></li>
</ul>
</div>
</section>

