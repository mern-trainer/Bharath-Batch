// useEffect
// Hooks -> Hooks are functions to handle states and life cycle of a component.
// DOM -> Programing interface for web documents
// useEffect -> To handle life cycle of a component
// -> add -> remove

// life cycle -> mounting, updating, unmounting
// -> Mounting -> After the initial rendering
// -> Updating -> Change in state or props
// -> Unmounting -> Before the component is removed

import { useEffect, useState } from "react"

const EffectPage = () => {

    const [counter, setCounter] = useState(0)
    const [timer, setTimer] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((state) => {
                return state + 1
            })
        }, 1000);
        return () => { // cleanup function
            clearInterval(interval)
        }
    }, [counter])

    return <div>
        <div>Timer: {timer}</div>
        <button onClick={() => setTimer(timer + 1)}>Click</button>
        <button onClick={() => setCounter(counter + 1)}>Click ({counter})</button>
    </div>
}

export default EffectPage