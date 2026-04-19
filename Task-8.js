let totalProducts = [];
let selectedProducts = [];

const container = document.getElementById("products");
const loader = document.getElementById("loader");
const error = document.getElementById("error");

// FETCH DATA
async function fetchProducts() {
  try {
    loader.style.display = "block";

    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    totalProducts = data;
    selectedProducts = data;

    displayProducts(data);

    loader.style.display = "none";
  } catch (err) {
    loader.style.display = "none";
    error.textContent = "Error loading data";
  }
}

// DISPLAY PRODUCTS
function displayProducts(products) {
  container.innerHTML = "";

  products.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${p.image}" />
      <h3>${p.title.slice(0,20)}...</h3>
      <p>${p.description.slice(0,60)}...</p>
      <button class="price-btn">₹ ${p.price}</button>
      <button class="view-btn" onclick="viewDetails(${p.id})">View More</button>
    `;

    container.appendChild(card);
  });
}

// SEARCH FILTER
document.getElementById("search").addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();

  selectedProducts = totalProducts.filter(p =>
    p.title.toLowerCase().includes(value)
  );

  displayProducts(selectedProducts);
});

// CATEGORY FILTER
document.getElementById("category").addEventListener("change", (e) => {
  const value = e.target.value;

  if (value === "all") {
   selectedProducts = totalProducts;
  } else {
    selectedProducts = totalProducts.filter(p => p.category === value);
  }

  displayProducts(selectedProducts);
});

// SORTING
function sortLowHigh() {
  const sorted = [...selectedProducts].sort((a, b) => a.price - b.price);
  displayProducts(sorted);
}

function sortHighLow() {
  const sorted = [...selectedProducts].sort((a, b) => b.price - a.price);
  displayProducts(sorted);
}

// VIEW DETAILS
function viewDetails(id) {
  const product = totalProducts.find(p => p.id === id);

  document.getElementById("modalTitle").textContent = product.title;
  document.getElementById("modalImg").src = product.image;
  document.getElementById("modalDesc").textContent = product.description;
  document.getElementById("modalPrice").textContent = "₹ " + product.price;

  document.getElementById("modal").classList.remove("hidden");
}

// CLOSE MODAL
document.getElementById("close").onclick = () => {
  document.getElementById("modal").classList.add("hidden");
};

// INIT
fetchProducts();