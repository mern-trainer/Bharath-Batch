import { Container, Form } from "react-bootstrap"
import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6"

const ContactUs = () => {
    return <Container fluid className="d-flex flex-column flex-md-row">
        <div className="w-100 mt-4 mt-md-0">
            <div>
                <FaLocationDot /> <span>Kozhikode, India</span>
            </div>
            <div>
                <FaPhone /> <span>+91 123456789</span>
            </div>
            <div>
                <FaEnvelope /> <span>mail.sample@gmail.com</span>
            </div>
        </div>
        <Form className="w-100 mt-5 mt-md-0">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="text" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={6} />
            </Form.Group>
        </Form>
    </Container>
}

export default ContactUs