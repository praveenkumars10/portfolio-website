/**
 * Main Initialization Module
 * Initializes AOS (Animate On Scroll) and Typed.js on page load
 */

document.addEventListener('DOMContentLoaded', function() {
  // Initialize AOS (Animate On Scroll)
  AOS.init({
    duration: 1000,
    once: true
  });

  // Initialize Typed.js for typing animation
  new Typed('#typed-text', {
    strings: [
      'Full Stack Developer',
      'AI Application Builder',
      'Web Developer',
      'Frontend Designer',
      'Problem Solver'
    ],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true
  });
});
// Hide floating social icons in contact section
const contactSection = document.getElementById("contact");
const socialIcons = document.querySelector(".floating-social");

if (contactSection && socialIcons) {
    window.addEventListener("scroll", () => {
        const contactTop = contactSection.getBoundingClientRect().top;

        if (contactTop <= window.innerHeight * 0.7) {
            socialIcons.style.display = "none";
        } else {
            socialIcons.style.display = "flex";
        }
    });
}