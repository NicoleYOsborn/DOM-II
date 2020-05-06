// Your code goes here

// function to run query selector

function get(selector) {
    return document.querySelector(selector)
};

// NAV
const navBar = get('.nav-container');
const logo = get('.logo-heading');
const allNavLinks = Array.from(document.querySelectorAll('.nav-link'));
const home = get('.nav-link');
const about = home.nextElementSibling;
const blog = about.nextElementSibling;
const contact = blog.nextElementSibling;

// IMAGES
const busImg = get('.intro img');
const mapImg = get('.img-content img');
const cityImg = get('.img-fluid');

// BUTTONS
const signUp = get('.btn');
const mountainSec = get('.destination').nextElementSibling;
const secondButton = mountainSec.querySelector('.btn');

// HEADERS
const welcome = get('.intro h2');

// CONTAINER
const container = get('.home');
const destination = get('.content-destination');



// makes HOME text larger on hover
const homeActive = (event) => {
    home.style.fontSize = '2rem';
}

home.addEventListener('mouseover', homeActive);

const homeInactive = (event) => {
    home.style.fontSize = '1.6rem';
}

home.addEventListener('mouseleave', homeInactive);

// Changes logo text on double click

const newLogo = (event) => {
    logo.textContent = 'THE KNIGHT BUS'
    logo.style.color = 'purple';
}
logo.addEventListener('dblclick', newLogo);

// Changes background color on with wheel rotation

const turnGray = (event) => {
    container.style.backgroundColor = 'gray';
}
container.addEventListener('wheel', turnGray);

// changes background back to white
const turnWhite = (event) => {
    if (event.keyCode  ===   32) {
        container.style.backgroundColor = 'white';
    }
}
document.addEventListener('keydown', turnWhite);

// Images switch when mouse button is being pressed
const switcheroo = (event) => {
    mapImg.setAttribute('src', '/img/fun.jpg');
    cityImg.setAttribute('src', '/img/adventure.jpg')
}

const switchBack = (event) => {
    mapImg.setAttribute('src', '/img/adventure.jpg');
    cityImg.setAttribute('src', '/img/fun.jpg')
}

mapImg.addEventListener('mousedown', switcheroo);
cityImg.addEventListener('mousedown', switcheroo);
mapImg.addEventListener('mouseup', switchBack);
cityImg.addEventListener('mouseup', switchBack);

// Welcome message heading changes to caps and red when targeted

const focused = (event) => {
    welcome.style.textTransform = 'uppercase';
    welcome.style.color = 'red';
}
welcome.addEventListener('mousemove', focused);

// Button dissappears on click.

const dissappear = (event) => {
    signUp.style.visibility = "hidden";
}
signUp.addEventListener('click', dissappear);

// drag second button to the section above

secondButton.setAttribute('draggable', 'true');
destination.classList.add('dropzone');

secondButton.addEventListener('drag', function (event) {}, false);
secondButton.addEventListener("dragstart", function (event) {
    destination.style.opacity = .5;
});

secondButton.addEventListener('dragend', function (event) {
    destination.style.opacity = "";
    mountainSec.removeChild(secondButton);
    destination.appendChild(secondButton);
});