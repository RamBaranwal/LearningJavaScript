const user = {
    userName: "Hitesh",
    email: "hitesh@exampl.com",
    loginCount : 2,
    signedIn: true,

    getDatabase: function(){
        console.log("Database received");
    },
    getName: function(){
        console.log(`User Name: ${this.userName}`)
    },
    writeWholeObject: function(){
        console.log(this);
    }
}

console.log(user['userName']);       //  Hitesh
console.log(user.userName);          //  Hitesh

console.log(user.getDatabase());     //  Database received     and    also  due to console lof it print the function {undefined}
console.log(user.getName());         //  User Name: Hitesh      {undefined}

// --------------------------------------------------------------------------------------------------------------
console.log(user.writeWholeObject());   // due to we pass {this} inside it pass whole object when we call it
// {
//   userName: 'Hitesh',
//   email: 'hitesh@exampl.com',
//   loginCount: 2,
//   signedIn: true,
//   getDatabase: [Function: getDatabase],
//   getName: [Function: getName],
//   writeWholeObject: [Function: writeWholeObject]
// }
// ---------------------------------------------------------------------------------------------------------------
console.log(this);
// {}     we  call it out of the scope here nothing is there so we say that empty object

// -----------------------------------------------------------------------------------------
function User (userName, loginCount, signedIn){
    this.userName = userName;
    this.loginCount = loginCount;
    this.signedIn = signedIn;

    return this;
}

const userOne = User("Himgange", 5, true);
console.log(userOne);
// due to we are not created new object it pass all data inside if we make {new} object
// but not giving the keyword new to it so it also refere this only object userOne
// <ref *1> Object [global] {
//   global: [Circular *1],
// ...
//   userName: 'Himgange',        -> after this all are main
//   loginCount: 5,
//   signedIn: true
// }

const userTwo = User('Rajkumar', 78, false);
console.log(userOne);

// <ref *1> Object [global] {
//   global: [Circular *1],
// ...
//   userName: 'Rajkumar',
//   loginCount: 78,
//   signedIn: false
// }


// the reason of using {new} keyword before calling constructor
// as we see after again printing of same Variable userOne ->
// the object changes so to do not make it messy or override we use every time new key word
// -----------------------------------------------------------------------------------------------

// now we see how to prevent it

const userThree = new User("roshan", 4, false);
console.log(userThree);

// ---------------------------------------------------------------------------------------
// constructor work
console.log(userThree.constructor);                // [Function: User]
// ---------------------------------------------------------------------------------------