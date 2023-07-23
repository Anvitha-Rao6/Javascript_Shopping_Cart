// Product data
const products = [
  {
      id: 1,
      name: "BTS Cap (pink)",
      price: 329,
      image: "https://m.media-amazon.com/images/I/814EbbVnpNL._UX679_.jpg",
      quantity: 0
  },
  {
    id: 2,
    name: "Tiny Tans OT7 Merch",
    price: 760,
    image: "https://m.media-amazon.com/images/I/51A3lntgvmL._SX466_.jpg",
    quantity: 0
  },
  {
      id: 3,
      name: "BTS Coffee Mug ",
      price: 400,
      image: "https://m.media-amazon.com/images/I/51j38dZ9BeS._SX522_.jpg",
      quantity: 0
    },
    {
      id: 4,
      name: "BT21 Mug ",
      price: 333,
      image: "https://m.media-amazon.com/images/I/41n0YvglwmS._SX522_.jpg",
      quantity: 0
    },
    {
      id: 5,
      name: "The Combo Pack of 6",
      price: 700,
      image: "https://m.media-amazon.com/images/I/81RQNH71ilL._SY679_.jpg",
      quantity: 0
    },
    {
      id: 6,
      name: "BTS DNA Cover Mug",
      price: 230,
      image: "https://m.media-amazon.com/images/I/71CdaRahYQL._SX522_.jpg",
      quantity: 0
    },
    {
        id: 7,
        name: "Notebook Combo BTS with stickers",
        price: 500,
        image: "https://m.media-amazon.com/images/I/41DSh6aVGyL._SY498_BO1,204,203,200_.jpg",
        quantity: 0
      },
      {
        id: 8,
        name: "BTS Notebook (Zero o clock version)",
        price: 200,
        image: "https://m.media-amazon.com/images/I/31+jAa8xAGL._SX443_BO1,204,203,200_.jpg",
        quantity: 0
      },
      {
        id: 9,
        name: "BTS Bag (Rose edition)",
        price: 799,
        image: "https://m.media-amazon.com/images/I/412gcFpVjYL._UX679_.jpg",
        quantity: 0
      },
      {
        id: 10,
        name: "Silver Black Bracelet (BTS)",
        price: 179,
        image: "https://m.media-amazon.com/images/I/513kOmcXq7L._UY625_.jpg",
        quantity: 0
      },
      {
        id: 11,
        name: "BTS Keychain",
        price: 119,
        image: "https://m.media-amazon.com/images/I/710r5yzRkbL._SY679_.jpg",
        quantity: 0
      }
];

// Clothing
const clothes = [
  
  {
    id: 12,
    name: "BTS Logo Pink Hoodie",
    price: 399,
    image: "https://m.media-amazon.com/images/I/31l8m28CTnL.jpg",
    quantity: 0
  },
  {
    id: 13,
    name: "BTS Logo Red Hoodie",
    price: 399,
    image: "https://m.media-amazon.com/images/I/41O+-BefUUL.._SX._UX._SY._UY_.jpg",
    quantity: 0
  },
  {
    id: 14,
    name: "BTS Logo Neon Hoodie (limited)",
    price: 429,
    image: "https://m.media-amazon.com/images/I/61RcCDrkbQL._SX679._SX._UX._SY._UY_.jpg",
    quantity: 0
  },
  {
    id: 15,
    name: "BTS Black T shirt",
    price: 299,
    image: "https://m.media-amazon.com/images/I/410jU9edYNL.jpg",
    quantity: 0
  },
  {
    id: 16,
    name: "BTS T Shirt (Purple)",
    price: 299,
    image: "https://m.media-amazon.com/images/I/41dgA+taYQL.._SX._UX._SY._UY_.jpg",
    quantity: 0
  },
  {
    id: 17,
    name: "Simple Black T-Shirt BTS",
    price: 239,
    image: "https://m.media-amazon.com/images/I/41GEh9BQseL._UX679_.jpg",
    quantity: 0
  },
  {
    id: 18,
    name: "BTS Dynamite T-shirt",
    price: 260,
    image: "https://m.media-amazon.com/images/I/61vbAJG+5UL._UY879_.jpg",
    quantity: 0
  },
  {
    id: 18,
    name: "T-shirt BTS Merch (Jin-Astronaut)",
    price: 299,
    image: "https://m.media-amazon.com/images/I/61nXOoSO2oL._UX679_.jpg",
    quantity: 0
  }
];

// Cart data
let cartItems = [];

// Function to store cart items in localStorage
function storeCartItems() {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

// Function to retrieve cart items from localStorage
function retrieveCartItems() {
  const storedCartItems = localStorage.getItem("cartItems");
  if (storedCartItems) {
      cartItems = JSON.parse(storedCartItems);
  } else {
      cartItems = [];
  }
}

// Function to render product cards
function renderProductCards() {
  const productList = document.getElementById("product-list");
  if (!productList) return;

  productList.innerHTML = "";

  const allProducts = [...products, ...clothes]; // Combine merch and clothes

  allProducts.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("col-lg-3", "col-md-4", "col-sm-6", "mb-4");
    card.innerHTML = `
      <div class="card">
        <img src="${product.image}" class="card-img-top" alt="${product.name}">
        <div class="card-body">
          <h4 class="card-title">${product.name}</h4>
          <span class="card-text">$${product.price}</span>
          <div class="d-grid gap-2">
            <button class="btn btn-warning add-to-cart-btn" data-product-id="${product.id}"><i class='bx bx-cart-add'></i>Add to cart</button>
          </div>
        </div>
      </div>
    `;

    if (product instanceof Object && product.id >= 12 && product.id <= 18) {
      const clothlist = document.getElementById("cloth-list");
      if (clothlist) {
        clothlist.appendChild(card);
      }
    } else {
      productList.appendChild(card);
    }
  });

  // Add event listeners to the "Add to cart" buttons
  const addToCartButtons = document.getElementsByClassName("add-to-cart-btn");
  for (let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener("click", addToCart);
  }
}

// Function to handle adding a product to the cart
function addToCart(event) {
  const productId = parseInt(event.target.getAttribute("data-product-id"));

  // Check if the product is already in the cart
  const existingCartItem = cartItems.find(item => item.id === productId);
  if (existingCartItem) {
      existingCartItem.quantity++;
  } else {
      const product = [...products, ...clothes].find(item => item.id === productId);
      cartItems.push({ ...product, quantity: 1 });
  }

  // Update the cart count and store the cart items in localStorage
  updateCartCount();
  storeCartItems();

  // Show notification
  showNotification("Added to Your Cart");

  // Reset notification after 2 seconds
  setTimeout(() => {
    resetNotification();
  }, 2000);
}

// Function to remove a product from the cart
function removeFromCart(event) {
  const productId = parseInt(event.target.getAttribute("data-product-id"));
  cartItems = cartItems.filter(item => item.id !== productId);
  renderCartItems();
  updateTotalPrice();
  updateCartCount();

  // Store the cart items in localStorage or clear it if all items are removed
  if (cartItems.length > 0) {
      storeCartItems();
  } else {
      clearCart();
  }
}

// Function to clear the cart
function clearCart() {
  cartItems = [];
  renderCartItems();
  updateTotalPrice();
  updateCartCount();
  localStorage.removeItem("cartItems");
}

// Function to decrease the quantity of a cart item
function decreaseQuantity(event) {
  const productId = parseInt(event.target.getAttribute("data-product-id"));
  const cartItem = cartItems.find(item => item.id === productId);

  if (cartItem.quantity > 1) {
      cartItem.quantity--;
      renderCartItems();
      updateTotalPrice();
      storeCartItems(); // Store cart items after updating the quantity
  }
}

// Function to increase the quantity of a cart item
function increaseQuantity(event) {
  const productId = parseInt(event.target.getAttribute("data-product-id"));
  const cartItem = cartItems.find(item => item.id === productId);

  cartItem.quantity++;
  renderCartItems();
  updateTotalPrice();
  storeCartItems(); // Store cart items after updating the quantity
}

// Function to render cart items
function renderCartItems() {
  const cartItemsContainer = document.getElementById("cart-items");
  if (!cartItemsContainer) return;

  cartItemsContainer.innerHTML = "";

  cartItems.forEach(item => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("mb-3");
    cartItem.innerHTML = `
      <div class="card">
        <div class="row g-0">
          <div class="col-md-1">
            <img src="${item.image}" class="img-fluid rounded-start" alt="${item.name}">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h3 class="card-title">${item.name}</h3>
              <p class="card-text">$${item.price}</p>
              <div class="d-flex align-items-center">
                <button class="btn btn-info decrease-quantity-btn" data-product-id="${item.id}">-</button>
                <span class="mx-2">${item.quantity}</span>
                <button class="btn btn-info increase-quantity-btn" data-product-id="${item.id}">+</button>
                <button class="btn btn-outline-danger remove-from-cart-btn ms-auto" data-product-id="${item.id}">Delete  from  Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    cartItemsContainer.appendChild(cartItem);
  });

  // Add event listeners to the quantity and remove buttons
  const decreaseQuantityButtons = document.getElementsByClassName("decrease-quantity-btn");
  const increaseQuantityButtons = document.getElementsByClassName("increase-quantity-btn");
  const removeFromCartButtons = document.getElementsByClassName("remove-from-cart-btn");

  for (let i = 0; i < decreaseQuantityButtons.length; i++) {
    decreaseQuantityButtons[i].addEventListener("click", decreaseQuantity);
    increaseQuantityButtons[i].addEventListener("click", increaseQuantity);
    removeFromCartButtons[i].addEventListener("click", removeFromCart);
  }

  updateTotalPrice();
  updateCartCount();
}

// Function to update the cart count
function updateCartCount() {
  const cartCount = document.getElementById("cart-count");
  if (!cartCount) return;

  cartCount.textContent = cartItems.length;

  const navLink = document.querySelector(".nav-link");
  if (cartItems.length > 0) {
    navLink.classList.add("has-count");
  } else {
    navLink.classList.remove("has-count");
  }

  storeCartItems();
}

// Function to update the total price
function updateTotalPrice() {
  const totalPriceElement = document.getElementById("total-price");
  if (!totalPriceElement) return;

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
}

// Function to handle checkout button click
function checkout() {
  // Check if there are items in the cart
  if (cartItems && cartItems.length > 0) {
    alert("Order placed has been successfully!");
  } else {
    alert("No items found in the cart, please add items!!!");
  }
}

// Function to show notification
function showNotification(message) {
  const notification = document.getElementById("notification");
  if (!notification) return;

  notification.textContent = message;
  notification.style.display = "block";
}

// Function to reset notification
function resetNotification() {
  const notification = document.getElementById("notification");
  if (!notification) return;

  notification.textContent = "";
  notification.style.display = "none";
}

// Function to render cart items on page load
function renderCartItemsOnLoad() {
  retrieveCartItems();
  renderCartItems();
  updateTotalPrice();
  updateCartCount();

  if (cartItems.length === 0) {
    localStorage.removeItem("cartItems");
  }
}

// Call the necessary functions to initialize the page
document.addEventListener("DOMContentLoaded", function() {
  renderProductCards();
  renderCartItemsOnLoad();
});