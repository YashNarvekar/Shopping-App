import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from "react-router-bootstrap";



const Header = () => {
  return (
    <>
<Navbar bg="dark" expand="lg" variant='dark' collapseOnSelect>
      <Container>
      <LinkContainer to="/">
            <Navbar.Brand>Online Shop</Navbar.Brand>
          </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" style={{marginLeft: "850px"}}>
          {/* <LinkContainer to="/cart"> */}
            
            <Nav.Link href="/cart">
              
            <i className="fa-solid fa-cart-shopping"></i>
              Cart
            </Nav.Link>
          {/* </LinkContainer> */}


          {/* <LinkContainer to="/cart"> */}

            <Nav.Link href="/signIn">
              
            {/* <i className="fa-solid fa-user"></i> */}
              SignIn
            </Nav.Link>
           
          
          {/* </LinkContainer> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  )
}

export default Header