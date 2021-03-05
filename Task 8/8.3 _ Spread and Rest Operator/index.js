test = (object1, object2) => {
  if (object1 === object2) {
    console.log(
      "Refers to the same object. Both variables points to the same memory location"
    );
  } else {
    console.log("Different Object and Different memory location");
  }
};

printBoth = (oldArr, newArr) => {
  console.log({ oldArr });
  console.log({ newArr });
};

testAndPrint = (oldArr, newArr) => {
  test(oldArr, newArr);
  printBoth(oldArr, newArr);
};

let oldArr = [1, 2, 3];

// ================================================ Problem 1 ================================================
// If the simple assignment operator had been used then array2 would have been assigned a reference to array1
// let newArr = oldArr;
// testAndPrint(oldArr, newArr);
// ================================================ Solution 1 ================================================
// let newArr = [...oldArr];
// testAndPrint(oldArr, newArr);
// ================================================ Problem 2 ================================================
// The changes made in one array would reflect in the other array which in most cases is undesirable.
// let newArr = oldArr;
// oldArr.push(4);
// newArr.push(4);
// testAndPrint(oldArr, newArr);
// ================================================ Solution 2 ================================================
// let newArr = [...oldArr, 4];
// testAndPrint(oldArr, newArr);

// =========================================== Miscelenous Use Cases ===========================================

// USE CASE 1 : Sending Array as arguments-----------------------------------------------------------
// function multiply(number1, number2, number3) {
//   console.log(number1 * number2 * number3);
// }
// let argumentArr = [1, 2, 3];

// Normally we do this
// multiply(argumentArr[0], argumentArr[1], argumentArr[2]);
// Instead we can use spread operator
// multiply(...argumentArr);

// USE CASE 2 : Convert a String into a array of characters--------------------------------------------
// let greetings = "hello";
// let chars = [...greetings];
// console.log(chars);

// USE CASE 3 : Combining Arrays----------------------------------------------------------------------
// let arr1 = [1, 2, 3, 4];
// let arr2 = [5, 6, 7, 8];
// We can also do this : arr1.push(...arr2);
// let combinedArr = [...arr1, ...arr2];
// console.log(combinedArr);

// USE CASE 4 : Combining Objects----------------------------------------------------------------------
// let o1 = { a: 1, b: 2 };
// let o2 = { c: 3, d: 4, ...o1 };
// console.log(o2);

// USE CASE 5 : Rest Operator. Collects all remaining arguments of a function into an array.-----------
// Variable Length Argument

// Prints everything
// printAll = (...args) => {
//   console.log(args);
// };

// Prints everything but leaves the 1st 2 arguments
// printAll = (a, b, ...args) => {
//   console.log(args);
// };

// printAll(1, 2, 3, 4, 5, 6);

// USE CASE 6 : In apply() method------------------------------------------------------------------------

// function compare(a, b) {
//   return a - b;
// }
// In ES5, to pass an array of two numbers to the compare() function, you often use the apply() method as follows:
// var result = compare.apply(null, [1, 2]);
// console.log(result); // -1
// However, by using the spread operator, you can pass an array of two numbers to the compare() function:
// let result = compare(...[1, 2]);
// console.log(result); // -1
