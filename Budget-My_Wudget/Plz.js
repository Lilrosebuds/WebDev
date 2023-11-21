function makeBudget () {
    income = document.getElementById("incomeInput").value;
    expense1 = document.getElementById("expenseInput").value;
    expense2 = document.getElementById("expenseInput2").value;
    expense3 = document.getElementById("expenseInput3").value;
    expense4 = document.getElementById("expenseInput4").value;
    expense5 = document.getElementById("expenseInput5").value;
    expense6 = document.getElementById("expenseInput6").value;

    totalMoney = income - expense1 - expense2 - expense3 - expense4 - expense5 - expense6;
    document.getElementById(
        "Remaining"
        ).innerHTML = `You will have ${totalMoney} following purchases`;

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

// this is a secret hidden message