// console.assert(expression, object) : Writes an error to the console when expression evaluates to false ============================================
// const x = 5;
// const y = 3;
// const reason = "x must be less than y";
// console.assert(x < y, { x, y, reason });

// console.clear() : Clears the console ===============================================================================================================
// console.clear();

// console.count([label]) : Number of times that count() has been invoked at the same line and with the same label ====================================
// console.count(); //default : 1
// console.count("shaan"); //shaan : 1
// console.count();//default : 2
// console.count();//default : 3
// console.countReset();
// console.count();//default : 1
// console.countReset("shaan");
// console.count("shaan");//shaan : 1

// console.error(object [, object, ...]) : Prints object to the Console, formats it as an error, and includes a stack trace.==========================
// console.error("I'm sorry.");

// console.group(label) : Visually groups messages together until console.groupEnd(label) is called.=================================================
// Use console.groupCollapsed(label) to collapse the group when it's initially logged to the Console.
// const label = "My Friends";
// console.group(label);
// console.info("Ramprasad");
// console.info("Snehangshu");
// console.info("Nikka");
// console.groupEnd(label);

// console.info(object [, object, ...]) ===============================================================================================================
// console.info('For your information....');

// console.log(object [, object, ...]) ===============================================================================================================
// console.log('logs....');

// console.table(array) : Logs an array of objects as a table ========================================================================================
// console.table([
//   {
//     first: 'René',
//     last: 'Magritte',
//   },
//   {
//     first: 'Chaim',
//     last: 'Soutine',
//     birthday: '18930113',
//   },
//   {
//     first: 'Henri',
//     last: 'Matisse',
//   }
// ]);

// console.time([label]) : Starts a new timer. Call console.timeEnd([label]) to stop the timer and print the elapsed time to the Console =============
// console.time();
// for (var i = 0; i < 100000; i++) {
//   let square = i ** 2;
// }
// console.timeEnd();

// console.trace() : Prints a stack trace to the Console =============================================================================================
// const first = () => { second(); };
// const second = () => { third(); };
// const third = () => { fourth(); };
// const fourth = () => { console.trace(); };
// first();

// console.warn(object [, object, ...]) : Prints a warning to the Console.
// console.warn("warning");
