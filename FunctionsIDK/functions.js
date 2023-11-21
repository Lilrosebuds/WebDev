//Fortune Telling :)

function tellFortune() {
    
    numOfChild = document.getElementById("children").value;
    wifeOrHusband = document.getElementById("name").value;
    sillyJob = document.getElementById("jobby").value;

    document.getElementById(
        "fortune"
        ).innerHTML = `You will be an ${sillyJob}, and married to ${wifeOrHusband} with ${numOfChild} kids.`;

}

//dog age

function calcCatAge() {
    kittenAge = document.getElementById("catAge").value;
    catAge = kittenAge * 7;
    document.getElementById(
        "cat-age"
    ).innerHTML = `your cat is ${catAge} years old in cat years!`;
}

//supply???

function calcSupply(){
    age = document.getElementById("age").value;
    amountPerDay = document.getElementById("amount-per-day").value;

    maxAge = 100;
    amountPerYear = amountPerDay * 365.25;
    totalAmount = (maxAge - age) * amountPerYear;
    document.getElementById(
        "supply"
        ).innerHTML = `You will need ${totalAmount} to last you until the ripe old age of ${maxAge}.`;
    


}

//circle :)

function calcCirc(radius) {
    radius = document.getElementById("radius").value;

    circumference = 2 * Math.PI * radius;
    document.getElementById(
        "circumference"
    ).innerHTML = `The circumference is ${circumference}`;
}

function calcArea(radius){
    radius = document.getElementById("radius2").value;
    area = Math.PI * radius * radius;
    document.getElementById(
        "area"
        ).innerHTML = `The area is ${area}`;
    
    

}
//too cold :(

function celsiusToFahren() {
    celsius = document.getElementById("celsius").value;

    fahren = celsius * 9 / 5 + 32;
    document.getElementById(
        "fahrenheit"
    ).innerHTML = `${celsius} C is ${fahren}F`;
}

function fahrenToCelsius() {
    fahren = document.getElementById("fahrenheit2").value;

    celsius = (fahren - 32) * 5 / 9;
    document.getElementById(
        "celsius2"
    ).innerHTML = `${fahren} C is ${celsius}F`;
}