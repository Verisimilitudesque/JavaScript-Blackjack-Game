let player = {
    name: "Per",
    chips: 145
}

//Card array
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive  = false
let message = ""
// Stores Blackjack dealer message
let messageEL = document.getElementById("message-el")
// Stores sum of cards 
let sumEL = document.getElementById("sum-el")
// Stores cards
let cardsEL = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

//Randomizes cards
function getRandomCard() {

    let cardsum =  Math.floor( Math.random() * 13 ) + 1

    if (cardsum > 10) {
        return 10
    } else if (cardsum == 1) {
        return 11
    } else {
        return cardsum
    }
   
}
// Initiates game
function startGame() {

    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()

}

function renderGame() {
    // Displays cards
    cardsEL.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {

        cardsEL.textContent += cards[i] + " "
    
    }
    sumEL.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You have a blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game."
        isAlive = false
    }

    messageEL.textContent = message
}

// Allows player to draw new card
function newCard() {
//Checks if player has too many cards
    if (isAlive === true && hasBlackJack === false ) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        console.log(cards)
        renderGame()
    }

}




