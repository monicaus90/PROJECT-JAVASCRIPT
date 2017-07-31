var sal = prompt("Enter worker's salary: ");
var ret = prompt("Enter percentage (%) of retention at source: ");

var ret2 = (sal*(ret/100));
var sal2 = sal-ret2;

console.log ("Salary: " + sal);
console.log ("Retention: " + ret2);
console.log ("Total to pay: " + sal2);
