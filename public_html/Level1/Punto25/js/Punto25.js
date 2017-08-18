var x = 9;
var cont = 0;
var sumprime = 0;
var promprime = 0;
var sumpair = 0;
var prompair = 0;

var number = [];
var numberpair = [];
var numberprime = [];

for (var i = 0; i <= x; i++) {
  number[i] = Number(prompt("Enter a number:"));
}

i = 0;
while (i <= x) {
  cont = 0;
  for (var a = 1; a <= number[i]; a++) {
    if ((number[i] % a) === 0) {
      cont++;
    }
  }
  if (cont <= 2) {
    numberprime.push(number[i]);
    sumprime = sumprime + number[i];
    promprime = sumprime / numberprime.length;
  }
  i++;
}

i = 0;
do {
  if (number[i] % 2 === 0) {
    numberpair.push(number[i]);
    sumpair = sumpair + number[i];
    prompair = sumpair / numberpair.length;
  }
  i++;
} while (i <= x)


console.log("Total sum prime: " + sumprime);
console.log("Total prom prime: " + promprime);
console.log("Total sum pair: " + sumpair);
console.log("Total prom pair: " + prompair);