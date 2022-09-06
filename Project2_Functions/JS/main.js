function Function_Assigment13(){

    var txt = document.getElementById('txtInput').value;
//    alert("Your name is: " + txt);
	document.write("Your name is: " + txt); 

    var len = "You typed: ";
    len += txt.length;
    alert(len);	  
//    var len = txt.length;
//    alert("You typed: " + len + "  characters");

//	document.getElementByID("name").innerHTML = txt;
	document.write("<br>");
	
	document.write(len); 
	document.write("  characters");
}