//Script fyrir hamburger icon
document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.querySelector('.navbar-menu-toggle');
    const navbar = document.querySelector('.navbar');
    if (toggleButton) {
      toggleButton.addEventListener('click', function() {
          navbar.classList.toggle('menu-open');
          toggleButton.classList.toggle('is-open');
      });
     } else {
      console.error("Hamburger toggle button not found");
     }
   });