import { Fragment } from "react"
import Header from "../Components/Header"
import LearnMore from "../Components/LeanMore"

const HomePage = () => {
    return <Fragment>
        <Header />
        <LearnMore />
        <div className="hero">
            <video autoPlay muted loop src="https://www.volvocars.com/files/cs/v3/assets/blt618dcb179a89242d/blt67d06c56ca6d4f5b/6572f9b3cc2f77000dc17180/homepage-hero-video-desktop-21x9.mp4?branch=prod_alias"></video>
            <div className="content">
                <h5>A new era for safety</h5>
                <h2>Does how you feel affect how you drive?</h2>
                <button>Learn More</button>
            </div>
        </div>
    </Fragment>
}

export default HomePage