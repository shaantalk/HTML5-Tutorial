// Functions are First-Class Objects ==========================================================================================
// JavaScript Functions are first-class objects in and as such can functions have the ability to:
// 1 : Be assigned to variables (and treated as a value) ---------------------------------
// const greet = () => {
//   console.log("Hello");
// };
// 2 : Have other functions in them ------------------------------------------------------
// const greet = () => {
//   const sayHello = () => {
//     console.log("Hello");
//   };
//   sayHello();
// };
// 3 : Return other functions to be called later ------------------------------------------
// const greet = () => {
//   const sayHello = () => {
//     console.log("Hello");
//   };
//   return sayHello;
// };
// let hello = greet();
// hello();
