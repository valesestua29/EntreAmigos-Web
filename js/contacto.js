document.addEventListener("DOMContentLoaded", function() {

    // Voy a trabajar con el formulario por lo que lo selecciono desde su clase 
    const form = document.querySelector(".formulario");

    // Agrego un evento al momento de submitir
    form.addEventListener("submit", function(event) {

        // Primero reviso si quedan errores previos
        const existingErrors = document.querySelectorAll(".error-msg");
        existingErrors.forEach(e => e.remove());

        let isValid = true;

        // Obtengo los valores ingresados por el usuario en cada Input y los guardo en una constante
        // Uso una constante ya que los valores no van a cambiar a lo largo del codigo
        const nombre = document.getElementById("nombre");
        const email = document.getElementById("email");
        const nombreAgasajado = document.getElementById("nombreAgasajado");
        const fechaEvento = document.getElementById("fechaEvento");
        const mensaje = document.getElementById("mensaje");

        // Creo una funcion para mostrar errores en caso de que el usuario cargue mal un dato
        function showError(input, message) {
            const error = document.createElement("div");
            error.className = "error-msg";
            error.style.color = "red";
            error.style.fontSize = "12px";
            error.textContent = message;
            input.parentNode.appendChild(error);
        }


        // UTILIZO IF PARA VALIDAR LOS DATOS INGRESADOS POR LOS USUARIOS //

        // Validación del nombre
        if (nombre.value.trim() === "") {
            showError(nombre, "Por favor ingrese su nombre.");
            isValid = false;
        }

        // Validación del email
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/i;
        if (email.value.trim() === "") {
            // Si la casilla de email queda vacia
            showError(email, "Por favor ingrese su email.");
            isValid = false;
        } else if (!emailPattern.test(email.value.trim())) {
            // Si la casilla de email no es valida
            showError(email, "Ingrese un email válido.");
            isValid = false;
        }

        // Validación del nombre del agasajado
        if (nombreAgasajado.value.trim() === "") {
            showError(nombreAgasajado, "Por favor ingrese el nombre.");
            isValid = false;
        }

        // Validación de la fecha del evento
        if (fechaEvento.value.trim() === "") {
            showError(fechaEvento, "Por favor seleccione la fecha del festejo.");
            isValid = false;
        }

        // Validación del mensaje
        if (mensaje.value.trim() === "") {
            showError(mensaje, "Por favor escriba un comentario.");
            isValid = false;
        }

        // Si hay errores el formulario no se envia.
        if (!isValid) {
            event.preventDefault();
        }
    });
});