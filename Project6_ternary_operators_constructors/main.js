// Use Operation  Ternary
function Ride_Function() {
    var Height, Can_ride;  // Initialize variables
    Height = document.getElementById("Height").value; // Assign variable value of user input
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";  // Validate statement and perform ternary operation
    document.getElementById("ride").innerHTML = Can_ride + " to ride.";  // Modify paragraph with result of operation
}


// Use Object Constructors
function Vehicle(Make, Model, Year, Color) { // Object Constructor Function
    this.Vehicle_Make = Make;  
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");  // Creates a new instance of Vehicle object with given properties
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {  // Modifies HTML paragraph with concatenated sentence using strings and properties of the object
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}
// Created based on Course Example
function voter(name, birthday, city, state) {
    this.voter_name = name;
    this.voter_birthday = birthday;
    this.voter_city = city;
    this.voter_state = state;
}
var x = new voter("Jimmy", "1/1/1970", "Halifax", "NS");
var y = new voter("Carter", "12/13/1925", "Moncton", "NB");
var z = new voter("Justin Song", "3/20/1987", "Winninpeg", "WP");
function register() {
    document.getElementById("New_and_This").innerHTML = 
    "New voter registration received from " + y.voter_name + ", living in " + 
    y.voter_city + ", " + y.voter_state + ", born on " + y.voter_birthday + ".";
    document.getElementById("extra").innerHTML = "Get out and vote, " + y.voter_name + "!!";
}
// Demonstration of attempt to use a reserved word as an identifier
//function test() {
    //  var var = 10;  // CAN NOT USE RESERVED WORD, var, AS AN IDENTIFIER
    //  document.getElementById("try").innerHTML = var;
//}


// Challenge based on Course Example
function checkEligibility(){
    var US, Age, Eligible;
    Age = document.getElementById("Age").value;
    Eligible = (Age>=18) ? "You are":"Sorry, you are not";
    document.getElementById("vote").innerHTML = Eligible + " eligible to vote.";
}


// Object Constructor Challenge
function pet(name, type, color) {
    this.PetName = name;
    this.PetType = type;
    this.PetColor = color;
}
myPet = new pet("Dizzy", "cat", "black");
function getPet() {
    document.getElementById("pets").innerHTML = 
    "Here is a new " + myPet.PetColor + " " + myPet.PetType + " named, " + myPet.PetName + "!";
}

// Nested functions
function nestIt() {  // Function called from HTML
    document.getElementById("Nested_Function").innerHTML = doesSomething();  // Returns result to document
    function doesSomething() {  // Concatenates a string using the nested function
        var Q = "Starts something"; // Assigns variable
        function doesMore() {  // Nested function
            Q = Q + " and adds more to it.";  // Concatenates a string to the variable
        }
        doesMore(); // Calls the nested function
        return Q;  // Returns result back to getElementById() method
    }
}