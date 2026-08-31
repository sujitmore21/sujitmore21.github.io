/**
 * Navbar & Floating iOS Quick-Action Dock Component
 */
export function renderNavbar() {
  return `
  <!-- Top Navigation Bar -->
  <nav class="fixed top-0 left-0 w-full z-50 transition-all duration-300 py-3.5 px-4 sm:px-6 lg:px-12" id="navbar">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      
      <!-- Brand Logo with Profile Image -->
      <a href="#" class="flex items-center gap-3 group transition-transform duration-300 hover:scale-105">
        <div class="relative w-10 h-10 rounded-2xl overflow-hidden border border-cyan-400/70 shadow-glow-cyan transition-all duration-300 group-hover:rotate-6 group-hover:border-cyan-300">
          <img src="assets/images/profile.png" alt="Sujit More Logo" class="w-full h-full object-cover">
        </div>
        <div class="flex flex-col">
          <span class="font-black text-lg sm:text-xl tracking-tight text-white flex items-center">
            Sujit<span class="gradient-text ml-1.5">More</span>
          </span>
          <span class="text-[10px] font-mono text-cyan-400 -mt-1 hidden sm:inline">Mobile Architect</span>
        </div>
      </a>

      <!-- Desktop Nav Links -->
      <ul class="hidden md:flex items-center gap-7 font-semibold text-xs sm:text-sm text-slate-300 bg-slate-900/75 backdrop-blur-xl px-6 py-2 rounded-full border border-slate-800/80 shadow-xl">
        <li><a href="#about" class="transition-all duration-300 hover:text-cyan-400 hover:scale-105 inline-block">About</a></li>
        <li><a href="#skills" class="transition-all duration-300 hover:text-cyan-400 hover:scale-105 inline-block">Skills</a></li>
        <li><a href="#projects" class="transition-all duration-300 hover:text-cyan-400 hover:scale-105 inline-block">Apps (15)</a></li>
        <li><a href="#architecture" class="transition-all duration-300 hover:text-cyan-400 hover:scale-105 inline-block">Architecture</a></li>
        <li><a href="#experience" class="transition-all duration-300 hover:text-cyan-400 hover:scale-105 inline-block">Roadmap</a></li>
        <li><a href="#contact" class="transition-all duration-300 hover:text-cyan-400 hover:scale-105 inline-block">Contact</a></li>
      </ul>

      <!-- Action Buttons -->
      <div class="flex items-center gap-3">
        <button id="themeToggle" class="w-10 h-10 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center justify-center text-slate-300 transition-all duration-300 hover:scale-110 hover:border-cyan-400/50 hover:shadow-glow-cyan" title="Toggle Theme">
          <i class="fa-solid fa-sun text-amber-400"></i>
        </button>

        <a href="#contact" class="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-2xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-glow-cyan transition-all duration-300 hover:scale-105 hover:shadow-cyan-400/40">
          <i class="fa-solid fa-paper-plane text-xs"></i> Connect
        </a>

        <!-- Mobile Hamburger Button -->
        <button id="mobileMenuBtn" class="md:hidden w-10 h-10 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center justify-center text-slate-300 transition-all duration-300 hover:scale-110" aria-label="Toggle Menu">
          <i class="fa-solid fa-bars text-lg"></i>
        </button>
      </div>
    </div>
  </nav>

  <!-- Mobile Navigation Drawer -->
  <div id="mobileNavDrawer" class="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-2xl flex flex-col justify-center items-center gap-6 text-xl font-bold text-slate-200 transition-all duration-300 opacity-0 pointer-events-none -translate-y-4">
    <button id="mobileNavClose" class="absolute top-6 right-6 w-12 h-12 rounded-full bg-slate-800/80 text-slate-400 text-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:text-white">
      &times;
    </button>
    <a href="#about" class="mobile-drawer-link transition-all duration-300 hover:text-cyan-400 hover:scale-110">About & Simulator</a>
    <a href="#skills" class="mobile-drawer-link transition-all duration-300 hover:text-cyan-400 hover:scale-110">Control Center & Skills</a>
    <a href="#projects" class="mobile-drawer-link transition-all duration-300 hover:text-cyan-400 hover:scale-110">Production Apps (15)</a>
    <a href="#architecture" class="mobile-drawer-link transition-all duration-300 hover:text-cyan-400 hover:scale-110">Mobile OS Architecture</a>
    <a href="#experience" class="mobile-drawer-link transition-all duration-300 hover:text-cyan-400 hover:scale-110">Experience Roadmap</a>
    <a href="#contact" class="mobile-drawer-link transition-all duration-300 hover:text-cyan-400 hover:scale-110">Get In Touch</a>
    <a href="https://github.com/sujitmore21" target="_blank" class="mt-4 px-8 py-3 rounded-2xl bg-slate-900 border border-slate-800 text-slate-200 text-base flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:border-cyan-400">
      <i class="fa-brands fa-github"></i> GitHub Profile
    </a>
  </div>

  <!-- Floating iOS Quick-Action Dock (Fixed Bottom) -->
  <div class="ios-dock hidden sm:flex">
    <a href="#about" class="ios-dock-item" title="Home">
      <i class="fa-solid fa-house"></i>
      <span class="dock-tooltip">Simulator</span>
    </a>
    <a href="#skills" class="ios-dock-item" title="Skills">
      <i class="fa-solid fa-sliders"></i>
      <span class="dock-tooltip">Skills</span>
    </a>
    <a href="#projects" class="ios-dock-item" title="Apps">
      <i class="fa-solid fa-mobile-screen"></i>
      <span class="dock-tooltip">15 Apps</span>
    </a>
    <a href="#architecture" class="ios-dock-item" title="Architecture">
      <i class="fa-solid fa-microchip"></i>
      <span class="dock-tooltip">Architecture</span>
    </a>
    <a href="#experience" class="ios-dock-item" title="Experience">
      <i class="fa-solid fa-code-commit"></i>
      <span class="dock-tooltip">Roadmap</span>
    </a>
    <a href="#contact" class="ios-dock-item" title="Contact">
      <i class="fa-solid fa-paper-plane"></i>
      <span class="dock-tooltip">Contact</span>
    </a>
    <div class="w-[1px] h-6 bg-slate-700/60 mx-1"></div>
    <a href="https://github.com/sujitmore21" target="_blank" class="ios-dock-item" title="GitHub">
      <i class="fa-brands fa-github"></i>
      <span class="dock-tooltip">GitHub</span>
    </a>
    <button onclick="copyToClipboard('sujitmore21@gmail.com', 'Email')" class="ios-dock-item" title="Copy Email">
      <i class="fa-solid fa-envelope text-cyan-400"></i>
      <span class="dock-tooltip">Copy Email</span>
    </button>
  </div>
  `;
}

export function initNavbarEvents() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar?.classList.add('nav-scrolled');
    } else {
      navbar?.classList.remove('nav-scrolled');
    }
  });

  const menuBtn = document.getElementById('mobileMenuBtn');
  const closeBtn = document.getElementById('mobileNavClose');
  const drawer = document.getElementById('mobileNavDrawer');
  const links = document.querySelectorAll('.mobile-drawer-link');

  if (menuBtn && drawer) {
    menuBtn.addEventListener('click', () => {
      drawer.classList.remove('opacity-0', 'pointer-events-none', '-translate-y-4');
      drawer.classList.add('opacity-100', 'pointer-events-auto', 'translate-y-0');
    });
  }

  const closeDrawer = () => {
    drawer?.classList.add('opacity-0', 'pointer-events-none', '-translate-y-4');
    drawer?.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0');
  };

  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  links.forEach(l => l.addEventListener('click', closeDrawer));
}
