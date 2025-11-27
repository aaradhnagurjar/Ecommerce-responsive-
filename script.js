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

