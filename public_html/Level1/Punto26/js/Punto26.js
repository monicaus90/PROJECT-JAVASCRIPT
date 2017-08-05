function menu () {
  var option = prompt("MENU\n\
               1. Make a sum\n\
               2. Make a subtraction\n\
               3. Make a multiplication\n\
               4. Make a division\n\
               0. Exit the program");
  return parseInt(option);
}

var result = menu();

function sum (){
  var sum1 = parseInt(prompt("Enter number :"));
  var sum2 = parseInt(prompt("Enter number :"));
  var res1 = (sum1 + sum2);
  console.log ("The result: " + res1);
}

function sub (){
  var sub1 = parseInt(prompt("Enter number :"));
  var sub2 = parseInt(prompt("Enter number :"));
  var res2 = (sub1-sub2);
  console.log ("The result: " + res2);
}

function mul (){
  var mul1 = parseInt(prompt("Enter number : "));
  var mul2 = parseInt(prompt("Enter number : "));
  var res3 = (mul1*mul2);
  console.log ("The result: " + res3);
}

function div (){
  var div1 = parseInt(prompt("Enter number : "));
  var div2 = parseInt(prompt("Enter number : "));
  var res4 = (div1/div2);
  console.log ("The result: " + res4);
}

 switch (result) {
  case 1:
      sum();
    break;
  
  case 2:
      sub();
    break;
    
  case 3:
      mul();
    break;
    
  case 4:
      div();
    break;
    
  default:
    alert("Good bye... Thank you");
}
