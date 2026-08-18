const arr = [1, 2, 4, 5, 6, 3];
for (const num of arr) {
    console.log(num);
}

let i = 0;
for (const greet of "Hello World!") {
    console.log(`char at ${i} index is ${greet}`);
    i++;
}

let j = 0;
const name = "Hisheh";
for (const index of name) {
    console.log(`${index} char at index of ${j}`);
    j++;
}
// for (const element of object) {
    
// }
// only showing object but not means object

// ===========================================
// map
/// ==========================================

const maping1 = new Map();
maping1.set("usa", 1);
maping1.set("china", 2);
maping1.set("russia", 3);
maping1.set("india", 4);
maping1.set("usa", 5);            // update value usa -> 5
// output
// Map(4) { 'usa' => 5, 'china' => 2, 'russia' => 3, 'india' => 4 }

console.log(maping1);

for (const [key, value] of maping1) {
    console.log(key, " :- ", value);
}
// usa  :-  5
// china  :-  2
// russia  :-  3
// india  :-  4
for (const key of maping1.keys()) {
    console.log(key);
}
// Only values
for (const value of maping1.values()) {
    console.log(value);
}
// Both key and value
for (const [key, value] of maping1.entries()) {
    console.log(key, value);
}
console.log([...maping1.keys()]);
console.log([...maping1.values()]);

maping1.forEach((value, key) => {
    console.log(key, value);
});

// for object we cannot do same thing to iterate the object by key value

const obj1 = {
    'game1': 'Robot',
    'game2': 'Rinurous',
    'game3': 'Chess'
}

// for (const [key, value] of obj1) {
//     console.log(key, value);
// }
// obj1 is not iterable
