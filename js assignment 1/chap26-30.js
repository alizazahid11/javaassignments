//Q1
var pos=prompt("enter a positive integer?");
document.writeln("number: "+pos);
if(pos<0){
    alert("invalid number")
}
else{
var rf = Math.round(pos);
document.writeln("<br>round off "+rf);
var fl = Math.floor(pos);
document.writeln("<br>Floor "+fl);
var cl = Math.ceil(pos);
document.writeln("<br>Ceil "+cl);}

//Q2
document.writeln("<br>--------------<br>")
var neg=parseFloat(prompt("enter a negative float?"));
document.writeln("number: "+neg);
if(neg>0){
    alert("invalid number")
}
else{
var rf2 = Math.round(neg);
document.writeln("<br>round off "+rf2);
var fl2 = Math.floor(neg);
document.writeln("<br>Floor "+fl2);
var cl2 = Math.ceil(neg);
document.writeln("<br>Ceil "+cl2);}
//Q3
document.writeln("<br>--------------<br>")
var num = -10;
var absNum = Math.abs(num);
document.writeln("the absoloute value of "+num+" is " +absNum);

//Q4
document.writeln("<br>--------------<br>")
var randomNumber =Math.floor(Math.random() * 6) +1; //1 is for round up
document.writeln("random dice number: "+randomNumber)

//Q5
document.writeln("<br>--------------<br>");
// Simulate a coin toss
var randomNumber = Math.random();  // generate a random number between 0 and 1
var coinValue;

if (randomNumber < 0.5) {
  coinValue = "Heads";
 
} else {
  coinValue = "Tails";
  
}

// Display the value of the coin in the browser
document.writeln("random value of coin is:  " + coinValue);
//Q6
document.writeln("<br>--------------<br>");
// Generate a random number between 1 and 100
var randNumber = Math.floor(Math.random() * 100) + 1;

// Display the random number in the browser
document.writeln("The random number between 1 and 100 : " +randNumber);
//Q7
document.writeln("<br>--------------<br>")
var weightInput = prompt("Enter your weight:");
var weightInKgs = parseFloat(weightInput) 
document.write("<br>the  weight of user is: " +weightInKgs+ "kilograms.");

 
//Q8
document.writeln("<br>--------------<br>");
var secno=Math.floor(Math.random() * 10) + 1;
var guess=prompt("enter a number between 1 to 10");
if (guess === secno) {
    alert("Congratulations! You guessed the secret number.");
  } else {
    alert(`Sorry, Try again!`);
  }

