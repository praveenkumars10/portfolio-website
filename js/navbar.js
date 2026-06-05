/**
 * Navbar Module
 * Handles navbar collapse and nav link interactions
 */

document.addEventListener('DOMContentLoaded', function() {
  const navbarCollapse = document.querySelector('.navbar-collapse');
  const navbarToggler = document.querySelector('.navbar-toggler');

  const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
    toggle: false
  });

  // Close navbar when clicking outside
  document.addEventListener('click', function(event) {
    const isClickInside = navbarCollapse.contains(event.target) ||
                          navbarToggler.contains(event.target);

    if (!isClickInside && navbarCollapse.classList.contains('show')) {
      bsCollapse.hide();
    }
  });

  // Close navbar when clicking nav links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (navbarCollapse.classList.contains('show')) {
        bsCollapse.hide();
      }
    });
  });
});
