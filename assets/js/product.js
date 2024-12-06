function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    updateLocalStorage();
    alert("¡Producto añadido al carrito con éxito! Para completar tu compra, dirígete a la pestaña 'Carrito' en el menú superior.");
}
