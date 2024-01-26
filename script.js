const km = Number(prompt("Quanto dista la tua destinazione in chilometri?"));
const age = Number(prompt ("Quanti anni hai?"));

if(Number.isNaN(km) || Number.isNaN(age)){
    document.getElementById("ticket-price").innerHTML = "Non posso calcolare il prezzo del tuo biglietto con questi parametri. Ricarica la pagina per riprovare.";

} else{
let price = km * 0.21

    if (age < 18){
    price *= 1 - 0.2;

    } else if (age > 65){
    price *= 1 - 0.4;
    }

    document.getElementById("ticket-price").innerHTML = `Il prezzo del tuo biglietto è ${price.toFixed(2)}€.`;
}


    

