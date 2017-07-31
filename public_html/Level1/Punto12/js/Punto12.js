var a = "*";

var x = 1;

var posi = "     *";

while(x<=5) {
  if (posi === "     *"){
    console.log (posi);
  }
  console.log (posi = (posi.slice(1)+a));
  x++;
}
