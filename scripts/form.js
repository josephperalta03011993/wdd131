// Product Array
const products = [
    { id: "p1", name: "Product 1" },
    { id: "p2", name: "Product 2" },
    { id: "p3", name: "Product 3" }
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