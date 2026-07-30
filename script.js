/**
 * Sujit More - Senior Flutter Developer Portfolio Interactivity
 * Website: Sujitmore.github.io / sujitmore21.github.io
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initThemeToggle();
  initMobileMenu();
  initTypingEffect();
  initLiveTickerSimulation();
  initProjectFilters();
  initSkillTabs();
  initCounterAnimations();
  initModalHandlers();
});

// Sticky Navbar Scroll Handler
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// Light / Dark Theme Switcher
function initThemeToggle() {
  const themeBtn = document.getElementById('themeToggle');
  if (!themeBtn) return;

  const currentTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);

  themeBtn.addEventListener('click', () => {
    const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateThemeIcon(theme);
  });
}

function updateThemeIcon(theme) {
  const themeBtn = document.getElementById('themeToggle');
  if (themeBtn) {
    themeBtn.innerHTML = theme === 'dark' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
  }
}

// Mobile Menu Drawer
function initMobileMenu() {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const drawer = document.getElementById('mobileNavDrawer');
  const closeBtn = document.querySelector('.mobile-nav-close');

  if (menuBtn && drawer) {
    menuBtn.addEventListener('click', () => {
      drawer.classList.add('open');
    });
  }

  if (closeBtn && drawer) {
    closeBtn.addEventListener('click', () => {
      drawer.classList.remove('open');
    });
  }
}

// Typing Effect for Hero Title
function initTypingEffect() {
  const words = ['Senior Flutter Architect', 'Cross-Platform Specialist', 'Fintech & Trading Expert', 'Mobile Tech Lead'];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const target = document.getElementById('typingTarget');
  if (!target) return;

  function type() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
      target.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      target.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    let typeSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === currentWord.length) {
      typeSpeed = 2000; // Pause at end
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
  }

  type();
}

// Live Simulated Market Data Ticker for MoneyMic / BitProEX Demo
function initLiveTickerSimulation() {
  const btcPriceElem = document.getElementById('btcPrice');
  const ethPriceElem = document.getElementById('ethPrice');
  if (!btcPriceElem || !ethPriceElem) return;

  let btcPrice = 64250.50;
  let ethPrice = 3480.20;

  setInterval(() => {
    const btcDelta = (Math.random() - 0.48) * 15;
    const ethDelta = (Math.random() - 0.48) * 3;

    btcPrice += btcDelta;
    ethPrice += ethDelta;

    btcPriceElem.textContent = '$' + btcPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    ethPriceElem.textContent = '$' + ethPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    if (btcDelta >= 0) {
      btcPriceElem.style.color = 'var(--accent-emerald)';
    } else {
      btcPriceElem.style.color = 'var(--accent-pink)';
    }
  }, 1200);
}

// Filterable Projects Functionality
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const categories = card.getAttribute('data-category');
        if (filterValue === 'all' || categories.includes(filterValue)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

// Technical Skills Tab Switcher
function initSkillTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const group = btn.getAttribute('data-tab');

      skillCards.forEach(card => {
        const cardGroup = card.getAttribute('data-group');
        if (group === 'all' || cardGroup === group) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// Number Counter Animations for Stats
function initCounterAnimations() {
  const statNumbers = document.querySelectorAll('.stat-number');
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        statNumbers.forEach(stat => {
          const target = parseInt(stat.getAttribute('data-count'), 10);
          let current = 0;
          const increment = Math.ceil(target / 40);
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              stat.textContent = target + (stat.getAttribute('data-suffix') || '');
              clearInterval(timer);
            } else {
              stat.textContent = current + (stat.getAttribute('data-suffix') || '');
            }
          }, 30);
        });
      }
    });
  }, { threshold: 0.5 });

  const statsSection = document.querySelector('.hero-stats');
  if (statsSection) observer.observe(statsSection);
}

// Project Detail Modal Handler
function initModalHandlers() {
  const modalOverlay = document.getElementById('projectModal');
  const modalClose = document.getElementById('modalClose');
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
    'coincred': {
      title: 'CoinCRED Pro — Global Crypto Exchange',
      tech: 'Flutter, Provider, MVVM, Firebase, REST APIs',
      highlights: [
        'Multi-currency crypto exchange deployed to Google Play Store & Apple App Store.',
        'Real-time price tickers, KYC onboarding, and multi-signature wallet access.',
        'Optimized UI for fast execution under volatile market conditions.'
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
    },
    'diabos': {
      title: 'Diabos — Global Shipping & Disbursement Platform',
      tech: 'Flutter, SQLite, GetX, MVVM, Background Sync',
      highlights: [
        'Offline-first capabilities with SQLite for maritime agents in low-connectivity environments.',
        'Disbursement accounting, port cost estimation, and towage contract tracking.',
        'Active usage by 500+ daily active logistics operators globally.'
      ]
    }
  };

  document.querySelectorAll('.open-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = btn.getAttribute('data-project');
      const details = projectDetailsMap[projectId];

      if (details) {
        modalTitle.textContent = details.title;
        modalBody.innerHTML = `
          <p style="color: var(--accent-cyan); font-weight: 600; margin-bottom: 14px; font-family: 'Fira Code', monospace;">
            Tech Stack: ${details.tech}
          </p>
          <ul style="padding-left: 20px; color: var(--text-muted); font-size: 0.95rem; line-height: 1.8;">
            ${details.highlights.map(h => `<li style="margin-bottom: 8px;">${h}</li>`).join('')}
          </ul>
        `;
        modalOverlay.classList.add('active');
      }
    });
  });

  if (modalClose) {
    modalClose.addEventListener('click', () => {
      modalOverlay.classList.remove('active');
    });
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
      }
    });
  }
}

// Copy Contact Info Helper
function copyToClipboard(text, label) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(`${label} copied to clipboard!`);
  }).catch(err => {
    showToast(`Copied: ${text}`);
  });
}

function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}
