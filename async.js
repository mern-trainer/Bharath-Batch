// array => Collection of elements

// map, filter, reduce

// map => Array manipulation
// filter => filter elements from an array based on a condition
// reduce => returns a single value by iteratively applying a function to each element of the array

// synchronous => line by line execution
// asynchronous => execution of code in parallel
                // => execution of multiple tasks at the same time

// console.log("1");
// console.log("2");
// console.log("3");

// promise, (async, await)

// promise => Represents the eventual completion (or failure) of an asynchronous operation
// => Promise is the way to handle asynchronous operations in JavaScript
            
// const age = 10

// console.log(age);

// const displayAge = () => {
//     return 10
// }

// console.log(displayAge());

// function sample(a, b) {
//     return a + b
// }

const sample = (a, b) => a + b

// shorthand of funciton

// console.log(sample(10,20));

// states of promise => pending, fulfilled, rejected, settled: fulfilled or rejected

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Hi")
    }, 3000);
})

// then => used to handle the result of a promise
// catch => used to handle the error of a promise

promise.then((success) => {
    
    console.log(success);
}).catch((error) => {
    console.log(promise);
    console.log("error:",error);
})
