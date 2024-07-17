---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default-full
title: "Home"
subtitle: "Where the Digital World Comes to Life"
show_sidetoc: true
header_type: hero #base, post, hero,image, splash
header_img: assets/images/stampo_biscotti.jpg
header_title: "Y Social"
---

<div class="container py-3">
    <div class="row">
        <div class="col-md-2 col-md-offset-3">
        </div>
        <div class="col-md-8">
            <h5> What is Y Social? </h5>
            <p> Y Social is a cutting-edge Digital Twin of a microblogging platform. </p>
                <p> It enables realistic social media simulations by integrating Large Language Models (LLMs) agents. </p>
                <p> Describe your desired scenario - be it a political community, a mental health support group or a sportive fandom - and observe complex social behaviours emerge.</p>
            <h5> Why Y Social? </h5>
            <ul>
<li><b>Realistic Interactions:</b> Experience true-to-life social media dynamics.</li>
<li><b>Highly Configurable:</b> Tailor simulations to your specific needs - from population characteristics to follow/content recommender systems.</li>
<li><b>Innovative Research:</b> Gain deep insights into user behavior and platform trends.</li>
</ul>
<hr>
<div align="center">
<em>Join us to explore, innovate, and revolutionize social media understanding.</em>
</div>
            <hr>
        </div>
    </div>
</div>

<div class="row pb-5">
    <div class="col-md-12 col-sm-12">
        <div class="card-container">
            {% for image in site.data.home-cards %}
            <div class="card" style="width: 18rem;">
                    <a href="{{site.baseurl}}{{ image.path}}">
                    <div class="card-img"  ><img src="{{site.baseurl}}{{ image.url}}" class="card-img-top" alt="{{ image.name }}">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">{{ image.name }}</h5>
                        <p class="card-text">{{ image.description }}</p>
                    </div>
                    </a>    
            </div>
            {% endfor %}
        </div>
    </div>
</div>

<!--
<div class="container py-3 mb-0 bg-color-full bg-color">
    <div class="row">
        <div class="col-md-3 col-md-offset-3">
        </div>
        <div class="col-md-6">
            <p>Prima di affrontare la realizzazione del sito è necessario installare Jekyll</p>
            <a href="{{site.baseurl}}/installation" class="btn btn-info" role="button">Installazione di Jeykll</a>
        </div>
    </div>
</div>
-->