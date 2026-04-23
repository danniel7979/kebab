
const products = [
    ["Donner Clásico", "Ternera, lechuga, tomate, cebolla y salsa yogur.", 6.50, "kebab", "Top ventas", "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=800&q=80"],
    ["Donner Mixto", "Pollo y ternera con queso feta y salsa especial.", 7.50, "kebab", "Favorito", "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80"],
    ["Donner Picante", "Carne especiada, jalapeños y salsa roja.", 7.20, "kebab", "Picante", "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"],
    ["Donner Premium", "Doble carne, queso, verduras frescas y salsa de la casa.", 8.90, "kebab", "Grande", "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=800&q=80"],

    ["Durum Tradicional", "Pollo, tomate, cebolla y salsa blanca.", 6.80, "durum", "Turco", "https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?auto=format&fit=crop&w=800&q=80"],
    ["Durum Ternera", "Ternera asada, lombarda, pepino y salsa suave.", 7.30, "durum", "Clásico", "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80"],
    ["Durum Especial", "Mixto con queso fundido, maíz y salsa picante.", 7.90, "durum", "Especial", "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?auto=format&fit=crop&w=800&q=80"],
    ["Durum Falafel", "Falafel, hummus, ensalada fresca y tahini.", 6.40, "durum", "Veggie", "https://images.unsplash.com/photo-1593001874117-c99c800e3ebd?auto=format&fit=crop&w=800&q=80"],

    ["Plato Kebab Pollo", "Pollo, arroz, ensalada, pan y salsa yogur.", 9.50, "plato", "Completo", "https://images.unsplash.com/photo-1543353071-10c8ba85a904?auto=format&fit=crop&w=800&q=80"],
    ["Plato Kebab Ternera", "Ternera, patatas, ensalada y salsa especial.", 9.90, "plato", "Popular", "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"],
    ["Plato Mixto", "Pollo y ternera con arroz, patatas y ensalada.", 10.50, "plato", "Grande", "https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?auto=format&fit=crop&w=800&q=80"],
    ["Plato Falafel", "Falafel, hummus, arroz, ensalada y tahini.", 8.70, "plato", "Veggie", "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80"],

    ["Patatas Especiadas", "Patatas crujientes con especias turcas.", 3.20, "entrante", "Crujiente", "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=800&q=80"],
    ["Falafel 6 uds.", "Falafel casero con salsa yogur o tahini.", 4.50, "entrante", "Casero", "https://images.unsplash.com/photo-1593001872095-7d5b3868fb1d?auto=format&fit=crop&w=800&q=80"],
    ["Hummus con Pan", "Crema de garbanzos con pan turco.", 4.20, "entrante", "Suave", "https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=800&q=80"],
    ["Ensalada Anatolia", "Tomate, pepino, cebolla roja, aceitunas y feta.", 4.90, "entrante", "Fresco", "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80"],

    ["Ayran", "Bebida tradicional de yogur salado.", 2.20, "bebida", "Turco", "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=800&q=80"],
    ["Refresco Cola", "Lata fría de cola.", 2.00, "bebida", "Frío", "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&w=800&q=80"],
    ["Agua Mineral", "Botella de agua 50cl.", 1.50, "bebida", "Ligero", "https://images.unsplash.com/photo-1616118132534-381148898bb4?auto=format&fit=crop&w=800&q=80"],
    ["Té Turco", "Té caliente servido al estilo tradicional.", 1.80, "bebida", "Auténtico", "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80"],

    ["Baklava", "Dulce turco con pistacho y miel.", 3.50, "postre", "Dulce", "https://images.unsplash.com/photo-1636972676303-8be7c13fcd24?auto=format&fit=crop&w=800&q=80"],
    ["Kunefe", "Postre caliente con queso, almíbar y pistacho.", 4.20, "postre", "Especial", "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=800&q=80"],
    ["Arroz con Leche", "Postre cremoso con canela.", 2.90, "postre", "Casero", "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=800&q=80"]
];

let cart = [];
let currentCategory = "todos";

const productsDiv = document.getElementById("products");
const searchInput = document.getElementById("search");
const cartItems = document.getElementById("cartItems");
const totalEl = document.getElementById("total");
const whatsapp = document.getElementById("whatsapp");

function formatPrice(price) {
    return price.toFixed(2).replace(".", ",") + " €";
}

function renderProducts() {
    const search = searchInput.value.toLowerCase();

    const filtered = products.filter(p => {
        const matchCategory = currentCategory === "todos" || p[3] === currentCategory;
        const matchSearch = p[0].toLowerCase().includes(search) || p[1].toLowerCase().includes(search);
        return matchCategory && matchSearch;
    });

    productsDiv.innerHTML = filtered.map((p, index) => `
        <div class="product">
          <img src="${p[5]}" alt="${p[0]}">
          <div class="product-content">
            <span class="tag">${p[4]}</span>
            <div class="product-top">
              <h3>${p[0]}</h3>
              <div class="price">${formatPrice(p[2])}</div>
            </div>
            <p>${p[1]}</p>
            <button class="add-btn" onclick="addToCart('${p[0]}', ${p[2]})">
              Añadir al pedido
            </button>
          </div>
        </div>
      `).join("");
}

function addToCart(name, price) {
    cart.push({ name, price });
    renderCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    renderCart();
}

function renderCart() {
    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Aún no has añadido productos.</p>";
    } else {
        cartItems.innerHTML = cart.map((item, i) => `
  <div class="cart-item">
    <span>${item.name}</span>
    <div>
      <strong>${formatPrice(item.price)}</strong>
      <button onclick="removeFromCart(${i})" style="
        margin-left:8px;
        background:red;
        color:white;
        border:none;
        border-radius:6px;
        padding:2px 6px;
        cursor:pointer;
      ">✕</button>
    </div>
  </div>
`).join("");
    }

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    totalEl.textContent = formatPrice(total);

    const pedido = cart.map(item => `- ${item.name}: ${formatPrice(item.price)}`).join("%0A");
    const mensaje = `Hola, quiero hacer este pedido:%0A%0A${pedido}%0A%0ATotal: ${formatPrice(total)}`;
    whatsapp.href = `https://wa.me/34600000000?text=${mensaje}`;
}

function clearCart() {
    cart = [];
    renderCart();
}

document.querySelectorAll(".filter").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".filter").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentCategory = btn.dataset.category;
        renderProducts();
    });
});

searchInput.addEventListener("input", renderProducts);

renderProducts();
renderCart();
