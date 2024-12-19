// src/js/accordion.js

document.querySelector('.menu').addEventListener('click', () => {
  const menuPanel = document.querySelector('.ac-menu-panel');
  menuPanel.classList.toggle('active');
});
