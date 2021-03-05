// ============ Function.prototype.call() : Invokes the function and allows you to pass in arguments one by one using commas ============
// let customer1 = { name: "Shaan", email: "shaan@gmail.com" };
// let customer2 = { name: "Nikka", email: "nikka@gmail.com" };

// function greeting(text, text2) {
//   console.log(`${text} ${this.name}, ${text2}`);
// }
// let argu = ["Hello", "How are you?"];
// greeting.call(customer2, ...argu);
// greeting.call(customer1, "Hello", "How are you?"); // output : Hello Shaan, How are you?
// greeting.call(customer2, "Hello", "How are you?"); // output : Hello Nikka, How are you?

// ============ Function.prototype.apply() : Invokes the function and allows you to pass in arguments as an array ============
// let customer1 = { name: "Shaan", email: "shaan@gmail.com" };
// let customer2 = { name: "Nikka", email: "nikka@gmail.com" };
// function greeting(text, text2) {
//   console.log(`${text} ${this.name}, ${text2}`);
// }
// let argu = ["Hello", "How are you?"];
// greeting.apply(customer2, argu);
// greeting.apply(customer1, ["Hello", "How are you?"]); // output : Hello Shaan, How are you?
// greeting.apply(customer2, ["Hello", "How are you?"]); // output : Hello Nikka, How are you?

// Function.prototype.bind() returns a new function, allowing you to pass in a this array and any number of arguments.
// Use it when you want that function to later be called with a certain context, like events.
// let customer1 = { name: "Shaan", email: "shaan@gmail.com" };
// let customer2 = { name: "Nikka", email: "nikka@gmail.com" };

// function greeting(text) {
//   console.log(`${text} ${this.name}`);
// }
// let helloShaan = greeting.bind(customer1);
// let helloNikka = greeting.bind(customer2);
// helloShaan("Hello"); // Hello Shaan
// helloNikka("Hello"); // Hello Nikka
