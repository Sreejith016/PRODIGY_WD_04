// script.js
document.getElementById('city').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('getWeatherButton').click();
    }
});

async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = 'd6cb6347b19a2bb1f9f788468f136e29'; // Replace with your API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.cod === '404') {
            alert('City not found');
            return;
        }

        document.getElementById('location').innerText = `${data.name}, ${data.sys.country}`;
        document.getElementById('temperature').innerText = `${Math.round(data.main.temp)}°C`;
        document.getElementById('description').innerText = data.weather[0].description;
        document.getElementById('icon').innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="Weather icon">`;

        document.getElementById('weather-info').style.display = 'block';
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}
