import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" sticky='top' className="navigation">
      <Container>
        <Navbar.Brand href="#home">Workout Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="#workout" className='link'>Workout</Nav.Link>
            <Nav.Link href="#my-workout" className='link'>My Workout</Nav.Link>
            <Nav.Link href="#analysis" className='link'>Analysis</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;