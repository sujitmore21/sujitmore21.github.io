/**
 * Architecture & Design Patterns Component - Mobile OS & Trading Engine Visualizer
 */
export function renderArchitecture() {
  return `
  <section class="py-24 relative bg-slate-950/50" id="architecture">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider border border-emerald-500/20 shadow-glow-emerald">
          <i class="fa-solid fa-microchip text-emerald-400"></i> Mobile Core System Architecture
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
          Reactive Engine & <span class="gradient-text">Clean Mobile Architecture</span>
        </h2>
        <p class="text-slate-300 text-base sm:text-lg">
          Decoupled, event-driven reactive mobile architecture engineered for <strong class="text-cyan-400">MoneyMic US</strong>, <strong class="text-emerald-400">BitProEX Derivatives</strong>, and <strong class="text-purple-400">Rampwiz</strong> — executing sub-50ms WebSocket feeds, 120 FPS custom charting, and zero-jank concurrency.
        </p>

        <!-- Live Architecture Status Badges -->
        <div class="flex flex-wrap items-center justify-center gap-2.5 pt-2">
          <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-semibold">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Sub-50ms Replication Latency
          </span>
          <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-semibold">
            <i class="fa-solid fa-bolt text-cyan-400"></i> 120 FPS CustomPainter GPU Canvas
          </span>
          <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-purple-500/30 text-purple-300 font-mono text-xs font-semibold">
            <i class="fa-solid fa-shield-halved text-purple-400"></i> Zero-Slippage Execution Guard
          </span>
        </div>
      </div>

      <!-- Interactive Data Stream Simulator Header & Trigger -->
      <div class="max-w-4xl mx-auto mb-10 p-5 rounded-3xl bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
        <div class="flex items-center gap-3.5 text-left">
          <div class="w-10 h-10 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-lg font-bold shrink-0">
            <i class="fa-solid fa-network-wired"></i>
          </div>
          <div>
            <h4 class="text-sm font-bold text-white">Live Data Stream Pipeline Simulator</h4>
            <p class="text-xs text-slate-400 font-mono">Trace a real-time WebSocket tick from Socket IO to GPU Render</p>
          </div>
        </div>
        <button id="simulatePacketBtn" class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-bold text-xs sm:text-sm text-white shadow-glow-cyan transition-all duration-300 hover:scale-105 flex items-center gap-2 shrink-0">
          <i class="fa-solid fa-play"></i> Transmit Test Stream
        </button>
      </div>

      <!-- Architecture 4-Layer Hardware/Software Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 relative" id="archLayerGrid">

        <!-- Layer 1: Presentation & Charts -->
        <div class="control-center-tile flex flex-col justify-between" id="archLayer1">
          <div>
            <div class="flex items-center justify-between mb-4">
              <div class="w-10 h-10 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-lg font-bold">
                <i class="fa-solid fa-chart-line"></i>
              </div>
              <span class="px-2.5 py-1 rounded-full bg-cyan-500/20 text-cyan-300 font-mono text-[10px] font-bold uppercase">Layer 1</span>
            </div>
            <h3 class="font-extrabold text-white text-lg mb-2">1. Presentation & Charts</h3>
            <p class="text-xs text-slate-300 leading-relaxed mb-4">
              Hardware-accelerated <strong class="text-cyan-400 font-semibold">CustomPainter</strong> candlestick engines, Level-2 Market Depth visualizers, leverage sliders, and 120 FPS declarative Flutter widgets with zero UI jank.
            </p>
          </div>
          <div class="space-y-2">
            <div class="p-2.5 rounded-xl bg-slate-950/80 font-mono text-[10px] text-cyan-400 border border-slate-800 flex items-center justify-between">
              <span><i class="fa-solid fa-gauge-high mr-1"></i> 120 FPS GPU Canvas</span>
              <span class="text-slate-500">Skia / Impeller</span>
            </div>
            <div class="p-2.5 rounded-xl bg-slate-900/90 font-mono text-[10px] text-cyan-300 border border-slate-800 overflow-x-auto">
              <code>class OrderBookPainter extends CustomPainter</code>
            </div>
          </div>
        </div>

        <!-- Layer 2: Reactive State & Throttle Buffers -->
        <div class="control-center-tile flex flex-col justify-between" id="archLayer2">
          <div>
            <div class="flex items-center justify-between mb-4">
              <div class="w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-lg font-bold">
                <i class="fa-solid fa-arrow-trend-up"></i>
              </div>
              <span class="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-mono text-[10px] font-bold uppercase">Layer 2</span>
            </div>
            <h3 class="font-extrabold text-white text-lg mb-2">2. Reactive State & Buffers</h3>
            <p class="text-xs text-slate-300 leading-relaxed mb-4">
              <strong class="text-emerald-400 font-semibold">BLoC/Cubit & Riverpod</strong> state notifiers with debounced delta buffers, throttling 100+ incoming WebSocket ticks/sec into smooth, immutable UI state updates.
            </p>
          </div>
          <div class="space-y-2">
            <div class="p-2.5 rounded-xl bg-slate-950/80 font-mono text-[10px] text-emerald-400 border border-slate-800 flex items-center justify-between">
              <span><i class="fa-solid fa-filter mr-1"></i> Stream Throttling</span>
              <span class="text-slate-500">Riverpod 2.0</span>
            </div>
            <div class="p-2.5 rounded-xl bg-slate-900/90 font-mono text-[10px] text-emerald-300 border border-slate-800 overflow-x-auto">
              <code>class LiveOrderBookBloc extends Bloc&lt;Ev, St&gt;</code>
            </div>
          </div>
        </div>

        <!-- Layer 3: Trading Domain & Business Algorithms -->
        <div class="control-center-tile flex flex-col justify-between" id="archLayer3">
          <div>
            <div class="flex items-center justify-between mb-4">
              <div class="w-10 h-10 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center text-lg font-bold">
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
            <div class="p-2.5 rounded-xl bg-slate-950/80 font-mono text-[10px] text-purple-400 border border-slate-800 flex items-center justify-between">
              <span><i class="fa-solid fa-shield mr-1"></i> Margin & Slippage Guard</span>
              <span class="text-slate-500">Pure Dart</span>
            </div>
            <div class="p-2.5 rounded-xl bg-slate-900/90 font-mono text-[10px] text-purple-300 border border-slate-800 overflow-x-auto">
              <code>class ReplicateTradeUseCase { execute() }</code>
            </div>
          </div>
        </div>

        <!-- Layer 4: Low-Latency Data Stream & Network Layer -->
        <div class="control-center-tile flex flex-col justify-between" id="archLayer4">
          <div>
            <div class="flex items-center justify-between mb-4">
              <div class="w-10 h-10 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-lg font-bold">
                <i class="fa-solid fa-tower-broadcast"></i>
              </div>
              <span class="px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 font-mono text-[10px] font-bold uppercase">Layer 4</span>
            </div>
            <h3 class="font-extrabold text-white text-lg mb-2">4. Stream & Network Layer</h3>
            <p class="text-xs text-slate-300 leading-relaxed mb-4">
              Persistent duplex <strong class="text-amber-400 font-semibold">WebSockets, Socket.IO & MQTT</strong> binary pipelines with auto-reconnection backoff, AES-256 payload encryption, and sub-50ms replication.
            </p>
          </div>
          <div class="space-y-2">
            <div class="p-2.5 rounded-xl bg-slate-950/80 font-mono text-[10px] text-amber-400 border border-slate-800 flex items-center justify-between">
              <span><i class="fa-solid fa-wifi mr-1"></i> Duplex Binary Stream</span>
              <span class="text-slate-500">Sub-50ms</span>
            </div>
            <div class="p-2.5 rounded-xl bg-slate-900/90 font-mono text-[10px] text-amber-300 border border-slate-800 overflow-x-auto">
              <code>class LiveTradeSocketClient implements IStreamClient</code>
            </div>
          </div>
        </div>

      </div>

      <!-- Live Stream Console Log -->
      <div class="max-w-4xl mx-auto p-4 rounded-2xl bg-slate-950/90 border border-slate-800 font-mono text-xs text-slate-300">
        <div class="flex items-center justify-between mb-2 text-[11px] text-slate-400 border-b border-slate-800 pb-1.5">
          <span class="flex items-center gap-1.5"><i class="fa-solid fa-terminal text-cyan-400"></i> Architecture Pipeline Stream Status</span>
          <span class="text-emerald-400 font-bold" id="streamLogStatus">STATUS: ACTIVE POOL</span>
        </div>
        <div id="streamLogMessage" class="text-cyan-300 transition-all duration-300">
          [System Ready]: Stream channel open on wss://feed.moneymic.io/v1/trades — 0 dropped frames.
        </div>
      </div>

    </div>
  </section>
  `;
}

/**
 * Initializes the Interactive Stream Simulator
 */
export function initArchitectureSimulator() {
  const btn = document.getElementById('simulatePacketBtn');
  const logStatus = document.getElementById('streamLogStatus');
  const logMsg = document.getElementById('streamLogMessage');
  const layer1 = document.getElementById('archLayer1');
  const layer2 = document.getElementById('archLayer2');
  const layer3 = document.getElementById('archLayer3');
  const layer4 = document.getElementById('archLayer4');

  if (!btn) return;

  btn.addEventListener('click', () => {
    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Streaming...';

    // Step 1: Layer 4 Network
    if (layer4) layer4.style.boxShadow = '0 0 35px rgba(245, 158, 11, 0.6)';
    if (logMsg) logMsg.innerHTML = '<span class="text-amber-400">[Layer 4 Network]:</span> WebSocket tick received: BTC/USDT $64,250.50 (24 bytes binary payload)';

    setTimeout(() => {
      if (layer4) layer4.style.boxShadow = '';
      // Step 2: Layer 3 Domain
      if (layer3) layer3.style.boxShadow = '0 0 35px rgba(139, 92, 246, 0.6)';
      if (logMsg) logMsg.innerHTML = '<span class="text-purple-400">[Layer 3 Domain]:</span> ReplicateTradeUseCase calculated 1:1 position size with zero slippage';

      setTimeout(() => {
        if (layer3) layer3.style.boxShadow = '';
        // Step 3: Layer 2 Reactive State
        if (layer2) layer2.style.boxShadow = '0 0 35px rgba(16, 185, 129, 0.6)';
        if (logMsg) logMsg.innerHTML = '<span class="text-emerald-400">[Layer 2 State]:</span> Riverpod StateNotifier debounced tick stream -> immutable OrderBookState emitted';

        setTimeout(() => {
          if (layer2) layer2.style.boxShadow = '';
          // Step 4: Layer 1 GPU Canvas
          if (layer1) layer1.style.boxShadow = '0 0 35px rgba(0, 242, 254, 0.6)';
          if (logMsg) logMsg.innerHTML = '<span class="text-cyan-400">[Layer 1 Render]:</span> CustomPainter GPU Canvas repainted order book depth at 120 FPS (0.4ms frame budget)';

          setTimeout(() => {
            if (layer1) layer1.style.boxShadow = '';
            btn.disabled = false;
            btn.innerHTML = '<i class="fa-solid fa-play"></i> Transmit Test Stream';
            if (logStatus) logStatus.textContent = 'STATUS: STREAM COMPLETED (0ms JANK)';
          }, 800);
        }, 600);
      }, 600);
    }, 600);
  });
}
