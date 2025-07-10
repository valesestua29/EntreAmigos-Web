// Aca voy a trabajar con el carrito de compras

document.addEventListener("DOMContentLoaded", () => {

    const renderizarProductos = () => {
        let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

        productosEnCarrito();

        let seccionProductos = document.getElementById("contenedor-carrito");
        seccionProductos.innerHTML = "";

        if (!carrito.length) {
            let mensajeCarrito = document.createElement("p");
            mensajeCarrito.classList.add("mensaje-carrito");
            mensajeCarrito.textContent = "El carrito está vacío";

            seccionProductos.appendChild(mensajeCarrito);
        } else {

            carrito.forEach((elemento, index) => {
                let tarjetaProducto = document.createElement("article");
                tarjetaProducto.classList.add("producto-carrito");

                let imgProducto = document.createElement("img");
                imgProducto.src = elemento.images[0];

                let tituloProducto = document.createElement("h3");
                tituloProducto.textContent = elemento.title; 

                let precioProducto = document.createElement("p");
                precioProducto.textContent = `$${elemento.price}`;

                // Botón para eliminar producto
                let btnEliminar = document.createElement("button");
                btnEliminar.classList.add("btn-eliminar-carrito");
                btnEliminar.textContent = "Eliminar";

                btnEliminar.addEventListener("click", () => {
                    eliminarProducto(index);
                });

                tarjetaProducto.appendChild(imgProducto);
                tarjetaProducto.appendChild(tituloProducto);
                tarjetaProducto.appendChild(precioProducto);
                tarjetaProducto.appendChild(btnEliminar);

                seccionProductos.appendChild(tarjetaProducto);
            });

            renderizarBotones();
        }
    };

    const renderizarBotones = () => {
        let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

        let divAcciones = document.getElementById("acciones-carrito");
        divAcciones.innerHTML = "";

        if (carrito.length) {
            let btnVaciar = document.createElement("button");
            btnVaciar.textContent = "Vaciar carrito";

            btnVaciar.addEventListener("click", () => {
                vaciarCarrito();
            });

            let btnFinalizar = document.createElement("button");
            btnFinalizar.textContent = "Finalizar compra";

            btnFinalizar.addEventListener("click", () => {
                let confirmado = confirm("¿Deseas finalizar la compra?");
                if (confirmado) {
                    alert("¡Gracias por tu compra!");
                    localStorage.removeItem("carrito");
                    window.location.href = "./adicionales.html";
                }
            });

            divAcciones.appendChild(btnVaciar);
            divAcciones.appendChild(btnFinalizar);
        }
    };

    const productosEnCarrito = () => {
        let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
        let contadorCarrito = document.getElementById("contador-carrito");
        if (contadorCarrito) {
            contadorCarrito.textContent = carrito.length;
        }
    };

    const eliminarProducto = (indice) => {
        let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
        carrito.splice(indice, 1);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        alert("Eliminado");
        renderizarProductos();
    };

    const vaciarCarrito = () => {
        localStorage.removeItem("carrito");
        alert("Vaciando carrito");
        renderizarProductos();
    };

    renderizarProductos();
});


