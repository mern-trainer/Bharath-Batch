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

const obj = '{"name": "Alex", "place": "kkd"}'

// console.log(sum(10, 20));
// console.log(sum(10, 20));
// console.log(sum(10, 20));
// console.log(sum(10, 20));
// console.log(sum(10, 20));


// application

const getUsers = async (id) => {
    if (localStorage.getItem(id)) {
        return JSON.parse(localStorage.getItem(id))
    }
    console.log("Fetching data...");
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    const result = await response.json()
    localStorage.setItem(id, JSON.stringify(result))
    return result
}

const getData = async () => {
    let users = await getUsers(61)
    console.log(users);
    users = await getUsers(62)
    console.log(users);
    users = await getUsers(109)
    console.log(users);
    users = await getUsers(110)
    console.log(users);
    users = await getUsers(111)
    console.log(users);
    users = await getUsers(112)
    console.log(users);
    users = await getUsers(113)
    console.log(users);
    users = await getUsers(114)
    console.log(users);
    users = await getUsers(115)
    console.log(users);
    users = await getUsers(116)
    console.log(users);
    users = await getUsers(117)
    console.log(users);
    users = await getUsers(118)
    console.log(users);
    users = await getUsers(119)
    console.log(users);
    users = await getUsers(120)
    console.log(users);
    users = await getUsers(121)
    console.log(users);
    users = await getUsers(122)
    console.log(users);
    users = await getUsers(123)
    console.log(users);
    users = await getUsers(124)
    console.log(users);
    users = await getUsers(125)
    console.log(users);
    users = await getUsers(126)
    console.log(users);
    users = await getUsers(127)
    console.log(users);
    users = await getUsers(128)
    console.log(users);
    users = await getUsers(129)
    console.log(users);
    users = await getUsers(136)
    console.log(users);
    users = await getUsers(137)
    console.log(users);
    users = await getUsers(138)
    console.log(users);
    users = await getUsers(139)
    console.log(users);
    users = await getUsers(140)
    console.log(users);
    users = await getUsers(141)
    console.log(users);
    users = await getUsers(142)
    console.log(users);
    users = await getUsers(143)
    console.log(users);
    users = await getUsers(160)
    console.log(users);
    users = await getUsers(161)
    console.log(users);
    users = await getUsers(162)
    console.log(users);
    users = await getUsers(163)
    console.log(users);
    users = await getUsers(164)
    console.log(users);
    users = await getUsers(165)
    console.log(users);
    users = await getUsers(166)
    console.log(users);
    users = await getUsers(167)
    console.log(users);
    users = await getUsers(168)
    console.log(users);
    users = await getUsers(169)
    console.log(users);
    users = await getUsers(170)
    console.log(users);
}

getData()