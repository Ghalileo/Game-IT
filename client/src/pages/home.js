import React from "react"
import { Col, Row, Container } from "../components/Grid";
import HomeHero from "../components/HomeHero"
import HomeExtra from "../components/HomeExtra"

function Home() {
    return (
        <Container fluid>
            <Row>
                <Col size="md-1" />
                <Col size="md-6">

                    <HomeHero>
                        <h2>Trending</h2>
                    </HomeHero>
                </Col>
                <Col size="md-4">
                    <Row>
                        <Col size="md-12">
                            <HomeExtra>
                                <h2>Up Coming Games</h2>
                                <img link="https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Cyberpunk_2077_box_art.jpg/220px-Cyberpunk_2077_box_art.jpg"/>
                            </HomeExtra>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-12">
                            <HomeExtra>
                                <h2>Esports</h2>
                            </HomeExtra>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;