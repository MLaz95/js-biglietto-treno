const tempC = Number(prompt("Insert a temperature value in °C to convert it to °F"));

if (Number.isNaN(tempC)){
    document.getElementById('temp').innerHTML = `I cannot convert that value. Refresh the page to retry.`;

} else {
    const tempF = tempC * (9 / 5) + 32;
    document.getElementById('temp').innerHTML = `The temperature is ${tempF}°F`
}

