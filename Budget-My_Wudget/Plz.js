function makeBudget () {
    let income = document.getElementById("incomeInput").value;
    let expense1 = document.getElementById("expenseInput").value;
    let expense2 = document.getElementById("expenseInput2").value;
    let expense3 = document.getElementById("expenseInput3").value;
    let expense4 = document.getElementById("expenseInput4").value;
    let expense5 = document.getElementById("expenseInput5").value;
    let expense6 = document.getElementById("expenseInput6").value;

    let totalMoney = income - expense1 - expense2 - expense3 - expense4 - expense5 - expense6;
    document.getElementById(
        "Remaining"
        ).innerHTML = `Thou shalt have ${totalMoney} of Thy Monies Left`;

    if (totalMoney >= 0) {
        document.getElementById("advice1").innerHTML = `The Manner in Which Thou Best Savest Thy money is to Refrain from the Spendeth-ing of Thy Monies`
        document.getElementById("advice2").innerHTML = `Thou Hast Money! Rejoice!`
        document.getElementById("advice3").innerHTML = `Buyest of the Milk, Being the Only Thing Thou Art Able to Afford`
    } else if (totalMoney < 0) {
        document.getElementById("advice1").innerHTML = `Thou Cans't Spendeth Thy Monies if Thou Art Dead`
        document.getElementById("advice2").innerHTML = `Where Hast Thou Monies Gone? To the Tavern?`
        document.getElementById("advice3").innerHTML = `Thy Money! I Shall Mourn For Thy Soul!`
    }
    }
document.getElementById("expenseInput").addEventListener("click", function() {
    document.getElementsByName("Name")[0].placeholder=`This`;
});

document.getElementById("expenseInput2").addEventListener("click", function() {
    document.getElementsByName("Name2")[0].placeholder=`Is`;
});

document.getElementById("expenseInput3").addEventListener("click", function() {
    document.getElementsByName("Name3")[0].placeholder=`A`;
});

document.getElementById("expenseInput4").addEventListener("click", function() {
    document.getElementsByName("Name4")[0].placeholder=`Secret`;
});

document.getElementById("expenseInput5").addEventListener("click", function() {
    document.getElementsByName("Name5")[0].placeholder=`Hidden`;
});

document.getElementById("expenseInput6").addEventListener("click", function() {
    document.getElementsByName("Name6")[0].placeholder=`Message`;
});