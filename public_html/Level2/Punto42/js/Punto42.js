var num1 = 50;
var num2 = 10;

//Base eleveada
function exp1 (){
var exp1 = num1**num2;
$("#exp").val(exp1);
}

function exp2 (){
var exp2 = num2**num1;
$("#exp1").val(exp2);
}

//multiplicacion
function mult (){
var mult = num1 * num2;
$("#mult1").val(mult);
}

//division
function div (){
var div1 = num1 / num2;
$("#div1").val(div1);
}

function div2 (){
var div2 = num2 / num1;
$("#div3").val(div2);
}

//residuo de la division
function mod (){
var mod2 = num1%num2;
$("#mod1").val(mod2);
}

//resta
function sub (){
var res = num1 - num2;
$("#sub1").val(res);
}

//suma
function sum (){
var sum2 = num1 + num2;
$("#sum1").val(sum2);
}
