$(document).ready(()=>{
  $("#process").click(()=>{
  var num1 = $("#number1").val();
  var num2 = $("#number2").val();
  var sum = "The sum of " + num1 + " and " + num2 + " is: ";
  var res1 = Number(num1) + Number(num2);
  var rest = "The subtraction of " + num1 + " and " + num2 + " is: ";
  var res2 = Number(num1) - Number(num2);
  var mult = "The multiplication of " + num1 + " and " + num2 + " is: ";
  var res3 = Number(num1) * Number(num2);
  var div = "The division of " + num1 + " and " + num2 + " is: ";
  var res4 = Number(num1) / Number(num2);
  $("#sum").html(sum + res1);
  $("#rest").html(rest + res2);
  $("#mult").html(mult + res3);
  $("#div").html(div + res4);
  });
});

