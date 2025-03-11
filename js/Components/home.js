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


function toggleFavorite(button) {
    const img = button.querySelector("img");
    const isFavorite = button.classList.toggle("active");

    if (isFavorite) {
        img.src = "../storage/img/heart-white.png"; // Cambia al corazón lleno
    } else {
        img.src = "../storage/img/heart-Icon.png"; // Vuelve al corazón vacío
    }
}
