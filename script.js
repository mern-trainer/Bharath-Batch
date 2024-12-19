// const age = 10
// DOM => Document Object Model => Programming interface for HTML documents => content, structure, style
// array => collection of elements
// srting => collection of characters => "hello"
// css => cascading style sheet => style

function handleSubmit() {

    const username = document.getElementById("username").value
    const password = document.getElementById("password").value

    if (username == "" || password == "") {
        alert("Please fill all the fields")
        return false
    }

    if (username.length < 4) {
        alert("Username must be atleast 4 characters")
        return false
    }

    if (username.length > 14) {
        alert("Username must be atmost 14 characters")
        return false
    }

    if (password.length < 8) {
        alert("Password must be atleast 8 characters")
        return false
    }

    if (password.length > 16) {
        alert("Password must be atmost 16 characters")
        return false
    }

    alert("Form submitted successfully")

    return false
}