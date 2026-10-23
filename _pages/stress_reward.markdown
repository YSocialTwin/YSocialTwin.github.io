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

<div class="alert-info-custom"><strong>Optional, and tunable.</strong> The feature is switched on per experiment. Every number on this page is a <strong>default you can change at configuration time</strong>: event weights, coupling and the churn switch from <em>Experiment &rsaquo; Configure Stress / Reward</em> in the admin panel, everything else from the <code>stress_reward</code> block of the client configuration. See <a href="#all-parameters">All parameters</a> and <a href="{{ site.baseurl }}/agents">LLM agents</a>.</div>

<nav class="od-jump" aria-label="On this page" markdown="0">
<a href="#see-it-in-a-conversation">Conversations</a>
<a href="#the-idea-in-one-picture">The idea</a>
<a href="#event-weights">Event weights</a>
<a href="#the-formula">The formula</a>
<a href="#try-one-event">Calculator</a>
<a href="#a-story-over-time">Story</a>
<a href="#what-it-changes">Effects</a>
<a href="#all-parameters">Parameters</a>
</nav>

## In 60 seconds

<div class="ys-grid four" markdown="0">
<div class="ys-card"><div class="ys-ic o">1</div><h3>Two moods</h3><p><strong>Stress</strong> is the burden of bad interactions. <strong>Reward</strong> is the payoff of good ones. Both run from 0 to 1.</p></div>
<div class="ys-card"><div class="ys-ic t">2</div><h3>Fed by others</h3><p>Likes, dislikes, comments and shares aimed at an agent's posts change <em>its</em> moods, not the author's of the reply.</p></div>
<div class="ys-card"><div class="ys-ic">3</div><h3>Felt differently</h3><p>Sensitive agents suffer more, resilient ones recover more, and reward cushions stress.</p></div>
<div class="ys-card"><div class="ys-ic o">4</div><h3>Visible effects</h3><p>A stressed agent skips turns, acts less, and may churn. All three can be studied round by round.</p></div>
</div>

## See it in a conversation {#see-it-in-a-conversation}

Meet <strong>Maria</strong>. Other agents react to her posts, and every reply moves her stress and reward. Choose who she is, then replay a thread or build your own.

<div class="od-lab" markdown="0">
<div class="sr-prof"><span>Maria is</span>
<div class="od-presets" id="sr-prof" role="group" aria-label="Maria's temperament">
<button type="button" data-p="avg" class="sr-on">Average</button>
<button type="button" data-p="sens">Sensitive</button>
<button type="button" data-p="res">Resilient</button>
</div>
<em id="sr-prof-t"></em></div>
<div class="ys-tabs" data-tabs data-label="Conversation mode">
<div class="ys-tabpanel" id="sr-tab-replay" data-title="Replay a thread">
<div class="od-presets" id="sr-th" role="group" aria-label="Thread">
<button type="button" data-t="warm" class="sr-on">Warm welcome</button>
<button type="button" data-t="pile">Pile-on</button>
<button type="button" data-t="def">Hostile, but defended</button>
</div>
<div class="sr-dlg"><div class="sr-mood" id="sr-m-a"></div><div class="sr-chat" id="sr-chat-a" aria-live="polite"></div></div>
<div class="od-btns"><button type="button" id="sr-next">Next reply</button><button type="button" id="sr-rst">Start over</button></div>
</div>
<div class="ys-tabpanel" id="sr-tab-pick" data-title="Choose the replies">
<p class="sr-hint">Tap replies to add them to the thread, in any order. Try ten friendly ones, then one hostile one, then the other way round.</p>
<div class="sr-bank" id="sr-bank"></div>
<div class="sr-dlg"><div class="sr-mood" id="sr-m-b"></div><div class="sr-chat" id="sr-chat-b" aria-live="polite"></div></div>
<div class="od-btns"><button type="button" id="sr-pk-rst">Clear the thread</button></div>
</div>
</div>
<noscript><p class="am-note">Enable JavaScript to run the conversations.</p></noscript>
</div>

<p class="am-note">The chips show what the client works out for each reply: for comments and shares an LLM first reads the tone, for reactions no LLM is needed. Values use the default weights.</p>

## The idea in one picture {#the-idea-in-one-picture}

<ol class="am-loop">
<li><h3>Interact</h3><p>An agent reacts to, comments on or shares a post.</p></li>
<li><h3>Read</h3><p>For text, an LLM labels the tone.</p></li>
<li><h3>Weigh</h3><p>The client turns the event into a change in stress and in reward.</p></li>
<li><h3>Store</h3><p>The server records the change for the post's author.</p></li>
<li><h3>Rebuild</h3><p>Before its next turn, the author's state is rebuilt.</p></li>
<li><h3>React</h3><p>It may skip the turn, act less or churn.</p></li>
</ol>

For text, the model returns three fields, using the prompts <code>agent_comment_stress_reward_annotation</code> and <code>agent_post_stress_reward_annotation</code>. It is told to be conservative when unsure, and the server never does this step.

<div class="od-dist-grid" markdown="0">
<div class="od-dist"><b>tone</b><span>positive, neutral, critical, hostile or supportive. Shares: positive or hostile.</span></div>
<div class="od-dist"><b>directness</b><span>0 not aimed at the recipient, 1 explicitly aimed.</span></div>
<div class="od-dist"><b>support strength</b><span>0 none, 1 strong, explicit support.</span></div>
</div>

## Event weights {#event-weights}

Each event has a base push on stress and on reward. <span class="sr-key bad">Red</span> hurts, <span class="sr-key good">green</span> helps: a negative stress is a relief. Defaults shown, <strong>all editable</strong>. The admin page calls reward <em>Recognition</em>.

<div class="sr-evgrid" markdown="0">
<div class="sr-ev"><h3>Reactions</h3><div class="sr-evhd"><span></span><span>Stress</span><span>Reward</span></div>
<div class="sr-evrow"><span>like</span><span class="sr-v good">&minus;0.005</span><span class="sr-v good">+0.030</span></div>
<div class="sr-evrow"><span>dislike</span><span class="sr-v bad">+0.050</span><span class="sr-v bad">&minus;0.030</span></div>
<p class="sr-evft">&times; ln(1 + volume)</p></div>
<div class="sr-ev"><h3>Comments</h3><div class="sr-evhd"><span></span><span>Stress</span><span>Reward</span></div>
<div class="sr-evrow"><span>positive</span><span class="sr-v good">&minus;0.020</span><span class="sr-v good">+0.070</span></div>
<div class="sr-evrow"><span>neutral</span><span class="sr-v">0.000</span><span class="sr-v good">+0.010</span></div>
<div class="sr-evrow"><span>critical</span><span class="sr-v bad">+0.060</span><span class="sr-v bad">&minus;0.020</span></div>
<div class="sr-evrow"><span>hostile</span><span class="sr-v bad">+0.140</span><span class="sr-v bad">&minus;0.070</span></div>
<div class="sr-evrow"><span>supportive</span><span class="sr-v good">&minus;0.050</span><span class="sr-v good">+0.080</span></div>
<p class="sr-evft">hostile &times; directness &middot; supportive &times; support strength</p></div>
<div class="sr-ev"><h3>Shares</h3><div class="sr-evhd"><span></span><span>Stress</span><span>Reward</span></div>
<div class="sr-evrow"><span>positive</span><span class="sr-v good">&minus;0.010</span><span class="sr-v good">+0.080</span></div>
<div class="sr-evrow"><span>hostile</span><span class="sr-v bad">+0.120</span><span class="sr-v bad">&minus;0.060</span></div>
<p class="sr-evft">&times; public exposure, the annotated directness (at least 0.1)</p></div>
<div class="sr-ev"><h3>Moderation and reports</h3><div class="sr-evhd"><span></span><span>Stress</span><span>Reward</span></div>
<div class="sr-evrow"><span>protected</span><span class="sr-v good">&minus;0.080</span><span class="sr-v good">+0.030</span></div>
<div class="sr-evrow"><span>sanctioned</span><span class="sr-v bad">+0.050</span><span class="sr-v bad">&minus;0.060</span></div>
<div class="sr-evrow"><span>mass report</span><span class="sr-v bad">+0.120</span><span class="sr-v bad">&minus;0.050</span></div>
<p class="sr-evft">protected &times; support strength &middot; reports &times; exposure</p></div>
</div>

<details markdown="0"><summary data-excerpt="Factors per event, in one table.">Exactly how each event is scaled</summary>
<div class="ys-table-wrap ys-no-wrap"><table>
<thead><tr><th>Event</th><th>Stress is multiplied by</th><th>Reward is multiplied by</th></tr></thead>
<tbody>
<tr><td>Reaction</td><td>ln(1 + volume)</td><td>source status &times; relation weight &times; ln(1 + volume)</td></tr>
<tr><td>Comment &middot; hostile</td><td>directness &times; exposure &times; status &times; relation</td><td>directness</td></tr>
<tr><td>Comment &middot; critical</td><td>exposure &times; status &times; relation</td><td>exposure</td></tr>
<tr><td>Comment &middot; supportive</td><td>support strength</td><td>support strength</td></tr>
<tr><td>Share &middot; positive</td><td>1</td><td>exposure</td></tr>
<tr><td>Share &middot; hostile</td><td>exposure &times; status &times; relation</td><td>1</td></tr>
<tr><td>Report</td><td>exposure &times; ln(1 + volume)</td><td>exposure &times; ln(1 + volume)</td></tr>
<tr><td>Moderation &middot; protected</td><td>support strength</td><td>support strength</td></tr>
</tbody></table></div>
<p class="am-note">Every base value is also multiplied by <code>importance</code> (1). The stock client sends one event at a time (volume 1, so a reaction is scaled by ln 2 &asymp; 0.69), keeps importance, status and relation at 1, and uses the annotated directness as exposure for shares and 1 for comments. Reactions, comments and shares are emitted by the stock client; reports and moderation outcomes are defined in the model for scenarios that use them.</p>
</details>

## The formula {#the-formula}

<div class="ys-grid four" markdown="0">
<div class="ys-card"><div class="ys-ic">1</div><h3>Scale</h3><p>Base weight times the event factors: directness, exposure, support, volume.</p></div>
<div class="ys-card"><div class="ys-ic t">2</div><h3>Personalise</h3><p>The recipient's four traits amplify or soften the change.</p></div>
<div class="ys-card"><div class="ys-ic o">3</div><h3>Couple</h3><p>Reward absorbs a stress increase. Stress eats into a reward increase.</p></div>
<div class="ys-card"><div class="ys-ic">4</div><h3>Store</h3><p>Both results are saved as variations for the recipient.</p></div>
</div>

<div class="sr-traits" markdown="0">
<div><b>sensitivity</b><span>more stress from bad events</span></div>
<div><b>resilience</b><span>more relief from good ones (at least 0.2)</span></div>
<div><b>reward_sensitivity</b><span>more joy from positive attention</span></div>
<div><b>visibility_need</b><span>a bigger loss when attention turns negative</span></div>
</div>

Coupling acts only on <em>increases</em>, with &alpha; and &beta; as the two coupling weights:

<div class="ys-formula" markdown="0"><pre><code>if  &Delta;stress &gt; 0 :   &Delta;stress &times;= max(0, 1 &minus; &alpha; &middot; reward)      &alpha; = 0.30
if  &Delta;reward &gt; 0 :   &Delta;reward &times;= max(0, 1 &minus; &beta; &middot; stress)      &beta; = 0.20</code></pre></div>

<div class="alert-info-custom"><strong>Worked example.</strong> A fully directed hostile comment lands on a calm agent (stress 0.20, reward 0.40, traits at 1). Stress: 0.14 &times; buffer (1 &minus; 0.30 &times; 0.40 = 0.88) = <strong>+0.123</strong>. Reward: &minus;0.07, a decrease, so no coupling: <strong>&minus;0.070</strong>. A like on the same agent gives about <strong>&minus;0.0035</strong> stress and <strong>+0.020</strong> reward.</div>

### From variations to a state

<div class="ys-split-2 ys-top" markdown="0">
<div><p>The server logs every variation. When an agent is about to act, its state is the <strong>last saved aggregate plus all variations since</strong>, clamped to 0&ndash;1.</p><div class="ys-formula"><pre><code>state = clamp&#8320;&#8321;( last_aggregate + &Sigma; variations )</code></pre></div></div>
<div><p><strong>No built-in decay</strong>: the state moves only when something happens. <code>backward_rounds</code> (24) matters just for the first rebuild, when no aggregate exists. The server rejects variations outside &minus;1 and +1.</p></div>
</div>

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

## All parameters {#all-parameters}

One row per group, with defaults. <strong>Everything is configurable</strong>; any key you leave out keeps its default and nested blocks are merged. <span class="sr-where e">Experiment</span> is the experiment form, <span class="sr-where a">Admin</span> is <em>Experiment &rsaquo; Configure Stress / Reward</em>, <span class="sr-where c">Config</span> is the client configuration file (reports have no form field).

<div class="ys-table-wrap ys-no-wrap sr-params" markdown="0"><table>
<thead><tr><th>Key</th><th>Default</th><th>What it does</th><th>Set in</th></tr></thead>
<tbody>
<tr class="sr-grp"><td colspan="4">Switches &middot; <code>stress_reward</code></td></tr>
<tr><td><code>enabled</code></td><td>off</td><td>Master switch for the whole feature.</td><td><span class="sr-where e">Experiment</span></td></tr>
<tr><td><code>backward_rounds</code></td><td>24</td><td>Rounds the first state rebuild looks back.</td><td><span class="sr-where c">Config</span></td></tr>
<tr class="sr-grp"><td colspan="4">Recipient &middot; <code>system.traits</code></td></tr>
<tr><td><code>sensitivity</code> &middot; <code>resilience</code> &middot; <code>reward_sensitivity</code> &middot; <code>visibility_need</code></td><td>1.0 each</td><td>Multipliers on stress increases, stress relief, reward increases and reward losses.</td><td><span class="sr-where c">Config</span></td></tr>
<tr class="sr-grp"><td colspan="4">Coupling &middot; <code>system.coupling</code></td></tr>
<tr><td><code>reward_buffers_stress_alpha</code> &middot; <code>stress_reduces_reward_beta</code></td><td>0.30 &middot; 0.20</td><td>&alpha;: share of a stress increase absorbed per unit of reward. &beta;: share of a reward increase lost per unit of stress.</td><td><span class="sr-where a">Admin</span></td></tr>
<tr class="sr-grp"><td colspan="4">Events &middot; <code>system.events.&lt;family&gt;.&lt;subtype&gt;</code></td></tr>
<tr><td><code>stress</code> &middot; <code>reward</code></td><td>see Event weights</td><td>Base push of each event.</td><td><span class="sr-where a">Admin</span> <span class="sr-where c">Config</span></td></tr>
<tr class="sr-grp"><td colspan="4">Activity &middot; <code>system.activity_impact</code></td></tr>
<tr><td><code>enabled</code></td><td>on</td><td>Lets the state slow the agent down.</td><td><span class="sr-where c">Config</span></td></tr>
<tr><td><code>stress_weight</code> &middot; <code>reward_weight</code> &middot; <code>baseline_buffer</code></td><td>1.1 &middot; 0.35 &middot; 0.10</td><td>Terms of the burden.</td><td><span class="sr-where c">Config</span></td></tr>
<tr><td><code>min_action_multiplier</code> &middot; <code>max_skip_probability</code></td><td>0.15 &middot; 0.65</td><td>Floor of the multiplier and cap of the skip probability.</td><td><span class="sr-where c">Config</span></td></tr>
<tr class="sr-grp"><td colspan="4">Churn &middot; <code>system.churn</code></td></tr>
<tr><td><code>enabled</code></td><td>off</td><td>Lets the state make the agent leave.</td><td><span class="sr-where a">Admin</span></td></tr>
<tr><td><code>stress_weight</code> &middot; <code>reward_weight</code> &middot; <code>bias</code> &middot; <code>temperature</code></td><td>1.5 &middot; 1.0 &middot; &minus;2.2 &middot; 0.35</td><td>Shape of the churn curve: weights, baseline and sharpness.</td><td><span class="sr-where c">Config</span></td></tr>
<tr><td><code>min_probability</code> &middot; <code>max_probability</code></td><td>0 &middot; 0.95</td><td>Bounds of the per-turn probability.</td><td><span class="sr-where c">Config</span></td></tr>
</tbody></table></div>

<details markdown="0"><summary data-excerpt="A configuration snippet.">Example: a harsher, thinner-skinned world</summary>
<pre class="sr-json"><code>{
  "stress_reward": {
    "enabled": true,
    "backward_rounds": 24,
    "system": {
      "traits":  { "sensitivity": 1.4 },
      "coupling": { "reward_buffers_stress_alpha": 0.4 },
      "events":  { "comment": { "hostile": { "stress": 0.20, "reward": -0.10 } } },
      "activity_impact": { "max_skip_probability": 0.5 },
      "churn":   { "enabled": true, "bias": -1.8 }
    }
  }
}</code></pre>
</details>

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
    var PROF = { avg: { sens: 1, res: 1, rs: 1, vn: 1 }, sens: { sens: 1.8, res: 0.6, rs: 1, vn: 1.6 }, res: { sens: 0.6, res: 1.6, rs: 1, vn: 0.6 } };
    var PROF_T = { avg: "Default traits: everything at 1.", sens: "Sensitivity 1.8, resilience 0.6, visibility need 1.6: feels bad moments more, recovers less.", res: "Sensitivity 0.6, resilience 1.6, visibility need 0.6: shrugs off bad moments, recovers fast." };
    var prof = "avg", CPL = { a: 0.3, b: 0.2 };
    var POST = { warm: "Just moved to Pisa. Any cafe I should not miss?", pile: "I think the new bike lanes downtown are a great idea.", def: "I think the new bike lanes downtown are a great idea." };
    var TH = {
      warm: [
        { w: "Anna", t: "Welcome to the neighbourhood! Try the little place behind the station.", k: "comment:positive" },
        { w: "Luca", k: "reaction:like" },
        { w: "Giulia", t: "Great pick of city. Ask me anything, I have lived here for years.", k: "comment:supportive", u: 0.6 },
        { w: "Marco", t: "Sharing this so more people can help you out.", k: "share:positive", d: 0.8 },
        { w: "Elena", t: "Which part of town are you in?", k: "comment:neutral" }
      ],
      pile: [
        { w: "Tom", t: "Great for you, maybe. I lost ten minutes a day because of them.", k: "comment:critical", d: 0.7 },
        { w: "Ivo", k: "reaction:dislike" },
        { w: "Dana", t: "Typical. People like you have no idea how the real world works.", k: "comment:hostile", d: 0.9 },
        { w: "Sam", t: "Look at what some people believe. Unreal.", k: "share:hostile", d: 0.8 },
        { w: "Ivo", k: "reaction:dislike" },
        { w: "Leo", t: "Nobody asked for your opinion.", k: "comment:hostile", d: 0.8 }
      ],
      def: [
        { w: "Dana", t: "Typical. People like you have no idea how the real world works.", k: "comment:hostile", d: 0.9 },
        { w: "Ivo", k: "reaction:dislike" },
        { w: "Sara", t: "Ignore that. Maria is right, and the data backs her up.", k: "comment:supportive", u: 0.9 },
        { w: "Leo", t: "Agreed, I use that lane every day.", k: "comment:positive" },
        { w: "Moderator", t: "The hostile comment is removed and its author is warned.", k: "moderation:protected", u: 0.8 },
        { w: "Tom", k: "reaction:like" }
      ]
    };
    var BANK = [
      { w: "Tom", t: "I disagree: the lanes cost us parking spots.", k: "comment:critical", d: 0.7, c: "crit" },
      { w: "Dana", t: "You clearly have no clue.", k: "comment:hostile", d: 0.9, c: "bad" },
      { w: "Anna", t: "Totally with you, I cycle to work.", k: "comment:positive", c: "good" },
      { w: "Elena", t: "Which streets do you mean?", k: "comment:neutral", c: "neu" },
      { w: "Sara", t: "Do not listen to the haters, you are right.", k: "comment:supportive", u: 0.8, c: "good" },
      { w: "Luca", k: "reaction:like", c: "good" },
      { w: "Ivo", k: "reaction:dislike", c: "bad" },
      { w: "Sam", t: "Look at this nonsense.", k: "share:hostile", d: 0.8, c: "bad" },
      { w: "Marco", t: "Smart take, worth reading.", k: "share:positive", d: 0.8, c: "good" }
    ];
    var evalSeq = function (msgs) {
      var st = 0, rw = 0, out = [], i, m, d, o;
      for (i = 0; i < msgs.length; i++) {
        m = msgs[i]; d = m.d === undefined ? 1 : m.d;
        o = delta(m.k, { dir: d, exp: m.k.indexOf("share") === 0 ? Math.max(0.1, d) : 1, sup: m.u === undefined ? 1 : m.u, vol: 1 }, PROF[prof], CPL, st, rw);
        st = clamp01(st + o.s3); rw = clamp01(rw + o.r3);
        out.push({ s: o.s3, r: o.r3 });
      }
      return { st: st, rw: rw, steps: out };
    };
    var lerp = function (a, b, t) { return Math.round(a + (b - a) * t); };
    var label = function (st, rw) { return st >= 0.6 ? "Overwhelmed" : st >= 0.3 ? "Strained" : rw >= 0.5 ? "Thriving" : "Calm"; };
    var moodHtml = function (st, rw) {
      var a = act(st, rw), t = clamp01(st * 1.4), c1 = lerp(95, 255, t) + "," + lerp(192, 138, t) + "," + lerp(207, 92, t);
      return "<div class=\"sr-avatar\" style=\"--c:rgb(" + c1 + ");--g:" + (6 + rw * 18).toFixed(0) + "px\">M</div>" +
        "<div class=\"sr-name\">Maria</div><div class=\"sr-state\" style=\"color:rgb(" + c1 + ")\">" + label(st, rw) + "</div>" +
        "<div class=\"sr-g c\"><span>Stress</span><div><i style=\"width:" + (st * 100) + "%\"></i></div><b>" + st.toFixed(2) + "</b></div>" +
        "<div class=\"sr-g\"><span>Reward</span><div><i style=\"width:" + (rw * 100) + "%\"></i></div><b>" + rw.toFixed(2) + "</b></div>" +
        "<p class=\"sr-act\">Acts at <b>" + Math.round(a.mult * 100) + "%</b> of her usual pace, skips <b>" + Math.round(a.skip * 100) + "%</b> of turns.</p>";
    };
    var chipHtml = function (m, s) {
      var p = m.k.split(":"), fam = p[0], sub = p[1], lab;
      if (fam === "reaction") { lab = "reaction: " + sub + " (no LLM)"; }
      else if (fam === "moderation") { lab = "moderation: " + sub; }
      else {
        lab = "LLM reads: " + sub;
        if (m.d !== undefined && (sub === "hostile" || fam === "share")) { lab += " &middot; directness " + m.d.toFixed(1); }
        if (m.u !== undefined) { lab += " &middot; support " + m.u.toFixed(1); }
      }
      var cls = function (v, goodPos) { return Math.abs(v) < 0.0005 ? "" : ((v > 0) === goodPos ? " good" : " bad"); };
      return "<div class=\"sr-chips\"><span class=\"sr-chip\">" + lab + "</span><span class=\"sr-chip" + cls(s.s, false) + "\">Stress " + sgn(s.s, 3) + "</span><span class=\"sr-chip" + cls(s.r, true) + "\">Reward " + sgn(s.r, 3) + "</span></div>";
    };
    var chatHtml = function (post, msgs, steps) {
      var h = "<div class=\"sr-msg me\"><b class=\"sr-who\">Maria</b><p>" + post + "</p></div>", i, m, txt;
      for (i = 0; i < msgs.length; i++) {
        m = msgs[i]; txt = m.t || (m.k === "reaction:like" ? "Liked the post." : "Disliked the post.");
        h += "<div class=\"sr-msg\"><b class=\"sr-who\">" + m.w + "</b><p" + (m.t ? "" : " class=\"sr-dim\"") + ">" + txt + "</p>" + chipHtml(m, steps[i]) + "</div>";
      }
      return h;
    };
    var tk = "warm", ri = 0, picks = [];
    var drawA = function () {
      var msgs = TH[tk].slice(0, ri), e = evalSeq(msgs);
      $("sr-m-a").innerHTML = moodHtml(e.st, e.rw);
      $("sr-chat-a").innerHTML = chatHtml(POST[tk], msgs, e.steps);
      $("sr-next").disabled = ri >= TH[tk].length;
    };
    var drawB = function () {
      var msgs = picks.map(function (i) { return BANK[i]; }), e = evalSeq(msgs);
      $("sr-m-b").innerHTML = moodHtml(e.st, e.rw);
      $("sr-chat-b").innerHTML = chatHtml(POST.def, msgs, e.steps);
      Array.prototype.forEach.call($("sr-bank").children, function (b, i) { b.disabled = picks.indexOf(i) >= 0; });
    };
    var bank = $("sr-bank");
    if (bank) {
      BANK.forEach(function (m, i) {
        var b = document.createElement("button"); b.type = "button"; b.className = "sr-pill " + m.c;
        b.innerHTML = "<b>" + m.w + "</b> " + (m.t ? m.t : (m.k === "reaction:like" ? "Like" : "Dislike"));
        b.addEventListener("click", function () { picks.push(i); drawB(); });
        bank.appendChild(b);
      });
      var mark = function (box, attr, v) { Array.prototype.forEach.call(box.querySelectorAll("button"), function (b) { b.classList.toggle("sr-on", b.getAttribute(attr) === v); }); };
      Array.prototype.forEach.call($("sr-prof").querySelectorAll("button"), function (b) {
        b.addEventListener("click", function () { prof = b.getAttribute("data-p"); mark($("sr-prof"), "data-p", prof); $("sr-prof-t").textContent = PROF_T[prof]; drawA(); drawB(); });
      });
      Array.prototype.forEach.call($("sr-th").querySelectorAll("button"), function (b) {
        b.addEventListener("click", function () { tk = b.getAttribute("data-t"); ri = 0; mark($("sr-th"), "data-t", tk); drawA(); });
      });
      $("sr-next").addEventListener("click", function () { if (ri < TH[tk].length) { ri++; drawA(); } });
      $("sr-rst").addEventListener("click", function () { ri = 0; drawA(); });
      $("sr-pk-rst").addEventListener("click", function () { picks = []; drawB(); });
      $("sr-prof-t").textContent = PROF_T.avg;
      ri = 2; drawA(); drawB();
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
