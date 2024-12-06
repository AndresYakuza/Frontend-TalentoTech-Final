// Inicializamos el carrito desde localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Función para actualizar el carrito en localStorage
function updateLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Función para renderizar los productos en el carrito
function renderCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        cartItems.innerHTML += `
            <tr>
                <td>${item.name}</td>
                <td>$${item.price}</td>
                <td>
                    <input type="number" class="form-control" value="${item.quantity}" min="1" data-index="${index}">
                </td>
                <td>$${itemTotal.toFixed(2)}</td>
                <td>
                    <button class="btn btn-danger btn-sm" data-index="${index}">Eliminar</button>
                </td>
            </tr>
        `;
    });

    cartTotal.textContent = total.toFixed(2);
}

// Función para actualizar cantidades
function updateQuantity(index, quantity) {
    cart[index].quantity = quantity;
    updateLocalStorage();
    renderCart();
}

// Función para eliminar un producto del carrito
function removeItem(index) {
    cart.splice(index, 1);
    updateLocalStorage();
    renderCart();
}

// Evento para manejar cambios en las cantidades
document.getElementById('cart-items').addEventListener('input', (event) => {
    const index = event.target.getAttribute('data-index');
    const quantity = parseInt(event.target.value);
    if (quantity > 0) {
        updateQuantity(index, quantity);
    }
});

// Evento para manejar la eliminación de productos
document.getElementById('cart-items').addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-danger')) {
        const index = event.target.getAttribute('data-index');
        removeItem(index);
    }
});

// Evento para proceder al pago
document.getElementById('checkout-btn').addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Tu carrito está vacío');
    } else {
        alert('Redirigiendo al pago...');
        // Redirigir al pago o procesar el pedido
    }
});

// Renderizamos el carrito al cargar la página
renderCart();
