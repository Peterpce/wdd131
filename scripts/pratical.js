// Sample updated temple list here (replace if needed)
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-utah/400x250/salt-lake-temple-lds-2000890-wallpaper.jpg"
  }
  // Add more temples...
];

const container = document.getElementById("temple-cards");

function displayTemples(data) {
  container.innerHTML = "";
  data.forEach(t => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <h3>${t.templeName}</h3>
      <p><strong>Location:</strong> ${t.location}</p>
      <p><strong>Dedicated:</strong> ${t.dedicated}</p>
      <p><strong>Area:</strong> ${t.area.toLocaleString()} sq ft</p>
      <img src="${t.imageUrl}" alt="${t.templeName}" loading="lazy" />
    `;
    container.appendChild(card);
  });
}

function filterTemples(type) {
  let filtered = temples;
  if (type === "old") filtered = temples.filter(t => parseInt(t.dedicated) < 1900);
  if (type === "new") filtered = temples.filter(t => parseInt(t.dedicated) > 2000);
  if (type === "large") filtered = temples.filter(t => t.area > 90000);
  if (type === "small") filtered = temples.filter(t => t.area < 10000);
  displayTemples(filtered);
}

displayTemples(temples);

// Hamburger menu toggle
document.getElementById("menu-toggle").addEventListener("click", () => {
  document.getElementById("menu").classList.toggle("hidden");
});

// Footer
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
