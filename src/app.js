/**
 * Main Application Orchestrator
 */
import { renderNavbar, initNavbarEvents } from './components/navbar.js';
import { renderHero, initHeroTypingEffect } from './components/hero.js';
import { renderSkills, initSkillTabEvents } from './components/skills.js';
import { renderProjects, initProjectFilterEvents } from './components/projects.js';
import { renderArchitecture } from './components/architecture.js';
import { renderExperience } from './components/experience.js';
import { renderContact } from './components/contact.js';
import { renderFooter } from './components/footer.js';
import { renderModal, initModalEvents } from './components/modal.js';

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
