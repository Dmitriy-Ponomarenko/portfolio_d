// src/js/accordion.js

export function initializeAccordion() {
  document.querySelector('.menu').addEventListener('click', () => {
    const menuPanel = document.querySelector('.ac-menu-panel');
    menuPanel.classList.toggle('active');
  });
}
