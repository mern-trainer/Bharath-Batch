import { Fragment } from "react"
import { Col, Container, Row } from "react-bootstrap"

const ShopPage = () => {
    return <Container fluid>
        <Row>
            <Col xs="12" sm="6" md="4" lg="3" className="bg-success">10</Col>
            <Col xs="12" sm="6" md="4" lg="3" className="bg-danger">10</Col>
            <Col xs="12" sm="6" md="4" lg="3" className="bg-primary">10</Col>
            <Col xs="12" sm="6" md="12" lg="3" className="bg-secondary">10</Col>
        </Row>
    </Container>
}

export default ShopPage