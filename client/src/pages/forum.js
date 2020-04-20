import React, { useEffect, useState } from "react";
import Topic from '../components/Topic';
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import HomeExtra from "../components/HomeExtra"

function Forum() {

  const [thread, setThread] = useState({})

  // When this component mounts, grab the book with the _id of props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  const {id} = useParams()
  useEffect(() => {
    API.getThread(id)
      .then(res => setThread(res.data))
      .catch(err => console.log(err));
  }, [])


    return (
        <Container fluid>
          <Row>
            <Col size="md-1" />
            <Col size="md-10">
              <HomeExtra>
              <h1>
                {thread.topicName}
              </h1>
              </HomeExtra>
              <HomeExtra>
              <h1>
                {thread.content}
              </h1>
              </HomeExtra>
            </Col>
          </Row>
        </Container>
        // <Topic/>

        
    )
}

export default Forum;