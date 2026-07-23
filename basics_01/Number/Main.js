const balance = 100;
console.log(balance.toFixed(2));

const newBal = 2521.56912;
console.log(newBal.toPrecision(6));     // 6 is number of digits total decimal and non decimal sum
console.log(newBal.toPrecision());

console.log(newBal.toLocaleString('en-IN'));

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

// ============== Maths ===================

console.log(Math.floor(4.23));
console.log(Math.ceil(4.23));
console.log(Math.round(5.36));
console.log(Math.abs(-10));
console.log(Math.sqrt(45));
console.log(Math.min(2, 3, 1, 4));
console.log(Math.max(2, 3, 1, 4));

console.log(Math.random());       // from 0 to 1
console.log(Math.floor((Math.random()) * 10) + 1);
console.log(Math.floor((Math.random()) * 10) + 1);
console.log(Math.floor((Math.random()) * 10) + 1);


// for getting range of random between two number

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);