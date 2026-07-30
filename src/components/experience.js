/**
 * Experience Timeline Component
 */
export function renderExperience() {
  return `
  <section class="py-20 relative" id="experience">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <span class="px-3.5 py-1.5 rounded-full bg-purple-500/10 text-purple-400 text-xs font-mono font-bold uppercase tracking-wider border border-purple-500/20">
          Career Trajectory
        </span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Professional <span class="gradient-text">Experience</span>
        </h2>
        <p class="text-slate-400 text-base sm:text-lg">
          9+ years of hands-on software engineering experience (6+ Flutter, 3 Android) building scalable fintech, trading, banking, and enterprise systems.
        </p>
      </div>

      <!-- Experience Timeline Stack -->
      <div class="max-w-4xl mx-auto space-y-8">

        <!-- 1. Orangebits Software Technologies -->
        <div class="glass-card p-6 sm:p-8 rounded-3xl border border-slate-700/60 transition-all duration-300 hover:scale-[1.01] hover:shadow-glow-cyan hover:border-cyan-400/40">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-800">
            <div>
              <div class="flex items-center gap-3 flex-wrap">
                <h3 class="text-xl sm:text-2xl font-extrabold text-white">Orangebits Software Technologies Pvt Ltd</h3>
                <span class="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 font-mono text-xs font-semibold">Oct 2024 – Present</span>
              </div>
              <p class="text-sm text-cyan-400 font-semibold mt-1">Senior Flutter Developer — Web, Android & iOS</p>
            </div>
            <div class="font-mono text-xs text-slate-400">
              <i class="fa-solid fa-location-dot text-cyan-400 mr-1"></i> Pune, Maharashtra, India
            </div>
          </div>
          <ul class="space-y-2.5 text-sm text-slate-300 list-disc list-inside leading-relaxed">
            <li>Led hands-on Flutter development across <strong class="text-white">Android, iOS, and Web</strong>, owning core feature design, architecture, and performance optimization for client products.</li>
            <li>Delivered enterprise-grade mobile solutions for <strong class="text-cyan-300">ICICI Bank US</strong>, implementing secure financial workflows, API-driven banking features, and compliant UI/UX to US banking standards.</li>
            <li>Designed and developed <strong class="text-cyan-300">MoneyMic US</strong> — a real-time copy trading platform enabling expert trader discovery, sub-second trade replication, and portfolio tracking.</li>
            <li>Implemented real-time market data streaming using <strong class="text-white">WebSockets, MQTT, and Socket.IO</strong> for sub-second latency financial data.</li>
            <li>Integrated payment gateways including <strong class="text-white">Razorpay, UPI, and Google Pay</strong> for secure deposits, withdrawals, and transactions.</li>
            <li>Enforced <strong class="text-white">Clean Architecture and MVVM</strong>, improving maintainability, test coverage, and developer onboarding speed.</li>
          </ul>
        </div>

        <!-- 2. Fibit Infotech Pvt. Ltd. -->
        <div class="glass-card p-6 sm:p-8 rounded-3xl border border-slate-700/60 transition-all duration-300 hover:scale-[1.01] hover:shadow-glow-purple hover:border-purple-400/40">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-800">
            <div>
              <div class="flex items-center gap-3 flex-wrap">
                <h3 class="text-xl sm:text-2xl font-extrabold text-white">Fibit Infotech Pvt. Ltd.</h3>
                <span class="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 font-mono text-xs font-semibold">Jul 2023 – Oct 2024</span>
              </div>
              <p class="text-sm text-purple-400 font-semibold mt-1">Senior Flutter Developer — Android & iOS</p>
            </div>
            <div class="font-mono text-xs text-slate-400">
              <i class="fa-solid fa-location-dot text-purple-400 mr-1"></i> Pune, Maharashtra, India
            </div>
          </div>
          <ul class="space-y-2.5 text-sm text-slate-300 list-disc list-inside leading-relaxed">
            <li>Led feature development and architecture decisions for crypto trading platforms including <strong class="text-purple-300">BitProEX</strong>, <strong class="text-purple-300">Rampwiz Gateway</strong>, and <strong class="text-purple-300">CoinCRED Pro</strong>.</li>
            <li>Developed live market data streaming, order management systems (spot/futures), and push notification engines for high-frequency workflows.</li>
            <li>Integrated Razorpay, UPI, and Google Pay for end-to-end payment processing.</li>
            <li>Applied Clean Architecture and MVVM, conducting structured code reviews and mentoring engineering team members.</li>
          </ul>
        </div>

        <!-- 3. Tech Mahindra Ltd. (Client: Reliance Jio) -->
        <div class="glass-card p-6 sm:p-8 rounded-3xl border border-slate-700/60 transition-all duration-300 hover:scale-[1.01] hover:shadow-glow-emerald hover:border-emerald-400/40">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-800">
            <div>
              <div class="flex items-center gap-3 flex-wrap">
                <h3 class="text-xl sm:text-2xl font-extrabold text-white">Tech Mahindra Ltd. <span class="text-slate-400 text-base font-normal">(Client: Reliance Jio)</span></h3>
                <span class="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-mono text-xs font-semibold">Feb 2022 – Jun 2023</span>
              </div>
              <p class="text-sm text-emerald-400 font-semibold mt-1">Flutter Developer — Android & iOS</p>
            </div>
            <div class="font-mono text-xs text-slate-400">
              <i class="fa-solid fa-location-dot text-emerald-400 mr-1"></i> Mumbai, Maharashtra, India
            </div>
          </div>
          <ul class="space-y-2.5 text-sm text-slate-300 list-disc list-inside leading-relaxed">
            <li>Built and maintained enterprise Flutter applications for <strong class="text-emerald-300">Reliance Jio</strong> (<strong class="text-white">Jiobp MyStation</strong>), delivering station workflow tools and customer operations.</li>
            <li>Integrated backend microservices and third-party APIs for secure cross-platform authentication and data flow.</li>
            <li>Implemented Clean Architecture and performed performance profiling, resolving UI rendering bottlenecks for enterprise scale.</li>
          </ul>
        </div>

        <!-- 4. Portall Infosystems Pvt. Ltd. (J.M. Baxi Group) -->
        <div class="glass-card p-6 sm:p-8 rounded-3xl border border-slate-700/60 transition-all duration-300 hover:scale-[1.01] hover:shadow-glow-amber hover:border-amber-400/40">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-800">
            <div>
              <div class="flex items-center gap-3 flex-wrap">
                <h3 class="text-xl sm:text-2xl font-extrabold text-white">Portall Infosystems Pvt. Ltd. <span class="text-slate-400 text-base font-normal">(J.M. Baxi Group)</span></h3>
                <span class="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 font-mono text-xs font-semibold">Sep 2019 – Feb 2022</span>
              </div>
              <p class="text-sm text-amber-400 font-semibold mt-1">Flutter Developer — Android & iOS</p>
            </div>
            <div class="font-mono text-xs text-slate-400">
              <i class="fa-solid fa-location-dot text-amber-400 mr-1"></i> Mumbai, Maharashtra, India
            </div>
          </div>
          <ul class="space-y-2.5 text-sm text-slate-300 list-disc list-inside leading-relaxed">
            <li>Owned end-to-end mobile development for <strong class="text-amber-300">Diabos Global Shipping & Disbursement</strong> platform from architecture to production deployment.</li>
            <li>Engineered <strong class="text-white">offline-first capabilities with SQLite</strong> and background sync, enabling field port agents to operate seamlessly in low-connectivity environments.</li>
            <li>Automated shipping workflow tracking and disbursement accounting for <strong class="text-white">500+ daily active logistics operators</strong> globally.</li>
          </ul>
        </div>

        <!-- 5. Chromatic Infosystems Pvt. Ltd. -->
        <div class="glass-card p-6 sm:p-8 rounded-3xl border border-slate-700/60 transition-all duration-300 hover:scale-[1.01] hover:shadow-glow-pink hover:border-pink-400/40">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-800">
            <div>
              <div class="flex items-center gap-3 flex-wrap">
                <h3 class="text-xl sm:text-2xl font-extrabold text-white">Chromatic Infosystems Pvt. Ltd.</h3>
                <span class="px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 font-mono text-xs font-semibold">Aug 2018 – Jul 2019</span>
              </div>
              <p class="text-sm text-pink-400 font-semibold mt-1">Android Developer</p>
            </div>
            <div class="font-mono text-xs text-slate-400">
              <i class="fa-solid fa-location-dot text-pink-400 mr-1"></i> Navi Mumbai, Maharashtra, India
            </div>
          </div>
          <ul class="space-y-2 text-sm text-slate-300 list-disc list-inside leading-relaxed">
            <li>Designed and maintained native Android applications using Java and Android SDK.</li>
            <li>Integrated RESTful APIs and third-party SDKs for secure user authentication and data management.</li>
          </ul>
        </div>

        <!-- 6. Arigel Software Pvt. Ltd. -->
        <div class="glass-card p-6 sm:p-8 rounded-3xl border border-slate-700/60 transition-all duration-300 hover:scale-[1.01] hover:shadow-glow-cyan hover:border-cyan-400/40">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-800">
            <div>
              <div class="flex items-center gap-3 flex-wrap">
                <h3 class="text-xl sm:text-2xl font-extrabold text-white">Arigel Software Pvt. Ltd.</h3>
                <span class="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 font-mono text-xs font-semibold">May 2016 – Aug 2018</span>
              </div>
              <p class="text-sm text-cyan-400 font-semibold mt-1">Android Developer</p>
            </div>
            <div class="font-mono text-xs text-slate-400">
              <i class="fa-solid fa-location-dot text-cyan-400 mr-1"></i> Navi Mumbai, Maharashtra, India
            </div>
          </div>
          <ul class="space-y-2 text-sm text-slate-300 list-disc list-inside leading-relaxed">
            <li>Developed and maintained Android applications end-to-end using Java and Android SDK, establishing core mobile engineering expertise.</li>
            <li>Integrated backend services and APIs to ensure seamless data flow and improved app stability through systematic debugging.</li>
          </ul>
        </div>

      </div>

    </div>
  </section>
  `;
}
