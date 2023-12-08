document.getElementById("Infor").addEventListener("mouseover", function() {
    document.getElementById("greeting").innerHTML = "Click Here to Learn More About Me!";
});

document.getElementById("Home").addEventListener("mouseover", function() {
    document.getElementById("greeting").innerHTML = "Click Here to Return To Home!";
});

document.getElementById("Exper").addEventListener("mouseover", function() {
    document.getElementById("greeting").innerHTML = "Clicking Does Nothing, You're Already Here!";
});

document.getElementById("greeting").addEventListener("mouseover", function() {
    document.getElementById("greeting").innerHTML = "Everything that Mind of Theirs Can Imagine about my Experience in this Class can be Found";
});

function calcCatAge() {
    kittenAge = document.getElementById("catAge").value;
    catAge = kittenAge * 4;
    document.getElementById(
        "cat-age"
    ).innerHTML = `Your number multiplied by 4 is ${catAge}! Did you enjoy the game?`;
}