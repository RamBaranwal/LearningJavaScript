const arrObj = [
    {
        user: "Rohit",
        id: 1
    },
    {
        user: "Rohan",
        id: 2
    }
]

console.log(arrObj);
console.log(arrObj[0].user);
console.log(Object.keys(arrObj));
console.log(Object.values(arrObj));
// gives same output as normal console.log(arrObj) give
// but it gives value as we see into the entity
// it automatically take 0 and 1 index as key

console.log(Object.entries(arrObj));
// [
//   [ '0', { user: 'Rohit', id: 1 } ],
//   [ '1', { user: 'Rohan', id: 2 } ]
// ]

// 3 method to access the values form object
// method 1
// dot notation
const key = arrObj[0].user;
console.log(key);

// method 2
// bracket notation
const key2 = arrObj[0]["user"];
console.log(key2);

// Remember this ⭐
// arrObj[0].user
// means:
// Get the property named name.
// arrObj[0]["user"]
// means:
// Get the property whose key is "name".
// const key = "name";
// arrObj[0][key]
// arrObj[0][key] = "Roshan";
// means:
// Get the property whose key is stored inside the variable key.

/// --------------------------------------------------------- ///
//                      Destructure                            //
// method 3
const {user} = arrObj[0];
console.log(user);

const {user : u} = arrObj[0];
console.log(u);

// error is not coming but both const name is same name
const {user : ua} = arrObj[1];
console.log(ua);