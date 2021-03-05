// Promise =======================================================================================================================================
// A Promise is an object representing the eventual completion or failure of an asynchronous operation.
// A promise is used to handle the asynchronous result of an operation.
// JS is designed to not wait for an asynchrnous block of code to completely execute before other synchronous parts of the code can run.
// Example : Making API requests to servers

// With Promises, we can defer execution of a code block until an async request is completed.
// This way, other operations can keep running without interruption.

// Promises have three states:
// 1 : Pending: This is the initial state of the Promise before an operation begins
// 2 : Fulfilled: This means the specified operation was completed
// 3 : Rejected: The operation did not complete; an error value is usually thrown

// The promise constructor takes in one argument: a callback function with two parameters — resolve and reject.
// const promise = new Promise(function (resolve, reject) {
//   // promise description
// });
// const goodVaccine = true;
// const date = new Promise(function (resolve, reject) {
//   if (goodVaccine) {
//     const patientDetails = {
//       who: "Shaan and Nikka",
//       temperature: "98 Degree Fahrenheit",
//     };
//     resolve(patientDetails);
//   } else {
//     reject(new Error("Bad vaccine, Santanu dies."));
//   }
// });
// If goodVaccine is true, resolve the promise returning the data patientDetails, else return an error object with data Bad vaccine, Santanu dies.

// Using Promises : Using a promise that has been created is relatively straightforward; we chain .then() and .catch() to our Promise like so:
// promiseName
//   .then(function (done) {
//     // the content from the resolve() is here
//   })
//   .catch(function (error) {
//     // the info from the reject() is here
//   });

// So, we use the previous promise like this :
// date
//   .then(function (done) {
//     console.log(`${done.who} goes on date`);
//   })
//   .catch(function (error) {
//     console.log(error + " Nikka goes to date alone :(");
//   });

// Little advanced example ------------------------------------------------------------------
// const myDate = function () {
//   date
//     .then(function (done) {
//       console.log("We are going on a date!");
//       console.log(done);
//     })
//     .catch(function (error) {
//       console.log(error.message);
//     });
// };
// myDate();

// .then() receives a function with an argument which is the resolve value of our promise.
// .catch returns the reject value of our promise.
// Note: Promises are asynchronous. Promises in functions are placed in a micro-task queue ( called Job Queue ) and run when other synchronous operations complete.

// Chaining Promises ============================================================
// Sometimes we may need to execute two or more asynchronous operations based on the result of preceding promises.
// In this case, promises are chained.

// Creating one more promise : if we are going on a date then let’s decide a location for our date
// const decideLocation = function (details) {
//   return new Promise(function (resolve, reject) {
//     const message = `${details.who} ordered UBER to Lalbagh`;
//     resolve(message);
//     // reject(new Error(`${details.who} quarelled while ordering UBER`));
//   });
// };

// We chain this promise to our earlier status operation like so:
// const myDate = function () {
//   date
//     .then(decideLocation) //.then(done => decideLocation(done))
//     .then(function (done) {
//       console.log(done);
//     })
//     .catch(function (error) {
//       console.log("Oh Shit ! ", error.message);
//     });
// };
// myDate();

// ES6 Job Queue ==========================================================================
// ES6 introduced the concept of the Job Queue, which is used by Promises (also introduced in ES6).
// It’s a way to execute the result of an async function as soon as possible, rather than being put at the end of the call stack.
// Promises that resolve before the current function ends will be executed right after the current function.

// const bar = () => console.log("bar");
// const baz = () => console.log("baz");
// const foo = () => {
//   console.log("foo");
//   setTimeout(bar, 0);
//   new Promise((resolve, reject) =>
//     resolve("should be right after baz, before bar")
//   ).then(resolve => console.log(resolve));
//   baz();
// };
// foo();

// foo
// baz
// should be right after baz, before bar
// bar

// That’s a big difference between Promises (and Async/await, which is built on promises) and plain old asynchronous functions through setTimeout() or other platform APIs.

// Promise.all()
// Promise.all() method takes an iterable of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises.
// const promise1 = Promise.resolve(3); // Second
// const promise2 = 42; // First
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, "foo");
// }); // Third
// Promise.all([promise1, promise2, promise3]).then(values => {
//   console.log(values);
// });
// // expected output: Array [3, 42, "foo"]
