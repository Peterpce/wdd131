// Hamburger menu toggle
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

// Footer data
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Destination data
const destinations = [
  {
    name: "Ibeno Beach",
    category: "beach",
    image: "images/ibeno-beach.jpeg",
    description: "Ibeno Beach, stretching over 30 kilometers along the Atlantic coast of Akwa Ibom State, is one of West Africa’s longest and most captivating beaches. With its golden sands, swaying palm trees, and refreshing sea breeze, it offers the perfect setting for relaxation and leisure. Visitors can enjoy swimming, beach sports, boat rides, and peaceful walks along the shoreline, all while taking in breathtaking views of the ocean."

  },
  {
    name: "Ibom Plaza",
    category: "city",
    image: "images/Ibom-plaza.jpeg",
    description: "Ibom Plaza, located in the heart of Uyo, Akwa Ibom State, is a vibrant landmark and social hub known for its striking open-space design and colorful surroundings. The plaza features a beautifully landscaped park, a large water fountain, and pathways that connect major roads in the city. It’s a favorite spot for relaxation, casual meetups, and cultural events, offering visitors a glimpse into the lively spirit of Uyo. Surrounded by shops, eateries, and street vendors, Ibom Plaza blends modern city life with a welcoming community atmosphere."
  },
  {
    name: "National Museum Uyo",
    category: "historic",
    image: "images/Museum-Uyo.jpeg",
    description: "National Museum Uyo, located in the capital city of Akwa Ibom State, is a cultural treasure that preserves and showcases the rich heritage of the Ibibio people and other ethnic groups in the region. The museum’s collection includes traditional artifacts such as wooden masks, sculptures, musical instruments, pottery, and historical relics that tell stories of the state’s past. Visitors can explore exhibits highlighting local customs, festivals, and craftsmanship, making it an educational and inspiring destination for anyone interested in the history and culture of Akwa Ibom."
  },
  {
    name: "Lord Lugard’s Residence",
    category: "historic",
    image: "images/Lord-Lugard.jpeg",
    description: "Lord Lugard’s Residence, located in Ikot Abasi, Akwa Ibom State, is a historic colonial-era building that once served as the home of Sir Frederick Lugard, the first Governor-General of Nigeria. This well-preserved structure stands as a reminder of Nigeria’s colonial history and the administrative activities of the early 20th century. Surrounded by lush greenery, the residence features classic colonial architecture and offers visitors a glimpse into the lifestyle and governance of the period. Today, it remains an important heritage site, attracting tourists, historians, and students interested in the nation’s past."
  },
  {
    name: "Unity Park",
    category: "city",
    image: "images/Unity-Park.jpeg",
    description: "Unity Park, situated in Uyo, Akwa Ibom State, is a spacious recreational and cultural center designed to promote peace, harmony, and community spirit. The park features beautifully landscaped gardens, open-air event spaces, water fountains, and monuments that symbolize unity among the people of the state. It serves as a popular venue for festivals, concerts, and public gatherings, while also offering a peaceful environment for picnics, leisure walks, and family outings. Unity Park is both a tourist attraction and a cherished spot for relaxation in the heart of the city."
  },
  {
    name: "Oron Museum",
    category: "historic",
    image: "images/oron-museum.jpeg",
    description: "Oron Museum, located in Oron, Akwa Ibom State, is home to one of the largest collections of wooden artifacts in Africa. Its exhibits feature ancient Efik and Oron masks, intricately carved statues, and historical relics that showcase the rich cultural heritage of the region. The museum also preserves artifacts from the pre-colonial and colonial eras, offering visitors a deep insight into the traditions, artistry, and history of the people. It stands as both an educational center and a cultural treasure for Akwa Ibom and Nigeria as a whole."
  },
  {
    name: "Ibom Tropicana Entertainment",
    category: "city",
    image: "images/ibom-tropicana.jpeg",
    description: "Ibom Tropicana Entertainment Centre, located in Uyo, Akwa Ibom State, is a modern leisure and business complex designed to offer world-class entertainment and hospitality. The center features a state-of-the-art cinema, a vibrant shopping mall, diverse restaurants serving local and international cuisine, and spacious event halls for conferences, concerts, and cultural shows. It serves as both a tourist attraction and a hub for recreation, shopping, and nightlife, making it a favorite destination for residents and visitors alike."
  },
  {
    name: "Bridge of No Return ",
    category: "beach",
    image: "images/bridge-return.jpeg",
    description: "Bridge of No Return, located in Ikot Abasi, Akwa Ibom State, is a solemn historical landmark and a haunting reminder of the transatlantic slave trade. It was across this bridge that enslaved Africans were taken to the waterfront and forced onto ships bound for foreign lands, never to return home. Today, it stands as a symbol of resilience and remembrance, attracting visitors who come to reflect on this dark chapter of history and honor the memory of those who endured unimaginable hardship."
  },
];

// Render destinations
const container = document.getElementById("destination-cards");

function renderDestinations(category) {
  container.innerHTML = "";
  const filtered = category === "all" ? destinations : destinations.filter(dest => dest.category === category);

  filtered.forEach(dest => {
    const card = `
      <div class="card">
        <img src="${dest.image}" alt="${dest.name}" loading="lazy" />
        <h3>${dest.name}</h3>
        <p>${dest.description}</p>
      </div>
    `;
    container.insertAdjacentHTML("beforeend", card);
  });
}

// Filter button functionality
document.querySelectorAll(".filter-buttons button").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-buttons button").forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    renderDestinations(button.getAttribute("data-category"));
  });
});

// Initial render
renderDestinations("all");
