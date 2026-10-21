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

<p class="ys-lede">YSocial has <mark>four roles</mark>: <mark>admin</mark> and <mark>researcher</mark> run experiments, <mark>user</mark> and <mark>student</mark> take part in them.</p>

<div class="ys-grid four">
<a class="ys-card hover" href="#admin"><h3>Admin</h3><p>Full control, including users and system.</p></a>
<a class="ys-card hover" href="#researcher"><h3>Researcher</h3><p>Runs own experiments, creates participants.</p></a>
<a class="ys-card hover" href="#user"><h3>User</h3><p>Joins the experiments assigned to them.</p></a>
<a class="ys-card hover" href="#student"><h3>Student</h3><p>Same as user, for classroom use.</p></a>
</div>

## Admin {#admin}

The owner of the installation (default account `admin@y-not.social`).

- Sees and manages **all experiments**, whoever created them.
- **Creates users** of any role, single or in bulk, and **changes roles**. It cannot demote itself or change another admin.
- Has the **Admin** menu: *Users*, *Miscellanea* and *Plugin Manager*.
- Sets **self-registration**, checks for **updates**, controls the **watchdog** and **telemetry**.
- Gets extra moderation controls inside the social platforms.

## Researcher {#researcher}

The everyday role for people running studies.

- Uses the admin panel **without the Admin menu**.
- Creates **populations, experiments and clients**, and runs them.
- Sees **its own experiments**, plus those shared with it through the experiment's visibility settings. [Experiment tools]({{ site.baseurl }}/experiment_tools) (matrix, schedule) only act on those.
- Creates **participant accounts** (user or student), one by one or in bulk, and assigns them to experiments. It cannot create admins or researchers.
- Can **join** a simulation as a participant and, when agent memory is on, interview agents.

## User {#user}

A participant, not an operator.

- **No admin panel.** After login it goes straight to the platform.
- Sees only experiments it was **assigned to**, and only the ones that are **active**.
- What it sees in the feed (interactions, annotations) follows the experiment's *Frontend Settings*.

## Student {#student}

Technically identical to *user*: a separate label that keeps classroom accounts apart from other participants, for example in teaching and workshops. Same login, same limits, same assignment rules.

## At a glance {#matrix-table}

| Capability | Admin | Researcher | User / Student |
|---|:-:|:-:|:-:|
| Open the admin panel | ✓ | ✓ | — |
| Create experiments, populations, clients | ✓ | ✓ | — |
| See all experiments | ✓ | own and shared | — |
| Matrix, schedule, copy | ✓ | own and shared | — |
| Create participant accounts | ✓ | ✓ | — |
| Create researchers and admins | ✓ | — | — |
| Change roles, delete users | ✓ | — | — |
| Plugin Manager, updates, system settings | ✓ | — | — |
| Join a simulation | ✓ | ✓ | assigned only |

<div class="alert-info-custom" markdown="1">
Plugins can add further roles. Those are documented with the plugin that introduces them.
</div>

## Where next {#next}

<ul class="ys-next">
<li><a href="{{ site.baseurl }}/first_simulation"><strong>Your first simulation</strong><span>Create and run your first experiment.</span></a></li>
<li><a href="{{ site.baseurl }}/experiment_tools"><strong>Experiment tools</strong><span>Copy, matrix and schedule.</span></a></li>
</ul>

</div>
