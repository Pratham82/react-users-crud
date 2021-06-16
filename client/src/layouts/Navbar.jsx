import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'

export default function Header() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand href="/">Users-CRUD</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">List Users</Nav.Link>
          <Nav.Link href="/addUsers">Add Users</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
