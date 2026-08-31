/**
 * Projects Component - Premium Mobile App Showcase
 * Displays all 11 production applications inside sleek mobile device frames
 * with store links, performance metrics, and interactive architecture drawers.
 */
export function renderProjects() {
  return `
  <section class="py-24 relative" id="projects">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-12 space-y-4">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider border border-cyan-500/20 shadow-glow-cyan">
          <i class="fa-solid fa-mobile-screen text-cyan-400"></i> Flagship Mobile Ecosystem (15 Production Apps)
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
          Featured Mobile <span class="gradient-text">Applications</span>
        </h2>
        <p class="text-slate-300 text-base sm:text-lg">
          High-performance production mobile applications engineered for high concurrency, enterprise banking security, real-time trading, and offline-first logistics.
        </p>
      </div>

      <!-- Project Filter Controls (iOS Segmented Control Style) -->
      <div class="flex flex-wrap justify-center gap-2 sm:gap-3 mb-14">
        <div class="ios-segmented-control flex-wrap justify-center">
          <button class="project-filter-btn ios-segment-btn active" data-filter="all">
            <i class="fa-solid fa-grid-2 text-cyan-400"></i> All Apps
            <span class="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-mono font-bold">15</span>
          </button>
          <button class="project-filter-btn ios-segment-btn" data-filter="fintech">
            <i class="fa-solid fa-chart-candlestick text-emerald-400"></i> Trading & Crypto
            <span class="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-mono font-bold">4</span>
          </button>
          <button class="project-filter-btn ios-segment-btn" data-filter="enterprise">
            <i class="fa-solid fa-building-columns text-blue-400"></i> Banking & Enterprise
            <span class="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-mono font-bold">7</span>
          </button>
          <button class="project-filter-btn ios-segment-btn" data-filter="logistics">
            <i class="fa-solid fa-ship text-amber-400"></i> Logistics & Operations
            <span class="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-mono font-bold">5</span>
          </button>
          <button class="project-filter-btn ios-segment-btn" data-filter="lifestyle">
            <i class="fa-solid fa-leaf text-pink-400"></i> Lifestyle & Consumer
            <span class="px-2 py-0.5 rounded-full bg-pink-500/20 text-pink-300 text-xs font-mono font-bold">4</span>
          </button>
        </div>
      </div>

      <!-- Projects Grid (11 Production Apps in Mobile Frames) -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8" id="projectsGrid">

        <!-- 1. MoneyMic US -->
        <div class="project-card device-card group" data-category="fintech">
          <div>
            <!-- Header Badges -->
            <div class="flex items-center justify-between gap-2 mb-4">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 text-xs font-semibold font-mono">
                <i class="fa-solid fa-chart-line text-cyan-400"></i> Real-Time Copy Trading
              </span>
              <span class="text-xs font-semibold text-slate-400 font-mono bg-slate-900/90 px-2.5 py-1 rounded-lg border border-slate-800">
                <i class="fa-solid fa-globe text-cyan-400 mr-1"></i> MoneyMic US
              </span>
            </div>

            <!-- Mobile Screen Container with Device Frame Header -->
            <div class="device-screen-container mb-5 group-hover:border-cyan-400/60 transition-all duration-300">
              <div class="mini-notch"></div>
              <img src="assets/images/moneymic_mockup.png" alt="MoneyMic Mobile App Screens" class="w-full h-full object-cover">
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent"></div>
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
            <div class="metric-pill p-2.5 rounded-2xl mb-4 flex items-center justify-between text-xs font-mono text-slate-300">
              <span class="flex items-center gap-1.5"><i class="fa-solid fa-gauge-high text-cyan-400"></i> Sub-50ms Latency</span>
              <span class="text-slate-500">|</span>
              <span class="flex items-center gap-1.5"><i class="fa-solid fa-users text-emerald-400"></i> 50+ Streams</span>
            </div>

            <h3 class="text-2xl font-black text-white mb-2 group-hover:text-cyan-300 transition-colors">MoneyMic US — Copy Trading Platform</h3>
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
          <button class="open-modal w-full py-3.5 rounded-2xl bg-slate-900 border border-slate-800 font-bold text-xs sm:text-sm text-slate-200 transition-all duration-300 hover:bg-cyan-500/20 hover:border-cyan-400 hover:text-white flex items-center justify-center gap-2" data-project="moneymic">
            <i class="fa-solid fa-layer-group text-cyan-400"></i> View Mobile Architecture & Specs <i class="fa-solid fa-arrow-right text-xs"></i>
          </button>
        </div>

        <!-- 2. ICICI Bank US -->
        <div class="project-card device-card group" data-category="enterprise">
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

            <!-- Mobile Screen Container -->
            <div class="device-screen-container mb-5 group-hover:border-blue-400/60 transition-all duration-300">
              <div class="mini-notch"></div>
              <img src="assets/images/icici_mockup.png" alt="ICICI Bank Mobile App Screens" class="w-full h-full object-cover">
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent"></div>
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
            <div class="metric-pill p-2.5 rounded-2xl mb-4 flex items-center justify-between text-xs font-mono text-slate-300">
              <span class="flex items-center gap-1.5"><i class="fa-solid fa-map-location-dot text-blue-400"></i> Google Maps SDK</span>
              <span class="text-slate-500">|</span>
              <span class="flex items-center gap-1.5"><i class="fa-solid fa-fingerprint text-cyan-400"></i> Biometric Onboarding</span>
            </div>

            <h3 class="text-2xl font-black text-white mb-2 group-hover:text-blue-300 transition-colors">ICICI Bank US – Digital Banking Application</h3>
            <p class="text-sm text-slate-300 mb-4 leading-relaxed">
              Enterprise digital banking application by ICICI Bank streamlining talent discovery, geo-tagged job mapping via Google Maps SDK, candidate tracking, and AES-256 encrypted onboarding.
            </p>
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-blue-400 border border-slate-800">Flutter</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-blue-400 border border-slate-800">Clean Arch</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-blue-400 border border-slate-800">Google Maps</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-blue-400 border border-slate-800">AES-256</span>
            </div>
          </div>
          <button class="open-modal w-full py-3.5 rounded-2xl bg-slate-900 border border-slate-800 font-bold text-xs sm:text-sm text-slate-200 transition-all duration-300 hover:bg-blue-500/20 hover:border-blue-400 hover:text-white flex items-center justify-center gap-2" data-project="icici">
            <i class="fa-solid fa-layer-group text-blue-400"></i> View Mobile Architecture & Specs <i class="fa-solid fa-arrow-right text-xs"></i>
          </button>
        </div>

        <!-- 3. BitProEX Derivatives -->
        <div class="project-card device-card group" data-category="fintech">
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

            <!-- Mobile Screen Container -->
            <div class="device-screen-container mb-5 group-hover:border-emerald-400/60 transition-all duration-300">
              <div class="mini-notch"></div>
              <img src="assets/images/bitproex_mockup.png" alt="BitProEX Mobile App Screens" class="w-full h-full object-cover">
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent"></div>
              <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span class="px-3 py-1 rounded-full bg-emerald-500/90 text-white font-mono text-xs font-bold shadow-md backdrop-blur-md">
                  <i class="fa-solid fa-chart-line mr-1"></i> Derivatives Exchange
                </span>
                <span class="px-2.5 py-1 rounded-full bg-slate-950/85 text-emerald-300 font-mono text-xs font-semibold backdrop-blur-md border border-emerald-500/30">
                  <i class="fa-solid fa-cubes mr-1"></i> BLoC State
                </span>
              </div>
            </div>

            <!-- Metric Strip -->
            <div class="metric-pill p-2.5 rounded-2xl mb-4 flex items-center justify-between text-xs font-mono text-slate-300">
              <span class="flex items-center gap-1.5"><i class="fa-solid fa-coins text-emerald-400"></i> 100+ Crypto Pairs</span>
              <span class="text-slate-500">|</span>
              <span class="flex items-center gap-1.5"><i class="fa-solid fa-sliders text-cyan-400"></i> 125x Leverage Engine</span>
            </div>

            <h3 class="text-2xl font-black text-white mb-2 group-hover:text-emerald-300 transition-colors">BitProEX — Derivatives Exchange</h3>
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
          <button class="open-modal w-full py-3.5 rounded-2xl bg-slate-900 border border-slate-800 font-bold text-xs sm:text-sm text-slate-200 transition-all duration-300 hover:bg-emerald-500/20 hover:border-emerald-400 hover:text-white flex items-center justify-center gap-2" data-project="bitproex">
            <i class="fa-solid fa-layer-group text-emerald-400"></i> View Mobile Architecture & Specs <i class="fa-solid fa-arrow-right text-xs"></i>
          </button>
        </div>

        <!-- 4. Jiobp My-Station -->
        <div class="project-card device-card group" data-category="enterprise logistics">
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

            <!-- Mobile Screen Container -->
            <div class="device-screen-container mb-5 group-hover:border-emerald-400/60 transition-all duration-300">
              <div class="mini-notch"></div>
              <img src="assets/images/jiobp_mockup.png" alt="Jiobp My-Station Mobile App Screens" class="w-full h-full object-cover">
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent"></div>
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
            <div class="metric-pill p-2.5 rounded-2xl mb-4 flex items-center justify-between text-xs font-mono text-slate-300">
              <span class="flex items-center gap-1.5"><i class="fa-solid fa-arrows-rotate text-emerald-400"></i> Shift Reconciliation</span>
              <span class="text-slate-500">|</span>
              <span class="flex items-center gap-1.5"><i class="fa-solid fa-signal text-cyan-400"></i> Offline Cache</span>
            </div>

            <h3 class="text-2xl font-black text-white mb-2 group-hover:text-emerald-300 transition-colors">Jiobp My-Station — Partner Operations</h3>
            <p class="text-sm text-slate-300 mb-4 leading-relaxed">
              Enterprise mobility platform for Reliance BP Mobility Limited (Jio-bp) station managers across India, managing fuel inventory, dispenser meter readings, daily shift reconciliation, and billing.
            </p>
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-emerald-400 border border-slate-800">Flutter</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-emerald-400 border border-slate-800">GetX</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-emerald-400 border border-slate-800">SQLite Offline</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-emerald-400 border border-slate-800">REST APIs</span>
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

            <button class="open-modal w-full py-3.5 rounded-2xl bg-slate-900 border border-slate-800 font-bold text-xs sm:text-sm text-slate-200 transition-all duration-300 hover:bg-emerald-500/20 hover:border-emerald-400 hover:text-white flex items-center justify-center gap-2" data-project="jiobp">
              <i class="fa-solid fa-layer-group text-emerald-400"></i> View Mobile Architecture & Specs <i class="fa-solid fa-arrow-right text-xs"></i>
            </button>
          </div>
        </div>

        <!-- 5. jio-bp pulse Charge Pro -->
        <div class="project-card device-card group" data-category="enterprise logistics">
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

            <!-- Mobile Screen Container -->
            <div class="device-screen-container mb-5 group-hover:border-cyan-400/60 transition-all duration-300">
              <div class="mini-notch"></div>
              <img src="assets/images/jiobp_pulse_mockup.png" alt="jio-bp pulse Charge Pro Mobile App Screens" class="w-full h-full object-cover">
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent"></div>
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
            <div class="metric-pill p-2.5 rounded-2xl mb-4 flex items-center justify-between text-xs font-mono text-slate-300">
              <span class="flex items-center gap-1.5"><i class="fa-solid fa-plug-circle-bolt text-cyan-400"></i> CCS / Type 2 / GBT</span>
              <span class="text-slate-500">|</span>
              <span class="flex items-center gap-1.5"><i class="fa-solid fa-calendar-check text-emerald-400"></i> Slot Reservation</span>
            </div>

            <h3 class="text-2xl font-black text-white mb-2 group-hover:text-cyan-300 transition-colors">jio-bp pulse Charge Pro</h3>
            <p class="text-sm text-slate-300 mb-4 leading-relaxed">
              Enterprise EV charging mobility companion app by Reliance BP Mobility Limited (Jio-bp pulse), empowering EV drivers to discover live charging stations, filter connector standards, reserve slots, and track charging sessions.
            </p>
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-cyan-400 border border-slate-800">Flutter</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-cyan-400 border border-slate-800">Google Maps</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-cyan-400 border border-slate-800">GetX</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-cyan-400 border border-slate-800">IoT / MQTT</span>
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

            <button class="open-modal w-full py-3.5 rounded-2xl bg-slate-900 border border-slate-800 font-bold text-xs sm:text-sm text-slate-200 transition-all duration-300 hover:bg-cyan-500/20 hover:border-cyan-400 hover:text-white flex items-center justify-center gap-2" data-project="jiobp_pulse">
              <i class="fa-solid fa-layer-group text-cyan-400"></i> View Mobile Architecture & Specs <i class="fa-solid fa-arrow-right text-xs"></i>
            </button>
          </div>
        </div>

        <!-- 6. Diabos Global Shipping -->
        <div class="project-card device-card group" data-category="logistics">
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

            <!-- Mobile Screen Container -->
            <div class="device-screen-container mb-5 group-hover:border-amber-400/60 transition-all duration-300">
              <div class="mini-notch"></div>
              <img src="assets/images/diabos_mockup.png" alt="Diabos Mobile App Screens" class="w-full h-full object-cover">
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent"></div>
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
            <div class="metric-pill p-2.5 rounded-2xl mb-4 flex items-center justify-between text-xs font-mono text-slate-300">
              <span class="flex items-center gap-1.5"><i class="fa-solid fa-users text-amber-400"></i> 500+ Port Agents</span>
              <span class="text-slate-500">|</span>
              <span class="flex items-center gap-1.5"><i class="fa-solid fa-calculator text-cyan-400"></i> DA Cost Estimator</span>
            </div>

            <h3 class="text-2xl font-black text-white mb-2 group-hover:text-amber-300 transition-colors">Diabos Global Shipping</h3>
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

            <button class="open-modal w-full py-3.5 rounded-2xl bg-slate-900 border border-slate-800 font-bold text-xs sm:text-sm text-slate-200 transition-all duration-300 hover:bg-amber-500/20 hover:border-amber-400 hover:text-white flex items-center justify-center gap-2" data-project="diabos">
              <i class="fa-solid fa-layer-group text-amber-400"></i> View Mobile Architecture & Specs <i class="fa-solid fa-arrow-right text-xs"></i>
            </button>
          </div>
        </div>

        <!-- 7. Jio Bp MyField -->
        <div class="project-card device-card group" data-category="enterprise logistics">
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

            <!-- Mobile Screen Container -->
            <div class="device-screen-container mb-5 group-hover:border-emerald-400/60 transition-all duration-300">
              <div class="mini-notch"></div>
              <img src="assets/images/jiobp_myfield_mockup.png" alt="Jio Bp MyField Mobile App Screens" class="w-full h-full object-cover">
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent"></div>
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
            <div class="metric-pill p-2.5 rounded-2xl mb-4 flex items-center justify-between text-xs font-mono text-slate-300">
              <span class="flex items-center gap-1.5"><i class="fa-solid fa-gas-pump text-emerald-400"></i> Dispenser SAFF</span>
              <span class="text-slate-500">|</span>
              <span class="flex items-center gap-1.5"><i class="fa-solid fa-camera text-cyan-400"></i> Photo Evidence OCR</span>
            </div>

            <h3 class="text-2xl font-black text-white mb-2 group-hover:text-emerald-300 transition-colors">Jio Bp MyField</h3>
            <p class="text-sm text-slate-300 mb-4 leading-relaxed">
              Enterprise field inspection, physical asset verification (PV Asset), and statutory safety compliance mobile platform for Reliance BP Mobility Limited (Jio-bp) across retail mobility stations.
            </p>
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-emerald-400 border border-slate-800">Flutter</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-emerald-400 border border-slate-800">Clean Arch</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-emerald-400 border border-slate-800">SQLite Offline</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-emerald-400 border border-slate-800">GetX</span>
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

            <button class="open-modal w-full py-3.5 rounded-2xl bg-slate-900 border border-slate-800 font-bold text-xs sm:text-sm text-slate-200 transition-all duration-300 hover:bg-emerald-500/20 hover:border-emerald-400 hover:text-white flex items-center justify-center gap-2" data-project="jiobp_myfield">
              <i class="fa-solid fa-layer-group text-emerald-400"></i> View Mobile Architecture & Specs <i class="fa-solid fa-arrow-right text-xs"></i>
            </button>
          </div>
        </div>

        <!-- 8. PCS 1x — Indian Ports Association -->
        <div class="project-card device-card group" data-category="enterprise logistics">
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

            <!-- Mobile Screen Container -->
            <div class="device-screen-container mb-5 group-hover:border-cyan-400/60 transition-all duration-300">
              <div class="mini-notch"></div>
              <img src="assets/images/pcs1x_mockup.png" alt="PCS 1x Indian Ports Association Mobile App Screens" class="w-full h-full object-cover">
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent"></div>
              <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span class="px-3 py-1 rounded-full bg-cyan-600/90 text-white font-mono text-xs font-bold shadow-md backdrop-blur-md">
                  <i class="fa-solid fa-anchor mr-1"></i> National Port System
                </span>
                <span class="px-2.5 py-1 rounded-full bg-slate-950/85 text-cyan-300 font-mono text-xs font-semibold backdrop-blur-md border border-cyan-500/30">
                  <i class="fa-solid fa-landmark mr-1"></i> Ministry of Shipping
                </span>
              </div>
            </div>

            <!-- Metric Strip -->
            <div class="metric-pill p-2.5 rounded-2xl mb-4 flex items-center justify-between text-xs font-mono text-slate-300">
              <span class="flex items-center gap-1.5"><i class="fa-solid fa-ferry text-cyan-400"></i> 12+ Major Ports</span>
              <span class="text-slate-500">|</span>
              <span class="flex items-center gap-1.5"><i class="fa-solid fa-file-invoice text-emerald-400"></i> Digital e-DO</span>
            </div>

            <h3 class="text-2xl font-black text-white mb-2 group-hover:text-cyan-300 transition-colors">PCS 1x — Indian Ports Association</h3>
            <p class="text-sm text-slate-300 mb-4 leading-relaxed">
              Spearheaded the PCS 1x mobile platform for the Indian Ports Association under the Ministry of Shipping, streamlining electronic delivery orders (e-DO), vessel traffic monitoring, and customs integration.
            </p>
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-cyan-400 border border-slate-800">Flutter</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-cyan-400 border border-slate-800">Clean Arch</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-cyan-400 border border-slate-800">REST APIs</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-cyan-400 border border-slate-800">SQLite Offline</span>
            </div>
          </div>

          <div class="space-y-3 mt-auto">
            <button class="open-modal w-full py-3.5 rounded-2xl bg-slate-900 border border-slate-800 font-bold text-xs sm:text-sm text-slate-200 transition-all duration-300 hover:bg-cyan-500/20 hover:border-cyan-400 hover:text-white flex items-center justify-center gap-2" data-project="pcs1x">
              <i class="fa-solid fa-layer-group text-cyan-400"></i> View Mobile Architecture & Specs <i class="fa-solid fa-arrow-right text-xs"></i>
            </button>
          </div>
        </div>

        <!-- 9. Rampwiz – Fiat-to-Crypto Payment Gateway -->
        <div class="project-card device-card group" data-category="fintech">
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

            <!-- Mobile Screen Container -->
            <div class="device-screen-container mb-5 group-hover:border-purple-400/60 transition-all duration-300">
              <div class="mini-notch"></div>
              <img src="assets/images/rampwiz_mockup.png" alt="Rampwiz Mobile App Screens" class="w-full h-full object-cover">
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent"></div>
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
            <div class="metric-pill p-2.5 rounded-2xl mb-4 flex items-center justify-between text-xs font-mono text-slate-300">
              <span class="flex items-center gap-1.5"><i class="fa-solid fa-globe text-purple-400"></i> Multi-Currency Fiat</span>
              <span class="text-slate-500">|</span>
              <span class="flex items-center gap-1.5"><i class="fa-solid fa-shield-check text-emerald-400"></i> KYC Verified</span>
            </div>

            <h3 class="text-2xl font-black text-white mb-2 group-hover:text-purple-300 transition-colors">Rampwiz – Fiat-to-Crypto Payment Gateway</h3>
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
          <button class="open-modal w-full py-3.5 rounded-2xl bg-slate-900 border border-slate-800 font-bold text-xs sm:text-sm text-slate-200 transition-all duration-300 hover:bg-purple-500/20 hover:border-purple-400 hover:text-white flex items-center justify-center gap-2" data-project="rampwiz">
            <i class="fa-solid fa-layer-group text-purple-400"></i> View Mobile Architecture & Specs <i class="fa-solid fa-arrow-right text-xs"></i>
          </button>
        </div>

        <!-- 10. CoinCRED Pro -->
        <div class="project-card device-card group" data-category="fintech">
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

            <!-- Mobile Screen Container -->
            <div class="device-screen-container mb-5 group-hover:border-cyan-400/60 transition-all duration-300">
              <div class="mini-notch"></div>
              <img src="assets/images/coincred_mockup.png" alt="CoinCRED Pro Mobile App Screens" class="w-full h-full object-cover">
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent"></div>
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
            <div class="metric-pill p-2.5 rounded-2xl mb-4 flex items-center justify-between text-xs font-mono text-slate-300">
              <span class="flex items-center gap-1.5"><i class="fa-solid fa-wallet text-cyan-400"></i> Multi-Asset Wallets</span>
              <span class="text-slate-500">|</span>
              <span class="flex items-center gap-1.5"><i class="fa-solid fa-id-badge text-emerald-400"></i> Tier-2 KYC Engine</span>
            </div>

            <h3 class="text-2xl font-black text-white mb-2 group-hover:text-cyan-300 transition-colors">CoinCRED Pro – Global Crypto Exchange</h3>
            <p class="text-sm text-slate-300 mb-4 leading-relaxed">
              Multi-platform crypto exchange app featuring automated KYC workflows, multi-asset wallet balance tracking, and secure high-volume trading services.
            </p>
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-cyan-400 border border-slate-800">Flutter</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-cyan-400 border border-slate-800">Firebase</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-cyan-400 border border-slate-800">Provider</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-cyan-400 border border-slate-800">WebSockets</span>
            </div>
          </div>
          <button class="open-modal w-full py-3.5 rounded-2xl bg-slate-900 border border-slate-800 font-bold text-xs sm:text-sm text-slate-200 transition-all duration-300 hover:bg-cyan-500/20 hover:border-cyan-400 hover:text-white flex items-center justify-center gap-2" data-project="coincred">
            <i class="fa-solid fa-layer-group text-cyan-400"></i> View Mobile Architecture & Specs <i class="fa-solid fa-arrow-right text-xs"></i>
          </button>
        </div>

        <!-- 11. Food Monster Vegan Recipes -->
        <div class="project-card device-card group" data-category="lifestyle">
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

            <!-- Mobile Screen Container -->
            <div class="device-screen-container mb-5 group-hover:border-pink-400/60 transition-all duration-300">
              <div class="mini-notch"></div>
              <img src="assets/images/foodmonster_mockup.png" alt="Food Monster Mobile App Screens" class="w-full h-full object-cover">
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent"></div>
              <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span class="px-3 py-1 rounded-full bg-pink-600/90 text-white font-mono text-xs font-bold shadow-md backdrop-blur-md">
                  <i class="fa-solid fa-seedling mr-1"></i> 20,000+ Recipes
                </span>
                <span class="px-2.5 py-1 rounded-full bg-slate-950/85 text-pink-300 font-mono text-xs font-semibold backdrop-blur-md border border-pink-500/30">
                  <i class="fa-solid fa-cloud-arrow-down mr-1"></i> Live on Stores
                </span>
              </div>
            </div>

            <!-- Metric Strip -->
            <div class="metric-pill p-2.5 rounded-2xl mb-4 flex items-center justify-between text-xs font-mono text-slate-300">
              <span class="flex items-center gap-1.5"><i class="fa-solid fa-receipt text-pink-400"></i> Monthly/Yearly IAP</span>
              <span class="text-slate-500">|</span>
              <span class="flex items-center gap-1.5"><i class="fa-solid fa-star text-amber-400"></i> 4.8 Rating</span>
            </div>

            <h3 class="text-2xl font-black text-white mb-2 group-hover:text-pink-300 transition-colors">Food Monster — Vegan Recipes Platform</h3>
            <p class="text-sm text-slate-300 mb-4 leading-relaxed">
              Top-ranked culinary application by One Green Planet giving instant access to 500 free vegan & dairy-free recipes plus 5,000+ archive recipes with daily releases and multi-tier IAP subscriptions.
            </p>
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-pink-400 border border-slate-800">Flutter & Java</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-pink-400 border border-slate-800">In-App Purchase</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-pink-400 border border-slate-800">Firebase</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-pink-400 border border-slate-800">Facebook Kit</span>
            </div>
          </div>

          <div class="space-y-3 mt-auto">
            <!-- App Store & Play Store Links -->
            <div class="grid grid-cols-2 gap-2.5">
              <a href="https://play.google.com/store/apps/details?id=com.onegreenplanet.foodmonster" target="_blank" rel="noopener noreferrer" class="py-2.5 px-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-pink-400/60 hover:bg-pink-500/10 text-slate-300 hover:text-white font-mono text-xs font-semibold flex items-center justify-center gap-1.5 transition-all duration-300 hover:scale-[1.02]">
                <i class="fa-brands fa-google-play text-pink-400 text-sm"></i> Play Store
              </a>
              <a href="https://apps.apple.com/us/app/food-monster-vegan-recipes/id1052988561" target="_blank" rel="noopener noreferrer" class="py-2.5 px-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-400/60 hover:bg-cyan-500/10 text-slate-300 hover:text-white font-mono text-xs font-semibold flex items-center justify-center gap-1.5 transition-all duration-300 hover:scale-[1.02]">
                <i class="fa-brands fa-apple text-cyan-400 text-sm"></i> App Store
              </a>
            </div>

            <button class="open-modal w-full py-3.5 rounded-2xl bg-slate-900 border border-slate-800 font-bold text-xs sm:text-sm text-slate-200 transition-all duration-300 hover:bg-pink-500/20 hover:border-pink-400 hover:text-white flex items-center justify-center gap-2" data-project="foodmonster">
              <i class="fa-solid fa-layer-group text-pink-400"></i> View Mobile Architecture & Specs <i class="fa-solid fa-arrow-right text-xs"></i>
            </button>
          </div>
        </div>

        <!-- 12. NMMC Edu Smart -->
        <div class="project-card device-card group" data-category="enterprise lifestyle">
          <div>
            <!-- Header Badges -->
            <div class="flex items-center justify-between gap-2 mb-4">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/15 text-blue-300 border border-blue-500/30 text-xs font-semibold font-mono">
                <i class="fa-solid fa-graduation-cap text-blue-400"></i> EdTech & School Portal
              </span>
              <span class="text-xs font-semibold text-slate-400 font-mono bg-slate-900/90 px-2.5 py-1 rounded-lg border border-slate-800">
                <i class="fa-solid fa-school text-blue-400 mr-1"></i> NMMC
              </span>
            </div>

            <!-- Mobile Screen Container -->
            <div class="device-screen-container mb-5 group-hover:border-blue-400/60 transition-all duration-300">
              <div class="mini-notch"></div>
              <img src="assets/images/nmmc_mockup.png" alt="NMMC Edu Smart Mobile App Screens" class="w-full h-full object-cover">
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent"></div>
              <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span class="px-3 py-1 rounded-full bg-blue-600/90 text-white font-mono text-xs font-bold shadow-md backdrop-blur-md">
                  <i class="fa-solid fa-chart-pie mr-1"></i> Student Analytics
                </span>
                <span class="px-2.5 py-1 rounded-full bg-slate-950/85 text-blue-300 font-mono text-xs font-semibold backdrop-blur-md border border-blue-500/30">
                  <i class="fa-solid fa-cloud-arrow-down mr-1"></i> Live on Stores
                </span>
              </div>
            </div>

            <!-- Metric Strip -->
            <div class="metric-pill p-2.5 rounded-2xl mb-4 flex items-center justify-between text-xs font-mono text-slate-300">
              <span class="flex items-center gap-1.5"><i class="fa-solid fa-bell text-blue-400"></i> FCM Push Alerts</span>
              <span class="text-slate-500">|</span>
              <span class="flex items-center gap-1.5"><i class="fa-solid fa-clipboard-user text-emerald-400"></i> Real-Time Attendance</span>
            </div>

            <h3 class="text-2xl font-black text-white mb-2 group-hover:text-blue-300 transition-colors">NMMC Edu Smart — Student Portal</h3>
            <p class="text-sm text-slate-300 mb-4 leading-relaxed">
              Comprehensive parent-school communication mobile platform for tracking child marks, real-time attendance, homework assignments, exam schedules, and circular broadcasts.
            </p>
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-blue-400 border border-slate-800">Core Java</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-blue-400 border border-slate-800">Android SDK</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-blue-400 border border-slate-800">FCM Push</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-blue-400 border border-slate-800">SQLite</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-blue-400 border border-slate-800">Payment Gateway</span>
            </div>
          </div>

          <div class="space-y-3 mt-auto">
            <a href="https://play.google.com/store/apps/details?id=io.nmmc.appr" target="_blank" rel="noopener noreferrer" class="w-full py-2.5 px-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-blue-400/60 hover:bg-blue-500/10 text-slate-300 hover:text-white font-mono text-xs font-semibold flex items-center justify-center gap-1.5 transition-all duration-300 hover:scale-[1.02]">
              <i class="fa-brands fa-google-play text-blue-400 text-sm"></i> Google Play Store
            </a>

            <button class="open-modal w-full py-3.5 rounded-2xl bg-slate-900 border border-slate-800 font-bold text-xs sm:text-sm text-slate-200 transition-all duration-300 hover:bg-blue-500/20 hover:border-blue-400 hover:text-white flex items-center justify-center gap-2" data-project="nmmc_edusmart">
              <i class="fa-solid fa-layer-group text-blue-400"></i> View Mobile Architecture & Specs <i class="fa-solid fa-arrow-right text-xs"></i>
            </button>
          </div>
        </div>

        <!-- 13. Ajmal Perfumes -->
        <div class="project-card device-card group" data-category="lifestyle">
          <div>
            <!-- Header Badges -->
            <div class="flex items-center justify-between gap-2 mb-4">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30 text-xs font-semibold font-mono">
                <i class="fa-solid fa-spray-can-sparkles text-amber-400"></i> Luxury Fragrance Store
              </span>
              <span class="text-xs font-semibold text-slate-400 font-mono bg-slate-900/90 px-2.5 py-1 rounded-lg border border-slate-800">
                <i class="fa-solid fa-gem text-amber-400 mr-1"></i> Ajmal Perfumes
              </span>
            </div>

            <!-- Mobile Screen Container -->
            <div class="device-screen-container mb-5 group-hover:border-amber-400/60 transition-all duration-300">
              <div class="mini-notch"></div>
              <img src="assets/images/ajmal_mockup.png" alt="Ajmal Perfumes Mobile App Screens" class="w-full h-full object-cover">
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent"></div>
              <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span class="px-3 py-1 rounded-full bg-amber-600/90 text-white font-mono text-xs font-bold shadow-md backdrop-blur-md">
                  <i class="fa-solid fa-crown mr-1"></i> Luxury Catalog
                </span>
                <span class="px-2.5 py-1 rounded-full bg-slate-950/85 text-amber-300 font-mono text-xs font-semibold backdrop-blur-md border border-amber-500/30">
                  <i class="fa-solid fa-cloud-arrow-down mr-1"></i> Live on Stores
                </span>
              </div>
            </div>

            <!-- Metric Strip -->
            <div class="metric-pill p-2.5 rounded-2xl mb-4 flex items-center justify-between text-xs font-mono text-slate-300">
              <span class="flex items-center gap-1.5"><i class="fa-solid fa-credit-card text-amber-400"></i> Secure Checkout</span>
              <span class="text-slate-500">|</span>
              <span class="flex items-center gap-1.5"><i class="fa-solid fa-map-pin text-cyan-400"></i> Store Locator</span>
            </div>

            <h3 class="text-2xl font-black text-white mb-2 group-hover:text-amber-300 transition-colors">Ajmal Perfumes — Mobile Store</h3>
            <p class="text-sm text-slate-300 mb-4 leading-relaxed">
              Mobile shopping application for prestigious global luxury fragrance house Ajmal Perfumes, offering fragrance discovery (Oud, Amber, Musk), cart checkout, and store locator.
            </p>
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-amber-400 border border-slate-800">Core Java</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-amber-400 border border-slate-800">Android SDK</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-amber-400 border border-slate-800">Payment Gateway</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-amber-400 border border-slate-800">Google Maps</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-amber-400 border border-slate-800">FCM</span>
            </div>
          </div>

          <div class="space-y-3 mt-auto">
            <a href="https://play.google.com/store/apps/details?id=com.atnapps.apps.app54f2e035a5c8e" target="_blank" rel="noopener noreferrer" class="w-full py-2.5 px-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-amber-400/60 hover:bg-amber-500/10 text-slate-300 hover:text-white font-mono text-xs font-semibold flex items-center justify-center gap-1.5 transition-all duration-300 hover:scale-[1.02]">
              <i class="fa-brands fa-google-play text-amber-400 text-sm"></i> Google Play Store
            </a>

            <button class="open-modal w-full py-3.5 rounded-2xl bg-slate-900 border border-slate-800 font-bold text-xs sm:text-sm text-slate-200 transition-all duration-300 hover:bg-amber-500/20 hover:border-amber-400 hover:text-white flex items-center justify-center gap-2" data-project="ajmal_perfume">
              <i class="fa-solid fa-layer-group text-amber-400"></i> View Mobile Architecture & Specs <i class="fa-solid fa-arrow-right text-xs"></i>
            </button>
          </div>
        </div>

        <!-- 14. Hotel Jobs In India -->
        <div class="project-card device-card group" data-category="enterprise">
          <div>
            <!-- Header Badges -->
            <div class="flex items-center justify-between gap-2 mb-4">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 text-xs font-semibold font-mono">
                <i class="fa-solid fa-hotel text-cyan-400"></i> Hospitality Careers
              </span>
              <span class="text-xs font-semibold text-slate-400 font-mono bg-slate-900/90 px-2.5 py-1 rounded-lg border border-slate-800">
                <i class="fa-solid fa-briefcase text-cyan-400 mr-1"></i> Hire4Hotels
              </span>
            </div>

            <!-- Mobile Screen Container -->
            <div class="device-screen-container mb-5 group-hover:border-cyan-400/60 transition-all duration-300">
              <div class="mini-notch"></div>
              <img src="assets/images/hoteljobs_mockup.png" alt="Hotel Jobs In India Mobile App Screens" class="w-full h-full object-cover">
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent"></div>
              <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span class="px-3 py-1 rounded-full bg-cyan-600/90 text-white font-mono text-xs font-bold shadow-md backdrop-blur-md">
                  <i class="fa-solid fa-star mr-1"></i> 5-Star Hotel Network
                </span>
                <span class="px-2.5 py-1 rounded-full bg-slate-950/85 text-cyan-300 font-mono text-xs font-semibold backdrop-blur-md border border-cyan-500/30">
                  <i class="fa-solid fa-cloud-arrow-down mr-1"></i> Live on Stores
                </span>
              </div>
            </div>

            <!-- Metric Strip -->
            <div class="metric-pill p-2.5 rounded-2xl mb-4 flex items-center justify-between text-xs font-mono text-slate-300">
              <span class="flex items-center gap-1.5"><i class="fa-solid fa-file-pdf text-cyan-400"></i> Instant Resume Matching</span>
              <span class="text-slate-500">|</span>
              <span class="flex items-center gap-1.5"><i class="fa-solid fa-comments text-emerald-400"></i> Direct Recruiter Chat</span>
            </div>

            <h3 class="text-2xl font-black text-white mb-2 group-hover:text-cyan-300 transition-colors">Hotel Jobs In India — Career Portal</h3>
            <p class="text-sm text-slate-300 mb-4 leading-relaxed">
              Leading hospitality job board mobile application (Hire4Hotels) connecting luxury 5-star hotels directly with verified hospitality talent across India.
            </p>
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-cyan-400 border border-slate-800">Core Java</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-cyan-400 border border-slate-800">Android SDK</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-cyan-400 border border-slate-800">Google Maps</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-cyan-400 border border-slate-800">FCM Alerts</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-cyan-400 border border-slate-800">SQLite</span>
            </div>
          </div>

          <div class="space-y-3 mt-auto">
            <a href="https://play.google.com/store/apps/details?id=com.hire4hotels.phplogin" target="_blank" rel="noopener noreferrer" class="w-full py-2.5 px-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-400/60 hover:bg-cyan-500/10 text-slate-300 hover:text-white font-mono text-xs font-semibold flex items-center justify-center gap-1.5 transition-all duration-300 hover:scale-[1.02]">
              <i class="fa-brands fa-google-play text-cyan-400 text-sm"></i> Google Play Store
            </a>

            <button class="open-modal w-full py-3.5 rounded-2xl bg-slate-900 border border-slate-800 font-bold text-xs sm:text-sm text-slate-200 transition-all duration-300 hover:bg-cyan-500/20 hover:border-cyan-400 hover:text-white flex items-center justify-center gap-2" data-project="hotel_jobs">
              <i class="fa-solid fa-layer-group text-cyan-400"></i> View Mobile Architecture & Specs <i class="fa-solid fa-arrow-right text-xs"></i>
            </button>
          </div>
        </div>

        <!-- 15. Marshalls Wallcoverings -->
        <div class="project-card device-card group" data-category="lifestyle">
          <div>
            <!-- Header Badges -->
            <div class="flex items-center justify-between gap-2 mb-4">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 text-xs font-semibold font-mono">
                <i class="fa-solid fa-brush text-emerald-400"></i> 3D Interior Decor
              </span>
              <span class="text-xs font-semibold text-slate-400 font-mono bg-slate-900/90 px-2.5 py-1 rounded-lg border border-slate-800">
                <i class="fa-solid fa-couch text-emerald-400 mr-1"></i> Marshalls
              </span>
            </div>

            <!-- Mobile Screen Container -->
            <div class="device-screen-container mb-5 group-hover:border-emerald-400/60 transition-all duration-300">
              <div class="mini-notch"></div>
              <img src="assets/images/marshalls_mockup.png" alt="Marshalls Wallcoverings Mobile App Screens" class="w-full h-full object-cover">
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent"></div>
              <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span class="px-3 py-1 rounded-full bg-emerald-600/90 text-white font-mono text-xs font-bold shadow-md backdrop-blur-md">
                  <i class="fa-solid fa-palette mr-1"></i> 10,000+ Patterns
                </span>
                <span class="px-2.5 py-1 rounded-full bg-slate-950/85 text-emerald-300 font-mono text-xs font-semibold backdrop-blur-md border border-emerald-500/30">
                  <i class="fa-solid fa-vr-cardboard mr-1"></i> 3,000+ 3D Rooms
                </span>
              </div>
            </div>

            <!-- Metric Strip -->
            <div class="metric-pill p-2.5 rounded-2xl mb-4 flex items-center justify-between text-xs font-mono text-slate-300">
              <span class="flex items-center gap-1.5"><i class="fa-solid fa-eye text-emerald-400"></i> 3D Room Visualizer</span>
              <span class="text-slate-500">|</span>
              <span class="flex items-center gap-1.5"><i class="fa-solid fa-swatchbook text-cyan-400"></i> Swatch Sample Orders</span>
            </div>

            <h3 class="text-2xl font-black text-white mb-2 group-hover:text-emerald-300 transition-colors">Marshalls Wallcoverings — 3D Studio</h3>
            <p class="text-sm text-slate-300 mb-4 leading-relaxed">
              Interactive interior design application showcasing 10,000+ wallpaper designs and 3,000+ 3D Display Room Views for smart wallcoverings simulation from home or office.
            </p>
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-emerald-400 border border-slate-800">Core Java</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-emerald-400 border border-slate-800">Android SDK</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-emerald-400 border border-slate-800">Firebase</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-emerald-400 border border-slate-800">Facebook Kit</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-emerald-400 border border-slate-800">Payment Gateway</span>
            </div>
          </div>

          <div class="space-y-3 mt-auto">
            <button class="open-modal w-full py-3.5 rounded-2xl bg-slate-900 border border-slate-800 font-bold text-xs sm:text-sm text-slate-200 transition-all duration-300 hover:bg-emerald-500/20 hover:border-emerald-400 hover:text-white flex items-center justify-center gap-2" data-project="marshalls_wallcoverings">
              <i class="fa-solid fa-layer-group text-emerald-400"></i> View Mobile Architecture & Specs <i class="fa-solid fa-arrow-right text-xs"></i>
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
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

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
