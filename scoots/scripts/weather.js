const apiKey = '7df97f2950fc6d28758ce291800a8d12'; 
const city = 'Cozumel, Mexico'; 

const weatherInfo = document.getElementById('weather-info');

async function getWeather() {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await response.json();

    const currentTemp = Math.round(data.main.temp);
    const currentHumidity = data.main.humidity;

    const nextDayResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`);
    const nextDayData = await nextDayResponse.json();
    const nextDayForecast = nextDayData.list.find(item => item.dt_txt.includes('15:00'));

    const weatherDescription = data.weather[0].description;
    const weatherIcon = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const nextDayTemp = Math.round(nextDayForecast.main.temp);

    const html = `
      <p>Current Temperature: ${currentTemp}°C</p>
      <p>Current Humidity: ${currentHumidity}%</p>
      <p>Next Day's Forecast at 3:00 PM: ${nextDayTemp}°C</p>
      <p>Weather: ${data.weather[0].main}</p>
      <p>Description: ${weatherDescription}</p>
      <img src="${weatherIcon}" alt="${weatherDescription}">
    `;

    weatherInfo.innerHTML = html;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    weatherInfo.innerHTML = '<p>Failed to fetch weather data</p>';
  }
}

getWeather();

function closeMessage() {
  document.getElementById("weatherMessage").style.display = "none";
}

function displayWeatherMessage(tempMax) {
  const message = document.getElementById("weatherMessage");
  const temperature = document.getElementById("temperature");
  temperature.textContent = `Today's high temperature: ${tempMax}°C`;
  message.style.display = "block";
}

// Function to fetch temperature from an API
function getTemperature() {
  
  const apiKey = '7df97f2950fc6d28758ce291800a8d12';
  const city = 'Cozumel, Mexico';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      return response.json();
    })
    .then(data => {
      const tempMax = Math.round(data.main.temp_max);
      displayWeatherMessage(tempMax);
    })
    .catch(error => {
      console.error('Error fetching temperature:', error);
    });
}

// Call the function when the page loads
window.onload = function() {
  getTemperature();
};
