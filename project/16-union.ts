// Union types allow a variable to hold more than one type
let value: string | number;
value = "Hello"; // valid
value = 42; // also valid
// value = true; // Error: Type 'boolean' is not assignable to type 'string | number'
console.log(value);
// Function that accepts either a string or a number
function display(input: string | number) {
  if (typeof input === "string") {
    console.log("String value: " + input);
  } else {
    console.log("Number value: " + input);
  }
}
display("Test");
display(100);
// display(true); // Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'
// Array that can hold both strings and numbers

let mixedArray: (string | number)[] = ["Alice", 30, "Bob", 25];
