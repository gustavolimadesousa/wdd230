document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.getElementById("sidebar");
  const message = document.getElementById("message");

  // Get the current date in milliseconds
  const currentDate = Date.now();

  // Check if the user has visited the site before
  if (localStorage.getItem("lastVisitDate")) {
    // Retrieve the last visit date from localStorage
    const lastVisitDate = parseInt(localStorage.getItem("lastVisitDate"));

    // Calculate the time difference in milliseconds
    const timeDifference = currentDate - lastVisitDate;

    // Calculate the number of days
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if (daysDifference === 0) {
      message.textContent = "Back so soon! Awesome!";
    } else {
      message.textContent = `You last visited ${daysDifference} ${
        daysDifference === 1 ? "day" : "days"
      } ago.`;
    }
  } else {
    message.textContent = "Welcome! Let us know if you have any questions.";
  }

  // Store the current date in localStorage for the next visit
  localStorage.setItem("lastVisitDate", currentDate.toString());
});
