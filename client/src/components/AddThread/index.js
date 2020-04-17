import React, { useState, useEffect } from "react"
import Form, { Input, FormBtn } from "../Form"
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"
import API from "../../utils/API";


function AddThread() {
    const [show, setShow] = useState(false);
    const [addThread, setAddThread] = useState([])

    useEffect(() => {
    }, [])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleInputChange(event) {
        const { name, value } = event.target;
        setAddThread({ ...addThread, [name]: value })
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        if (signIn.username) {
            API.getAddThread({
                topicName: addThread.topicName,
                content: addThread.content
            })
                .then(res => loadUser())
                .catch(err => console.log(err));
        }
    };

    return (
        <>
            <a href="#" variant="primary" onClick={handleShow}>
                Sign In
        </a>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Sign In</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Input
                        onChange={handleInputChange}
                        name="topicName"
                        placeholder="Name (required)"
                    />
                    <TextArea
                        onChange={handleInputChange}
                        name="content"
                        placeholder="Content (required)"
                    />
                    <FormBtn
                        onClick={handleFormSubmit}
                    >Sign in</FormBtn>
                </Modal.Body>
                <Modal.Footer>
                    <button variant="secondary" onClick={handleClose}>
                        Close
            </button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddThread;