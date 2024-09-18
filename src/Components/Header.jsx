import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container style={{margin: 0}}>
          <Navbar.Brand href="/">GHMM</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/Maquina/CadastroMaquina">Teste</Nav.Link>
            <Nav.Link href="/">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}
