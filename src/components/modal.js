/**
 * Modal Component - Native Mobile Bottom Sheet & Spec Inspector
 */
export function renderModal() {
  return `
  <div id="projectModal" class="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-xl flex items-center justify-center p-4 transition-all duration-300 opacity-0 pointer-events-none">
    <div class="glass-card max-w-2xl w-full rounded-3xl border border-slate-700/80 p-6 sm:p-8 shadow-2xl relative transition-all duration-300 scale-95" id="modalContainer">
      
      <!-- Native Mobile Sheet Grabber Handle -->
      <div class="w-12 h-1 bg-slate-600/80 rounded-full mx-auto mb-4 sm:hidden"></div>

      <!-- Close Button -->
      <button id="modalClose" class="absolute top-5 right-5 w-10 h-10 rounded-full bg-slate-800/80 text-slate-400 flex items-center justify-center text-xl transition-all duration-300 hover:scale-110 hover:text-white hover:bg-slate-700">
        &times;
      </button>

      <!-- Modal Header -->
      <div class="pr-10 mb-5">
        <span class="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 font-mono text-xs font-bold uppercase tracking-wider">
          <i class="fa-solid fa-mobile-screen mr-1"></i> Mobile Architecture & Engineering Specs
        </span>
        <h3 id="modalTitle" class="text-2xl sm:text-3xl font-black text-white mt-2">App Details</h3>
      </div>

      <!-- Modal Body -->
      <div id="modalBody" class="space-y-4 text-slate-300 text-sm leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
        <!-- Injected via JavaScript -->
      </div>

      <!-- Modal Footer -->
      <div class="mt-6 pt-4 border-t border-slate-800 flex justify-end">
        <button id="modalCloseBtn" class="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs sm:text-sm transition-all duration-300 hover:scale-105">
          Close Inspector
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
      tech: 'Flutter SDK, MVVM, Firebase, Supabase, Socket.IO, MQTT, Go Router, Riverpod',
      highlights: [
        'Real-time sub-second trade replication with duplex WebSocket and MQTT market data pipelines.',
        'Expert master trader discovery, live profit leaderboards, and portfolio performance tracking.',
        'OAuth authentication with Google/Apple Sign-In & JWT token refresh flows.',
        'Cross-platform deployment on Web, iOS, and Android with 50+ concurrent data streams.'
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
      tech: 'Flutter, BLoC/Cubit, Firebase, WebSockets, Clean Architecture, CustomPainter',
      highlights: [
        'Global crypto derivatives exchange supporting spot and futures contracts with up to 125x leverage.',
        'BLoC state management for high-frequency live order book updates and Level-2 depth charts.',
        'Hardware-accelerated CustomPainter charting engine executing at 120 FPS.',
        'Integrated real-time trading charts, technical market indicators, and automated stop-loss/take-profit.'
      ]
    },
    'rampwiz': {
      title: 'Rampwiz – Fiat-to-Crypto Payment Gateway',
      tech: 'Flutter, Firebase, BLoC, Clean Architecture, Automated KYC, REST APIs, Apple Pay',
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
      title: 'Diabos Global Maritime Logistics',
      tech: 'Flutter, SQLite, GetX, Clean Architecture, REST APIs, Background Sync',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.diabos.globalfze&hl=en_IN',
      appStoreUrl: 'https://apps.apple.com/us/app/diabos-3-0/id6472989764',
      highlights: [
        'Offline-first capabilities with SQLite for maritime port agents in low-connectivity environments.',
        'Disbursement accounting, port cost estimation (DA Estimator), and towage contract tracking.',
        'Vessel tracking, PDA/APDA/RFQ/AF approval workflows, and interactive agent support.',
        'Active usage by 500+ daily active logistics operators globally across major international ports.'
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
      title: 'jio-bp pulse Charge Pro — EV Smart Mobility',
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
      title: 'Jio Bp MyField — PV Asset Audit & Compliance',
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
      title: 'PCS 1x — Indian Ports Association (National Port System)',
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
      title: 'Food Monster: Vegan Recipes — One Green Planet',
      tech: 'Core Java, Flutter, Firebase Database, Facebook Kit Login, Google Maps, SQLite, Payment Gateway, Push Notifications, Material Design',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.onegreenplanet.foodmonster',
      appStoreUrl: 'https://apps.apple.com/us/app/food-monster-vegan-recipes/id1052988561',
      highlights: [
        'Top-ranked culinary application giving instant access to 500 free vegan, meatless, and dairy-free recipes.',
        'Engineered paid monthly and yearly magazine subscription options unlocking 5,000+ archive recipes plus 10+ new recipes daily (3,000+ per year).',
        'Implemented Facebook kit login with mobile number, Firebase real-time database, and payment gateway subscriptions.',
        'Customized UI layouts with Material Design to support all Android screen densities and published on Google Play Store & App Store.',
        'Managed development using JIRA, GitHub, Bitbucket across a cross-functional 4-person engineering team.'
      ]
    },
    'nmmc_edusmart': {
      title: 'NMMC Edu Smart — School & Student Performance Platform',
      tech: 'Core Java, Android SDK, Web Services (JSON), Payment Gateway, Push Notifications, FCM, Google Maps, SQLite, Material Design XML',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=io.nmmc.appr',
      highlights: [
        'Parent-teacher-student communication and academic performance tracking application for Navi Mumbai Municipal Corporation schools.',
        'Engineered modules for real-time attendance monitoring, marks and report card grades, homework assignments, and exam schedules.',
        'Integrated FCM push notifications for instant broadcast of school circulars, notices, and PTA meetings.',
        'Implemented offline SQLite storage and Google Maps school locator with secure fee payment gateway integration.',
        'Led end-to-end Android UI/UX design, testing, bug fixing, and Google Play Store release across a 5-person team.'
      ]
    },
    'ajmal_perfume': {
      title: 'Ajmal Perfumes — Luxury Fragrance Mobile Store',
      tech: 'Core Java, Android SDK, Web Services (JSON), Payment Gateway, Push Notifications, FCM, Google Maps, SQLite, XML Material Design',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.atnapps.apps.app54f2e035a5c8e',
      highlights: [
        'Flagship mobile e-commerce platform for Ajmal Perfumes — a prestigious multi-million dollar regional luxury fragrance brand established in 1951.',
        'Engineered interactive fragrance discovery catalog featuring Oud, Amber, Rose notes, and luxury gift collections.',
        'Integrated secure payment gateway checkout, user cart synchronization, and FCM promotional push notifications.',
        'Integrated Google Maps SDK for physical store boutique location mapping across India and the Middle East.',
        'Optimized Material Design XML layouts for all Android devices and managed publishing on Google Play Store.'
      ]
    },
    'hotel_jobs': {
      title: 'Hotel Jobs In India — Hospitality Career Network',
      tech: 'Core Java, Android SDK, Web Services (JSON), Payment Gateway, Push Notifications, FCM, Google Maps, SQLite, Material Design',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.hire4hotels.phplogin',
      highlights: [
        'Specialized hospitality recruitment and job board mobile platform (Hire4Hotels) connecting top-tier 5-star hotels and jobseekers in India.',
        'Engineered candidate profile creation, resume PDF upload, categorical job search (Executive Chef, Front Office, F&B Supervisor), and direct recruiter chat.',
        'Integrated FCM instant alerts for application status updates, interview invitations, and job openings.',
        'Implemented Google Maps SDK for geo-tagged hotel property location discovery and route mapping.',
        'Handled full Android lifecycle from UI design to Play Store release with JIRA, GitHub, Slack, and Skype collaboration.'
      ]
    },
    'marshalls_wallcoverings': {
      title: 'Marshalls Wallcoverings — 3D Interior & Wallpaper Studio',
      tech: 'Core Java, Android SDK, Web Services (JSON), Payment Gateway, Push Notifications, Firebase Database, Facebook Kit Login, Google Maps, SQLite, Material Design',
      highlights: [
        'Luxury interior decor mobile application for browsing 10,000+ designer wallpaper patterns, textures, and shades online.',
        'Engineered interactive 3D Display Room View visualizer with 3,000+ living room, bedroom, and dining room wall simulations.',
        'Integrated Facebook kit phone login, Firebase database sync, sample swatch ordering payment gateway, and Google Maps showroom locator.',
        'Optimized high-resolution texture rendering and SQLite local caching for smooth catalog browsing across all Android devices.',
        'Handled complete UI design, programming, bug fixing, and enhancement lifecycle with JIRA, GitHub, and Slack.'
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
            <div class="p-3 rounded-2xl bg-slate-900/90 font-mono text-xs text-cyan-300 border border-slate-800 mb-4 flex items-center gap-2">
              <i class="fa-solid fa-layer-group text-cyan-400"></i>
              <span><strong>Stack:</strong> ${details.tech}</span>
            </div>
            ${storeLinksHtml}
            <h4 class="font-black text-white text-sm mb-2.5">Key Technical Deliverables & Metrics:</h4>
            <ul class="space-y-2.5 text-slate-300 text-sm leading-relaxed">
              ${details.highlights.map(h => `
                <li class="flex items-start gap-2">
                  <i class="fa-solid fa-circle-check text-cyan-400 mt-1 text-xs shrink-0"></i>
                  <span>${h}</span>
                </li>
              `).join('')}
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
