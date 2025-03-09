document.addEventListener("DOMContentLoaded", function () {
    const minusBtn = document.getElementById("minus-btn");
    const plusBtn = document.getElementById("plus-btn");
    const quantityText = document.getElementById("quantity-value");

    let quantity = 1; // Cantidad inicial

    // Evento para disminuir
    minusBtn.addEventListener("click", function () {
        if (quantity > 1) {
            quantity--;
            quantityText.textContent = quantity;
        }
    });

    // Evento para aumentar
    plusBtn.addEventListener("click", function () {
        quantity++;
        quantityText.textContent = quantity;
    });
});
