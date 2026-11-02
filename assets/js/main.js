// Menu mobile : le bouton ☰ ouvre et ferme la liste des liens
const toggle = document.querySelector(".nav-toggle");
const liens = document.querySelector(".nav-links");

if (toggle && liens) {
    toggle.addEventListener("click", () => {
        const ouvert = liens.classList.toggle("open");
        toggle.setAttribute("aria-expanded", ouvert ? "true" : "false");
    });
}

const cartes = document.querySelectorAll(".flip-carte");

cartes.forEach((carte) => {
    carte.addEventListener("click", () => {
        carte.classList.toggle("retournee");
    });
});