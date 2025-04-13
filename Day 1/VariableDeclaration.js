console.log(variable1);
//console.log(variable2); ReferenceError: Cannot access 'variable2' before intialization because let is hoisted but not intialisted
//console.log(variable3); ReferenceError: Cannot access 'variable2' before intialization because const is hoisted but not intialisted
var variable1 = "This is a var variable";
let variable2 = "This is a let variable";
const variable3 = "This is a const variable";
console.log(variable1);
console.log(variable2);
console.log(variable3);
