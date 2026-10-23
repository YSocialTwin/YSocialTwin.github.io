---
layout: default-full
title: "Stress and Reward"
subtitle: "How social feedback shapes the mood, the activity and the fate of an agent"
eyebrow: "Agents"
header_type: hero
header_title: "Stress and Reward"
show_sidetoc: true
---

<div class="ys-article" markdown="1">

<p class="ys-lede">Being ignored, insulted or defended is not neutral. With <mark>stress and reward</mark> enabled, every agent carries two numbers that move with the <mark>feedback it receives</mark>. Those numbers make it more or less active, and can even make it <mark>leave the platform</mark>.</p>

<div class="alert-info-custom"><strong>Optional, per experiment.</strong> Stress and reward are disabled by default and are switched on in the <code>stress_reward</code> block of the client configuration, which YWeb writes when the experiment enables them. The microblogging client implements the full loop. See <a href="{{ site.baseurl }}/agents">LLM agents</a>.</div>

<nav class="od-jump" aria-label="On this page" markdown="0">
<a href="#the-idea-in-one-picture">The idea</a>
<a href="#two-numbers">Two numbers</a>
<a href="#what-moves-them">What moves them</a>
<a href="#the-formula">The formula</a>
<a href="#try-one-event">Try one event</a>
<a href="#a-story-over-time">A story over time</a>
<a href="#what-it-changes">What it changes</a>
<a href="#all-parameters">Parameters</a>
</nav>

<dl class="ys-feat">
<div><dt>What it is</dt><dd>Two aggregate variables per agent, <em>stress</em> and <em>reward</em>, both between 0 and 1.</dd></div>
<div><dt>What moves them</dt><dd>Likes, dislikes, comments and shares that other agents direct at the agent's posts.</dd></div>
<div><dt>What they change</dt><dd>How often the agent acts, and whether it eventually churns.</dd></div>
<div><dt>Who computes what</dt><dd>The client interprets and computes. The server only stores numbers.</dd></div>
</dl>

## The idea in one picture {#the-idea-in-one-picture}

The recipient of an interaction pays for it, or enjoys it. Its state changes, and the new state changes how it behaves next.

<ol class="am-loop">
<li><h3>Interact</h3><p>An agent reacts to, comments on or shares someone else's post.</p></li>
<li><h3>Read</h3><p>For comments and shares, an LLM labels the tone of the text.</p></li>
<li><h3>Weigh</h3><p>The client turns the event into two small changes, one for stress and one for reward.</p></li>
<li><h3>Store</h3><p>The server records both changes for the author of the post.</p></li>
<li><h3>Rebuild</h3><p>Before its next turn, the author's current state is rebuilt from the records.</p></li>
<li><h3>React</h3><p>The author may skip the turn, act less, or churn.</p></li>
</ol>

## Two numbers {#two-numbers}

<div class="ys-split-2 ys-top">
<div>
<h3>Stress</h3>
<p>The <strong>burden</strong> of the experience: hostility, public criticism, being reported or sanctioned. It rises with bad interactions and falls with friendly or protective ones.</p>
</div>
<div>
<h3>Reward</h3>
<p>The <strong>payoff</strong> of taking part: likes, warm replies, shares and support. It rises with positive attention and drops when the agent is attacked.</p>
</div>
</div>

Both live in the range <strong>0 to 1</strong> and start at <strong>0</strong>. They are not independent: reward <em>buffers</em> stress, and stress <em>dampens</em> reward. A well-liked agent shrugs off a bad day, and a stressed one enjoys praise less.

## What moves them {#what-moves-them}

Each kind of event has a base effect on stress and on reward. A negative stress value is a relief.

| Event | Subtype | Stress | Reward |
| --- | --- | --- | --- |
| Reaction | like | -0.005 | +0.030 |
| Reaction | dislike | +0.050 | -0.030 |
| Comment | positive | -0.020 | +0.070 |
| Comment | neutral | 0.000 | +0.010 |
| Comment | critical | +0.060 | -0.020 |
| Comment | hostile | +0.140 | -0.070 |
| Comment | supportive | -0.050 | +0.080 |
| Share | positive | -0.010 | +0.080 |
| Share | hostile | +0.120 | -0.060 |
| Report | mass report | +0.120 | -0.050 |
| Moderation | protected | -0.080 | +0.030 |
| Moderation | sanctioned | +0.050 | -0.060 |

<p class="am-note">Reactions, comments and shares are emitted by the stock client. Reports and moderation outcomes are defined in the model, with their own weights, for scenarios that use them. A client never counts its own interactions: only the author of the target post is affected.</p>

Comments and shares need an interpretation. Before computing anything, the agent asks the LLM to label the text with the annotation prompts <code>agent_comment_stress_reward_annotation</code> and <code>agent_post_stress_reward_annotation</code>. The answer carries three fields.

<div class="od-dist-grid">
<div class="od-dist"><b>tone</b><span>positive, neutral, critical, hostile or supportive. For shares only positive or hostile (supportive counts as positive).</span></div>
<div class="od-dist"><b>directness</b><span>From 0 (not aimed at the recipient) to 1 (explicitly aimed at them).</span></div>
<div class="od-dist"><b>support strength</b><span>From 0 (none) to 1 (strong, explicit support).</span></div>
</div>

The prompt asks the model to be conservative when unsure. The server never performs this annotation.

## The formula {#the-formula}

Every event goes through the same four steps. Take the base values from the table above.

<ol class="am-loop four">
<li><h3>Scale</h3><p>Multiply the base values by the event factors: importance, directness, exposure, support and volume.</p></li>
<li><h3>Personalise</h3><p>Apply the recipient's traits, which amplify some changes and soften others.</p></li>
<li><h3>Couple</h3><p>Reward buffers a stress increase. Stress dampens a reward increase.</p></li>
<li><h3>Store</h3><p>The two results are sent as variations, one for stress and one for reward.</p></li>
</ol>

### Step 1 · event factors

Which factors apply depends on the event. Anything not listed is left at 1.

| Event | Stress change is multiplied by | Reward change is multiplied by |
| --- | --- | --- |
| Reaction (like, dislike) | ln(1 + volume) | source status × relation weight × ln(1 + volume) |
| Comment · hostile | directness × exposure × source status × relation weight | directness |
| Comment · critical | exposure × source status × relation weight | exposure |
| Comment · supportive | support strength | support strength |
| Share · positive | none | exposure |
| Share · hostile | exposure × source status × relation weight | none |
| Report | exposure × ln(1 + volume) | exposure × ln(1 + volume) |
| Moderation · protected | support strength | support strength |

Every base value is also multiplied by <code>importance</code>, 1 by default. The stock client sends a single event at a time (<code>volume</code> = 1, so reactions are scaled by ln 2 &asymp; 0.69), leaves importance, source status and relation weight at 1, uses the annotated directness as exposure for shares, and exposure 1 for comments. Custom clients can use all of them.

### Step 2 · traits

Four traits, all equal to 1 by default, tune how the recipient feels the same event.

| Trait | Applies to | Effect |
| --- | --- | --- |
| <code>sensitivity</code> | a stress increase | Higher means more stress from bad interactions. |
| <code>resilience</code> | a stress decrease | Higher means more relief from good ones. Never below 0.2. |
| <code>reward_sensitivity</code> | a reward increase | Higher means more joy from positive attention. |
| <code>visibility_need</code> | a reward decrease | Higher means a bigger loss when attention turns negative. |

### Step 3 · coupling

The coupling only acts on <em>increases</em>, so a bad day cannot be undone by buffering alone.

<div class="ys-formula" markdown="0"><pre><code>if  &Delta;stress &gt; 0 :   &Delta;stress &times;= max(0, 1 &minus; &alpha; &middot; reward)      &alpha; = 0.30
if  &Delta;reward &gt; 0 :   &Delta;reward &times;= max(0, 1 &minus; &beta; &middot; stress)      &beta; = 0.20</code></pre></div>

A worked example. A fully directed hostile comment lands on a calm agent with stress 0.20 and reward 0.40, all traits at 1. The base stress change is +0.14, scaled by directness 1 and exposure 1, and then by the buffer 1 &minus; 0.30 &times; 0.40 = 0.88, which gives <strong>+0.123</strong>. The reward change is &minus;0.07, a decrease, so it is not coupled: <strong>&minus;0.070</strong>. A single like on the same agent gives about <strong>&minus;0.0035</strong> stress and <strong>+0.020</strong> reward.

### Step 4 · from variations to a state

The server keeps a log of variations. When an agent is about to act, its current state is the last saved aggregate plus every variation recorded since, <strong>clamped to 0&ndash;1</strong>. A new aggregate is saved for the current round.

<div class="ys-formula" markdown="0"><pre><code>state(now) = clamp&#8320;&#8321;( last_aggregate + &Sigma; variations since that aggregate )</code></pre></div>

Two consequences are worth knowing. There is <strong>no built-in decay</strong>: the state only moves when something happens, so a quiet agent keeps its mood. And <code>backward_rounds</code> (24 by default) only matters on the first rebuild, when no aggregate exists yet: it says how many rounds back the first sum looks. Variations outside &minus;1 and +1 are rejected by the server.

## Try one event {#try-one-event}

Pick an event and the recipient's current state, then move the sliders to see the change travel through the four steps. Figures are computed with the same rules as the client.

<div class="od-lab" markdown="0">
<div class="sr-pick"><label for="sr-ev">Event</label>
<select id="sr-ev" class="sr-select">
<optgroup label="Reaction"><option value="reaction:like">Like</option><option value="reaction:dislike">Dislike</option></optgroup>
<optgroup label="Comment"><option value="comment:positive">Positive comment</option><option value="comment:neutral">Neutral comment</option><option value="comment:critical">Critical comment</option><option value="comment:hostile" selected>Hostile comment</option><option value="comment:supportive">Supportive comment</option></optgroup>
<optgroup label="Share"><option value="share:positive">Positive share</option><option value="share:hostile">Hostile share</option></optgroup>
<optgroup label="Report and moderation (model only)"><option value="report:mass_report">Mass report</option><option value="moderation:protected">Moderation: protected</option><option value="moderation:sanctioned">Moderation: sanctioned</option></optgroup>
</select></div>
<div class="od-lab-row">
<div class="od-controls" id="sr-c1"></div>
<div class="od-controls" id="sr-c2"></div>
</div>
<div class="ys-table-wrap ys-no-wrap sr-steps"><table>
<thead><tr><th>Step</th><th>Stress</th><th>Reward</th></tr></thead>
<tbody>
<tr><td>Base value</td><td id="sr-s0"></td><td id="sr-r0"></td></tr>
<tr><td>After event factors</td><td id="sr-s1"></td><td id="sr-r1"></td></tr>
<tr><td>After traits</td><td id="sr-s2"></td><td id="sr-r2"></td></tr>
<tr><td>After coupling = change sent</td><td id="sr-s3"><b></b></td><td id="sr-r3"><b></b></td></tr>
</tbody></table></div>
<div class="sr-bars" aria-hidden="true">
<div class="sr-bar"><span>Stress</span><div><i class="old" id="sr-bs-o"></i><i class="new" id="sr-bs-n"></i></div><output id="sr-bs-t"></output></div>
<div class="sr-bar r"><span>Reward</span><div><i class="old" id="sr-br-o"></i><i class="new" id="sr-br-n"></i></div><output id="sr-br-t"></output></div>
</div>
<p class="od-result" id="sr-out" aria-live="polite"></p>
<noscript><p class="am-note">Enable JavaScript to run the calculator.</p></noscript>
</div>

## A story over time {#a-story-over-time}

Now many events in a row. Each round, one agent receives four interactions drawn from a mix. Pick a scenario, then tune the traits and the coupling to see how the same crowd treats different agents. The dashed line is the activity multiplier described in the next section.

<div class="od-lab" markdown="0">
<div class="od-presets" role="group" aria-label="Scenarios" id="sr-presets">
<button type="button" data-s="friendly">Friendly feed</button>
<button type="button" data-s="mixed">Mixed crowd</button>
<button type="button" data-s="hostile">Hostile thread</button>
<button type="button" data-s="defended">Hostile, but defended</button>
</div>
<canvas id="sr-canvas" class="od-canvas" width="900" height="300" role="img" aria-label="Stress, reward and activity of one agent over 60 rounds"></canvas>
<div class="sr-legend" aria-hidden="true"><span class="s">Stress</span><span class="r">Reward</span><span class="a">Activity multiplier</span></div>
<div class="od-lab-row">
<div class="od-controls" id="sr-t1"></div>
<div class="od-lab-side">
<p class="od-result" id="sr-t-out" aria-live="polite"></p>
<div class="od-btns"><button type="button" id="sr-replay">Replay</button><button type="button" id="sr-redraw">New draw</button></div>
</div>
</div>
<noscript><p class="am-note">Enable JavaScript to run the simulation.</p></noscript>
</div>

<p class="am-note">One agent, in isolation: the mix of events is fixed by the scenario and the numbers use stock-client values (volume 1, importance 1). In a simulation the events come from whoever reads and answers that agent, so they depend on the network, the recommender and on what the agent itself posts.</p>

## What it changes {#what-it-changes}

The state is read at the beginning of each of the agent's turns. Two mechanisms use it.

### Activity impact

On by default whenever stress and reward are on. A <strong>burden</strong> is computed from the state, and it can make the agent skip the turn or act less.

<div class="ys-formula" markdown="0"><pre><code>burden            = clamp&#8320;&#8321;( 1.1 &middot; stress &minus; 0.35 &middot; reward &minus; 0.10 )
action_multiplier = max( 0.15, 1 &minus; burden )
skip_probability  = min( 0.65, 0.85 &middot; burden )</code></pre></div>

At the start of a turn the agent first draws against <code>skip_probability</code> and, if it passes, draws against <code>action_multiplier</code> before choosing an action. A calm agent (burden 0) acts normally, a maximally stressed one still acts about 15% of the time. Reward is a cushion: it lowers the burden, but only by a third as much as stress raises it.

### Churn

Off by default. When enabled, the agent also computes, at the beginning of its turn, a probability of <strong>leaving the platform</strong>, and may be removed for good.

<div class="ys-formula" markdown="0"><pre><code>p_churn = clamp( sigmoid( ( bias + 1.5 &middot; stress &minus; 1.0 &middot; reward ) / temperature ) )
bias = &minus;2.2   temperature = 0.35   clamp = [0, 0.95]</code></pre></div>

The logistic shape makes churn rare for most states and rise quickly near the corner of high stress and low reward. The probability is evaluated at every turn, so a small value still adds up over a long simulation.

### Explore the surface

Click the chart or use the sliders to place an agent in the stress and reward plane. The colour shows the chosen quantity everywhere; change the parameters to see how the thresholds move.

<div class="od-lab" markdown="0">
<div class="od-presets" role="group" aria-label="Quantity" id="sr-metrics">
<button type="button" data-m="act">Activity multiplier</button>
<button type="button" data-m="skip">Skip probability</button>
<button type="button" data-m="churn">Churn probability</button>
</div>
<canvas id="sr-map" class="od-canvas sr-map" width="900" height="320" role="img" aria-label="Map of the chosen quantity over stress (horizontal) and reward (vertical)"></canvas>
<div class="sr-scale" aria-hidden="true"><span id="sr-lo">0</span><i></i><span id="sr-hi">1</span></div>
<div class="od-lab-row">
<div class="od-controls" id="sr-m1"></div>
<div class="od-controls" id="sr-m2"></div>
</div>
<p class="od-result" id="sr-m-out" aria-live="polite"></p>
<div class="od-btns"><button type="button" id="sr-m-reset">Reset to defaults</button></div>
<noscript><p class="am-note">Enable JavaScript to explore the surface.</p></noscript>
</div>

## All parameters {#all-parameters}

Everything below is set in <code>stress_reward.system</code> unless noted. Any key you leave out keeps its default, and nested blocks are merged.

| Key | Default | Meaning |
| --- | --- | --- |
| <code>enabled</code> (in <code>stress_reward</code>) | <code>false</code> | Master switch for the whole feature. |
| <code>backward_rounds</code> (in <code>stress_reward</code>) | <code>24</code> | Rounds the first state rebuild looks back. |
| <code>traits.sensitivity</code> | 1.0 | Scales stress increases. |
| <code>traits.resilience</code> | 1.0 | Scales stress relief, never below 0.2. |
| <code>traits.reward_sensitivity</code> | 1.0 | Scales reward increases. |
| <code>traits.visibility_need</code> | 1.0 | Scales reward decreases. |
| <code>coupling.reward_buffers_stress_alpha</code> | 0.30 | Share of a stress increase absorbed per unit of reward. |
| <code>coupling.stress_reduces_reward_beta</code> | 0.20 | Share of a reward increase lost per unit of stress. |
| <code>activity_impact.enabled</code> | <code>true</code> | Lets the state slow the agent down. |
| <code>activity_impact.stress_weight</code> | 1.1 | Weight of stress in the burden. |
| <code>activity_impact.reward_weight</code> | 0.35 | Weight of reward in the burden, as a cushion. |
| <code>activity_impact.baseline_buffer</code> | 0.10 | Burden subtracted before anything happens. |
| <code>activity_impact.min_action_multiplier</code> | 0.15 | Floor of the action multiplier. |
| <code>activity_impact.max_skip_probability</code> | 0.65 | Cap of the skip probability. |
| <code>churn.enabled</code> | <code>false</code> | Lets the state make the agent leave. |
| <code>churn.stress_weight</code> | 1.5 | Weight of stress in the churn logit. |
| <code>churn.reward_weight</code> | 1.0 | Weight of reward, lowering the logit. |
| <code>churn.bias</code> | -2.2 | Baseline logit: more negative means rarer churn. |
| <code>churn.temperature</code> | 0.35 | Smaller values make the transition sharper. |
| <code>churn.min_probability</code>, <code>churn.max_probability</code> | 0.0, 0.95 | Bounds of the per-turn probability. |
| <code>events.&lt;family&gt;.&lt;subtype&gt;.stress</code>, <code>.reward</code> | see table above | Base effect of each event. |

## Good to know {#good-to-know}

<div class="am-facts">
<div><h3>It is the recipient who changes</h3><p>The author of a hostile comment is not stressed by writing it. The target of the comment is.</p></div>
<div><h3>It adds LLM calls</h3><p>Each comment and share is annotated by the model once. Reactions need no LLM at all.</p></div>
<div><h3>A coarse signal</h3><p>The weights are simple and tunable, not measured on real users. Use them to compare scenarios, not to predict a person.</p></div>
<div><h3>Compare carefully</h3><p>To see what stress and reward change, run the same experiment with the feature on and off, with the same models and settings.</p></div>
</div>

<div class="cta-buttons">
<a href="{{ site.baseurl }}/agents" class="cta-primary">LLM agents</a>
<a href="{{ site.baseurl }}/parameters" class="cta-secondary">Parameter reference</a>
</div>

</div>

<section class="ys-section ys-left ys-alt">
<div class="ys-wrap">
<span class="ys-kicker">Keep exploring</span>
<h2 class="ys-title" id="next">Where to next</h2>
<ul class="ys-next ys-reveal">
<li><a href="{{ site.baseurl }}/agents"><strong>LLM agents</strong><span>Personas, prompts and special agents.</span></a></li>
<li><a href="{{ site.baseurl }}/opinion_dynamics"><strong>Opinion dynamics</strong><span>Opinions that evolve and shape content.</span></a></li>
<li><a href="{{ site.baseurl }}/agent_memory"><strong>Agent memory</strong><span>Relationships, threads and communities.</span></a></li>
<li><a href="{{ site.baseurl }}/first_simulation"><strong>Your first simulation</strong><span>Create and run an experiment.</span></a></li>
</ul>
</div>
</section>

<script>
(function () {
  "use strict";
  var $ = function (id) { return document.getElementById(id); };
  var clamp01 = function (v) { return Math.max(0, Math.min(1, v)); };
  function css(name, fb) { var v = getComputedStyle(document.documentElement).getPropertyValue(name).trim(); return v || fb; }
  function rng(a) { return function () { a |= 0; a = a + 0x6D2B79F5 | 0; var t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
  function sgn(v, d) { d = d === undefined ? 4 : d; return (v < 0 ? "−" : "+") + Math.abs(v).toFixed(d); }
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- model (mirrors y_client/stress_reward/update_system.py) ---- */
  var EV = {
    "reaction:like": [-0.005, 0.03], "reaction:dislike": [0.05, -0.03],
    "comment:positive": [-0.02, 0.07], "comment:neutral": [0, 0.01], "comment:critical": [0.06, -0.02],
    "comment:hostile": [0.14, -0.07], "comment:supportive": [-0.05, 0.08],
    "share:positive": [-0.01, 0.08], "share:hostile": [0.12, -0.06],
    "report:mass_report": [0.12, -0.05],
    "moderation:protected": [-0.08, 0.03], "moderation:sanctioned": [0.05, -0.06]
  };
  var APPLIES = {
    "reaction:like": ["vol"], "reaction:dislike": ["vol"],
    "comment:hostile": ["dir", "exp"], "comment:critical": ["exp"], "comment:supportive": ["sup"],
    "share:positive": ["exp"], "share:hostile": ["exp"],
    "report:mass_report": ["exp", "vol"], "moderation:protected": ["sup"]
  };
  function delta(key, f, tr, cp, st, rw) {
    var b = EV[key], p = key.split(":"), fam = p[0], sub = p[1], ds = b[0], dr = b[1], L = Math.log(1 + f.vol), o = { s0: ds, r0: dr };
    if (fam === "reaction") { ds *= L; dr *= L; }
    else if (fam === "comment" && sub === "hostile") { ds *= f.dir * f.exp; dr *= f.dir; }
    else if (fam === "comment" && sub === "critical") { ds *= f.exp; dr *= f.exp; }
    else if (fam === "comment" && sub === "supportive") { ds *= f.sup; dr *= f.sup; }
    else if (fam === "share" && sub === "positive") { dr *= f.exp; }
    else if (fam === "share" && sub === "hostile") { ds *= f.exp; }
    else if (fam === "report") { ds *= f.exp * L; dr *= f.exp * L; }
    else if (fam === "moderation" && sub === "protected") { ds *= f.sup; dr *= f.sup; }
    o.s1 = ds; o.r1 = dr;
    ds = ds >= 0 ? ds * tr.sens : ds * Math.max(0.2, tr.res);
    dr = dr >= 0 ? dr * tr.rs : dr * tr.vn;
    o.s2 = ds; o.r2 = dr;
    if (ds > 0) { ds *= Math.max(0, 1 - cp.a * rw); }
    if (dr > 0) { dr *= Math.max(0, 1 - cp.b * st); }
    o.s3 = ds; o.r3 = dr;
    return o;
  }
  var D = { sw: 1.1, rw: 0.35, bb: 0.10, mm: 0.15, ms: 0.65, cb: -2.2, cs: 1.5, cr: 1.0, ct: 0.35, cx: 0.95 };
  var cfg = {}, k;
  for (k in D) { cfg[k] = D[k]; }
  function act(s, r) {
    var burden = clamp01(cfg.sw * s - cfg.rw * r - cfg.bb);
    return { burden: burden, mult: Math.max(cfg.mm, 1 - burden), skip: Math.min(cfg.ms, Math.max(0, burden * 0.85)) };
  }
  function churn(s, r) {
    var z = (cfg.cb + cfg.cs * s - cfg.cr * r) / Math.max(cfg.ct, 1e-6), p = 1 / (1 + Math.exp(-z));
    return Math.max(0, Math.min(cfg.cx, p));
  }

  /* ---- slider factory ---- */
  function mk(box, defs, onchange, store) {
    defs.forEach(function (d) {
      var l = document.createElement("label");
      l.innerHTML = "<span>" + d.l + "</span> <output></output><input type=\"range\">";
      var i = l.querySelector("input"), o = l.querySelector("output"), dp = d.dp === undefined ? 2 : d.dp;
      i.min = d.min; i.max = d.max; i.step = d.step; i.value = d.v; i.id = "sr-" + d.id;
      i.setAttribute("aria-label", d.a || d.id);
      var show = function () { o.textContent = (+i.value).toFixed(dp); };
      i.addEventListener("input", function () { show(); onchange(); });
      show(); box.appendChild(l); store[d.id] = { el: i, lab: l, show: show, def: d.v };
    });
  }
  function val(st, id) { return +st[id].el.value; }

  /* ---- 1. one-event calculator ---- */
  var cc = {};
  var outer = { upd: function () {} };
  try {
    var ev = $("sr-ev");
    if (ev) {
      var T = { min: 0, max: 3, step: 0.05 };
      mk($("sr-c1"), [
        { id: "s", l: "Current stress <i>s</i>", min: 0, max: 1, step: 0.01, v: 0.2, a: "Current stress" },
        { id: "r", l: "Current reward <i>r</i>", min: 0, max: 1, step: 0.01, v: 0.4, a: "Current reward" },
        { id: "sens", l: "Sensitivity", min: 0, max: 3, step: 0.05, v: 1 },
        { id: "res", l: "Resilience", min: 0, max: 3, step: 0.05, v: 1 },
        { id: "rs", l: "Reward sensitivity", min: 0, max: 3, step: 0.05, v: 1 },
        { id: "vn", l: "Visibility need", min: 0, max: 3, step: 0.05, v: 1 }
      ], function () { outer.upd(); }, cc);
      mk($("sr-c2"), [
        { id: "dir", l: "Directness", min: 0, max: 1, step: 0.01, v: 1 },
        { id: "exp", l: "Public exposure", min: 0, max: 1, step: 0.01, v: 1 },
        { id: "sup", l: "Support strength", min: 0, max: 1, step: 0.01, v: 1 },
        { id: "vol", l: "Volume (events)", min: 1, max: 20, step: 1, v: 1, dp: 0 },
        { id: "a", l: "Coupling <i>&alpha;</i>", min: 0, max: 1, step: 0.01, v: 0.3, a: "Coupling alpha" },
        { id: "b", l: "Coupling <i>&beta;</i>", min: 0, max: 1, step: 0.01, v: 0.2, a: "Coupling beta" }
      ], function () { outer.upd(); }, cc);
      var cell = function (id, v) { var e = $(id), b = e.querySelector("b"); (b || e).textContent = sgn(v); };
      outer.upd = function () {
        var key = ev.value, ap = APPLIES[key] || [], st = val(cc, "s"), rw = val(cc, "r");
        ["dir", "exp", "sup", "vol"].forEach(function (f) { var on = ap.indexOf(f) >= 0; cc[f].el.disabled = !on; cc[f].lab.style.opacity = on ? 1 : 0.45; });
        var o = delta(key,
          { dir: val(cc, "dir"), exp: val(cc, "exp"), sup: val(cc, "sup"), vol: val(cc, "vol") },
          { sens: val(cc, "sens"), res: val(cc, "res"), rs: val(cc, "rs"), vn: val(cc, "vn") },
          { a: val(cc, "a"), b: val(cc, "b") }, st, rw);
        ["0", "1", "2", "3"].forEach(function (n) { cell("sr-s" + n, o["s" + n]); cell("sr-r" + n, o["r" + n]); });
        var ns = clamp01(st + o.s3), nr = clamp01(rw + o.r3);
        $("sr-bs-n").style.width = (ns * 100) + "%"; $("sr-bs-o").style.left = (st * 100) + "%";
        $("sr-br-n").style.width = (nr * 100) + "%"; $("sr-br-o").style.left = (rw * 100) + "%";
        $("sr-bs-t").textContent = st.toFixed(2) + " → " + ns.toFixed(2);
        $("sr-br-t").textContent = rw.toFixed(2) + " → " + nr.toFixed(2);
        var a0 = act(st, rw).mult, a1 = act(ns, nr).mult;
        $("sr-out").textContent = "Stress moves by " + sgn(o.s3) + " and reward by " + sgn(o.r3) + ". The activity multiplier goes from " + a0.toFixed(2) + " to " + a1.toFixed(2) + ".";
      };
      ev.addEventListener("change", outer.upd);
      outer.upd();
    }
  } catch (err) { if (window.console) { console.warn("stress calculator:", err); } }

  /* ---- 2. story over time ---- */
  var tt = {}, tl = { upd: function () {} }, map = { upd: function () {} };
  try {
    var cv = $("sr-canvas");
    if (cv) {
      var N = 60, PER = 4, seed = 7, hist = null, shown = N, raf = 0, scen = "mixed";
      var SC = {
        friendly: [["reaction:like", 5], ["comment:positive", 2], ["comment:supportive", 1], ["comment:neutral", 1], ["share:positive", 1], ["reaction:dislike", 0.3], ["comment:critical", 0.3]],
        mixed: [["reaction:like", 3], ["reaction:dislike", 2], ["comment:positive", 1], ["comment:neutral", 1], ["comment:critical", 1.5], ["comment:hostile", 0.7], ["comment:supportive", 0.5], ["share:positive", 0.5], ["share:hostile", 0.3]],
        hostile: [["reaction:dislike", 3], ["comment:hostile", 3], ["comment:critical", 2], ["share:hostile", 1], ["reaction:like", 0.5], ["comment:neutral", 0.5]],
        defended: [["comment:hostile", 2], ["reaction:dislike", 2], ["comment:supportive", 2.5], ["moderation:protected", 1], ["reaction:like", 1.5], ["comment:positive", 1]]
      };
      mk($("sr-t1"), [
        { id: "tsens", l: "Sensitivity", min: 0, max: 3, step: 0.05, v: 1 },
        { id: "tres", l: "Resilience", min: 0, max: 3, step: 0.05, v: 1 },
        { id: "trs", l: "Reward sensitivity", min: 0, max: 3, step: 0.05, v: 1 },
        { id: "tvn", l: "Visibility need", min: 0, max: 3, step: 0.05, v: 1 },
        { id: "ta", l: "Coupling <i>&alpha;</i>", min: 0, max: 1, step: 0.01, v: 0.3, a: "Coupling alpha" },
        { id: "tb", l: "Coupling <i>&beta;</i>", min: 0, max: 1, step: 0.01, v: 0.2, a: "Coupling beta" }
      ], function () { instant(); }, tt);
      var run = function () {
        var r = rng(seed), list = SC[scen], tot = 0, i, t, n, x, pick, key, st = 0, rw = 0, h = { s: [0], r: [0], a: [1], c: [churn(0, 0)] };
        list.forEach(function (e) { tot += e[1]; });
        var tr = { sens: val(tt, "tsens"), res: val(tt, "tres"), rs: val(tt, "trs"), vn: val(tt, "tvn") }, cp = { a: val(tt, "ta"), b: val(tt, "tb") };
        for (t = 1; t <= N; t++) {
          for (n = 0; n < PER; n++) {
            x = r() * tot; pick = list[0];
            for (i = 0; i < list.length; i++) { x -= list[i][1]; if (x <= 0) { pick = list[i]; break; } }
            key = pick[0];
            var dir = 0.6 + 0.4 * r(), sup = (scen === "defended" ? 0.6 : 0.5) + (scen === "defended" ? 0.4 : 0.5) * r();
            var d = delta(key, { dir: dir, exp: key.indexOf("share") === 0 ? Math.max(0.1, dir) : 1, sup: sup, vol: 1 }, tr, cp, st, rw);
            st = clamp01(st + d.s3); rw = clamp01(rw + d.r3);
          }
          h.s.push(st); h.r.push(rw); h.a.push(act(st, rw).mult); h.c.push(churn(st, rw));
        }
        return h;
      };
      var draw = function () {
        var dpr = window.devicePixelRatio || 1, w = cv.clientWidth || 600, hgt = Math.round(w * 0.34);
        cv.style.height = hgt + "px"; cv.width = Math.round(w * dpr); cv.height = Math.round(hgt * dpr);
        var c = cv.getContext("2d"); c.setTransform(dpr, 0, 0, dpr, 0, 0); c.clearRect(0, 0, w, hgt);
        var L = 30, R = 8, Tp = 8, B = 20, pw = w - L - R, ph = hgt - Tp - B, t;
        c.strokeStyle = css("--muted", "#888"); c.globalAlpha = 0.5; c.lineWidth = 1;
        c.beginPath(); c.moveTo(L, Tp); c.lineTo(L, Tp + ph); c.lineTo(L + pw, Tp + ph); c.stroke();
        c.globalAlpha = 1; c.fillStyle = css("--muted", "#888"); c.font = "11px system-ui, sans-serif";
        c.fillText("1", 14, Tp + 8); c.fillText("0", 14, Tp + ph); c.fillText("rounds", L + pw - 36, hgt - 5);
        var line = function (arr, col, dash) {
          c.strokeStyle = col; c.lineWidth = 2; c.lineJoin = "round"; c.setLineDash(dash || []);
          c.beginPath();
          for (t = 0; t <= shown; t++) { var px = L + pw * t / N, py = Tp + ph * (1 - arr[t]); if (t === 0) { c.moveTo(px, py); } else { c.lineTo(px, py); } }
          c.stroke(); c.setLineDash([]);
        };
        line(hist.a, css("--violet", "#8a6cff"), [5, 4]);
        line(hist.r, css("--teal", "#2aa"));
        line(hist.s, css("--orange", "#f80"));
      };
      var summary = function () {
        var s = hist.s[N], r = hist.r[N], mn = Math.min.apply(null, hist.a), pk = Math.max.apply(null, hist.c);
        $("sr-t-out").textContent = "After " + N + " rounds: stress " + s.toFixed(2) + ", reward " + r.toFixed(2) + ". Activity bottoms at " + mn.toFixed(2) + " of normal. Peak churn probability per turn, if enabled: " + (pk * 100).toFixed(1) + "%.";
      };
      var play = function () {
        cancelAnimationFrame(raf); hist = run(); summary();
        if (reduce) { shown = N; draw(); return; }
        shown = 0;
        (function step() { draw(); if (shown < N) { shown++; raf = requestAnimationFrame(step); } })();
      };
      var instant = function () { cancelAnimationFrame(raf); hist = run(); shown = N; summary(); draw(); };
      tl.upd = instant;
      Array.prototype.forEach.call(document.querySelectorAll("#sr-presets button"), function (b) {
        b.addEventListener("click", function () { scen = b.getAttribute("data-s"); play(); });
      });
      $("sr-replay").addEventListener("click", play);
      $("sr-redraw").addEventListener("click", function () { seed = Math.floor(Math.random() * 1e6); play(); });
      window.addEventListener("resize", function () { if (hist) { draw(); } });
      if (window.MutationObserver) { new MutationObserver(function () { if (hist) { draw(); } }).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] }); }
      play();
    }
  } catch (err) { if (window.console) { console.warn("stress story:", err); } }

  /* ---- 3. surface ---- */
  try {
    var mc = $("sr-map");
    if (mc) {
      var metric = "act", pt = { s: 0.5, r: 0.3 }, mm = {};
      var COL = [[30, 41, 90], [42, 170, 170], [255, 200, 92]];
      var color = function (t) {
        t = clamp01(t) * 2; var i = t >= 1 ? 1 : 0, f = t - i, a = COL[i], b = COL[i + 1];
        return "rgb(" + Math.round(a[0] + (b[0] - a[0]) * f) + "," + Math.round(a[1] + (b[1] - a[1]) * f) + "," + Math.round(a[2] + (b[2] - a[2]) * f) + ")";
      };
      var range = function () {
        if (metric === "act") { return [cfg.mm, 1]; }
        if (metric === "skip") { return [0, cfg.ms]; }
        return [0, cfg.cx];
      };
      var at = function (s, r) { return metric === "act" ? act(s, r).mult : metric === "skip" ? act(s, r).skip : churn(s, r); };
      var onm = function () {
        cfg.sw = val(mm, "sw"); cfg.rw = val(mm, "rw"); cfg.bb = val(mm, "bb"); cfg.mm = val(mm, "mm"); cfg.ms = val(mm, "ms");
        cfg.cb = val(mm, "cb"); cfg.cs = val(mm, "cs"); cfg.cr = val(mm, "cr"); cfg.ct = val(mm, "ct"); cfg.cx = val(mm, "cx");
        pt.s = val(mm, "ps"); pt.r = val(mm, "pr");
        mdraw(); tl.upd(); outer.upd();
      };
      mk($("sr-m1"), [
        { id: "ps", l: "Agent stress <i>s</i>", min: 0, max: 1, step: 0.01, v: 0.5, a: "Agent stress" },
        { id: "pr", l: "Agent reward <i>r</i>", min: 0, max: 1, step: 0.01, v: 0.3, a: "Agent reward" },
        { id: "sw", l: "Burden: stress weight", min: 0, max: 3, step: 0.05, v: D.sw },
        { id: "rw", l: "Burden: reward weight", min: 0, max: 2, step: 0.05, v: D.rw },
        { id: "bb", l: "Burden: baseline buffer", min: 0, max: 0.5, step: 0.01, v: D.bb },
        { id: "mm", l: "Min action multiplier", min: 0, max: 1, step: 0.01, v: D.mm },
        { id: "ms", l: "Max skip probability", min: 0, max: 1, step: 0.01, v: D.ms }
      ], onm, mm);
      mk($("sr-m2"), [
        { id: "cb", l: "Churn: bias", min: -6, max: 2, step: 0.1, v: D.cb, dp: 1 },
        { id: "cs", l: "Churn: stress weight", min: 0, max: 4, step: 0.05, v: D.cs },
        { id: "cr", l: "Churn: reward weight", min: 0, max: 4, step: 0.05, v: D.cr },
        { id: "ct", l: "Churn: temperature", min: 0.05, max: 1, step: 0.01, v: D.ct },
        { id: "cx", l: "Churn: max probability", min: 0, max: 1, step: 0.01, v: D.cx }
      ], onm, mm);
      var M = { L: 34, R: 8, T: 8, B: 22 };
      function mdraw() {
        var dpr = window.devicePixelRatio || 1, w = mc.clientWidth || 600, hgt = Math.round(w * 0.36);
        mc.style.height = hgt + "px"; mc.width = Math.round(w * dpr); mc.height = Math.round(hgt * dpr);
        var c = mc.getContext("2d"); c.setTransform(dpr, 0, 0, dpr, 0, 0); c.clearRect(0, 0, w, hgt);
        var pw = w - M.L - M.R, ph = hgt - M.T - M.B, gx = 60, gy = 36, i, j, rg = range(), span = Math.max(rg[1] - rg[0], 1e-9);
        for (i = 0; i < gx; i++) {
          for (j = 0; j < gy; j++) {
            c.fillStyle = color((at((i + 0.5) / gx, 1 - (j + 0.5) / gy) - rg[0]) / span);
            c.fillRect(M.L + pw * i / gx, M.T + ph * j / gy, pw / gx + 0.6, ph / gy + 0.6);
          }
        }
        c.fillStyle = css("--muted", "#888"); c.font = "11px system-ui, sans-serif";
        c.fillText("stress →", M.L + pw - 52, hgt - 6); c.fillText("1", 22, M.T + 9); c.fillText("0", 22, M.T + ph); c.fillText("reward", 0, M.T + ph / 2);
        var px = M.L + pw * pt.s, py = M.T + ph * (1 - pt.r);
        c.beginPath(); c.arc(px, py, 7, 0, 6.2832); c.fillStyle = "#fff"; c.fill(); c.lineWidth = 2.5; c.strokeStyle = "#222"; c.stroke();
        var f = function (v) { return metric === "act" ? v.toFixed(2) : (v * 100).toFixed(metric === "churn" ? 1 : 0) + "%"; };
        $("sr-lo").textContent = f(rg[0]); $("sr-hi").textContent = f(rg[1]);
        var a = act(pt.s, pt.r), p = churn(pt.s, pt.r);
        $("sr-m-out").textContent = "At stress " + pt.s.toFixed(2) + " and reward " + pt.r.toFixed(2) + ": burden " + a.burden.toFixed(2) + ", so the agent acts with multiplier " + a.mult.toFixed(2) + " and skips its turn with probability " + (a.skip * 100).toFixed(0) + "%. Churn probability per turn, if enabled: " + (p * 100).toFixed(1) + "%.";
      }
      map.upd = mdraw;
      var place = function (e) {
        var b = mc.getBoundingClientRect(), pw = b.width - M.L - M.R, ph = b.height - M.T - M.B;
        var s = clamp01((e.clientX - b.left - M.L) / pw), r = clamp01(1 - (e.clientY - b.top - M.T) / ph);
        mm.ps.el.value = s; mm.pr.el.value = r; mm.ps.show(); mm.pr.show(); pt.s = +mm.ps.el.value; pt.r = +mm.pr.el.value; mdraw();
      };
      var down = false;
      mc.addEventListener("pointerdown", function (e) { down = true; place(e); });
      mc.addEventListener("pointermove", function (e) { if (down) { place(e); } });
      window.addEventListener("pointerup", function () { down = false; });
      Array.prototype.forEach.call(document.querySelectorAll("#sr-metrics button"), function (b) {
        b.addEventListener("click", function () { metric = b.getAttribute("data-m"); mdraw(); });
      });
      $("sr-m-reset").addEventListener("click", function () {
        var id; for (id in mm) { mm[id].el.value = mm[id].def; mm[id].show(); }
        onm();
      });
      window.addEventListener("resize", mdraw);
      if (window.MutationObserver) { new MutationObserver(mdraw).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] }); }
      mdraw();
    }
  } catch (err) { if (window.console) { console.warn("stress surface:", err); } }
})();
</script>
