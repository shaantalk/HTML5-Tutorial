// THIS : is a special keyword in JS
// this points to any particular object. Now, which is that object is depends on how a function which includes 'this' keyword is being called.

// var myVar = 100;
// function WhoIsThis() {
//   var myVar = 200;
//   alert(myVar); // 200
//   alert(this.myVar); // 100
// }
// WhoIsThis(); // inferred as window.WhoIsThis()
// var obj = new WhoIsThis();
// alert(obj.myVar);

// The following four rules applies to this in order to know which object is referred by this keyword.
// 1 : Global Scope
// 2 : Object's Method
// 3 : call() or apply() method
// 4 : bind() method

// Global Scope ===============================================================================================================================
// If a function which includes 'this' keyword, is called from the global scope then this will point to the window object.
// var myVar = 100;
// function WhoIsThis() {
//   var myVar = 200;
//   alert("myVar = " + myVar); // 200
//   alert("this.myVar = " + this.myVar); // 100
// }
// WhoIsThis(); // inferred as window.WhoIsThis()
// Here WhoIsThis() is being called from the global scope.
// The global scope means in the context of window object. like window.WhoIsThis().
// So in the above example, 'this' keyword in WhoIsThis() function will refer to window object.
// So, this.myVar will return 100. But, if you access myVar without this then it will refer to local myVar variable defined in WhoIsThis() function.

// 'this' points to global window object even if it is used in an inner function
// var myVar = 100;
// function SomeFunction() {
//   function WhoIsThis() {
//     var myVar = 200;
//     alert("myVar = " + myVar); // 200
//     alert("this.myVar = " + this.myVar); // 100
//   }
//   console.log(this); // window object
//   WhoIsThis();
// }
// SomeFunction();

// Object's Method ===============================================================================================================================
// When you create an object of a function using new keyword then this will point to that particular object.

// Example 1 :
// var myVar = 100;
// function WhoIsThis() {
//   this.myVar = 200;
// }
// var obj1 = new WhoIsThis();
// var obj2 = new WhoIsThis();
// obj2.myVar = 300;
// alert(obj1.myVar); // 200
// alert(obj2.myVar); // 300

// Example 2 : obj will have two properties myVar and display, where display is a function expression.
// So, this inside display() method points to obj when calling obj.display().
// var myVar = 100;
// function WhoIsThis() {
//   this.myVar = 200;
//   this.display = function () {
//     console.log(this);
//     var myVar = 300;
//     alert("myVar = " + myVar); // 300
//     alert("this.myVar = " + this.myVar); // 200
//   };
// }
// var obj = new WhoIsThis();
// obj.display();

// The above example behaves the same way when object created using object literal
// var myVar = 100;
// var obj = {
//   myVar: 200,
//   whoIsThis: function () {
//     var myVar = 300;
//     alert(myVar); // 300
//     alert(this.myVar); // 200
//   },
// };
// obj.whoIsThis();

// call() and apply() ==========================================================================================================================
// var myVar = 100;
// function WhoIsThis() {
//   console.log(this);
//   alert(this.myVar);
// }
// var obj1 = { myVar: 200, whoIsThis: WhoIsThis };
// var obj2 = { myVar: 300, whoIsThis: WhoIsThis };
// WhoIsThis(); // 'this' will point to window object ----> 100
// WhoIsThis.call(obj1); // 'this' will point to obj1 ----> 200
// WhoIsThis.apply(obj2); // 'this' will point to obj2 ----> 300
// obj1.whoIsThis.call(window); // 'this' will point to window object ----> 100
// WhoIsThis.apply(obj2); // 'this' will point to obj2 ----> 300

// bind() ======================================================================================================================================
// Introduced since ES-5 to set the context of 'this' to a specified object when a function is invoked.
// Helpful in setting up the context of this for a callback function.
// var myVar = 100;
// function SomeFunction(callback) {
//   var myVar = 200;
//   callback();
// }
// var obj = {
//   myVar: 300,
//   WhoIsThis: function () {
//     alert("'this' points to " + this + ", myVar = " + this.myVar);
//   },
// };
// SomeFunction(obj.WhoIsThis);
// ================================================ Problem 1 ================================================
// When you pass obj.WhoIsThis as a parameter to the SomeFunction() then 'this' points to global window object insted of obj
// Because obj.WhoIsThis() will be executed as a global function by JavaScript engine.
// ================================================ Solution 1 ================================================
// Explicitly setting 'this' value using bind() method. Thus, SomeFunction(obj.WhoIsThis.bind(obj)) will set 'this' to obj by specifying obj.WhoIsThis.bind(obj).
// SomeFunction(obj.WhoIsThis.bind(obj));

// Precedence ============================================================================================================================================================
// The following is precedence of order.
// 1 : bind()
// 2 : call() and apply()
// 3 : Object method
// 4 : Global scope

// if [ a function is being called as callback function using bind() ]
// else [ function is being called using call() or apply() with parmeter ]
// else [function is being called as an object function ]
// else [ function is being called in the global scope without dot notation or using window object ]
