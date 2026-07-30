/**
 * Live Market Ticker Simulation Module
 */
export function initLiveTickerSimulation() {
  const btcPriceElem = document.getElementById('btcPrice');
  const ethPriceElem = document.getElementById('ethPrice');
  if (!btcPriceElem || !ethPriceElem) return;

  let btcPrice = 64250.50;
  let ethPrice = 3480.20;

  setInterval(() => {
    const btcDelta = (Math.random() - 0.48) * 18;
    const ethDelta = (Math.random() - 0.48) * 4;

    btcPrice += btcDelta;
    ethPrice += ethDelta;

    btcPriceElem.textContent = '$' + btcPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    ethPriceElem.textContent = '$' + ethPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    btcPriceElem.style.color = btcDelta >= 0 ? 'var(--accent-emerald)' : 'var(--accent-pink)';
    ethPriceElem.style.color = ethDelta >= 0 ? 'var(--accent-emerald)' : 'var(--accent-pink)';
  }, 1200);
}
