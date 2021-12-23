import axios from 'axios';
import React, { useState } from 'react';
import {
    Button,
    Form,
    Row,
    Col,
  
  } from "react-bootstrap";

function Adduser() {
    const [postData, setpostData] = useState({
        firstName:"",
        lastName:'',
        age:"",
        field:""
      })

    const handleChange=(e)=>{
        setpostData({...postData,[e.target.name]:e.target.value})
      }
    const posted=()=>{
        axios.post("http://localhost:9001/api/insertOne",postData)
        
    }

    return (
        <div>
     <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter First Name" name="firstName" onChange={handleChange}/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Last Name" name="lastName" onChange={handleChange}/>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Age</Form.Label>
            <Form.Control type="number" placeholder="Enter Age" name="age" onChange={handleChange}/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Field</Form.Label>
            <Form.Control type="text" placeholder="Enter Field" name="field" onChange={handleChange}/>
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit" onClick={posted}>
          Submit
        </Button>
      </Form>
        </div>
    )
}

export default Adduser
