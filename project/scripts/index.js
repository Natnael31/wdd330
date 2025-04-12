// header code

// Burger code
const ham = document.querySelector('nav');
const list = document.getElementById('navigation');


ham.addEventListener('click', () => {
    list.classList.toggle('show');
    ham.classList.toggle('show');
})


// header way finding code
const home = document.getElementById('home');
const promises = document.getElementById('promises');
const functions = document.getElementById('functions');
const callbacks = document.getElementById('callbacks');
const register = document.getElementById('register');

home.classList.add('active');
home.addEventListener("click", () => {
    home.classList.add('active');
    promises.classList.remove('active');
    functions.classList.remove('active');
    callbacks.classList.remove('active');
    register.classList.remove('active');
})

promises.addEventListener("click", () => {
    promises.classList.add('active');
    home.classList.remove('active');
    functions.classList.remove('active');
    callbacks.classList.remove('active');
    register.classList.remove('active');
})

functions.addEventListener("click", () => {
    functions.classList.add('active');
    home.classList.remove('active');
    promises.classList.remove('active');
    callbacks.classList.remove('active');
    register.classList.remove('active');
})

callbacks.addEventListener("click", () => {
    callbacks.classList.add('active');
    home.classList.remove('active');
    promises.classList.remove('active');
    functions.classList.remove('active');
    register.classList.remove('active');
})

register.addEventListener("click", () => {
    register.classList.add('active');
    home.classList.remove('active');
    promises.classList.remove('active');
    functions.classList.remove('active');
    callbacks.classList.remove('active')
})

// Main code
const weather_url = 'https://api.openweathermap.org/data/2.5/weather?&units=imperial&lat=9&lon=38.74&appid=4ed520167b53b456179e69213b3fee16';
const weather_data = document.getElementById('weather-data');
const weatherIcon = document.getElementById('weather-icon');

// Display Weather data

function displayWeather(data) {
    let currentTemp = document.createElement('p');
    let weather_description = document.createElement('p');
    let country = document.createElement('p');
    currentTemp.innerHTML = `<strong>Current tempreature</strong>: ${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weather_description.innerHTML = `<strong>Weather-description</strong>: ${desc}`;
    let country_info = data.name;
    country.innerHTML = `Ethiopia, ${country_info}`
    country.classList.add('country');
    weather_data.appendChild(country);
    weather_data.appendChild(weatherIcon);
    weather_data.appendChild(currentTemp);
    weather_data.appendChild(weather_description);
}

// fetch weather
async function apiFetch() {
    try {
        const response = await fetch(weather_url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayWeather(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

// modal code

let displayDialog = () => {
    document.querySelectorAll(".clicked-modal").forEach(click => {
        click.addEventListener("click", (e) => {
            e.preventDefault();
            const clickedModal = e.target.getAttribute("href").substring(1);
            document.getElementById(clickedModal).showModal();
        });
    });
}

displayDialog();

let closeDialog = () => {
    document.querySelectorAll(".close-modal").forEach(modal => {
        modal.addEventListener("click", (e) => {
            e.target.closest("dialog").close();
        });
    });
}

closeDialog();

// Footer code
let currentDate = new Date();
let lastModified = new Date(document.lastModified);

let year = document.getElementById("currentyear");
year.textContent = `©${currentDate.getFullYear()} `;

let date = document.getElementById("lastModified");
date.textContent = `Last Modification: ${lastModified.getMonth() + 1} /${lastModified.getDate()}/${lastModified.getFullYear()} ${lastModified.getHours()}:${lastModified.getMinutes()}:${lastModified.getSeconds()} `