console.log("Hitesh");

// var is bad a before days due to block scope and functional scope
// now a days it is not used
let name = "Rithesh";
var rollno = 24;
const naame = "Kumar";

// we can use any variable without declare to it
school = "sudar";

// when we are not assign any thing it will be undefined
let printing;

console.table([name, rollno, naame, school, printing]);
console.log(name);
console.log(school);

// output

// Hitesh
// ┌─────────┬───────────┐
// │ (index) │ Values    │
// ├─────────┼───────────┤
// │ 0       │ 'Rithesh' │
// │ 1       │ 24        │
// │ 2       │ 'Kumar'   │
// │ 3       │ 'sudar'   │
// │ 4       │ undefined │
// └─────────┴───────────┘
// Rithesh
// sudar