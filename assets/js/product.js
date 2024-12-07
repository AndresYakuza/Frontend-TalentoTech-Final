let contador = parseInt(localStorage.getItem('carritoContador')) || 0;

function updateCartCounter() {
    const cartCounterElement = document.getElementById('cart-counter');
    if (cartCounterElement) {
        cartCounterElement.textContent = contador;
    }
}

function showToast(duration = 4000) { // Duración predeterminada de 5 segundos
    const toastElement = document.getElementById('productToast');
    const toast = new bootstrap.Toast(toastElement, {
        autohide: true, 
        delay: duration 
    });
    toast.show();
}

function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    updateLocalStorage();

    showToast(1500); 
    contador++;
    localStorage.setItem('carritoContador', contador);
    updateCartCounter();
}


// Llamada inicial al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    updateCartCounter();
});
