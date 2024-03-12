document.addEventListener("DOMContentLoaded", function() {
    const menuHamburguer = document.getElementById("menu-hamburguer");
    const bottomContainer = document.querySelector(".bottom-container nav");
    const links = document.querySelectorAll(".bottom-container nav ul li a");

    menuHamburguer.addEventListener("click", function() {
        bottomContainer.classList.toggle("active");
    });

    links.forEach(link => {
        link.addEventListener("click", function() {
            bottomContainer.classList.remove("active");
        });
    });

    document.addEventListener("touchstart", function(event) {
        if (!event.target.closest(".bottom-container")) {
            bottomContainer.classList.remove("active");
        }
    });

    

});