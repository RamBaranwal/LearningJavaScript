// ==================== difference between javascript and many other language =========================
// into javascript every thing is different no any rules of taking of same type of value we can
// even take array inside of it

// =============== method 1 ==============================
const arr2 = new Array(4, 2, 1, "hitehs", false);
console.log(arr2);
//output
// [ 4, 2, 1, 'hitehs', false ]


// ================ method 2 ==============================
const arr1 = [2, 4, 5, "hitesh", false, [3, 4, 1, true]];
console.log(arr1);
// output
// [ 2, 4, 5, 'hitesh', false, [ 3, 4, 1, true ] ]
console.log(arr1[5][3]);
console.log(arr1[5]);
// output
// true
// [ 3, 4, 1, true ]

// ---------------  some methods  ------------------------
arr1.push(4);
console.log(arr1);
arr1.push("abs");
console.log(arr1);
arr1.push("xyx");
console.log(arr1);
arr1.pop();
console.log(arr1);

// output
// [ 2, 4, 5, 'hitesh', false, [ 3, 4, 1, true ], 4 ]
// [ 2, 4, 5, 'hitesh', false, [ 3, 4, 1, true ], 4, 'abs' ]
// [ 2, 4, 5, 'hitesh', false, [ 3, 4, 1, true ], 4, 'abs', 'xyx' ]
// [ 2, 4, 5, 'hitesh', false, [ 3, 4, 1, true ], 4, 'abs' ]


// -------------- adding into starting one ----------------
// it may load on computer when shifting happens into 100000 of values shift one step back
arr1.unshift(false);
console.log(arr1);

arr1.unshift("ra");
console.log(arr1);

// -------------- same deleting from starting position ------------------------
arr1.shift();
console.log(arr1);

// --------------- find the element and at index for 2d and normal array ----------------
console.log(arr1.includes(5));
console.log(arr1.indexOf(true)); // nested inside so not reachable
console.log(arr1[6].indexOf(true));

// -------------- join method change all arr to string -----------------
const newArr1 = arr1.join();
console.log(newArr1);
console.log(typeof newArr1);

// output
// false,2,4,5,hitesh,false,3,4,1,true,4,abs
// string

// +++++++++++++++ Important +++++++++++++++++++++++++
// ================ slice && splice ====================

console.log("A ", arr1);

const myNewArr1 = arr1.slice(3, 7); // not include last element
console.log("B ", myNewArr1);
console.log("A ", arr1);

const myNew2Arr1 = arr1.splice(3, 5);
// manupulate array
// remove number of elements from arr starting index -> remove number of elements
console.log("C ", myNew2Arr1);
console.log("A ", arr1);


// output
// A  [ false, 2, 4, 5, 'hitesh', false, [ 3, 4, 1, true ], 4, 'abs' ]
// B  [ 5, 'hitesh', false, [ 3, 4, 1, true ] ]
// A  [ false, 2, 4, 5, 'hitesh', false, [ 3, 4, 1, true ], 4, 'abs' ]
// C  [ 5, 'hitesh', false, [ 3, 4, 1, true ], 4 ]
// A  [ false, 2, 4, 'abs' ]