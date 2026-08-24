/**
 * Modal Component
 */
export function renderModal() {
  return `
  <div id="projectModal" class="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 transition-all duration-300 opacity-0 pointer-events-none">
    <div class="glass-card max-w-2xl w-full rounded-3xl border border-slate-700/80 p-6 sm:p-8 shadow-2xl relative transition-all duration-300 scale-95" id="modalContainer">
      
      <!-- Close Button -->
      <button id="modalClose" class="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-800/80 text-slate-400 flex items-center justify-center text-xl transition-all duration-300 hover:scale-110 hover:text-white hover:bg-slate-700">
        &times;
      </button>

      <!-- Modal Header -->
      <div class="pr-10 mb-6">
        <span class="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 font-mono text-xs font-semibold uppercase">Architecture Overview</span>
        <h3 id="modalTitle" class="text-2xl sm:text-3xl font-extrabold text-white mt-2">Project Details</h3>
      </div>

      <!-- Modal Body -->
      <div id="modalBody" class="space-y-4 text-slate-300 text-sm leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
        <!-- Injected via JavaScript -->
      </div>

      <!-- Modal Footer -->
      <div class="mt-6 pt-4 border-t border-slate-800 flex justify-end">
        <button id="modalCloseBtn" class="px-6 py-2.5 rounded-xl bg-slate-800 text-slate-200 font-semibold text-sm transition-all duration-300 hover:scale-105 hover:bg-slate-700">
          Close Window
        </button>
      </div>

    </div>
  </div>
  `;
}

export function initModalEvents() {
  const modalOverlay = document.getElementById('projectModal');
  const modalContainer = document.getElementById('modalContainer');
  const modalClose = document.getElementById('modalClose');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');

  const projectDetailsMap = {
    'moneymic': {
      title: 'MoneyMic US — Real-Time Copy Trading Platform',
      tech: 'Flutter, MVVM, Firebase, Supabase, Socket.IO, MQTT, Go Router',
      highlights: [
        'Real-time trade replication with sub-second WebSocket and MQTT market data feeds.',
        'Expert trader discovery, leaderboards, and portfolio performance tracking.',
        'OAuth authentication with Google/Apple Sign-In & JWT token refresh flows.',
        'Cross-platform deployment on Web, iOS, and Android.'
      ]
    },
    'icici': {
      title: 'ICICI Bank US – Digital Banking Application',
      tech: 'Flutter, Clean Architecture, MVVM, Google Maps SDK, AES-256 Data Encryption, REST APIs',
      highlights: [
        'Enterprise mobile application (iUniverse) engineered for ICICI Bank for candidate lifecycle management.',
        'Engineered dynamic candidate journey timelines covering application, interview stages, offer letter generation, and asset allocation.',
        'Integrated Google Maps SDK for interactive geo-tagged job discovery across major metropolitan zones throughout India.',
        'Implemented enterprise-grade AES-256 encryption for candidate data security, documents, and banking compliance.',
        'Clean Architecture + MVVM separation of concerns resulting in zero crash rates and streamlined code testability.'
      ]
    },
    'bitproex': {
      title: 'BitProEX — Crypto Derivatives Trading Platform',
      tech: 'Flutter, BLoC/Cubit, Firebase, WebSockets, Clean Architecture',
      highlights: [
        'Global crypto derivatives exchange supporting spot and futures contracts.',
        'BLoC state management for high-frequency live order book updates.',
        'Integrated real-time trading charts, market indicators, and automated stop-loss/take-profit.'
      ]
    },
    'rampwiz': {
      title: 'Rampwiz – Fiat-to-Crypto Payment Gateway',
      tech: 'Flutter, Firebase, BLoC, Clean Architecture, Automated KYC, REST APIs',
      highlights: [
        'Built a fiat-to-crypto payment gateway at Fibitpro incorporating automated KYC verification routines, compliance workflows, and multi-currency fiat payment channels via BLoC.',
        'Architected clean layered domain boundaries with isolated data sources, repositories, and state blocs.',
        'Integrated secure payment rails (Apple Pay, Credit/Debit Cards, Wire Transfers) with zero-slippage rate locking.',
        'Implemented real-time biometric document scanning and AML compliance verification.'
      ]
    },
    'coincred': {
      title: 'CoinCRED Pro – Global Crypto Exchange',
      tech: 'Flutter, Firebase, Provider, MVVM, WebSockets, REST APIs',
      highlights: [
        'Delivered a multi-platform crypto exchange app at Fibitpro featuring KYC workflows, wallet balance tracking, and secure trading services.',
        'Engineered real-time order books, interactive charts, and live ticker simulations over low-latency WebSockets.',
        'Built comprehensive wallet infrastructure for instant crypto deposits, withdrawals, and internal transfers.',
        'Successfully deployed and maintained on both Google Play Store and Apple App Store.'
      ]
    },
    'diabos': {
      title: 'Diabos',
      tech: 'Flutter, SQLite, GetX, Clean Architecture, REST APIs, Background Sync',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.diabos.globalfze&hl=en_IN',
      appStoreUrl: 'https://apps.apple.com/us/app/diabos-3-0/id6472989764',
      highlights: [
        'Offline-first capabilities with SQLite for maritime port agents in low-connectivity environments.',
        'Disbursement accounting, port cost estimation (DA Estimator), and towage contract tracking.',
        'Vessel tracking, PDA/APDA/RFQ/AF approval workflows, and interactive agent support.',
        'Active usage by 500+ daily active logistics operators globally.'
      ]
    },
    'jiobp': {
      title: 'Jiobp My-Station — Reliance Jio-bp Partner App',
      tech: 'Flutter, GetX, Clean Architecture, SQLite, Firebase, REST APIs',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.jiobp.my_station&hl=en_IN',
      appStoreUrl: 'https://apps.apple.com/in/app/jiobp-my-station/id6450923655',
      highlights: [
        'Flagship enterprise mobility app for Reliance BP Mobility Limited (Jio-bp) mobility stations across India.',
        'Engineered station operations workflows including fuel volume reconciliations, dispenser readings, and shift handover settlements.',
        'Implemented real-time sales reporting, tank inventory telemetry, dynamic pricing sync, and digital billing receipt generation.',
        'Optimized offline-first data caching and resilient background sync for remote highway stations with spotty connectivity.',
        'Published and maintained on both Google Play Store and Apple App Store with continuous production releases.'
      ]
    },
    'jiobp_pulse': {
      title: 'jio-bp pulse Charge Pro',
      tech: 'Flutter, Google Maps SDK, GetX, Clean Architecture, REST APIs, IoT / MQTT, Payment Gateway',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.jiobp.pulse_charge&hl=en_IN',
      appStoreUrl: 'https://apps.apple.com/us/app/bp-pulse-ev-charging/id6448033048',
      highlights: [
        'Consumer & Fleet EV charging companion application engineered for Reliance BP Mobility Limited (Jio-bp pulse) across India.',
        'Integrated Google Maps SDK with custom live station cluster markers, real-time connector availability rings, and turn-by-turn routing.',
        'Engineered dynamic connector filtering for multiple charging standards (Fast: CCS, Type 2, GBT, CHAdeMO) with live power ratings (7kW - 60kW+).',
        'Implemented end-to-end charging session management: live tariff calculations (₹/kWh), slot reservation, remote session start/stop, and digital wallet checkout.',
        'Live and actively serving EV drivers on both Google Play Store and Apple App Store.'
      ]
    },
    'jiobp_myfield': {
      title: 'Jio Bp MyField',
      tech: 'Flutter, GetX, Clean Architecture, SQLite Offline, Camera & Image Compression, REST APIs',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.jiobp.pvasset&hl=en_IN',
      appStoreUrl: 'https://apps.apple.com/us/app/jiobp-myfield/id6473767546',
      highlights: [
        'Enterprise field asset verification (PV Asset) and site audit mobile platform for Reliance BP Mobility Limited (Jio-bp).',
        'Engineered dynamic audit modules including PV Assets, ASR Audit, L3/L2 HOTO handover checklists, and internal compliance verifications.',
        'Implemented offline-first SQLite database layer allowing field engineers to perform dispenser safety checks, equipment diagnostics, and photo evidence uploads in low-connectivity areas.',
        'Integrated role-based enterprise access (Head Office, Regional Officers, Field Auditors) with location code search across nationwide mobility stations.',
        'Published and maintained on both Google Play Store and Apple App Store.'
      ]
    },
    'pcs1x': {
      title: 'PCS 1x — Indian Ports Association (Maritime Port Community System)',
      tech: 'Flutter, Dart, Clean Architecture, REST APIs, Microservices, SQLite Offline, Enterprise Security, Role-Based Access Control',
      highlights: [
        'Spearheaded the PCS 1x platform for the Indian Ports Association under the Ministry of Shipping, Government of India.',
        'Enhanced operational efficiency and reduced turnaround times across major maritime ports through paperless digital workflows and electronic delivery orders (e-DO).',
        'Collaborated with cross-functional maritime stakeholders (Port Authorities, Customs Agents, Shipping Lines, Terminal Operators) to foster growth and establish operational best practices.',
        'Implemented strategic, secure, and scalable solutions aligned with the association\'s long-term vision and modernization roadmap since its inception in 1966.',
        'Architected real-time vessel tracking, berth allocation management, and cargo movement analytics with offline-resilient local sync.'
      ]
    },
    'foodmonster': {
      title: 'Food Monster — Plant-Based & Vegan Recipes Platform',
      tech: 'Flutter, iOS, Clean Architecture, StoreKit / In-App Purchases, Firebase, OAuth Social Auth',
      appStoreUrl: 'https://apps.apple.com/us/app/food-monster-vegan-recipes/id1052988561',
      highlights: [
        'Top-rated culinary application by One Green Planet featuring 20,000+ plant-based, vegan, and dairy-free recipes.',
        'Engineered seamless multi-tier In-App Purchase (IAP) subscriptions (monthly, bi-annual, annual) with StoreKit and receipt validation.',
        'Implemented OAuth 2.0 social sign-in (Apple Sign-In, Google, Facebook, Email).',
        'Engineered high-performance categorical recipe discovery, dietary filter algorithms, bookmarking, and offline recipe caching.',
        'Published and maintained on Apple App Store with high active subscriber retention.'
      ]
    }
  };

  document.querySelectorAll('.open-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = btn.getAttribute('data-project');
      const details = projectDetailsMap[projectId];

      if (details && modalOverlay) {
        if (modalTitle) modalTitle.textContent = details.title;
        if (modalBody) {
          let storeLinksHtml = '';
          if (details.playStoreUrl || details.appStoreUrl) {
            storeLinksHtml = `
              <div class="flex flex-wrap gap-2.5 pt-1 mb-4">
                ${details.playStoreUrl ? `
                  <a href="${details.playStoreUrl}" target="_blank" rel="noopener noreferrer" class="px-3.5 py-2 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/30 hover:text-white font-mono text-xs font-semibold flex items-center gap-1.5 transition-all duration-300 hover:scale-105">
                    <i class="fa-brands fa-google-play text-emerald-400"></i> Google Play Store
                  </a>
                ` : ''}
                ${details.appStoreUrl ? `
                  <a href="${details.appStoreUrl}" target="_blank" rel="noopener noreferrer" class="px-3.5 py-2 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/30 hover:text-white font-mono text-xs font-semibold flex items-center gap-1.5 transition-all duration-300 hover:scale-105">
                    <i class="fa-brands fa-apple text-cyan-400"></i> Apple App Store
                  </a>
                ` : ''}
              </div>
            `;
          }

          modalBody.innerHTML = `
            <div class="p-3 rounded-xl bg-slate-900/90 font-mono text-xs text-cyan-400 border border-slate-800 mb-4">
              <strong>Tech Stack:</strong> ${details.tech}
            </div>
            ${storeLinksHtml}
            <h4 class="font-bold text-white text-sm mb-2">Key Technical Deliverables:</h4>
            <ul class="space-y-2 text-slate-300 text-sm list-disc list-inside leading-relaxed">
              ${details.highlights.map(h => `<li>${h}</li>`).join('')}
            </ul>
          `;
        }

        modalOverlay.classList.remove('opacity-0', 'pointer-events-none');
        modalOverlay.classList.add('opacity-100', 'pointer-events-auto');
        modalContainer?.classList.remove('scale-95');
        modalContainer?.classList.add('scale-100');
      }
    });
  });

  const closeModal = () => {
    modalOverlay?.classList.add('opacity-0', 'pointer-events-none');
    modalOverlay?.classList.remove('opacity-100', 'pointer-events-auto');
    modalContainer?.classList.add('scale-95');
    modalContainer?.classList.remove('scale-100');
  };

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }
}
