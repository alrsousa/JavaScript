function addition_Function() {
    var addition = 1 + 1;
    document.getElementById("Math").innerHTML = "1 + 1 = " + addition;
}

function Subtraction_Function() {
    var Subtraction = 2 - 1;
    document.getElementById("Math").innerHTML = "2 - 1 = " + Subtraction;
}

function multiplication() {
    var simple_Math = 3 * 2;
    document.getElementById("Math").innerHTML = "3 * 2 = " + simple_Math;
}

function division() {
    var simple_Math = 30 / 6;
    document.getElementById("Math").innerHTML = "30 / 6 = " + simple_Math;
}

function modulus_Operator() {
    var simple_Math = 24 % 5;
    document.getElementById("Math").innerHTML = "When you divide 24 by 5 you have a remainder of: " + simple_Math;
}

function increment_Operator() {
    var x = 10;
    x++;
    document.write(x);
}

function decrement_Operator() {
    var x= 0.25;
    x--;
    document.write(x);
}

window.alert(Math.random() * 100);