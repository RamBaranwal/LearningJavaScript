// reference type (Non Primitive datatype)

let variable = null;

// -------- Symbol ---------
let id = Symbol('123');
const anoId = Symbol('123');

console.log(id === anoId);

// out put -> false

const bigNumber = 34987341942143n   // due to adding lastly n -> it becomes bigint
console.log(bigNumber);

let arr = [123, 422.3, 121, "Hitesh"];
console.log(arr);

let Obj = {
    name: "Hitesh",
    age: 22,
};

let myfun = function() {
    console.log("hello ji");
};

myfun();

console.table([typeof id, typeof variable, typeof bigNumber, typeof arr, typeof Obj, typeof myfun]);

// ┌─────────┬────────────┐
// │ (index) │ Values     │
// ├─────────┼────────────┤
// │ 0       │ 'symbol'   │
// │ 1       │ 'object'   │
// │ 2       │ 'bigint'   │
// │ 3       │ 'object'   │
// │ 4       │ 'object'   │
// │ 5       │ 'function' │    -> object function
// └─────────┴────────────┘


