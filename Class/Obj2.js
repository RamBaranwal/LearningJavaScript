function multipleOf5 (num){
    return num*5;
}

const MultiOf3 = function(num){
    return num*3;
}

// firstly we know that each thing pass through object into js

// String  -------
//                 \
// Array   ------------------> Object -> Null
//                 /
// Function -----

// js functionality is that it search into its current field and find into its above filed parent grandparent filed

// when we do function.something       ->   it create object

multipleOf5.power = 2;
// MultiOf3.power = 7;
// now we also access it;

console.log(multipleOf5(5))                   // 25
console.log(multipleOf5.power);               // 2
console.log(multipleOf5.prototype);           // {}      -> because of the we make object but not configure or allocate anything inside of it

console.log(MultiOf3(4));                     // 12
console.log(MultiOf3.power);                  // undefined yet not declared
console.log(MultiOf3.prototype);              // {}   -> function also have object

function createUser (userName, price){
    this.userName = userName;
    this.price = price
}

let chai = new createUser('chai', 35);
console.log(createUser);
console.log(chai);

createUser.prototype.increment = function(){
    this.price++;
}

createUser.prototype.showUserName = function (){
    console.log(`User name is: ${this.userName}`)
}

createUser.prototype.nowPriceIs = function (){
    console.log(`${this.userName} price is now ${this.price}`);
}

let tea = new createUser('Tea', 15);
console.log(tea.increment);
tea.increment();
tea.increment();
console.log(tea.userName);
tea.nowPriceIs();
console.log(tea);

const teaPrototype = {
    specialMethod() {
        console.log("Only Tea can use this");
    }
};

Object.setPrototypeOf(tea, teaPrototype);
tea.specialMethod();

// tea.prototype.decrease = function(){
//     this.price--;
// }

// tea.decrease();
// tea.decrease();
// console.log(tea);