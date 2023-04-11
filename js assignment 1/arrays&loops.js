//Q1
// Declare and initialize an empty multidimensional array
var multiDimArray = [[]];

// Add arrays to the multidimensional array
multiDimArray.push([]);
multiDimArray.push([]);

// Print the multidimensional array
console.log(multiDimArray);

//Q2
var matrix = [
    [0,1, 2, 3],
    ["<br>"+1,0,1,2],
    ["<br>"+2,1,0,1]
  ];
  
  // Print the matrix
  console.log(matrix);
  document.writeln("<h3>Matrix:</h3>"+matrix.join(''));

 //Q3
 document.writeln("<h3>Numeric counting:</h3> ")
 for(let i=1;i<11;i++){
    document.writeln("<br>"+i)
 } 
 //q4
 var mult=prompt("enter a number for the table?");
 var lengt=prompt("enter the length?")
 document.writeln("<br><b><h3>Multiplication table of</h3> </b>"+ mult);
for (var i = 1; i <= lengt; i++) {
    document.writeln("<br>"+mult+"x"+i+"="+mult*i);
}
//q5
var fruit=["apple","<br>banana","<br>mango","<br>orange","<br>strawberry<br>"];
document.writeln("<h3>FRUITS:</h3> "+fruit.join(''))
for (var i = 0; i < fruit.length; i++) {
    document.writeln("<br>elements at index "+i+ " is    " +fruit[i])

}
//Q6
//counting
document.writeln("<br><b>Counting:</b>");
for (var i = 1; i <= 15; i++) {
    document.writeln(i);
  }
  //reverse
  document.writeln("<br><b>Reverse Counting:</b>"); 
  for (var i = 10; i >= 1; i--) {
    document.writeln(i);}
 //Even

 document.writeln("<br><b>Even:</b>");
 for (let i = 0; i <= 20; i+=2) {
    document.writeln(i);}
 //Odd
 document.writeln("<br><b>Odd:</b>"); 
 for (let i = 1; i <= 19; i+=2) { 
    document.writeln(i);}
 //series
 document.writeln("<br><b>Series:</b>"); 
 for (let i = 2; i <= 20; i+=2) {
    document.writeln(i+"k");
 }
//Q7
// define array of items
var items = ["cake", "apple pie", "cookie", "chips", "patties"];

// ask user for input and search for item in array
var searchItem = prompt("Welcome to ABC bakery what would you like to order? ");
var itemFound = false;
document.writeln("<h3>WELCOME TO ABC BAKERY</h3>")
for (var i = 0; i < items.length; i++) {
  if (items[i] === searchItem) {
    itemFound = true;
    break;
  }
}

// display message to user based on search result
if (itemFound) {
  document.writeln(searchItem + " is availabe at index" + i+"in our bakery");
} else {
    document.writeln("sorry "+searchItem + " is not available in our bakery");
}

//Q8
var A = [24, 53, 78, 91, 12]

// Initialize the variable 'smallest' to the first element in the array
var largest = A[0];

// Loop through the remaining elements in the array
for (var i = 1; i < A.length; i++) {
    // If the current element is smaller than the current smallest, update 'smallest'
    if (A[i] > largest) {
        largest = A[i];
    }
}
document.writeln("<b><br><br>The largest number in the array is: </b>" + largest+"<br>");
//Q9
var A = [24, 53, 78, 91, 12]

// Initialize the variable 'smallest' to the first element in the array
var smallest = A[0];

// Loop through the remaining elements in the array
for (var i = 1; i < A.length; i++) {
    // If the current element is smaller than the current smallest, update 'smallest'
    if (A[i] < smallest) {
        smallest = A[i];
    }
}

document.writeln("<b><br><br>The smallest number in the array is: </b>" + smallest+"<br>");


//q10

for (var i = 1; i <= 20; i++) {
    document.writeln(5 * i);
  }