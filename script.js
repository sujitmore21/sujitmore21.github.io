/**
 * Sujit More - Senior Flutter Developer Portfolio Entrypoint
 * Website: Sujitmore.github.io / sujitmore21.github.io
 */

// Global clipboard fallback helper
function copyToClipboard(text, label) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(`${label} copied to clipboard!`);
    }).catch(() => {
      showToast(`Copied: ${text}`);
    });
  } else {
    showToast(`Copied: ${text}`);
  }
}

function showToast(message) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast-msg';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

window.copyToClipboard = copyToClipboard;
window.showToast = showToast;
