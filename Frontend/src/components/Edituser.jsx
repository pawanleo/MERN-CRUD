import React, { useState } from 'react'
import {
    Button,
    Form,
    Row,
    Col,
  
    Modal
  } from "react-bootstrap";
  
function Edituser({show,handleClose,updateStudent}) {
  
    const [state, setstate] = useState({
        firstName:"",
        lastName:'',
        age:"",
        field:""
    })
    const handleUpdate=(e)=>{
        setstate({...state,[e.target.name]:e.target.value})
    }
    
    const UpdatedData=()=>{
      updateStudent(state)
      handleClose()
    }
  
    return (
       
        
       <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>EDIT DATA</Modal.Title>
        </Modal.Header>
        <Modal.Body>     <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter First Name" name="firstName" onChange={handleUpdate}/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Last Name" name="lastName" onChange={handleUpdate}/>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Age</Form.Label>
            <Form.Control type="number" placeholder="Enter Age" name="age" onChange={handleUpdate}/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Field</Form.Label>
            <Form.Control type="text" placeholder="Enter Field" name="field" onChange={handleUpdate}/>
          </Form.Group>
        </Row>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={UpdatedData}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
     
    )
}

export default Edituser
