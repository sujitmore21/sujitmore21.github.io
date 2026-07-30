/**
 * Skills Component
 */
export function renderSkills() {
  return `
  <section class="py-20 relative" id="skills">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Title -->
      <div class="text-center max-w-3xl mx-auto mb-12 space-y-4">
        <span class="px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider border border-cyan-500/20">
          Resume Skill Set
        </span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Technical Expertise & <span class="gradient-text">Skills Matrix</span>
        </h2>
        <p class="text-slate-400 text-base sm:text-lg">
          Comprehensive breakdown of engineering languages, state management, real-time protocols, databases, payment gateways, and DevOps pipelines.
        </p>
      </div>

      <!-- Skills Tab Controls -->
      <div class="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
        <button class="skill-tab-btn px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-300 bg-slate-900/80 border border-slate-800 transition-all duration-300 hover:scale-105 active shadow-md" data-tab="all">
          <i class="fa-solid fa-layer-group text-cyan-400 mr-1.5"></i> All Categories
        </button>
        <button class="skill-tab-btn px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-400 bg-slate-900/80 border border-slate-800 transition-all duration-300 hover:scale-105" data-tab="languages">
          <i class="fa-solid fa-code text-cyan-400 mr-1.5"></i> Languages & Frameworks
        </button>
        <button class="skill-tab-btn px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-400 bg-slate-900/80 border border-slate-800 transition-all duration-300 hover:scale-105" data-tab="state">
          <i class="fa-solid fa-sitemap text-purple-400 mr-1.5"></i> State & Architecture
        </button>
        <button class="skill-tab-btn px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-400 bg-slate-900/80 border border-slate-800 transition-all duration-300 hover:scale-105" data-tab="backend">
          <i class="fa-solid fa-bolt text-emerald-400 mr-1.5"></i> Real-Time & Backend
        </button>
        <button class="skill-tab-btn px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-400 bg-slate-900/80 border border-slate-800 transition-all duration-300 hover:scale-105" data-tab="payments">
          <i class="fa-solid fa-credit-card text-amber-400 mr-1.5"></i> Payments & Storage
        </button>
        <button class="skill-tab-btn px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-400 bg-slate-900/80 border border-slate-800 transition-all duration-300 hover:scale-105" data-tab="devops">
          <i class="fa-solid fa-gears text-pink-400 mr-1.5"></i> CI/CD, Testing & Tools
        </button>
      </div>

      <!-- Skills Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="skillsGrid">

        <!-- 1. Languages -->
        <div class="skill-card glass-card p-6 rounded-3xl border border-slate-700/60 transition-all duration-300 hover:scale-105 hover:shadow-glow-cyan hover:border-cyan-400/40" data-group="languages">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xl font-bold">
              <i class="fa-solid fa-code"></i>
            </div>
            <div>
              <h3 class="font-extrabold text-white text-lg">Programming Languages</h3>
              <p class="text-xs text-slate-400 font-mono">Core Engineering</p>
            </div>
          </div>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-cyan-300 border border-slate-800">Dart (6+ yrs)</span>
            <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-cyan-300 border border-slate-800">Kotlin</span>
            <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-cyan-300 border border-slate-800">Java</span>
            <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-cyan-300 border border-slate-800">Swift</span>
            <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-cyan-300 border border-slate-800">JavaScript</span>
            <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-cyan-300 border border-slate-800">SQL & XML</span>
          </div>
        </div>

        <!-- 2. Frameworks & Platforms -->
        <div class="skill-card glass-card p-6 rounded-3xl border border-slate-700/60 transition-all duration-300 hover:scale-105 hover:shadow-glow-cyan hover:border-cyan-400/40" data-group="languages">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center text-xl font-bold">
              <i class="fa-solid fa-mobile-screen-button"></i>
            </div>
            <div>
              <h3 class="font-extrabold text-white text-lg">Frameworks & Platforms</h3>
              <p class="text-xs text-slate-400 font-mono">Cross-Platform</p>
            </div>
          </div>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-blue-300 border border-slate-800">Flutter SDK (6+ yrs)</span>
            <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-blue-300 border border-slate-800">Android SDK (3 yrs)</span>
            <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-blue-300 border border-slate-800">iOS Platform</span>
            <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-blue-300 border border-slate-800">Flutter Web</span>
          </div>
        </div>

        <!-- 3. State Management -->
        <div class="skill-card glass-card p-6 rounded-3xl border border-slate-700/60 transition-all duration-300 hover:scale-105 hover:shadow-glow-purple hover:border-purple-400/40" data-group="state">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center text-xl font-bold">
              <i class="fa-solid fa-sitemap"></i>
            </div>
            <div>
              <h3 class="font-extrabold text-white text-lg">State Management</h3>
              <p class="text-xs text-slate-400 font-mono">Reactivity & Flow</p>
            </div>
          </div>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-purple-300 border border-slate-800">Riverpod</span>
            <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-purple-300 border border-slate-800">BLoC / Cubit</span>
            <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-purple-300 border border-slate-800">GetX</span>
            <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-purple-300 border border-slate-800">Provider</span>
            <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-purple-300 border border-slate-800">Redux</span>
          </div>
        </div>

        <!-- 4. Architecture -->
        <div class="skill-card glass-card p-6 rounded-3xl border border-slate-700/60 transition-all duration-300 hover:scale-105 hover:shadow-glow-purple hover:border-purple-400/40" data-group="state">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center text-xl font-bold">
              <i class="fa-solid fa-cubes"></i>
            </div>
            <div>
              <h3 class="font-extrabold text-white text-lg">Architecture Patterns</h3>
              <p class="text-xs text-slate-400 font-mono">Scalable System Design</p>
            </div>
          </div>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-purple-300 border border-slate-800">Clean Architecture</span>
            <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-purple-300 border border-slate-800">MVVM</span>
            <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-purple-300 border border-slate-800">Modular Feature Pattern</span>
            <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-purple-300 border border-slate-800">MVC</span>
            <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-purple-300 border border-slate-800">Repository Pattern</span>
          </div>
        </div>

        <!-- 5. Real-Time Systems & Backend -->
        <div class="skill-card glass-card p-6 rounded-3xl border border-slate-700/60 transition-all duration-300 hover:scale-105 hover:shadow-glow-emerald hover:border-emerald-400/40" data-group="backend">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xl font-bold">
              <i class="fa-solid fa-bolt"></i>
            </div>
            <div>
              <h3 class="font-extrabold text-white text-lg">Real-Time & Backend</h3>
              <p class="text-xs text-slate-400 font-mono">Low-Latency Financial Data</p>
            </div>
          </div>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-emerald-300 border border-slate-800">WebSockets</span>
            <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-emerald-300 border border-slate-800">Socket.IO</span>
            <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-emerald-300 border border-slate-800">MQTT Protocols</span>
            <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-emerald-300 border border-slate-800">Firebase (Auth, FCM, Firestore)</span>
            <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-emerald-300 border border-slate-800">Supabase</span>
            <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-emerald-300 border border-slate-800">RESTful APIs & GraphQL</span>
          </div>
        </div>

        <!-- 6. Databases & Storage -->
        <div class="skill-card glass-card p-6 rounded-3xl border border-slate-700/60 transition-all duration-300 hover:scale-105 hover:shadow-glow-amber hover:border-amber-400/40" data-group="payments">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-xl font-bold">
              <i class="fa-solid fa-database"></i>
            </div>
            <div>
              <h3 class="font-extrabold text-white text-lg">Databases & Storage</h3>
              <p class="text-xs text-slate-400 font-mono">Offline-First Engine</p>
            </div>
          </div>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-amber-300 border border-slate-800">SQLite</span>
            <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-amber-300 border border-slate-800">Hive</span>
            <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-amber-300 border border-slate-800">Drift DB</span>
            <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-amber-300 border border-slate-800">Shared Preferences</span>
            <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-amber-300 border border-slate-800">Encrypted Local Vault</span>
          </div>
        </div>

        <!-- 7. Payment Gateways -->
        <div class="skill-card glass-card p-6 rounded-3xl border border-slate-700/60 transition-all duration-300 hover:scale-105 hover:shadow-glow-amber hover:border-amber-400/40" data-group="payments">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-xl font-bold">
              <i class="fa-solid fa-credit-card"></i>
            </div>
            <div>
              <h3 class="font-extrabold text-white text-lg">Payment Integration</h3>
              <p class="text-xs text-slate-400 font-mono">Fiat & Crypto Rails</p>
            </div>
          </div>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-amber-300 border border-slate-800">Razorpay</span>
            <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-amber-300 border border-slate-800">UPI</span>
            <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-amber-300 border border-slate-800">Google Pay</span>
            <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-amber-300 border border-slate-800">Stripe</span>
            <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-amber-300 border border-slate-800">PayPal</span>
            <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-amber-300 border border-slate-800">In-App Purchases</span>
          </div>
        </div>

        <!-- 8. CI/CD & DevOps -->
        <div class="skill-card glass-card p-6 rounded-3xl border border-slate-700/60 transition-all duration-300 hover:scale-105 hover:shadow-glow-pink hover:border-pink-400/40" data-group="devops">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center text-xl font-bold">
              <i class="fa-solid fa-rocket"></i>
            </div>
            <div>
              <h3 class="font-extrabold text-white text-lg">CI/CD & Deployment</h3>
              <p class="text-xs text-slate-400 font-mono">Automated Release Pipeline</p>
            </div>
          </div>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-pink-300 border border-slate-800">GitHub Actions</span>
            <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-pink-300 border border-slate-800">GitLab CI/CD</span>
            <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-pink-300 border border-slate-800">Fastlane</span>
            <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-pink-300 border border-slate-800">Codemagic</span>
            <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-pink-300 border border-slate-800">Play Store & App Store Publishing</span>
          </div>
        </div>

        <!-- 9. Testing, Tools & UI/UX -->
        <div class="skill-card glass-card p-6 rounded-3xl border border-slate-700/60 transition-all duration-300 hover:scale-105 hover:shadow-glow-pink hover:border-pink-400/40" data-group="devops">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center text-xl font-bold">
              <i class="fa-solid fa-vial"></i>
            </div>
            <div>
              <h3 class="font-extrabold text-white text-lg">Testing & Dev Tools</h3>
              <p class="text-xs text-slate-400 font-mono">Quality Assurance</p>
            </div>
          </div>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-pink-300 border border-slate-800">Unit & Widget Testing</span>
            <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-pink-300 border border-slate-800">Integration Testing (TDD)</span>
            <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-pink-300 border border-slate-800">VS Code & Android Studio</span>
            <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-pink-300 border border-slate-800">Xcode & Postman</span>
            <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-pink-300 border border-slate-800">Material & Cupertino UI</span>
          </div>
        </div>

      </div>

    </div>
  </section>
  `;
}

export function initSkillTabEvents() {
  const tabBtns = document.querySelectorAll('.skill-tab-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => {
        b.classList.remove('active', 'text-slate-300');
        b.classList.add('text-slate-400');
      });
      btn.classList.add('active', 'text-slate-300');

      const group = btn.getAttribute('data-tab');

      skillCards.forEach(card => {
        const cardGroup = card.getAttribute('data-group');
        if (group === 'all' || cardGroup === group) {
          card.style.display = 'block';
          card.classList.add('animate-fade-in');
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}
