const getRandomCard = () => {
    let random = Math.floor(Math.random() * 13) + 1; 
    if(random === 1){
        return 11;
    }
    else if(random === 11 || random === 12 || random === 13){
        return 10
    }
    else {
    return random;
    }
}
let cards = []
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el")

let player = {
    name: "Guest",
    chips: 145
}

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips + "(Coming soon)";


const startGame = () => {
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    isAlive = true;
    renderGame();
}

const renderGame = () => {
    cardsEl.textContent = "Cards: "
    for(let i = 0; i < cards.length; i++) {
         cardsEl.textContent += cards[i] + " ";
    }
    
    sumEl.textContent = "sum: " + sum
    if(sum <= 20) {
        message = "Do you want to draw a new card?"
    }
    else if(sum === 21) {
        hasBlackJack = true;
        message = "You got BlackJack, congrats"
    }
    else {
        isAlive = false;
        message = "You lost the game!"
    }
    messageEl.textContent = message;
}


const newCard = () => {
    if(isAlive === true && hasBlackJack === false){
    let card = getRandomCard();
    sum += card;
    cards.push(card)
    renderGame();
    }
    else {
        alert('Press START GAME')
    }
}

