import { Container, Image, Nav, Navbar } from "react-bootstrap"

const Header = () => {
    return <Navbar expand="lg" className="bg-body-tertiary" style={{height: "60px"}}>
        <Container fluid>
            <Navbar.Brand><Image src="./logo.png" alt="logo" width={100}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Blogs</Nav.Link>
                    <Nav.Link href="#link">Shop</Nav.Link>
                    <Nav.Link href="#link">Contact</Nav.Link>
                    <Nav.Link href="#link">About us</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}

export default Header