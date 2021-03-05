// JS is a single-threaded programming language which means only one thing can happen at a time.
// JS engine can only process one statement at a time in a single thread.

// ================================================ Pros ================================================
// We don't have to worry about the concurrency issues that we normally get for multi-threaded languages :
// 1 : Deadlock -------------------------------------------------------
// Deadlocks happen when two or more threads aren’t able to make any progress because the resource required by the first thread
// is held by the second and the resource required by the second thread is held by the first.
// 2 : Race conditions ------------------------------------------------
// Race conditions happen when threads run through critical sections without thread synchronization.
// The threads “race” through the critical section to write or read shared resources and depending on the order in which threads finish the “race”,
// the program output changes.
// 3 : Starvation -----------------------------------------------------
// Where a thread never gets CPU time or access to shared resources because other “greedy” threads hog the resources.
// 4 : Livelock -------------------------------------------------------
// Two person passing a narrow hallway example from opposite sides
// ================================================ Cons ================================================
// 1 : Can’t perform long operations such as network access without blocking the main thread.
// 2 : while(true); in console can stop all JS in a website

// Example 1 =======================================================================================
// const bar = () => console.log('bar')
// const baz = () => console.log('baz')
// const foo = () => {
//   console.log('foo')
//   bar()
//   baz()
// }
// foo()
// This code prints :
// foo
// bar
// baz
// The event loop on every iteration looks if there’s something in the call stack, and executes it until the call stack is empty.

// Example 2 =======================================================================================
// const bar = () => console.log('bar')
// const baz = () => console.log('baz')
// const foo = () => {
//   console.log('foo')
//   setTimeout(bar, 0)
//   baz()
// }
// foo()
// This code prints:
// foo
// baz
// bar
// When this code runs, first foo() is called. Inside foo() we first call setTimeout, passing bar as an argument
// and we instruct it to run immediately as fast as it can, passing 0 as the timer. Then we call baz().

// How to exhaust the call stack ? ==================================================================
// function foo() {
//   return foo();
// }
// foo();
// Range Error : Maximum call stack size exceeded

// The Message Queue ============================================================================================================================================
// When setTimeout() is called, the Browser or Node.js start the timer.
// Once the timer expires, in this case immediately as we put 0 as the timeout, the callback function is put in the Message Queue.
// The Message Queue is also where user-initiated events like click or keyboard events, or fetch responses are queued before your code has the opportunity to react to them.
// Or also DOM events like onLoad.
// The event loop gives priority to the call stack, and it first processes everything it finds in the call stack
// Once there’s nothing in there, it goes to pick up things in the message queue.
// We don’t have to wait for functions like setTimeout, fetch or other things to do their own work.
// Because they are provided by the browser, and they live on their own threads.
// For example, if you set the setTimeout timeout to 2 seconds, you don’t have to wait 2 seconds - the wait happens elsewhere.
