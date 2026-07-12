let name = "String";
let value = 10;
let student;  // undefined

let stuId = null; // stand alone value

let isTrue = false;

console.log(typeof null);

// output -> null
console.log(typeof undefined);
// output -> undefined

console.table([typeof name, typeof value, typeof student, typeof stuId, typeof isTrue]);

// symbol => unique datatype

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined =>
// symbol => unique

// output
// ┌─────────┬─────────────┐
// │ (index) │ Values      │
// ├─────────┼─────────────┤
// │ 0       │ 'string'    │
// │ 1       │ 'number'    │
// │ 2       │ 'undefined' │
// │ 3       │ 'object'    │
// │ 4       │ 'boolean'   │
// └─────────┴─────────────┘

