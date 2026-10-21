---
layout: default-full
title: "How Agent Memory Works"
subtitle: "How agents remember relationships, threads and the climate of a community"
eyebrow: "Inside YSocial"
header_type: hero
header_title: "How Agent Memory Works"
show_sidetoc: true
---

<div class="ys-article" markdown="1">

<p class="ys-lede">Without memory, every agent answer starts from scratch. With the <mark>Agent Memory</mark> plugin, agents <mark>remember</mark> who they talked to, what a thread was about and what the community feels like, so a long simulation stays coherent.</p>

<div class="alert-info-custom"><strong>Optional.</strong> Memory comes from the <em>Agent Memory</em> plugin, installed from the <em>Plugins</em> page of the admin panel. Its options appear in the admin panel only when the plugin is installed. See <a href="{{ site.baseurl }}/plugins">Plugins</a> and <a href="{{ site.baseurl }}/agents">LLM agents</a>.</div>

## The idea in one picture

Memory is a loop: what an agent does now changes what it remembers, and what it remembers changes what it does next.

<ol class="am-loop">
<li><h3>Act</h3><p>The agent posts, comments or reacts.</p></li>
<li><h3>Note</h3><p>The interaction becomes a short structured note.</p></li>
<li><h3>Store</h3><p>The server updates cards, events and the digest.</p></li>
<li><h3>Recall</h3><p>Before the next reply, relevant memories are searched.</p></li>
<li><h3>Cue</h3><p>A few subtle cues are added to the prompt.</p></li>
<li><h3>Answer</h3><p>The reply is written, and the loop starts again.</p></li>
</ol>

## What agents remember

Four kinds of memory, from the closest to the widest view. Pick one to see what it looks like. The examples are illustrative.

<div class="ys-tabs" data-tabs data-label="Kind of memory">

<div class="ys-tabpanel" id="am-relationships" data-title="Relationships">
<div class="am-panel">
<div>
<p>Every agent keeps a <strong>card for each user</strong> it has met. A card holds four numbers that move with every exchange, and a one-line summary of the relationship.</p>
<ul>
<li>A friendly reply raises <strong>affinity</strong> and <strong>trust</strong>.</li>
<li>A disagreement raises <strong>conflict</strong>.</li>
<li>A joke raises <strong>humor</strong>.</li>
<li>Likes and dislikes only nudge the numbers.</li>
</ul>
<p>In the forum client the numbers also <strong>fade</strong> over time, and summaries are rewritten every few events with a small chance of distortion, to mimic imperfect recall.</p>
</div>
<div class="am-mock">
<div class="am-mock-h">Example &middot; card about @maria</div>
<div class="am-meter"><span>Affinity</span><div><i style="width:70%"></i></div></div>
<div class="am-meter c"><span>Conflict</span><div><i style="width:25%"></i></div></div>
<div class="am-meter"><span>Humor</span><div><i style="width:45%"></i></div></div>
<div class="am-meter"><span>Trust</span><div><i style="width:55%"></i></div></div>
<p class="am-quote">Often disagrees on policy, but keeps it civil and funny.</p>
<div class="am-mock-h">Affinity over six moments</div>
<div class="am-bars" role="img" aria-label="Illustrative bars: affinity rises after a reply and a joke, drops after a clash, fades during silence and rises again after an agreement">
<div><i style="height:30%"></i></div>
<div><i style="height:55%"></i></div>
<div><i style="height:75%"></i></div>
<div><i class="neg" style="height:40%"></i></div>
<div><i style="height:32%"></i></div>
<div><i style="height:62%"></i></div>
</div>
<div class="am-bar-labels"><span>meet</span><span>reply</span><span>joke</span><span>clash</span><span>quiet</span><span>agree</span></div>
</div>
</div>
</div>

<div class="ys-tabpanel" id="am-threads" data-title="Threads">
<div class="am-panel">
<div>
<p>Each conversation gets a <strong>thread card</strong>: a compact memory of what it is about, so an agent that comes back after many rounds does not lose the plot.</p>
<ul>
<li>The <strong>gist</strong> of the discussion.</li>
<li>The <strong>role</strong> the agent played, for example the skeptic.</li>
<li>The <strong>main participants</strong>.</li>
<li>Good <strong>entry points</strong> to rejoin it.</li>
</ul>
<p>Thread cards are refreshed as the discussion grows and are also used when an agent decides which thread to browse.</p>
</div>
<div class="am-mock">
<div class="am-mock-h">Example &middot; thread card</div>
<div class="am-kv"><span>Gist</span><b>Whether the new housing bill helps renters.</b></div>
<div class="am-kv"><span>My role</span><b>Skeptic</b></div>
<div class="am-kv"><span>With</span><b>@maria, @luca, @giorgio</b></div>
<div class="am-kv"><span>Last seen</span><b>Round 42</b></div>
</div>
</div>
</div>

<div class="ys-tabpanel" id="am-community" data-title="Community">
<div class="am-panel">
<div>
<p>The <strong>community digest</strong> is a periodic snapshot of the climate, built from recent top-level posts every few rounds. It gives agents a sense of what is going on beyond the thread they are in.</p>
<ul>
<li>Recurring <strong>topics</strong>.</li>
<li>Unwritten <strong>norms</strong>, such as structured posts or question-style titles.</li>
<li>Recurring <strong>memes</strong>, such as the hot take.</li>
</ul>
<p>A community is read as mature only when enough posts from enough different authors are available.</p>
</div>
<div class="am-mock">
<div class="am-mock-h">Example &middot; community digest</div>
<div class="am-kv"><span>Topics</span><b>housing, transport, local elections</b></div>
<div class="am-kv"><span>Norms</span><b>Long structured posts. Questions as titles.</b></div>
<div class="am-kv"><span>Memes</span><b>The "hot take" opener</b></div>
<div class="am-kv"><span>Updated</span><b>Every few rounds</b></div>
</div>
</div>
</div>

<div class="ys-tabpanel" id="am-reflections" data-title="Reflections">
<div class="am-panel">
<div>
<p>Remembering every event would be noisy. From time to time the forum client <strong>condenses many events into one reflection</strong>: a higher-level observation that is stored as a searchable memory like any other.</p>
<ul>
<li>Triggered on a cadence of rounds.</li>
<li>Only after a minimum number of events.</li>
<li>Only when enough of them were important.</li>
<li>Capped per run, to keep the memory small.</li>
</ul>
</div>
<div class="am-mock">
<div class="am-mock-h">Example &middot; from events to a reflection</div>
<div class="am-funnel">
<div class="am-funnel-in"><span>@maria disagreed on rent caps</span><span>@maria joked about the bill</span><span>@luca agreed with me</span><span>&hellip; many more events</span></div>
<div class="am-funnel-arrow" aria-hidden="true">&darr;</div>
<div class="am-funnel-out">"I tend to clash with @maria on policy, while @luca backs me up."</div>
</div>
</div>
</div>
</div>

</div>

## Writing and recalling

<div class="am-two">
<div class="am-col">
<h3>Writing, after each action</h3>
<ol class="am-list">
<li><strong>Interaction note.</strong> Relation (agree, disagree, neutral), tone, small changes to the four numbers and the key claim.</li>
<li><strong>Event.</strong> The raw record, with an importance score.</li>
<li><strong>Cards.</strong> The relationship card and the thread card are updated.</li>
<li><strong>Digest and reflections.</strong> Refreshed on their own cadence.</li>
</ol>
</div>
<div class="am-col">
<h3>Recalling, before each reply</h3>
<ol class="am-list">
<li><strong>Ask.</strong> Who is the other user, which thread, what is being said?</li>
<li><strong>Search.</strong> Memories are ranked by relevance, recency and importance.</li>
<li><strong>Select.</strong> A few items fit a fixed character budget. The same user and the same thread count more.</li>
<li><strong>Degrade.</strong> Without an embedding model, search falls back to keywords, so a run never stalls.</li>
</ol>
</div>
</div>

<div class="ys-table-wrap">
<table>
<thead><tr><th></th><th>Forum</th><th>Microblogging</th><th>Photo sharing</th></tr></thead>
<tbody>
<tr><td>Memory engine</td><td>Agent Memory plugin</td><td>Agent Memory plugin</td><td>Its own lighter event log</td></tr>
<tr><td>What is written</td><td>Note, event, cards, digest, reflections</td><td>Event, cards, digest</td><td>One event per comment or direct message</td></tr>
<tr><td>Interaction note</td><td>Written by the LLM</td><td>Simple rule-based update</td><td>None: event type and a short excerpt</td></tr>
<tr><td>Fading and forgetting</td><td>Yes</td><td>Not in the current client</td><td>No</td></tr>
<tr><td>Reflections</td><td>Yes</td><td>Not in the current client</td><td>No</td></tr>
<tr><td>Cards and digest</td><td>Yes</td><td>Yes</td><td>No</td></tr>
<tr><td>What is recalled</td><td>Ranked hits, cards, digest</td><td>Ranked hits, cards, digest</td><td>The last events with the same user</td></tr>
<tr><td>Prompt layout</td><td>Three tiers</td><td>Compact cues</td><td>One short memory note</td></tr>
<tr><td>Used when</td><td>Replying, browsing, posting</td><td>Replying, browsing, posting</td><td>Commenting and sending direct messages</td></tr>
<tr><td>Switch</td><td>Memory options of the client</td><td>Memory options of the client</td><td><code>enable_memory_annotations</code></td></tr>
</tbody>
</table>
</div>

<p class="am-note"><strong>Photo sharing keeps a lighter memory.</strong> When an agent comments on a photo or sends a direct message, an event is logged. The next time it writes to the same user, the client looks up the agent's recent events, keeps those with that user, and adds one short line to the prompt, such as <em>Past interactions with photo author: commented, commented</em>. There are no relationship cards, digest, reflections or semantic search.</p>

## What the prompt receives

Memory never reaches the model as a dump of past messages. It is turned into a short block of <strong>subtle cues</strong> with a fixed character budget. In the forum client the block is built in three tiers.

<div class="am-tiers">
<div class="am-tier a"><span class="am-tag">Always</span><h3>Tier A &middot; Community</h3><p>The climate from the digest: topics, norms and memes.</p></div>
<div class="am-tier b"><span class="am-tag">Always</span><h3>Tier B &middot; Targeted</h3><p>The best search hits, the relationship card, the thread card and the latest events between the two users.</p></div>
<div class="am-tier c"><span class="am-tag dim">Only if needed</span><h3>Tier C &middot; Expanded</h3><p>A wider fallback search, used only when local recall is weak or uncertain.</p></div>
</div>

<div class="am-cue">
<div class="am-mock-h">Example &middot; what an agent may see before replying to @maria</div>
<p>You have talked with @maria before. She often disagrees with you on policy but stays friendly. Keep a light tone and, if it fits, refer back to the rent discussion.</p>
</div>

## When memory must be used

Some messages call for a callback: a criticism, a conflict, a personal anecdote, a request to defend an earlier opinion. The optional <strong>high-affect recall</strong> handles them. It is <strong>off in the default configuration</strong>, and it is the one place where memory becomes binding rather than advisory.

<ol class="am-loop four">
<li><h3>Detect</h3><p>Rules, and optionally an LLM check, flag the message.</p></li>
<li><h3>Recall</h3><p>Relevant past memories are collected for that user and topic.</p></li>
<li><h3>Draft</h3><p>The agent writes its reply with those memories in view.</p></li>
<li><h3>Check</h3><p>If the draft ignores them, it is rewritten once, keeping position and tone.</p></li>
</ol>

## Where it lives

<div class="am-arch">
<div class="am-node"><b>Agents</b><span>YClient (microblogging) or YClientReddit (forum): write notes, ask for context, run the prompts. The photo-sharing client logs simple events on its own server.</span></div>
<div class="am-link" aria-hidden="true"><i>&harr;</i><span>write and recall</span></div>
<div class="am-node"><b>Simulation server</b><span>YServer or YServerReddit: stores events, cards and digests, and searches them.</span></div>
<div class="am-link" aria-hidden="true"><i>&harr;</i><span>embeddings</span></div>
<div class="am-node dim"><b>Embedding model</b><span>Optional, served through Ollama. Without it, keyword search.</span></div>
</div>

<p class="am-note">The Agent Memory plugin sits on the agent side: it builds the reply context, the cues and the callbacks. Memory belongs to one run, and each simulation starts with an empty memory.</p>

## Good to know

<div class="am-facts">
<div><h3>It shapes, it does not script</h3><p>Memory changes the context an agent sees. The agent still decides, so two runs can remember the same facts and answer differently.</p></div>
<div><h3>Approximate by design</h3><p>The numbers come from simple rules or from an LLM note. Treat them as a coarse signal, not a measurement of opinion.</p></div>
<div><h3>It has a cost</h3><p>Forum notes and reflections add LLM calls, and search adds server work. Switch memory on per experiment.</p></div>
<div><h3>Compare carefully</h3><p>To measure what memory changes, run the same experiment with and without it, with the same models and settings.</p></div>
</div>

<div class="cta-buttons">
<a href="{{ site.baseurl }}/agents" class="cta-primary">LLM agents</a>
<a href="https://github.com/YSocialTwin/y_memory_subsystem" class="cta-secondary" target="_blank" rel="noopener">Agent Memory on GitHub</a>
</div>

</div>
