document.addEventListener("DOMContentLoaded", function () {
    function changeQuantity(change, element) {
        let quantitySpan = element.parentElement.querySelector(".quantity"); 
        let currentQuantity = parseInt(quantitySpan.innerText);
        let newQuantity = currentQuantity + change;

        // Evita valores menores a 1
        if (newQuantity < 1) newQuantity = 1;

        quantitySpan.innerText = newQuantity;
    }

    // Asignar eventos a los botones
    document.querySelectorAll(".quantity-btn").forEach(button => {
        button.addEventListener("click", function () {
            let change = this.alt === "Mas" ? 1 : -1;
            changeQuantity(change, this);
        });
    });
});


/***********footer************/

document.addEventListener("DOMContentLoaded", () => {
    const payButton = document.getElementById("payButton");

    payButton.addEventListener("click", () => {
        // Deshabilitar el botón y cambiar su estado a "Procesando..."
        payButton.disabled = true;
        payButton.innerText = "Processing...";

        // Simular un tiempo de procesamiento
        setTimeout(() => {
            // Mostrar alerta con SweetAlert2
            Swal.fire({
                title: "Payment Successful!",
                text: "Your order has been placed successfully.",
                icon: "success",
                confirmButtonText: "OK",
                timer: 10000, // Se cierra automáticamente en 3 segundos
            });

            // Cambiar estado del botón nuevamente
            payButton.innerText = "Pay";
            payButton.disabled = false;

        }, 2000); // Simula un procesamiento de 2 segundos
    });
});

