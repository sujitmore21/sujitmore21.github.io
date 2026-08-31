/**
 * Footer Component - Mobile App Ecosystem Footer
 */
export function renderFooter() {
  return `
  <footer class="py-14 border-t border-slate-800/80 bg-slate-950 pb-28 sm:pb-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6">

        <!-- Brand Info -->
        <div class="flex items-center gap-3">
          <div class="relative w-10 h-10 rounded-2xl overflow-hidden border border-cyan-400/60 shadow-glow-cyan">
            <img src="assets/images/profile.png" alt="Sujit More Logo" class="w-full h-full object-cover">
          </div>
          <div>
            <span class="font-black text-lg text-white flex items-center">Sujit<span class="gradient-text ml-1.5">More</span></span>
            <p class="text-xs text-slate-400 font-mono">Senior Mobile Architect & Flutter Lead</p>
          </div>
        </div>

        <!-- Quick Links -->
        <ul class="flex flex-wrap justify-center items-center gap-6 text-xs sm:text-sm text-slate-400 font-semibold">
          <li><a href="#about" class="transition-all duration-300 hover:text-cyan-400 hover:scale-105 inline-block">Simulator</a></li>
          <li><a href="#skills" class="transition-all duration-300 hover:text-cyan-400 hover:scale-105 inline-block">Skills</a></li>
          <li><a href="#projects" class="transition-all duration-300 hover:text-cyan-400 hover:scale-105 inline-block">Apps (15)</a></li>
          <li><a href="#architecture" class="transition-all duration-300 hover:text-cyan-400 hover:scale-105 inline-block">Architecture</a></li>
          <li><a href="#experience" class="transition-all duration-300 hover:text-cyan-400 hover:scale-105 inline-block">Roadmap</a></li>
          <li><a href="#contact" class="transition-all duration-300 hover:text-cyan-400 hover:scale-105 inline-block">Contact</a></li>
        </ul>

        <!-- Social Icons & Scroll Top -->
        <div class="flex items-center gap-3">
          <a href="https://github.com/sujitmore21" target="_blank" class="w-10 h-10 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 transition-all duration-300 hover:scale-110 hover:text-white hover:border-cyan-400/50 hover:shadow-glow-cyan" title="GitHub">
            <i class="fa-brands fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/sujitmore21" target="_blank" class="w-10 h-10 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 transition-all duration-300 hover:scale-110 hover:text-blue-400 hover:border-blue-400/50 hover:shadow-glow-purple" title="LinkedIn">
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="mailto:sujitmore21@gmail.com" class="w-10 h-10 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 transition-all duration-300 hover:scale-110 hover:text-cyan-400 hover:border-cyan-400/50 hover:shadow-glow-cyan" title="Email">
            <i class="fa-solid fa-envelope"></i>
          </a>
          <a href="#" class="w-10 h-10 rounded-2xl bg-slate-800 text-slate-300 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-cyan-500 hover:text-white shadow-md" title="Back to top">
            <i class="fa-solid fa-arrow-up text-sm"></i>
          </a>
        </div>

      </div>

      <!-- Copyright Bar -->
      <div class="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
        <p>© 2026 Sujit More. All rights reserved.</p>
        <p class="flex items-center gap-1.5">
          Engineered with <span class="flutter-text font-bold">Flutter Mobile Design System</span> & Vanilla CSS
        </p>
      </div>

    </div>
  </footer>
  `;
}
