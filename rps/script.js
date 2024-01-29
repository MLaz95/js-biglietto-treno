
// script picks random hand value
let rndHand = Math.floor(Math.random() * 3) + 1;

if (rndHand == 1){
    rndHand = "rock";
} else if (rndHand == 2){
    rndHand = "paper";
} else{
    rndHand = "scissors";
}
console.log(rndHand);