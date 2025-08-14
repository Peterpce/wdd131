// Hamburger menu toggle
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Set last modified date in footer
document.getElementById("lastModified").textContent = document.lastModified;

// Personalized greeting using localStorage
const greeting = document.getElementById("greeting");
let visitCount = localStorage.getItem("visitCount");

if (visitCount) {
  visitCount = parseInt(visitCount) + 1;
  localStorage.setItem("visitCount", visitCount);
  greeting.textContent = `Welcome back! You've visited this site ${visitCount} times.`;
} else {
  localStorage.setItem("visitCount", 1);
  greeting.textContent = "Welcome! We're glad you're here for the first time.";
}

// --- Added for rubric completion --- //

// JavaScript Object
const siteInfo = {
  name: "Akwa Ibom Cultural Tourism",
  country: "Nigeria",
  attractions: ["Ibeno Beach", "Ibom Plaza", "Blue River"],
  getWelcomeMessage: function () {
    return `Explore the beauty of ${this.name} in ${this.country}!`;
  }
};
console.log(siteInfo.getWelcomeMessage());

// JavaScript Array & Array Method
const featuredAttractions = ["Ibeno Beach", "Ibom Plaza", "National Museum", "Blue River"];
featuredAttractions.forEach(attraction => {
  console.log(`Don't miss visiting: ${attraction}`);
});
