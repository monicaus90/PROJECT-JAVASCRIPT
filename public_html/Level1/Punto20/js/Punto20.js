var salg = prompt ("Enter salary: ");
var day =  prompt ("Enter day worked: ");

var salv = 737717;
var aux = 83140;

var sal1 = (salv *2);
var sal2 = (salv *4);

var salt = (salg/30)*day;

if (salt<=sal1){
   var salaux = salt + aux;
   console.log ("Total salary more bono transport: " + salaux);
} else if (salt>=sal2) {
  var ret= prompt ("Enter percentage (%) of retention at source: ");
    var ret1 = (salt*(ret/100));
    var ret2 = (salt - ret1);
    console.log ("Total salary without retention: " + " $" + ret2); 
} else
 {
   console.log ("Total salary without bono transport: " + Math.round(salt));   
}