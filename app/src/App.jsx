import { Fragment } from "react"
import HomePage from "./Pages/HomePage"
import { Alert, Badge, Button, Image } from "react-bootstrap"
import { IoNotificationsCircle } from "react-icons/io5";

const App = () => {
    return <Fragment>
        <button className="btn btn-primary btn-lg">Click</button>
        <Button variant="danger" size="lg" className="ms-2">Click</Button>
    
        <Alert variant="danger" className="mt-3 w-50">This is danger alert</Alert>

        <div>
            <h1 className="position-relative w-25">
                <IoNotificationsCircle /> <Badge bg="secondary" className="fs-6 d-flex justify-content-center align-items-center position-absolute rounded-circle top-0" style={{width: "20px", left: "30px", height: "20px"}}>2</Badge>
            </h1>
        </div>
        <Image fluid thumbnail src="https://static.vecteezy.com/system/resources/thumbnails/036/324/708/small/ai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg"/>
        
    </Fragment>
}

export default App

// pascal case