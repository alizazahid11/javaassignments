//q1
document.writeln("<br>RESULT: ");
var a=10;
document.writeln("<br>value of a: " +a+".");
++a;
document.writeln("<br>value of ++a: " +a+".");
document.writeln("<br>now value of a: " +a+".");
document.writeln("<br>value of a++: " +a+".");
a++;

document.writeln("<br>now value of a: " +a+".");
--a;
document.writeln("<br>value of --a: " +a+".");
document.writeln("<br>now value of a: " +a+".");

document.writeln("<br>value of a--: " +a+".");
a--;
document.writeln("<br>now value of a--: " +a);
document.writeln("<br>-------------------------------------");

//q2
var a=2,b=1;
document.writeln("<br>value of a: " +a+".");
--a;
document.writeln("<br>value of --a: " +a+".");
document.writeln("<br>value of b: " +b+".");
--b;
document.writeln("<br>value of --b " +b+".");
var result=(--a)-(--b);
document.writeln("<br>value of --a ---b is: " +result+".");
++b;
var result2=result+(++b);
document.writeln("<br>value of --a ---b+(++b) is: " +result2+".");
b--;
var result3=result+result2 + (b--);
document.writeln("<br>value of --a ---b+(++b)+(b--) is: " +result3);
var result4=Number(result)+Number(result2)+Number(result3);

document.writeln("<br>-------------------------------------");
//q3
var name=prompt("what is your name?");
alert("welcome  "+name);
document.writeln("<br>-------------------------------------");
//q4
var x=prompt("enter a number");
var i;

if(x!=0){
    for(i=1;i<11;i++){
        document.writeln("<br>"+x+"x"+i+"="+x*i);
    }
}
else{
    for(i=1;i<11;i++){
        document.writeln("<br>"+5+"x"+i+"="+5*i);
    }
 }
 document.writeln("<br>-------------------------------------");
//q5

document.writeln("<br><b>subject");
document.writeln("<tr><td>&nbsp "+"Total marks"+"");
document.writeln("<tr><td>&nbsp "+"Obtained marks"+"<tr><td>");
document.writeln(" &nbsp"+"Percentage<b>"+"<tr><td>");

var sub1=prompt("enter 1 subject name: ");
document.writeln("<br>"+sub1);


document.writeln("    &nbsp &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp     "+100);
var obs1=prompt("obt marks of 1 sub? ");
document.writeln("&nbsp &nbsp&nbsp &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp"+obs1);
var per=((obs1/100)*100);
alert("percentage of 1 sub is: "+per+"%");
document.writeln("  &nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp "+per+"%");
var sub2=prompt("enter 2 subject name: ");
document.writeln("<br>"+sub2);
document.writeln("      &nbsp&nbsp  &nbsp&nbsp&nbsp &nbsp "+100);
var obs2=prompt("obt marks of 2 sub? ");
document.writeln("  &nbsp&nbsp&nbsp &nbsp&nbsp&nbsp &nbsp&nbsp  "+obs2);
var per2=((obs2/100)*100);
alert("percentage of 2 sub is: "+per2+"%");
document.writeln(" &nbsp &nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp   &nbsp&nbsp "+per2+"%");
var sub3=prompt("enter 3 subject name: ");

document.writeln("<br>"+sub3);
document.writeln("      &nbsp  &nbsp&nbsp&nbsp &nbsp&nbsp  "+100);
var obs3=prompt("obt marks of 3 sub? ");
document.writeln("&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp"+obs3);
var per3=((obs3/100)*100);
alert("percentage of 1 sub is: "+per3+"%");
document.writeln("   &nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp &nbsp&nbsp&nbsp "+per3+"%");
var total_marks=100
alert("total marks for each subject: "+total_marks);

var tot_m=(total_marks*3);
document.writeln("<br>Result")
document.writeln(" \t\t &nbsp &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp  "+tot_m);
c=alert(tot_m);
var o_m=Number(obs1)+Number(obs2)+Number(obs3);
o=alert(o_m);
document.writeln(" &nbsp&nbsp&nbsp &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp "+o_m);
var per_o=((o_m/tot_m)*100)
alert(per_o+"%");
document.writeln(" &nbsp&nbsp&nbsp &nbsp&nbsp  &nbsp&nbsp &nbsp&nbsp&nbsp&nbsp&nbsp"+per_o+"%");



