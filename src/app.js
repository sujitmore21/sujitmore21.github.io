/**
 * Main Application Orchestrator - Sujit More Mobile Product Showcase
 */
import { renderNavbar, initNavbarEvents } from './components/navbar.js?v=4.0';
import { renderHero, initHeroTypingEffect, initSmartphoneSimulator } from './components/hero.js?v=4.0';
import { renderSkills, initSkillTabEvents } from './components/skills.js?v=4.0';
import { renderProjects, initProjectFilterEvents } from './components/projects.js?v=4.0';
import { renderArchitecture, initArchitectureSimulator } from './components/architecture.js?v=4.0';
import { renderExperience } from './components/experience.js?v=4.0';
import { renderContact } from './components/contact.js?v=4.0';
import { renderFooter } from './components/footer.js?v=4.0';
import { renderModal, initModalEvents } from './components/modal.js?v=4.0';

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

  // Initialize interactive event listeners & simulation engines
  initNavbarEvents();
  initThemeToggle();
  initHeroTypingEffect();
  initSmartphoneSimulator();
  initLiveTickerSimulation();
  initSkillTabEvents();
  initProjectFilterEvents();
  initArchitectureSimulator();
  initCounterAnimations();
  initModalEvents();
});
