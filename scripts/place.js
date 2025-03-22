let year = document.querySelector("#currentyear");
let lastModified = document.querySelector("#lastModified");
const today = new Date();

// Get the current year and display it in the footer
year.innerHTML = `&#169; ${today.getFullYear()}`;

// Get last modified date of the document and display it in the footer
lastModified.textContent = `Last Modified: ${document.lastModified}`;

function calculateWindChill(temp, windSpeed) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(2);
}

function displayWindChill() {
    const tempCelsius = 8;  // Static temperature (change as needed)
    const windSpeedKmh = 10; // Static wind speed (change as needed)

    let windChill;

    // Check if wind chill conditions are met
    if (tempCelsius <= 10 && windSpeedKmh > 4.8) {
        windChill = calculateWindChill(tempCelsius, windSpeedKmh) + " °C";
    } else {
        windChill = "N/A";
    }

    document.getElementById("windChill").textContent = windChill;
}

// Run function when the page loads
window.onload = displayWindChill;
