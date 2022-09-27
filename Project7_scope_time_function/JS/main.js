var X = 10;
function Add_numbers_1() {
  document.write(20 + X + "<br>")
}
function Add_numbers_2() {
  document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();

function myfunction() {
  var sentence = "I am learning";
  sentence += " a lot from this course!";
  document.getElementById("Concatenate").innerHTML = sentence;
}

function addition_Function() {
  var addition = 2 + 2;
  document.getElementById("Math").innerHTML= "2 + 2 = " + addition;
}



function myFunction() {
  var letter = document.getElementById("myInput").value;
  var text;

  // If the letter is "c"
  if (letter === "c") {
    text = "Spot on! Good job!";
    
  // If the letter is "b" or "d"
  } else if (letter === "b" || letter === "d") {
    text = "Close, but not close enough.";
    
  // If the letter is anything else
  } else {
    text = "Waaay off..";
  }
  document.getElementById("demo").innerHTML = text;
}

function Time_function() {
  var Time = new Date().getHours();
  var Reply;
  if (Time < 12 == Time > 0) {
    Reply = Time + "It is the morning.";
  }
  else if (Time > 23 == Time < 18) {
    Reply = Time +  "It is the afternoon.";
  }
  else {
    Reply = Time + "It is evening time.";
  }
  document.getElementById("Time_of_day").innerHTML = Reply;
}