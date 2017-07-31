var a = "*";
//variable que almacena el incremento del ciclo
var cont = "";
//variable que controla el do while,
//variable que indica desde donde empieza el ciclo
var x = 1;
//variable que indica donde finaliza el ciclo
var y = 6;

do { 
  //indicamos el aumento de los asteriscos
    cont = cont + a;
  if (x<=6){
    console.log (cont);
    x++;
  }
}while(x<=y);
