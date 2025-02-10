import { Carousel, Image } from "react-bootstrap"

const Hero = () => {
    return <Carousel>
        <Carousel.Item interval={2000}>
            <Image className="w-100" style={{height: "500px"}}  src="https://graphicsfamily.com/wp-content/uploads/edd/2021/07/Professional-E-Commerce-Shoes-Banner-Design.jpg" alt="ad1"/>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
            <Image className="w-100" style={{height: "500px"}}  src="https://img.freepik.com/free-vector/flat-horizontal-banner-template-black-friday-sale_23-2150852978.jpg?semt=ais_hybrid" alt="ad2"/>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
            <Image className="w-100" style={{height: "500px"}}  src="https://graphicsfamily.com/wp-content/uploads/edd/2024/11/Creative-E-Commerce-Shoes-Banner-Design-Free-PSD-02-scaled.jpg" alt="ad3"/>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
            <Image className="w-100" style={{height: "500px"}}  src="https://graphicsfamily.com/wp-content/uploads/edd/2024/11/Free-PSD-Shoes-social-media-Instagram-post-banner-template--scaled.jpg" alt="ad4"/>
        </Carousel.Item>
    </Carousel>
}

export default Hero