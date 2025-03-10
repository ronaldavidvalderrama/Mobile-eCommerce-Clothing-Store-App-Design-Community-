document.addEventListener("DOMContentLoaded", function () {
    const filters = document.querySelectorAll(".filter");

    filters.forEach(filter => {
        filter.addEventListener("click", function () {
            // Quita la clase 'active' de todos los botones
            filters.forEach(btn => btn.classList.remove("active"));
            // Agrega la clase 'active' al botón presionado
            this.classList.add("active");
        });
    });
});