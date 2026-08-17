// constructor syntax
const user = new Object();


// object literals
const user2 = {};

user2.id = "123abc";
user2.name = "Rohit";
user2.phone = 1234556772;
user2.isLoggedin = false;

console.log(user2);

const regularUser = {
    id: "123abc",
    fullname: {
        userfullname: {
            firstname: "Rohit",
            lastname: "Singh"
        },

        clientname: {
            firstname: "Raman",
            lastname: "Kohli"
        }
    },

    email: "admin@.com",
    password: "asn123"
}

console.log(Object.keys(regularUser));
console.log(Object.values(regularUser));
console.log(Object.entries(regularUser));
console.log(regularUser.hasOwnProperty('fullname'));      // true
console.log(regularUser.hasOwnProperty('firstname'));     // false
console.log(regularUser.hasOwnProperty('isLoggedin'));    // false
// output
// [ 'id', 'fullname', 'email', 'password' ]
// [
//   '123abc',
//   {
//     userfullname: { firstname: 'Rohit', lastname: 'Singh' },
//     clientname: { firstname: 'Raman', lastname: 'Kohli' }
//   },
//   'admin@.com',
//   'asn123'
// ]
// [
//   [ 'id', '123abc' ],
//   [ 'fullname', { userfullname: [Object], clientname: [Object] } ],
//   [ 'email', 'admin@.com' ],
//   [ 'password', 'asn123' ]
// ]

console.log(regularUser.fullname.clientname.lastname);
console.log(regularUser);

const obj1 = {1: "a", 2: "b"}
const obj21 = {1: "a", 2: "b"}

const obj3 = { obj1, obj21 };

console.log(obj3);
// { obj1: { '1': 'a', '2': 'b' }, obj2: { '1': 'a', '2': 'b' } }

// The important rule
// Object.assign(target, source)
// It means:
// Copy all properties from source into target.
// So:
// Object.assign(obj1, obj25)
// means:
// target = obj1
// source = obj21
// Your obj1 has been changing throughout the code.

console.log(Object.assign(obj1, obj21));
// { '1': 'a', '2': 'b' }

// Object.assign(obj1, obj25)
// means:
// target = {} -> empty
// source = obj25
// source = obj22
const obj22 = {1: "c", 2: "b"}
console.log(Object.assign({}, obj1, obj22))
// { '1': 'c', '2': 'b' }

const obj23 = {3: "c", 4: "b"}
console.log(Object.assign({}, obj1, obj23));
// { '1': 'c', '2': 'b', '3': 'c', '4': 'b' }

const obj24 = {3: "a", 4: "b"};
console.log(Object.assign({}, obj1, obj24));
// { '1': 'c', '2': 'b', '3': 'a', '4': 'b' }

const obj25 = {1: "a", 3: "b"};
console.log(Object.assign({}, obj1, obj25));
// { '1': 'a', '2': 'b', '3': 'b' }

const arrMethod = {...obj1, ...obj25, ...obj24, ...obj3, ...regularUser};
console.log(arrMethod);
// {
//   '1': 'a',
//   '2': 'b',
//   '3': 'a',
//   '4': 'b',
//   obj1: { '1': 'a', '2': 'b' },
//   obj21: { '1': 'a', '2': 'b' },
//   fullname: {
//     userfullname: { firstname: 'Rohit', lastname: 'Singh' },
//     clientname: { firstname: 'Raman', lastname: 'Kohli' }
//   },
//   email: 'admin@.com',
//   password: 'asn123'
// }