// Question 1
// What is callback hell
// 1.Callback hell runs code in asynchronous fashion.
//It has a pyramid structure
//It becomes difficult to handle the pyramid structure in case of lengthy codes.

// function printVowels(){
//     setTimeout(()=>{
//         console.log("A");
//             setTimeout(()=>{
//                 console.log("E");
//                     setTimeout(()=>{
//                         console.log("I");
//                             setTimeout(()=>{
//                                 console.log("O");
//                                     setTimeout(()=>{
//                                         console.log("U");
//                                     }, 0000)
//                             }, 2000)
//                     }, 1000)
//             }, 5000)
//     }, 2000);
// }

// Question 2.
// What are promises and why do we need them?

// Promises are used to avoid callback hell.
// We can write clean code
// It allows us to handle eIt has 3 states
// Pending
// Resolve
// Reject

// Question 3
//What is promise chaining
// Promise chaining is a syntax that allows you to chain together multiple asynchronous tasks in a specific order.
// This is great for complex code where one asynchronous task needs to be performed after the completion of a different asynchronous task.

// Question 4
// What is the purpose of async/await keywords?

// The async keyword turns a method into an async method, which allows you to use the await keyword in its body. When the await keyword is applied, it suspends the calling method and yields control back to its caller until the awaited task is complete.
// Await can only be used inside an async method.
// The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains. Async functions may also be defined as expressions

// question 5
// Example of asyunc/ await

// const printAlpha = (time,value) => {
//     return new Promise ((resolve,reject) => {
//         setTimeout(() => {
//             console.log(value);
//             resolve();
//         },time);
//     })
// }

// async function newFunction(){
//     await printAlpha(6000,"A")
//     await printAlpha(5000,"E")
//     await printAlpha(4000,"I")
//     await printAlpha(3000,"O")
//     await printAlpha(2000,"U")
// }
// newFunction();

//Question 6
// What is hoisting?
// avaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.
// Hoisting allows functions to be safely used in code before they are declared.
// For example,
// using test before declaring console.log(test);
// undefined var test; The above program works and the output will be undefined .

//Question 7
//What is the DOM?

// DOM stands for Document Object Model is a programming API for HTML and XML documents.
// It defines the logical structure of documents and the way a document is accessed and manipulated.
// The DOM is a tree-like representation of the web page that gets loaded into the browser. It represents the web page using a‌‌ series of objects. The main object is the document object, which in turn houses other objects which also house their own objects, and so on.

// Question 8
// Difference between undefined vs not defined vs NaN

// The undefined property indicates that the variable has not been assigned a value or not declared at all. The NaN property represents a “Not-a-Number” value. The NaN property indicates that a value is not a legitimate number

// Question 9
// How many operators do we have in JS ?

// JavaScript,we have basically 7 operators:
// Arithmetic operators
// Assignment operators
// String operators
// Comparison operators
// Logical operators
// Bitwise operators
// Special operators

// Question 10
//Whats is a pure function
// A function is called pure function which gives same output for the same input passed.
// It doesn't depends upon variables whose value might change in future.
// It gives same values.

// function add(x,y){
//     console.log(x*y);
// }
// add(4,5);
// add(10,11);

//Question 11
//Q11. What are arrow functions?
// Arrow function is one of the features introduced in the ES6 version of JavaScript.
// It allows you to create functions in a cleaner way compared to regular functions. Arrow functions are a new way to write anonymous function expressions.

// (a, b) => a + b + 100;

// Question 11
