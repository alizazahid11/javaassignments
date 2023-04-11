//Q1
var ch=prompt("enter any string or num");
if(ch>="A" && ch<="Z"){
    document.writeln(ch+" is an upper case char <br>")
}
else if(ch>="a" && ch<="z"){
    document.writeln(ch+" is a lower case char <br>")
}
else{
    document.writeln(ch+" is a number <br>")
}
//Q2
var x=prompt("enter first num?");
document.writeln("<br>First number: "+x);
var  y=prompt("enter second num?");
document.writeln("<br>Second number: "+y);
if(x>y){
    alert("first num is greater than second number");
    document.writeln("<br>first num is greater than second number");
}
else if(y>x){
    alert("second num is greater than first number");
    document.writeln("<br>second num is greater than first num");
}
else if(x==y){
    alert("both are equal");
document.writeln("<br>both are equal")}
//q3
var num=prompt("enter a num pls");
if(num>0){
    alert("number is positive")
}
else if(num<0){
    alert("number is negative");
}
else if(num==0){
    alert("number is zero")
}

//q4
var char=prompt("enter a char to check?");

 if(char=="a"||char=="e"||char=="i"||char=="o"||char=="u"){
        alert("True");
    }
    else{
        alert("False")
    }
//q5
var password="aliza123"
var pass=prompt("enter a password?");

if(pass==null){
 
    alert("Please enter your password")
} 
else{
    alert("okay ready to match")
}
if(password==pass){
    alert("Correct! The password you entered matches the original password")
} 
else{
    alert("Incorrect password")
};
//q6
var greeting;
var hour = 13;
if (hour < 18) {
alert("Good day");}
else{
alert( "Good evening");
}    
//q7
var time=prompt("please enter time?");
if(time>0000 && time<1200){
    alert("Good morning")
}
else if(time>=1200 && time<1700){
    alert("Good afternoon!");
}
else if(time>=1700 && time<2100){
    alert("Good evening")
}
else if(time>=2100 && time<=2359){
    alert("Good night")
}