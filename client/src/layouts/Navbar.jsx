import React from 'react'
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export default function Header() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand href="/">Users-CRUD</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">List Users</Nav.Link>
          <Nav.Link href="/addUsers">Add Users</Nav.Link>
          <Nav.Link href="/editUsers">Edit Users</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
