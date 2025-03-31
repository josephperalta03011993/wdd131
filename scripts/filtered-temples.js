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

const temples = [
	{
	  templeName: "Aba Nigeria",
	  location: "Aba, Nigeria",
	  dedicated: "2005, August, 7",
	  area: 11500,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
	  templeName: "Manti Utah",
	  location: "Manti, Utah, United States",
	  dedicated: "1888, May, 21",
	  area: 74792,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
	  templeName: "Payson Utah",
	  location: "Payson, Utah, United States",
	  dedicated: "2015, June, 7",
	  area: 96630,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
	  templeName: "Yigo Guam",
	  location: "Yigo, Guam",
	  dedicated: "2020, May, 2",
	  area: 6861,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
	  templeName: "Washington D.C.",
	  location: "Kensington, Maryland, United States",
	  dedicated: "1974, November, 19",
	  area: 156558,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
	  templeName: "Lima Perú",
	  location: "Lima, Perú",
	  dedicated: "1986, January, 10",
	  area: 9600,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
	  templeName: "Mexico City Mexico",
	  location: "Mexico City, Mexico",
	  dedicated: "1983, December, 2",
	  area: 116642,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	{
		templeName: "Bacolod Philippines",
		location: "Bacolod Airport Access Road",
		dedicated: "11 December 2021",
		area: 26700,
		imageUrl:
		"https://churchofjesuschristtemples.org/assets/img/temples/bacolod-philippines-temple/bacolod-philippines-temple-56418.jpg"
	  },
	  {
		templeName: "Cebu City",
		location: "Gorordo Avenue Barangay Lahug",
		dedicated: "14 November 2007",
		area: 29556,
		imageUrl:
		"https://churchofjesuschristtemples.org/assets/img/temples/cebu-city-philippines-temple/cebu-city-philippines-temple-33251.jpg"
	  },
	  {
		templeName: "Manila",
		location: "Temple Drive corner Whiteplains Avenue",
		dedicated: "25 August 1982",
		area: 26683,
		imageUrl:
		"https://churchofjesuschristtemples.org/assets/img/temples/manila-philippines-temple/manila-philippines-temple-48890.jpg"
	  },
  ];

createTempleCard();

function createTempleCard() {
	temples.forEach(temple => {
		
		let card = document.createElement("section");
		let name = document.createElement("h3");
		let location = document.createElement("p");
		let dedication = document.createElement("p");
		let area = document.createElement("p");
		let img = document.createElement("Img");

		name.textContent = temple.templeName;
		location.innerHTML = `Location: ${temple.location}`;
		dedication.innerHTML = `Dedicated: ${temple.dedicated}`;
		area.innerHTML = `Area: ${temple.area} square feet`;
		img.src = temple.imageUrl;
		img.alt = `${temple.templeName} Temple`;
		img.setAttribute("src", temple.imageUrl);
		img.setAttribute("width", "400");
		img.setAttribute("height", "250");
		img.setAttribute("loading", "lazy");

		card.appendChild(name);
		card.appendChild(location);
		card.appendChild(dedication);
		card.appendChild(area);
		card.appendChild(img);

		document.querySelector("#temple-images").appendChild(card);

	});
}