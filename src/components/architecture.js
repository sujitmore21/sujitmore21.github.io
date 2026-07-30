/**
 * Architecture & Design Patterns Component
 */
export function renderArchitecture() {
  return `
  <section class="py-20 relative bg-slate-950/40" id="architecture">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <span class="px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider border border-emerald-500/20">
          Production Architecture
        </span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Clean Architecture & <span class="gradient-text">MVVM Visualizer</span>
        </h2>
        <p class="text-slate-400 text-base sm:text-lg">
          Decoupled, modular 4-layer architecture implemented across <strong class="text-cyan-400">ICICI Bank US</strong>, <strong class="text-cyan-400">MoneyMic US</strong>, and <strong class="text-cyan-400">BitProEX</strong> for high testability and sub-second latency.
        </p>
      </div>

      <!-- Architecture Layers Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

        <!-- Layer 1: Presentation & Navigation Layer -->
        <div class="glass-card p-6 rounded-3xl border border-slate-700/60 transition-all duration-300 hover:scale-105 hover:shadow-glow-cyan hover:border-cyan-400/50 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-4">
              <div class="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xl font-bold">
                <i class="fa-solid fa-mobile-screen"></i>
              </div>
              <span class="px-2.5 py-1 rounded-full bg-cyan-500/20 text-cyan-300 font-mono text-[10px] font-bold">Layer 1</span>
            </div>
            <h3 class="font-extrabold text-white text-lg mb-2">1. Presentation Layer</h3>
            <p class="text-xs text-slate-300 leading-relaxed mb-4">
              Declarative Flutter Widgets (Material & Cupertino), <strong class="text-cyan-400">Go Router</strong> deep-linking, and responsive UI with zero embedded business logic.
            </p>
          </div>
          <div class="p-3 rounded-xl bg-slate-900/90 font-mono text-[11px] text-cyan-300 border border-slate-800">
            <code>class MoneyMicView extends ConsumerWidget</code>
          </div>
        </div>

        <!-- Layer 2: ViewModel & State Management Layer -->
        <div class="glass-card p-6 rounded-3xl border border-slate-700/60 transition-all duration-300 hover:scale-105 hover:shadow-glow-purple hover:border-purple-400/50 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-4">
              <div class="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center text-xl font-bold">
                <i class="fa-solid fa-brain"></i>
              </div>
              <span class="px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-300 font-mono text-[10px] font-bold">Layer 2</span>
            </div>
            <h3 class="font-extrabold text-white text-lg mb-2">2. ViewModel / State</h3>
            <p class="text-xs text-slate-300 leading-relaxed mb-4">
              <strong class="text-purple-300">Riverpod, BLoC/Cubit, GetX</strong> state controllers handling UI events, high-frequency ticker streams, and immutable state emissions.
            </p>
          </div>
          <div class="p-3 rounded-xl bg-slate-900/90 font-mono text-[11px] text-purple-300 border border-slate-800">
            <code>class OrderBookBloc extends Bloc&lt;OrderEv, OrderSt&gt;</code>
          </div>
        </div>

        <!-- Layer 3: Domain & Business Use Cases -->
        <div class="glass-card p-6 rounded-3xl border border-slate-700/60 transition-all duration-300 hover:scale-105 hover:shadow-glow-emerald hover:border-emerald-400/50 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-4">
              <div class="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xl font-bold">
                <i class="fa-solid fa-gears"></i>
              </div>
              <span class="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-mono text-[10px] font-bold">Layer 3</span>
            </div>
            <h3 class="font-extrabold text-white text-lg mb-2">3. Domain Use Cases</h3>
            <p class="text-xs text-slate-300 leading-relaxed mb-4">
              Pure Dart business entities, copy-trading rules, limit/stop order execution, and ICICI US banking security logic 100% independent of UI.
            </p>
          </div>
          <div class="p-3 rounded-xl bg-slate-900/90 font-mono text-[11px] text-emerald-300 border border-slate-800">
            <code>class ExecuteCopyTradeUseCase { call() }</code>
          </div>
        </div>

        <!-- Layer 4: Data & Repositories -->
        <div class="glass-card p-6 rounded-3xl border border-slate-700/60 transition-all duration-300 hover:scale-105 hover:shadow-glow-amber hover:border-amber-400/50 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-4">
              <div class="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-xl font-bold">
                <i class="fa-solid fa-database"></i>
              </div>
              <span class="px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 font-mono text-[10px] font-bold">Layer 4</span>
            </div>
            <h3 class="font-extrabold text-white text-lg mb-2">4. Data Repository</h3>
            <p class="text-xs text-slate-300 leading-relaxed mb-4">
              <strong class="text-amber-300">WebSockets, MQTT, Socket.IO</strong> streams, AES-256 data encryption, <strong class="text-amber-300">SQLite</strong> offline sync, and Razorpay/UPI payment rails.
            </p>
          </div>
          <div class="p-3 rounded-xl bg-slate-900/90 font-mono text-[11px] text-amber-300 border border-slate-800">
            <code>class TradingRepositoryImpl implements IRepo</code>
          </div>
        </div>

      </div>

      <!-- Code Execution Data Flow Card -->
      <div class="max-w-4xl mx-auto glass-card p-6 sm:p-8 rounded-3xl border border-slate-700/60 shadow-xl">
        <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <i class="fa-solid fa-diagram-project text-cyan-400"></i> Resume Architecture Highlights
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono text-slate-300">
          <div class="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
            <span class="text-cyan-400 font-bold">MoneyMic US Copy Trading Flow:</span>
            <p class="text-slate-400 font-sans leading-relaxed">
              WebSocket/MQTT Stream → TradingRepository → ReplicateTradeUseCase → BLoC / Riverpod StateNotifier → UI Re-render (&lt;100ms latency).
            </p>
          </div>
          <div class="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
            <span class="text-blue-400 font-bold">ICICI Bank US Security Flow:</span>
            <p class="text-slate-400 font-sans leading-relaxed">
              Biometric Auth → AES-256 Encrypted Payload → AccountRepository → Clean Architecture ViewModel → Banking Compliance UI.
            </p>
          </div>
        </div>
      </div>

    </div>
  </section>
  `;
}
