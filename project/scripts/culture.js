// Hamburger menu toggle
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

// Footer dynamic info
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Cultural content data
const cultureData = [
  {
    title: "Traditional Foods",
    image: "images/traditional-food.jpeg",
    description: "Traditional Foods – Akwa Ibom is renowned for its rich and flavorful cuisine, with dishes deeply rooted in the culture and traditions of its people. Popular meals include Afang Soup, a nutritious blend of vegetables, waterleaf, and periwinkle; Edikang Ikong, a hearty vegetable soup made with pumpkin leaves, waterleaf, and assorted meats or seafood; and Ekpang Nkukwo, a unique delicacy of grated cocoyam wrapped in leaves and cooked with palm oil, seafood, and spices. These dishes, often prepared with fresh local ingredients, reflect the state’s coastal abundance and culinary heritage."
  },
  {
    title: "Festivals",
    image: "images/festival.jpeg",
    description: "Festivals – Akwa Ibom State is alive with vibrant cultural celebrations that bring communities together in colorful displays of tradition and joy. The Ekpe Festival features elaborate masquerades, rhythmic drumming, and energetic dances, reflecting the rich heritage of the Efik and Ibibio people. The New Yam Festival marks the beginning of the harvest season, with communal feasting, cultural performances, and thanksgiving to the gods for a bountiful yield. These festivals not only preserve ancient customs but also offer visitors an unforgettable experience of Akwa Ibom’s music, art, and hospitality."
  },
  {
    title: "Traditional Attire",
    image: "images/traditional-attire.jpeg",
    description: "Traditional Attire – In Akwa Ibom, cultural attire is a vibrant expression of identity and pride. Men often wear elegant wrappers paired with long-sleeved shirts, sometimes adorned with embroidery, and complete the look with traditional hats and walking sticks for special occasions. Women typically dress in brightly colored George wrappers, matching blouses, and stylish head ties (gele), often complemented with beaded jewelry. These outfits, especially worn during festivals, weddings, and other cultural ceremonies, showcase the beauty, elegance, and rich heritage of the Akwa Ibom people."
  },
  {
    title: "Marriage Rites",
    image: "images/marrage-rite.jpeg",
    description: "Marriage Rites – In Akwa Ibom, traditional marriage is a vibrant and highly anticipated celebration that reflects deep cultural values. The groom is required to present a variety of items—such as yams, drinks, clothing, jewelry, and sometimes livestock—to the bride’s family as part of the bride price and gift list. The ceremony is filled with music, drumming, and traditional dances, with both families and the community coming together to witness the union. Adorned in colorful attire, the bride and groom are celebrated as they begin their new life, making the occasion both a joyful festivity and a meaningful cultural tradition."
  }
];

// Render cultural content
const container = document.getElementById("culture-cards");

cultureData.forEach(item => {
  const card = `
    <div class="card">
      <img src="${item.image}" alt="${item.title}" loading="lazy" />
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    </div>
  `;
  container.insertAdjacentHTML("beforeend", card);
});
