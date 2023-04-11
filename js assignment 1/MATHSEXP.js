//q1
var sum=3+5;
document.writeln(" The sum of 3 and 5="+sum)
document.writeln("<br>-------------------------------------");
//q2
var sub=5-3;
document.writeln("<br> The sub of 3 and 5="+sub+".");
var mul=5*3;
document.writeln("<br> The mul of 3 and 5="+mul+".");
var mod=5%3;
document.writeln(" <br>The mod of 3 and 5="+mod);
document.writeln("<br>-------------------------------------");
//q3
var value;
document.writeln("<br>value after variable declaration is undefined.");
"\n"
value=5;
document.writeln("<br>nitial value: "+value+".");
var newVal=++value;
document.writeln("<br>value after increment: "+newVal);
 newVal=value+7;
 document.writeln("<br>value after addition is: "+newVal+".");
 newVal--;
 document.writeln("<br>value after decrement: "+newVal+".");
 var mods=newVal%3;
 document.writeln("<br>remainder is: "+mods);
 document.writeln("<br>-------------------------------------");
//q4
 var ticket_price=600;
var new_pp=(ticket_price*5);
document.writeln("<br>total cost to buy 5 movie ticke is: "+new_pp+"PKR");
document.writeln("<br>-------------------------------------");

//q5
var x=prompt("enter a number for table generation");
var i;
document.writeln("<br>TABLE: ");
if(x!=0){
    for(i=1;i<11;i++){
        document.writeln("<br>"+x+"x"+i+"="+x*i);
    }
}
else{
document.writeln("<br>error!!!!!!!!")}
 document.writeln("<br>-------------------------------------");
 //q6
 var Celsius = 30;
 var Fahrenheit = 96;
 var c=(Fahrenheit-32)*5/9;
 var f=(Celsius*9/5)+32;
 document.writeln("<br>"+Celsius+"C is "+f+"F");
 document.writeln("<br>"+Fahrenheit+"F is "+c+"C");
document.writeln("<br>-------------------------------------");
//shopping
var item1=650;
document.writeln("<br>price of item 1="+item1+",");
var quantity1=3;
document.writeln("<br>quantity of item 1="+quantity1+",");
var item2=850;
document.writeln("<br>price of item 2="+item2+",");
var quantity2=4;
document.writeln("<br>quantity of item 1="+quantity2+",");
var charges=100;
document.writeln("<br>shipping charges= "+charges+",");
var total_cost=item1*quantity1+item2*quantity2+charges;
document.writeln("<br>TOTAL CHARGES ARE:  "+total_cost);
document.writeln("<br>-------------------------------------");
//MARKSHEET
var total_marks=980;
document.writeln("<br>TOTAL MARKS ARE: " +total_marks+".")

var marks_obtained=804;
document.writeln("<br>MARKS OBTAINED ARE: " +marks_obtained+".")

var percentage=(marks_obtained/total_marks)*100
document.writeln("<br>PERCENTAGE IS: " +percentage+"%");
document.writeln("<br>-------------------------------------");
//CONVERSION TO PKR
var currency=104.80*10+28*25;
document.writeln("<br>TOTAL  CURRENCY IN PKR IS: "+currency);
document.writeln("<br>-------------------------------------");
//Q10
var num1=((7+5)*10)/2;
document.writeln("<br>calculations are: "+num1);
document.writeln("<br>-------------------------------------");

//q11
var current_year=prompt("enter current year ");
var birth_year=prompt("enter your birth year");
var your_age=alert(current_year-birth_year);
var age=current_year-birth_year;
document.writeln("<br>YOUR AGE IS: "+ age);
document.writeln("<br>-------------------------------------");

//q12
var radius=20;
document.writeln("<br>RADIUS IS: "+radius+".");
var cicurm=2*3.142*radius;
document.writeln("<br>CIRCUMFERNCE IS " +cicurm+".");
var area=3.142*radius**2;
document.writeln("<br>AREA IS " +area);
document.writeln("<br>-------------------------------------");
//q13
var fav_snack="lays flaming hot";
document.writeln("<br>FAVOURITE SNACK: "+fav_snack+".");
var agee="21";
document.writeln("<br>CURRENT AGE: "+agee+".");
var est_age=63;
document.writeln("<br>ESTIMATED MAX AGE: "+est_age+".");
var per_day=1;
document.writeln("<br>AMOUNT OF SNACK PER DAY: "+per_day+".");
var tot=(est_age-agee)*per_day;
document.writeln("<br>you will need: "+tot+" lays flaming hot to last you until the rip old age of: " +est_age);
document.writeln("<br>-------------------------------------");
