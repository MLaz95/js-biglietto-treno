const km = 100;
const age = 10;

let price = Number(km) * 0.21

if (age < 18){
    price *= 1 - 0.2;

} else if (age > 65){
    price *= 1 - 0.4;
}

document.getElementById("ticket-price").innerHTML = price.toFixed(2);

