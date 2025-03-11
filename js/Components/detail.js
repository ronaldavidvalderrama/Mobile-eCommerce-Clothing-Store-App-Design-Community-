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

// Evento para mostrar/ocultar el texto adicional
document.addEventListener("DOMContentLoaded", function() {
    const readMore = document.querySelector(".read-more");
    const moreText = document.querySelector(".more-text");

    readMore.addEventListener("click", function() {
        if (moreText.style.display === "none" || moreText.style.display === "") {
            moreText.style.display = "inline";
            readMore.textContent = "Read Less...";
        } else {
            moreText.style.display = "none";
            readMore.textContent = "Read More...";
        }
    });
});


// Evento para cambiar el tamaño de los botones de tamaño

document.addEventListener("DOMContentLoaded", function () {
    const sizeButtons = document.querySelectorAll(".size");

    sizeButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Quitar la clase 'selected' de todos los botones
            sizeButtons.forEach(btn => btn.classList.remove("selected"));
            // Agregar la clase 'selected' solo al botón clicado
            this.classList.add("selected");
        });
    });
});




// Modal de Confirmación
document.addEventListener("DOMContentLoaded", function () {
    const cartFooter = document.querySelector(".botton-cart");
    const modal = document.getElementById("cartModal");
    const cancelBtn = document.getElementById("cancelModal");
    const confirmBtn = document.getElementById("confirmAddToCart");
    const cartButton = document.querySelector(".botton-cart .info a");
    const discount = document.querySelector(".discount"); // Precio tachado

    // Ocultar el modal al inicio
    modal.style.display = "none";

    // Mostrar modal al hacer clic en el footer
    cartFooter.addEventListener("click", function () {
        modal.style.display = "flex"; // Mostrar modal
    });

    // Ocultar modal al hacer clic en "Cancelar"
    cancelBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Acción al confirmar
    confirmBtn.addEventListener("click", function () {
        modal.style.display = "none"; // Cierra el modal

        // Ocultar ícono y precio durante "Processing..."
        discount.style.display = "none";

        // Mantener el mismo tamaño y centrar el texto
        cartButton.textContent = "Processing...";
        cartButton.style.opacity = "0.6";

        // Simula un tiempo de carga de 2 segundos
        setTimeout(() => {
            cartButton.textContent = "Added ✅";
            cartButton.style.opacity = "1";
            cartButton.style.pointerEvents = "auto";

            // Redirigir a checkout.html después de 2 segundos
            setTimeout(() => {
                window.location.href = "checkout.html";
            }, 2000);
        }, 2000);
    });
});

