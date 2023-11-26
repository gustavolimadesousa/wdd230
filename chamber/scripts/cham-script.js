// get date

let date =  new Date().getFullYear();
document.querySelector(".currentYear").innerHTML = date;

let lastModifiedDate = new Date(document.lastModified);
document.querySelector(".lastModified").innerHTML = lastModifiedDate;


// hamburger menu

const mainnav = document.querySelector('.nav-list')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
  mainnav.classList.toggle('show');
  hambutton.classList.toggle('show');
})


// JavaScript to toggle dark mode
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if (darkModeToggle.textContent.includes("🌙")) {
    darkModeToggle.textContent = "☀️";
}
  else {
    darkModeToggle.textContent = "🌙";
  }
});


// FORM TIMESTAMP

        // JavaScript code to update the timestamp field
        function updateTimestamp() {
          const timestampField = document.getElementById("timestamp");
          const currentTimestamp = new Date().toLocaleString();
          timestampField.value = currentTimestamp;
      }

      // Call the function to update the timestamp when the form is loaded
      window.onload = updateTimestamp;


