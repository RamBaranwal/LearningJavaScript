function addNumber(num1, num2){    // -> it is called parameter the thing inside the parenthesis
    console.log(num1 + num2);
}

addNumber;  // this is showing reference only
addNumber();  // output Nan due -> not passing argument -> arguments are inside the parenthesis
addNumber(2, 3);

const res = addNumber(3, 4);
console.log(res);    // undefined  -> due to return is not declared

// if we take same name it be using hoisted means ->
// firstly it search it into whole body and replace with new or last one function
function addNumber2(num1, num2){
    console.log("Hitesh");
    return num1 + num2;
}

const res2 = addNumber2(3, 4);
console.log(res2);

// ------------------------------------------------------------------//
// as we see here it takes last one executed same name of function
// function addNumber2(num1, num2){
//     console.log("Hitesh");
// }
// const res3 = addNumber2(3, 4);
// console.log(res3);
//--------------------------------------------------------------------//

// isLoggendin(userName = "sam"){ ... }
// -> this helps never execute the if statement because it never be null or undefined at line 37
function isLogggedin(userName){
    // also we do (!userName){ ... }; same meaning
    // or we directly pass a value
    
    if(userName === undefined){
        console.log("Please enter the name");
        return;
    }
    return `${userName} is Logged in`;
}

console.log(isLogggedin("Rohit"));
// Rohit is Logged in

console.log(isLogggedin());
// Please enter the name
// undefined

function price(...num){
    return num;
}
// ... -> called here rest operator and
// when already array there it spread it then it is called spread operator
console.log(price(200, 300, 500, 2000));
// [ 200, 300, 500, 2000 ]

// not affect ... num or ...num space not affect it
// firstly passed argument is value 1 then value 2 and rest are into num this philosophy follow here
function price2(value1, value2, ...      num){
    return num;
}
console.log(price2(200, 300, 500, 2000));

// now we see the object passes into function
// not directly pass value firstly create obj then store value
// after it pass those value but we directly calling function and pass value
const user = {
    "name" : "Rohan",
    "prices" : 1
}

function handelObject(anyObject){
    //             bracket operator                                  dot operator
    console.log(`${anyObject["name"]} is user and his total bill is ${anyObject.prices}`);
}

handelObject(user);

console.log(user);

// directly we pass value
handelObject({
    name: "Manish",
    prices : 233
});

// now we see the array

const array1 = [200, 300, 400, 500];
function getArray(getArray){
    return getArray[0];
}

console.log(getArray(array1));   // 200

// also we do -> directly define array inside of it
console.log(getArray([100, 200, 300, 400]));