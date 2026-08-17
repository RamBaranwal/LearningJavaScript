function one() {
    const userName = "Hitesh";

    function two(){
        const website = "youtube";
        console.log(userName);
        // Hitesh
    }

    // console.log(website);
    /// error

    // console.log(two());
    // undefined

    two()
}
// console.log(one());
// undefined
one()

// when i call firstly one then two after that i get value "hitesh"

if(true){
    const userName = "Hitesh";
    if(userName === "Hitesh"){
        const window = "linux";
        console.log(userName + " " + window);
    }
    // due to scope
    // console.log(window);
    // error
}

// due to scope
// console.log(userName);
// error


console.log(addOne(5));
function addOne(num){
    return num + 1;
}

// here initilization not done properly when we store any thing into data type we use it before every call of same name
// console.log(addTwo);
const addTwo = function(num){
    return num + 2;
}
console.log(addTwo(6));


const addThree = function addthree(num){
    return num + 2;
}

console.log(addThree(7));

// not defined because of reference outsider
// console.log(addthree);

const recAddThree = function addthree(num){
    if(num <= 0){
        return 0;
    }

    return num + addthree(num - 1);
}

console.log(recAddThree(6));