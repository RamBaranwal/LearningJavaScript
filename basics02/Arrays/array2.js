const section = ["section 23", "section 25", "section 26"];
const roll = ["roll23", "roll25", "roll26"];

// -----------------------------------------
// ----------- arr1.push(arr2) -------------
// -----------------------------------------

// it is manupulating array
section.push(roll);
console.log(section);


const section2 = ["section 23", "section 25", "section 26"];
const roll2 = ["roll23", "roll25", "roll26"];

// -------------------------------------
// ------- arr1.concat(arr2) -----------
// -------------------------------------

// it is not manupulating array
section2.concat(roll2);
console.log(section2);
// see the ouput same as section
// [ 'section 23', 'section 25', 'section 26' ]
// too make changes make it like sec = sec.concat(roll);



// -----------------------------------------------------
// --- concat used to store into new string or array ---
// -----------------------------------------------------

const allDefaltures = section2.concat(roll2);
console.log(allDefaltures);
// output
// [ 'section 23', 'section 25', 'section 26', 'roll23', 'roll25', 'roll26' ]



// --------------
// spread method
// --------------
// used to spread all elements and according to us we used them

const newDefaulterList = [...section2, ...roll2];
console.log(newDefaulterList);
// output
// [ 'section 23', 'section 25', 'section 26', 'roll23', 'roll25', 'roll26' ]


// ---------------------------------------------------------------
// making single form of arr which is present into multiple layers
// ---------------------------------------------------------------
const array1 = [2, 4, 1, [7, 4, 9, 0], 3, [[4, 6, 6, 2], 5, 2] ,[5, [5, 5], 5]];
// here we are not able to see the multiple layers how to spread them all
const flatArrays1 = array1.flat(Infinity);
console.log(flatArrays1);
// output
// [ 2, 4, 1, 7, 4, 9, 0, 3, 4, 6, 6, 2, 5, 2, 5, 5, 5, 5 ]

const spread = [... array1, ...flatArrays1];
console.log(spread);
// not good for this type of arrays
// [
//   2,
//   4,
//   1,
//   [ 7, 4, 9, 0 ],
//   3,
//   [ [ 4, 6, 6, 2 ], 5, 2 ],
//   [ 5, [ 5, 5 ], 5 ],
// 2,
// 4,
// 7,
// 1,
// .
// .
// .
// ]


// -------------------------------
// making arrays form scrap values
// -------------------------------
console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({name: "Hitesh"}));   // when we have to take key or values arrays we have to define them first
console.log(Array.from({ 0: "Hitesh", 1: "Rimi", length: 2 }));
console.log(Array.from({ 0: "Hitesh", 1: "Rimi", length: 1 }));
console.log(Array.from({ 0: "Rohan", length: 1 }));

// output
// false
// [ 'H', 'i', 't', 'e', 's', 'h' ]
// []
// [ 'Hitesh', 'Rimi' ]
// [ 'Hitesh' ]
// [ 'Rohan' ]
// [ 340, 120, 420 ]

// ---------------------------------------
// making numbers of variable form a array
// ----------------------------------------

let score1 = 340;
let score2 = 120;
let score3 = 420;

console.log(Array.of(score1, score2, score3));
// [ 340, 120, 420 ]