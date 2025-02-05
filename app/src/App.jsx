import { Fragment } from "react"
import Header from "./Components/Header" // default import
import HomePage from "./Pages/HomePage"

const App = () => {
    return <Fragment>
        <Header />
        <HomePage />
    </Fragment>
}

export default App

// pascal case