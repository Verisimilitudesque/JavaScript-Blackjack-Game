// Card operators 

let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive  = true

let message = ""

if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂"
} else if (sum === 21) {
    message = "Woohoo! You have a blackjack! 🥳"
    hasBlackJack = true
} else {
    message = "You're out of the game. 😭"
    isAlive = false
}


// Cash out yer cashhhh

console.log(message)