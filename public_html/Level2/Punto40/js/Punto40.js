function salve(){
  var name = $("#text1").val();
  var print1 = name;
  var type = $("#text2").val();
  var print2 = type;
  var document = $("#text3").val();
  var print3 = document;
  var gender = $("#text4").val();
  var print4 = gender;
  var height = $("#text5").val();
  var print5 = height;
  var live = $("#text6").val();
  var print6 = live;
  var print = ("Hello, my full name is " + name + ", my " + type + " is " + document + ", my gender is " + gender + ", my height is " + height + " mts "+ "and " + live + " I live in Cartago");
  $("#information").val(print);
}
 