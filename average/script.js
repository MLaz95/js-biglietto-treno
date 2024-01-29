const firstValue = Number(prompt("I will calculate the average of three values. Insert the first value."));
const secondValue = Number(prompt("Insert the second value."));
const thirdValue = Number(prompt("Insert the third value."));

if(Number.isNaN(firstValue) || Number.isNaN(secondValue) || Number.isNaN(thirdValue)){
    document.getElementById("average").innerHTML = "I cannot average the provided values. Refresh the page to retry.";

} else{
    const averageValue = (firstValue + secondValue + thirdValue) / 3;
    document.getElementById("intro").innerHTML = `The average of ${firstValue}, ${secondValue}, and ${thirdValue} is`
    document.getElementById("average").innerHTML = averageValue.toFixed(2);
}
