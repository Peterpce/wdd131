// Detect which page we are on
if (document.getElementById("contactForm")) {
   //We are on contact.html — handle form submission
  document.getElementById("contactForm").addEventListener("submit", function () {
    let count = localStorage.getItem("messageCount");
    if (!count) {
      count = 0;
    }
    count++;
   localStorage.setItem("messageCount", count);
  });
}

if (document.getElementById("reviewCount")) {
  // We are on reviews.html — display the count
  let count = localStorage.getItem("messageCount") || 0;
  document.getElementById("reviewCount").textContent = count;
}
