document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".nav-links");
  menuButton.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", isOpen);
  });
  const links = document.querySelectorAll(".nav-links a, .hero a, .back-top");
  for (const link of links) {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      if (href && href.startsWith("#")) {
        event.preventDefault();
        document
          .getElementById(href.substring(1))
          ?.scrollIntoView({ behavior: "smooth" });
        menu.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
      }
    });
  }
});
