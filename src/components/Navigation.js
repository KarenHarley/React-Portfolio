import "./Navigation.css";
//import Navbar from 'react-bootstrap/Navbar'
//import Container from 'react-bootstrap/Container';
//import Offcanvas from 'react-bootstrap/Offcanvas'

import {
  Navbar,
  Nav,
  Container,
  Offcanvas,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Navigation({ currentPage, handlePageChange }) {
  return (
<>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
 </>
  );
}

export default Navigation;
