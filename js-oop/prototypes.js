let x = {};
let y = {};
let prop = Object.getPrototypeOf(x)
console.log(prop)

let prototype = Object.getPrototypeOf(x) === Object.getPrototypeOf(y)
console.log(prototype)

console.log(x.__proto__ === y.__proto__)