// In JS, you can code async tasks in 3 ways :

// ================================================ 1 ================================================
// Callbacks : When an async operation had been completed, a callback function (meaning call me back when the operation has been completed) is executed:
// const callbackFunction = result = {
//   // Called when the operation completes
// };
// asyncOperation(params, callbackFunction);
// ----------------------------------- Problem -----------------------------------
// But as soon as you handle multiple async operations, the callback functions nest into each other ending in callback hell.

// ================================================ 2 ================================================
// Promise is a placeholder object for the results of an async task. With the use of promises, you can handle the async operations easier.

// const promise = asyncOperation(params);

// promise.then(result => {
//   // Called when the operation completes
// });
// ----------------------------------- Problem -----------------------------------
// Then Chain : .then().then()...then() chains of promises ? An issue of promises is their verbosity (the fact or quality of using more words than needed; wordiness).

// ================================================ 3 ================================================
// async/await : (starting ES2017) Lets you write async code in a concise and sync manner:

// (async function() {
//   const result = await asyncOperation(params);
//   // Called when the operation completes
// })();

// Note: async/await is syntactic sugar on top of promises.
