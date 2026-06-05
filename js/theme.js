/**
 * Theme Toggle Module
 * Handles dark/light theme switching with localStorage persistence
 */

document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-toggle');

  // Load saved theme on page load
  if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-theme');
    themeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>';
  }

  // Toggle theme on button click
  themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');

    if (document.body.classList.contains('light-theme')) {
      localStorage.setItem('theme', 'light');
      themeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>';
    } else {
      localStorage.setItem('theme', 'dark');
      themeToggle.innerHTML = '<i class="bi bi-moon-stars-fill"></i>';
    }
  });
});
