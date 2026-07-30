/**
 * Footer Component
 */
export function renderFooter() {
  return `
  <footer class="py-12 border-t border-slate-800/80 bg-slate-950">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6">

        <!-- Brand Info -->
        <div class="flex items-center gap-3">
          <div class="relative w-9 h-9 rounded-xl overflow-hidden border border-cyan-400/60 shadow-glow-cyan">
            <img src="assets/images/profile.png" alt="Sujit More Logo" class="w-full h-full object-cover">
          </div>
          <div>
            <span class="font-bold text-lg text-white flex items-center">Sujit<span class="gradient-text ml-1.5">More</span></span>
            <p class="text-xs text-slate-400 font-mono">Senior Flutter Architect & Mobile Tech Lead</p>
          </div>
        </div>

        <!-- Quick Links -->
        <ul class="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-400 font-medium">
          <li><a href="#about" class="transition-all duration-300 hover:text-cyan-400 hover:scale-105 inline-block">About</a></li>
          <li><a href="#skills" class="transition-all duration-300 hover:text-cyan-400 hover:scale-105 inline-block">Skills</a></li>
          <li><a href="#projects" class="transition-all duration-300 hover:text-cyan-400 hover:scale-105 inline-block">Projects</a></li>
          <li><a href="#architecture" class="transition-all duration-300 hover:text-cyan-400 hover:scale-105 inline-block">Architecture</a></li>
          <li><a href="#experience" class="transition-all duration-300 hover:text-cyan-400 hover:scale-105 inline-block">Experience</a></li>
          <li><a href="#contact" class="transition-all duration-300 hover:text-cyan-400 hover:scale-105 inline-block">Contact</a></li>
        </ul>

        <!-- Social Icons & Scroll Top -->
        <div class="flex items-center gap-3">
          <a href="https://github.com/sujitmore21" target="_blank" class="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 transition-all duration-300 hover:scale-110 hover:text-white hover:border-cyan-400/50 hover:shadow-glow-cyan" title="GitHub">
            <i class="fa-brands fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/sujitmore21" target="_blank" class="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 transition-all duration-300 hover:scale-110 hover:text-blue-400 hover:border-blue-400/50 hover:shadow-glow-purple" title="LinkedIn">
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="mailto:sujitmore21@gmail.com" class="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 transition-all duration-300 hover:scale-110 hover:text-cyan-400 hover:border-cyan-400/50 hover:shadow-glow-cyan" title="Email">
            <i class="fa-solid fa-envelope"></i>
          </a>
          <a href="#" class="w-10 h-10 rounded-xl bg-slate-800 text-slate-300 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-cyan-500 hover:text-white shadow-md" title="Back to top">
            <i class="fa-solid fa-arrow-up text-sm"></i>
          </a>
        </div>

      </div>

      <!-- Copyright Bar -->
      <div class="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
        <p>© 2026 Sujit More. All rights reserved.</p>
        <p class="flex items-center gap-1.5">
          Built with <span class="flutter-text">Flutter Design System</span> & Tailwind CSS
        </p>
      </div>

    </div>
  </footer>
  `;
}
