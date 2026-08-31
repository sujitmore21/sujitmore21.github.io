/**
 * Hero Component - Flagship Mobile Product Showcase & Interactive Smartphone Simulator
 */
export function renderHero() {
  return `
  <section class="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden" id="about">
    <!-- Ambient Radial Lighting -->
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-cyan-500/10 via-blue-600/10 to-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

        <!-- Left Column: Product Manifesto & Interactive App Switcher -->
        <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
          
          <!-- Profile Identity Header with Animated Glowing Avatar -->
          <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-5">
            <!-- Animated Avatar Container -->
            <div class="avatar-animated-box">
              <div class="avatar-glow-ring"></div>
              <div class="avatar-border-spin"></div>
              <div class="avatar-img-frame">
                <img src="assets/images/profile.png" alt="Sujit More - Senior Mobile Architect" class="w-full h-full object-cover">
              </div>
              <div class="avatar-badge-verified" title="Verified Mobile Architect">
                <i class="fa-solid fa-check text-cyan-400 text-xs"></i>
              </div>
            </div>

            <!-- Identity Pill Details -->
            <div class="flex flex-col items-center sm:items-start space-y-1.5 text-center sm:text-left">
              <div class="flex items-center gap-2">
                <span class="text-xl sm:text-2xl font-black text-white tracking-tight">Sujit More</span>
                <span class="px-2 py-0.5 rounded-md bg-cyan-500/20 text-cyan-300 text-[11px] font-mono font-bold border border-cyan-500/30">
                  9+ Yrs Exp
                </span>
              </div>
              <div class="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-bold text-slate-200 shadow-md">
                  <span class="relative flex h-2 w-2">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <i class="fa-solid fa-mobile-screen-button text-cyan-400"></i> Senior Mobile Architect
                </span>
                <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-cyan-500/10 text-cyan-300 border border-cyan-500/25 text-xs font-mono font-semibold">
                  <i class="fa-solid fa-code"></i> Flutter & Android Lead
                </span>
              </div>
            </div>
          </div>

          <!-- Headline with typing effect -->
          <div class="space-y-1">
            <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider shadow-glow-cyan mb-1">
              <i class="fa-solid fa-sparkles text-cyan-400"></i> Flagship Mobile Engineering
            </div>
            <div class="min-h-[90px] sm:min-h-[115px] lg:min-h-[130px] flex flex-col justify-center">
              <h1 class="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12]">
                Architecting <br class="hidden sm:inline">
                <span class="typing-effect text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 inline-block" id="typingTarget">
                  Fintech & Copy Trading Apps
                </span>
              </h1>
            </div>
          </div>

          <!-- Subheadline & Capability Card -->
          <div class="bio-glass-card p-5 sm:p-6 rounded-2xl space-y-3.5 text-left">
            <p class="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              Senior Mobile Architect with <strong class="text-white font-extrabold">9+ years of engineering experience</strong> (<span class="text-cyan-300 font-semibold font-mono">6+ Flutter, 3 Android</span>). Specializing in <strong class="text-emerald-400 font-semibold">Fintech Copy Trading</strong>, <strong class="text-blue-400 font-semibold">Enterprise Banking (ICICI Bank US)</strong>, Low-Latency WebSockets & MQTT streams, and Clean Architecture for <strong class="text-white font-bold">500k+ global users</strong>.
            </p>
            
            <!-- Micro Capabilities Strip -->
            <div class="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800/80 text-xs font-mono">
              <span class="px-2.5 py-1 rounded-lg bg-slate-950/80 border border-slate-800 text-cyan-300 flex items-center gap-1.5 shadow-sm">
                <i class="fa-solid fa-microchip text-cyan-400"></i> 120 FPS GPU Canvas
              </span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-950/80 border border-slate-800 text-emerald-300 flex items-center gap-1.5 shadow-sm">
                <i class="fa-solid fa-shield-halved text-emerald-400"></i> ICICI Knox Security
              </span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-950/80 border border-slate-800 text-purple-300 flex items-center gap-1.5 shadow-sm">
                <i class="fa-solid fa-bolt text-purple-400"></i> &lt;50ms WebSocket Ticks
              </span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-950/80 border border-slate-800 text-amber-300 flex items-center gap-1.5 shadow-sm">
                <i class="fa-solid fa-mobile-screen text-amber-400"></i> 15+ Production Apps
              </span>
            </div>
          </div>

          <!-- Interactive Simulator App Switcher Strip -->
          <div class="pt-2">
            <p class="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center justify-center lg:justify-start gap-2">
              <i class="fa-solid fa-hand-pointer text-cyan-400 animate-bounce"></i> Interactive Device Simulator — Select App:
            </p>
            <div class="flex flex-wrap items-center justify-center lg:justify-start gap-2" id="heroAppSwitcher">
              <button class="hero-app-pill active px-3.5 py-2 rounded-xl text-xs font-bold font-mono transition-all duration-300 flex items-center gap-1.5 bg-cyan-500/20 text-cyan-300 border border-cyan-400/60 shadow-glow-cyan" data-app="moneymic" data-title="MoneyMic US" data-tag="Copy Trading" data-dynamic="📈 MoneyMic: BTC +3.45% • $64,250" data-img="assets/images/moneymic_mockup.png">
                <i class="fa-solid fa-chart-line text-cyan-400"></i> MoneyMic US
              </button>
              <button class="hero-app-pill px-3.5 py-2 rounded-xl text-xs font-bold font-mono transition-all duration-300 flex items-center gap-1.5 bg-slate-900/90 text-slate-400 border border-slate-800 hover:text-white hover:border-blue-400/50" data-app="icici" data-title="ICICI Bank US" data-tag="Digital Banking" data-dynamic="🏛️ ICICI Bank: AES-256 Validated" data-img="assets/images/icici_mockup.png">
                <i class="fa-solid fa-building-columns text-blue-400"></i> ICICI Bank US
              </button>
              <button class="hero-app-pill px-3.5 py-2 rounded-xl text-xs font-bold font-mono transition-all duration-300 flex items-center gap-1.5 bg-slate-900/90 text-slate-400 border border-slate-800 hover:text-white hover:border-emerald-400/50" data-app="jiobp" data-title="Reliance Jio-bp" data-tag="EV Pulse & Fleet" data-dynamic="⚡ Jio-bp: 48 EV Chargers Active" data-img="assets/images/jiobp_mockup.png">
                <i class="fa-solid fa-bolt text-emerald-400"></i> Reliance Jio-bp
              </button>
              <button class="hero-app-pill px-3.5 py-2 rounded-xl text-xs font-bold font-mono transition-all duration-300 flex items-center gap-1.5 bg-slate-900/90 text-slate-400 border border-slate-800 hover:text-white hover:border-purple-400/50" data-app="bitproex" data-title="BitProEX" data-tag="Crypto Derivatives" data-dynamic="📊 BitProEX: 120 FPS Depth Chart" data-img="assets/images/bitproex_mockup.png">
                <i class="fa-solid fa-chart-candlestick text-purple-400"></i> BitProEX
              </button>
              <button class="hero-app-pill px-3.5 py-2 rounded-xl text-xs font-bold font-mono transition-all duration-300 flex items-center gap-1.5 bg-slate-900/90 text-slate-400 border border-slate-800 hover:text-white hover:border-amber-400/50" data-app="diabos" data-title="Diabos Global" data-tag="Marine Logistics" data-dynamic="🚢 Diabos: Port PDA Approved" data-img="assets/images/diabos_mockup.png">
                <i class="fa-solid fa-ship text-amber-400"></i> Diabos Global
              </button>
              <button class="hero-app-pill px-3.5 py-2 rounded-xl text-xs font-bold font-mono transition-all duration-300 flex items-center gap-1.5 bg-slate-900/90 text-slate-400 border border-slate-800 hover:text-white hover:border-pink-400/50" data-app="foodmonster" data-title="Food Monster" data-tag="Lifestyle & Recipes" data-dynamic="🥗 Food Monster: 20k+ Recipes Synced" data-img="assets/images/foodmonster_mockup.png">
                <i class="fa-solid fa-seedling text-pink-400"></i> Food Monster
              </button>
            </div>
          </div>

          <!-- CTAs -->
          <div class="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
            <a href="#projects" class="px-6 py-3.5 rounded-2xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 shadow-glow-cyan transition-all duration-300 hover:scale-105 hover:shadow-cyan-400/50 flex items-center gap-2">
              <i class="fa-solid fa-layer-group"></i> Explore 15 Production Apps
            </a>
            <a href="https://github.com/sujitmore21" target="_blank" class="px-6 py-3.5 rounded-2xl font-semibold text-sm sm:text-base text-slate-200 bg-slate-900/90 border border-slate-800 transition-all duration-300 hover:scale-105 hover:border-cyan-400/60 hover:text-white flex items-center gap-2">
              <i class="fa-brands fa-github text-lg"></i> GitHub
            </a>
            <button onclick="copyToClipboard('sujitmore21@gmail.com', 'Email')" class="px-5 py-3.5 rounded-2xl font-medium text-xs sm:text-sm text-slate-300 bg-slate-950/80 border border-slate-800/80 transition-all duration-300 hover:scale-105 hover:border-cyan-400/40 flex items-center gap-2">
              <i class="fa-solid fa-envelope text-cyan-400"></i> sujitmore21@gmail.com
            </button>
          </div>

          <!-- Stats Counter Strip -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-800/80">
            <div class="p-3.5 rounded-2xl glass-card text-center transition-all duration-300 hover:scale-105 hover:shadow-glow-cyan hover:border-cyan-400/40">
              <div class="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono" data-count="9" data-suffix="+">9+</div>
              <div class="text-xs text-slate-400 font-medium mt-0.5">Years Experience</div>
            </div>
            <div class="p-3.5 rounded-2xl glass-card text-center transition-all duration-300 hover:scale-105 hover:shadow-glow-purple hover:border-purple-400/40">
              <div class="text-2xl sm:text-3xl font-extrabold text-purple-400 font-mono" data-count="15" data-suffix="">15</div>
              <div class="text-xs text-slate-400 font-medium mt-0.5">Production Apps</div>
            </div>
            <div class="p-3.5 rounded-2xl glass-card text-center transition-all duration-300 hover:scale-105 hover:shadow-glow-emerald hover:border-emerald-400/40">
              <div class="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono" data-count="500" data-suffix="k+">500k+</div>
              <div class="text-xs text-slate-400 font-medium mt-0.5">Active Users</div>
            </div>
            <div class="p-3.5 rounded-2xl glass-card text-center transition-all duration-300 hover:scale-105 hover:shadow-glow-cyan hover:border-cyan-400/40">
              <div class="text-2xl sm:text-3xl font-extrabold text-cyan-300 font-mono" data-count="99" data-suffix=".9%">99.9%</div>
              <div class="text-xs text-slate-400 font-medium mt-0.5">Crash-Free Rate</div>
            </div>
          </div>

          <!-- Enterprise Brands Marquee Strip -->
          <div class="pt-4 border-t border-slate-800/80">
            <p class="text-[11px] uppercase tracking-widest font-mono text-slate-400 font-semibold mb-2.5 text-center lg:text-left">
              <i class="fa-solid fa-shield-check text-cyan-400 mr-1.5"></i> Trusted by Enterprise Leaders & Global Brands
            </p>
            <div class="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-semibold text-slate-300 flex items-center gap-1.5 transition-all duration-300 hover:scale-105 hover:border-blue-400/50 hover:text-blue-300">
                <i class="fa-solid fa-building-columns text-blue-400"></i> ICICI Bank US
              </span>
              <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-semibold text-slate-300 flex items-center gap-1.5 transition-all duration-300 hover:scale-105 hover:border-emerald-400/50 hover:text-emerald-300">
                <i class="fa-solid fa-bolt text-emerald-400"></i> Reliance Jio-bp
              </span>
              <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-semibold text-slate-300 flex items-center gap-1.5 transition-all duration-300 hover:scale-105 hover:border-cyan-400/50 hover:text-cyan-300">
                <i class="fa-solid fa-anchor text-cyan-400"></i> Indian Ports Association
              </span>
              <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-semibold text-slate-300 flex items-center gap-1.5 transition-all duration-300 hover:scale-105 hover:border-amber-400/50 hover:text-amber-300">
                <i class="fa-solid fa-ship text-amber-400"></i> Diabos Global
              </span>
              <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-semibold text-slate-300 flex items-center gap-1.5 transition-all duration-300 hover:scale-105 hover:border-purple-400/50 hover:text-purple-300">
                <i class="fa-solid fa-chart-line text-purple-400"></i> MoneyMic US
              </span>
            </div>
          </div>

        </div>

        <!-- Right Column: Interactive Flagship Smartphone Simulator -->
        <div class="lg:col-span-5 relative flex justify-center items-center py-6">

          <!-- Floating Widget 1: Real-Time WebSocket Ticker (Top-Right) -->
          <div class="floating-widget -top-4 -right-2 sm:-right-6 p-3.5 rounded-2xl max-w-[200px] border border-cyan-400/40 shadow-glow-cyan hidden sm:block">
            <div class="flex items-center justify-between gap-2 mb-1">
              <span class="flex items-center gap-1.5 text-[11px] font-bold text-white font-mono">
                <i class="fa-brands fa-bitcoin text-amber-400"></i> BTC / USDT
              </span>
              <span class="px-1.5 py-0.5 rounded-md bg-emerald-500/20 text-emerald-400 text-[9px] font-mono font-bold animate-pulse">LIVE</span>
            </div>
            <div class="text-base font-extrabold text-emerald-400 font-mono" id="heroBtcPrice">$64,250.50</div>
            <div class="text-[10px] text-cyan-300 font-mono mt-0.5 flex items-center justify-between">
              <span>Sub-50ms</span>
              <span class="text-emerald-400 font-semibold">+3.45% ▲</span>
            </div>
          </div>

          <!-- Floating Widget 2: 120 FPS GPU Engine (Bottom-Left) -->
          <div class="floating-widget -bottom-4 -left-2 sm:-left-8 p-3.5 rounded-2xl max-w-[210px] border border-purple-400/40 shadow-glow-purple hidden sm:block" style="animation-delay: -3s;">
            <div class="flex items-center gap-2 mb-1">
              <div class="w-6 h-6 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center text-xs">
                <i class="fa-solid fa-microchip"></i>
              </div>
              <div>
                <div class="text-[11px] font-bold text-white font-mono">120 FPS Engine</div>
                <div class="text-[9px] text-purple-300 font-mono">CustomPainter Canvas</div>
              </div>
            </div>
            <div class="flex items-center justify-between text-[10px] text-slate-300 font-mono pt-1 border-t border-slate-800">
              <span class="text-emerald-400 font-bold">0 Jank Drops</span>
              <span class="text-slate-400">Riverpod 2.0</span>
            </div>
          </div>

          <!-- Floating Widget 3: Biometric Security & App Store Rating (Top-Left) -->
          <div class="floating-widget -top-6 -left-4 sm:-left-6 px-3.5 py-2 rounded-2xl border border-emerald-400/40 shadow-glow-emerald hidden sm:flex items-center gap-2" style="animation-delay: -1.5s;">
            <span class="text-amber-400 text-xs">★★★★★</span>
            <span class="text-[11px] font-bold text-white font-mono">4.9/5.0</span>
            <span class="text-[10px] text-slate-400 font-mono">• 500k+</span>
          </div>

          <!-- Realistic Smartphone Device Frame -->
          <div class="phone-mockup-wrapper">
            <div class="phone-mockup">
              
              <!-- Screen Viewport -->
              <div class="phone-screen">
                
                <!-- Specular Screen Glare -->
                <div class="phone-glare"></div>

                <!-- Status Bar -->
                <div class="phone-status-bar">
                  <span id="simulatorTime">9:41</span>
                  <div class="flex items-center gap-1.5 text-xs text-slate-200">
                    <i class="fa-solid fa-signal text-[10px]"></i>
                    <i class="fa-solid fa-wifi text-[10px]"></i>
                    <i class="fa-solid fa-battery-full text-xs text-emerald-400"></i>
                  </div>
                </div>

                <!-- Dynamic Island with Live Animated Notification Pill -->
                <div class="dynamic-island" id="simulatorDynamicIsland">
                  <div class="flex items-center gap-1.5 overflow-hidden">
                    <span class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shrink-0"></span>
                    <span class="text-[10px] font-mono text-cyan-300 font-bold truncate" id="simulatorDynamicText">
                      📈 MoneyMic: BTC +3.45% • $64,250
                    </span>
                  </div>
                  <i class="fa-solid fa-wave-pulse text-[10px] text-cyan-400 shrink-0"></i>
                </div>

                <!-- Active Screen Image Container -->
                <div class="phone-app-viewport pt-11 pb-8">
                  <img src="assets/images/moneymic_mockup.png" alt="Live App Mockup" id="simulatorScreenImg" class="phone-screen-img">
                </div>

                <!-- App Details Bottom Drawer Overlay inside phone -->
                <div class="absolute bottom-6 left-3 right-3 p-2.5 rounded-2xl bg-slate-950/90 backdrop-blur-md border border-slate-800/90 z-20 flex items-center justify-between text-xs font-mono">
                  <div class="flex items-center gap-2">
                    <div class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></div>
                    <div>
                      <span class="font-bold text-white block text-[11px]" id="simulatorAppTitle">MoneyMic US</span>
                      <span class="text-[9px] text-cyan-400" id="simulatorAppTag">Copy Trading Platform</span>
                    </div>
                  </div>
                  <a href="#projects" class="px-2.5 py-1 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-[10px] font-bold hover:bg-cyan-500 hover:text-white transition-colors">
                    Specs <i class="fa-solid fa-arrow-right text-[8px]"></i>
                  </a>
                </div>

                <!-- Home Indicator Bar -->
                <div class="phone-home-indicator"></div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  </section>
  `;
}

export function initHeroTypingEffect() {
  const words = [
    'Fintech & Copy Trading Apps',
    'Enterprise Banking Systems (ICICI)',
    '120 FPS High-Speed Mobile UIs',
    'Low-Latency WebSocket Streams',
    '15+ Production Mobile Apps'
  ];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const target = document.getElementById('typingTarget');
  if (!target) return;

  function type() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
      target.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      target.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    let typeSpeed = isDeleting ? 30 : 70;

    if (!isDeleting && charIndex === currentWord.length) {
      typeSpeed = 2200;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typeSpeed = 400;
    }

    setTimeout(type, typeSpeed);
  }

  type();
}

/**
 * Initializes Interactive Smartphone Simulator App Switcher
 */
export function initSmartphoneSimulator() {
  const appPills = document.querySelectorAll('.hero-app-pill');
  const screenImg = document.getElementById('simulatorScreenImg');
  const dynamicIsland = document.getElementById('simulatorDynamicIsland');
  const dynamicText = document.getElementById('simulatorDynamicText');
  const appTitle = document.getElementById('simulatorAppTitle');
  const appTag = document.getElementById('simulatorAppTag');
  const simTime = document.getElementById('simulatorTime');

  // Update time realistically
  if (simTime) {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    simTime.textContent = `${hours}:${minutes}`;
  }

  if (!appPills.length || !screenImg) return;

  appPills.forEach(pill => {
    pill.addEventListener('click', () => {
      // Remove active classes
      appPills.forEach(p => {
        p.classList.remove('active', 'bg-cyan-500/20', 'text-cyan-300', 'border-cyan-400/60', 'shadow-glow-cyan');
        p.classList.add('bg-slate-900/90', 'text-slate-400', 'border-slate-800');
      });

      // Activate clicked
      pill.classList.add('active', 'bg-cyan-500/20', 'text-cyan-300', 'border-cyan-400/60', 'shadow-glow-cyan');
      pill.classList.remove('bg-slate-900/90', 'text-slate-400', 'border-slate-800');

      const imgPath = pill.getAttribute('data-img');
      const title = pill.getAttribute('data-title');
      const tag = pill.getAttribute('data-tag');
      const dynamic = pill.getAttribute('data-dynamic');

      // Screen transition
      screenImg.style.opacity = '0';
      screenImg.style.transform = 'scale(0.96)';

      // Dynamic Island expand pulse
      if (dynamicIsland) {
        dynamicIsland.classList.add('expanded');
      }

      setTimeout(() => {
        if (imgPath) screenImg.src = imgPath;
        if (title && appTitle) appTitle.textContent = title;
        if (tag && appTag) appTag.textContent = tag;
        if (dynamic && dynamicText) dynamicText.textContent = dynamic;

        screenImg.style.opacity = '1';
        screenImg.style.transform = 'scale(1)';

        setTimeout(() => {
          if (dynamicIsland) dynamicIsland.classList.remove('expanded');
        }, 1200);
      }, 200);
    });
  });

  // Auto-cycle apps gently if user hasn't clicked for 10 seconds
  let currentIdx = 0;
  let autoCycleTimer = setInterval(() => {
    currentIdx = (currentIdx + 1) % appPills.length;
    appPills[currentIdx]?.click();
  }, 7000);

  // Stop auto-cycle when user hovers or clicks
  const switcherContainer = document.getElementById('heroAppSwitcher');
  switcherContainer?.addEventListener('mouseenter', () => clearInterval(autoCycleTimer));
  switcherContainer?.addEventListener('click', () => clearInterval(autoCycleTimer));
}
