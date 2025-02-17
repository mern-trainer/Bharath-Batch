import { useState } from "react"

// const StateHook = () => {

//     const [counter, setCounter] = useState(0)

//     const handleClick = () => {
//         setCounter(counter + 1)
//     }

//     return <div className="d-flex flex-column gap-3 align-items-center">
//         <div>{counter}</div>
//         <button onClick={handleClick}>Increment</button>
//     </div>
// }

const StateHook = () => {

    const [counters, setCounters] = useState({ one: 20, two: 10 })
    const [password, setPassword] = useState("")

    const handleIncrementOne = () => {
        setCounters({ ...counters, one: counters.one + 1 })
    }

    const handleDecrementOne = () => {
        setCounters({ ...counters, one: counters.one - 1 })
    }

    const handleIncrementTwo = () => {
        setCounters({ ...counters, two: counters.two + 1 })
    }

    const handleDecrementTwo = () => {
        setCounters({ ...counters, two: counters.two - 1 })
    }

    const handlePasswordGenerate = () => {
        const strings = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()`
        let pass = ""
        let i = 0
        while (i < 16) {
            const randomIndex = Math.floor(Math.random() * strings.length)
            const randomChar = strings[randomIndex]
            pass += randomChar
            i++
        }
        setPassword(pass)
    }

    return <div className="d-flex flex-column gap-3 align-items-center mt-4">
        <h4>Counter 1: {counters.one}</h4>
        <div className="w-25 d-flex gap-2 flex-column">
            <button className="btn btn-primary w-100" onClick={handleIncrementOne}>Increment 1</button>
            <button className="btn btn-danger w-100" onClick={handleDecrementOne}>Decrement 1</button>
        </div>
        <h4>Counter 2: {counters.two}</h4>
        <div className="w-25 d-flex gap-2 flex-column">
            <button className="btn btn-primary w-100" onClick={handleIncrementTwo}>Increment 2</button>
            <button className="btn btn-danger w-100" onClick={handleDecrementTwo}>Decrement 2</button>
        </div>
        {password}
        <button className="btn btn-success" onClick={handlePasswordGenerate}>Generate Random Password</button>
    </div>
}

export default StateHook;