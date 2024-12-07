let contador = parseInt(localStorage.getItem('carritoContador')) || 0;

function updateCartCounter() {
    const cartCounterElement = document.getElementById('cart-counter');
    if (cartCounterElement) {
        cartCounterElement.textContent = contador;
    }
}

function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    updateLocalStorage();
    alert("¡Producto añadido al carrito con éxito! Para completar tu compra, dirígete a la pestaña 'Carrito' en el menú superior.");
    
    contador++;
    localStorage.setItem('carritoContador', contador);
    updateCartCounter(); // Actualiza el contador en el DOM
}

// Llamada inicial al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    updateCartCounter();
});
