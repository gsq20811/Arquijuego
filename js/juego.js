var x = 1;

function rollDice() {
    event.preventDefault();

    document.getElementById("die1").innerHTML = "Por favor espere...";
    document.getElementById("status").innerHTML = "";
    setTimeout(() => {
        var die1 = document.getElementById("die1");
        var status = document.getElementById("status");
        var d1 = Math.floor(Math.random() * 6) + 1;
        die1.innerHTML = "<img width=100px src='../imag/" + d1 + ".png'/>";
        status.innerHTML = "El numero del dado es: " + d1 + ".";
    }, 30);

}