import React from 'react'
import {Navbar,Button,
  Container,Form,FormControl} from 'react-bootstrap'




export default function Header(){
return(
<Navbar  >
  <Container fluid>
    <Navbar.Brand href="/" >Movie App</Navbar.Brand>
   
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-primary">Search</Button>
      </Form>
   
  </Container>
</Navbar>
)
}