//functions
function print(name,age,gender){
    let details = name+" "+gender+" "+age;
    return details;
}
let std1 = print("Aijaz",25,"Male");
console.log(std1);
let std2 = print("Aimen",22,"female");
console.log(std2);

//switch statement
let food=prompt("enter name of a food");
switch(food){
    case "pizza":
        alert("yummmmyyy");
        break;
    case "burger":
        alert("tasty");
        break; 
    case "pasta":
            alert("wowwww");
            break;    
    default:
        alert("food not available")        
}
let x = -10;
switch(true){
    case x<0:
        console.log("num is less than 0");
        break;
    case x==0:
        console.log("num is equal to 0");
        break;
    default:
        console.log("num is greater than 0")}
//while loop
let i = 1;
let num=prompt("enter a number to generate table?");
while(i<=10){

  console.log(num+"x"+i+"="+num*i)
   i++; 
}
//do while 
let j = 100;
do{
    console.log(j);
    j++;
}
while(j<0);
//events 
function popup(message){
    alert(message);
}
