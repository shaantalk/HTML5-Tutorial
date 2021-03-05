// How it works #
// The Promise.all() method accepts an array of promises, and let’s you run callback functions after all of them resolve or one of them throws an error.
// Let’s imagine you wanted to get back data from two API endpoints:
// 1 : /posts to get a list of blog posts
// 2 : /users to get back a list of users
// The /posts endpoint provides user IDs for it’s authors, so you need data from the /users endpoint to display author information.

// Getting a single API =====================================================================================
// To get data back from the /posts endpoint, you would do this.

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// Calling multiple APIs in sequence =========================================================================
// Promises are designed to prevent callback hell.
// You could make your API calls in a sequence, cache the response of each one to a variable, and then do something with them when they’re done.

// var posts, users;
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     // Log the data to the console
//     console.log(data);

//     // Cache the data to a variable
//     posts = data;

//     // Make another API call and pass it into the stream
//     return fetch("https://jsonplaceholder.typicode.com/users");
//   })
//   .then(function (response) {
//     // Get a JSON object from the response
//     return response.json();
//   })
//   .then(function (data) {
//     // Log the data to the console
//     console.log(data);

//     // Cache the data to a variable
//     users = data;

//     // Now that you have both APIs back, you can do something with the data
//   })
//   .catch(function (error) {
//     // if there's an error, log it
//     console.log(error);
//   });

// ================================================ Problem ================================================
// 1 : This is long and kind of awkward
// 2 : Need to wait for one API responses to complete before the next can begin, which is a big inefficient.

// ================================================ Solution ================================================

// Calling multiple APIs at once ---------------------------------------------------
// With the Promise.all() method, we can pass in an array of promises. When all of them have resolved (or one fails), it will run our callback functions.

// In this case, we would pass in an array of our fetch calls.
// Promise.all([
//   fetch("https://jsonplaceholder.typicode.com/posts"),
//   fetch("https://jsonplaceholder.typicode.com/users"),
// ]);

// When they’re all completed, Promise.all() passes along an array of promises to our first .then() callback.
// To get a JSON object from each one to pass on, we can use the Array.map() method to create a new array.
// We also need to wrap that in Promise.all(), since response.json() returns a promise as well.

// The data argument in our second then() callback is an array of API data, with each item matching the corresponding API call in the Promise.all() array.
// In this example, the item at index 0 is for /posts, and the item at index 1 is for /users.

// Promise.all([
//   fetch("https://jsonplaceholder.typicode.com/posts"),
//   fetch("https://jsonplaceholder.typicode.com/users"),
// ])
//   .then(function (responses) {
//     // Get a JSON object from each of the responses
//     return Promise.all(
//       responses.map(function (response) {
//         return response.json();
//       })
//     );
//   })
//   .then(function (data) {
//     // Log the data to the console
//     // You would do something with both sets of data here
//     console.log(data);
//   })
//   .catch(function (error) {
//     // if there's an error, log it
//     console.log(error);
//   });

// As you can see, this is a lot more condensed than the previous example.
// It also means you can make both calls at once, improving the overall performance of your app.

// Browser compatibility ==================================================================================
// The Promise.all() method (and promises in general) work in all modern browsers, but have no IE support.
