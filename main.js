document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab");
  const links = document.querySelectorAll("nav a");

  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = link.dataset.tab;

      tabs.forEach(tab => {
        tab.classList.remove("active");
        tab.style.left = "100vw";
      });

      const targetTab = document.getElementById(target);
      if (targetTab) {
        setTimeout(() => {
          targetTab.classList.add("active");
        }, 50);
      }
    });
  });
});
