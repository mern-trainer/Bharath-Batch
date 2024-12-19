// const age = 10
// DOM => Document Object Model => Programming interface for HTML documents => content, structure, style
// array => collection of elements
// srting => collection of characters => "hello"
// css => cascading style sheet => style

const errors = document.getElementsByClassName("form-error")

function handleResetErrors() {
    for (let i = 0; i < errors.length; i++){
        errors[i].innerText = ""
    }
}

function handleSubmit() {

    const username = document.getElementById("username").value
    const password = document.getElementById("password").value

    if (username == "" && password == "") {
        errors[0].innerText = "Username is required"
        errors[1].innerText = "Password is required"
        return false
    }

    if (username == "") {
        errors[0].innerText = "Username is required"
        return false
    } 

    if (username.length < 4) {
        errors[0].innerText = "Username must be atleast 4 characters"
        return false
    }

    if (username.length > 14) {
        errors[0].innerText = "Username must be atmost 14 characters"
        return false
    }

    if (password == "") {
        errors[1].innerText = "Password is required"
        return false
    }

    if (password.length < 8) {
        errors[1].innerText = "Password must be atleast 8 characters"
        return false
    }

    if (password.length > 16) {
        errors[1].innerText = "Password must be atmost 16 characters"
        return false
    }

    alert("Form submitted successfully")
    return false
}