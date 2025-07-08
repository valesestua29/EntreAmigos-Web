// BOTON HAMBURGUESA // 

console.log("JS cargado");


// Seleccionar elementos
const abrirMenu = document.getElementById("abrir-menu");
const cerrarMenu = document.getElementById("cerrar-menu");
const nav = document.getElementById("nav");

// Evento para abrir el menú
abrirMenu.addEventListener("click", () => {
    nav.classList.add("visible");
});

// Evento para cerrar el menú
cerrarMenu.addEventListener("click", () => {
    nav.classList.remove("visible");
});