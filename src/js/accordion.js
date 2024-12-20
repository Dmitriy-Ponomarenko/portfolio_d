// src/js/accordion.js

export function initializeAccordion() {
  document.querySelector('.menu').addEventListener('click', () => {
    const menuPanel = document.querySelector('.ac-menu-panel');
    menuPanel.classList.toggle('active');
  });
}

export function initializeFAQAccordion() {
  const triggers = document.querySelectorAll('.ac-trigger');
  const panels = document.querySelectorAll('.ac-panel');

  triggers.forEach((trigger, index) => {
    trigger.addEventListener('click', () => {
      const panel = panels[index];

      if (panel.classList.contains('active')) {
        panel.classList.remove('active');
        trigger.classList.remove('active');
      } else {
        panels.forEach(panel => {
          panel.classList.remove('active');
        });
        triggers.forEach(trigger => {
          trigger.classList.remove('active');
        });

        panel.classList.add('active');
        trigger.classList.add('active');
      }
    });
  });
}
