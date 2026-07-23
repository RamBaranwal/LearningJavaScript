// singleton
// constructor are made here
// if liters are there then for sure it is not singleton

// object literals

const mySym = Symbol("key1");
const jsUser = {
    name: "hitesh",
    "full name": "Hitesh Chaudhari",
    // here mySym become as obj if we remove [ ] then it will behave like string
    [mySym]: "mykey2",
    age: 78,
    email: "google.com",
    location: "jaipur",
    isLoggedin: false,
    lastDateLogin: ["Mon", "Tue", "Wed"]
}

// ---------------------------------------------------------------
// ----------- ways of access at different condition ------------
// ---------------------------------------------------------------
console.log(jsUser.email);
console.log(jsUser["email"]);
// this is the best way because if key also written into string then this method only used
console.log(jsUser[mySym]);
console.log(typeof mySym);
// output
// mykey2
// symbol

// ------ change the values ------------------------
jsUser.email = "microsoft.com";
jsUser["full name"] = "Rahul Singhania";
console.log(jsUser);


// -- after freeze we cannot update any value --
// also it is not showing any error
// =======================
// Object.freeze(jsUser); +++++++++++++++++
// =======================
jsUser["email"] = "chatGPT.com";
console.log(jsUser);

// output
// {
//   name: 'hitesh',
//   'full name': 'Rahul Singhania',
//   age: 78,
//   email: 'microsoft.com',
//   location: 'jaipur',
//   isLoggedin: false,
//   lastDateLogin: [ 'Mon', 'Tue', 'Wed' ],
//   Symbol(key1): 'mykey2'
// }

// =====================================================
// ----------- working on making function --------------
// =====================================================

jsUser.greeting = function(){
    console.log("hello jii ki haal thoda");
}

console.log(jsUser.greeting());
// output
// hello jii ki haal thoda        this line executes because of greeting firstly called
// undefined                      this line is called because we print the function greeting()

console.log(jsUser.greeting);
// output
// [Function (anonymous)]

jsUser.greetingName = function(){
    console.log(`hello ji kaise ho tusi, ${this["full name"]}`);
}
console.log(jsUser.greetingName());
// output
// hello ji kaise ho tusi, Rahul Singhania
// undefined

console.log(jsUser);
// output
/*
{
  name: 'hitesh',
  'full name': 'Rahul Singhania',
  age: 78,
  email: 'chatGPT.com',
  location: 'jaipur',
  isLoggedin: false,
  lastDateLogin: [ 'Mon', 'Tue', 'Wed' ],
  greeting: [Function (anonymous)],
  greetingName: [Function (anonymous)],
  Symbol(key1): 'mykey2'
}
*/

// this is whole story how function is added into the object