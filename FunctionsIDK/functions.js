//Fortune Teller

function tellFortune() {
    e.preventDefault();

    numOfChildren = document.getElementById("children").value;
    partnerName = document.getElementById("partner").value;
    location = document.getElementById("location").value;
    jobTitle = document.getElementById("job").value;

    document.getElementById("fortune").innerText = `You will be a(n) ${jobTitle} in ${location}, and married to ${partnerName} with ${numOfChildren} kids.`;
}

//Dog Age

function calculateDogAge(puppyAge){
    dogAge = puppyAge * 7;
    console.log(`Your doggo is ${dogAge} years old in dog years`);
}

//Supply

function calculateSupply(age, amountPerDay){
    maxAge = 88;
    amountPerYear = amountPerDay * 365.25;
    totalAmount = (maxAge - age) * amountPerYear
    console.log(`You will need ${totalAmount} to last you until the ripe old age of ${maxAge}`);
}

//Circumfrence

function calcCircumfrence(radius){
    circumfrence = 2 * Math.PI * radius;
    console.log(`The circumfrence is ${circumfrence}`);
}
//Area

const calcArea = (radius) => console.log(`The Area is ${Math.PI * radius * radius}`);

//celsiusToFahrenheit

function celsiusToFahrenheit(celsius){
    fahrenheit = celsius * 9 / 5 + 32;
    console.log(`${celsius} degrees Celsius is ${fahrenheit} degrees Fahrenheit`);
}

//fahrenheitToCelsius

function fahrenheitToCelsius(fahrenheit){
    celsius = (fahrenheit - 32) * 5 / 9;
    console.log(`${fahrenheit} degrees Fahrenheit is ${celsius}C degrees Celsius`)
}