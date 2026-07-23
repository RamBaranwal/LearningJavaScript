const name = "hitesh"
const repoCount = 100;

// console.log("name is " + name + " his repo count is " + repoCount); 
// old fashioned

console.log(`name is ${name} his repo count is ${repoCount}`);

const sun = "sun";
console.log(sun);

const naam = new String('Hitesh');
console.log(naam);

//output
// sun
// [String: 'Hitesh']

console.log(naam.__proto__);    // -> {}
// __proto__   -> it is only the Method thats why we we check it
// same as str.toUpperCase()
console.log(naam.__proto__.toUpperCase);
// [Function: toUpperCase]


console.log(naam.length);
console.log(naam.toUpperCase());
console.log(naam.charAt(3));
console.log(naam.indexOf('i'));

const gamename = "hellojikyahaal";
console.log(gamename.substring(1,4));       // negative values not worked here
// Important:
// ❌ Negative indexes are not allowed.
// If you give a negative value, JavaScript treats it as 0.
console.log(gamename.slice(-2,4));
// slice(-2,4)

// First convert -2:

// String length = 14
// -2 means 14 - 2 = 12

// Now:

// Start index = 12
// End index = 4

// Since 12 > 4, slice() returns an empty string:
console.log(gamename.slice(8,-4));
console.log(gamename.slice(-14,4));

const spaceName = "      iufdb ia f     ";
console.log(spaceName.trim());

console.log(spaceName.trimStart());          // trim only start
console.log(spaceName.trimEnd());            // trim only end

console.log(gamename.replace("kyahaal", "kikarraheho"));

let url = "hitesh.com";
url = url.replace(".com", "@gamil.com");
console.log(url.replace(".com", "@gamil.com"));
console.log(url.split(''));
console.log(url.split('@'));
