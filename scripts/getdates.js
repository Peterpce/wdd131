(function () {
  // ✅ Set current year
  const yearElement = document.getElementById("currentyear");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // ✅ Set full current date and time
  const now = new Date();
  const formattedDateTime = now.toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  const dateTimeElement = document.getElementById("currentDateTime");
  if (dateTimeElement) {
    dateTimeElement.textContent = formattedDateTime;
  }

  // ✅ Set last modified date
  const lastModElement = document.getElementById("lastModified");
  if (lastModElement) {
    lastModElement.textContent = "Last Modified: " + document.lastModified;
  }
})();
