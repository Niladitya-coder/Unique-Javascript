const cardValues = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H'];
let flippedCards = [];
let matchedCards = [];

function shuffleCards() {
    for (let i = cardValues.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cardValues[i], cardValues[j]] = [cardValues[j], cardValues[i]];
    }
}

function createCards() {
    const cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = '';

    cardValues.forEach((value, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.index = index;
        card.textContent = value;
        card.addEventListener('click', flipCard);
        cardContainer.appendChild(card);
    });
}

function flipCard() {
    if (flippedCards.length < 2 && !flippedCards.includes(this)) {
        this.classList.add('flipped');
        flippedCards.push(this);
    }

    if (flippedCards.length === 2) {
        setTimeout(checkMatch, 1000);
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;
    const value1 = cardValues[card1.dataset.index];
    const value2 = cardValues[card2.dataset.index];

    if (value1 === value2) {
        matchedCards.push(card1, card2);
        card1.removeEventListener('click', flipCard);
        card2.removeEventListener('click', flipCard);
    } else {
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
    }

    flippedCards = [];

    if (matchedCards.length === cardValues.length) {
        alert('Congratulations! You won the game!');
    }
}

function resetGame() {
    matchedCards = [];
    flippedCards = [];
    createCards();
}

document.addEventListener('DOMContentLoaded', () => {
    shuffleCards();
    createCards();
});
