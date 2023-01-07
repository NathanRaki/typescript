"use strict";
function add(a, b) {
    return a + b;
}
console.log("Add: add(2,3) -> ", add(2, 3));
const sub = (a, b) => a - b;
console.log("Subtract: sub(5,2) -> ", sub(5, 2));
const mult = function (a, b) { return a * b; };
console.log("Multiply: mult(3,4) -> ", mult(3, 4));
