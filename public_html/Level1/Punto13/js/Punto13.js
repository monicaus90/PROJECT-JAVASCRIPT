var a = "*";
var b = "";
var c = "";
var d = "    ";
var e = " ";

for (i=1; i<=13; i++) {
  if (i===1){
    console.log (b = d + a);
  }
    if (i>1 && i<=4) {
      if (i===3){
        c = b;
      }
      console.log (b = b.slice(1) + a + a);
    }
      if (i===5){
        console.log (c);
      }
        if (i===6) {
          console.log (c);
        }
          if (i>=7 && i<=9){
            console.log (c = c.slice(1) + a + a);
          }
            if (i>9) {
              console.log (c = e + c.slice(0,-2));
            }
}
