const numsArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let res = numsArray.map( (num) => {
                        return num * 10;
                    })
                    .map( (num) => num + 1)
                    .filter( function(num) {
                        return num >= 40;
                    })

console.log(res);