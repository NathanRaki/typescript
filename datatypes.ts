// String
let lName : string;
lName = "Doe";
lName = lName.toUpperCase();
console.log(lName);

// Number
let age : number;
age = 23;
console.log(age);

// Boolean
let isAdult : boolean;
isAdult = age >= 18;
console.log(isAdult);

// Array
let skills : string[] = ["React", "Angular"];
console.log(skills);

// Enum
const enum Color { Red, Green, Blue }
let favoriteColor : Color = Color.Red;
console.log(favoriteColor);

// Tuple
let person : [id: number, name: string];
function getName(tuple : [id: number, name: string]) { return tuple[1]; }
person = [1724, "Raki"];
console.log(getName(person));

// Any
let secret;
secret = "Hihi";
secret = 10;

// Void

// Never