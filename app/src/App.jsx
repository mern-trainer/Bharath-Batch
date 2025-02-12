import { Fragment } from "react"
import HomePage from "./Pages/HomePage"
import { Alert, Badge, Button, Image } from "react-bootstrap"
import { IoNotificationsCircle } from "react-icons/io5";
import ShopPage from "./Pages/ShopPage";

const App = () => {
    return <Fragment>
        {/* <HomePage /> */}
        <ShopPage />
    </Fragment>
}

export default App

// pascal case