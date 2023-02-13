var maths = +prompt("Enter Maths Marks")
var urdu = +prompt("Enter Urdu Marks")
var physics = +prompt("Enter Physics Marks")
var computer = +prompt("Enter Computer Marks")
var english = +prompt("Enter English Marks")
var total = maths+urdu+physics+computer+english
var per = (total/500)*100
var grade
if (per => 80)
{
    grade = "A+"
}
else if (per => 70)
{
    grade = "A"
}
else if (per => 60)
{
    grade = "B"
}
else if (per => 60)
{
    grade = "C"
}
else if (per => 50)
{
    grade = "D"
}
else 
{
    grade="Fail"
}
document.write("<table border = 1>"+"<tr>"+"<td>"+"Maths"+"</td>"+"<td>"+maths+"</td>"+"</tr>")
document.write("<tr>"+"<td>"+"Urdu"+"</td>"+"<td>"+urdu+"</td>"+"</tr>")
document.write("<tr>"+"<td>"+"Physics"+"</td>"+"<td>"+physics+"</td>"+"</tr>")
document.write("<tr>"+"<td>"+"Computer"+"</td>"+"<td>"+computer+"</td>"+"</tr>")
document.write("<tr>"+"<td>"+"English"+"</td>"+"<td>"+english+"</td>"+"</tr>")
document.write("<tr>"+"<td>"+"Total"+"</td>"+"<td>"+total+"</td>"+"</tr>")
document.write("<tr>"+"<td>"+"Percentage"+"</td>"+"<td>"+per+"</td>"+"</tr>")
document.write("<tr>"+"<td>"+"Grade"+"</td>"+"<td>"+grade+"</td>"+"</tr>")