/**
 * Projects Component - Production Showcase
 * Contains all 11 production projects with interactive architecture modals,
 * direct store links, and high-impact visual design.
 */
export function renderProjects() {
  return `
  <section class="py-20 relative" id="projects">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-12 space-y-4">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider border border-cyan-500/20 shadow-glow-cyan">
          <i class="fa-solid fa-layer-group text-cyan-400"></i> Featured Production Portfolio (11 Apps)
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Featured Production <span class="gradient-text">Projects</span>
        </h2>
        <p class="text-slate-400 text-base sm:text-lg">
          High-performance production mobile applications engineered for high concurrency, security, low-latency trading, and offline-first logistics.
        </p>
      </div>

      <!-- Project Filter Controls with Dynamic Counts -->
      <div class="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
        <button class="project-filter-btn px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-300 bg-slate-900/80 border border-slate-800 transition-all duration-300 hover:scale-105 active flex items-center gap-2" data-filter="all">
          <i class="fa-solid fa-grid-2 text-cyan-400"></i> All Projects
          <span class="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-mono font-bold">11</span>
        </button>
        <button class="project-filter-btn px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-400 bg-slate-900/80 border border-slate-800 transition-all duration-300 hover:scale-105 flex items-center gap-2" data-filter="fintech">
          <i class="fa-solid fa-chart-candlestick text-emerald-400"></i> Trading & Crypto
          <span class="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-mono font-bold">4</span>
        </button>
        <button class="project-filter-btn px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-400 bg-slate-900/80 border border-slate-800 transition-all duration-300 hover:scale-105 flex items-center gap-2" data-filter="enterprise">
          <i class="fa-solid fa-building-columns text-blue-400"></i> Banking & Enterprise
          <span class="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-mono font-bold">5</span>
        </button>
        <button class="project-filter-btn px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-400 bg-slate-900/80 border border-slate-800 transition-all duration-300 hover:scale-105 flex items-center gap-2" data-filter="logistics">
          <i class="fa-solid fa-ship text-amber-400"></i> Logistics & Operations
          <span class="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-mono font-bold">5</span>
        </button>
        <button class="project-filter-btn px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-400 bg-slate-900/80 border border-slate-800 transition-all duration-300 hover:scale-105 flex items-center gap-2" data-filter="lifestyle">
          <i class="fa-solid fa-leaf text-lime-400"></i> Lifestyle & Consumer
          <span class="px-2 py-0.5 rounded-full bg-lime-500/20 text-lime-300 text-xs font-mono font-bold">1</span>
        </button>
      </div>

      <!-- Projects Grid (11 Production Apps) -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8" id="projectsGrid">

        <!-- 1. MoneyMic US -->
        <div class="project-card group glass-card hover-lift rounded-3xl p-6 sm:p-7 border border-slate-700/60 flex flex-col justify-between hover:shadow-glow-cyan hover:border-cyan-400/50" data-category="fintech">
          <div>
            <!-- Header Badges -->
            <div class="flex items-center justify-between gap-2 mb-4">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 text-xs font-semibold font-mono">
                <i class="fa-solid fa-chart-line text-cyan-400"></i> Copy Trading
              </span>
              <span class="text-xs font-semibold text-slate-400 font-mono bg-slate-900/90 px-2.5 py-1 rounded-lg border border-slate-800">
                <i class="fa-solid fa-globe text-cyan-400 mr-1"></i> MoneyMic US
              </span>
            </div>

            <!-- Mobile Multi-Screen Showcase Image -->
            <div class="relative w-full h-52 sm:h-64 rounded-2xl overflow-hidden mb-5 border border-slate-800 shadow-xl group-hover:border-cyan-400/60 transition-all duration-300">
              <img src="assets/images/moneymic_mockup.png?v=3.0" alt="MoneyMic Mobile App Screens" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent"></div>
              <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span class="px-3 py-1 rounded-full bg-cyan-500/90 text-white font-mono text-xs font-bold shadow-md backdrop-blur-md">
                  <i class="fa-solid fa-mobile-screen mr-1"></i> Multi-Screen Showcase
                </span>
                <span class="px-2.5 py-1 rounded-full bg-slate-950/85 text-emerald-400 font-mono text-xs font-semibold backdrop-blur-md border border-emerald-500/30">
                  <i class="fa-solid fa-bolt mr-1"></i> WebSocket & MQTT
                </span>
              </div>
            </div>

            <!-- Metric Strip -->
            <div class="metric-pill p-2.5 rounded-xl mb-4 flex items-center justify-between text-xs font-mono text-slate-300">
              <span class="flex items-center gap-1.5"><i class="fa-solid fa-gauge-high text-cyan-400"></i> Sub-50ms Latency</span>
              <span class="text-slate-500">|</span>
              <span class="flex items-center gap-1.5"><i class="fa-solid fa-users text-emerald-400"></i> 50+ Concurrent Streams</span>
            </div>

            <h3 class="text-2xl font-extrabold text-white mb-2 group-hover:text-cyan-300 transition-colors">MoneyMic US — Real-Time Copy Trading</h3>
            <p class="text-sm text-slate-300 mb-4 leading-relaxed">
              Sub-second trade replication platform connecting follower accounts with expert master traders via WebSockets and MQTT with real-time portfolio tracking.
            </p>
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-cyan-400 border border-slate-800">Flutter</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-cyan-400 border border-slate-800">MVVM</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-cyan-400 border border-slate-800">WebSockets</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-cyan-400 border border-slate-800">MQTT</span>
            </div>
          </div>
          <button class="open-modal w-full py-3.5 rounded-xl bg-slate-800/90 border border-slate-700 font-semibold text-xs sm:text-sm text-slate-200 transition-all duration-300 hover:bg-cyan-500/20 hover:border-cyan-400 hover:text-white flex items-center justify-center gap-2" data-project="moneymic">
            <i class="fa-solid fa-code"></i> View Architecture & Specs <i class="fa-solid fa-arrow-right text-xs"></i>
          </button>
        </div>

        <!-- 2. ICICI Bank US -->
        <div class="project-card group glass-card hover-lift rounded-3xl p-6 sm:p-7 border border-slate-700/60 flex flex-col justify-between hover:shadow-glow-blue hover:border-blue-400/50" data-category="enterprise">
          <div>
            <!-- Header Badges -->
            <div class="flex items-center justify-between gap-2 mb-4">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/15 text-blue-300 border border-blue-500/30 text-xs font-semibold font-mono">
                <i class="fa-solid fa-building-columns text-blue-400"></i> Digital Banking
              </span>
              <span class="text-xs font-semibold text-slate-400 font-mono bg-slate-900/90 px-2.5 py-1 rounded-lg border border-slate-800">
                <i class="fa-solid fa-landmark text-blue-400 mr-1"></i> ICICI Bank US
              </span>
            </div>

            <!-- Mobile Multi-Screen Showcase Image -->
            <div class="relative w-full h-52 sm:h-64 rounded-2xl overflow-hidden mb-5 border border-slate-800 shadow-xl group-hover:border-blue-400/60 transition-all duration-300">
              <img src="assets/images/icici_mockup.png?v=3.0" alt="ICICI Bank Mobile App Screens" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent"></div>
              <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span class="px-3 py-1 rounded-full bg-blue-600/90 text-white font-mono text-xs font-bold shadow-md backdrop-blur-md">
                  <i class="fa-solid fa-shield-halved mr-1"></i> Enterprise Banking
                </span>
                <span class="px-2.5 py-1 rounded-full bg-slate-950/85 text-cyan-300 font-mono text-xs font-semibold backdrop-blur-md border border-cyan-500/30">
                  <i class="fa-solid fa-lock mr-1"></i> AES-256 Encrypted
                </span>
              </div>
            </div>

            <!-- Metric Strip -->
            <div class="metric-pill p-2.5 rounded-xl mb-4 flex items-center justify-between text-xs font-mono text-slate-300">
              <span class="flex items-center gap-1.5"><i class="fa-solid fa-map-location-dot text-blue-400"></i> Google Maps SDK</span>
              <span class="text-slate-500">|</span>
              <span class="flex items-center gap-1.5"><i class="fa-solid fa-fingerprint text-cyan-400"></i> Biometric Onboarding</span>
            </div>

            <h3 class="text-2xl font-extrabold text-white mb-2 group-hover:text-blue-300 transition-colors">ICICI Bank US – Digital Banking Application</h3>
            <p class="text-sm text-slate-300 mb-4 leading-relaxed">
              Enterprise digital banking application by ICICI Bank streamlining talent discovery, geo-tagged job mapping via Google Maps SDK, candidate tracking, and AES-256 encrypted onboarding.
            </p>
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-blue-400 border border-slate-800">Flutter</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-blue-400 border border-slate-800">Clean Arch</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-blue-400 border border-slate-800">Google Maps</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-blue-400 border border-slate-800">AES-256</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-blue-400 border border-slate-800">REST APIs</span>
            </div>
          </div>
          <button class="open-modal w-full py-3.5 rounded-xl bg-slate-800/90 border border-slate-700 font-semibold text-xs sm:text-sm text-slate-200 transition-all duration-300 hover:bg-blue-500/20 hover:border-blue-400 hover:text-white flex items-center justify-center gap-2" data-project="icici">
            <i class="fa-solid fa-code"></i> View Architecture & Specs <i class="fa-solid fa-arrow-right text-xs"></i>
          </button>
        </div>

        <!-- 3. BitProEX Derivatives -->
        <div class="project-card group glass-card hover-lift rounded-3xl p-6 sm:p-7 border border-slate-700/60 flex flex-col justify-between hover:shadow-glow-emerald hover:border-emerald-400/50" data-category="fintech">
          <div>
            <!-- Header Badges -->
            <div class="flex items-center justify-between gap-2 mb-4">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 text-xs font-semibold font-mono">
                <i class="fa-solid fa-chart-candlestick text-emerald-400"></i> Crypto Derivatives
              </span>
              <span class="text-xs font-semibold text-slate-400 font-mono bg-slate-900/90 px-2.5 py-1 rounded-lg border border-slate-800">
                <i class="fa-solid fa-bolt text-emerald-400 mr-1"></i> High Frequency
              </span>
            </div>

            <!-- Mobile Multi-Screen Showcase Image -->
            <div class="relative w-full h-52 sm:h-64 rounded-2xl overflow-hidden mb-5 border border-slate-800 shadow-xl group-hover:border-emerald-400/60 transition-all duration-300">
              <img src="assets/images/bitproex_mockup.png?v=3.0" alt="BitProEX Mobile App Screens" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent"></div>
              <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span class="px-3 py-1 rounded-full bg-emerald-500/90 text-white font-mono text-xs font-bold shadow-md backdrop-blur-md">
                  <i class="fa-solid fa-chart-line mr-1"></i> Crypto Derivatives
                </span>
                <span class="px-2.5 py-1 rounded-full bg-slate-950/85 text-emerald-300 font-mono text-xs font-semibold backdrop-blur-md border border-emerald-500/30">
                  <i class="fa-solid fa-cubes mr-1"></i> BLoC Architecture
                </span>
              </div>
            </div>

            <!-- Metric Strip -->
            <div class="metric-pill p-2.5 rounded-xl mb-4 flex items-center justify-between text-xs font-mono text-slate-300">
              <span class="flex items-center gap-1.5"><i class="fa-solid fa-coins text-emerald-400"></i> 100+ Crypto Pairs</span>
              <span class="text-slate-500">|</span>
              <span class="flex items-center gap-1.5"><i class="fa-solid fa-sliders text-cyan-400"></i> 125x Leverage Engine</span>
            </div>

            <h3 class="text-2xl font-extrabold text-white mb-2 group-hover:text-emerald-300 transition-colors">BitProEX — Derivatives Exchange</h3>
            <p class="text-sm text-slate-300 mb-4 leading-relaxed">
              Global crypto derivatives platform supporting high-frequency order books, leverage sliders, stop-loss orders, and real-time market depth charts.
            </p>
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-emerald-400 border border-slate-800">Flutter</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-emerald-400 border border-slate-800">BLoC</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-emerald-400 border border-slate-800">WebSockets</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-emerald-400 border border-slate-800">Firebase</span>
            </div>
          </div>
          <button class="open-modal w-full py-3.5 rounded-xl bg-slate-800/90 border border-slate-700 font-semibold text-xs sm:text-sm text-slate-200 transition-all duration-300 hover:bg-emerald-500/20 hover:border-emerald-400 hover:text-white flex items-center justify-center gap-2" data-project="bitproex">
            <i class="fa-solid fa-code"></i> View Architecture & Specs <i class="fa-solid fa-arrow-right text-xs"></i>
          </button>
        </div>

        <!-- 4. Rampwiz – Fiat-to-Crypto Payment Gateway -->
        <div class="project-card group glass-card hover-lift rounded-3xl p-6 sm:p-7 border border-slate-700/60 flex flex-col justify-between hover:shadow-glow-purple hover:border-purple-400/50" data-category="fintech">
          <div>
            <!-- Header Badges -->
            <div class="flex items-center justify-between gap-2 mb-4">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/30 text-xs font-semibold font-mono">
                <i class="fa-solid fa-credit-card text-purple-400"></i> Payment Gateway
              </span>
              <span class="text-xs font-semibold text-slate-400 font-mono bg-slate-900/90 px-2.5 py-1 rounded-lg border border-slate-800">
                <i class="fa-solid fa-shield-halved text-purple-400 mr-1"></i> Fibitpro
              </span>
            </div>

            <!-- Mobile Multi-Screen Showcase Image -->
            <div class="relative w-full h-52 sm:h-64 rounded-2xl overflow-hidden mb-5 border border-slate-800 shadow-xl group-hover:border-purple-400/60 transition-all duration-300">
              <img src="assets/images/rampwiz_mockup.png?v=3.0" alt="Rampwiz Mobile App Screens" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent"></div>
              <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span class="px-3 py-1 rounded-full bg-purple-600/90 text-white font-mono text-xs font-bold shadow-md backdrop-blur-md">
                  <i class="fa-solid fa-money-bill-transfer mr-1"></i> Fiat On-Ramp
                </span>
                <span class="px-2.5 py-1 rounded-full bg-slate-950/85 text-purple-300 font-mono text-xs font-semibold backdrop-blur-md border border-purple-500/30">
                  <i class="fa-solid fa-id-card-clip mr-1"></i> Automated KYC
                </span>
              </div>
            </div>

            <!-- Metric Strip -->
            <div class="metric-pill p-2.5 rounded-xl mb-4 flex items-center justify-between text-xs font-mono text-slate-300">
              <span class="flex items-center gap-1.5"><i class="fa-solid fa-globe text-purple-400"></i> Multi-Currency Fiat</span>
              <span class="text-slate-500">|</span>
              <span class="flex items-center gap-1.5"><i class="fa-solid fa-shield-check text-emerald-400"></i> Compliance Verified</span>
            </div>

            <h3 class="text-2xl font-extrabold text-white mb-2 group-hover:text-purple-300 transition-colors">Rampwiz – Fiat-to-Crypto Payment Gateway</h3>
            <p class="text-sm text-slate-300 mb-4 leading-relaxed">
              Fiat-to-crypto payment gateway incorporating automated KYC verification routines, compliance workflows, and multi-currency fiat payment channels via BLoC.
            </p>
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-purple-400 border border-slate-800">Flutter</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-purple-400 border border-slate-800">Firebase</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-purple-400 border border-slate-800">BLoC</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-purple-400 border border-slate-800">Clean Arch</span>
            </div>
          </div>
          <button class="open-modal w-full py-3.5 rounded-xl bg-slate-800/90 border border-slate-700 font-semibold text-xs sm:text-sm text-slate-200 transition-all duration-300 hover:bg-purple-500/20 hover:border-purple-400 hover:text-white flex items-center justify-center gap-2" data-project="rampwiz">
            <i class="fa-solid fa-code"></i> View Architecture & Specs <i class="fa-solid fa-arrow-right text-xs"></i>
          </button>
        </div>

        <!-- 5. CoinCRED Pro – Global Crypto Exchange -->
        <div class="project-card group glass-card hover-lift rounded-3xl p-6 sm:p-7 border border-slate-700/60 flex flex-col justify-between hover:shadow-glow-cyan hover:border-cyan-400/50" data-category="fintech">
          <div>
            <!-- Header Badges -->
            <div class="flex items-center justify-between gap-2 mb-4">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 text-xs font-semibold font-mono">
                <i class="fa-solid fa-arrow-right-arrow-left text-cyan-400"></i> Crypto Exchange
              </span>
              <span class="text-xs font-semibold text-slate-400 font-mono bg-slate-900/90 px-2.5 py-1 rounded-lg border border-slate-800">
                <i class="fa-solid fa-building text-cyan-400 mr-1"></i> Fibitpro
              </span>
            </div>

            <!-- Mobile Multi-Screen Showcase Image -->
            <div class="relative w-full h-52 sm:h-64 rounded-2xl overflow-hidden mb-5 border border-slate-800 shadow-xl group-hover:border-cyan-400/60 transition-all duration-300">
              <img src="assets/images/coincred_mockup.png?v=3.0" alt="CoinCRED Pro Mobile App Screens" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent"></div>
              <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span class="px-3 py-1 rounded-full bg-cyan-600/90 text-white font-mono text-xs font-bold shadow-md backdrop-blur-md">
                  <i class="fa-solid fa-chart-line mr-1"></i> Spot & Futures
                </span>
                <span class="px-2.5 py-1 rounded-full bg-slate-950/85 text-cyan-300 font-mono text-xs font-semibold backdrop-blur-md border border-cyan-500/30">
                  <i class="fa-solid fa-cloud-arrow-down mr-1"></i> Live on Stores
                </span>
              </div>
            </div>

            <!-- Metric Strip -->
            <div class="metric-pill p-2.5 rounded-xl mb-4 flex items-center justify-between text-xs font-mono text-slate-300">
              <span class="flex items-center gap-1.5"><i class="fa-solid fa-wallet text-cyan-400"></i> Multi-Asset Wallets</span>
              <span class="text-slate-500">|</span>
              <span class="flex items-center gap-1.5"><i class="fa-solid fa-id-badge text-emerald-400"></i> Tier-2 KYC Engine</span>
            </div>

            <h3 class="text-2xl font-extrabold text-white mb-2 group-hover:text-cyan-300 transition-colors">CoinCRED Pro – Global Crypto Exchange</h3>
            <p class="text-sm text-slate-300 mb-4 leading-relaxed">
              Multi-platform crypto exchange app featuring automated KYC workflows, multi-asset wallet balance tracking, and secure high-volume trading services.
            </p>
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-cyan-400 border border-slate-800">Flutter</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-cyan-400 border border-slate-800">Firebase</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-cyan-400 border border-slate-800">Provider</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-cyan-400 border border-slate-800">MVVM</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-cyan-400 border border-slate-800">WebSockets</span>
            </div>
          </div>
          <button class="open-modal w-full py-3.5 rounded-xl bg-slate-800/90 border border-slate-700 font-semibold text-xs sm:text-sm text-slate-200 transition-all duration-300 hover:bg-cyan-500/20 hover:border-cyan-400 hover:text-white flex items-center justify-center gap-2" data-project="coincred">
            <i class="fa-solid fa-code"></i> View Architecture & Specs <i class="fa-solid fa-arrow-right text-xs"></i>
          </button>
        </div>

        <!-- 6. Diabos Global Shipping -->
        <div class="project-card group glass-card hover-lift rounded-3xl p-6 sm:p-7 border border-slate-700/60 flex flex-col justify-between hover:shadow-glow-amber hover:border-amber-400/50" data-category="logistics">
          <div>
            <!-- Header Badges -->
            <div class="flex items-center justify-between gap-2 mb-4">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30 text-xs font-semibold font-mono">
                <i class="fa-solid fa-ship text-amber-400"></i> Maritime Logistics
              </span>
              <span class="text-xs font-semibold text-slate-400 font-mono bg-slate-900/90 px-2.5 py-1 rounded-lg border border-slate-800">
                <i class="fa-solid fa-anchor text-amber-400 mr-1"></i> Diabos Global
              </span>
            </div>

            <!-- Mobile Multi-Screen Showcase Image -->
            <div class="relative w-full h-52 sm:h-64 rounded-2xl overflow-hidden mb-5 border border-slate-800 shadow-xl group-hover:border-amber-400/60 transition-all duration-300">
              <img src="assets/images/diabos_mockup.png?v=3.0" alt="Diabos Mobile App Screens" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent"></div>
              <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span class="px-3 py-1 rounded-full bg-amber-500/90 text-white font-mono text-xs font-bold shadow-md backdrop-blur-md">
                  <i class="fa-solid fa-anchor mr-1"></i> Port Logistics
                </span>
                <span class="px-2.5 py-1 rounded-full bg-slate-950/85 text-amber-300 font-mono text-xs font-semibold backdrop-blur-md border border-amber-500/30">
                  <i class="fa-solid fa-database mr-1"></i> SQLite Offline
                </span>
              </div>
            </div>

            <!-- Metric Strip -->
            <div class="metric-pill p-2.5 rounded-xl mb-4 flex items-center justify-between text-xs font-mono text-slate-300">
              <span class="flex items-center gap-1.5"><i class="fa-solid fa-users text-amber-400"></i> 500+ Port Agents</span>
              <span class="text-slate-500">|</span>
              <span class="flex items-center gap-1.5"><i class="fa-solid fa-calculator text-cyan-400"></i> DA Cost Estimator</span>
            </div>

            <h3 class="text-2xl font-extrabold text-white mb-2 group-hover:text-amber-300 transition-colors">Diabos</h3>
            <p class="text-sm text-slate-300 mb-4 leading-relaxed">
              Offline-first maritime logistics and disbursement accounting platform used by daily port agents worldwide for low-connectivity vessel management.
            </p>
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-amber-400 border border-slate-800">Flutter</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-amber-400 border border-slate-800">SQLite</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-amber-400 border border-slate-800">GetX</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-amber-400 border border-slate-800">Background Sync</span>
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

        <!-- 7. Jiobp My-Station -->
        <div class="project-card group glass-card hover-lift rounded-3xl p-6 sm:p-7 border border-slate-700/60 flex flex-col justify-between hover:shadow-glow-emerald hover:border-emerald-400/50" data-category="enterprise logistics">
          <div>
            <!-- Header Badges -->
            <div class="flex items-center justify-between gap-2 mb-4">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 text-xs font-semibold font-mono">
                <i class="fa-solid fa-gas-pump text-emerald-400"></i> Station Operations
              </span>
              <span class="text-xs font-semibold text-slate-400 font-mono bg-slate-900/90 px-2.5 py-1 rounded-lg border border-slate-800">
                <i class="fa-solid fa-bolt text-emerald-400 mr-1"></i> Reliance Jio-bp
              </span>
            </div>

            <!-- Mobile Multi-Screen Showcase Image -->
            <div class="relative w-full h-52 sm:h-64 rounded-2xl overflow-hidden mb-5 border border-slate-800 shadow-xl group-hover:border-emerald-400/60 transition-all duration-300">
              <img src="assets/images/jiobp_mockup.png?v=3.0" alt="Jiobp My-Station Mobile App Screens" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent"></div>
              <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span class="px-3 py-1 rounded-full bg-emerald-600/90 text-white font-mono text-xs font-bold shadow-md backdrop-blur-md">
                  <i class="fa-solid fa-gas-pump mr-1"></i> 1,500+ Stations
                </span>
                <span class="px-2.5 py-1 rounded-full bg-slate-950/85 text-emerald-300 font-mono text-xs font-semibold backdrop-blur-md border border-emerald-500/30">
                  <i class="fa-solid fa-cloud-arrow-down mr-1"></i> Live on Stores
                </span>
              </div>
            </div>

            <!-- Metric Strip -->
            <div class="metric-pill p-2.5 rounded-xl mb-4 flex items-center justify-between text-xs font-mono text-slate-300">
              <span class="flex items-center gap-1.5"><i class="fa-solid fa-arrows-rotate text-emerald-400"></i> Daily Shift Reconciliation</span>
              <span class="text-slate-500">|</span>
              <span class="flex items-center gap-1.5"><i class="fa-solid fa-signal text-cyan-400"></i> Highway Offline Cache</span>
            </div>

            <h3 class="text-2xl font-extrabold text-white mb-2 group-hover:text-emerald-300 transition-colors">Jiobp My-Station — Partner Operations</h3>
            <p class="text-sm text-slate-300 mb-4 leading-relaxed">
              Enterprise mobility platform for Reliance BP Mobility Limited (Jio-bp) station managers across India, managing fuel inventory, dispenser meter readings, daily shift reconciliation, and billing.
            </p>
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-emerald-400 border border-slate-800">Flutter</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-emerald-400 border border-slate-800">GetX</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-emerald-400 border border-slate-800">SQLite Offline</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-emerald-400 border border-slate-800">REST APIs</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-emerald-400 border border-slate-800">Firebase</span>
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

        <!-- 8. jio-bp pulse Charge Pro -->
        <div class="project-card group glass-card hover-lift rounded-3xl p-6 sm:p-7 border border-slate-700/60 flex flex-col justify-between hover:shadow-glow-cyan hover:border-cyan-400/50" data-category="enterprise logistics">
          <div>
            <!-- Header Badges -->
            <div class="flex items-center justify-between gap-2 mb-4">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 text-xs font-semibold font-mono">
                <i class="fa-solid fa-bolt-lightning text-cyan-400"></i> EV Smart Mobility
              </span>
              <span class="text-xs font-semibold text-slate-400 font-mono bg-slate-900/90 px-2.5 py-1 rounded-lg border border-slate-800">
                <i class="fa-solid fa-charging-station text-cyan-400 mr-1"></i> Jio-bp pulse
              </span>
            </div>

            <!-- Mobile Multi-Screen Showcase Image -->
            <div class="relative w-full h-52 sm:h-64 rounded-2xl overflow-hidden mb-5 border border-slate-800 shadow-xl group-hover:border-cyan-400/60 transition-all duration-300">
              <img src="assets/images/jiobp_pulse_mockup.png?v=3.0" alt="jio-bp pulse Charge Pro Mobile App Screens" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent"></div>
              <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span class="px-3 py-1 rounded-full bg-cyan-600/90 text-white font-mono text-xs font-bold shadow-md backdrop-blur-md">
                  <i class="fa-solid fa-bolt-lightning mr-1"></i> EV Smart Charging
                </span>
                <span class="px-2.5 py-1 rounded-full bg-slate-950/85 text-cyan-300 font-mono text-xs font-semibold backdrop-blur-md border border-cyan-500/30">
                  <i class="fa-solid fa-cloud-arrow-down mr-1"></i> Live on Stores
                </span>
              </div>
            </div>

            <!-- Metric Strip -->
            <div class="metric-pill p-2.5 rounded-xl mb-4 flex items-center justify-between text-xs font-mono text-slate-300">
              <span class="flex items-center gap-1.5"><i class="fa-solid fa-plug-circle-bolt text-cyan-400"></i> CCS / GBT / Type 2</span>
              <span class="text-slate-500">|</span>
              <span class="flex items-center gap-1.5"><i class="fa-solid fa-calendar-check text-emerald-400"></i> Slot Reservation & Tariff</span>
            </div>

            <h3 class="text-2xl font-extrabold text-white mb-2 group-hover:text-cyan-300 transition-colors">jio-bp pulse Charge Pro</h3>
            <p class="text-sm text-slate-300 mb-4 leading-relaxed">
              Enterprise EV charging mobility companion app by Reliance BP Mobility Limited (Jio-bp pulse), empowering EV drivers to discover live charging stations, filter connector standards (CCS, Type 2, GBT), reserve slots, and track charging sessions.
            </p>
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-cyan-400 border border-slate-800">Flutter</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-cyan-400 border border-slate-800">Google Maps</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-cyan-400 border border-slate-800">GetX</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-cyan-400 border border-slate-800">Clean Arch</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-cyan-400 border border-slate-800">IoT / MQTT</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-cyan-400 border border-slate-800">Payment Gateway</span>
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

        <!-- 9. Jio Bp MyField -->
        <div class="project-card group glass-card hover-lift rounded-3xl p-6 sm:p-7 border border-slate-700/60 flex flex-col justify-between hover:shadow-glow-emerald hover:border-emerald-400/50" data-category="enterprise logistics">
          <div>
            <!-- Header Badges -->
            <div class="flex items-center justify-between gap-2 mb-4">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 text-xs font-semibold font-mono">
                <i class="fa-solid fa-clipboard-check text-emerald-400"></i> Asset Audit & PV
              </span>
              <span class="text-xs font-semibold text-slate-400 font-mono bg-slate-900/90 px-2.5 py-1 rounded-lg border border-slate-800">
                <i class="fa-solid fa-shield text-emerald-400 mr-1"></i> Reliance Jio-bp
              </span>
            </div>

            <!-- Mobile Multi-Screen Showcase Image -->
            <div class="relative w-full h-52 sm:h-64 rounded-2xl overflow-hidden mb-5 border border-slate-800 shadow-xl group-hover:border-emerald-400/60 transition-all duration-300">
              <img src="assets/images/jiobp_myfield_mockup.png?v=3.0" alt="Jio Bp MyField Mobile App Screens" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent"></div>
              <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span class="px-3 py-1 rounded-full bg-emerald-600/90 text-white font-mono text-xs font-bold shadow-md backdrop-blur-md">
                  <i class="fa-solid fa-clipboard-check mr-1"></i> PV Asset Audit
                </span>
                <span class="px-2.5 py-1 rounded-full bg-slate-950/85 text-emerald-300 font-mono text-xs font-semibold backdrop-blur-md border border-emerald-500/30">
                  <i class="fa-solid fa-cloud-arrow-down mr-1"></i> Live on Stores
                </span>
              </div>
            </div>

            <!-- Metric Strip -->
            <div class="metric-pill p-2.5 rounded-xl mb-4 flex items-center justify-between text-xs font-mono text-slate-300">
              <span class="flex items-center gap-1.5"><i class="fa-solid fa-gas-pump text-emerald-400"></i> Dispenser SAFF Compliance</span>
              <span class="text-slate-500">|</span>
              <span class="flex items-center gap-1.5"><i class="fa-solid fa-camera text-cyan-400"></i> Photo Evidence OCR</span>
            </div>

            <h3 class="text-2xl font-extrabold text-white mb-2 group-hover:text-emerald-300 transition-colors">Jio Bp MyField</h3>
            <p class="text-sm text-slate-300 mb-4 leading-relaxed">
              Enterprise field inspection, physical asset verification (PV Asset), and statutory safety compliance mobile platform for Reliance BP Mobility Limited (Jio-bp) across nationwide retail mobility stations.
            </p>
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-emerald-400 border border-slate-800">Flutter</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-emerald-400 border border-slate-800">Clean Arch</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-emerald-400 border border-slate-800">SQLite Offline</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-emerald-400 border border-slate-800">GetX</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-emerald-400 border border-slate-800">Camera & OCR</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-emerald-400 border border-slate-800">REST APIs</span>
            </div>
          </div>

          <div class="space-y-3 mt-auto">
            <!-- App Store & Play Store Links -->
            <div class="grid grid-cols-2 gap-2.5">
              <a href="https://play.google.com/store/apps/details?id=com.jiobp.pvasset&hl=en_IN" target="_blank" rel="noopener noreferrer" class="py-2.5 px-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-emerald-400/60 hover:bg-emerald-500/10 text-slate-300 hover:text-white font-mono text-xs font-semibold flex items-center justify-center gap-1.5 transition-all duration-300 hover:scale-[1.02]">
                <i class="fa-brands fa-google-play text-emerald-400 text-sm"></i> Play Store
              </a>
              <a href="https://apps.apple.com/us/app/jiobp-myfield/id6473767546" target="_blank" rel="noopener noreferrer" class="py-2.5 px-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-400/60 hover:bg-cyan-500/10 text-slate-300 hover:text-white font-mono text-xs font-semibold flex items-center justify-center gap-1.5 transition-all duration-300 hover:scale-[1.02]">
                <i class="fa-brands fa-apple text-cyan-400 text-sm"></i> App Store
              </a>
            </div>

            <button class="open-modal w-full py-3.5 rounded-xl bg-slate-800/90 border border-slate-700 font-semibold text-xs sm:text-sm text-slate-200 transition-all duration-300 hover:bg-emerald-500/20 hover:border-emerald-400 hover:text-white flex items-center justify-center gap-2" data-project="jiobp_myfield">
              <i class="fa-solid fa-code"></i> View Architecture & Specs <i class="fa-solid fa-arrow-right text-xs"></i>
            </button>
          </div>
        </div>

        <!-- 10. PCS 1x — Indian Ports Association -->
        <div class="project-card group glass-card hover-lift rounded-3xl p-6 sm:p-7 border border-slate-700/60 flex flex-col justify-between hover:shadow-glow-cyan hover:border-cyan-400/50" data-category="enterprise logistics">
          <div>
            <!-- Header Badges -->
            <div class="flex items-center justify-between gap-2 mb-4">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 text-xs font-semibold font-mono">
                <i class="fa-solid fa-ship text-cyan-400"></i> Port Community System
              </span>
              <span class="text-xs font-semibold text-slate-400 font-mono bg-slate-900/90 px-2.5 py-1 rounded-lg border border-slate-800">
                <i class="fa-solid fa-anchor text-cyan-400 mr-1"></i> Indian Ports Association
              </span>
            </div>

            <!-- Mobile Multi-Screen Showcase Image -->
            <div class="relative w-full h-52 sm:h-64 rounded-2xl overflow-hidden mb-5 border border-slate-800 shadow-xl group-hover:border-cyan-400/60 transition-all duration-300">
              <img src="assets/images/pcs1x_mockup.png?v=3.0" alt="PCS 1x Indian Ports Association Mobile App Screens" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent"></div>
              <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span class="px-3 py-1 rounded-full bg-cyan-600/90 text-white font-mono text-xs font-bold shadow-md backdrop-blur-md">
                  <i class="fa-solid fa-anchor mr-1"></i> Port Logistics
                </span>
                <span class="px-2.5 py-1 rounded-full bg-slate-950/85 text-cyan-300 font-mono text-xs font-semibold backdrop-blur-md border border-cyan-500/30">
                  <i class="fa-solid fa-landmark mr-1"></i> Ministry of Shipping
                </span>
              </div>
            </div>

            <!-- Metric Strip -->
            <div class="metric-pill p-2.5 rounded-xl mb-4 flex items-center justify-between text-xs font-mono text-slate-300">
              <span class="flex items-center gap-1.5"><i class="fa-solid fa-ferry text-cyan-400"></i> 12+ Major Ports</span>
              <span class="text-slate-500">|</span>
              <span class="flex items-center gap-1.5"><i class="fa-solid fa-file-invoice text-emerald-400"></i> Digital e-DO & Customs</span>
            </div>

            <h3 class="text-2xl font-extrabold text-white mb-2 group-hover:text-cyan-300 transition-colors">PCS 1x — Indian Ports Association</h3>
            <p class="text-sm text-slate-300 mb-4 leading-relaxed">
              Spearheaded the PCS 1x project for the Indian Ports Association under the Ministry of Shipping, enhancing operational efficiency for major ports through electronic delivery orders (e-DO), real-time vessel traffic monitoring, and customs integration.
            </p>
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-cyan-400 border border-slate-800">Flutter</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-cyan-400 border border-slate-800">Clean Arch</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-cyan-400 border border-slate-800">REST APIs</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-cyan-400 border border-slate-800">Microservices</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-cyan-400 border border-slate-800">SQLite Offline</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-cyan-400 border border-slate-800">Enterprise Security</span>
            </div>
          </div>

          <div class="space-y-3 mt-auto">
            <button class="open-modal w-full py-3.5 rounded-xl bg-slate-800/90 border border-slate-700 font-semibold text-xs sm:text-sm text-slate-200 transition-all duration-300 hover:bg-cyan-500/20 hover:border-cyan-400 hover:text-white flex items-center justify-center gap-2" data-project="pcs1x">
              <i class="fa-solid fa-code"></i> View Architecture & Specs <i class="fa-solid fa-arrow-right text-xs"></i>
            </button>
          </div>
        </div>

        <!-- 11. Food Monster Vegan Recipes -->
        <div class="project-card group glass-card hover-lift rounded-3xl p-6 sm:p-7 border border-slate-700/60 flex flex-col justify-between hover:shadow-glow-pink hover:border-pink-400/50" data-category="lifestyle">
          <div>
            <!-- Header Badges -->
            <div class="flex items-center justify-between gap-2 mb-4">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-500/15 text-pink-300 border border-pink-500/30 text-xs font-semibold font-mono">
                <i class="fa-solid fa-seedling text-pink-400"></i> Culinary & Lifestyle
              </span>
              <span class="text-xs font-semibold text-slate-400 font-mono bg-slate-900/90 px-2.5 py-1 rounded-lg border border-slate-800">
                <i class="fa-solid fa-heart text-pink-400 mr-1"></i> One Green Planet
              </span>
            </div>

            <!-- Mobile Multi-Screen Showcase Image -->
            <div class="relative w-full h-52 sm:h-64 rounded-2xl overflow-hidden mb-5 border border-slate-800 shadow-xl group-hover:border-pink-400/60 transition-all duration-300">
              <img src="assets/images/foodmonster_mockup.png?v=3.0" alt="Food Monster Mobile App Screens" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent"></div>
              <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span class="px-3 py-1 rounded-full bg-pink-600/90 text-white font-mono text-xs font-bold shadow-md backdrop-blur-md">
                  <i class="fa-solid fa-seedling mr-1"></i> 20,000+ Recipes
                </span>
                <span class="px-2.5 py-1 rounded-full bg-slate-950/85 text-pink-300 font-mono text-xs font-semibold backdrop-blur-md border border-pink-500/30">
                  <i class="fa-brands fa-apple mr-1"></i> Live on iOS
                </span>
              </div>
            </div>

            <!-- Metric Strip -->
            <div class="metric-pill p-2.5 rounded-xl mb-4 flex items-center justify-between text-xs font-mono text-slate-300">
              <span class="flex items-center gap-1.5"><i class="fa-solid fa-receipt text-pink-400"></i> StoreKit IAP Subscriptions</span>
              <span class="text-slate-500">|</span>
              <span class="flex items-center gap-1.5"><i class="fa-solid fa-star text-amber-400"></i> 4.8 Rating</span>
            </div>

            <h3 class="text-2xl font-extrabold text-white mb-2 group-hover:text-pink-300 transition-colors">Food Monster — Vegan Recipes Platform</h3>
            <p class="text-sm text-slate-300 mb-4 leading-relaxed">
              Top-ranked plant-based culinary iOS application featuring 20,000+ meatless & dairy-free recipes, category discovery, multi-tier IAP subscriptions, and bookmarking.
            </p>
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-pink-400 border border-slate-800">Flutter / iOS</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-pink-400 border border-slate-800">In-App Purchase</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-pink-400 border border-slate-800">Social Auth</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-pink-400 border border-slate-800">Clean Arch</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-pink-400 border border-slate-800">Firebase</span>
            </div>
          </div>

          <div class="space-y-3 mt-auto">
            <!-- App Store Link -->
            <a href="https://apps.apple.com/us/app/food-monster-vegan-recipes/id1052988561" target="_blank" rel="noopener noreferrer" class="w-full py-2.5 px-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-pink-400/60 hover:bg-pink-500/10 text-slate-300 hover:text-white font-mono text-xs font-semibold flex items-center justify-center gap-1.5 transition-all duration-300 hover:scale-[1.02]">
              <i class="fa-brands fa-apple text-pink-400 text-sm"></i> Apple App Store
            </a>

            <button class="open-modal w-full py-3.5 rounded-xl bg-slate-800/90 border border-slate-700 font-semibold text-xs sm:text-sm text-slate-200 transition-all duration-300 hover:bg-pink-500/20 hover:border-pink-400 hover:text-white flex items-center justify-center gap-2" data-project="foodmonster">
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
