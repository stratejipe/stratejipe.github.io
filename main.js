function color() {
    document.documentElement.style.backgroundImage = "linear-gradient(90deg, rgb(0, 70, 161) 0%, rgb(40, 17, 170) 35%, rgb(255, 123, 0) 100%)";
}

var cryptoAmount = 0;

function cryptoAdder() {
    cryptoAmount++;
    document.getElementById("counter").innerHTML = cryptoAmount;
}

var clicks = 0;

function getCPS() {
}

function cpsAdder() {
    clicks++;
}

setInterval(() => {document.getElementById("CPS").innerHTML = clicks; clicks = 0;}, 1000);