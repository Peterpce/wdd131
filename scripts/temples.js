document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("nav-menu");
  const menuButton = document.getElementById("menu-button");

  menuButton.addEventListener("click", () => {
    nav.style.display = (nav.style.display === "flex") ? "none" : "flex";
    menuButton.textContent = (nav.style.display === "flex") ? "X" : "☰";
  });

  // Footer year
  document.getElementById("year").textContent = new Date().getFullYear();

  // Footer last modified
  document.getElementById("lastModified").textContent = 
    `Last Modified: ${document.lastModified}`;
});
