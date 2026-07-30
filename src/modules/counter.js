/**
 * Number Counter Animation Module
 */
export function initCounterAnimations() {
  const statNumbers = document.querySelectorAll('.stat-number');
  if (!statNumbers.length) return;

  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        statNumbers.forEach(stat => {
          const target = parseInt(stat.getAttribute('data-count'), 10);
          let current = 0;
          const increment = Math.ceil(target / 35);
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              stat.textContent = target + (stat.getAttribute('data-suffix') || '');
              clearInterval(timer);
            } else {
              stat.textContent = current + (stat.getAttribute('data-suffix') || '');
            }
          }, 35);
        });
      }
    });
  }, { threshold: 0.4 });

  const statsSection = document.querySelector('.hero-stats');
  if (statsSection) observer.observe(statsSection);
}
