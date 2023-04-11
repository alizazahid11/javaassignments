//Q1
var city=prompt("enter city?");
if (city=="Karachi"){
    alert("Welcome to city of lights ");
}
else if(city=="karachi") {
    alert("Welcome to city of lights ");
}
else{
    alert("please try again!");
}
//Q2
var gender=prompt("enter your gender please?");
if(gender=="male"){
    alert("Good Morning Sir");
}
else if(gender=="female"){
    alert("Good Morning Ma'am");
}
else{
    alert("error");
}
//Q3
var col=prompt("enter color of road traffic signal?");
if(col=="Red"){
    alert("must stop!");
}
else if(col=="Yellow"){
    alert("Ready  to move");
}
else if(col=="Green"){
    alert("Move now")
}
//q4
var fuel=prompt("please enter remaining fuel in litres? ");
if(fuel<0.25){
    alert("please refill the fuel in your car")
}
else{
    alert("don't refill it")
}
//q5
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");}

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

if (true){
    alert("True");
    }
    if (false){
    alert("false");
    }

if("car" < "cat"){
        alert("car is smaller than cat");
        }    
//q6
document.writeln("<br>MARK SHEET<br><br>");
var obt1=prompt("enter 1 sub marks? ");
var obt2=prompt("enter 2 sub marks? ");
var obt3=prompt("enter 3 sub marks? ");
var ob_marks=Number(obt1)+Number(obt2)+Number(obt3);
alert("Obtained marks: "+ob_marks);
document.writeln("<br>Obtained marks: "+ob_marks);
var tot=prompt("enter total marks?");
document.writeln("<br>Total marks: "+tot);
var per=((ob_marks/tot)*100);
alert("percentage: "+per+"%");
document.writeln("<br>Percentage: "+per+"%");

if(per>=80){
   
    document.writeln("<br> Grade: A-one");

     document.writeln("<br>remarks: Excellent")
}
else if(per>=70){
    
    document.writeln("<br>Grade: A");

    document.writeln("<br>remarks: Good")
}
else if(per>=60){
    
    document.writeln("<br>Grade: B");

    document.writeln("<br>remarks: you need to improve")
}
else{
    
    document.writeln("<br>grade: Fail");

    document.writeln("<br>remarks:  Sorry");
}
//q7
var sec_num=5;
var guess=prompt("guess the secret no?");
if(sec_num==guess){
    alert("Bingo! correct Answer")
}
else if(guess==sec_num+1){
    alert("Close enough to the correct answer");
}
else{
    alert("Oops you can't guess it right")
}
//q8
var no=prompt("enter a number");
if(no%3==0){
    alert("The number is divisible by 3");
}
else{
    alert("The number is not divisible by 3")
}
//q9
var num=prompt("enter a number to check?");
if(num%2==0){
    alert("even");
}
else{
    alert("odd")
}
//q10
var temp=prompt("enter temp?");
if(temp>40){
    alert("“It is too hot outside.”")
}
else if(temp>30){
    alert("“The Weather today is Normal.”")
}
else if(temp>20){
    alert("“Today’s Weather is cool.”")
}
else if(temp>10){
    alert("“OMG! Today’s weather is so Cool.”")
}
//q11
var first_num=parsefloat(prompt("enter first num?"));
var sec_num=parsefloat(prompt("enter second num?"));
var operation=parsefloat(prompt("enter operation?"));
if(operation=="+"){
    alert("sum is: "+(Number(first_num)+Number(sec_num)));
}
else if(operation=="*"){
    alert("multiplication is: "+ (first_num*sec_num));
    }
else if(operation=="-"){
    alert("subtraction is: "+ (first_num-sec_num));
}    
else if(operation=="/"){
    alert("division is: "+ (first_num/sec_num));
}
else if(operation=="%"){
    alert("moudlus is: "+ (first_num%sec_num));
}