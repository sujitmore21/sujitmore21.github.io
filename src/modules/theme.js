/**
 * Theme Toggle Module
 */
export function initThemeToggle() {
  const themeBtn = document.getElementById('themeToggle');
  if (!themeBtn) return;

  const currentTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(themeBtn, currentTheme);

  themeBtn.addEventListener('click', () => {
    const nextTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('theme', nextTheme);
    updateThemeIcon(themeBtn, nextTheme);
  });
}

function updateThemeIcon(btn, theme) {
  if (btn) {
    btn.innerHTML = theme === 'dark' 
      ? '<i class="fa-solid fa-sun text-amber-400"></i>' 
      : '<i class="fa-solid fa-moon text-indigo-400"></i>';
  }
}
