let a = 100;
const b = 200;
var c = 300;

if(true){
    let a = 10;
    const b = 20;
    var c = 30;
}

console.log(a);
console.log(b);
console.log(c);

a = 1000;        // can re assigned because it is let
// b = 2000;        // can not re assigned because it is fixed
c = 3000;        // var is just don't care property

console.log(a);
console.log(b);
console.log(c);

