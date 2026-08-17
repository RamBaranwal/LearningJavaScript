const user = {
    username: "Hitesh",
    price: 999,
    welcomemessage: function(){
        console.log(`${this.username} , welcome to webpage`)
        console.log(this)
    }
}

user.welcomemessage();
user.username = "sam";
user.welcomemessage();

console.log(this);       // {}
// but into the v8 engine of google it shows the values because that is old practice
// on that we perform task live so on desktop many things present but now many platform take that place
// now it is use empty

function chai(){
    username: "Hithesh",
    console.log(this);
    console.log(this.username);        // undefined   -> cannot access inside the function
}

chai();

const chai2 = function(){
    username: "Hitesh Purohit",
    console.log(this.username)        // undefined   -> cannot access inside the function
}

chai2();


// explicit => return -> we use return key word and {} curly braces are important
const addingTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addingTwo(3, 4));           // 7

// implicit => return is not used and 1 line code this is used many times into react
const addingthree = (num1, num2, num3) => num1 + num2 + num3;
const addingfour = (num1, num2, num3, num4) => (num1 + num2 + num3 + num4);
console.log(addingthree(4, 5, 5));       // 14
console.log(addingfour(4, 5, 5, 5));     // 19


// object execution like this into arrow function
const returnObj = () =>
({
    username: " hitesh",
    price: 330
})

console.log(returnObj());