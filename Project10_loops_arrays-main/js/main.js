// While LOOP

document.getElementById("btn1").onclick = function () {
    let count = 0;
    let rands = [];
    while (count < 5) {
        rands.push((Math.random() * 5).toPrecision(4));
        count++;
    }
    document.getElementById("Loop").innerHTML = rands;
}

// For LOOP
let instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Lead Guitar"];
let res = "";

document.getElementById("btn2").onclick = function () {
    for (let count = 0; count < instruments.length; count++) {
        res += instruments[count] + "<br>";
    }
    document.getElementById("Instruments").innerHTML = res;
}

// Object 

document.getElementById("btn3").onclick = function () {
    let car = {
        make: "Ford ",
        model: "Focus",
        year: "2022",
        color: "black",
        description: function () {
            return "The car is a " + this.year + " " + this.color + " " + this.make + " " + this.model;
        }
    };
    document.getElementById("Car").innerHTML = car.description();
}

