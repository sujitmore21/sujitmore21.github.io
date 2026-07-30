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
      title: 'ICICI Bank US — Digital Banking Platform',
      tech: 'Flutter, MVVM, Clean Architecture, AES Data Encryption, REST APIs',
      highlights: [
        'Enterprise banking solution for US market adhering to strict banking security standards.',
        'Clean Architecture + MVVM modular structure for scalability, zero crash rates, and unit testability.',
        'Account management, secure transfers, transaction histories, and PDF statement generation.',
        'Biometric authentication & encrypted local storage.'
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
      title: 'Rampwiz — Fiat-to-Crypto Payment Gateway',
      tech: 'Flutter, BLoC, Firebase, RESTful APIs, Razorpay, Clean Architecture',
      highlights: [
        'Fiat-to-Crypto gateway integrating automated KYC compliance verification.',
        'Seamless integration with fiat payment rails (UPI, NetBanking, Cards, Razorpay).',
        'Secure wallet management & transaction audit trails.'
      ]
    },
    'diabos': {
      title: 'Diabos — Global Shipping & Disbursement Platform',
      tech: 'Flutter, SQLite, GetX, MVVM, Background Sync',
      highlights: [
        'Offline-first capabilities with SQLite for maritime agents in low-connectivity environments.',
        'Disbursement accounting, port cost estimation, and towage contract tracking.',
        'Active usage by 500+ daily active logistics operators globally.'
      ]
    },
    'jiobp': {
      title: 'Jiobp MyStation — Reliance Jio Partner App',
      tech: 'Flutter, GetX, MVC, Firebase, REST APIs',
      highlights: [
        'Operations app for Reliance Jio channel partners across India.',
        'Station workflow management, inventory tracking, and sales analytics.',
        'Deployed cross-platform on Android & iOS.'
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
          modalBody.innerHTML = `
            <div class="p-3 rounded-xl bg-slate-900/90 font-mono text-xs text-cyan-400 border border-slate-800 mb-4">
              <strong>Tech Stack:</strong> ${details.tech}
            </div>
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
