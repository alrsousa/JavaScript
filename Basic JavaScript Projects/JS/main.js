/* Here I will make an alert using the window, just showing a message
   We can comment lines in blocks like these or in single lines like the next command
*/
// window.alert("Hello, World!");

// The next lines shows how to write a message in the screen browser and after showing a message using a variable
//document.write("Hello, world!");
//var A = "This is a dummy assignment!";
//window.alert(A);

// The next line show how to use the counter dash 
//document.write("Brian told May: \"We are the champions, my friend! And no time for loosers\"<br>\"Fear of the dark!\" May responded.");


// The few lines bellow show how to concatenate and write a message using a lot of lines as a poem
 document.write("\"My son ask for thyself another kingdom"
+ "<br>" +  "\"For that which I leave is too small for thee"
+ "<br>" +  "Near to the east"
+ "<br>" +  "In a part of ancient Greece"
+ "<br>" +  "In an ancient land called Macedonia"
+ "<br>" +  "Was born a son"
+ "<br>" +  "To Philip of Macedon"
+ "<br>" +  "The legend, his name was Alexander"
+ "<br>" +  "At the age of nineteen"
+ "<br>" +  "He became the Macedon King"
+ "<br>" +  "And he swore to free all of Asia Minor"
+ "<br>" +  "By the Aegean Sea"
+ "<br>" +  "In 334 B.C"
+ "<br>" +  "He utterly beat the armies of Persia"
+ "<br>" + "<br>" + "<br>" + "<b>" + "Iron Maiden -- Alexander the Great (Somewhere in the time)" + "</b>"); 


// Here I will show how to declare more than one variable in the same line, but don´t do it. It´s terrible to read
//var Singer = "Bruce Dickinson", Lead_Guitar = "Dave Murray", Guitar2 = "Adrian Smith", Guitar3 = "Janick Gers", Bass_Guitar = "Steve Harris", Drums = "Nicko McBrain";


// Now some examples using colors, strings and after printing with concatenates commands
var Singer = "Bruce Dickinson";
var Singer = Singer.fontcolor("red");

var Lead_Guitar = "Dave Murray";
var Lead_Guitar = Lead_Guitar.fontcolor("green");

var Guitar2 = "Adrian Smith";
var Guitar2 = Guitar2.fontcolor("yellow");

var Guitar3 = "Janick Gers";
var Guitar3 = Guitar3.fontcolor("gray");

var Bass_Guitar = "Steve Harris";
var Bass_Guitar = Bass_Guitar.fontcolor("pink");

var Drums = "Nicko McBrain";
var Drums = Drums.fontcolor("orange");

document.write("<br>" + "<br>" + "<br>" + "Singer: " + Singer + "<br>");
document.write("Lead Guitar: " + Lead_Guitar + "<br>");
document.write("Guitar 2: " + Guitar2 + "<br>");
document.write("Guitar 3: " + Guitar3 + "<br>");
document.write("Bass Guitar: " + Bass_Guitar + "<br>");
document.write("Drums: " + Drums + "<br>");

document.write("<br>" + "<br>" + "<br>" +  "<b>" + "Expression result: ");
document.write((3 + 10) + "</b>" + "<br>");
