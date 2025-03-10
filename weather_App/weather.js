const apiKey = "1145c83b9d3a7bae058f92f8daa8b05c";

const searchInput = document.querySelector('#city');
const searchButton = document.getElementById('getWeather');

searchButton.addEventListener('click', () => {
    getWeather(searchInput.value);
});

function getWeather(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            showWeather(data);
        })
        .catch((error) => {
            console.error("Error fetching weather data:", error);
        });
}

function showWeather(data) {
    console.log(data);
     
    const temp = document.getElementById('temp');
    const humidity = document.getElementById('humidity');

    if (data.main) {
        temp.innerText = `Temperature: ${data.main.temp}°C`;
        humidity.innerText = `Humidity: ${data.main.humidity}%`;

    } else {
        temp.innerText = "City not found";
        humidity.innerText = "";
        weather.innerText = "";
    }
}
