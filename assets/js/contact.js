// Manejo del formulario de contacto
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("Por favor, completa todos los campos antes de enviar.");
        return;
    }

    // Simulación de envío (puedes integrar un backend aquí)
    alert(`Gracias por tu mensaje, ${name}. Te contactaremos pronto a ${email}.`);
    this.reset(); // Reinicia el formulario
});
