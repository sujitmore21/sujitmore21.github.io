/**
 * Projects Component
 */
export function renderProjects() {
  return `
  <section class="py-20 relative" id="projects">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-12 space-y-4">
        <span class="px-3.5 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-xs font-mono font-bold uppercase tracking-wider border border-blue-500/20">
          Featured Mobile Showcase
        </span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Featured Production <span class="gradient-text">Projects</span>
        </h2>
        <p class="text-slate-400 text-base sm:text-lg">
          High-performance production mobile applications engineered for high concurrency, security, low-latency trading, and offline-first logistics.
        </p>
      </div>

      <!-- Project Filter Controls -->
      <div class="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
        <button class="project-filter-btn px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-300 bg-slate-900/80 border border-slate-800 transition-all duration-300 hover:scale-105 active" data-filter="all">
          <i class="fa-solid fa-grid-2 text-cyan-400 mr-1.5"></i> All Projects
        </button>
        <button class="project-filter-btn px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-400 bg-slate-900/80 border border-slate-800 transition-all duration-300 hover:scale-105" data-filter="fintech">
          <i class="fa-solid fa-chart-candlestick text-emerald-400 mr-1.5"></i> Trading & Crypto
        </button>
        <button class="project-filter-btn px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-400 bg-slate-900/80 border border-slate-800 transition-all duration-300 hover:scale-105" data-filter="enterprise">
          <i class="fa-solid fa-building-columns text-blue-400 mr-1.5"></i> Banking & Enterprise
        </button>
        <button class="project-filter-btn px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-400 bg-slate-900/80 border border-slate-800 transition-all duration-300 hover:scale-105" data-filter="logistics">
          <i class="fa-solid fa-ship text-amber-400 mr-1.5"></i> Logistics & Operations
        </button>
        <button class="project-filter-btn px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-400 bg-slate-900/80 border border-slate-800 transition-all duration-300 hover:scale-105" data-filter="lifestyle">
          <i class="fa-solid fa-leaf text-lime-400 mr-1.5"></i> Lifestyle & Consumer
        </button>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8" id="projectsGrid">

        <!-- 1. MoneyMic US -->
        <div class="project-card group glass-card rounded-3xl p-6 border border-slate-700/60 flex flex-col justify-between transition-all duration-300 hover:scale-[1.01] hover:shadow-glow-cyan hover:border-cyan-400/40" data-category="fintech">
          <div>
            <!-- Mobile Multi-Screen Showcase Image -->
            <div class="relative w-full h-52 sm:h-64 rounded-2xl overflow-hidden mb-5 border border-slate-800 shadow-xl group-hover:border-cyan-400/50 transition-all duration-300">
              <img src="assets/images/moneymic_mockup.png?v=3.0" alt="MoneyMic Mobile App Screens" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span class="px-3 py-1 rounded-full bg-cyan-500/90 text-white font-mono text-xs font-bold shadow-md">
                  <i class="fa-solid fa-mobile-screen mr-1"></i> Multi-Screen Showcase
                </span>
                <span class="px-2.5 py-1 rounded-full bg-slate-950/80 text-emerald-400 font-mono text-xs font-semibold backdrop-blur-md">
                  <i class="fa-solid fa-bolt mr-1"></i> WebSocket & MQTT
                </span>
              </div>
            </div>

            <div class="flex items-center justify-between mb-2">
              <span class="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 font-mono text-xs font-semibold">Copy Trading</span>
              <span class="text-xs text-slate-400 font-mono">Live iOS & Android</span>
            </div>
            <h3 class="text-2xl font-extrabold text-white mb-2">MoneyMic US — Real-Time Copy Trading</h3>
            <p class="text-sm text-slate-300 mb-4 leading-relaxed">
              Sub-second trade replication platform connecting follower accounts with expert master traders via WebSockets and MQTT with real-time portfolio tracking.
            </p>
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-cyan-400">Flutter</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-cyan-400">MVVM</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-cyan-400">WebSockets</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-cyan-400">MQTT</span>
            </div>
          </div>
          <button class="open-modal w-full py-3.5 rounded-xl bg-slate-800/90 border border-slate-700 font-semibold text-xs sm:text-sm text-slate-200 transition-all duration-300 hover:bg-cyan-500/20 hover:border-cyan-400 hover:text-white flex items-center justify-center gap-2" data-project="moneymic">
            <i class="fa-solid fa-code"></i> View Architecture & Specs <i class="fa-solid fa-arrow-right text-xs"></i>
          </button>
        </div>

        <!-- 2. ICICI Bank US -->
        <div class="project-card group glass-card rounded-3xl p-6 border border-slate-700/60 flex flex-col justify-between transition-all duration-300 hover:scale-[1.01] hover:shadow-glow-purple hover:border-purple-400/40" data-category="enterprise">
          <div>
            <!-- Mobile Multi-Screen Showcase Image -->
            <div class="relative w-full h-52 sm:h-64 rounded-2xl overflow-hidden mb-5 border border-slate-800 shadow-xl group-hover:border-blue-400/50 transition-all duration-300">
              <img src="assets/images/icici_mockup.png?v=3.0" alt="ICICI Bank Mobile App Screens" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span class="px-3 py-1 rounded-full bg-blue-600/90 text-white font-mono text-xs font-bold shadow-md">
                  <i class="fa-solid fa-building-columns mr-1"></i> Enterprise Banking
                </span>
                <span class="px-2.5 py-1 rounded-full bg-slate-950/80 text-cyan-300 font-mono text-xs font-semibold backdrop-blur-md">
                  <i class="fa-solid fa-lock mr-1"></i> AES-256 Encrypted
                </span>
              </div>
            </div>

            <div class="flex items-center justify-between mb-2">
              <span class="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 font-mono text-xs font-semibold">Enterprise Digital</span>
              <span class="text-xs text-slate-400 font-mono">ICICI Bank</span>
            </div>
            <h3 class="text-2xl font-extrabold text-white mb-2">ICICI Bank US – Digital Banking Application</h3>
            <p class="text-sm text-slate-300 mb-4 leading-relaxed">
              Enterprise mobile platform by ICICI Bank (iUniverse) streamlining end-to-end talent acquisition, geo-tagged job discovery, candidate tracking, and digital onboarding workflows.
            </p>
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-blue-400">Flutter</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-blue-400">Clean Arch</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-blue-400">Google Maps SDK</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-blue-400">AES-256</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-blue-400">REST APIs</span>
            </div>
          </div>
          <button class="open-modal w-full py-3.5 rounded-xl bg-slate-800/90 border border-slate-700 font-semibold text-xs sm:text-sm text-slate-200 transition-all duration-300 hover:bg-blue-500/20 hover:border-blue-400 hover:text-white flex items-center justify-center gap-2" data-project="icici">
            <i class="fa-solid fa-code"></i> View Architecture & Specs <i class="fa-solid fa-arrow-right text-xs"></i>
          </button>
        </div>

        <!-- 3. BitProEX Derivatives -->
        <div class="project-card group glass-card rounded-3xl p-6 border border-slate-700/60 flex flex-col justify-between transition-all duration-300 hover:scale-[1.01] hover:shadow-glow-emerald hover:border-emerald-400/40" data-category="fintech">
          <div>
            <!-- Mobile Multi-Screen Showcase Image -->
            <div class="relative w-full h-52 sm:h-64 rounded-2xl overflow-hidden mb-5 border border-slate-800 shadow-xl group-hover:border-emerald-400/50 transition-all duration-300">
              <img src="assets/images/bitproex_mockup.png?v=3.0" alt="BitProEX Mobile App Screens" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span class="px-3 py-1 rounded-full bg-emerald-500/90 text-white font-mono text-xs font-bold shadow-md">
                  <i class="fa-solid fa-chart-line mr-1"></i> Crypto Derivatives
                </span>
                <span class="px-2.5 py-1 rounded-full bg-slate-950/80 text-emerald-300 font-mono text-xs font-semibold backdrop-blur-md">
                  <i class="fa-solid fa-cubes mr-1"></i> BLoC State
                </span>
              </div>
            </div>

            <div class="flex items-center justify-between mb-2">
              <span class="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-mono text-xs font-semibold">Crypto Derivatives</span>
              <span class="text-xs text-slate-400 font-mono">High Frequency</span>
            </div>
            <h3 class="text-2xl font-extrabold text-white mb-2">BitProEX — Derivatives Exchange</h3>
            <p class="text-sm text-slate-300 mb-4 leading-relaxed">
              Global crypto derivatives platform supporting high-frequency order books, leverage sliders, stop-loss orders, and real-time market depth charts.
            </p>
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-emerald-400">Flutter</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-emerald-400">BLoC</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-emerald-400">WebSockets</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-emerald-400">Firebase</span>
            </div>
          </div>
          <button class="open-modal w-full py-3.5 rounded-xl bg-slate-800/90 border border-slate-700 font-semibold text-xs sm:text-sm text-slate-200 transition-all duration-300 hover:bg-emerald-500/20 hover:border-emerald-400 hover:text-white flex items-center justify-center gap-2" data-project="bitproex">
            <i class="fa-solid fa-code"></i> View Architecture & Specs <i class="fa-solid fa-arrow-right text-xs"></i>
          </button>
        </div>

        <!-- 4. Rampwiz – Fiat-to-Crypto Payment Gateway -->
        <div class="project-card group glass-card rounded-3xl p-6 border border-slate-700/60 flex flex-col justify-between transition-all duration-300 hover:scale-[1.01] hover:shadow-glow-purple hover:border-purple-400/40" data-category="fintech">
          <div>
            <!-- Mobile Multi-Screen Showcase Image -->
            <div class="relative w-full h-52 sm:h-64 rounded-2xl overflow-hidden mb-5 border border-slate-800 shadow-xl group-hover:border-purple-400/50 transition-all duration-300">
              <img src="assets/images/rampwiz_mockup.png?v=3.0" alt="Rampwiz Mobile App Screens" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span class="px-3 py-1 rounded-full bg-purple-600/90 text-white font-mono text-xs font-bold shadow-md">
                  <i class="fa-solid fa-credit-card mr-1"></i> Fiat On-Ramp
                </span>
                <span class="px-2.5 py-1 rounded-full bg-slate-950/80 text-purple-300 font-mono text-xs font-semibold backdrop-blur-md">
                  <i class="fa-solid fa-id-card-clip mr-1"></i> Automated KYC
                </span>
              </div>
            </div>

            <div class="flex items-center justify-between mb-2">
              <span class="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 font-mono text-xs font-semibold">Payment Gateway</span>
              <span class="text-xs text-slate-400 font-mono">Fibitpro</span>
            </div>
            <h3 class="text-2xl font-extrabold text-white mb-2">Rampwiz – Fiat-to-Crypto Payment Gateway</h3>
            <p class="text-sm text-slate-300 mb-4 leading-relaxed">
              Built a fiat-to-crypto payment gateway incorporating automated KYC verification routines, compliance workflows, and multi-currency fiat payment channels via BLoC.
            </p>
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-purple-400">Flutter</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-purple-400">Firebase</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-purple-400">BLoC</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-purple-400">Clean Architecture</span>
            </div>
          </div>
          <button class="open-modal w-full py-3.5 rounded-xl bg-slate-800/90 border border-slate-700 font-semibold text-xs sm:text-sm text-slate-200 transition-all duration-300 hover:bg-purple-500/20 hover:border-purple-400 hover:text-white flex items-center justify-center gap-2" data-project="rampwiz">
            <i class="fa-solid fa-code"></i> View Architecture & Specs <i class="fa-solid fa-arrow-right text-xs"></i>
          </button>
        </div>

        <!-- 5. CoinCRED Pro – Global Crypto Exchange -->
        <div class="project-card group glass-card rounded-3xl p-6 border border-slate-700/60 flex flex-col justify-between transition-all duration-300 hover:scale-[1.01] hover:shadow-glow-cyan hover:border-cyan-400/40" data-category="fintech">
          <div>
            <!-- Mobile Multi-Screen Showcase Image -->
            <div class="relative w-full h-52 sm:h-64 rounded-2xl overflow-hidden mb-5 border border-slate-800 shadow-xl group-hover:border-cyan-400/50 transition-all duration-300">
              <img src="assets/images/coincred_mockup.png?v=3.0" alt="CoinCRED Pro Mobile App Screens" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span class="px-3 py-1 rounded-full bg-cyan-600/90 text-white font-mono text-xs font-bold shadow-md">
                  <i class="fa-solid fa-chart-line mr-1"></i> Spot & Futures
                </span>
                <span class="px-2.5 py-1 rounded-full bg-slate-950/80 text-cyan-300 font-mono text-xs font-semibold backdrop-blur-md">
                  <i class="fa-solid fa-shield-halved mr-1"></i> Live on Stores
                </span>
              </div>
            </div>

            <div class="flex items-center justify-between mb-2">
              <span class="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 font-mono text-xs font-semibold">Crypto Exchange</span>
              <span class="text-xs text-slate-400 font-mono">Fibitpro</span>
            </div>
            <h3 class="text-2xl font-extrabold text-white mb-2">CoinCRED Pro – Global Crypto Exchange</h3>
            <p class="text-sm text-slate-300 mb-4 leading-relaxed">
              Delivered a multi-platform crypto exchange app featuring KYC workflows, wallet balance tracking, and secure trading services; deployed to App Store and Play Store.
            </p>
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-cyan-400">Flutter</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-cyan-400">Firebase</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-cyan-400">Provider</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-cyan-400">MVVM</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-cyan-400">WebSockets</span>
            </div>
          </div>
          <button class="open-modal w-full py-3.5 rounded-xl bg-slate-800/90 border border-slate-700 font-semibold text-xs sm:text-sm text-slate-200 transition-all duration-300 hover:bg-cyan-500/20 hover:border-cyan-400 hover:text-white flex items-center justify-center gap-2" data-project="coincred">
            <i class="fa-solid fa-code"></i> View Architecture & Specs <i class="fa-solid fa-arrow-right text-xs"></i>
          </button>
        </div>

        <!-- 4. Diabos Global Shipping -->
        <div class="project-card group glass-card rounded-3xl p-6 border border-slate-700/60 flex flex-col justify-between transition-all duration-300 hover:scale-[1.01] hover:shadow-glow-amber hover:border-amber-400/40" data-category="logistics">
          <div>
            <!-- Mobile Multi-Screen Showcase Image -->
            <div class="relative w-full h-52 sm:h-64 rounded-2xl overflow-hidden mb-5 border border-slate-800 shadow-xl group-hover:border-amber-400/50 transition-all duration-300">
              <img src="assets/images/diabos_mockup.png?v=3.0" alt="Diabos Mobile App Screens" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span class="px-3 py-1 rounded-full bg-amber-500/90 text-white font-mono text-xs font-bold shadow-md">
                  <i class="fa-solid fa-ship mr-1"></i> Maritime Logistics
                </span>
                <span class="px-2.5 py-1 rounded-lg bg-slate-950/80 text-amber-300 font-mono text-xs font-semibold backdrop-blur-md">
                  <i class="fa-solid fa-database mr-1"></i> SQLite Offline
                </span>
              </div>
            </div>

            <div class="flex items-center justify-between mb-2">
              <span class="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 font-mono text-xs font-semibold">Offline-First Logistics</span>
              <span class="text-xs text-slate-400 font-mono">500+ Daily Operators</span>
            </div>
            <h3 class="text-2xl font-extrabold text-white mb-2">Diabos</h3>
            <p class="text-sm text-slate-300 mb-4 leading-relaxed">
              Offline-first maritime logistics and disbursement accounting platform used by daily port agents worldwide for low-connectivity vessel management.
            </p>
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-amber-400">Flutter</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-amber-400">SQLite</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-amber-400">GetX</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-amber-400">Background Sync</span>
            </div>
          </div>
          <div class="space-y-3 mt-auto">
            <!-- App Store & Play Store Links -->
            <div class="grid grid-cols-2 gap-2.5">
              <a href="https://play.google.com/store/apps/details?id=com.diabos.globalfze&hl=en_IN" target="_blank" rel="noopener noreferrer" class="py-2.5 px-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-amber-400/60 hover:bg-amber-500/10 text-slate-300 hover:text-white font-mono text-xs font-semibold flex items-center justify-center gap-1.5 transition-all duration-300 hover:scale-[1.02]">
                <i class="fa-brands fa-google-play text-amber-400 text-sm"></i> Play Store
              </a>
              <a href="https://apps.apple.com/us/app/diabos-3-0/id6472989764" target="_blank" rel="noopener noreferrer" class="py-2.5 px-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-400/60 hover:bg-cyan-500/10 text-slate-300 hover:text-white font-mono text-xs font-semibold flex items-center justify-center gap-1.5 transition-all duration-300 hover:scale-[1.02]">
                <i class="fa-brands fa-apple text-cyan-400 text-sm"></i> App Store
              </a>
            </div>

            <button class="open-modal w-full py-3.5 rounded-xl bg-slate-800/90 border border-slate-700 font-semibold text-xs sm:text-sm text-slate-200 transition-all duration-300 hover:bg-amber-500/20 hover:border-amber-400 hover:text-white flex items-center justify-center gap-2" data-project="diabos">
              <i class="fa-solid fa-code"></i> View Architecture & Specs <i class="fa-solid fa-arrow-right text-xs"></i>
            </button>
          </div>
        </div>

        <!-- 5. Jiobp My-Station -->
        <div class="project-card group glass-card rounded-3xl p-6 border border-slate-700/60 flex flex-col justify-between transition-all duration-300 hover:scale-[1.01] hover:shadow-glow-emerald hover:border-emerald-400/40" data-category="enterprise logistics">
          <div>
            <!-- Mobile Multi-Screen Showcase Image -->
            <div class="relative w-full h-52 sm:h-64 rounded-2xl overflow-hidden mb-5 border border-slate-800 shadow-xl group-hover:border-emerald-400/50 transition-all duration-300">
              <img src="assets/images/jiobp_mockup.png?v=3.0" alt="Jiobp My-Station Mobile App Screens" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span class="px-3 py-1 rounded-full bg-emerald-600/90 text-white font-mono text-xs font-bold shadow-md">
                  <i class="fa-solid fa-gas-pump mr-1"></i> Jio-bp Mobility
                </span>
                <span class="px-2.5 py-1 rounded-full bg-slate-950/80 text-emerald-300 font-mono text-xs font-semibold backdrop-blur-md">
                  <i class="fa-solid fa-cloud-arrow-down mr-1"></i> Live on Stores
                </span>
              </div>
            </div>

            <div class="flex items-center justify-between mb-2">
              <span class="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-mono text-xs font-semibold">Retail & Operations</span>
              <span class="text-xs text-slate-400 font-mono">Reliance Jio-bp</span>
            </div>
            <h3 class="text-2xl font-extrabold text-white mb-2">Jiobp My-Station — Partner Operations</h3>
            <p class="text-sm text-slate-300 mb-4 leading-relaxed">
              Enterprise mobility platform for Reliance BP Mobility Limited (Jio-bp) station managers across India, managing fuel inventory, dispenser meter readings, daily shift reconciliation, and billing.
            </p>
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-emerald-400">Flutter</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-emerald-400">GetX</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-emerald-400">SQLite Offline</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-emerald-400">REST APIs</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-emerald-400">Firebase</span>
            </div>
          </div>

          <div class="space-y-3 mt-auto">
            <!-- App Store & Play Store Links -->
            <div class="grid grid-cols-2 gap-2.5">
              <a href="https://play.google.com/store/apps/details?id=com.jiobp.my_station&hl=en_IN" target="_blank" rel="noopener noreferrer" class="py-2.5 px-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-emerald-400/60 hover:bg-emerald-500/10 text-slate-300 hover:text-white font-mono text-xs font-semibold flex items-center justify-center gap-1.5 transition-all duration-300 hover:scale-[1.02]">
                <i class="fa-brands fa-google-play text-emerald-400 text-sm"></i> Play Store
              </a>
              <a href="https://apps.apple.com/in/app/jiobp-my-station/id6450923655" target="_blank" rel="noopener noreferrer" class="py-2.5 px-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-400/60 hover:bg-cyan-500/10 text-slate-300 hover:text-white font-mono text-xs font-semibold flex items-center justify-center gap-1.5 transition-all duration-300 hover:scale-[1.02]">
                <i class="fa-brands fa-apple text-cyan-400 text-sm"></i> App Store
              </a>
            </div>

            <button class="open-modal w-full py-3.5 rounded-xl bg-slate-800/90 border border-slate-700 font-semibold text-xs sm:text-sm text-slate-200 transition-all duration-300 hover:bg-emerald-500/20 hover:border-emerald-400 hover:text-white flex items-center justify-center gap-2" data-project="jiobp">
              <i class="fa-solid fa-code"></i> View Architecture & Specs <i class="fa-solid fa-arrow-right text-xs"></i>
            </button>
          </div>
        </div>

        <!-- 6. jio-bp pulse Charge Pro -->
        <div class="project-card group glass-card rounded-3xl p-6 border border-slate-700/60 flex flex-col justify-between transition-all duration-300 hover:scale-[1.01] hover:shadow-glow-cyan hover:border-cyan-400/40" data-category="enterprise logistics">
          <div>
            <!-- Mobile Multi-Screen Showcase Image -->
            <div class="relative w-full h-52 sm:h-64 rounded-2xl overflow-hidden mb-5 border border-slate-800 shadow-xl group-hover:border-cyan-400/50 transition-all duration-300">
              <img src="assets/images/jiobp_pulse_mockup.png?v=3.0" alt="jio-bp pulse Charge Pro Mobile App Screens" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span class="px-3 py-1 rounded-full bg-cyan-600/90 text-white font-mono text-xs font-bold shadow-md">
                  <i class="fa-solid fa-bolt-lightning mr-1"></i> EV Smart Charging
                </span>
                <span class="px-2.5 py-1 rounded-full bg-slate-950/80 text-cyan-300 font-mono text-xs font-semibold backdrop-blur-md">
                  <i class="fa-solid fa-cloud-arrow-down mr-1"></i> Live on Stores
                </span>
              </div>
            </div>

            <div class="flex items-center justify-between mb-2">
              <span class="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 font-mono text-xs font-semibold">EV & Smart Mobility</span>
              <span class="text-xs text-slate-400 font-mono">Reliance Jio-bp pulse</span>
            </div>
            <h3 class="text-2xl font-extrabold text-white mb-2">jio-bp pulse Charge Pro</h3>
            <p class="text-sm text-slate-300 mb-4 leading-relaxed">
              Enterprise EV charging mobility companion app by Reliance BP Mobility Limited (Jio-bp pulse), empowering EV drivers to discover live charging stations, filter connector standards (CCS, Type 2, GBT), reserve slots, and track charging sessions.
            </p>
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-cyan-400">Flutter</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-cyan-400">Google Maps SDK</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-cyan-400">GetX</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-cyan-400">Clean Arch</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-cyan-400">IoT / MQTT</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-cyan-400">Payment Gateway</span>
            </div>
          </div>

          <div class="space-y-3 mt-auto">
            <!-- App Store & Play Store Links -->
            <div class="grid grid-cols-2 gap-2.5">
              <a href="https://play.google.com/store/apps/details?id=com.jiobp.pulse_charge&hl=en_IN" target="_blank" rel="noopener noreferrer" class="py-2.5 px-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-400/60 hover:bg-cyan-500/10 text-slate-300 hover:text-white font-mono text-xs font-semibold flex items-center justify-center gap-1.5 transition-all duration-300 hover:scale-[1.02]">
                <i class="fa-brands fa-google-play text-cyan-400 text-sm"></i> Play Store
              </a>
              <a href="https://apps.apple.com/us/app/bp-pulse-ev-charging/id6448033048" target="_blank" rel="noopener noreferrer" class="py-2.5 px-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-400/60 hover:bg-cyan-500/10 text-slate-300 hover:text-white font-mono text-xs font-semibold flex items-center justify-center gap-1.5 transition-all duration-300 hover:scale-[1.02]">
                <i class="fa-brands fa-apple text-cyan-400 text-sm"></i> App Store
              </a>
            </div>

            <button class="open-modal w-full py-3.5 rounded-xl bg-slate-800/90 border border-slate-700 font-semibold text-xs sm:text-sm text-slate-200 transition-all duration-300 hover:bg-cyan-500/20 hover:border-cyan-400 hover:text-white flex items-center justify-center gap-2" data-project="jiobp_pulse">
              <i class="fa-solid fa-code"></i> View Architecture & Specs <i class="fa-solid fa-arrow-right text-xs"></i>
            </button>
          </div>
        </div>

        <!-- 7. Food Monster Vegan Recipes -->
        <div class="project-card group glass-card rounded-3xl p-6 border border-slate-700/60 flex flex-col justify-between transition-all duration-300 hover:scale-[1.01] hover:shadow-glow-pink hover:border-pink-400/40" data-category="lifestyle">
          <div>
            <!-- Mobile Multi-Screen Showcase Image -->
            <div class="relative w-full h-52 sm:h-64 rounded-2xl overflow-hidden mb-5 border border-slate-800 shadow-xl group-hover:border-emerald-400/50 transition-all duration-300">
              <img src="assets/images/foodmonster_mockup.png?v=3.0" alt="Food Monster Mobile App Screens" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span class="px-3 py-1 rounded-full bg-emerald-500/90 text-white font-mono text-xs font-bold shadow-md">
                  <i class="fa-solid fa-seedling mr-1"></i> 20,000+ Recipes
                </span>
                <span class="px-2.5 py-1 rounded-full bg-slate-950/80 text-emerald-300 font-mono text-xs font-semibold backdrop-blur-md">
                  <i class="fa-brands fa-apple mr-1"></i> Live on iOS
                </span>
              </div>
            </div>

            <div class="flex items-center justify-between mb-2">
              <span class="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-mono text-xs font-semibold">Plant-Based & Vegan</span>
              <span class="text-xs text-slate-400 font-mono">One Green Planet</span>
            </div>
            <h3 class="text-2xl font-extrabold text-white mb-2">Food Monster — Vegan Recipes Platform</h3>
            <p class="text-sm text-slate-300 mb-4 leading-relaxed">
              Top-ranked plant-based culinary iOS application featuring 20,000+ meatless & dairy-free recipes, category discovery, multi-tier IAP subscriptions, and bookmarking.
            </p>
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-pink-400">Flutter / iOS</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-pink-400">In-App Purchase</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-pink-400">Social Auth</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-pink-400">Clean Arch</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-pink-400">Firebase</span>
            </div>
          </div>

          <div class="space-y-3 mt-auto">
            <!-- App Store Link -->
            <a href="https://apps.apple.com/us/app/food-monster-vegan-recipes/id1052988561" target="_blank" rel="noopener noreferrer" class="w-full py-2.5 px-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-400/60 hover:bg-cyan-500/10 text-slate-300 hover:text-white font-mono text-xs font-semibold flex items-center justify-center gap-1.5 transition-all duration-300 hover:scale-[1.02]">
              <i class="fa-brands fa-apple text-cyan-400 text-sm"></i> Apple App Store
            </a>

            <button class="open-modal w-full py-3.5 rounded-xl bg-slate-800/90 border border-slate-700 font-semibold text-xs sm:text-sm text-slate-200 transition-all duration-300 hover:bg-emerald-500/20 hover:border-emerald-400 hover:text-white flex items-center justify-center gap-2" data-project="foodmonster">
              <i class="fa-solid fa-code"></i> View Architecture & Specs <i class="fa-solid fa-arrow-right text-xs"></i>
            </button>
          </div>
        </div>

      </div>

    </div>
  </section>
  `;
}

export function initProjectFilterEvents() {
  const filterBtns = document.querySelectorAll('.project-filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active', 'text-slate-300'));
      btn.classList.add('active', 'text-slate-300');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category') || '';
        const categories = category.split(' ');
        if (filterValue === 'all' || categories.includes(filterValue)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 30);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });
}
