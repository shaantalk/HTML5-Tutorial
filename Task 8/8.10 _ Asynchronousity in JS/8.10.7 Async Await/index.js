// Let’s start with a simple (synchronous) function which task is to calculate the salary increase:
// function increaseSalary(base, increase) {
//   const newSalary = base + increase;
//   console.log(`New salary: ${newSalary}`);
//   return newSalary;
// }
// increaseSalary(1000, 200); // => 1200
// // logs "New salary: 1200"
// increaseSalary() is a function that sums 2 numbers. n1 + n2 is a synchronous operation.

// Your boss doesn’t want a quick increase in the employee’s salary.So you’re not allowed to use the addition operator + in increaseSalary() function.
// Instead, you have to use a slow function that requires 2 seconds to summarize numbers. Let’s name the function slowAddition():

// function slowAddition(n1, n2) {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(n1 + n2), 2000);
//   });
// }
// slowAddition(1, 5).then(sum => console.log(sum));
// // After 2 seconds logs "6"

// slowAddition() returns a promise, which resolves to the sum of arguments after a delay of 2 seconds.

// Now, how will you update the increaseSalary() function to support the slow addition?

// function increaseSalary(base, increase) {
//   const newSalary = slowAddition(base, increase);
//   console.log(`New salary: ${newSalary}`);
//   return newSalary;
// }

// increaseSalary(1000, 100); // => [object Promise]
// Logs "New salary [object Promise]"
// ----------------------------------- Problem -----------------------------------
// Unfortunately, the function increaseSalary() doesn’t know how to handle promises.
// The function considers promises regular objects: it doesn’t know how and when to extract values from promises.
// ----------------------------------- Solution -----------------------------------
// Make the increaseSalary() aware of how to handle the promise returned by slowAddition() using async/await syntax.
// Step 1 : You need to add the async keyword near the function declaration.
// Step 2 : Inside the function body, you need to use the await operator to make the function wait for the promise to be resolved.

// async function increaseSalary(base, increase) {
//   const newSalary = await slowAddition(base, increase);
//   console.log(`New salary: ${newSalary}`);
//   return newSalary;
// }
// increaseSalary(1000, 200); // => [object Promise]
// After 2 seconds logs "New salary 1200"

// =================================================================================================================================================================
// JavaScript evaluates const newSalary = await slowAddition(base, increase) the following way:
// 1 : await slowAddition(base, increase) pauses the increaseSalary() function execution
// 2 : After 2 seconds, the promise returned by slowAddition(base, increase) is resolved
// 3 : increaseSalary() function execution resumes
// 4 : newSalary is assigned with the promise’s resolved value 1200 (1000+200)
// 5 : The function execution continues as usual.

// In simple words, when JavaScript encounters await promise in an async function, it pauses the function execution until the promise is resolved.
// The promise’s resolved value becomes the result of await promise evaluation.

// ----------------------------------- Please Note -----------------------------------
// Even though return newSalary returns the number 1200, if you look at the actual value returned by the function increaseSalary(1000, 200) — it is still a promise!
// An async function always returns a promise, which resolves to the value of return value inside the function body:

// increaseSalary(1000, 200).then(salary => {
//   salary; // => 1200
// });
// async functions returning promises is a good thing because you can nest async functions.

// ================================================= Rejected Promise = Broken Async ====================================================================
// It’s unfair that the boss has put a requirement to increase slowly the salary. You’ve decided to sabotage the slowAddition() function.

// You modify the slow addition function to reject the numbers addition:

// function slowAdditionBroken(n1, n2) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => reject(new Error("Unable to sum numbers")), 3000);
//   });
// }

// slowAdditionBroken(1, 5).catch(e => console.log(e.message));
// After 3 seconds logs "Unable to sum numbers"

// ----------------------------------- Problem -----------------------------------
// How to handle a rejected promise inside the increaseSalary() async function?
// ----------------------------------- Solution -----------------------------------
// Just wrap the await operator in an try/catch clause:
// async function increaseSalaryBroken(base, increase) {
//   let newSalary;
//   try {
//     newSalary = await slowAdditionBroken(base, increase);
//   } catch (e) {
//     console.log(`Error: ${e.message}`);
//     newSalary = base * 2;
//   }
//   console.log(`New salary: ${newSalary}`);
//   return newSalary;
// }
// increaseSalaryBroken(1000, 200);
// After 3 seconds logs
// "Error: Unable to sum numbers", "New salary: 2000"

// What's happening here ?
// Step 1 : At the expression await slowAdditionBroken(base, increase) JS pauses the function execution and waits until the promise is fulfilled (the promise successfully resolved) or rejected (an error has occurred).
// Step 2 : After 3 seconds, the promise is rejected with new Error('Unable to sum numbers'). Because of rejection, the function execution jumps into the catch (e){ } clause where the base salary is multiplied by 2.

// If you don’t catch a rejected promise, then the error propagates and the promise returned by the async function gets rejected:
// async function increaseSalaryBroken(base, increase) {
//   const newSalary = await slowAdditionBroken(base, increase);
//   return newSalary;
// }
// increaseSalaryBroken(1000, 200).catch(e => {
//   e.message; // => "Unable to sum numbers"
// });
