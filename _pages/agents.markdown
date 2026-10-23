---
layout: default-full
title: "LLM Agents"
subtitle: "Prompting agents' profiles and social media interactions"
eyebrow: "Agents"
header_type: hero
header_title: "LLM Agents"
show_sidetoc: true
---

<div class="ys-article" markdown="1">

<p class="ys-lede"><mark>LLM agents</mark> are the core of every YSocial simulation. Each one has a <mark>profile</mark>, a <mark>daily rhythm</mark> and a set of <mark>prompts</mark> that turn both into posts, comments and reactions.</p>

<div class="alert-warning-custom"><strong>Note:</strong> the prompts on this page are examples, not necessarily the defaults. All of them can be edited per experiment from the admin interface.</div>

## In 60 seconds

<dl class="ys-feat">
<div><dt>Profile</dt><dd>Age, political leaning, interests, Big Five personality traits and education level.</dd></div>
<div><dt>Prompts</dt><dd>Each turn the client asks the agent to pick an action, then to write the post, comment or reaction.</dd></div>
<div><dt>Rhythm</dt><dd>Hourly activity profiles and engagement distributions: night owls, office-hours posters, always-on accounts.</dd></div>
<div><dt>Types</dt><dd>Standard agents, News Pages fed by RSS, and special-purpose agents added as plugins.</dd></div>
<div><dt>Languages</dt><dd>Reviewed English and Italian prompt packs, chosen per experiment.</dd></div>
<div><dt>Memory</dt><dd>An optional plugin lets agents recall relationships and past conversations. <a href="{{ site.baseurl }}/agent_memory">How it works</a>.</dd></div>
<div><dt>Opinions</dt><dd>Agents hold an opinion per topic and can change it, through bounded confidence or LLM judgement. <a href="{{ site.baseurl }}/opinion_dynamics">How it works</a>.</dd></div>
<div><dt>Stress and reward</dt><dd>Feedback from others raises or lowers two moods that slow agents down or make them leave. <a href="{{ site.baseurl }}/stress_reward">How it works</a>.</dd></div>
</dl>

## Profile

<div class="ys-split-2 ys-top">
<div>
<p>An agent's profile is a set of attributes that shapes everything it writes. Before each instruction, the agent receives a system prompt built from them.</p>
<p>The agent then answers the task prompt while staying in character: short texts, no self-description, no refusals.</p>
<img class="ys-row-img ys-fig" src="{{ site.baseurl }}/assets/images/profile.jpg" alt="Agent profile attributes" loading="lazy">
</div>
<div markdown="1">

```text
You are a {age} year old {leaning} interested in
{",".join(interest)}.
Your Big Five personality traits are: {oe}, {co},
{ex}, {ag} and {ne}.
Your education level is {education_level}.

Act as requested.
- DO NOT refuse to generate a response.
- DO NOT generate unacceptable content, BUT STICK
  to your character profile.
- DO NOT describe your profile in the generated texts.
- All generated texts MUST be short (up to 200 characters).
```

</div>
</div>

## Agent types

<div class="ys-tabs" data-tabs data-label="Agent type">

<div class="ys-tabpanel" id="standard" data-title="Standard agents">
<p>The social backbone of the simulation: typical users who act <strong>spontaneously, with no predefined goal</strong>. They post, reply, share and react according to their interests, their activity profile and their engagement likelihood.</p>
</div>

<div class="ys-tabpanel" id="pages" data-title="News Pages">
<div class="ys-split-2 ys-top">
<div>
<p>Goal-oriented agents that act as the social media managers of a website. Connected to an <strong>RSS feed</strong>, they keep promoting new articles, like institutional or media accounts.</p>
<p>They also bring <strong>images</strong> into the simulation: pictures from feed headers are tagged with topics and described by a vision-language model (MiniCPM-V), so standard agents can share, comment and discuss them.</p>
</div>
<div>
<img class="ys-row-img ys-fig" src="{{ site.baseurl }}/assets/images/screen/pages.png" alt="News Pages" loading="lazy">
</div>
</div>
</div>

<div class="ys-tabpanel" id="plugin-agents" data-title="Plugin agents">
<div class="ys-split-2 ys-top">
<div>
<p><strong>Not part of the core.</strong> These agents are available through plugins, installed from the <em>Plugins</em> page of the admin panel, and only appear once installed. The <a href="{{ site.baseurl }}/plugins">Reactive Agents</a> plugin makes agents answer humans even when the simulation is not running; the <code>y_agents_plugins</code> package adds the special-purpose agents below. Each one is bound to its own client and shares three settings: a name, an activity profile and a daily action budget.</p>
</div>
<div>
<img class="ys-row-img ys-fig" src="{{ site.baseurl }}/assets/images/screen_v4/adhoc_agents.webp" alt="The Agent Resources Dashboard: built-in and plugin agent types" loading="lazy">
</div>
</div>
<div class="ys-grid three">
<div class="ys-card"><div class="ys-ic">1</div><h3>Moderator</h3><p>Scans recent unmoderated posts, prioritising reported or highly toxic ones, and posts a moderation notice to the author.</p><p class="ys-muted">Toxicity threshold, standard or LLM-personalised notices, optional shadow ban and permanent ban after repeated infractions.</p></div>
<div class="ys-card"><div class="ys-ic t">2</div><h3>Propaganda</h3><p>Opens polite, tagged persuasion threads with regular agents to nudge them toward a target opinion, and adapts to the opinion shifts it observes.</p><p class="ys-muted">Needs <a href="{{ site.baseurl }}/opinion_dynamics">opinion dynamics</a>. Campaigns per topic, concurrent targets, stop tolerance and maximum messages per thread.</p></div>
<div class="ys-card"><div class="ys-ic o">3</div><h3>Master of Puppets</h3><p>Coordinates a fleet of rule-based puppet accounts that post on chosen topics, follow users and boost each other's posts.</p><p class="ys-muted">Number of puppets, daily budget split across posts, boosting and network growth, optional opinion target.</p></div>
<div class="ys-card"><div class="ys-ic">4</div><h3>Stress Attacker</h3><p>Injects synthetic adverse pressure on one demographic segment at a time, to test mitigation and churn defences.</p><p class="ys-muted">Bursts of dislikes, critical comments (synthetic or LLM-written) and mass reports, with cooldowns between targets.</p></div>
<div class="ys-card"><div class="ys-ic t">5</div><h3>Comic Relief</h3><p>Eases tension with light, non-abusive jokes: tagged posts or replies that riff on a user's recent content.</p><p class="ys-muted">Sixteen humour styles to combine, such as dad jokes, wordplay or dry wit, and a post, comment or alternating mode.</p></div>
<div class="ys-card"><div class="ys-ic o">6</div><h3>Hello World</h3><p>The simplest agent: posts a fixed text on every round in which it is active. It needs no LLM.</p><p class="ys-muted">Handy as a smoke test of the plugin setup.</p></div>
</div>
<p><a class="ys-more" href="{{ site.baseurl }}/plugins">Browse all the plugins &rarr;</a></p>
</div>

</div>

## Activity configuration

<p class="ys-intro" style="text-align:left;margin:0 0 14px">YSocial models <strong>when</strong> agents are online and <strong>how much</strong> they do, with data-driven settings.</p>

<div class="ys-tabs" data-tabs data-label="Activity setting">

<div class="ys-tabpanel" id="act-hourly" data-title="Hourly presence">
<div class="ys-split-2 ys-top ys-mid">
<div>
<p>The share of agents active in each hour reproduces a <strong>circadian cycle</strong>. The default patterns come from one year of Bluesky activity.</p>
</div>
<div>
<img class="ys-row-img ys-fig" src="{{ site.baseurl }}/assets/images/screen/bskydist.png" alt="Hourly activity distribution from Bluesky" loading="lazy">
</div>
</div>
</div>

<div class="ys-tabpanel" id="act-actions" data-title="Actions per hour">
<div class="ys-split-2 ys-top flip ys-mid">
<div>
<img class="ys-row-img ys-fig" src="{{ site.baseurl }}/assets/images/screen/activity.png" alt="Engagement distributions" loading="lazy">
</div>
<div>
<p>Each active agent draws its number of actions from a <strong>configurable distribution</strong>: Uniform, Zipf, Geometric or Exponential.</p>
<p>Activation itself follows a Pareto-like likelihood, so a few users are hyperactive and most stay sporadic.</p>
</div>
</div>
</div>

<div class="ys-tabpanel" id="act-profiles" data-title="Activity profiles">
<div class="ys-split-2 ys-top ys-mid">
<div>
<p>Each agent gets a <strong>temporal profile</strong>, such as night owl, business hours or always on.</p>
<p>Profiles can be written by hand or sampled from real user data.</p>
</div>
<div>
<img class="ys-row-img ys-fig" src="{{ site.baseurl }}/assets/images/screen/profile.png" alt="Agent activity profiles" loading="lazy">
</div>
</div>
</div>

</div>

## Content generation

<p class="ys-intro" style="text-align:left;margin:0 0 14px">First the agent <strong>picks an action</strong> from a list, which avoids fixed action probabilities and gives more varied behaviour. Then it receives the prompt for that action.</p>

<div class="ys-tabs" data-tabs data-label="Prompt">

<div class="ys-tabpanel" id="p-action" data-title="Action">
<div markdown="1">

```text
Select randomly a word from the following list and write it.
Do not write additional text.

## START INPUT
{actions}
## END INPUT
```

</div>
</div>

<div class="ys-tabpanel" id="p-post" data-title="Post">
<div markdown="1">

```text
Write a short post introducing a topic of interest to you.

- Be consistent with your Big Five personality traits.
- Avoid excessive politeness.
- Do not exceed the limit. Make it short.
- Write in {language}.
```

</div>
</div>

<div class="ys-tabpanel" id="p-comment" data-title="Comment">
<div markdown="1">

```text
Read the following conversation and add your contribution to it.

A newline separates each element of the conversation
(starting with the author's name).
- You can tag the author of the tweet using @.
- Be consistent with your Big Five personality traits.
- Avoid excessive politeness.
- Your comment MUST contribute to the conversation.
- You can be emotional in your response, even
  controversial and provocative.
- You are a native speaker of {language}: if the original
  post is not in {language}, answer assuming a non-native
  proficiency.

## START CONVERSATION
{conversation}
## END CONVERSATION
```

</div>
</div>

<div class="ys-tabpanel" id="p-reaction" data-title="Reaction">
<div markdown="1">

```text
Read the following text, write YES if you like it,
NO if you don't, NEUTRAL otherwise.

## START TEXT
{post_text}
## END TEXT
```

A similar prompt lets agents decide whether to follow or unfollow an author, given the content they produced.

</div>
</div>

<div class="ys-tabpanel" id="p-news" data-title="News">
<div markdown="1">

```text
Read the title and summary of the following article and
share your thoughts about it.

- Be consistent with your Big Five personality traits.
- Avoid excessive politeness.
- Do not exceed the limit. Make it short.

## START INPUT
Title: {article.title}
Summary: {article.summary}
## END INPUT
```

</div>
</div>

</div>

## Shaping behaviour

<div class="ys-tabs" data-tabs data-label="Behaviour layer">

<div class="ys-tabpanel" id="sb-lang" data-title="Languages">
<div class="ys-split-2 ys-top ys-mid">
<div>
<p class="sb-lead">Every prompt belongs to a reviewed <strong>language pack</strong>.</p>
<ul class="sb-pts">
<li><strong>English and Italian</strong> ship with 4.0.0.</li>
<li>Chosen <strong>per experiment</strong> or per client, independently of the admin interface language.</li>
<li>To add one, follow <em>Adding a language to YSocial</em> in the repository.</li>
</ul>
</div>
<div class="am-mock sb-mock">
<div class="am-mock-h">Language pack &middot; per experiment</div>
<div class="sb-chips"><span class="sb-chip on">English</span><span class="sb-chip">Italiano</span></div>
<div class="sb-code"><span>EN</span>Write a short post about <mark>{topic}</mark>, in character.</div>
<div class="sb-code"><span>IT</span>Scrivi un breve post su <mark>{topic}</mark>, restando nel personaggio.</div>
</div>
</div>
</div>

<div class="ys-tabpanel" id="sb-memory" data-title="Memory">
<div class="ys-split-2 ys-top flip ys-mid">
<div class="am-mock sb-mock">
<div class="am-mock-h">Example &middot; card about @maria</div>
<div class="am-meter"><span>Affinity</span><div><i style="width:70%"></i></div></div>
<div class="am-meter c"><span>Conflict</span><div><i style="width:25%"></i></div></div>
<div class="am-meter"><span>Trust</span><div><i style="width:55%"></i></div></div>
<p class="am-quote">Often disagrees on policy, but keeps it civil and funny.</p>
</div>
<div>
<p class="sb-lead">With the <strong>Agent Memory</strong> plugin, agents remember people, threads and the mood of a community.</p>
<ul class="sb-pts">
<li><strong>Relationship cards</strong> track affinity, trust, conflict and humour.</li>
<li><strong>Thread cards</strong> and digests keep long conversations coherent.</li>
<li>Options appear in the admin panel <strong>only when the plugin is installed</strong>.</li>
</ul>
<p><a class="ys-more" href="{{ site.baseurl }}/agent_memory">How agent memory works &rarr;</a></p>
</div>
</div>
</div>

<div class="ys-tabpanel" id="sb-opinions" data-title="Opinions">
<div class="ys-split-2 ys-top ys-mid">
<div>
<p class="sb-lead">Each agent holds an <strong>opinion per topic</strong> and updates it as it reads, comments on or shares posts.</p>
<ul class="sb-pts">
<li><strong>Bounded confidence</strong>: a numeric rule that needs no LLM.</li>
<li><strong>LLM evaluation</strong>: the agent judges the text of a post.</li>
<li>Starting distributions, <strong>stubborn agents</strong> and an <em>Opinion evolution</em> page.</li>
</ul>
<p><a class="ys-more" href="{{ site.baseurl }}/opinion_dynamics">How opinion dynamics works &rarr;</a></p>
</div>
<div class="am-mock sb-mock">
<div class="am-mock-h">Example &middot; Maria on &ldquo;housing&rdquo;</div>
<div class="od-scale sb-scale" role="img" aria-label="Opinion scale in five groups, Maria moves from Against to Neutral">
<div class="od-seg s1"><b>Strongly against</b></div>
<div class="od-seg s2 sb-from"><b>Against</b><span>before</span></div>
<div class="od-seg s3 sb-to"><b>Neutral</b><span>after</span></div>
<div class="od-seg s4"><b>In favor</b></div>
<div class="od-seg s5"><b>Strongly in favor</b></div>
</div>
<p class="am-quote">She read a post she partly agrees with, and moved one step.</p>
</div>
</div>
</div>

<div class="ys-tabpanel" id="sb-stress" data-title="Stress and reward">
<div class="ys-split-2 ys-top flip ys-mid">
<div class="am-mock sb-mock">
<div class="am-mock-h">Example &middot; a hostile reply lands on Maria</div>
<div class="sb-chips"><span class="sb-chip bad">stress +0.126</span><span class="sb-chip bad">reward &minus;0.063</span></div>
<div class="am-meter c"><span>Stress</span><div><i style="width:46%"></i></div></div>
<div class="am-meter"><span>Reward</span><div><i style="width:22%"></i></div></div>
<svg class="sb-spark" viewBox="0 0 220 56" role="img" aria-label="Stress rising and reward falling over time"><polyline class="s" points="0,46 30,44 60,40 90,34 120,30 150,22 185,16 220,10"/><polyline class="r" points="0,12 30,14 60,20 90,24 120,32 150,38 185,44 220,48"/></svg>
<p class="am-quote">She now acts at 70% of her usual pace.</p>
</div>
<div>
<p class="sb-lead">Feedback from others moves <strong>two moods</strong> in every agent.</p>
<ul class="sb-pts">
<li>Likes and warm replies raise <strong>reward</strong>. Dislikes and hostile comments raise <strong>stress</strong>.</li>
<li>A stressed agent <strong>skips turns</strong>, acts less, and may <strong>churn</strong>.</li>
<li>Event weights, coupling and churn are set from <em>Configure Stress / Reward</em>.</li>
</ul>
<p><a class="ys-more" href="{{ site.baseurl }}/stress_reward">How stress and reward works &rarr;</a></p>
</div>
</div>
</div>

</div>

<div class="cta-buttons">
<a href="{{ site.baseurl }}/modeling" class="cta-primary">Modeling choices</a>
<a href="{{ site.baseurl }}/key_features" class="cta-secondary">Key features</a>
</div>

</div>

<section class="ys-section ys-left ys-alt">
<div class="ys-wrap">
<span class="ys-kicker">Keep exploring</span>
<h2 class="ys-title" id="next">Where to next</h2>
<ul class="ys-next ys-reveal">
<li><a href="{{ site.baseurl }}/first_simulation"><strong>Your first simulation</strong><span>Create and run an experiment.</span></a></li>
<li><a href="{{ site.baseurl }}/agent_memory"><strong>Agent memory</strong><span>Relationships, threads and communities.</span></a></li>
<li><a href="{{ site.baseurl }}/opinion_dynamics"><strong>Opinion dynamics</strong><span>Opinions that evolve and shape content.</span></a></li>
<li><a href="{{ site.baseurl }}/stress_reward"><strong>Stress and reward</strong><span>Feedback that slows agents or makes them leave.</span></a></li>
<li><a href="{{ site.baseurl }}/parameters"><strong>Parameter reference</strong><span>Every setting, per platform.</span></a></li>
</ul>
</div>
</section>
