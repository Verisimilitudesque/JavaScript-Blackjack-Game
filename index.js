// Card operators 
let firstCard = getRandomCard()
let secondCard = getRandomCard()
//Card array
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive  = true
let message = ""
// Stores Blackjack dealer message
let messageEL = document.getElementById("message-el")
// Stores sum of cards 
let sumEL = document.getElementById("sum-el")
// Stores cards
let cardsEL = document.getElementById("cards-el")

function getRandomCard() {



}

function startGame() {

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

function newCard() {
    
    let card = getRandomCard()
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()

}



