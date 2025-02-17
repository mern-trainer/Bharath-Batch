import { useState } from "react"

// state -> state is a variable that holds data that can change over time
// Hooks -> Hooks are functions that let you use state and other React features 
// without writing a class

const App = () => {

    // let value = 0
    const [counter, setCounter] = useState(10)

    const handleClick = () => {
        setCounter(counter + 1)
    }

    return <div className="d-flex flex-column gap-3 align-items-center">
        <div>{counter}</div>
        <button onClick={handleClick}>Increment</button>
    </div>
}

export default App  