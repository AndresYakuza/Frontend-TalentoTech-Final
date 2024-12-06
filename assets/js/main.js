console.log("E-Commerce Artesanales: Proyecto Iniciado");

const cartItems = [];
const addToCart = (productName, productPrice) => {
    const item = { name: productName, price: productPrice };
    cartItems.push(item);
    console.log(cartItems);
};

document.querySelectorAll('.btn-primary').forEach((button, index) => {
    button.addEventListener('click', () => {
        addToCart(`Producto ${index + 1}`, 10.00); // Ejemplo de producto
    });
});


const updateCartTotal = () => {
    const total = cartItems.reduce((acc, item) => acc + item.price, 0);
    document.getElementById('cart-total').textContent = total.toFixed(2);
};
