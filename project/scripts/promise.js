// import ES module's display function

import displayItems from "./display.js";


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

promises.classList.add('active');
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
const url = "https://www.googleapis.com/youtube/v3/search?q=promises+JS+Async+tutorial&type=video&key=AIzaSyB1SrZz98jBxDWkN20cfgrPtw0ArejOHq0&part=snippet,id&maxResults=9"
const cards = document.getElementById('home-cards');

let getVideos = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.items);

        data.items.forEach(element => {
            cards.append(displayItems(element));
        });


    } catch (error) {
        console.log(error);
    }

}

getVideos();

// Footer code
let currentDate = new Date();
let lastModified = new Date(document.lastModified);

let year = document.getElementById("currentyear");
year.textContent = `©${currentDate.getFullYear()} `;

let date = document.getElementById("lastModified");
date.textContent = `Last Modification: ${lastModified.getMonth() + 1} /${lastModified.getDate()}/${lastModified.getFullYear()} ${lastModified.getHours()}:${lastModified.getMinutes()}:${lastModified.getSeconds()} `