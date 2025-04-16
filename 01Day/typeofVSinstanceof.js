//You are given a function processInput that can receive either a string, a number, an array, or an instance of a custom class MyClass
class MyClass {
  constructor(value) {
    this.value = value;
  }
}

function processInput(input) {
  if (typeof input === "string") {
    console.log("It's a string: " + input);
  } else if (typeof input === "number") {
    console.log("It's a number: " + input);
  } else if (input instanceof Array) {
    // Correct way to check for arrays
    console.log("It's an array with length: " + input.length);
  } else if (input instanceof MyClass) {
    console.log("It's a MyClass instance with value: " + input.value);
  } else {
    console.log("Unknown input type.");
  }
}

// Example calls to processInput with different inputs:
processInput("hello"); // String
processInput(123); // Number
processInput([1, 2, 3]); // Array
processInput(new MyClass(42)); // MyClass instance
processInput(null); // Tricky case: typeof null is "object" but not instance of MyClass
processInput({ a: 1 });
