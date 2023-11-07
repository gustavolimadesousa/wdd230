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

// dark mode

const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const body = document.querySelector("body");
const hero = document.querySelector("#hero");
const heroMsg = document.querySelector("#hero-msg");
const nav = document.querySelector("nav");
const currentEvent = document.querySelector(".current-event");
const weatherCard = document.querySelector(".weather-card");
const spotlights = document.querySelector(".spotlights");
const footer = document.querySelector("footer");
const navList = document.querySelector(".nav-list");
const title = document.querySelector("h2")
const menu = document.querySelector("#menu")



modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🌙")) {
		main.style.background = "#000";
    body.style.background = "#18191A";
    hero.style.background = "#000";
    heroMsg.style.background = "#18191A";
    nav.style.background = "#000";
    navList.style.background = "#000";
    menu.style.background = "#000";
    title.style.color = "#fff"
    currentEvent.style.background = "#18191A";
    weatherCard.style.background = "#18191A";
    spotlights.style.background = "#18191A";
    footer.style.background = "#000";
    main.style.color = "#fff";
		modeButton.textContent = "☀️";
	} else {
		body.style.background = "#edddd4";    
		main.style.background = "#fff";
    hero.style.background = "#fff";
    heroMsg.style.background = "#772e25";
    nav.style.background = "#283d3b";
    navList.style.background = "#283d3b";
    menu.style.background = "#283d3b";
    title.style.color = "#283d3b"
    currentEvent.style.background = "#eeeeee";
    weatherCard.style.background = "#eeeeee";
    spotlights.style.background = "#eeeeee";
    footer.style.background = "#283d3b";
		main.style.color = "#000";
		modeButton.textContent = "🌙";
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


