import React from 'react';
import { Navbar, Nav, NavDropdown, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

function Navbar1() {
    return (
        <>
            <Navbar bg = "dark" variant = "dark" expand = "lg" >
            <Navbar.Brand href = "/" exact><img href = "https://drive.google.com/file/d/1jNIHgQYP_W2-r35ExBTsL_InvI-5iIYk/view?usp=sharing" alt = ""/></Navbar.Brand>
            <Navbar.Brand href = "/" exact>Adventureify</Navbar.Brand>
            <Navbar.Toggle  />
            <Navbar.Collapse >
            <Nav className = "mr-auto">
            <Nav.Link href = "/" exact>Home</Nav.Link>
            <NavDropdown title = "Adventures">
                <NavDropdown.Item href ='./Paragliding'>Paragliding</NavDropdown.Item>
                <NavDropdown.Item href = "./Riverrafting">River Rafting</NavDropdown.Item>
                <NavDropdown.Item href = "./skydive">Sky Diving</NavDropdown.Item>
                <NavDropdown.Item href = "./riverrafting">Scuba Diving</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href = "/About">About Us</Nav.Link>
            <Nav.Link href = "/Contact">Contact Us</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            <Form>
            <Button type = "submit" >Sign-Up</Button>
            </Form>
        </Navbar>
        </>
    )
}

export default Navbar1;