
$(document).ready(() => {
  $("#consult").click(() => {
    var num1 = $("#number1").val();
    var x = 0, i;
    for (i = 1; i <= num1; i++) {
      if (num1 % i === 0) {
        x++;
      }
    }
    if (x <= 2) {
      var text1 = "The number entered " + num1 + " is prime";
      $("#text1").html(text1);
    } else {
      var text1 = "The number entered " + num1 + " is not prime ";
      $("#text1").html(text1);
    }
  });
});

//
//var num = Number(prompt('Enter a number:'));
//var x = 0, i; 
//for (i = 1; i <= num; i++){
//  if (num%i === 0){
//    x++;
//  }
//}
//if (x<= 2){
//  console.log ("The number entered is prime " + num);
//} else {
//  console.log ("The number entered is not prime " + num);
//}
