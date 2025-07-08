// BOTON HAMBURGUESA // 

const nav= document.querySelector("#nav");
const abrir= document.querySelector("#abrir-menu");
const cerrar= document.querySelector("#cerrar-menu");

abrir.addEventListener("click", ()=> {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", ()=>{
    nav.classList.remove("visible");
})