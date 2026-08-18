const keyAre = '123456';
const coding = ['java', 'python', 'cpp', 'ruby'];

// normal array for loop
// for (let index = 0; index < coding.length; index++) {
//     console.log(coding[index]);
// }

// foreach loop automatically start from index 0 till end
coding.forEach( function code (val) {
    console.log(val);
})
console.log();

coding.forEach( function (val) {
    console.log(val);
})
console.log();

coding.forEach( (val) => {
    console.log(val);
})
console.log();

const code = (val) => {
    console.log(val);
};

coding.forEach(code);
console.log();

// =========================
// function printme
// =========================

function printme(item){
    console.log(item);
}

coding.forEach(printme);

coding.forEach((index, item, arr) => {        /// name not matter that is defined one
    console.log(index, item, arr);
});

// ["", "", ""]
// [{}, {}, {}]

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
]

userName.forEach( (item, val) => {
    console.log(item.firstName, val.lastName);
});