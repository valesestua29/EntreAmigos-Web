// modal-galeria.js

function abrirModal(img) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("imgGrande");
    modal.style.display = "block";
    modalImg.src = img.src;
}

function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}