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

