const temperature = document.querySelector("#current-temp");
const icon = document.querySelector("#weather-icon");
const figcaption = document.querySelector("figcaption");
const url = "https://api.openweathermap.org/data/2.5/weather?lat=41.00&lon=-8.64&units=celcius&APPID=7df97f2950fc6d28758ce291800a8d12";

async function fetchWeather() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const weather = await response.json();
      // console.log(weather);
      displayWeather(weather);
    } else {
      throw Error(await response.statusText);
    }
  } catch (error) {
    console.log(error);
  }
}

function displayWeather(data) {
  temperature.innerHTML = Math.round(data.main.temp - 273.15) + "°C";
  icon.src =
    "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
  icon.alt = data.weather[0].description;
  figcaption.innerHTML = titleCase(data.weather[0].description);
}

function titleCase(str) {
  str = str.toLowerCase().split(" ");
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
}

fetchWeather();
