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

// const sample = (a, b) => a + b

// shorthand of funciton

// console.log(sample(10,20));

// states of promise => pending, fulfilled, rejected, settled: fulfilled or rejected

// const promiseFunc = () => {
//     return new Promise((resolve, reject) => {
//         resolve("Hi")
//     })
// }

// then => used to handle the result of a promise
// catch => used to handle the error of a promise

// promiseFunc().then((success) => {
//     console.log(success);
// }).catch((error) => {
//     console.log("error:",error);
// })

// application

// api => application programming interface => interface between client and server
// => used to exchange data between client and server

// fetch => used to fetch data from an API

// fetch("https://dummyjson.com/products").then((response) => {
//     return response.json()
// }).then((res) => {
//     console.log(res);
// }).catch((error) => {
//     console.log(error);
// })

// closure, Set, Map, Recursion

// Closure => Closure is a function that has access to the variables of its parent function even after the parent function has closed
    // => used to create private variables


const counter = () => { // outer function
    let number = 0    
    const increment = () => { // inner function
        number++
        return number
    } 
    const decrement = () => {
        number--
        return number
    }
    const reset = () => {
        number = 0
        return number
    }
    return { increment, decrement, reset }
}

const func = counter()

// console.log(func.increment());
// console.log(func.increment());
// console.log(func.increment());
// console.log(func.increment());
// console.log(func.decrement());
// console.log(func.decrement());
// console.log(func.decrement());
// console.log(func.decrement());
// console.log(func.reset());


// Set => Collection of unique elements

const s = new Set()

s.add(20)
s.add(30)
s.add(40)

const is_present = s.has(300)

s.delete(20)

// console.log(is_present);

s.clear()

// console.log(s);

// 1. remove duplicates from an array

const arr = [1, 3, 4, 2, 1, 2, 3, 4, 3, 2, 7, 8, 9, 0, 4, 5, 3, 2]

const set = new Set(arr)

const array = Array.from(set)

// console.log(array);

// map => Collection of key-value pairs

// Map => MapConstructor => new Map()

const map = new Map()

// set, get, has, delete, clear

map.set("name", "John")
map.set("age", 20)

const age = map.get("age")

const is_present2 = map.has("name2")

map.delete("age")

// console.log(map);
// console.log(is_present2);

// localStorage.setItem("nameOfUser", "John")

// const user = localStorage.getItem("nameOfUser")
// console.log(user);

// closure, Set, Map, Recursion

// Recursion => Recursion is a function that calls itself with in the body of the function

let i = 0;

const sum = () => {
    if(i == 5){
        return 5;
    }
    i++
    return sum()
}

console.log(sum());

// sum() => i == 0 => inc to 1 => return 5
// sum() => i == 1 => inc to 2 => return 5
// sum() => i == 2 => inc to 3 => return 5
// sum() => i == 3 => inc to 4 => return 5
// sum() => i == 4 => inc to 5 => return 5
// sum() => i == 5 => return 5

// sum of n number

// 4 + 3 + 2 + 1 + 0

// sum(4) => 4 + sum(3)
// sum(3) => 3 + sum(2)
// sum(2) => 2 + sum(1)
// sum(1) => 1 + sum(0)
// sum(0) => 0

const sumOfNNumbers = (n) => {
    if (n <= 0) {
        return 0
    }
    return n + sumOfNNumbers(n - 1)
}

console.log(sumOfNNumbers(10));

const maxi = (arr, max=arr[0]) => {
    if(arr.length == 0){
        return max
    }
    if(arr[0] > max){
        return maxi(arr.slice(1), arr[0])
    }
    return maxi(arr.slice(1), max)
}

console.log(maxi([1, 2, 3, 4, 5, 6, 2, 3, 4, 5, 8]));