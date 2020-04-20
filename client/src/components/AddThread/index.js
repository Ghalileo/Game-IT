import React, { useState, useEffect } from "react"
import { Input, TextArea, FormBtn } from "../Form"
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css';
import API from "../../utils/API";


function AddThread() {
    const [show, setShow] = useState(false);
    const [addThread, setAddThread] = useState([])

    useEffect(() => {
        loadThreads()
    }, [])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleInputChange(event) {
        const { name, value } = event.target;
        setAddThread({ ...addThread, [name]: value })
    };

    function loadThreads() {
        API.getThreads()
            .then(res =>
                setShow(res.data)
                )
                .catch(err => console.log(err));
    }

   
    function handleFormSubmit(event) {
        
        event.preventDefault();
        if (addThread.topicName && addThread.content) {
            API.addNewThread({
                topicName: addThread.topicName,
                content: addThread.content
            })
                .then(res => console.log(res))
                .catch(err => console.log(err));
        }
    };

    return (
        <>
            <button href="#" variant="primary" onClick={handleShow}>
                New Thread
        </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>New Thread</Modal.Title>
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
                        disabled={!(addThread.topicName && addThread.content)}
                        onClick={handleFormSubmit}
                    >Submit</FormBtn>
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