import React from "react"
import { Col, Row, Container } from "../components/Grid";
import HomeHero from "../components/HomeHero"

function Home() {
    return (
        <Container fluid>
            <Row>
                <Col size="md-1">

                </Col>
                <Col size="md-6">
                    <h1>Hero</h1>
                    <HomeHero />
                </Col>
                <Col size="md-4">
                    <Row>
                        <Col size="md-12">
                            <p>Thing One</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-12">
                            <p>Thing Two</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;