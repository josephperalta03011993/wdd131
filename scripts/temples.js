let year = document.querySelector("#currentyear");
let lastModified = document.querySelector("#lastModified");
const today = new Date();

// Get the current year and display it in the footer
year.innerHTML = `&#169; ${today.getFullYear()}`;

// Get last modified date of the document and display it in the footer
lastModified.textContent = `Last Modified: ${document.lastModified}`;

// Hamburger Menu
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});