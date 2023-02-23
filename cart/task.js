// Get all "add to cart" buttons
const addToCartButtons = document.querySelectorAll(".product__add");

// Create an empty cart object to store selected products and their quantities
const cart = {};

// Add event listener to each "add to cart" button
addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
        // Get the parent product element
        const product = button.closest(".product");

        // Get the product ID and quantity
        const productId = product.dataset.id;
        const quantity = parseInt(
            product.querySelector(".product__quantity-value").textContent
        );

        // Check if the product is already in the cart
        if (cart[productId]) {
            // If it is, add the new quantity to the existing quantity
            cart[productId] += quantity;
        } else {
            // If not, add a new entry for the product
            cart[productId] = quantity;
        }

        // Update the cart UI
        const cartProducts = document.querySelector(".cart__products");

        // Check if the product is already in the cart UI
        const existingCartProduct = cartProducts.querySelector(
            `[data-id="${productId}"]`
        );

        if (existingCartProduct) {
            // If it is, update the quantity
            existingCartProduct.querySelector(
                ".cart__product-count"
            ).textContent = cart[productId];
        } else {
            // If not, add a new cart product element
            const cartProduct = document.createElement("div");
            cartProduct.classList.add("cart__product");
            cartProduct.dataset.id = productId;
            cartProduct.innerHTML = `
        <img class="cart__product-image" src="${
            product.querySelector(".product__image").src
        }">
        <div class="cart__product-count">${cart[productId]}</div>
      `;
            cartProducts.appendChild(cartProduct);
        }
    });
});

// Get all quantity control buttons
const quantityControlButtons = document.querySelectorAll(
    ".product__quantity-control"
);

// Add event listener to each quantity control button
quantityControlButtons.forEach((button) => {
    button.addEventListener("click", () => {
        // Get the parent product element
        const product = button.closest(".product");

        // Get the quantity value element
        const quantityValue = product.querySelector(".product__quantity-value");

        // Get the current quantity value
        let quantity = parseInt(quantityValue.textContent);

        // Update the quantity value based on the button clicked
        if (button.classList.contains("product__quantity-control_dec")) {
            quantity = Math.max(1, quantity - 1);
        } else if (button.classList.contains("product__quantity-control_inc")) {
            quantity++;
        }

        // Update the quantity value element
        quantityValue.textContent = quantity;
    });
});
