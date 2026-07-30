/**
 * Theme Toggle Module with Global Event Delegation
 */
export function initThemeToggle() {
  let currentTheme = localStorage.getItem('theme');
  if (!currentTheme || (currentTheme !== 'dark' && currentTheme !== 'light')) {
    currentTheme = 'dark';
  }

  setTheme(currentTheme);

  // Global click event delegation for themeToggle button
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('#themeToggle');
    if (btn) {
      e.preventDefault();
      const activeTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const nextTheme = activeTheme === 'dark' ? 'light' : 'dark';
      setTheme(nextTheme);
    }
  });
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
