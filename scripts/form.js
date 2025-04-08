// Product Array
const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

// Populate Product Name Select
function populateProducts() {
    const select = document.getElementById("product-name");
    if (select) {
        products.forEach(product => {
            const option = document.createElement("option");
            option.value = product.id;
            option.textContent = product.name;
            select.appendChild(option);
        });
    }
}

// Update Review Counter
function updateReviewCounter() {
    const reviewCountElement = document.getElementById("review-count");
    if (reviewCountElement) {
        let count = localStorage.getItem("reviewCount") || 0;
        count = parseInt(count) + 1;
        localStorage.setItem("reviewCount", count);
        reviewCountElement.textContent = count;
    }
}

// Run Appropriate Function Based on Page
if (document.getElementById("product-name")) {
    populateProducts();
} else if (document.getElementById("review-count")) {
    updateReviewCounter();
}

let year = document.querySelector("#currentyear");
let lastModified = document.querySelector("#lastModified");
const today = new Date();

// Get the current year and display it in the footer
year.innerHTML = `&#169; ${today.getFullYear()}`;

// Get last modified date of the document and display it in the footer
lastModified.textContent = `Last Modified: ${document.lastModified}`;