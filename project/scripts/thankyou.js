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
const html = document.getElementById('html');
const css = document.getElementById('css');
const js = document.getElementById('js');
const register = document.getElementById('register');

register.classList.add('active');
home.addEventListener("click", () => {
    home.classList.add('active');
    html.classList.remove('active');
    css.classList.remove('active');
    js.classList.remove('active');
    register.classList.remove('active');
})

html.addEventListener("click", () => {
    html.classList.add('active');
    home.classList.remove('active');
    css.classList.remove('active');
    js.classList.remove('active');
    register.classList.remove('active');
})

css.addEventListener("click", () => {
    css.classList.add('active');
    home.classList.remove('active');
    html.classList.remove('active');
    js.classList.remove('active');
    register.classList.remove('active');
})

js.addEventListener("click", () => {
    js.classList.add('active');
    home.classList.remove('active');
    html.classList.remove('active');
    css.classList.remove('active');
    register.classList.remove('active');
})

register.addEventListener("click", () => {
    register.classList.add('active');
    home.classList.remove('active');
    html.classList.remove('active');
    css.classList.remove('active');
    js.classList.remove('active')
})



// main code
const url = window.location.href;
const results = document.getElementById('data');
// console.log(url);

const dataUrl = url.split('?');
console.log(dataUrl);

formData = dataUrl[1];
console.log(formData);
// formData = dataUrl[1].split('&')

formDataArray = formData.split('&');
// console.log(formDataArray);

formDataArray.forEach((data) => {
    dataValue = data.split('=');
    // console.log(dataValue);
    if (dataValue[0] == 'name') {
        dataValue[1] = dataValue[1].replace("+", " ")
    }
    if (dataValue[0] == 'email') {
        dataValue[1] = dataValue[1].replace("%40", "@")
    }
    if (dataValue[0] == 'phone-number') {
        dataValue[1] = dataValue[1].replace("%2B", "+")
    }

    const element = document.createElement('p');
    element.innerHTML = `<p><strong>${capitalize(dataValue[0])}:</strong> ${dataValue[1]}</p>`
    results.appendChild(element);
});

let counter = Number(localStorage.getItem('students'));
localStorage.setItem('students', ++counter);

const students = localStorage.getItem('students');
const studentDisplay = document.createElement("p");
studentDisplay.innerHTML = `<strong>Number of students registered:</strong> ${students}`;
results.appendChild(studentDisplay);
// localStorage.removeItem('students');

// Capitalize each word
function capitalize(str) {
    return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Footer code
let currentDate = new Date();
let lastModified = new Date(document.lastModified);

let year = document.getElementById("currentyear");
year.textContent = `©${currentDate.getFullYear()}`;

let date = document.getElementById("lastModified");
date.textContent = `Last Modification : ${lastModified.getMonth() + 1}/${lastModified.getDate()}/${lastModified.getFullYear()} ${lastModified.getHours()}:${lastModified.getMinutes()}:${lastModified.getSeconds()}`