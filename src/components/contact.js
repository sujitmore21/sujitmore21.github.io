/**
 * Contact Component
 */
export function renderContact() {
  return `
  <section class="py-20 relative bg-slate-950/60" id="contact">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <span class="px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider border border-cyan-500/20">
          Get In Touch
        </span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Let's Build Something <span class="gradient-text">Extraordinary</span>
        </h2>
        <p class="text-slate-400 text-base sm:text-lg">
          Open for technical architecture consultations, senior mobile engineering leadership, and high-impact fintech projects.
        </p>
      </div>

      <!-- Contact Info Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

        <!-- Email Card -->
        <div onclick="copyToClipboard('sujitmore21@gmail.com', 'Email')" class="glass-card p-6 sm:p-8 rounded-3xl border border-slate-700/60 text-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-glow-cyan hover:border-cyan-400/40 group">
          <div class="w-14 h-14 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-2xl font-bold mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-cyan-500/30">
            <i class="fa-solid fa-envelope"></i>
          </div>
          <h3 class="font-extrabold text-white text-lg mb-1">Email Address</h3>
          <p class="font-mono text-sm text-cyan-400 font-medium mb-3">sujitmore21@gmail.com</p>
          <span class="inline-flex items-center gap-1.5 text-xs text-slate-400 font-mono group-hover:text-white transition-colors duration-300">
            <i class="fa-regular fa-copy"></i> Click to Copy
          </span>
        </div>

        <!-- Phone Card -->
        <div onclick="copyToClipboard('+917972671159', 'Phone Number')" class="glass-card p-6 sm:p-8 rounded-3xl border border-slate-700/60 text-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-glow-purple hover:border-purple-400/40 group">
          <div class="w-14 h-14 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center text-2xl font-bold mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-purple-500/30">
            <i class="fa-solid fa-phone"></i>
          </div>
          <h3 class="font-extrabold text-white text-lg mb-1">Phone / WhatsApp</h3>
          <p class="font-mono text-sm text-purple-400 font-medium mb-3">+91-7972671159</p>
          <span class="inline-flex items-center gap-1.5 text-xs text-slate-400 font-mono group-hover:text-white transition-colors duration-300">
            <i class="fa-regular fa-copy"></i> Click to Copy
          </span>
        </div>

        <!-- Location Card -->
        <div class="glass-card p-6 sm:p-8 rounded-3xl border border-slate-700/60 text-center transition-all duration-300 hover:scale-105 hover:shadow-glow-emerald hover:border-emerald-400/40 group">
          <div class="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-2xl font-bold mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-emerald-500/30">
            <i class="fa-solid fa-location-dot"></i>
          </div>
          <h3 class="font-extrabold text-white text-lg mb-1">Current Location</h3>
          <p class="font-mono text-sm text-emerald-400 font-medium mb-3">Pune, Maharashtra, India</p>
          <span class="inline-flex items-center gap-1.5 text-xs text-slate-400 font-mono">
            <i class="fa-solid fa-globe"></i> Open for Global Remote
          </span>
        </div>

      </div>

      <!-- Quick Message Form & Social Connect -->
      <div class="max-w-3xl mx-auto glass-card p-8 rounded-3xl border border-slate-700/60 shadow-xl">
        <h3 class="text-xl font-bold text-white text-center mb-6">Connect across Networks</h3>
        <div class="flex flex-wrap justify-center items-center gap-4">
          <a href="https://linkedin.com/in/sujitmore21" target="_blank" class="px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-sm font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:border-blue-400 hover:text-blue-400 shadow-md">
            <i class="fa-brands fa-linkedin text-lg"></i> LinkedIn Profile
          </a>
          <a href="https://github.com/sujitmore21" target="_blank" class="px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-sm font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:border-slate-400 hover:text-white shadow-md">
            <i class="fa-brands fa-github text-lg"></i> GitHub Profile
          </a>
          <a href="mailto:sujitmore21@gmail.com" class="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-bold flex items-center gap-2 shadow-glow-cyan transition-all duration-300 hover:scale-105">
            <i class="fa-solid fa-paper-plane text-xs"></i> Send Email Direct
          </a>
        </div>
      </div>

    </div>
  </section>
  `;
}
