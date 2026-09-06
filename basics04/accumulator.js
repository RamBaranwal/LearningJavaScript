const nums = [1, 2, 3, 4];

const res = nums.reduce( function (acc, currval) {
    console.log(`accumulator ${acc} and current val is ${currval}`);
    return acc + currval;
},  0);
//  /\
//  ||
    // initial value is 0 we can give here 1 2 3 any one of these


// this is done by the arrow function
const res1 = nums.reduce( (acc, currval) => acc + currval , 0);
console.log(res1);

const course = [
    {
        name: "js course",
        price: 999
    },
    {
        name: "py course",
        price: 1999
    },
    {
        name: "mobile dev course",
        price: 4999
    },
    {
        name: "cloud course",
        price: 12999
    }
]

const res2 = course.reduce( (acc, item) => acc + item.price, 0 );
console.log(res2);