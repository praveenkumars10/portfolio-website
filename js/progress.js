/**
 * Scroll Progress Bar Module
 * Updates progress bar width based on scroll position
 */

window.addEventListener('scroll', () => {
  const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
  document.getElementById('progress-bar').style.width = scrolled + '%';
});
