// Nesting async functions ======================================================================================================================================================
// Despite return <value> expression inside an async function returning the payload value and not a promise, still, when the async function is invoked it returns a promise.

// That’s a good thing because you can nest asynchronous functions!

// For example, let’s write an async function that increases an array of salaries using the slowAddition() function:

// async function increaseSalaries(baseSalaries, increase) {
//   let newSalaries = [];
//   for (let baseSalary of baseSalaries) {
//     newSalaries.push(await increaseSalary(baseSalary, increase));
//   }
//   console.log(`New salaries: ${newSalaries}`);
//   return newSalaries;
// }

// increaseSalaries([950, 800, 1000], 100);
// After 6 seconds logs "New salaries: 1050,900,1100"

// ----------------------------------- Problem -----------------------------------
// await salaryIncrease(baseSalary, increase) is called 3 times for each salary in the array. Each time JavaScript waits 2 seconds until the sum is calculated.
// ----------------------------------- Solution -----------------------------------
// Nesting async function into async functions i.e Parallel async
// In the previous example of summing an array of salaries, the summing happens in sequence: the function is paused 2 seconds for every salary.
// But you can make salary increases in parallel by using use Promise.all() utility function to start all the salary increases simultaniously:

// async function increaseSalaries(baseSalaries, increase) {
//   let salariesPromises = [];
//   for (let baseSalary of baseSalaries) {
//     salariesPromises.push(increaseSalary(baseSalary, increase));
//   }
//   const newSalaries = await Promise.all(salariesPromises);
//   console.log(`New salaries: ${newSalaries}`);
//   return newSalaries;
// }

// increaseSalaries([950, 800, 1000], 100);
// After 2 seconds logs "New salaries: 1050,900,1100"

// Step 1 : The salary increase tasks start right away (await isn’t used near increaseSalary(baseSalary, increase)) and promises are collected in salariesPromises.
// Step 2 : await Promise.all(salariesPromises) then pauses the function execution until all the async operations processed in parallel finish.
// Step 3 : Finally, only after 2 seconds, newSalaries variable contains the increased salaries.

// You’ve managed to increase the salaries of all employees in just 2 seconds, even if each operation is slow and requires 2 seconds. You’ve tricked the boss again!

// Practical async example ======================================================================================================================================================
// A common situation when you’d want to use async/await syntax is to fetch remote data.

// fetch() method is a good candidate to be used with async/await because it returns a promise that resolves to the value returned by a remote API.

// For example, here’s how you would fetch a list of movies from a remote server:

// async function fetchMovies() {
//   const response = await fetch("https://api.example.com/movies");
//   if (!response.ok) {
//     throw new Error("Failed to fetch movies");
//   }
//   const movies = await response.json();
//   return movies;
// }
// await fetch('https://api.example.com/movies') is going to pause fetchMovies() execution until the request is completed. Then you can extract the actual response using await response.json().

// async/await is syntactic sugar on top of the promises and provides a way to handle the asynchronous tasks in a synchronous manner.

// async/await has 4 simple rules:

// 1 : A function handling an asynchronous task must be marked using the async keyword.
// 2 : await promise operator pauses the function execution until promise is either resolved successfully or rejected.
// 3 : If promise resolves successfully, the await operator returns the resolved value: const resolvedValue = await promise. Otherwise, you can catch a rejected promise inside try/catch.
// 4 : An async function always returns a promise, which gives the ability to nest async functions.
