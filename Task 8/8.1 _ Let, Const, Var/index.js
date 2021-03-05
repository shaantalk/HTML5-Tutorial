// ========================= VAR = Before ES-6 var was used everywhere =========================
// ................................................
// var greetings = "hey hi";
// function newFunction() {
//   var hello = "hello";
//   console.log(hello);
// }
// console.log(greetings);
// console.log(hello); // ReferenceError: hello is not defined
// ................................................
// The problem with var
// var greetings = "Hi";
// var condition = 4;
// console.log(greetings); //Hi
// if (condition > 3) {
//   var greetings = "Hello";
// }
// console.log(greetings); //Hello
// ................................................
// ========================= LET = Block scoped replacement for var. Currently used everywhere =========================
// ................................................
// let greetings = "Hi";
// let condition = 4;
// if (condition > 3) {
//   let greetings = "Hello";
//   console.log(greetings); //Hello
// }
// console.log(greetings); //Hi
// ................................................
// let can be updated but not re-declared.
// let greetings = "Hi";
// greetings = "Hello";
// console.log(greetings); //Hello
// let greetings = "Hi";
// let greetings = "Hello"; // error: Identifier 'greeting' has already been declared
// console.log(greetings);
// ................................................
// ========================= CONST = constant values. Can be initialized just once. =========================
// ................................................
// const greetings = "Hi";
// greetings = "Hello"; // error: Assignment to constant variable.
// const greetings = "Hi";
// const greetings = "Hello"; // error: Identifier 'greeting' has already been declared
// ................................................
// const greetings = {
//   message: "Hi",
//   times: 4,
// };
// cannot do this:
// const greetings = {
//   words: "Hello",
//   number: "five",
// }; // error:  Assignment to constant variable.
// // can do this:
// greetings.message = "Hello";
// console.log(greetings);
// ................................................

// ========================= Hoisting of variables and functions in JS =========================
// Hoisting = mechanism where variables and function declarations are moved to the top of their scope before code execution
// Step 1 : at compile time, the variable declaration is added to the enclosing lexical scope
// Step 2 : at runtime, when the scope is entered any variables added to the lexical environment are initialized to the undefined value so they are available to use in the scope

// console.log(greetings);
// var greetings = "Hello";
// it is interpreted as this:
// var greetings;
// console.log(greetings); // greetings is undefined
// greetings = "Hello";

// ========================= Temporal Dead Zone in JS =========================
// Temporal Dead Zone is a behavior in JavaScript that occurs when declaring a variable with the let and const keywords, but not with var.

// ======== VAR ========
// Don't get the error. we get undefined
// function noError() {
//   var greetings = "Hello World!";
//   console.log(greetings);
// }
// noError();
// function yesError() {
//   console.log(greetings); //undefined
//   var greetings = "Hello World!";
// }
// yesError();

// ======== LET ========
// Don't get the error. we get undefined
// function noError() {
//   let greetings = "Hello World!";
//   console.log(greetings);
// }
// noError();
// function yesError() {
//   console.log(greetings); // ReferenceError: greetings is not defined
//   let greetings = "Hello World!";
// }
// yesError();

// ======== CONST ========
// Don't get the error. we get undefined
// function noError() {
//   const greetings = "Hello World!";
//   console.log(greetings);
// }
// noError();
// function yesError() {
//   console.log(greetings); // ReferenceError: greetings is not defined
//   const greetings = "Hello World!";
// }
// yesError();
