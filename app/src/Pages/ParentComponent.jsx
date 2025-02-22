import { useState } from "react"
import ChildComponent from "./ChildComponent"

const ParentComponent = () => {

    const [counter, setCounter] = useState(0)

    return <div>
        Parent Component - <button onClick={() => setCounter(counter + 1)}>Inc</button>
        <ChildComponent counter={counter} />
    </div>
}

export default ParentComponent