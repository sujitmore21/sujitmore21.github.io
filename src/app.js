/**
 * Main Application Orchestrator
 */
import { renderNavbar, initNavbarEvents } from './components/navbar.js?v=3.3';
import { renderHero, initHeroTypingEffect } from './components/hero.js?v=3.3';
import { renderSkills, initSkillTabEvents } from './components/skills.js?v=3.3';
import { renderProjects, initProjectFilterEvents } from './components/projects.js?v=3.3';
import { renderArchitecture } from './components/architecture.js?v=3.3';
import { renderExperience } from './components/experience.js?v=3.3';
import { renderContact } from './components/contact.js?v=3.3';
import { renderFooter } from './components/footer.js?v=3.3';
import { renderModal, initModalEvents } from './components/modal.js?v=3.3';

import { initThemeToggle } from './modules/theme.js';
import { initLiveTickerSimulation } from './modules/ticker.js';
import { initCounterAnimations } from './modules/counter.js';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  if (app) {
    app.innerHTML = `
      ${renderNavbar()}
      <main>
        ${renderHero()}
        ${renderSkills()}
        ${renderProjects()}
        ${renderArchitecture()}
        ${renderExperience()}
        ${renderContact()}
      </main>
      ${renderFooter()}
      ${renderModal()}
    `;
  }

  // Initialize interactive event listeners
  initNavbarEvents();
  initThemeToggle();
  initHeroTypingEffect();
  initLiveTickerSimulation();
  initSkillTabEvents();
  initProjectFilterEvents();
  initCounterAnimations();
  initModalEvents();
});
