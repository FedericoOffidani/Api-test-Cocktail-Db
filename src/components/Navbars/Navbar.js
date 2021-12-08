import {Navbar, NavDropdown, Nav, Form, FormControl, Button,Container,Offcanvas } from 'react-bootstrap'
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';




export default function Navbars(){
  



return <div>

<Navbar  expand={false}  className="Navbar" >
  
<Container fluid>
  <Navbar.Brand href="#" className="testoTitolo">The Cocktail Founder</Navbar.Brand>
  <Navbar.Toggle aria-controls="offcanvasNavbar" />
  <Navbar.Offcanvas
    id="offcanvasNavbar"
    aria-labelledby="offcanvasNavbarLabel"
    placement="end"
  >
    <Offcanvas.Header closeButton className="CocktailRooms">
      <Offcanvas.Title id="offcanvasNavbarLabel">Cocktail Rooms</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body  className="Under">
      <Nav className="justify-content-end flex-grow-1 pe-3">
        <Nav.Link href="/" className="testo">Home</Nav.Link>
        <Nav.Link href="/Cocktail" className="testo"> Cocktail list</Nav.Link>
        <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown" id="test">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success" className="button" >Search</Button>
      </Form>
    </Offcanvas.Body>
  </Navbar.Offcanvas>
</Container>
</Navbar>
</div>

}