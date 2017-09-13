$(document).ready(() => {
  $("#process").click(() => {
    var num1 = $("#number1").val();
    var num2 = $("#number2").val();
    var exp1 = num1 + " to a " + num2 + " is: ";
    var res1 = Number(num1) ** Number(num2);
    var exp2 = num2 + " to a " + num1 + " is: "; 
    var res2 = Number(num2) ** Number(num1);
    var mult = "The multiplication between " + num1 + " and " + num2 + " is: ";
    var res3 = Number(num1) * Number(num2);
    var div1 = "The division between " + num1 + " and " + num2 + " is: ";
    var res4 = Number(num1) / Number(num2);
    var div2 = "The division between " + num2 + " and " + num1 + " is: ";
    var res5 = Number(num2) / Number(num1);
    var mod = "The division module between " + num1 + " and " + num2 + " is: ";
    var res6 = Number(num1) % Number(num2);
    $("#exp1").html(exp1 + res1);
    $("#exp2").html(exp2 + res2);
    $("#mult").html(mult + res3);
    $("#div1").html(div1 + res4);
    $("#div2").html(div2 + res5);
    $("#mod").html(mod + res6);
  });
});
