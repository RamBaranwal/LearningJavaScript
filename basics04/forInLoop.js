// -----------------------
// at object for in loop
// -----------------------
const obj1 = {
    'js': "javascript",
    'rb': "ruby",
    'cpp': "C++",
    'py': "Python",
    'java': "Java"
}

for (const key in obj1) {
    console.log(`${key} is shortcut of ${obj1[key]}`);
}

// --------------------
// at array for in loop
// --------------------
const arr1 = ['java', 'cpp', 'ruby', 'python'];
for (const key in arr1) {
    console.log(key);
}
// output
// 0
// 1
// 2
// 3

for(const key in arr1){
    console.log(`${key} is key of ${arr1[key]}`);
}
// 0 is key of java
// 1 is key of cpp
// 2 is key of ruby
// 3 is key of python

// --------------------
// at map we are trying
// --------------------

// const maping1 = new Map();
// maping1.set("usa", 1);
// maping1.set("china", 2);
// maping1.set("russia", 3);
// maping1.set("india", 4);
// maping1.set("usa", 5);

// for (const key in maping1) {
//     console.log(key);
// }
// nothing is print it is not iterable