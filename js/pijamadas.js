const cardsContainer = document.querySelector(".cards");
const cards = document.querySelectorAll(".card");

// Para cuando se hace clic en cualquier card
cards.forEach(card => {
    card.addEventListener("click", () => {
    // Se elimina 'active' al clieckear
    cards.forEach(c => c.classList.remove("active"));
    // Se agrega 'active' al clickear
    card.classList.add("active");
    
    const index = parseInt(card.dataset.index);
    reorderCards(index);
    });
});

