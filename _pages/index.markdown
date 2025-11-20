---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default-full
title: "Home"
subtitle: "Where the Digital World Comes to Life"
show_sidetoc: true
header_type: hero #base, post, hero,image, splash
header_img: assets/images/header3.jpg
header_title: "Y Social" 
---

<style>
.cta-buttons {
    display: flex;
    gap: 1rem;
    margin: 2rem 0;
    flex-wrap: wrap;
    justify-content: center;
}
.cta-primary {
    background: #2563eb;
    color: white;
    padding: 0.75rem 2rem;
    border-radius: 0.5rem;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s;
    display: inline-block;
}
.cta-primary:hover {
    background: #1d4ed8;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
    color: white;
    text-decoration: none;
}
.cta-secondary {
    background: transparent;
    color: #2563eb;
    padding: 0.75rem 2rem;
    border: 2px solid #2563eb;
    border-radius: 0.5rem;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s;
    display: inline-block;
}
.cta-secondary:hover {
    background: #2563eb;
    color: white;
    text-decoration: none;
}
.feature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin: 3rem 0;
}
.feature-card {
    background: white;
    padding: 2rem;
    border-radius: 0.75rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s;
    text-align: center;
}
.feature-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}
.feature-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
}
.feature-title {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: #1f2937;
}
.feature-description {
    color: #6b7280;
    font-size: 0.95rem;
    line-height: 1.6;
}
.stats-bar {
    display: flex;
    justify-content: center;
    gap: 3rem;
    flex-wrap: wrap;
    margin: 2rem 0;
    padding: 2rem;
    background: rgba(37, 99, 235, 0.05);
    border-radius: 0.5rem;
}
.stat-item {
    text-align: center;
}
.stat-number {
    font-size: 2rem;
    font-weight: 700;
    color: #2563eb;
}
.stat-label {
    color: #6b7280;
    font-size: 0.9rem;
    margin-top: 0.25rem;
}
.use-case-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    margin: 2rem 0;
}
.use-case-card {
    background: white;
    border: 1px solid #e5e7eb;
    padding: 1.5rem;
    border-radius: 0.5rem;
    text-align: center;
    transition: all 0.3s;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}
.use-case-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.use-case-title {
    font-weight: 700;
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    color: #2563eb;
}
.use-case-desc {
    font-size: 0.85rem;
    color: #6c757d;
}
</style>

           

<!-- Introduction Section -->
<div class="container py-5">
    <div class="row">
        <div class="col-md-12">
            <div style="text-align: center; max-width: 900px; margin: 0 auto;">
                <h2 style="font-size: 2.5rem; font-weight: 700; margin-bottom: 1.5rem; color: #212529;">
                    Where the Digital World Comes to Life
                </h2>
                <p style="font-size: 1.2rem; color: #6b7280; line-height: 1.8; margin-bottom: 2rem;">
                    YSocial is an open-source platform designed to simulate realistic social media environments using AI-powered agents. Perfect for researchers in computational social science, it enables you to study social dynamics, recommender systems effects, misinformation spread, and user behavior in a controlled setting.
                </p>
            </div>
        </div>
    </div>
</div>

<!-- Video Section -->
<div class="container py-4">
    <div class="row">
        <div class="col-md-12">
            <h2 style="text-align: center; margin-bottom: 2rem; font-weight: 700; color: #212529;">See YSocial in Action</h2>
            <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; background: #000; border-radius: 0.75rem; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);">
                <iframe 
                    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
                    src="https://www.youtube.com/embed/IJsNHs1foQQ?cc_load_policy=1&cc_lang_pref=en"
                    title="Y Social Introduction Video"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>
                </iframe>
            </div>
        </div>
    </div>
</div>

<!-- Key Features Section -->
<div class="container py-5">
    <div class="row">
        <div class="col-md-12">
            <h2 style="text-align: center; margin-bottom: 3rem; font-weight: 700; color: #212529;">Key Features</h2>
            <div class="feature-grid">
                <div class="feature-card">
                    <div class="feature-icon">🧠</div>
                    <div class="feature-title">AI Simulation</div>
                    <div class="feature-description">Agent-based modeling meets Generative AI for a more "realistic" simulation experience</div>
                </div>

                <div class="feature-card">
                    <div class="feature-icon">🔧</div>
                    <div class="feature-title">No Code Simulation</div>
                    <div class="feature-description">Web interface to complete control simulations, agent management, and scenario configuration</div>
                </div>
            
                <div class="feature-card">
                    <div class="feature-icon">🌍</div>
                    <div class="feature-title">Web Interface</div>
                    <div class="feature-description">Explore (and join) in Real-time social simulation through a familiar social media interface</div>
                </div>

                <div class="feature-card">
                    <div class="feature-icon">📊</div>
                    <div class="feature-title">Integrated Analytics</div>
                    <div class="feature-description">Analyze simulation with ySights from embeedded and simulation-tuned Jupyter Lab</div>
                </div>
            </div>
        </div>
    </div>
</div>


<div class="container py-4" style="background: #f8f9fa; border: 2px solid #dee2e6; border-radius: 1rem;">
    <div class="row">
        <div class="col-md-12">
            <h2 style="text-align: center; margin-bottom: 2rem; color: #212529; font-weight: 700;">Perfect for Your Research Needs</h2>
            
            <div class="use-case-grid">
                <div class="use-case-card" style="background: white; border: 1px solid #e5e7eb;">
                    <div class="use-case-title" style="color: #2563eb;">🎓 Academic Research</div>
                    <div class="use-case-desc" style="color: #6c757d;">Study opinion dynamics, misinformation spread, and social phenomena</div>
                </div>
                
                <div class="use-case-card" style="background: white; border: 1px solid #e5e7eb;">
                    <div class="use-case-title" style="color: #2563eb;">💼 Industry Analysis</div>
                    <div class="use-case-desc" style="color: #6c757d;">Test market dynamics, brand perception, and consumer behavior</div>
                </div>
                
                <div class="use-case-card" style="background: white; border: 1px solid #e5e7eb;">
                    <div class="use-case-title" style="color: #2563eb;">📚 Education</div>
                    <div class="use-case-desc" style="color: #6c757d;">Teach computational social science and simulation methods</div>
                </div>
                
                <div class="use-case-card" style="background: white; border: 1px solid #e5e7eb;">
                    <div class="use-case-title" style="color: #2563eb;">🏛️ Policy Making</div>
                    <div class="use-case-desc" style="color: #6c757d;">Test policy impacts and intervention strategies</div>
                </div>
            </div>
        </div>
    </div>
</div>


<!-- Get Started Section -->
<div class="container py-5">
    <div class="row">
        <div class="col-md-12">
            <h2 style="text-align: center; margin-bottom: 3rem; font-weight: 700; color: #212529;">Get Started in 3 Simple Steps</h2>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; margin: 2rem 0;">
                <div style="text-align: center; padding: 2rem;">
                    <div style="font-size: 3rem; font-weight: 700; color: #2563eb; margin-bottom: 1rem;">1</div>
                    <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 0.5rem;">Install</h3>
                    <p style="color: #6b7280;">Choose Docker for quick setup or manual installation for full control</p>
                    <p style="font-size: 0.9rem; color: #9ca3af;">⏱️ 5-15 minutes</p>
                </div>
                
                <div style="text-align: center; padding: 2rem;">
                    <div style="font-size: 3rem; font-weight: 700; color: #7c3aed; margin-bottom: 1rem;">2</div>
                    <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 0.5rem;">Configure</h3>
                    <p style="color: #6b7280;">Set up agents, parameters, and LLM backend</p>
                    <p style="font-size: 0.9rem; color: #9ca3af;">⏱️ 10 minutes</p>
                </div>
                
                <div style="text-align: center; padding: 2rem;">
                    <div style="font-size: 3rem; font-weight: 700; color: #06b6d4; margin-bottom: 1rem;">3</div>
                    <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 0.5rem;">Run & Analyze</h3>
                    <p style="color: #6b7280;">Start your simulation and export rich data insights</p>
                    <p style="font-size: 0.9rem; color: #9ca3af;">⏱️ Start now</p>
                </div>
            </div>
            
            <div style="text-align: center; margin-top: 2rem;">
                <a href="/ysocial" class="cta-primary" style="font-size: 1.1rem; padding: 1rem 3rem;">Start Your First Simulation →</a>
            </div>
        </div>
    </div>
</div>

<!-- Explore More Section -->
<div class="container py-5">
    <div class="row">
        <div class="col-md-12">
            <h2 style="text-align: center; margin-bottom: 3rem; font-weight: 700; color: #212529;">Explore More</h2>
        </div>
    </div>
    <div class="row pb-5">
        <div class="col-md-12 col-sm-12">
            <div class="card-container">
                {% for image in site.data.home-cards %}
                <div class="card" style="width: 18rem;">
                    <a href="{{site.baseurl}}{{ image.path}}">
                        <div class="card-img"><img src="{{site.baseurl}}{{ image.url}}" class="card-img-top" alt="{{ image.name }}">
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