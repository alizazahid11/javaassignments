//Q1
var f_name=prompt("what is your first name?");
var l_name=prompt("what is your last name?");
var full_name=alert("hello welcome "+f_name+" "+l_name+"!");
//Q2
var mob=prompt("My favourite phone is:  ");
document.writeln("my favourite phone is: "+"<b>"+mob+"</b>");
document.writeln("<br>the length is: "+"<b>"+mob.length+"</b>");
//Q3
document.writeln("<br>-------------------");
var word="PAKISTANI";
document.writeln("<br>string:<b> PAKISTANI</b>");
var NChar = word.indexOf("N");
document.writeln("<br>Index of 'N': "+"<b>"+NChar +"</b>");
//Q4
document.writeln("<br>-------------------");
var text="HELLO WORLD";
document.writeln("<br>string:<b> HELLO WORLD</b>");
var lChar = text.lastIndexOf("L");
document.writeln("<br> Last Index of 'L': "+"<b>"+lChar +"</b>");
//Q5
document.writeln("<br>-------------------");
var wor="PAKISTANI";
document.writeln("<br>string:<b> PAKISTANI</b>");
// Find the character in a word use charAt
var ichar = wor.charAt(3);
document.writeln("<br>Character at index 3: "+"<b>"+ichar +"</b>");
//Q6

var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");

// Concatenate the first and last name into a full name variable
var fullName = firstName.concat(" ", lastName);
alert("Hello welcome " + fullName + "!");

//Q7
document.writeln("<br>-------------------");
var city="Hyderabad";
document.writeln("<br>city:<b> Hyderabad</b>");
var newText = city.replace(city,"islamabad");
document.writeln("<br>After replacment: "+"<b>"+newText+" </b>");

//Q8
document.writeln("<br>-------------------");
var message = "Ali and Sami are best friends. They play cricket and football together.";
var newand=message.replace(/and/g,"&");//the black slash g means finds all matches
document.writeln("<br>before replacment: "+"<b>"+message+" </b>");
document.writeln("<br>After replacment: "+"<b>"+newand+" </b>");

//Q9
document.writeln("<br>-------------------");
var ss="472"
document.writeln("<br>value:"+"<b>"+ ss+"</b>");
document.writeln("<br>Type:" +"<b>"+typeof ss+"</b>");
var inno=Number(ss);//we also use parseint and parsefloat
document.writeln("<br>value:"+"<b>"+ inno+"</b>");
document.writeln("<br>Type:"+"<b>"+typeof inno+"</b>");

//Q10
document.writeln("<br>-------------------");
var pp="peanuts";
document.writeln("<br>user input:"+"<b>"+ pp+"</b>");
pp=pp.toUpperCase();
document.writeln("<br>upper case:"+"<b>"+ pp+"</b>");

//Q11
document.writeln("<br>-------------------");
var ui=prompt("enter user input");
document.writeln("<br>userinput:"+ ui+"<br>");
function toTitleCase(str) { //function define
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
  }
  document.writeln("titlecase: ")
  document.writeln(toTitleCase(ui));//function call


//Q12
document.writeln("<br>-------------------");
var no=35.36
document.writeln("<br>Number:"+"<b>"+ no+"</b>");

var st=no.toString().replace(".","");
document.writeln("<br>result:"+"<b>"+ st+"</b>");

//Q13
document.writeln("<br>-------------------");
var username = prompt("Enter your username: ");

// Check if username contains any special characters
for (var i = 0; i < username.length; i++) {
  var charCode = username.charCodeAt(i);//charcode returns unicode of a char at a specified index(pos) in a string
  if (charCode === 64 || charCode === 46 || charCode === 44 || charCode === 33) {
    alert("Username contains invalid character(s). Please enter a valid username.");
    break;
  }
}

if (i === username.length) {
  alert("Username accepted: " + username);
}

//Q14
// define array of items
var items = ["cake", "apple pie", "cookie", "chips", "patties"];

// ask user for input and search for item in array
var searchItem = prompt("Welcome to ABC bakery what would you like to order? ").toLowerCase();
var itemFound = false;
document.writeln("<h3>WELCOME TO ABC BAKERY</h3>")
for (var i = 0; i < items.length; i++) {
  if (items[i].toLowerCase() === searchItem) {
    itemFound = true;
    break;
  }
}

// display message to user based on search result
if (itemFound) {
  document.writeln(searchItem + " is availabe at index " + i+" in our bakery");
} else {
    document.writeln("sorry "+searchItem + " is not available in our bakery");
}


//Q15
 document.writeln("<br>-------------------");
 var password = prompt("Enter your password: ");

// Check length of password
if (password.length < 6) {
    alert("Password is too short. Please enter a valid password.");
}
// Check if password starts with a number
else if (password.charCodeAt(0) >= 48 && password.charCodeAt(0) <= 57) {
    alert("Password should not start with a number. Please enter a valid password.");
}
// Check if password contains only alphanumeric characters
else {
    var containsLetter = false;
    var containsNumber = false;
    for (var i = 0; i < password.length; i++) {
        var charCode = password.charCodeAt(i);
        if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
            containsLetter = true;
        }
        else if (charCode >= 48 && charCode <= 57) {
            containsNumber = true;
        }
    }
    if (!containsLetter || !containsNumber) {
        alert("Password must contain both alphabets and numbers. Please enter a valid password.");
    }
    else {
        document.writeln("Password accepted: " + password);
    }
}



//Q16
document.writeln("<br>-------------------<br>");
var university = "University of Karachi";

// var ar = university.split(" ");

for (var i = 0; i < university.length; i++) {
  document.writeln(university.charAt(i)+ "<br>");
}

//Q17
document.writeln("<br>-------------------<br>");
var u_inp=prompt("enter any thing");
document.writeln("<br>user input: "+u_inp);
var ll=u_inp.slice(-1);//to print last character of user input
document.writeln("<br>last character of input "+ll);

//Q18
document.writeln("<br>-------------------<br>");
var string = "The quick brown fox jumps over the lazy dog";
var count = 0;
document.writeln("<br>"+string+"<br>")
// Split the string into individual words
var words = string.split(" ");

// Loop through the words and count the occurrences of "the"
for (var i = 0; i < words.length; i++) {
  if (words[i].toLowerCase() === "the") {
    count++;
  }
}

document.writeln("The word 'the' occurs " +count+ " times in the string.");
