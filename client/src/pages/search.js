import React, { useState, useEffect } from "react";
import API from "../utils/API"
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn, TextArea } from "../components/Form";
import { List, ListItem } from "../components/Items";
import { Link } from "react-router-dom";
import HomeHero from "../components/HomeHero"
import HomeExtra from "../components/HomeExtra"
import AddThread from "../components/AddThread"

function Search() {

    const [thread, setThread] = useState([])
    const [newThread, setNewThread] = useState({})

    useEffect(() => {
        loadThreads()
    }, [])

    function loadThreads() {
        API.getThreads()
            .then(res =>
                setThread(res.data)
            )
            .catch(err => console.log(err));
    };

    function handleInputChange(event) {
        const { name, value } = event.target;
        setNewThread({ ...newThread, [name]: value })
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        if (newThread.topicName) {
            API.addThread({
                topicName: newThread.topicName,
                content: newThread.content
            })
                .then(res => loadThreads())
                .catch(err => console.log(err));
        }
    };

    return (
        <Container fluid>
            <Row>
                <Col size="md-1" />
                <Col size="md-10">
                    <HomeExtra>
                        <Input
                            onChange={handleInputChange}
                            name="topicName"
                            placeholder="Name (required)"
                        />
                        <FormBtn
                            onClick={handleFormSubmit}

                        >Search</FormBtn>
                        <AddThread />
                    </HomeExtra>
                </Col>
            </Row>
            <Row>
                <Col size="md-1" />
                <Col size="md-10">
                    <HomeHero>
                        <h2>Forums</h2>
                    </HomeHero>
                </Col>
            </Row>
        </Container>
    )
}

export default Search;