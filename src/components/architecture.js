/**
 * Architecture & Design Patterns Component - Low-Latency Trading Engine
 */
export function renderArchitecture() {
  return `
  <section class="py-20 relative bg-slate-950/40" id="architecture">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider border border-emerald-500/20 shadow-glow-emerald">
          <i class="fa-solid fa-chart-candlestick text-emerald-400"></i> Low-Latency Trading Architecture
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Trading Engine & <span class="gradient-text">Clean Architecture Visualizer</span>
        </h2>
        <p class="text-slate-400 text-base sm:text-lg">
          Decoupled, event-driven reactive architecture engineered for <strong class="text-cyan-400">MoneyMic US</strong>, <strong class="text-emerald-400">BitProEX Derivatives</strong>, and <strong class="text-purple-400">Rampwiz</strong> — executing sub-50ms WebSocket market feeds, 120 FPS charting, and real-time copy trade replication.
        </p>

        <!-- Live Trading Engine Indicators Strip -->
        <div class="flex flex-wrap items-center justify-center gap-3 pt-2">
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/90 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-semibold">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Sub-50ms Replication Latency
          </span>
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/90 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-semibold">
            <i class="fa-solid fa-bolt text-cyan-400"></i>
            120 FPS CustomPainter Charts
          </span>
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/90 border border-purple-500/30 text-purple-300 font-mono text-xs font-semibold">
            <i class="fa-solid fa-shield-halved text-purple-400"></i>
            Zero-Slippage Execution Guard
          </span>
        </div>
      </div>

      <!-- Architecture Layers Grid (Trading Focused) -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

        <!-- Layer 1: Real-Time Trading UI & Canvas Charts -->
        <div class="glass-card p-6 rounded-3xl border border-slate-700/60 transition-all duration-300 hover:scale-105 hover:shadow-glow-cyan hover:border-cyan-400/50 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-4">
              <div class="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xl font-bold">
                <i class="fa-solid fa-chart-line"></i>
              </div>
              <span class="px-2.5 py-1 rounded-full bg-cyan-500/20 text-cyan-300 font-mono text-[10px] font-bold uppercase">Layer 1</span>
            </div>
            <h3 class="font-extrabold text-white text-lg mb-2">1. Presentation & Charts</h3>
            <p class="text-xs text-slate-300 leading-relaxed mb-4">
              Hardware-accelerated <strong class="text-cyan-400">CustomPainter</strong> candlestick engines, Level-2 Market Depth visualizers, leverage sliders, and 120 FPS declarative Flutter widgets with zero UI jank.
            </p>
          </div>
          <div class="space-y-2">
            <div class="p-2.5 rounded-xl bg-slate-950/80 font-mono text-[10px] text-cyan-400 border border-slate-800/80 flex items-center justify-between">
              <span><i class="fa-solid fa-gauge-high mr-1"></i> 120 FPS Render</span>
              <span class="text-slate-500">GPU Canvas</span>
            </div>
            <div class="p-3 rounded-xl bg-slate-900/90 font-mono text-[11px] text-cyan-300 border border-slate-800 overflow-x-auto">
              <code>class OrderBookDepthPainter extends CustomPainter</code>
            </div>
          </div>
        </div>

        <!-- Layer 2: ViewModel & Reactive State Buffers -->
        <div class="glass-card p-6 rounded-3xl border border-slate-700/60 transition-all duration-300 hover:scale-105 hover:shadow-glow-emerald hover:border-emerald-400/50 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-4">
              <div class="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xl font-bold">
                <i class="fa-solid fa-arrow-trend-up"></i>
              </div>
              <span class="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-mono text-[10px] font-bold uppercase">Layer 2</span>
            </div>
            <h3 class="font-extrabold text-white text-lg mb-2">2. Reactive State & Buffers</h3>
            <p class="text-xs text-slate-300 leading-relaxed mb-4">
              <strong class="text-emerald-400">BLoC/Cubit & Riverpod</strong> state notifiers with debounced delta buffers, throttling 100+ incoming WebSocket ticks/sec into smooth, immutable UI state updates.
            </p>
          </div>
          <div class="space-y-2">
            <div class="p-2.5 rounded-xl bg-slate-950/80 font-mono text-[10px] text-emerald-400 border border-slate-800/80 flex items-center justify-between">
              <span><i class="fa-solid fa-filter mr-1"></i> Stream Throttling</span>
              <span class="text-slate-500">BLoC / Riverpod</span>
            </div>
            <div class="p-3 rounded-xl bg-slate-900/90 font-mono text-[11px] text-emerald-300 border border-slate-800 overflow-x-auto">
              <code>class LiveOrderBookBloc extends Bloc&lt;TickerEv, OrderBookSt&gt;</code>
            </div>
          </div>
        </div>

        <!-- Layer 3: Trading Domain & Business Algorithms -->
        <div class="glass-card p-6 rounded-3xl border border-slate-700/60 transition-all duration-300 hover:scale-105 hover:shadow-glow-purple hover:border-purple-400/50 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-4">
              <div class="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center text-xl font-bold">
                <i class="fa-solid fa-brain"></i>
              </div>
              <span class="px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-300 font-mono text-[10px] font-bold uppercase">Layer 3</span>
            </div>
            <h3 class="font-extrabold text-white text-lg mb-2">3. Domain & Risk Engine</h3>
            <p class="text-xs text-slate-300 leading-relaxed mb-4">
              Pure Dart domain models executing copy-trade ratio calculation, stop-loss / take-profit triggers, 125x leverage margin checks, and zero-slippage execution rules.
            </p>
          </div>
          <div class="space-y-2">
            <div class="p-2.5 rounded-xl bg-slate-950/80 font-mono text-[10px] text-purple-400 border border-slate-800/80 flex items-center justify-between">
              <span><i class="fa-solid fa-shield mr-1"></i> Margin & Slippage Guard</span>
              <span class="text-slate-500">Pure Dart</span>
            </div>
            <div class="p-3 rounded-xl bg-slate-900/90 font-mono text-[11px] text-purple-300 border border-slate-800 overflow-x-auto">
              <code>class ReplicateCopyTradeUseCase { execute() }</code>
            </div>
          </div>
        </div>

        <!-- Layer 4: Low-Latency Data Stream & Network Layer -->
        <div class="glass-card p-6 rounded-3xl border border-slate-700/60 transition-all duration-300 hover:scale-105 hover:shadow-glow-amber hover:border-amber-400/50 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-4">
              <div class="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-xl font-bold">
                <i class="fa-solid fa-network-wired"></i>
              </div>
              <span class="px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 font-mono text-[10px] font-bold uppercase">Layer 4</span>
            </div>
            <h3 class="font-extrabold text-white text-lg mb-2">4. Data & Network Feed</h3>
            <p class="text-xs text-slate-300 leading-relaxed mb-4">
              Bi-directional <strong class="text-amber-300">WebSockets, MQTT, and Socket.IO</strong> pipelines, binary delta parsing, automated reconnect heartbeats, and SQLite local trade caching.
            </p>
          </div>
          <div class="space-y-2">
            <div class="p-2.5 rounded-xl bg-slate-950/80 font-mono text-[10px] text-amber-400 border border-slate-800/80 flex items-center justify-between">
              <span><i class="fa-solid fa-signal mr-1"></i> Sub-50ms WS Feeds</span>
              <span class="text-slate-500">Auto Heartbeat</span>
            </div>
            <div class="p-3 rounded-xl bg-slate-900/90 font-mono text-[11px] text-amber-300 border border-slate-800 overflow-x-auto">
              <code>class WebSocketMarketFeed implements IMarketFeed</code>
            </div>
          </div>
        </div>

      </div>

      <!-- Real-Time Trading Data Flow Pipelines -->
      <div class="max-w-5xl mx-auto glass-card p-6 sm:p-8 rounded-3xl border border-slate-700/60 shadow-2xl">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-6 border-b border-slate-800">
          <div class="flex items-center gap-2.5">
            <div class="w-9 h-9 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-base font-bold">
              <i class="fa-solid fa-bolt-lightning"></i>
            </div>
            <div>
              <h3 class="text-lg sm:text-xl font-bold text-white">Production Trading Pipelines in Action</h3>
              <p class="text-xs text-slate-400">Live data flow implementations across leading production fintech apps</p>
            </div>
          </div>
          <span class="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 font-mono text-xs font-semibold border border-cyan-500/30 self-start sm:self-auto">
            Zero-Crash Scalability
          </span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
          
          <!-- Flow 1: Copy Trading Pipeline -->
          <div class="p-4 rounded-2xl bg-slate-900/90 border border-cyan-500/20 space-y-3 transition-all duration-300 hover:border-cyan-400/50 hover:bg-slate-900">
            <div class="flex items-center justify-between">
              <span class="text-cyan-400 font-bold flex items-center gap-1.5">
                <i class="fa-solid fa-users-viewfinder"></i> MoneyMic US
              </span>
              <span class="text-[10px] px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-bold">Copy Trading</span>
            </div>
            <p class="text-slate-400 font-sans text-xs leading-relaxed">
              Master Trader Event → MQTT/WebSocket Ingestion (<15ms) → ReplicateTradeUseCase (Slippage Check) → Riverpod State Emission → Follower Trade Dispatched (&lt;45ms total).
            </p>
            <div class="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-cyan-300">
              <span>Latency: <strong class="text-white">&lt; 50ms</strong></span>
              <span class="text-slate-500">|</span>
              <span>Sync: <strong class="text-white">MQTT Broker</strong></span>
            </div>
          </div>

          <!-- Flow 2: Derivatives Order Book -->
          <div class="p-4 rounded-2xl bg-slate-900/90 border border-emerald-500/20 space-y-3 transition-all duration-300 hover:border-emerald-400/50 hover:bg-slate-900">
            <div class="flex items-center justify-between">
              <span class="text-emerald-400 font-bold flex items-center gap-1.5">
                <i class="fa-solid fa-chart-candlestick"></i> BitProEX
              </span>
              <span class="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">Derivatives</span>
            </div>
            <p class="text-slate-400 font-sans text-xs leading-relaxed">
              Exchange L2 WS Feed → Binary Delta Parser → DebounceBuffer (60fps sync) → OrderBookBloc → CustomPainter Depth & Candlestick Canvas.
            </p>
            <div class="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-emerald-300">
              <span>Throughput: <strong class="text-white">100+ Ticks/s</strong></span>
              <span class="text-slate-500">|</span>
              <span>FPS: <strong class="text-white">120 Hz</strong></span>
            </div>
          </div>

          <!-- Flow 3: Fiat-to-Crypto Gateway -->
          <div class="p-4 rounded-2xl bg-slate-900/90 border border-purple-500/20 space-y-3 transition-all duration-300 hover:border-purple-400/50 hover:bg-slate-900">
            <div class="flex items-center justify-between">
              <span class="text-purple-400 font-bold flex items-center gap-1.5">
                <i class="fa-solid fa-money-bill-transfer"></i> Rampwiz
              </span>
              <span class="text-[10px] px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-bold">Payment Rail</span>
            </div>
            <p class="text-slate-400 font-sans text-xs leading-relaxed">
              Biometric Liveness Scan → AES-256 Vault → Automated KYC Rule Engine → Payment Gateway Rail → Zero-Slippage Asset Settlement.
            </p>
            <div class="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-purple-300">
              <span>Security: <strong class="text-white">AES-256</strong></span>
              <span class="text-slate-500">|</span>
              <span>KYC: <strong class="text-white">Automated AML</strong></span>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
  `;
}

