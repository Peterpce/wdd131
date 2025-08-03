// Display current year and last modified date
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Static weather data (adjust based on location)
const temperature = 45;
const windSpeed = 10;

// Calculate wind chill
function calculateWindChill(tempF, speedMph) {
  return (
    35.74 +
    0.6215 * tempF -
    35.75 * Math.pow(speedMph, 0.16) +
    0.4275 * tempF * Math.pow(speedMph, 0.16)
  ).toFixed(1);
}

// Display wind chill if valid
const chillSpan = document.getElementById("chill");
if (temperature <= 50 && windSpeed > 3) {
  chillSpan.textContent = `${calculateWindChill(temperature, windSpeed)} °F`;
} else {
  chillSpan.textContent = "N/A";
}
