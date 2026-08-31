/**
 * Skills Component - Mobile Control Center & App Library
 */
export function renderSkills() {
  return `
  <section class="py-24 relative" id="skills">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Title -->
      <div class="text-center max-w-3xl mx-auto mb-12 space-y-4">
        <span class="px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider border border-cyan-500/20 shadow-glow-cyan">
          <i class="fa-solid fa-sliders text-cyan-400"></i> Mobile Control Center
        </span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
          Mobile Engineering <span class="gradient-text">Skills Matrix</span>
        </h2>
        <p class="text-slate-300 text-base sm:text-lg">
          Mastery across modern cross-platform mobile SDKs, reactive state engines, low-latency communication protocols, enterprise security, and automated CI/CD pipelines.
        </p>
      </div>

      <!-- Skills Tab Controls (iOS Segmented Control) -->
      <div class="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
        <div class="ios-segmented-control flex-wrap justify-center">
          <button class="skill-tab-btn ios-segment-btn active" data-tab="all">
            <i class="fa-solid fa-layer-group text-cyan-400"></i> All Modules
          </button>
          <button class="skill-tab-btn ios-segment-btn" data-tab="languages">
            <i class="fa-solid fa-code text-cyan-400"></i> SDKs & Languages
          </button>
          <button class="skill-tab-btn ios-segment-btn" data-tab="state">
            <i class="fa-solid fa-sitemap text-purple-400"></i> State & Arch
          </button>
          <button class="skill-tab-btn ios-segment-btn" data-tab="backend">
            <i class="fa-solid fa-bolt text-emerald-400"></i> Real-Time & Stream
          </button>
          <button class="skill-tab-btn ios-segment-btn" data-tab="payments">
            <i class="fa-solid fa-credit-card text-amber-400"></i> Payments & Storage
          </button>
          <button class="skill-tab-btn ios-segment-btn" data-tab="devops">
            <i class="fa-solid fa-gears text-pink-400"></i> CI/CD & Testing
          </button>
        </div>
      </div>

      <!-- Skills Control Center Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="skillsGrid">

        <!-- 1. Mobile SDKs & Languages -->
        <div class="skill-card control-center-tile flex flex-col justify-between" data-group="languages">
          <div>
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-lg font-bold">
                  <i class="fa-solid fa-code"></i>
                </div>
                <div>
                  <h3 class="font-extrabold text-white text-lg">Core Mobile SDKs</h3>
                  <p class="text-xs text-slate-400 font-mono">Languages & Platforms</p>
                </div>
              </div>
              <span class="text-xs font-mono text-cyan-400 font-bold bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/20">6+ Yrs Dart</span>
            </div>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-cyan-300 border border-slate-800">Flutter SDK (3.x)</span>
              <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-cyan-300 border border-slate-800">Dart (3.x)</span>
              <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-cyan-300 border border-slate-800">Kotlin (Android)</span>
              <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-cyan-300 border border-slate-800">Java (Android SDK)</span>
              <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-cyan-300 border border-slate-800">Swift & iOS</span>
              <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-cyan-300 border border-slate-800">Flutter Web</span>
            </div>
          </div>
          <div class="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
            <span>Proficiency: Native & Cross-Platform</span>
            <span class="text-cyan-400 font-bold">100%</span>
          </div>
        </div>

        <!-- 2. State Management & Architecture -->
        <div class="skill-card control-center-tile flex flex-col justify-between" data-group="state">
          <div>
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center text-lg font-bold">
                  <i class="fa-solid fa-sitemap"></i>
                </div>
                <div>
                  <h3 class="font-extrabold text-white text-lg">State & Architecture</h3>
                  <p class="text-xs text-slate-400 font-mono">Reactive Flow & MVVM</p>
                </div>
              </div>
              <span class="text-xs font-mono text-purple-400 font-bold bg-purple-500/10 px-2.5 py-1 rounded-full border border-purple-500/20">Production</span>
            </div>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-purple-300 border border-slate-800">Riverpod (2.0)</span>
              <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-purple-300 border border-slate-800">BLoC / Cubit</span>
              <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-purple-300 border border-slate-800">Clean Architecture</span>
              <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-purple-300 border border-slate-800">MVVM Pattern</span>
              <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-purple-300 border border-slate-800">Provider</span>
              <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-purple-300 border border-slate-800">GetX Ecosystem</span>
            </div>
          </div>
          <div class="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
            <span>Decoupled SOLID Layers</span>
            <span class="text-purple-400 font-bold">100%</span>
          </div>
        </div>

        <!-- 3. Real-Time Streaming & Networking -->
        <div class="skill-card control-center-tile flex flex-col justify-between" data-group="backend">
          <div>
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-lg font-bold">
                  <i class="fa-solid fa-bolt"></i>
                </div>
                <div>
                  <h3 class="font-extrabold text-white text-lg">Real-Time & Protocols</h3>
                  <p class="text-xs text-slate-400 font-mono">Low Latency Data Feeds</p>
                </div>
              </div>
              <span class="text-xs font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">Sub-50ms</span>
            </div>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-emerald-300 border border-slate-800">WebSockets (Socket.IO)</span>
              <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-emerald-300 border border-slate-800">MQTT Broker (IoT)</span>
              <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-emerald-300 border border-slate-800">RESTful APIs (Dio/Http)</span>
              <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-emerald-300 border border-slate-800">Firebase Cloud Messaging</span>
              <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-emerald-300 border border-slate-800">GraphQL Client</span>
              <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-emerald-300 border border-slate-800">gRPC Streams</span>
            </div>
          </div>
          <div class="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
            <span>High-Frequency Order Books</span>
            <span class="text-emerald-400 font-bold">100%</span>
          </div>
        </div>

        <!-- 4. Security, Biometrics & Encryption -->
        <div class="skill-card control-center-tile flex flex-col justify-between" data-group="payments">
          <div>
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center text-lg font-bold">
                  <i class="fa-solid fa-shield-halved"></i>
                </div>
                <div>
                  <h3 class="font-extrabold text-white text-lg">Enterprise Security</h3>
                  <p class="text-xs text-slate-400 font-mono">Banking & Privacy</p>
                </div>
              </div>
              <span class="text-xs font-mono text-blue-400 font-bold bg-blue-500/10 px-2.5 py-1 rounded-full border border-blue-500/20">ICICI US Grade</span>
            </div>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-blue-300 border border-slate-800">AES-256 Encryption</span>
              <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-blue-300 border border-slate-800">Biometric Auth (FaceID)</span>
              <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-blue-300 border border-slate-800">iOS Keychain & Keystore</span>
              <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-blue-300 border border-slate-800">SSL Pinning</span>
              <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-blue-300 border border-slate-800">JWT Token Refresh</span>
            </div>
          </div>
          <div class="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
            <span>Zero Vulnerability Compliance</span>
            <span class="text-blue-400 font-bold">100%</span>
          </div>
        </div>

        <!-- 5. Payment Gateways & Local Databases -->
        <div class="skill-card control-center-tile flex flex-col justify-between" data-group="payments">
          <div>
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-lg font-bold">
                  <i class="fa-solid fa-credit-card"></i>
                </div>
                <div>
                  <h3 class="font-extrabold text-white text-lg">Payments & Storage</h3>
                  <p class="text-xs text-slate-400 font-mono">Offline-First Engines</p>
                </div>
              </div>
              <span class="text-xs font-mono text-amber-400 font-bold bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">Multi-Channel</span>
            </div>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-amber-300 border border-slate-800">Stripe & Razorpay</span>
              <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-amber-300 border border-slate-800">Apple Pay & Google Pay</span>
              <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-amber-300 border border-slate-800">StoreKit In-App Purchases</span>
              <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-amber-300 border border-slate-800">SQLite & Floor</span>
              <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-amber-300 border border-slate-800">Hive & Isar DB</span>
              <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-amber-300 border border-slate-800">Shared Preferences</span>
            </div>
          </div>
          <div class="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
            <span>Offline Sync & Conflict Resolver</span>
            <span class="text-amber-400 font-bold">100%</span>
          </div>
        </div>

        <!-- 6. CI/CD, DevOps & Testing -->
        <div class="skill-card control-center-tile flex flex-col justify-between" data-group="devops">
          <div>
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-2xl bg-pink-500/20 text-pink-400 flex items-center justify-center text-lg font-bold">
                  <i class="fa-solid fa-gears"></i>
                </div>
                <div>
                  <h3 class="font-extrabold text-white text-lg">CI/CD & DevOps</h3>
                  <p class="text-xs text-slate-400 font-mono">Automated Deployment</p>
                </div>
              </div>
              <span class="text-xs font-mono text-pink-400 font-bold bg-pink-500/10 px-2.5 py-1 rounded-full border border-pink-500/20">Fastlane</span>
            </div>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-pink-300 border border-slate-800">GitHub Actions CI/CD</span>
              <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-pink-300 border border-slate-800">Fastlane Match & Build</span>
              <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-pink-300 border border-slate-800">Firebase Crashlytics & Analytics</span>
              <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-pink-300 border border-slate-800">Shorebird Code Push</span>
              <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-pink-300 border border-slate-800">Flutter Unit & Widget Tests</span>
              <span class="px-3 py-1.5 rounded-xl bg-slate-900/90 text-xs font-mono font-semibold text-pink-300 border border-slate-800">App Store Connect & Play Console</span>
            </div>
          </div>
          <div class="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
            <span>Automated Zero-Touch Releases</span>
            <span class="text-pink-400 font-bold">100%</span>
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
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const tabValue = btn.getAttribute('data-tab');

      skillCards.forEach(card => {
        const group = card.getAttribute('data-group');
        if (tabValue === 'all' || group === tabValue) {
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
