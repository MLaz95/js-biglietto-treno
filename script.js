const km = prompt("Quanto dista la tua destinazione in chilometri?");
const age = prompt ("Quanti anni hai?");

let price = Number(km) * 0.21

if (age < 18){
    price *= 1 - 0.2;

} else if (age > 65){
    price *= 1 - 0.4;
}

document.getElementById("ticket-price").innerHTML = `Il prezzo del tuo biglietto è ${price.toFixed(2)}€.`;

