// Tier 1 Studios - main.js

// Navigation logic
window.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".nav-link");
  const slides = document.querySelectorAll(".slide");

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();

      const targetID = link.getAttribute("href").substring(1);
      const targetSlide = document.getElementById(targetID);

      // Hide all slides
      slides.forEach(slide => {
        slide.classList.remove("active");
        slide.style.display = "none";
      });

      // Show target slide
      if (targetSlide) {
        targetSlide.style.display = "flex";
        setTimeout(() => {
          targetSlide.classList.add("active");
        }, 50);
      }

      // Update active nav link
      links.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });

  // Initial display setup
  const activeSlide = document.querySelector(".slide.active");
  if (activeSlide) {
    activeSlide.style.display = "flex";
  }
});
