// Hamburger menu toggle
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

// Footer year & last modified
document.getElementById("year").textContent = new Date().getFullYear();
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

// Destination data
const destinations = [
  {
    name: "Ibeno Beach",
    category: "beach",
    description: "The longest sand beach in West Africa, perfect for relaxation and water sports.",
    image: "images/ibeno-beach.jpeg"
  },
  {
    name: "Ibom Plaza",
    category: "city",
    description: "A central hub in Uyo with shops, fountains, and a vibrant cultural atmosphere.",
    image: "images/ibom-plaza.jpeg"
  },
  {
    name: "Lord Lugard's Residence",
    category: "historic",
    description: "A colonial-era building with deep historical significance.",
    image: "images/lord-lugard.jpeg"
  }
];

// Function to display destinations
function displayDestinations(filter) {
  const container = document.getElementById("destination-cards");
  container.innerHTML = "";

  const filteredDestinations =
    filter === "all"
      ? destinations
      : destinations.filter(d => d.category === filter);

  filteredDestinations.forEach(dest => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${dest.image}" alt="${dest.name}">
      <h3>${dest.name}</h3>
      <p>${dest.description}</p>
    `;
    container.appendChild(card);
  });
}

// Filter button functionality
document.querySelectorAll(".filter-buttons button").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelector(".filter-buttons button.active").classList.remove("active");
    button.classList.add("active");
    displayDestinations(button.dataset.category);
  });
});

// Load all on page start
displayDestinations("all");
