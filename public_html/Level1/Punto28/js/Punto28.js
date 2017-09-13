function menu() {
  var option = Number(prompt("Select an option: \n\
                              1. Complete array\n\
                              2. Search for element by sequential search method\n\
                              3. Apply bubble sorting method\n\
                              4. Apply bidirectional bubble sorting method\n\
                              5. Apply method of ordering by insertion\n\
                              6. Apply mixing method\n\
                              7. Apply sorting method by selection\n\
                              8. Print array\n\
                              9. Exit program"));
  return option;
}





do {
  option=menu();
  switch (option) {
    case 1 :
      var textarray = Number(prompt("Enter the size of the array: "));
      var array1 = option1();
      break;
    case 2:
      option2(array1);
      break;
    case 3:
      option3(array1);
      break;
    case 4:
      option4(array1);
      break;
    case 5:
      option5(array1);
      break;
    case 6:
      break;
    case 7:
      break;
    case 8:
      console.log(array1);
      break;
    case 9:
      break;
  }
} while (option !== 0)
//Var option es la variable que está dentro de la función menu
//Sólo puedo llamar una variable que este dentro de una función

//Se declara cada función correspondiente a cada opción del menú 
function option1() {
  var array = [];
  for (var i = 0; i < textarray; i++) {
    array[i] = Math.round(Math.random() * 100);
  }
  return array;
}

function option2(array) {
  var num1 = Number(prompt("Enter number you want to search: "));
  for (var i = 0; i < textarray; i++) {
    if (num1 === array[i]) {
      console.log("Your search has been successful");
      console.log("el numero " + array[i] + "se encuentra en la posicion " + i);
    } else if (i === (textarray - 1)) {
      alert("el numero no fue encontrado");
    }
  }
}

function option3(array) {
  var temp = 0;
  var x = 0;

  while (x === 0) {
    x = 1;
    for (var i = 0; i < textarray; i++) {
      if (array[i] > array[i + 1]) {
        temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        x = 0;
      }
    }
  }
  return array;
}

function option4(array) {
  var temp = 0;
  var x = 0;
  while (x === 0) {
    for (var i = 0; i < textarray; i++) {
      if (array[i] > array[i + 1]) {
        temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        x = 0;
      }
    }
    for (var i = i; i > textarray; i--) {
      if (array[i] < array[i - 1]) {
        temp = array[i];
        array[i] = array[i - 1];
        array[i - 1] = temp;
        x = 0;
      }
    }
  }
  return array;
}

function option5(array) {
  var temp = 0;
  var p;
  for (var i = 0; i < textarray; i++) {
    temp = array[i];
     p = i - 1;
    while (array[p] > temp && p >= 0) {
      array[p + 1] = array[p];
      p = p - 1;
    }
    array[p + 1] = temp;
  }
}
