/**
 * Live Market Ticker Simulation Module
 */
export function initLiveTickerSimulation() {
  const btcPriceElem = document.getElementById('btcPrice');
  const ethPriceElem = document.getElementById('ethPrice');
  const heroBtcPrice = document.getElementById('heroBtcPrice');

  let btcPrice = 64250.50;
  let ethPrice = 3480.20;

  setInterval(() => {
    const btcDelta = (Math.random() - 0.48) * 18;
    const ethDelta = (Math.random() - 0.48) * 4;

    btcPrice += btcDelta;
    ethPrice += ethDelta;

    const formattedBtc = '$' + btcPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    const formattedEth = '$' + ethPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    if (btcPriceElem) {
      btcPriceElem.textContent = formattedBtc;
      btcPriceElem.style.color = btcDelta >= 0 ? 'var(--accent-emerald)' : 'var(--accent-pink)';
    }
    if (ethPriceElem) {
      ethPriceElem.textContent = formattedEth;
      ethPriceElem.style.color = ethDelta >= 0 ? 'var(--accent-emerald)' : 'var(--accent-pink)';
    }
    if (heroBtcPrice) {
      heroBtcPrice.textContent = formattedBtc;
      heroBtcPrice.style.color = btcDelta >= 0 ? 'var(--accent-emerald)' : 'var(--accent-pink)';
    }
  }, 1200);
}
