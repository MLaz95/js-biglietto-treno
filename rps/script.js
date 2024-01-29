let playerHand = prompt("Let's play! choose 'rock' 'paper' or 'scissors'")
// let playerHand = "paper";
document.getElementById("player").innerHTML = `You chose ${playerHand}!`;



// script picks random hand value
// let rndHand = "rock";

let rndHand = Math.floor(Math.random() * 3) + 1;

if (rndHand == 1){
    rndHand = "rock";
} else if (rndHand == 2){
    rndHand = "paper";
} else{
    rndHand = "scissors";
}
console.log(rndHand);
document.getElementById("gon").innerHTML = `Gon picked ${rndHand}!`;


// determines who won
if (playerHand != "rock" && playerHand != "paper" && playerHand != "scissors"){
    document.getElementById("result").innerHTML = "I don't think that's allowed...are you sure you wanna play? (Press F5)"
    document.getElementById("gon-face").setAttribute("src", "./img/gon_null.jpeg")
    
} else if (playerHand == rndHand){
    document.getElementById("result").innerHTML = "It's a tie! Let's go again! (Press F5)"
    document.getElementById("gon-face").setAttribute("src", "./img/gon_tie.jpeg")

} else if (playerHand == "rock" && rndHand == "paper" || playerHand == "paper" && rndHand == "scissors" || playerHand == "scissors" && rndHand == "rock"){
    document.getElementById("result").innerHTML = "Hehe gotcha, I win. Wanna try again? (Press F5)"
    document.getElementById("gon-face").setAttribute("src", "./img/gon_win.jpeg")

} else {
    document.getElementById("result").innerHTML = "Aaarrhg you won! Again, one more time! (Press F5)"
    document.getElementById("gon-face").setAttribute("src", "./img/gon_lose.jpeg")
}