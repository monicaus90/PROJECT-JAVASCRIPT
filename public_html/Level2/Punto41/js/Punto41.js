function salve(){
  var name = $("#text1").val();
  var print1 = name;
  var type = $("#text2").val();
  var print2 = type;
  var document = $("#text3").val();
  var print3 = document;
  var print = ("Hello, my full name is " + name + ", my " + type + " is " + document);
  $("#information").val(print);
}
