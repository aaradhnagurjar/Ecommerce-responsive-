const emailField = document.getElementById("email-address-input");
emailField.focus({
  preventScroll: true,

});
function checkUser() {
  const logged = localStorage.getItem("loggedIn");
  const user = JSON.parse(localStorage.getItem("user"));

  if (logged === "true") {
    document.getElementById("username").innerText = "Hello, " + user.name;
  }
}

checkUser();

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(id) {
  const product = products.find(p => p.id === id);

  const exist = cart.find(p => p.id === id);
  if (exist) {
    exist.qty++;
  } else {
    cart.push({...product, qty: 1});
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const count = cart.reduce((a, b) => a + b.qty, 0);
  document.getElementById("cartCount").innerText = count;
}

updateCartCount();

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

function addToWishlist(id) {
  const product = products.find(p => p.id === id);

  if (!wishlist.some(p => p.id === id)) {
    wishlist.push(product);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }
}



function displayProducts(list) {
    let html = "";
    list.forEach(p => {
        html += `
            <div class="product-card">
                <img src="${p.img}">
                <h3>${p.name}</h3>
                <p>₹${p.price}</p>
                <p>⭐ ${p.rating}</p>
                <button onclick="addToCart(${p.id})">Add to Cart</button>
            </div>
        `;
    });

    document.getElementById("products").innerHTML = html;
}

displayProducts(products);

function filterProducts() {
    let filtered = products;

    let cat = document.getElementById("categoryFilter").value;
    if (cat !== "all") filtered = filtered.filter(p => p.category === cat);

    let rating = document.getElementById("ratingFilter").value;
    filtered = filtered.filter(p => p.rating >= rating);

    let search = document.getElementById("searchInput").value.toLowerCase();
    filtered = filtered.filter(p => p.name.toLowerCase().includes(search));

    let sort = document.getElementById("priceSort").value;
    if (sort === "low") filtered.sort((a,b)=>a.price-b.price);
    if (sort === "high") filtered.sort((a,b)=>b.price-a.price);

    displayProducts(filtered);
}

document.querySelectorAll(".filters select, .filters input")
.forEach(el => el.addEventListener("input", filterProducts));
