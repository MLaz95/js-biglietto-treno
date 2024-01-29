const tempC = prompt("Insert a temperature value in °C to convert it to °F");

const tempF = tempC * (9 / 5) + 32;
document.getElementById('temp').innerHTML = `The temperature is ${tempF}°F`