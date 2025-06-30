// main.js
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav a");
  const sections = document.querySelectorAll("main section");

  function showSection(target) {
    sections.forEach(section => {
      section.classList.remove("active");
      if (section.id === target) {
        section.classList.add("active");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.dataset.section === target) {
        link.classList.add("active");
      }
    });
  }

  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const sectionId = link.dataset.section;
      showSection(sectionId);
    });
  });

  // Set default visible section
  showSection("home");
});
