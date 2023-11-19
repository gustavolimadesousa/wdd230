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

function displayThreeDayForecast(weatherData) {
  // Assuming there's an HTML element with the ID 'threeDayForecast' where you want to display the forecast
  var forecastElement = document.getElementById('threeDayForecast');
  
  // Loop through the next three days' weather data
  for (var i = 1; i <= 3; i++) {
      var date = new Date(weatherData[i].dt * 1000); // Convert timestamp to Date object
      var day = date.toLocaleDateString('en-US', { weekday: 'short' }); // Get day name
      
      // Create a new div element to represent each day's forecast
      var dayForecast = document.createElement('div');
      dayForecast.classList.add('forecast-item'); // Optional: Add a class for styling
      
      // Construct the HTML content for the forecast
      var forecastHTML = `
          <p>${day}</p>
          <img src="https://openweathermap.org/img/w/${weatherData[i].weather[0].icon}.png" alt="${weatherData[i].weather[0].description}">
          <p>${Math.round(weatherData[i].main.temp - 273.15)}°C</p>
      `;
      
      // Set the HTML content to the day's forecast div
      dayForecast.innerHTML = forecastHTML;
      
      // Append the day's forecast div to the main forecast element
      forecastElement.appendChild(dayForecast);
  }
}

fetchWeather();


    // Function to fetch weather data and display three-day forecast
    async function fetchAndDisplayWeather() {
      const apiKey = '7df97f2950fc6d28758ce291800a8d12'; 
      const city = 'Espinho, Portugal'; 
      
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`);
        const data = await response.json();
        
        if (!data || !data.list) {
          throw new Error('Weather data not found!');
        }

        const threeDayForecast = document.getElementById('threeDayForecast');

        for (let i = 0; i < 3; i++) {
          const dayData = data.list[i * 8]; // Weather data for every 8th entry (3-hour intervals)
          const date = new Date(dayData.dt * 1000);
          const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'short' });
          const iconUrl = `https://openweathermap.org/img/w/${dayData.weather[0].icon}.png`;
          const temperature = Math.round(dayData.main.temp - 273.15);

          const forecastItem = document.createElement('div');
          forecastItem.classList.add('forecast-item');
          forecastItem.innerHTML = `
            <p>${dayOfWeek}</p>
            <img src="${iconUrl}" alt="${dayData.weather[0].description}">
            <p>${temperature}°C</p>
          `;

          threeDayForecast.appendChild(forecastItem);
        }
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    }

    fetchAndDisplayWeather();


