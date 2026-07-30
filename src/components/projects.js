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
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8" id="projectsGrid">

        <!-- 1. MoneyMic US -->
        <div class="project-card group glass-card rounded-3xl p-6 border border-slate-700/60 flex flex-col justify-between transition-all duration-300 hover:scale-[1.01] hover:shadow-glow-cyan hover:border-cyan-400/40" data-category="fintech">
          <div>
            <!-- Mobile Multi-Screen Showcase Image -->
            <div class="relative w-full h-52 sm:h-64 rounded-2xl overflow-hidden mb-5 border border-slate-800 shadow-xl group-hover:border-cyan-400/50 transition-all duration-300">
              <img src="assets/images/moneymic_mockup.png" alt="MoneyMic Mobile App Screens" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
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
              <img src="assets/images/icici_mockup.png" alt="ICICI Bank Mobile App Screens" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
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
              <span class="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 font-mono text-xs font-semibold">Enterprise Banking</span>
              <span class="text-xs text-slate-400 font-mono">Zero Crash Rate</span>
            </div>
            <h3 class="text-2xl font-extrabold text-white mb-2">ICICI Bank US — Digital Banking Platform</h3>
            <p class="text-sm text-slate-300 mb-4 leading-relaxed">
              Enterprise digital mobile banking application adhering to US banking compliance, biometric authentication, and Clean Architecture standards.
            </p>
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-blue-400">Flutter</span>
              <span class="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-blue-400">Clean Arch</span>
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
              <img src="assets/images/bitproex_mockup.png" alt="BitProEX Mobile App Screens" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
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

        <!-- 4. Diabos Global Shipping -->
        <div class="project-card group glass-card rounded-3xl p-6 border border-slate-700/60 flex flex-col justify-between transition-all duration-300 hover:scale-[1.01] hover:shadow-glow-amber hover:border-amber-400/40" data-category="logistics">
          <div>
            <!-- Mobile Multi-Screen Showcase Image -->
            <div class="relative w-full h-52 sm:h-64 rounded-2xl overflow-hidden mb-5 border border-slate-800 shadow-xl group-hover:border-amber-400/50 transition-all duration-300">
              <img src="assets/images/diabos_mockup.png" alt="Diabos Shipping Mobile App Screens" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span class="px-3 py-1 rounded-full bg-amber-500/90 text-white font-mono text-xs font-bold shadow-md">
                  <i class="fa-solid fa-ship mr-1"></i> Maritime Logistics
                </span>
                <span class="px-2.5 py-1 rounded-full bg-slate-950/80 text-amber-300 font-mono text-xs font-semibold backdrop-blur-md">
                  <i class="fa-solid fa-database mr-1"></i> SQLite Offline
                </span>
              </div>
            </div>

            <div class="flex items-center justify-between mb-2">
              <span class="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 font-mono text-xs font-semibold">Offline-First Logistics</span>
              <span class="text-xs text-slate-400 font-mono">500+ Daily Operators</span>
            </div>
            <h3 class="text-2xl font-extrabold text-white mb-2">Diabos Global Shipping & Disbursement</h3>
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
          <button class="open-modal w-full py-3.5 rounded-xl bg-slate-800/90 border border-slate-700 font-semibold text-xs sm:text-sm text-slate-200 transition-all duration-300 hover:bg-amber-500/20 hover:border-amber-400 hover:text-white flex items-center justify-center gap-2" data-project="diabos">
            <i class="fa-solid fa-code"></i> View Architecture & Specs <i class="fa-solid fa-arrow-right text-xs"></i>
          </button>
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
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
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
