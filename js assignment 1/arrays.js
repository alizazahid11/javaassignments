//Q1
var student_Arr=[];
//Q2
const student_array=[];
//Q3
var cities=["khi","hyd","mul","isb"];
//Q4
var num=[1,5,7,4,3,2];
//Q5
// Initialize an array of 5 boolean values
var boolArray = new Array(5).fill(false);

// Output the array
console.log(boolArray); // [false, false, false, false, false]
//Q6
var mixed_arr=[1, "two", true, "five", null];
//Q7
document.writeln("<h3>QUALIFICATIONS:<br></h3>")
var Pakistan_QUA=["1:SSC",
"<br>2:HSC",
"<br>3:BCS",
"<br>4:BS",
"<br>5:BCOM",
"<br>6:MS",
"<br>7:M.PHILL.",
"<br>8:PHD"]
document.writeln(Pakistan_QUA.join(''));//join for removing commas
//Q8
// Declare and initialize the arrays
var students = ["Michael", "John", "Tonny"];
var scores = [400, 450, 350];

// Calculate percentages
var totalMarks = 500;
var percentages = [];
for (var i = 0; i < scores.length; i++) {
  percentages.push((scores[i] / totalMarks) * 100);
}
document.writeln("<BR><br><h3>MARKS:</h3>")
// Display scores and percentages
for (var i = 0; i < students.length; i++) {
  document.writeln("<br>"+" score of "+students[i]  +" is " + scores[i] + " percentage "+   percentages[i] + "%.");}

  //Q9
 //part a
  document.writeln("<br><br><h3>COLORS</h3>")
var colors=["red","green","blue","purple","black","pink"]
document.writeln(colors);
var newcolor=prompt("what color do you want in the beginning?")
colors.unshift(newcolor);//to add in the beginning
// Display the updated array in the browser
document.write("<h3>Updated Array(beginning):</h3><br>");

for (var i = 0; i < colors.length; i++) {
  document.writeln(  colors[i]+",");
}
//part b
document.writeln("<br><br><h3>COLORS</h3>")
var colors=["red","green","blue","purple","black","pink"]
document.writeln(colors);
var endcolor=prompt("which color you want to add at the end?");
colors.push(endcolor);
// Display the updated array in the browser
document.writeln("<h3>Updated Array (end):</h3>");

for (var i = 0; i < colors.length; i++) {
  document.writeln(  colors[i]+"," );
}

//part c
document.writeln("<br><br><h3>COLORS</h3>")
var colors=["red","green","blue","purple","black","pink"]
document.writeln(colors);
colors.unshift("brown","black");
// Display the updated array in the browser
document.writeln("<h3>Updated Array (two colors at beginning):</h3>");

for (var i = 0; i < colors.length; i++) {
  document.writeln(  colors[i]+"," );
}
//part d
document.writeln("<br><br><h3>COLORS</h3>")
var colors=["red","green","blue","purple","black","pink"]
document.writeln(colors);
colors.shift();
// Display the updated array in the browser
document.writeln("<h3>Updated Array (del from beginning):</h3>");

for (var i = 0; i < colors.length; i++) {
  document.writeln(  colors[i]+"," );
}
//part e
document.writeln("<br><br><h3>COLORS</h3>")
var colors=["red","green","blue","purple","black","pink"]
document.writeln(colors);
colors.pop();
// Display the updated array in the browser
document.writeln("<h3>Updated Array (del from beginning):</h3>");

for (var i = 0; i < colors.length; i++) {
  document.writeln(  colors[i] );
}
//part f
document.writeln("<br><br><h3>COLORS</h3>")
var colors=["red","green","blue","purple","black","pink"]
document.writeln(colors);
var ind=prompt("at which index you want to add color?");
var color = prompt("What color do you want to add?");
colors.splice(ind,0,color);
// document.writeln("<br>"+colors);//will work also fine!!!!!!!11

// Display the updated array in the browser
document.writeln("<h3>Updated Array (at which index,which color(insert)):</h3>");

for (var i = 0; i < colors.length; i++) {
  document.writeln(  colors[i]+"," );
}
//part g
document.writeln("<br><br><h3>COLORS</h3>")
var colors=["red","green","blue","purple","black","pink"]
document.writeln(colors);
let index = prompt("At which index do you want to delete color(s)?");
let numColors = prompt("How many colors do you want to delete?");
colors.splice(index, numColors);
// Display the updated array in the browser
document.writeln("<h3>Updated Array (at which index,which color(del)):</h3>");

for (var i = 0; i < colors.length; i++) {
  document.writeln(  colors[i]+"," );
}
//Q10
var scores=[320,230,480,120]
document.writeln("<br><br><br><b> scores of students:</b> "+scores);
scores.sort();
document.writeln("<br><b>ordered scores of students:</b> "+scores);

//q11
var cities=["karachi","lahore","islamabad","quetta","peshawar"];
document.writeln("<br><br><br><b>cities: </b> <br>"+cities);
var newcities=cities.slice(2,4);
document.writeln("<br><br><br><b>Selected cities: </b> <br>"+newcities);

//q12
var arr = ["This ", " is ", " my "," cat"];
document.writeln("<br><br><br><b>ARRAY: </b> <br>"+arr);
document.writeln("<br><br><br><b>STRING: </b> <br>"+arr.join(''));

//q13
// Create a new array
var myArray = [];
document.writeln("<b><h3>FIFO ORDER</h3> </b>");
// Add values to the array in FIFO order
document.writeln("<b><h3>Devices</h3> </b>");
myArray.push('Keyboard');
myArray.push('Mouse');
myArray.push('Printer');
myArray.push('Moniter');
document.writeln(myArray);
document.writeln("<br><b><h3>Out: </b> </h3>"+myArray.shift());
document.writeln("<br><h3><b>Out: </b></h3> "+myArray.shift());
document.writeln("<br><h3><b>Out:</h3> </b> "+myArray.shift());
document.writeln("<br><h3><b>Out: </b></h3> "+myArray.shift());

//q14

// Create a new array
var myArray1 = [];
document.writeln("<b><h3>LIFO ORDER</h3> </b>");
// Add values to the array in FIFO order
document.writeln("<b><h3>Devices</h3> </b>");
myArray1.push('Keyboard');
myArray1.push('Mouse');
myArray1.push('Printer');
myArray1.push('Moniter');
document.writeln(myArray1);
document.writeln("<br><b><h3>Out: </b> </h3>"+myArray1.pop());
document.writeln("<br><h3><b>Out: </b></h3> "+myArray1.pop());
document.writeln("<br><h3><b>Out:</h3> </b> "+myArray1.pop());
document.writeln("<br><h3><b>Out: </b></h3> "+myArray1.pop());
//Q15
var phoneManufacturers = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier'];


// create dropdown/select menu using document.write()
document.write("<h3>Drop-down Menu</h3>");
document.write("<select><br>");

for (let i = 0; i < phoneManufacturers.length; i++) {
  document.write("<option>" + phoneManufacturers[i] + "</option>");
}

document.write("</select>");