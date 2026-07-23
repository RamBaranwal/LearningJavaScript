// Stack -> (Primitive data type)
// Heap -> (Non Primitive data type)

let name = "hitesh";
let surName = name;

surName = "Kumar";
console.log(surName);

let userOne = {
    name: "Hitesh",
    email: "hi#gamil.com"
}

let userTwo = userOne;

userTwo.email = "hello@gmail.com";

console.log(userTwo);

// as we see stack memory make the copies of the primitive data type
//  but into heap it point to a single reference of obj
// as result changes make happen into the userOne