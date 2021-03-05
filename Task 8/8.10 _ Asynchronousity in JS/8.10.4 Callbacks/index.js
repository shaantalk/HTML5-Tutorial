// Callback Functions =========================================================================================================
// When a function simply accepts another function as an argument, this contained function is known as a callback function.

// Where have you seen callbacks in JS :-
// 1 : In simple functions like setInterval
// 2 : When making API calls : Success Callback and Error Callback

// Using anonymous functions as Callbacks ======================================================================================
// Example 1 : ---------------------------------------------------------------------------------------------
// setInterval(function () {
//   console.log("hello I am 3 seconds late!");
// }, 3000);
//   setInterval accepts a callback function as its first parameter and also a time interval.
// Example 2 : ---------------------------------------------------------------------------------------------
// const versions = ["11", "X", "12"];
// const modelNames = versions.map(function (val) {
//   return "iPhone " + val;
// });
// console.log(modelNames);
// Output : modelNames = ['iPhone 11', 'iPhone X', 'iPhone 12']
// the .map() method iterates through the array list, the method accepts a callback function which states how each element of the array will be manipulated.

// Using named functions as Callbacks ===========================================================================================
// Example 1 : ---------------------------------------------------------------------------------------------
// function greeting(name) {
//   console.log(`Hello ${name}, welcome to Durgapur!`);
// }
// function introduction(firstName, lastName, callback) {
//   const fullName = `${firstName} ${lastName}`;
//   callback(fullName);
// }
// introduction("Nikita", "Verma", greeting); // Hello Nikita Verma, welcome to Durgapur!

// ================================================ Problem 1 ================================================
// Callback Hell :
// Multiple functions can be created independently and used as callback functions. These create multi-level functions.
// When this function tree created becomes too large, the code becomes incomprehensible sometimes and is not easily refactored.
// a bunch of functions are defined up here

// lets use our functions in callback hell
// function setInfo(name) {
//     address(myAddress) {
//       officeAddress(myOfficeAddress) {
//         telephoneNumber(myTelephoneNumber) {
//           nextOfKin(myNextOfKin) {
//             console.log('done'); //let's begin to close each function!
//           };
//         };
//       };
//     };
//   }
// ================================================ Solution 1 ================================================
// Promises were introduced to simplify deferred activities.
