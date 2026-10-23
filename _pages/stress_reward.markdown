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

<p class="ys-lede">Being ignored, insulted or defended is not neutral. With <mark>stress and reward</mark> on, every agent carries <mark>two moods</mark> that move with the feedback it gets, and that decide how much it <mark>takes part</mark>, or whether it <mark>leaves</mark>.</p>

<div class="alert-info-custom"><strong>Optional, and tunable.</strong> The feature is switched on per experiment. Every number on this page is a <strong>default you can change at configuration time</strong>: event weights, coupling and the churn switch from <em>Experiment &rsaquo; Configure Stress / Reward</em> in the admin panel, everything else from the <code>stress_reward</code> block of the client configuration. All parameters are listed in the <a href="{{ site.baseurl }}/parameters#srv-services">parameter reference</a>. See also <a href="{{ site.baseurl }}/agents">LLM agents</a>.</div>

<nav class="od-jump" aria-label="On this page" markdown="0">
<a href="#see-it-in-a-conversation">Conversations</a>
<a href="#the-idea-in-one-picture">The idea</a>
<a href="#what-moves-them">What moves them</a>
<a href="#the-formula">The formula</a>
<a href="#try-one-event">Calculator</a>
<a href="#a-story-over-time">Story</a>
<a href="#what-it-changes">Effects</a>
<a href="#configure-it">Configure</a>
</nav>

## In 60 seconds

<div class="ys-grid four" markdown="0">
<div class="ys-card"><div class="ys-ic o">1</div><h3>Two moods</h3><p><strong>Stress</strong> is the burden of bad interactions. <strong>Reward</strong> is the payoff of good ones. Both run from 0 to 1.</p></div>
<div class="ys-card"><div class="ys-ic t">2</div><h3>Fed by others</h3><p>Likes, dislikes, comments and shares aimed at an agent's posts change <em>its</em> moods, not the author's of the reply.</p></div>
<div class="ys-card"><div class="ys-ic">3</div><h3>Felt differently</h3><p>Sensitive agents suffer more, resilient ones recover more, and reward cushions stress.</p></div>
<div class="ys-card"><div class="ys-ic o">4</div><h3>Visible effects</h3><p>A stressed agent skips turns, acts less, and may churn. All three can be studied round by round.</p></div>
</div>

## See it in a conversation {#see-it-in-a-conversation}

<strong>Maria</strong> posts, other agents answer, and each answer moves her two moods. Pick a thread and step through it, one reply at a time. Values use the default weights.

<div class="od-lab sr-conv" markdown="0">
<div class="od-presets" id="sr-th" role="group" aria-label="Thread">
<button type="button" data-t="warm" class="sr-on">Warm welcome</button>
<button type="button" data-t="pile">Pile-on</button>
<button type="button" data-t="res">Same pile-on, resilient Maria</button>
<button type="button" data-t="def">Hostile, but defended</button>
</div>
<p class="sr-post" id="sr-post"></p>
<div class="am-panel">
<ol class="sr-thread" id="sr-thread" aria-live="polite"></ol>
<div class="am-mock">
<div class="am-mock-h">Maria's state</div>
<div class="am-meter c"><span id="sr-ms-l">Stress</span><div><i id="sr-ms"></i></div></div>
<div class="am-meter"><span id="sr-mr-l">Reward</span><div><i id="sr-mr"></i></div></div>
<p class="am-quote" id="sr-mq"></p>
</div>
</div>
<div class="od-btns"><button type="button" id="sr-next">Next reply</button><button type="button" id="sr-rst">Start over</button></div>
<noscript><p class="am-note">Enable JavaScript to step through the conversations.</p></noscript>
</div>

<p class="am-note">For each reply, an LLM first labels the tone of comments and shares; reactions need no LLM. The numbers under each reply are the change sent to the server. &ldquo;Resilient Maria&rdquo; has sensitivity 0.6, resilience 1.6 and visibility need 0.6.</p>

## The idea in one picture {#the-idea-in-one-picture}

<ol class="am-loop">
<li><h3>Interact</h3><p>An agent reacts to, comments on or shares a post.</p></li>
<li><h3>Read</h3><p>For text, an LLM labels the tone.</p></li>
<li><h3>Weigh</h3><p>The client turns the event into a change in stress and in reward.</p></li>
<li><h3>Store</h3><p>The server records the change for the post's author.</p></li>
<li><h3>Rebuild</h3><p>Before its next turn, the author's state is rebuilt.</p></li>
<li><h3>React</h3><p>It may skip the turn, act less or churn.</p></li>
</ol>

## What moves them {#what-moves-them}

Each kind of event has a base effect on stress and on reward. A negative stress value is a relief. These are defaults: every weight can be edited per experiment (see <a href="#configure-it">Configure it</a>).

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
<details markdown="0"><summary data-excerpt="Sensitivity, resilience, coupling.">Traits and coupling</summary><div class="od-controls sr-two" id="sr-c3"></div></details>
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

Sixty rounds, two interactions per round. Pick a scenario, then tune traits and coupling. The dashed line is the activity multiplier, explained below.

<div class="od-lab" markdown="0">
<div class="od-presets" role="group" aria-label="Scenarios" id="sr-presets">
<button type="button" data-s="friendly">Friendly feed</button>
<button type="button" data-s="mixed">Mixed crowd</button>
<button type="button" data-s="hostile">Hostile thread</button>
<button type="button" data-s="defended">Hostile, but defended</button>
</div>
<canvas id="sr-canvas" class="od-canvas" width="900" height="300" role="img" aria-label="Stress, reward and activity of one agent over 60 rounds"></canvas>
<div class="sr-legend" aria-hidden="true"><span class="s">Stress</span><span class="r">Reward</span><span class="a">Activity multiplier</span></div>
<p class="od-result" id="sr-t-out" aria-live="polite"></p>
<div class="od-btns"><button type="button" id="sr-replay">Replay</button><button type="button" id="sr-redraw">New draw</button></div>
<details markdown="0"><summary data-excerpt="Sensitivity, resilience, coupling.">Temperament and coupling</summary><div class="od-controls sr-two" id="sr-t1"></div></details>
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
<div id="sr-ga"><h4 class="sr-gh">Burden and skipping</h4><div class="od-controls" id="sr-m2"></div></div>
<div id="sr-gc" hidden><h4 class="sr-gh">Churn curve</h4><div class="od-controls" id="sr-m3"></div></div>
</div>
<p class="od-result" id="sr-m-out" aria-live="polite"></p>
<div class="od-btns"><button type="button" id="sr-m-reset">Reset to defaults</button></div>
<noscript><p class="am-note">Enable JavaScript to explore the surface.</p></noscript>
</div>

## Configure it {#configure-it}

Every number on this page is a default. Turn the feature on in the experiment form, then edit event weights, coupling and the churn switch from <em>Experiment &rsaquo; Configure Stress / Reward</em>. Traits, the activity-impact terms and the churn curve live in the <code>stress_reward.system</code> block of the client configuration. Keys you leave out keep their default.

The full list, with ranges and the platforms each one applies to, is in the <a href="{{ site.baseurl }}/parameters#srv-services">parameter reference</a>.

## Good to know {#good-to-know}

<div class="am-facts">
<div><h3>The recipient changes</h3><p>The author of a hostile comment is not stressed by writing it. The target is.</p></div>
<div><h3>It adds LLM calls</h3><p>Each comment and share is annotated once. Reactions need no LLM.</p></div>
<div><h3>A coarse signal</h3><p>Weights are simple and tunable, not measured on real users. Compare scenarios, do not predict people.</p></div>
<div><h3>Compare carefully</h3><p>Run the same experiment with the feature on and off, with the same models and settings.</p></div>
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

  /* ---- conversations ---- */
  try {
    var AVG = { sens: 1, res: 1, rs: 1, vn: 1 }, RES = { sens: 0.6, res: 1.6, rs: 1, vn: 0.6 }, CPL = { a: 0.3, b: 0.2 };
    var BIKE = "I think the new bike lanes downtown are a great idea.";
    var PILE = [
      { w: "Tom", t: "Great for you, maybe. I lost ten minutes a day because of them.", k: "comment:critical", d: 0.7 },
      { w: "Ivo", t: "(dislikes the post)", k: "reaction:dislike" },
      { w: "Dana", t: "Typical. People like you have no idea how the real world works.", k: "comment:hostile", d: 0.9 },
      { w: "Sam", t: "Look at what some people believe. Unreal.", k: "share:hostile", d: 0.8 },
      { w: "Leo", t: "Nobody asked for your opinion.", k: "comment:hostile", d: 0.8 }
    ];
    var TH = {
      warm: { post: "Just moved to Pisa. Any cafe I should not miss?", tr: AVG, msgs: [
        { w: "Anna", t: "Welcome to the neighbourhood! Try the little place behind the station.", k: "comment:positive" },
        { w: "Luca", t: "(likes the post)", k: "reaction:like" },
        { w: "Giulia", t: "Great choice of city. Ask me anything.", k: "comment:supportive", u: 0.6 },
        { w: "Marco", t: "Sharing this so more people can help you out.", k: "share:positive", d: 0.8 },
        { w: "Elena", t: "Which part of town are you in?", k: "comment:neutral" }
      ] },
      pile: { post: BIKE, tr: AVG, msgs: PILE },
      res: { post: BIKE, tr: RES, msgs: PILE },
      def: { post: BIKE, tr: AVG, msgs: [
        { w: "Dana", t: "Typical. People like you have no idea how the real world works.", k: "comment:hostile", d: 0.9 },
        { w: "Ivo", t: "(dislikes the post)", k: "reaction:dislike" },
        { w: "Sara", t: "Ignore that. Maria is right, and the data backs her up.", k: "comment:supportive", u: 0.9 },
        { w: "Leo", t: "Agreed, I use that lane every day.", k: "comment:positive" },
        { w: "Moderator", t: "The hostile comment is removed and its author is warned.", k: "moderation:protected", u: 0.8 }
      ] }
    };
    var tk = "warm", ri = 2;
    var cls = function (v, goodPos) { return Math.abs(v) < 0.0005 ? "" : ((v > 0) === goodPos ? " good" : " bad"); };
    var drawConv = function () {
      var th = TH[tk], st = 0, rw = 0, h = "", i, m, d, o, tone;
      for (i = 0; i < ri; i++) {
        m = th.msgs[i]; d = m.d === undefined ? 1 : m.d;
        o = delta(m.k, { dir: d, exp: m.k.indexOf("share") === 0 ? Math.max(0.1, d) : 1, sup: m.u === undefined ? 1 : m.u, vol: 1 }, th.tr, CPL, st, rw);
        st = clamp01(st + o.s3); rw = clamp01(rw + o.r3);
        tone = m.k.split(":")[1];
        h += "<li class=\"sr-row\"><div class=\"sr-who\"><b>" + m.w + "</b><span>" + m.k.split(":")[0] + " &middot; " + tone + "</span></div><p>" + m.t + "</p><div class=\"sr-dl\"><span class=\"" + cls(o.s3, false).trim() + "\">stress " + sgn(o.s3, 3) + "</span><span class=\"" + cls(o.r3, true).trim() + "\">reward " + sgn(o.r3, 3) + "</span></div></li>";
      }
      $("sr-post").innerHTML = "<b>Maria posts:</b> &ldquo;" + th.post + "&rdquo;";
      $("sr-thread").innerHTML = h;
      $("sr-ms").style.width = (st * 100) + "%"; $("sr-mr").style.width = (rw * 100) + "%";
      $("sr-ms-l").textContent = "Stress " + st.toFixed(2); $("sr-mr-l").textContent = "Reward " + rw.toFixed(2);
      var a = act(st, rw);
      $("sr-mq").textContent = ri === 0 ? "Nothing has happened yet." : "Maria acts at " + Math.round(a.mult * 100) + "% of her usual pace and skips " + Math.round(a.skip * 100) + "% of her turns.";
      $("sr-next").disabled = ri >= th.msgs.length;
    };
    if ($("sr-th")) {
      Array.prototype.forEach.call($("sr-th").querySelectorAll("button"), function (b) {
        b.addEventListener("click", function () {
          tk = b.getAttribute("data-t"); ri = 2;
          Array.prototype.forEach.call($("sr-th").querySelectorAll("button"), function (x) { x.classList.toggle("sr-on", x === b); });
          drawConv();
        });
      });
      $("sr-next").addEventListener("click", function () { if (ri < TH[tk].msgs.length) { ri++; drawConv(); } });
      $("sr-rst").addEventListener("click", function () { ri = 0; drawConv(); });
      drawConv();
    }
  } catch (err) { if (window.console) { console.warn("stress conversations:", err); } }

  /* ---- 1. one-event calculator ---- */
  var cc = {};
  var outer = { upd: function () {} };
  try {
    var ev = $("sr-ev");
    if (ev) {
            mk($("sr-c1"), [
        { id: "s", l: "Current stress <i>s</i>", min: 0, max: 1, step: 0.01, v: 0.2, a: "Current stress" },
        { id: "r", l: "Current reward <i>r</i>", min: 0, max: 1, step: 0.01, v: 0.4, a: "Current reward" }
      ], function () { outer.upd(); }, cc);
      mk($("sr-c2"), [
        { id: "dir", l: "Directness", min: 0, max: 1, step: 0.01, v: 1 },
        { id: "exp", l: "Public exposure", min: 0, max: 1, step: 0.01, v: 1 },
        { id: "sup", l: "Support strength", min: 0, max: 1, step: 0.01, v: 1 },
        { id: "vol", l: "Volume (events)", min: 1, max: 20, step: 1, v: 1, dp: 0 }
      ], function () { outer.upd(); }, cc);
      mk($("sr-c3"), [
        { id: "sens", l: "Sensitivity", min: 0, max: 3, step: 0.05, v: 1 },
        { id: "res", l: "Resilience", min: 0, max: 3, step: 0.05, v: 1 },
        { id: "rs", l: "Reward sensitivity", min: 0, max: 3, step: 0.05, v: 1 },
        { id: "vn", l: "Visibility need", min: 0, max: 3, step: 0.05, v: 1 },
        { id: "a", l: "Coupling <i>&alpha;</i>", min: 0, max: 1, step: 0.01, v: 0.3, a: "Coupling alpha" },
        { id: "b", l: "Coupling <i>&beta;</i>", min: 0, max: 1, step: 0.01, v: 0.2, a: "Coupling beta" }
      ], function () { outer.upd(); }, cc);
      var cell = function (id, v) { var e = $(id), b = e.querySelector("b"); (b || e).textContent = sgn(v); };
      outer.upd = function () {
        var key = ev.value, ap = APPLIES[key] || [], st = val(cc, "s"), rw = val(cc, "r");
        ["dir", "exp", "sup", "vol"].forEach(function (f) { var on = ap.indexOf(f) >= 0; cc[f].lab.hidden = !on; });
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
      var N = 60, PER = 2, seed = 7, hist = null, shown = N, raf = 0, scen = "mixed";
      var SC = {
        friendly: [["reaction:like", 5], ["comment:positive", 2], ["comment:supportive", 1], ["comment:neutral", 1], ["share:positive", 1], ["reaction:dislike", 0.3], ["comment:critical", 0.3]],
        mixed: [["reaction:like", 4], ["reaction:dislike", 1], ["comment:positive", 1.5], ["comment:neutral", 1.5], ["comment:critical", 1], ["comment:hostile", 0.4], ["comment:supportive", 0.5], ["share:positive", 0.5], ["share:hostile", 0.1]],
        hostile: [["reaction:dislike", 3], ["comment:hostile", 3], ["comment:critical", 2], ["share:hostile", 1], ["reaction:like", 0.5], ["comment:neutral", 0.5]],
        defended: [["comment:hostile", 2.5], ["reaction:dislike", 1.5], ["comment:supportive", 2], ["moderation:protected", 1], ["reaction:like", 1.5], ["comment:positive", 1]]
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
        { id: "pr", l: "Agent reward <i>r</i>", min: 0, max: 1, step: 0.01, v: 0.3, a: "Agent reward" }
      ], onm, mm);
      mk($("sr-m2"), [
        { id: "sw", l: "Stress weight", min: 0, max: 3, step: 0.05, v: D.sw },
        { id: "rw", l: "Reward weight", min: 0, max: 2, step: 0.05, v: D.rw },
        { id: "bb", l: "Baseline buffer", min: 0, max: 0.5, step: 0.01, v: D.bb },
        { id: "mm", l: "Min action multiplier", min: 0, max: 1, step: 0.01, v: D.mm },
        { id: "ms", l: "Max skip probability", min: 0, max: 1, step: 0.01, v: D.ms }
      ], onm, mm);
      mk($("sr-m3"), [
        { id: "cb", l: "Bias", min: -6, max: 2, step: 0.1, v: D.cb, dp: 1 },
        { id: "cs", l: "Stress weight", min: 0, max: 4, step: 0.05, v: D.cs },
        { id: "cr", l: "Reward weight", min: 0, max: 4, step: 0.05, v: D.cr },
        { id: "ct", l: "Temperature", min: 0.05, max: 1, step: 0.01, v: D.ct },
        { id: "cx", l: "Max probability", min: 0, max: 1, step: 0.01, v: D.cx }
      ], onm, mm);
      var M = { L: 34, R: 8, T: 8, B: 22 };
      function mdraw() {
        var dpr = window.devicePixelRatio || 1, w = mc.clientWidth || 600, hgt = Math.round(w * 0.36);
        mc.style.height = hgt + "px"; mc.width = Math.round(w * dpr); mc.height = Math.round(hgt * dpr);
        var c = mc.getContext("2d"); c.setTransform(dpr, 0, 0, dpr, 0, 0); c.clearRect(0, 0, w, hgt);
        var pw = w - M.L - M.R, ph = hgt - M.T - M.B, gx = 140, gy = 70, i, j, rg = range(), span = Math.max(rg[1] - rg[0], 1e-9);
        var off = document.createElement("canvas"); off.width = gx; off.height = gy;
        var oc = off.getContext("2d"), img = oc.createImageData(gx, gy), q = 0, t2, cs;
        for (j = 0; j < gy; j++) {
          for (i = 0; i < gx; i++) {
            t2 = clamp01((at((i + 0.5) / gx, 1 - (j + 0.5) / gy) - rg[0]) / span) * 2; cs = t2 >= 1 ? 1 : 0;
            var f2 = t2 - cs, A = COL[cs], B2 = COL[cs + 1];
            img.data[q++] = A[0] + (B2[0] - A[0]) * f2; img.data[q++] = A[1] + (B2[1] - A[1]) * f2; img.data[q++] = A[2] + (B2[2] - A[2]) * f2; img.data[q++] = 255;
          }
        }
        oc.putImageData(img, 0, 0); c.imageSmoothingEnabled = true; c.imageSmoothingQuality = "high";
        c.drawImage(off, M.L, M.T, pw, ph);
        c.fillStyle = css("--muted", "#888"); c.font = "11px system-ui, sans-serif";
        c.fillText("stress →", M.L + pw - 52, hgt - 6); c.fillText("1", 24, M.T + 9); c.fillText("0", 24, M.T + ph); c.save(); c.translate(11, M.T + ph / 2 + 18); c.rotate(-Math.PI / 2); c.fillText("reward \u2192", 0, 0); c.restore();
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
      var mark2 = function () { Array.prototype.forEach.call(document.querySelectorAll("#sr-metrics button"), function (x) { x.classList.toggle("sr-on", x.getAttribute("data-m") === metric); }); };
      var down = false;
      mc.addEventListener("pointerdown", function (e) { down = true; place(e); });
      mc.addEventListener("pointermove", function (e) { if (down) { place(e); } });
      window.addEventListener("pointerup", function () { down = false; });
      Array.prototype.forEach.call(document.querySelectorAll("#sr-metrics button"), function (b) {
        b.addEventListener("click", function () { metric = b.getAttribute("data-m"); $("sr-ga").hidden = metric === "churn"; $("sr-gc").hidden = metric !== "churn"; mark2(); mdraw(); });
      });
      $("sr-m-reset").addEventListener("click", function () {
        var id; for (id in mm) { mm[id].el.value = mm[id].def; mm[id].show(); }
        onm();
      });
      window.addEventListener("resize", mdraw);
      if (window.MutationObserver) { new MutationObserver(mdraw).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] }); }
      mark2(); mdraw();
    }
  } catch (err) { if (window.console) { console.warn("stress surface:", err); } }
})();
</script>
