document.getElementById("Infor").addEventListener("mouseover", function() {
    document.getElementById("greeting").innerHTML = "Clicking Does Nothing, You're Already Here!";
});

document.getElementById("Home").addEventListener("mouseover", function() {
    document.getElementById("greeting").innerHTML = "Click Here to Return To Home!";
});

document.getElementById("Exper").addEventListener("mouseover", function() {
    document.getElementById("greeting").innerHTML = "Click Here to Play a Game!";
});

document.getElementById("greeting").addEventListener("mouseover", function() {
    document.getElementById("greeting").innerHTML = "Everything that Mind of Theirs Can Imagine about my Experience in this Class can be Found";
});