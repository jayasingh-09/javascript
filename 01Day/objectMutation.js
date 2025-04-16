//Write a function modifyArrayAndObject that takes an array and an object as arguments. The function should:
//Add the number 4 to the end of the provided array.
//Change the value property of the provided object to 20.
function modifyArrayAndObject(arr, obj,a) {
  arr.push(4);
  obj.value = 20;
  a=55;
  console.log("Inside function:", arr, obj,a);
}

let ar = [1, 2, 3]; // ar is a reference type (array)
let value = { value: 10 }; // value is a reference type (object)
let a=90;
console.log("Before modification:", ar, value,a);
modifyArrayAndObject(ar, value);
console.log("After modification:", ar, value,a);
