import React, { useState, useEffect } from "react"
import Form, { Input, FormBtn } from "../Form"
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"
import API from "../../utils/API";


function SignIn() {
  const [show, setShow] = useState(false);
  const [signIn, setSignIn] = useState([])

  useEffect(() => {
    loadUser()
  }, [])

  function loadUser(id) {
    API.getSignIn(id)
      .then(res => setSignIn(res.data))
      .catch(err => console.log(err))
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setSignIn({ ...signIn, [name]: value })
};

function handleFormSubmit(event) {
    event.preventDefault();
    if (newThread.topicName) {
        API.getSignIn({
            username: signIn.username,
            password: signIn.password
        })
            .then(res => loadThreads())
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
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Input
            onChange={handleInputChange}
            name="username"
            placeholder="username"
          />
          <Input
            onChange={handleInputChange}
            name="password"
            placeholder="password"
          />
          <FormBtn
            onClick={handleFormSubmit}
          >Sign in</FormBtn>
        </Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={handleClose}>
            Close
            </button>
          <button variant="primary" onClick={handleClose}>
            Save Changes
            </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SignIn;