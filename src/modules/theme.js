/**
 * Theme Toggle Module
 */
export function initThemeToggle() {
  const themeBtn = document.getElementById('themeToggle');
  
  // Enforce dark mode as primary default
  let currentTheme = localStorage.getItem('theme');
  if (!currentTheme || (currentTheme !== 'dark' && currentTheme !== 'light')) {
    currentTheme = 'dark';
  }

  setTheme(currentTheme);

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme');
      const nextTheme = activeTheme === 'dark' ? 'light' : 'dark';
      setTheme(nextTheme);
    });
  }
}

export function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);

  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  const themeBtn = document.getElementById('themeToggle');
  if (themeBtn) {
    themeBtn.innerHTML = theme === 'dark' 
      ? '<i class="fa-solid fa-sun text-amber-400 text-lg"></i>' 
      : '<i class="fa-solid fa-moon text-indigo-400 text-lg"></i>';
    themeBtn.setAttribute('title', theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode');
  }
}
