// script.js
document.addEventListener("DOMContentLoaded", function() {
  const menu = document.querySelector('.mobile-menu');
  const hamburger = document.querySelector('.hamburger');

  if (menu && hamburger) {
    hamburger.addEventListener('click', function() {
      menu.classList.toggle('active');
    });
  }
});
