// callback function => a function that is passed as an argument to another function

// **********************************************************************

function display() {
    console.log("Display function called");
}

function myFunction(callbackFunc) {
    callbackFunc()
}

myFunction(display)

// **********************************************************************

function display(value) {
    console.log(value);
}

function sum(a, b, callbackFunc) {
    const r = a + b
    callbackFunc(r)
}

sum(10, 20, display)

// **********************************************************************

// map, filter

// array filter => returns a new array containing elements that pass a test

const arr = [20, 56, 38, 29, 10, 64, 89, 45, 32, 96]
const array = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew", "kiwi", "lemon"]

const res = arr.filter(function (element) {
    return element % 2 == 0
})

const res2 = array.filter(function (element) {
    return element.length > 5
})

console.log(res2);

// array map => returns a new array with the results of calling a function for every element in the original array
// map => array manipulation

const result = arr.map(function (element) {
    if (element % 2 == 0) {
        return element * 2
    }
    return element
})

console.log(result);

const res3 = array.map(function (element) {
    return element.toUpperCase()
})

console.log(res3);

// **************************************************************************

// reduce, find, findIndex

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// reduce => returns a single value from an array by applying a specified function to each element in the array

// let s = 0
// for (let i = 0; i < arr.length; i++){
//     s += arr[i]
// }
// console.log(s);

// const sum = arr.reduce(function (prev, element) {
//     return prev * element
// }, 1)
// console.log(sum);

// find => returns the first element in an array that matches a specified condition
// findIndex => returns the index of the first element in an array that matches a specified condition

const res4 = arr2.find(function (element) {
    return element == 5    
})

console.log(res4);

const res5 = arr2.findIndex(function (element) {
    return element == 5    
})

console.log(res5);