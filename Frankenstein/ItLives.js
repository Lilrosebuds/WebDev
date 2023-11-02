const myName = "Frankenstein's Monster"

let favColor = "What's a color"

favColor = "blue"

console.log(favColor)

let age = 0

Isitaperson = {
    name: "Frankenstein's Monster",
    age: 0,
    favColor: "What's a Color",
    favFoods: ["I", "Don't", "Know"]
}

favThings = ["french", "blind people"]

const isAlive = true

const isDead = true

function describePerson(person) {
    alert("MISSING MONSTER ALERT: " + person.name)
    alert(
        `MISSING MONSTER ALERT: ${person.name} missing since 1818, made of dead people's body parts`
        )
}

describePerson(Isitaperson)

if (age >= 0) {
    if (myName === "Frankenstein's Monster") {
    alert("You're on your way to life! (but it will suck)")
    }
} else if (age < 0) {
    alert("your creator hates you")
} else {
    alert("are you even alive? Or are you dead like the body parts you are made of?")
}
// you can use || for or or && for and ie (if (age > 0 && myName === "Frankenstien's Monster") ) or do as above for and
// DOM means Document Object Model (lets you create website in JavaScript instead of just HTML)

document.getElementById("title").innerHTML = `Hello ${myName}`

const para = document.createElement("p")
para.innerHTML = "Frankenstein; or, The Modern Prometheus is an 1818 novel written by English author Mary Shelley."
document.getElementById('div1').appendChild(para)
