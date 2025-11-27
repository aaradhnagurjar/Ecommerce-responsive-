function filterProducts() {
  let filtered = products;

  // CATEGORY FILTER
  const category = document.getElementById("categoryFilter").value;
  if (category !== "all") {
    filtered = filtered.filter(p => p.category === category);
  }

  // RATING FILTER
  const rating = parseFloat(document.getElementById("ratingFilter").value);
  filtered = filtered.filter(p => p.rating >= rating);

  // SEARCH
  const search = document.getElementById("searchInput").value.toLowerCase();
  filtered = filtered.filter(p => p.name.toLowerCase().includes(search));

  // SORTING
  const sort = document.getElementById("priceSort").value;
  if (sort === "low") filtered.sort((a, b) => a.price - b.price);
  if (sort === "high") filtered.sort((a, b) => b.price - a.price);

  displayProducts(filtered);
}

// Events
document.getElementById("categoryFilter").addEventListener("change", filterProducts);
document.getElementById("ratingFilter").addEventListener("change", filterProducts);
document.getElementById("priceSort").addEventListener("change", filterProducts);
document.getElementById("searchInput").addEventListener("keyup", filterProducts);
