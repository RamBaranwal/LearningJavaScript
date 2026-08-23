const keyAre = '123456';

const coding = ['java', 'python', 'cpp', 'ruby'];

// =========================
// Normal for loop
// =========================

for (let index = 0; index < coding.length; index++) {
    console.log(coding[index]);
}

console.log();

// =========================
// forEach() - function
// =========================

coding.forEach(function code(val) {
    console.log(val);
});

console.log();

// =========================
// forEach() - anonymous function
// =========================

coding.forEach(function (val) {
    console.log(val);
});

console.log();

// =========================
// forEach() - arrow function
// =========================

coding.forEach((val) => {
    console.log(val);
});

console.log();

// =========================
// Passing a function
// =========================

const code = (val) => {
    console.log(val);
};

coding.forEach(code);

console.log();

// =========================
// Separate function
// =========================

function printme(item) {
    console.log(item);
}

coding.forEach(printme);

console.log();

// =========================
// forEach() gives 3 values
// =========================

coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
});

console.log();

// =========================
// Array of objects
// =========================

const userName = [
    {
        firstName: "Rohit",
        lastName: "Sharma",
        USP: "opener"
    },
    {
        firstName: "Virat",
        lastName: "Kholi",
        USP: "High scoring batsman"
    }
];

userName.forEach((item, index, userName) => {
    console.log(item, index, userName);
});

userName.forEach((item, index) => {
    console.log(item.firstName, " ", item.lastName);
})

const coding2 = ["js", "ruby", "java", "python", "cpp"]


const values = coding2.forEach( (item) => {
    //console.log(item);
    return item
} )

console.log(values);

// not returning the value
// so we used the filter because
// into normal for loop we add the condition but
// into this we are not able to do