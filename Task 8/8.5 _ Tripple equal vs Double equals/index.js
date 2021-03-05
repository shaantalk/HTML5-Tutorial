// Two possibility of checking equality in JS :
// Double Equals Operator (==) : Equality or Abstract Comparison Operator =============================================================================================
// Converts the 2 variable's values to same type before doing the conversion : Type Coercion

// Tripple Equals Operator (===) : Identity or Strict Comparison Operator =============================================================================================
// Does not perform Type Coercion. Return True only if both value and type are same.
// If both the compared objects points to (or refers) to the same memory location then only it will return true

// var a = 10;
// var b = 10;

// console.log("Double : ", a == b); // output : true
// console.log("Tripple : ", a === b); // output : true

// ================================================ Problem 1 ================================================
// console.log(+0 === -0); //true
// console.log(null === null); //true
// console.log(NaN === NaN); //false
// ================================================ Solution 1 ================================================
// Object.is() was introduced in ES6
// console.log(Object.is(5, 5)); //true
// console.log(Object.is(5, "5")); //false
// console.log(Object.is(+0, -0)); //false
// console.log(Object.is(NaN, NaN)); //true
