// javascript => A programming language that is used to create interactive and dynamic web pages.
// variable => A named container for storing data values.
// identifier => A name that is used to identify a variable, function, class, etc.
// keywords => reserved words that cannot be used as identifiers.
// data types => A type of data that can be stored in a variable.

// array => Collection of elements
// object => Collection of key-value pairs

// map, filter, reduce

// map => array manipulation
// filter => filter elements from an array based on a condition
// reduce => returns a single value by iteratively applying a function to each element of the array

// Memoization -> Memoization is a technique used to improve the performance of a function
//                by storing the results of its previous calls by caching the results of
//                its previous calls.
//                When a function is called with the same arguments as a previous call,
//                the function returns the cached result instead of recalculating it.

const map = {}

const sum = (num1, num2) => {
    const key = num1 + "," + num2
    if (map[key]) {
        console.log("Cached value", key);
        return map[key]
    }
    console.log("Calculating...", key);
    const s = num1 + num2;
    map[key] = s
    return s
}

// console.log(sum(10, 20));
// console.log(sum(10, 20));
// console.log(sum(10, 20));
// console.log(sum(10, 20));
// console.log(sum(10, 20));


// application

const cache = new Map()

const getUsers = async (id) => {
    if (cache.has(id)) {
        return cache.get(id)
    }
    console.log("Fetching data...");
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    const result = await response.json()
    cache.set(id, result)
    return result
}

const getData = async () => {
    let users = await getUsers(20)
    console.log(users);
    users = await getUsers(20)
    console.log(users);
    users = await getUsers(20)
    console.log(users);
    users = await getUsers(20)
    console.log(users);
    users = await getUsers(20)
    console.log(users);
    users = await getUsers(20)
    console.log(users);
    users = await getUsers(20)
    console.log(users);
    users = await getUsers(20)
    console.log(users);
    users = await getUsers(20)
    console.log(users);
}

getData()