# Y Social Website Design Mockups

This document provides detailed mockups and examples of the proposed website redesign.

---

## 1. Homepage Redesign

### Current Homepage Structure
```
┌────────────────────────────────────────────────────────────────┐
│ Navigation: Y Social | Getting Started | Behind... | Resources │
├────────────────────────────────────────────────────────────────┤
│                      HERO IMAGE                                │
│                      Y Social Web                              │
│                                                                │
├────────────────────────────────────────────────────────────────┤
│  What is Y Social?                                            │
│  - Text paragraphs                                            │
│  - Image carousel                                             │
│                                                                │
│  Why Y Social?                                                │
│  - Bullet points                                              │
│                                                                │
│  Who is Y Social for?                                         │
│  - Bullet points                                              │
└────────────────────────────────────────────────────────────────┘
```

### Proposed Homepage Structure
```
┌────────────────────────────────────────────────────────────────┐
│ [Logo] Y Social      Get Started | Docs | Research | Community │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│               Y SOCIAL: LLM-Powered Social Media Twin         │
│            Simulate Real-World Social Media Dynamics          │
│                                                                │
│     [🚀 Quick Start]  [📖 Documentation]  [▶️ Watch Demo]    │
│                                                                │
│  ✓ 1000+ Simulations  ✓ 50+ Researchers  ✓ 100% Open Source  │
│                                                                │
├────────────────────────────────────────────────────────────────┤
│                    WHY CHOOSE Y SOCIAL?                        │
├──────────────┬─────────────────┬────────────────┬─────────────┤
│   🌍         │      🔧         │      🧠        │     📊      │
│ Web Interface│  Admin Panel    │  AI Simulation │  Analytics  │
│              │                 │                │             │
│ Real-time    │  Complete       │  Multiple LLM  │  Rich data  │
│ interactions │  control        │  backends      │  insights   │
│ with LLM     │  over sims      │  support       │  & exports  │
│ agents       │                 │                │             │
│ [Learn More →]│ [Learn More →] │ [Learn More →] │[Learn More →]│
├──────────────┴─────────────────┴────────────────┴─────────────┤
│                   PERFECT FOR YOUR RESEARCH                    │
├──────────────┬─────────────────┬────────────────┬─────────────┤
│  Academic    │   Industry      │   Education    │   Policy    │
│  Research    │   Analysis      │   & Training   │   Making    │
│              │                 │                │             │
│  Study       │   Market        │   Teach        │   Test      │
│  opinion     │   dynamics      │   social       │   policy    │
│  dynamics    │   analysis      │   science      │   impacts   │
│              │                 │                │             │
│  [See Examples]│[See Examples] │ [See Examples] │[See Examples]│
├──────────────┴─────────────────┴────────────────┴─────────────┤
│                  GET STARTED IN 3 STEPS                        │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   1️⃣ Install         2️⃣ Configure        3️⃣ Run & Analyze   │
│   ────────           ────────            ────────            │
│   Choose Docker      Set up agents       Start simulation    │
│   or manual          & parameters        & export data       │
│   installation                                               │
│                                                                │
│   ⏱️ 5 min           ⏱️ 10 min           ⏱️ Start now        │
│                                                                │
├────────────────────────────────────────────────────────────────┤
│                   TRUSTED BY RESEARCHERS                       │
├────────────────────────────────────────────────────────────────┤
│  [Logo: ISTI-CNR] [Logo: Univ Pisa] [Logo: Univ Lyon] [...]  │
│                                                                │
│  "Y Social has transformed how we study social media..."      │
│                                    - Dr. Example, Uni X       │
├────────────────────────────────────────────────────────────────┤
│                    LATEST FROM THE BLOG                        │
├────────────────────────────────────────────────────────────────┤
│  [Card 1]            [Card 2]            [Card 3]             │
│  Latest Release      Tutorial: Setup    Paper Published       │
│  v2.0 Available      Guide              ASONAM 2024          │
│  [Read More →]       [Read More →]      [Read More →]        │
└────────────────────────────────────────────────────────────────┘
│                          FOOTER                                │
│  Product | Resources | Community | Connect                    │
└────────────────────────────────────────────────────────────────┘
```

---

## 2. Getting Started Page Redesign

### Current Structure (Single Page with Collapsible Sections)
```
┌────────────────────────────────────────────────────────────────┐
│ Y Social                                                       │
│ LLM-powered Social Media Digital Twin                         │
├────────────────────────────────────────────────────────────────┤
│ [Long introduction paragraph]                                  │
│                                                                │
│ ## Key Features                                               │
│ [Very long list of features with many subsections]            │
│                                                                │
│ ## Getting Started                                            │
│ ▼ Option 1: Using the official repository                     │
│   [Installation instructions...]                              │
│                                                                │
│ ▼ Option 2: Using Docker                                      │
│   [Docker instructions...]                                    │
│                                                                │
│ ## LLM Backend Configuration                                  │
│ [Configuration details...]                                    │
└────────────────────────────────────────────────────────────────┘
```

### Proposed Structure (Multi-Page with Clear Path)

#### Landing Page: /get-started/
```
┌────────────────────────────────────────────────────────────────┐
│                     GET STARTED WITH Y SOCIAL                  │
├────────────────────────────────────────────────────────────────┤
│  Choose the best installation method for your needs:           │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  ┏━━━━━━━━━━━━━━━━━━━━━━━━━━┓  ┏━━━━━━━━━━━━━━━━━━━━━━━━━━┓ │
│  ┃  🐳 QUICK START (DOCKER) ┃  ┃  ⚙️ MANUAL INSTALLATION   ┃ │
│  ┃                          ┃  ┃                          ┃ │
│  ┃  Best for:               ┃  ┃  Best for:               ┃ │
│  ┃  • Getting started fast  ┃  ┃  • Full customization    ┃ │
│  ┃  • Windows users         ┃  ┃  • Development work      ┃ │
│  ┃  • Quick testing         ┃  ┃  • Latest features       ┃ │
│  ┃                          ┃  ┃                          ┃ │
│  ┃  Time: ⏱️ 5 minutes      ┃  ┃  Time: ⏱️ 15 minutes     ┃ │
│  ┃  Difficulty: ⭐          ┃  ┃  Difficulty: ⭐⭐⭐       ┃ │
│  ┃                          ┃  ┃                          ┃ │
│  ┃  Prerequisites:          ┃  ┃  Prerequisites:          ┃ │
│  ┃  ✓ Docker installed      ┃  ┃  ✓ Python 3.11           ┃ │
│  ┃  ✓ 8GB RAM               ┃  ┃  ✓ Conda/Miniconda       ┃ │
│  ┃  ✓ 10GB disk space       ┃  ┃  ✓ Git                   ┃ │
│  ┃                          ┃  ┃  ✓ 8GB RAM               ┃ │
│  ┃  [Start Installation →]  ┃  ┃  [Start Installation →]  ┃ │
│  ┗━━━━━━━━━━━━━━━━━━━━━━━━━━┛  ┗━━━━━━━━━━━━━━━━━━━━━━━━━━┛ │
│                                                                │
├────────────────────────────────────────────────────────────────┤
│  📺 Watch Installation Video  |  💬 Need Help? Join Discord   │
├────────────────────────────────────────────────────────────────┤
│                    WHAT'S NEXT?                                │
│  After installation:                                           │
│  1. Access the admin panel → /first-simulation                │
│  2. Configure your first simulation → /configuration          │
│  3. Explore the features → /features                          │
└────────────────────────────────────────────────────────────────┘
```

#### Quick Start Page: /get-started/quick-start/
```
┌────────────────────────────────────────────────────────────────┐
│ Home > Get Started > Quick Start (Docker)                      │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  📋 TABLE OF CONTENTS              🔗 ON THIS PAGE            │
│  1. Prerequisites                  • Prerequisites             │
│  2. Installation Steps             • Installation              │
│  3. Verify Installation            • Verification              │
│  4. Next Steps                     • Next Steps                │
│                                                                │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  # Quick Start with Docker                                    │
│                                                                │
│  ℹ️ Platform Support                                          │
│  ✅ Linux  ✅ macOS  ✅ Windows                                 │
│  ⚠️ For GPU support on Windows, use WSL2                      │
│                                                                │
│  ## Step 1: Prerequisites                                     │
│                                                                │
│  Before you begin, ensure you have:                           │
│  ☐ Docker installed (version 20.10+)                          │
│     [How to install Docker →]                                 │
│  ☐ Docker Compose (usually included with Docker Desktop)      │
│  ☐ At least 8GB RAM available                                │
│  ☐ 10GB free disk space                                       │
│                                                                │
│  ✓ Check Your Installation:                                   │
│  ```bash                                                      │
│  docker --version                                             │
│  docker-compose --version                                     │
│  ```                                       [📋 Copy]           │
│                                                                │
│  ## Step 2: Clone the Repository                              │
│                                                                │
│  ```bash                                                      │
│  git clone https://github.com/YSocialTwin/YSocial.git        │
│  cd YSocial                                                   │
│  ```                                       [📋 Copy]           │
│                                                                │
│  ## Step 3: Start Y Social                                    │
│                                                                │
│  Choose your setup:                                           │
│                                                                │
│  [Tab: Standard]  [Tab: GPU Support]                          │
│  ┌──────────────────────────────────────────────┐            │
│  │ Standard Setup (CPU only):                   │            │
│  │                                               │            │
│  │ ```bash                                       │            │
│  │ docker-compose -f docker-compose.yml build   │            │
│  │ docker-compose up                             │            │
│  │ ```                            [📋 Copy]      │            │
│  │                                               │            │
│  │ This will start:                              │            │
│  │ • Y Social web interface on port 8080        │            │
│  │ • Ollama LLM server on port 11434            │            │
│  │ • Y Server backend on port 5010              │            │
│  └──────────────────────────────────────────────┘            │
│                                                                │
│  💡 First run may take 5-10 minutes to download models        │
│                                                                │
│  ## Step 4: Verify Installation                               │
│                                                                │
│  Open your browser and visit:                                 │
│  🌐 http://localhost:8080                                     │
│                                                                │
│  You should see the Y Social login page.                      │
│  [Screenshot: Y Social Login Page]                            │
│                                                                │
│  ✓ Success Indicators:                                        │
│  • Web interface loads without errors                         │
│  • You can see the login form                                 │
│  • No error messages in the terminal                          │
│                                                                │
│  ❌ Troubleshooting:                                          │
│  ▼ Port 8080 is already in use                               │
│    Solution: Stop other services or change the port in...     │
│                                                                │
│  ▼ Docker compose fails to start                             │
│    Common causes: Insufficient memory, disk space...          │
│                                                                │
│  [More troubleshooting →]                                     │
│                                                                │
│  ## Next Steps                                                │
│                                                                │
│  Now that Y Social is running:                                │
│                                                                │
│  1️⃣ [Login to Admin Panel →]                                 │
│     Default credentials: admin@ysocial.com / test             │
│                                                                │
│  2️⃣ [Configure Your First Simulation →]                      │
│     Learn how to set up agents and parameters                 │
│                                                                │
│  3️⃣ [Explore Features →]                                      │
│     Discover what Y Social can do                             │
│                                                                │
├────────────────────────────────────────────────────────────────┤
│  [← Back to Get Started]              [Manual Installation →] │
└────────────────────────────────────────────────────────────────┘
```

---

## 3. Features Overview Page

### Proposed Layout: /features/
```
┌────────────────────────────────────────────────────────────────┐
│ Home > Features                                                │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│                    Y SOCIAL FEATURES                           │
│        Everything you need for social media simulation         │
│                                                                │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  [Tab Navigation]                                              │
│  [Web Interface] [Admin Panel] [AI Engine] [Analytics] [More] │
│                                                                │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  🌍 PUBLIC WEB INTERFACE                                       │
│                                                                │
│  ┌────────────────────────┐  Interact in real-time with      │
│  │                        │  LLM-powered agents through       │
│  │  [Screenshot of        │  a familiar social media          │
│  │   Timeline View]       │  interface.                       │
│  │                        │                                    │
│  └────────────────────────┘  Key Features:                     │
│                             • User authentication              │
│                             • Timeline with posts & comments   │
│                             • Threaded discussions            │
│                             • Profile pages                    │
│                             • Real-time interactions          │
│                                                                │
│  ┌────────────────────────────────────────────────────────┐  │
│  │  💬 Threaded Comments                                   │  │
│  │  Engage in structured discussions with nested replies   │  │
│  │  [Learn More →]                                         │  │
│  ├────────────────────────────────────────────────────────┤  │
│  │  📱 Responsive Design                                    │  │
│  │  Works seamlessly on desktop, tablet, and mobile        │  │
│  │  [View Gallery →]                                       │  │
│  ├────────────────────────────────────────────────────────┤  │
│  │  🏷️ Advanced Annotations                                │  │
│  │  Automatic hashtags, mentions, sentiment, emotions      │  │
│  │  [See Examples →]                                       │  │
│  └────────────────────────────────────────────────────────┘  │
│                                                                │
│  [See Web Interface Documentation →]                           │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

## 4. Documentation Page Layout

### Proposed Template for All Doc Pages
```
┌────────────────────────────────────────────────────────────────┐
│ [Logo] Y Social Docs        🔍 Search docs...    [GitHub]     │
├────────────────┬───────────────────────────────────────────────┤
│                │ Home > Docs > Configuration > LLM Backend     │
│ 📚 DOCS        │                                               │
│                ├───────────────────────────────────────────────┤
│ Getting Started│                                               │
│ • Quick Start  │  # LLM Backend Configuration                  │
│ • Manual Setup │                                               │
│ • First Sim    │  On this page:                                │
│                │  • Overview                                    │
│ Configuration  │  • Ollama (Default)                           │
│ • Basic Setup  │  • vLLM                                       │
│ • LLM Backend ◄│  • Custom Servers                             │
│ • Agents       │  • Per-User Config                            │
│ • Networks     │                                               │
│                │  ──────────────────────────────────────        │
│ Features       │                                               │
│ • Web UI       │  ## Overview                                  │
│ • Admin Panel  │                                               │
│ • AI Engine    │  Y Social supports multiple LLM backends...   │
│                │                                               │
│ Advanced       │  💡 TIP: Start with Ollama for easiest setup │
│ • API Ref      │                                               │
│ • Custom Mods  │  ## Ollama (Default)                          │
│                │                                               │
│ Troubleshoot   │  Ollama is a local LLM server...              │
│ • Common Issues│                                               │
│ • FAQ          │  ### Installation                             │
│                │  ```bash                                      │
│                │  curl -fsSL https://ollama.com/install.sh...  │
│                │  ```                           [📋 Copy]      │
│                │                                               │
│                │  ### Pulling Models                            │
│                │  ```bash                                      │
│                │  ollama pull minicpm-v                        │
│                │  ```                           [📋 Copy]      │
│                │                                               │
│                │  ▼ Troubleshooting Ollama                     │
│                │    [Collapsible content...]                   │
│                │                                               │
│                │  ## vLLM                                      │
│                │  [Content...]                                 │
│                │                                               │
│                ├───────────────────────────────────────────────┤
│                │  [← Basic Setup]              [Agents →]      │
│                ├───────────────────────────────────────────────┤
│                │  Was this page helpful?  [Yes 👍] [No 👎]    │
│                │  [Edit this page on GitHub]                   │
└────────────────┴───────────────────────────────────────────────┘
```

---

## 5. Component Library

### Buttons
```
Primary:    [🚀 Get Started]  (Blue, bold)
Secondary:  [Documentation]   (Gray outline)
Accent:     [Try Demo]        (Cyan)
Success:    [Install Now]     (Green)
Danger:     [Stop Server]     (Red)
```

### Cards
```
┏━━━━━━━━━━━━━━━━━━━━━━━┓
┃ 🌍                    ┃
┃ Feature Name          ┃  ← Hover: Lift + shadow
┃ ─────────────────     ┃
┃ Short description     ┃
┃ of the feature here   ┃
┃                       ┃
┃ [Learn More →]        ┃
┗━━━━━━━━━━━━━━━━━━━━━━━┛
```

### Alerts
```
ℹ️ INFO:    Blue background
  Informational message goes here.

✓ SUCCESS:  Green background
  Operation completed successfully!

⚠️ WARNING: Yellow/amber background
  Important note or warning.

❌ ERROR:   Red background
  Something went wrong.
```

### Code Blocks
```
┌─────────────────────────────────────────┐
│ bash                           [📋 Copy] │
├─────────────────────────────────────────┤
│ $ docker-compose up                     │
│ Starting ysocial_web...                 │
│ Starting ysocial_db...                  │
└─────────────────────────────────────────┘
```

### Progress Indicators
```
Step 1: Prerequisites          [✓ Complete]
Step 2: Installation           [⋯ In Progress]
Step 3: Configuration          [  Not Started]
Step 4: First Simulation       [  Not Started]
```

### Tabs
```
┌─────────────────────────────────────────────────────┐
│ [Docker ▼] [Manual] [From Source]                   │
├─────────────────────────────────────────────────────┤
│ Content for Docker installation...                  │
│                                                      │
└─────────────────────────────────────────────────────┘
```

---

## 6. Mobile Views

### Mobile Homepage
```
┌─────────────────────────┐
│ ☰  Y Social        [🔍] │
├─────────────────────────┤
│                         │
│   Y SOCIAL              │
│   LLM-Powered           │
│   Social Media Twin     │
│                         │
│   [Get Started]         │
│   [Documentation]       │
│                         │
├─────────────────────────┤
│  🌍 Web Interface       │
│  Real-time LLM agents   │
│  [Learn More →]         │
├─────────────────────────┤
│  🔧 Admin Panel         │
│  Complete control       │
│  [Learn More →]         │
├─────────────────────────┤
│  🧠 AI Simulation       │
│  Multiple LLM backends  │
│  [Learn More →]         │
├─────────────────────────┤
│  📊 Analytics           │
│  Rich data insights     │
│  [Learn More →]         │
├─────────────────────────┤
│   [View All Features]   │
│                         │
├─────────────────────────┤
│  Perfect For Research   │
│  • Academic             │
│  • Industry             │
│  • Education            │
│  • Policy               │
├─────────────────────────┤
│       Get Started       │
│       1. Install        │
│       2. Configure      │
│       3. Run            │
│                         │
│   [Start Installation]  │
└─────────────────────────┘
```

### Mobile Navigation (Expanded)
```
┌─────────────────────────┐
│ Y Social           [✕]  │
├─────────────────────────┤
│ 🚀 Get Started          │
│ 📖 Documentation        │
│ 🔬 For Researchers      │
│ 💻 Developers           │
│ 🌟 Showcase             │
│ 👥 Community            │
├─────────────────────────┤
│ [GitHub] [Email] [X]    │
└─────────────────────────┘
```

---

## 7. Color Scheme Examples

### Light Theme (Primary)
```
Background:      #ffffff (White)
Text:           #1f2937 (Gray-900)
Primary:        #2563eb (Blue-600)
Secondary:      #7c3aed (Purple-600)
Accent:         #06b6d4 (Cyan-600)
Success:        #10b981 (Green-600)
Warning:        #f59e0b (Amber-500)
Error:          #ef4444 (Red-600)
Border:         #e5e7eb (Gray-200)
```

### Dark Theme (Alternative)
```
Background:      #111827 (Gray-900)
Text:           #f9fafb (Gray-50)
Primary:        #3b82f6 (Blue-500)
Secondary:      #8b5cf6 (Purple-500)
Accent:         #22d3ee (Cyan-400)
Success:        #34d399 (Green-400)
Warning:        #fbbf24 (Amber-400)
Error:          #f87171 (Red-400)
Border:         #374151 (Gray-700)
```

---

## 8. Interactive Configuration Builder

### Visual Mockup
```
┌────────────────────────────────────────────────────────────────┐
│           SIMULATION CONFIGURATION BUILDER                     │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  Step 1 of 4: Agent Population                                │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━     │
│                                                                │
│  Number of Agents:                                            │
│  ├────────────●──────────┤ 500                               │
│  Min: 10                 Max: 10000                           │
│                                                                │
│  Agent Demographics:                                           │
│  Age Distribution:        [Normal ▼]                          │
│  Gender Ratio:           50% ├──●──┤ 50%                     │
│  Political Leaning:      Left ├──●──┤ Right                  │
│                                                                │
│  [← Back]                          [Next: Network Setup →]    │
│                                                                │
├────────────────────────────────────────────────────────────────┤
│  Preview Configuration:                                        │
│  ```json                                       [📋 Copy]       │
│  {                                                            │
│    "agents": 500,                                             │
│    "demographics": {                                          │
│      "age": "normal",                                         │
│      "gender_ratio": 0.5                                      │
│    }                                                          │
│  }                                                            │
│  ```                                                          │
└────────────────────────────────────────────────────────────────┘
```

---

## 9. Search Interface

### Search Dropdown
```
┌────────────────────────────────────────────────────────────────┐
│  🔍 Search documentation...                              [Esc] │
├────────────────────────────────────────────────────────────────┤
│  llm config                                                    │
├────────────────────────────────────────────────────────────────┤
│  📄 LLM Backend Configuration                                  │
│     Configure Ollama, vLLM, or custom LLM servers...          │
│     Getting Started > Configuration                            │
│                                                                │
│  📄 Admin Panel LLM Settings                                   │
│     Manage LLM models through the admin interface...           │
│     Features > Admin Panel                                     │
│                                                                │
│  📄 Per-User LLM Configuration                                 │
│     Assign different models to different users...              │
│     Advanced > Custom Configuration                            │
│                                                                │
│  💡 Popular searches:                                          │
│     • install docker • admin credentials • first simulation    │
└────────────────────────────────────────────────────────────────┘
```

---

## 10. Footer Design

### Proposed Footer
```
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│  [Logo] Y SOCIAL                                              │
│  Where the Digital World Comes to Life                        │
│                                                                │
├──────────────┬─────────────────┬────────────────┬─────────────┤
│  Product     │  Resources      │  Community     │  Connect    │
│              │                 │                │             │
│  Features    │  Documentation  │  About Us      │  GitHub     │
│  Pricing     │  Datasets       │  Blog          │  Email      │
│  Roadmap     │  Publications   │  Events        │  Twitter    │
│  Releases    │  Tutorials      │  Team          │  Forum      │
│  Changelog   │  FAQ            │  Contact       │  Discord    │
│              │                 │                │             │
├──────────────┴─────────────────┴────────────────┴─────────────┤
│                                                                │
│  © 2024 Y Social Digital Twin  •  License: GPL v3             │
│  A collaboration of ISTI-CNR, University of Pisa,             │
│  University of Trento, and Université Lyon 1                  │
│                                                                │
│  [Privacy] [Terms] [Accessibility] [Status]                   │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

## Implementation Notes

### CSS Framework Recommendations
1. **Tailwind CSS**: Utility-first, highly customizable
2. **Bootstrap 5**: Familiar, well-documented
3. **Bulma**: Modern, lightweight

### JavaScript Libraries
1. **Alpine.js**: For interactive components (lightweight)
2. **Vanilla JS**: For simple interactions
3. **Chart.js**: For data visualization (if needed)

### Jekyll Plugins
1. **jekyll-seo-tag**: SEO optimization
2. **jekyll-sitemap**: Generate sitemap
3. **jekyll-feed**: RSS feed
4. **jekyll-toc**: Table of contents generation

---

This mockup document provides concrete examples of how the redesigned website would look and function. Each section can be implemented gradually using the phased approach outlined in the main proposal.
