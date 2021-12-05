import { Navbar, Nav, Container } from "react-bootstrap";

export default function NormalNav({ currentPage, handlePageChange }) {
  return (
    <>
      <Navbar style={{backgroundColor: " #8600b3"}} variant="dark">
        <Container>
          <Navbar.Brand >Karen Villagomez</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              className="nav-link"
              href="#about"
              onClick={() => handlePageChange("About")}
              // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={
                currentPage === "About" ? "nav-link active" : "nav-link"
              }
            >
              About
            </Nav.Link>
            <Nav.Link
              className="nav-link"
              href="#portfolio"
              onClick={() => handlePageChange("Portfolio")}
              // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={
                currentPage === "Portfolio" ? "nav-link active" : "nav-link"
              }
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              className="nav-link"
              href="#contact"
              onClick={() => handlePageChange("Contact")}
              // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={
                currentPage === "Contact" ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </Nav.Link>
            <Nav.Link
              className="nav-link"
              href="#resume"
              onClick={() => handlePageChange("Resume")}
              // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={
                currentPage === "Resume" ? "nav-link active" : "nav-link"
              }
            >
              Resume
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
