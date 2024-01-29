const firstValue = Number(prompt("I will calculate the average of three values. Insert the first value."));
const secondValue = Number(prompt("Insert the second value."));
const thirdValue = Number(prompt("Insert the third value."));

const averageValue = (firstValue + secondValue + thirdValue) / 3;
document.getElementById("average").innerHTML = averageValue.toFixed(2);