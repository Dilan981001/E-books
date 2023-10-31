import React from 'react'
import Form from 'react-bootstrap/Form';
import "./contact.css"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const contact = () => {
  return (
   <center>
    <Card>
        <Card.Body>
            <h2>Contact us</h2>
        <Form>
        <Form.Group className="mb-3" controlId="formGroupName">
      <Form.Label>Name</Form.Label>
      <Form.Control type="name" placeholder="Full Name" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formGroupEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formGrouptext">
      <Form.Label>Details</Form.Label>
      <Form.Control type="text" placeholder="Details" />
    </Form.Group>
    <Button type="submit">Submit</Button>
  </Form>

        </Card.Body>


    </Card>
    </center> 
  )
}

export default contact
