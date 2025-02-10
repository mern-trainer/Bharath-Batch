import { Fragment } from "react"
import Header from "../Components/Header"
import Hero from "../Components/Hero"
import LatestProducts from "../Components/LatestProducts"
import Footer from "../Components/Footer"

const HomePage = () => {
    return <Fragment>
        <Header />
        <Hero />
        <LatestProducts />
        <Footer />
    </Fragment>
}

export default HomePage