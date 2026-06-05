/**
 * Custom Cursor Module
 * Tracks mouse movement for custom cursor dot effect
 */

document.addEventListener('DOMContentLoaded', function() {
  const cursor = document.querySelector('.cursor-dot');

  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });
});
