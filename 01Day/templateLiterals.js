const userName = "Jaya Singh";
const balance = 10;

// Using regular string
const str1 = "Hi " + userName + "," + " your balance is " + balance + ".";
console.log("Regular string: ", str1);

// Using template literal
const str2 = `Hi ${userName}, your balance is ${balance}.`;
console.log("Template literal: ", str2);
// for multiple lines
const regularString =
  "Hello there! \n" +
  "How are you \n" +
  "How can we help you today?";

const templateLiteral = `Hello there!
How are you.
How can we help you today?`;

console.log(regularString);
console.log(templateLiteral);