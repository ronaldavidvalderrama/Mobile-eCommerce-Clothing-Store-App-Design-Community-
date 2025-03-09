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
