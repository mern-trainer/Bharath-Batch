// context api -> used to share data between components
// createContext -> creates a context object
// useContext -> used to access the context object

import { Link } from "react-router"
import { useCounter } from "../Context/CounterContext"
import { useSample } from "../Context/SampleContext"

const ContextPage = () => {

    const ctx = useSample()
    const { counter, setCounter } = useCounter()

    return <div>
        <div>{ctx}</div>
        <div>{counter}</div>
        <div>
            <button className="btn btn-primary" onClick={() => setCounter(counter + 1)}>Inc</button>
        </div>
        <Link to="/todo/advanced">Go to Advanced</Link>
    </div>
}

export default ContextPage