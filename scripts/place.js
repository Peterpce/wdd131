
// Set footer year and last modified
const yearSpan = document.getElementById("year");
const lastModifiedSpan = document.getElementById("lastModified");
const currentDate = new Date();
yearSpan.textContent = currentDate.getFullYear();
lastModifiedSpan.textContent = document.lastModified;

// Static weather data (Celsius)
const temp = parseFloat(document.getElementById("temp").textContent);
const speed = parseFloat(document.getElementById("speed").textContent);
const chill = document.getElementById("chill");

function calculateWindChill(t, v) {
  return (
    13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16)
  ).toFixed(1);
}

if (temp <= 10 && speed > 4.8) {
  chill.textContent = calculateWindChill(temp, speed);
} else {
  chill.textContent = "N/A";
}
