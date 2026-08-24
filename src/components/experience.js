/**
 * Experience Timeline Component - Executive Career Trajectory
 */
export function renderExperience() {
  return `
  <section class="py-20 relative" id="experience">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-400 text-xs font-mono font-bold uppercase tracking-wider border border-purple-500/20 shadow-glow-purple">
          <i class="fa-solid fa-briefcase text-purple-400"></i> Career Trajectory & Leadership
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Professional <span class="gradient-text">Experience</span>
        </h2>
        <p class="text-slate-400 text-base sm:text-lg">
          9+ years of engineering leadership across high-scale Flutter & Android systems — from enterprise banking and crypto derivatives to nation-scale logistics.
        </p>

        <!-- Career Milestones Summary Strip -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto pt-2 text-center">
          <div class="p-3 rounded-2xl bg-slate-900/80 border border-slate-800">
            <div class="text-lg sm:text-xl font-extrabold text-cyan-400 font-mono">9+ Yrs</div>
            <div class="text-[11px] text-slate-400">Total Experience</div>
          </div>
          <div class="p-3 rounded-2xl bg-slate-900/80 border border-slate-800">
            <div class="text-lg sm:text-xl font-extrabold text-emerald-400 font-mono">6+ Yrs</div>
            <div class="text-[11px] text-slate-400">Flutter & Dart</div>
          </div>
          <div class="p-3 rounded-2xl bg-slate-900/80 border border-slate-800">
            <div class="text-lg sm:text-xl font-extrabold text-purple-400 font-mono">11 Apps</div>
            <div class="text-[11px] text-slate-400">Production Delivered</div>
          </div>
          <div class="p-3 rounded-2xl bg-slate-900/80 border border-slate-800">
            <div class="text-lg sm:text-xl font-extrabold text-amber-400 font-mono">99.9%</div>
            <div class="text-[11px] text-slate-400">Crash-Free Reliability</div>
          </div>
        </div>
      </div>

      <!-- Experience Timeline Container with Glowing Vertical Spine -->
      <div class="max-w-4xl mx-auto relative pl-6 sm:pl-10 space-y-10 before:absolute before:top-4 before:bottom-4 before:left-2 sm:before:left-4 before:w-0.5 before:bg-gradient-to-b before:from-cyan-400 before:via-purple-500 before:to-slate-700">

        <!-- 1. Orangebits Software Technologies -->
        <div class="relative group">
          <!-- Timeline Pulse Node -->
          <div class="absolute -left-[30px] sm:-left-[46px] top-6 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-900 border-2 border-cyan-400 flex items-center justify-center shadow-glow-cyan z-10 transition-transform duration-300 group-hover:scale-110">
            <i class="fa-solid fa-rocket text-cyan-400 text-xs sm:text-sm"></i>
          </div>

          <div class="glass-card p-6 sm:p-8 rounded-3xl border border-slate-700/60 transition-all duration-300 hover:scale-[1.01] hover:shadow-glow-cyan hover:border-cyan-400/50">
            <!-- Header Row -->
            <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-5 mb-5 border-b border-slate-800">
              <div>
                <div class="flex items-center gap-2.5 flex-wrap mb-1">
                  <h3 class="text-xl sm:text-2xl font-black text-white">Orangebits Software Technologies</h3>
                  <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 text-[11px] font-semibold font-mono">
                    <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Present (Current Role)
                  </span>
                </div>
                <p class="text-sm font-semibold text-cyan-400 flex items-center gap-1.5">
                  <i class="fa-solid fa-laptop-code"></i> Senior Flutter Developer — Web, Android & iOS
                </p>
              </div>
              <div class="flex sm:flex-col items-center sm:items-end gap-2 text-xs font-mono text-slate-400">
                <span class="px-3 py-1 rounded-xl bg-slate-900/90 border border-slate-800 text-cyan-300 font-semibold">
                  <i class="fa-regular fa-calendar mr-1"></i> Oct 2024 – Present
                </span>
                <span class="text-slate-400">
                  <i class="fa-solid fa-location-dot text-cyan-400 mr-1"></i> Pune, India
                </span>
              </div>
            </div>

            <!-- Delivered Projects Showcase Strip -->
            <div class="mb-5 p-3.5 rounded-2xl bg-slate-900/80 border border-cyan-500/20">
              <span class="text-[11px] font-mono font-bold text-cyan-400 uppercase tracking-wider block mb-2">
                <i class="fa-solid fa-trophy mr-1"></i> Flagship Production Apps Delivered:
              </span>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 rounded-xl bg-slate-950 text-xs font-semibold text-blue-300 border border-blue-500/30 flex items-center gap-1.5">
                  <i class="fa-solid fa-building-columns text-blue-400"></i> ICICI Bank US (Digital Banking)
                </span>
                <span class="px-3 py-1 rounded-xl bg-slate-950 text-xs font-semibold text-cyan-300 border border-cyan-500/30 flex items-center gap-1.5">
                  <i class="fa-solid fa-chart-line text-cyan-400"></i> MoneyMic US (Copy Trading)
                </span>
                <span class="px-3 py-1 rounded-xl bg-slate-950 text-xs font-semibold text-pink-300 border border-pink-500/30 flex items-center gap-1.5">
                  <i class="fa-solid fa-seedling text-pink-400"></i> Food Monster (20k+ Vegan Recipes)
                </span>
              </div>
            </div>

            <!-- Detailed Impact Points -->
            <ul class="space-y-3 text-sm text-slate-300 leading-relaxed mb-6">
              <li class="flex items-start gap-2.5">
                <i class="fa-solid fa-circle-check text-cyan-400 mt-1 text-xs shrink-0"></i>
                <span>Led hands-on Flutter development across <strong class="text-white">Android, iOS, and Web</strong>, owning core architecture, feature velocity, and performance optimization for mission-critical client products.</span>
              </li>
              <li class="flex items-start gap-2.5">
                <i class="fa-solid fa-circle-check text-cyan-400 mt-1 text-xs shrink-0"></i>
                <span>Architected and delivered <strong class="text-blue-300">ICICI Bank US (iUniverse)</strong>, implementing candidate lifecycle management, Google Maps SDK geo-tagged job discovery, and banking-grade <strong class="text-white">AES-256 encrypted security</strong>.</span>
              </li>
              <li class="flex items-start gap-2.5">
                <i class="fa-solid fa-circle-check text-cyan-400 mt-1 text-xs shrink-0"></i>
                <span>Designed and developed <strong class="text-cyan-300">MoneyMic US</strong> — a sub-second copy trading platform connecting followers with expert traders via <strong class="text-white">WebSockets, MQTT, and Socket.IO</strong>.</span>
              </li>
              <li class="flex items-start gap-2.5">
                <i class="fa-solid fa-circle-check text-cyan-400 mt-1 text-xs shrink-0"></i>
                <span>Delivered <strong class="text-pink-300">Food Monster</strong> for One Green Planet on iOS, integrating StoreKit multi-tier in-app subscriptions, dietary filter engines, and social auth.</span>
              </li>
            </ul>

            <!-- Tech Stack Tags -->
            <div class="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-cyan-300 border border-slate-800">Flutter</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-cyan-300 border border-slate-800">Clean Architecture</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-cyan-300 border border-slate-800">Riverpod</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-cyan-300 border border-slate-800">WebSockets / MQTT</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-cyan-300 border border-slate-800">Google Maps SDK</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-cyan-300 border border-slate-800">AES-256</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-cyan-300 border border-slate-800">StoreKit IAP</span>
            </div>
          </div>
        </div>

        <!-- 2. Fibit Infotech Pvt. Ltd. -->
        <div class="relative group">
          <!-- Timeline Pulse Node -->
          <div class="absolute -left-[30px] sm:-left-[46px] top-6 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-900 border-2 border-purple-400 flex items-center justify-center shadow-glow-purple z-10 transition-transform duration-300 group-hover:scale-110">
            <i class="fa-solid fa-chart-candlestick text-purple-400 text-xs sm:text-sm"></i>
          </div>

          <div class="glass-card p-6 sm:p-8 rounded-3xl border border-slate-700/60 transition-all duration-300 hover:scale-[1.01] hover:shadow-glow-purple hover:border-purple-400/50">
            <!-- Header Row -->
            <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-5 mb-5 border-b border-slate-800">
              <div>
                <div class="flex items-center gap-2.5 flex-wrap mb-1">
                  <h3 class="text-xl sm:text-2xl font-black text-white">Fibit Infotech Pvt. Ltd.</h3>
                  <span class="px-3 py-0.5 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/30 text-[11px] font-semibold font-mono">
                    Fintech & Crypto
                  </span>
                </div>
                <p class="text-sm font-semibold text-purple-400 flex items-center gap-1.5">
                  <i class="fa-solid fa-wallet"></i> Senior Flutter Developer — Android & iOS
                </p>
              </div>
              <div class="flex sm:flex-col items-center sm:items-end gap-2 text-xs font-mono text-slate-400">
                <span class="px-3 py-1 rounded-xl bg-slate-900/90 border border-slate-800 text-purple-300 font-semibold">
                  <i class="fa-regular fa-calendar mr-1"></i> Jul 2023 – Oct 2024
                </span>
                <span class="text-slate-400">
                  <i class="fa-solid fa-location-dot text-purple-400 mr-1"></i> Pune, India
                </span>
              </div>
            </div>

            <!-- Delivered Projects Showcase Strip -->
            <div class="mb-5 p-3.5 rounded-2xl bg-slate-900/80 border border-purple-500/20">
              <span class="text-[11px] font-mono font-bold text-purple-400 uppercase tracking-wider block mb-2">
                <i class="fa-solid fa-trophy mr-1"></i> Flagship Production Apps Delivered:
              </span>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 rounded-xl bg-slate-950 text-xs font-semibold text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5">
                  <i class="fa-solid fa-chart-candlestick text-emerald-400"></i> BitProEX (Derivatives 125x)
                </span>
                <span class="px-3 py-1 rounded-xl bg-slate-950 text-xs font-semibold text-purple-300 border border-purple-500/30 flex items-center gap-1.5">
                  <i class="fa-solid fa-money-bill-transfer text-purple-400"></i> Rampwiz (Fiat Gateway)
                </span>
                <span class="px-3 py-1 rounded-xl bg-slate-950 text-xs font-semibold text-cyan-300 border border-cyan-500/30 flex items-center gap-1.5">
                  <i class="fa-solid fa-arrow-right-arrow-left text-cyan-400"></i> CoinCRED Pro (Global Exchange)
                </span>
              </div>
            </div>

            <!-- Detailed Impact Points -->
            <ul class="space-y-3 text-sm text-slate-300 leading-relaxed mb-6">
              <li class="flex items-start gap-2.5">
                <i class="fa-solid fa-circle-check text-purple-400 mt-1 text-xs shrink-0"></i>
                <span>Architected core mobile architecture for high-frequency trading platforms, handling low-latency live order book updates, real-time depth charts, and automated stop-loss/take-profit orders.</span>
              </li>
              <li class="flex items-start gap-2.5">
                <i class="fa-solid fa-circle-check text-purple-400 mt-1 text-xs shrink-0"></i>
                <span>Engineered <strong class="text-purple-300">Rampwiz Fiat-to-Crypto Gateway</strong> featuring automated KYC document verification, multi-currency payment rails, and zero-slippage execution.</span>
              </li>
              <li class="flex items-start gap-2.5">
                <i class="fa-solid fa-circle-check text-purple-400 mt-1 text-xs shrink-0"></i>
                <span>Integrated secure payment gateways (Razorpay, UPI, Apple Pay) and custom multi-asset crypto wallet balance management.</span>
              </li>
            </ul>

            <!-- Tech Stack Tags -->
            <div class="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-purple-300 border border-slate-800">Flutter</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-purple-300 border border-slate-800">BLoC / Cubit</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-purple-300 border border-slate-800">Clean Architecture</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-purple-300 border border-slate-800">WebSockets</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-purple-300 border border-slate-800">Automated KYC</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-purple-300 border border-slate-800">Firebase</span>
            </div>
          </div>
        </div>

        <!-- 3. Tech Mahindra Ltd. (Client: Reliance Jio-bp) -->
        <div class="relative group">
          <!-- Timeline Pulse Node -->
          <div class="absolute -left-[30px] sm:-left-[46px] top-6 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-900 border-2 border-emerald-400 flex items-center justify-center shadow-glow-emerald z-10 transition-transform duration-300 group-hover:scale-110">
            <i class="fa-solid fa-bolt text-emerald-400 text-xs sm:text-sm"></i>
          </div>

          <div class="glass-card p-6 sm:p-8 rounded-3xl border border-slate-700/60 transition-all duration-300 hover:scale-[1.01] hover:shadow-glow-emerald hover:border-emerald-400/50">
            <!-- Header Row -->
            <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-5 mb-5 border-b border-slate-800">
              <div>
                <div class="flex items-center gap-2.5 flex-wrap mb-1">
                  <h3 class="text-xl sm:text-2xl font-black text-white">Tech Mahindra Ltd.</h3>
                  <span class="px-3 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 text-[11px] font-bold font-mono">
                    Client: Reliance Jio-bp
                  </span>
                </div>
                <p class="text-sm font-semibold text-emerald-400 flex items-center gap-1.5">
                  <i class="fa-solid fa-gas-pump"></i> Flutter Developer — Android & iOS
                </p>
              </div>
              <div class="flex sm:flex-col items-center sm:items-end gap-2 text-xs font-mono text-slate-400">
                <span class="px-3 py-1 rounded-xl bg-slate-900/90 border border-slate-800 text-emerald-300 font-semibold">
                  <i class="fa-regular fa-calendar mr-1"></i> Feb 2022 – Jun 2023
                </span>
                <span class="text-slate-400">
                  <i class="fa-solid fa-location-dot text-emerald-400 mr-1"></i> Mumbai, India
                </span>
              </div>
            </div>

            <!-- Delivered Projects Showcase Strip -->
            <div class="mb-5 p-3.5 rounded-2xl bg-slate-900/80 border border-emerald-500/20">
              <span class="text-[11px] font-mono font-bold text-emerald-400 uppercase tracking-wider block mb-2">
                <i class="fa-solid fa-trophy mr-1"></i> Flagship Production Apps Delivered:
              </span>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 rounded-xl bg-slate-950 text-xs font-semibold text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5">
                  <i class="fa-solid fa-gas-pump text-emerald-400"></i> Jiobp My-Station (1,500+ Stations)
                </span>
                <span class="px-3 py-1 rounded-xl bg-slate-950 text-xs font-semibold text-cyan-300 border border-cyan-500/30 flex items-center gap-1.5">
                  <i class="fa-solid fa-charging-station text-cyan-400"></i> jio-bp pulse Charge Pro (EV Mobility)
                </span>
                <span class="px-3 py-1 rounded-xl bg-slate-950 text-xs font-semibold text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5">
                  <i class="fa-solid fa-clipboard-check text-emerald-400"></i> Jio Bp MyField (PV Asset Audit)
                </span>
              </div>
            </div>

            <!-- Detailed Impact Points -->
            <ul class="space-y-3 text-sm text-slate-300 leading-relaxed mb-6">
              <li class="flex items-start gap-2.5">
                <i class="fa-solid fa-circle-check text-emerald-400 mt-1 text-xs shrink-0"></i>
                <span>Architected and delivered 3 enterprise Flutter applications for <strong class="text-white">Reliance BP Mobility Limited (Jio-bp)</strong> across nationwide mobility stations.</span>
              </li>
              <li class="flex items-start gap-2.5">
                <i class="fa-solid fa-circle-check text-emerald-400 mt-1 text-xs shrink-0"></i>
                <span>Engineered <strong class="text-emerald-300">Jiobp My-Station</strong> managing daily dispenser meter readings, tank inventory telemetry, shift settlements, and digital invoicing.</span>
              </li>
              <li class="flex items-start gap-2.5">
                <i class="fa-solid fa-circle-check text-emerald-400 mt-1 text-xs shrink-0"></i>
                <span>Built <strong class="text-cyan-300">jio-bp pulse Charge Pro</strong> EV companion app with custom Google Maps station markers, connector filtering (CCS, Type 2, GBT), and slot booking.</span>
              </li>
              <li class="flex items-start gap-2.5">
                <i class="fa-solid fa-circle-check text-emerald-400 mt-1 text-xs shrink-0"></i>
                <span>Implemented <strong class="text-white">offline-first SQLite caching</strong> with resilient background synchronization for remote highway stations with intermittent connectivity.</span>
              </li>
            </ul>

            <!-- Tech Stack Tags -->
            <div class="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-emerald-300 border border-slate-800">Flutter</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-emerald-300 border border-slate-800">GetX</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-emerald-300 border border-slate-800">SQLite Offline</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-emerald-300 border border-slate-800">Google Maps</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-emerald-300 border border-slate-800">IoT / MQTT</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-emerald-300 border border-slate-800">Camera & OCR</span>
            </div>
          </div>
        </div>

        <!-- 4. Portall Infosystems Pvt. Ltd. (Client: Indian Ports Association / J.M. Baxi Group) -->
        <div class="relative group">
          <!-- Timeline Pulse Node -->
          <div class="absolute -left-[30px] sm:-left-[46px] top-6 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-900 border-2 border-amber-400 flex items-center justify-center shadow-glow-amber z-10 transition-transform duration-300 group-hover:scale-110">
            <i class="fa-solid fa-ship text-amber-400 text-xs sm:text-sm"></i>
          </div>

          <div class="glass-card p-6 sm:p-8 rounded-3xl border border-slate-700/60 transition-all duration-300 hover:scale-[1.01] hover:shadow-glow-amber hover:border-amber-400/50">
            <!-- Header Row -->
            <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-5 mb-5 border-b border-slate-800">
              <div>
                <div class="flex items-center gap-2.5 flex-wrap mb-1">
                  <h3 class="text-xl sm:text-2xl font-black text-white">Portall Infosystems Pvt. Ltd.</h3>
                  <span class="px-3 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30 text-[11px] font-bold font-mono">
                    Client: Indian Ports Association
                  </span>
                </div>
                <p class="text-sm font-semibold text-amber-400 flex items-center gap-1.5">
                  <i class="fa-solid fa-anchor"></i> Flutter Developer — Android & iOS
                </p>
              </div>
              <div class="flex sm:flex-col items-center sm:items-end gap-2 text-xs font-mono text-slate-400">
                <span class="px-3 py-1 rounded-xl bg-slate-900/90 border border-slate-800 text-amber-300 font-semibold">
                  <i class="fa-regular fa-calendar mr-1"></i> Sep 2019 – Feb 2022
                </span>
                <span class="text-slate-400">
                  <i class="fa-solid fa-location-dot text-amber-400 mr-1"></i> Mumbai, India
                </span>
              </div>
            </div>

            <!-- Delivered Projects Showcase Strip -->
            <div class="mb-5 p-3.5 rounded-2xl bg-slate-900/80 border border-amber-500/20">
              <span class="text-[11px] font-mono font-bold text-amber-400 uppercase tracking-wider block mb-2">
                <i class="fa-solid fa-trophy mr-1"></i> Flagship Production Apps Delivered:
              </span>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 rounded-xl bg-slate-950 text-xs font-semibold text-cyan-300 border border-cyan-500/30 flex items-center gap-1.5">
                  <i class="fa-solid fa-landmark text-cyan-400"></i> PCS 1x (National Port Community System)
                </span>
                <span class="px-3 py-1 rounded-xl bg-slate-950 text-xs font-semibold text-amber-300 border border-amber-500/30 flex items-center gap-1.5">
                  <i class="fa-solid fa-ship text-amber-400"></i> Diabos (Global Maritime Logistics)
                </span>
              </div>
            </div>

            <!-- Detailed Impact Points -->
            <ul class="space-y-3 text-sm text-slate-300 leading-relaxed mb-6">
              <li class="flex items-start gap-2.5">
                <i class="fa-solid fa-circle-check text-amber-400 mt-1 text-xs shrink-0"></i>
                <span>Spearheaded the national <strong class="text-cyan-300">PCS 1x</strong> mobile platform for the <strong class="text-white">Indian Ports Association</strong> under the Ministry of Shipping, digitizing vessel traffic, berth allocation, and electronic delivery orders (e-DO).</span>
              </li>
              <li class="flex items-start gap-2.5">
                <i class="fa-solid fa-circle-check text-amber-400 mt-1 text-xs shrink-0"></i>
                <span>Owned end-to-end mobile architecture for <strong class="text-amber-300">Diabos Global Maritime Platform</strong>, supporting 500+ daily port agents globally with disbursement accounting and port cost estimation (DA Estimator).</span>
              </li>
              <li class="flex items-start gap-2.5">
                <i class="fa-solid fa-circle-check text-amber-400 mt-1 text-xs shrink-0"></i>
                <span>Engineered <strong class="text-white">offline-first SQLite database architecture</strong> for field agents operating in low-connectivity marine environments.</span>
              </li>
            </ul>

            <!-- Tech Stack Tags -->
            <div class="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-amber-300 border border-slate-800">Flutter</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-amber-300 border border-slate-800">SQLite Offline</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-amber-300 border border-slate-800">GetX</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-amber-300 border border-slate-800">Microservices</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-amber-300 border border-slate-800">REST APIs</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-amber-300 border border-slate-800">Background Sync</span>
            </div>
          </div>
        </div>

        <!-- 5. Chromatic Infosystems Pvt. Ltd. -->
        <div class="relative group">
          <!-- Timeline Pulse Node -->
          <div class="absolute -left-[30px] sm:-left-[46px] top-6 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-900 border-2 border-pink-400 flex items-center justify-center shadow-glow-pink z-10 transition-transform duration-300 group-hover:scale-110">
            <i class="fa-solid fa-mobile-screen-button text-pink-400 text-xs sm:text-sm"></i>
          </div>

          <div class="glass-card p-6 sm:p-8 rounded-3xl border border-slate-700/60 transition-all duration-300 hover:scale-[1.01] hover:shadow-glow-pink hover:border-pink-400/50">
            <!-- Header Row -->
            <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-5 mb-5 border-b border-slate-800">
              <div>
                <div class="flex items-center gap-2.5 flex-wrap mb-1">
                  <h3 class="text-xl sm:text-2xl font-black text-white">Chromatic Infosystems Pvt. Ltd.</h3>
                  <span class="px-3 py-0.5 rounded-full bg-pink-500/15 text-pink-300 border border-pink-500/30 text-[11px] font-semibold font-mono">
                    Android Native
                  </span>
                </div>
                <p class="text-sm font-semibold text-pink-400 flex items-center gap-1.5">
                  <i class="fa-brands fa-android"></i> Android Developer
                </p>
              </div>
              <div class="flex sm:flex-col items-center sm:items-end gap-2 text-xs font-mono text-slate-400">
                <span class="px-3 py-1 rounded-xl bg-slate-900/90 border border-slate-800 text-pink-300 font-semibold">
                  <i class="fa-regular fa-calendar mr-1"></i> Aug 2018 – Jul 2019
                </span>
                <span class="text-slate-400">
                  <i class="fa-solid fa-location-dot text-pink-400 mr-1"></i> Navi Mumbai, India
                </span>
              </div>
            </div>

            <!-- Detailed Impact Points -->
            <ul class="space-y-3 text-sm text-slate-300 leading-relaxed mb-6">
              <li class="flex items-start gap-2.5">
                <i class="fa-solid fa-circle-check text-pink-400 mt-1 text-xs shrink-0"></i>
                <span>Designed and developed native Android applications using Java, Android SDK, and SQLite.</span>
              </li>
              <li class="flex items-start gap-2.5">
                <i class="fa-solid fa-circle-check text-pink-400 mt-1 text-xs shrink-0"></i>
                <span>Integrated RESTful web services, third-party authentication SDKs, and payment gateways.</span>
              </li>
            </ul>

            <!-- Tech Stack Tags -->
            <div class="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-pink-300 border border-slate-800">Java</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-pink-300 border border-slate-800">Android SDK</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-pink-300 border border-slate-800">SQLite</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-pink-300 border border-slate-800">RESTful APIs</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-pink-300 border border-slate-800">Retrofit</span>
            </div>
          </div>
        </div>

        <!-- 6. Arigel Software Pvt. Ltd. -->
        <div class="relative group">
          <!-- Timeline Pulse Node -->
          <div class="absolute -left-[30px] sm:-left-[46px] top-6 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-900 border-2 border-cyan-400 flex items-center justify-center shadow-glow-cyan z-10 transition-transform duration-300 group-hover:scale-110">
            <i class="fa-solid fa-code text-cyan-400 text-xs sm:text-sm"></i>
          </div>

          <div class="glass-card p-6 sm:p-8 rounded-3xl border border-slate-700/60 transition-all duration-300 hover:scale-[1.01] hover:shadow-glow-cyan hover:border-cyan-400/50">
            <!-- Header Row -->
            <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-5 mb-5 border-b border-slate-800">
              <div>
                <div class="flex items-center gap-2.5 flex-wrap mb-1">
                  <h3 class="text-xl sm:text-2xl font-black text-white">Arigel Software Pvt. Ltd.</h3>
                  <span class="px-3 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 text-[11px] font-semibold font-mono">
                    Career Foundation
                  </span>
                </div>
                <p class="text-sm font-semibold text-cyan-400 flex items-center gap-1.5">
                  <i class="fa-brands fa-android"></i> Android Developer
                </p>
              </div>
              <div class="flex sm:flex-col items-center sm:items-end gap-2 text-xs font-mono text-slate-400">
                <span class="px-3 py-1 rounded-xl bg-slate-900/90 border border-slate-800 text-cyan-300 font-semibold">
                  <i class="fa-regular fa-calendar mr-1"></i> May 2016 – Aug 2018
                </span>
                <span class="text-slate-400">
                  <i class="fa-solid fa-location-dot text-cyan-400 mr-1"></i> Navi Mumbai, India
                </span>
              </div>
            </div>

            <!-- Detailed Impact Points -->
            <ul class="space-y-3 text-sm text-slate-300 leading-relaxed mb-6">
              <li class="flex items-start gap-2.5">
                <i class="fa-solid fa-circle-check text-cyan-400 mt-1 text-xs shrink-0"></i>
                <span>Developed and maintained native Android applications end-to-end using Java and Android SDK, establishing foundational mobile engineering expertise.</span>
              </li>
              <li class="flex items-start gap-2.5">
                <i class="fa-solid fa-circle-check text-cyan-400 mt-1 text-xs shrink-0"></i>
                <span>Integrated backend services and APIs to ensure seamless data flow and high application stability through systematic debugging and testing.</span>
              </li>
            </ul>

            <!-- Tech Stack Tags -->
            <div class="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-cyan-300 border border-slate-800">Java</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-cyan-300 border border-slate-800">Android SDK</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-cyan-300 border border-slate-800">SQLite</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-cyan-300 border border-slate-800">XML Layouts</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-cyan-300 border border-slate-800">OOP Design</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
  `;
}

