import { Fragment } from "react"
import Header from "../Components/Header"
import Hero from "../Components/Hero"
import LatestProducts from "../Components/LatestProducts"
import Footer from "../Components/Footer"
import ContactUs from "../Components/ContactUs"

const HomePage = () => {
    return <Fragment>
        <Header />
        <Hero />
        <LatestProducts />
        <ContactUs />
        <Footer />
    </Fragment>
}

export default HomePage