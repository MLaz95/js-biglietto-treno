let playerHand = prompt("Let's play! choose 'rock' 'paper' or 'scissors'")
// let playerHand = "scissors";


// script picks random hand value
// let rndHand = "paper";

let rndHand = Math.floor(Math.random() * 3) + 1;

if (rndHand == 1){
    rndHand = "rock";
} else if (rndHand == 2){
    rndHand = "paper";
} else{
    rndHand = "scissors";
}
console.log(rndHand);

// determines who won
if (playerHand != "rock" && playerHand != "paper" && playerHand != "scissors"){
    document.getElementById("result").innerHTML = "That's not allowed! Refresh if you actually feel like playing."
} else if (playerHand == rndHand){
    document.getElementById("result").innerHTML = "It's a tie! Let's play again!"
} else if (playerHand == "rock" && rndHand == "paper" || playerHand == "paper" && rndHand == "scissors" || playerHand == "scissors" && rndHand == "rock"){
    document.getElementById("result").innerHTML = "Hehe gotcha, I win. Wanna try again?"
} else {
    document.getElementById("result").innerHTML = "Aaarrhg you won! Again, one more time!"
}