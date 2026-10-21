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

<div class="alert-info-custom" markdown="1">
**Groups:** an experiment can belong to a named *group* of related runs. Copy group, matrix and schedule work on groups.
</div>

<div class="ys-tabs" data-tabs data-cards data-label="Experiment tool">

<div class="ys-tabpanel" id="copy" data-title="Copy experiment" data-kicker="Clone" data-pill="" data-desc="One setup, N copies.">
<div class="ys-split-2 ys-top">
<div>
<p class="et-where"><i class="fas fa-map-marker-alt" aria-hidden="true"></i><em>Experiments</em>, Copy experiment</p>
<dl class="et-kv"><dt>Use it for</dt><dd>Replications, or a baseline you then tweak.</dd><dt>You provide</dt><dd>Source, new name, number of copies, group (optional).</dd><dt>You get</dt><dd>Copies <code>name_1</code>, <code>name_2</code>… with configuration, populations, clients and prompts. Fresh database and port: <strong>no data, no logs</strong>.</dd></dl>
</div>
<div>
<div class="et-diag"><div class="et-col"><span class="et-chip src">Experiment</span></div><span class="et-arr" aria-hidden="true">&rarr;</span><div class="et-col"><span class="et-chip ">name_1</span><span class="et-chip ">name_2</span><span class="et-chip ">name_3</span></div></div>
<p class="et-cap">Each copy starts from zero.</p>
</div>
</div>
</div>

<div class="ys-tabpanel" id="copy-group" data-title="Copy group" data-kicker="Clone a set" data-pill="" data-desc="A whole design at once.">
<div class="ys-split-2 ys-top">
<div>
<p class="et-where"><i class="fas fa-map-marker-alt" aria-hidden="true"></i><em>Experiments</em>, Copy group</p>
<dl class="et-kv"><dt>Use it for</dt><dd>Rerunning a full design, for instance with another model.</dd><dt>You provide</dt><dd>Source group and new group name.</dd><dt>You get</dt><dd>Every experiment copied as in <em>Copy experiment</em>. If one copy fails you get a report, the others go through.</dd></dl>
</div>
<div>
<div class="et-diag"><div class="et-grp"><b>Group A</b><span class="et-chip src">e1</span><span class="et-chip src">e2</span><span class="et-chip src">e3</span></div><span class="et-arr" aria-hidden="true">&rarr;</span><div class="et-grp"><b>Group B</b><span class="et-chip ">e1</span><span class="et-chip ">e2</span><span class="et-chip ">e3</span></div></div>
<p class="et-cap">One click, the whole set.</p>
</div>
</div>
</div>

<div class="ys-tabpanel" id="upload" data-title="Upload experiment" data-kicker="Import" data-pill="" data-desc="From a ZIP.">
<div class="ys-split-2 ys-top">
<div>
<p class="et-where"><i class="fas fa-map-marker-alt" aria-hidden="true"></i><em>Experiments</em>, Upload experiment</p>
<dl class="et-kv"><dt>Use it for</dt><dd>A colleague's or archived experiment, or moving between installations.</dd><dt>You provide</dt><dd>A ZIP of the experiment folder. Name and group optional.</dd><dt>You get</dt><dd>A registered experiment ready to run. Settings are read from <code>config_server.json</code> or <code>server_config.json</code>, also in nested folders.</dd></dl>
</div>
<div>
<div class="et-diag"><span class="et-chip o">experiment.zip</span><span class="et-arr" aria-hidden="true">&rarr;</span><span class="et-chip ">config found</span><span class="et-arr" aria-hidden="true">&rarr;</span><span class="et-chip src">Experiment</span></div>
<p class="et-cap">No need to re-enter platform or settings.</p>
</div>
</div>
</div>

<div class="ys-tabpanel" id="matrix" data-title="Experiment matrix" data-kicker="Vary" data-pill="" data-desc="Explore a parameter space.">
<div class="ys-split-2 ys-top">
<div>
<p class="et-where"><i class="fas fa-map-marker-alt" aria-hidden="true"></i><em>Experiments</em>, Experiment matrix</p>
<dl class="et-kv"><dt>Use it for</dt><dd>Sensitivity analyses and factorial designs, e.g. recommenders &times; content filters.</dd><dt>You provide</dt><dd>Source experiment, target group, the settings to <strong>unlock</strong> and alternative values for each.</dd><dt>You get</dt><dd>A new group, everything else inherited. Ports, paths and databases are regenerated.</dd></dl>
</div>
<div>
<div class="et-diag"><div class="et-lane"><div class="et-line"><b>Independent</b><span class="et-chip src">base</span><span class="et-chip ">rec = B</span><span class="et-chip ">rec = C</span><span class="et-chip ">filter = Y</span></div><div class="et-line"><b>Cartesian</b><div class="et-grid"><span class="et-chip ">A &middot; X</span><span class="et-chip ">A &middot; Y</span><span class="et-chip ">B &middot; X</span><span class="et-chip ">B &middot; Y</span><span class="et-chip ">C &middot; X</span><span class="et-chip ">C &middot; Y</span></div></div></div></div>
<p class="et-cap">Same inputs, two ways to combine them.</p>
</div>
</div>
<div class="et-mini"><div><h4>Independent</h4><p>One experiment per alternative, one setting at a time. For sensitivity analysis.</p></div><div><h4>Cartesian</h4><p>One experiment per combination. For factorial designs; the count grows fast.</p></div></div>
</div>

<div class="ys-tabpanel" id="schedule" data-title="Experiment schedule" data-kicker="Run" data-pill="" data-desc="Many experiments, unattended.">
<div class="ys-split-2 ys-top">
<div>
<p class="et-where"><i class="fas fa-map-marker-alt" aria-hidden="true"></i><em>Experiments</em>, Experiment schedule</p>
<dl class="et-kv"><dt>Use it for</dt><dd>Overnight batches, running a whole group.</dd><dt>You provide</dt><dd>Groups in the order you want. Dynamic filling is optional.</dd><dt>You get</dt><dd>Groups run <strong>in sequence</strong>, experiments in a group <strong>in parallel</strong>. Start, stop, progress and logs.</dd></dl>
</div>
<div>
<div class="et-diag"><div class="et-lane"><div class="et-line"><b>Group 1</b><span class="et-chip src">e1</span><span class="et-chip src">e2</span><span class="et-chip src">e3</span><span class="et-cap" style="margin:0">parallel</span></div><div class="et-line"><b>Group 2</b><span class="et-chip ">e4</span><span class="et-chip ">e5</span></div><div class="et-line"><b>Group 3</b><span class="et-chip dim">e6</span></div></div></div>
<p class="et-cap">Group 2 starts when group 1 is done.</p>
</div>
</div>
<div class="et-mini"><div><h4>Good to know</h4><p>HPC groups run at most <strong>4</strong> experiments at once and are never mixed with Standard. Dynamic filling starts the next run as soon as a slot frees.</p></div><div><h4>Eligible experiments</h4><p>Stopped, not completed, not already in a group, with no infinite client.</p></div></div>
</div>

</div>

<div class="et-note" markdown="1">
**Typical workflow:** one experiment, then *Matrix* into a group, *Schedule* to run it, *Copy group* to replicate the study.
</div>

<div class="cta-buttons">
<a class="btn btn-primary" href="{{ site.baseurl }}/parameters">Parameter reference</a>
<a class="btn btn-secondary" href="{{ site.baseurl }}/user_roles">Who can do what</a>
</div>

</div>

<section class="ys-section ys-left ys-alt">
<div class="ys-wrap">
<span class="ys-kicker">Keep exploring</span>
<h2 class="ys-title" id="next">Where to next</h2>
<ul class="ys-next ys-reveal">
<li><a href="{{ site.baseurl }}/first_simulation"><strong>Your first simulation</strong><span>The basics, step by step.</span></a></li>
<li><a href="{{ site.baseurl }}/parameters"><strong>Parameter reference</strong><span>What each setting does.</span></a></li>
<li><a href="{{ site.baseurl }}/user_roles"><strong>User roles</strong><span>Who can use these tools.</span></a></li>
</ul>
</div>
</section>

