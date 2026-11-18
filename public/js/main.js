// Selects all character cards 
const characterCards = document.querySelectorAll(".profile-card")

// If a character card is clicked, it toggles its elimnated class
characterCards.forEach(card => {
        card.addEventListener("click", () => {
            card.classList.toggle("eliminated")
        })
    }
)