// Aca voy a hacer la peticion a la api

document.addEventListener("DOMContentLoaded", () =>{

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    const renderizarProductos = () => {

        // url="https://dummyjson.com/products?";  Pido 30 productos randoms
        url="https://dummyjson.com/products?limit=6";  // Pido un limite de 6 productos
        // url="https://dummyjson.com/products/category/groceries";  Pido los productos por categoria

        fetch(url)
        .then((response)=> response.json())
        .then((data)=> {

            let contenedorProductos = document.getElementById(
                "contenedor-productos"
            );

            for (const producto of data.products){
                // crear un elemento ; titulo ; precio

                let tarjetaProducto = document.createElement("article") ;
                tarjetaProducto.classList.add("tarjeta-producto") ;


                let imagenProducto = document.createElement("img") ;
                imagenProducto.src = producto.images[0];
                imagenProducto.alt = producto.description;


                let tituloProducto = document.createElement("h3") ;
                tarjetaProducto.classList.add("tarjeta-producto") ;
                tituloProducto.textContent = producto.title ;

                let precioProducto = document.createElement("p");
                precioProducto.textContent = `$${producto.price}` ;

                let btnAgregar = document.createElement("button");
                btnAgregar.textContent = "Agregar";

                btnAgregar.addEventListener("click",()=> {
                    alert(`${producto.title} agregado al carrito`);
                    agregarProducto(producto);
                    actualizarAgregados();
                });

                tarjetaProducto.appendChild(imagenProducto);
                tarjetaProducto.appendChild(tituloProducto);
                tarjetaProducto.appendChild(precioProducto);
                tarjetaProducto.appendChild(btnAgregar);

                contenedorProductos.appendChild(tarjetaProducto);
            }
        })
        .catch((err)=> console.error("Error: ",err));
    };


    const agregarProducto = (producto) => {

        carrito.push(producto);
        localStorage.setItem("carrito", JSON.stringify(carrito));

    }

    const actualizarAgregados = () => {
        const contadorCarrito = document.getElementById("contador-carrito");
        contadorCarrito.textContent = carrito.length ;
    }

    renderizarProductos();
    actualizarAgregados();
});








