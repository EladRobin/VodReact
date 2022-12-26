import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {MdLocalMovies} from 'react-icons/md'


export const NavBar = () => {
  
  return (
       // NAV BAR  הוא נלקח כחלק מהשראה של BOOTSTRAP ובוצע בו שינוים לפי התאמה שלי
        // בלינקים אין שום קישורים שמובילים חוץ מ MOVIETIME שהוא מוביל אותך בלחיצה עליו לתפריט הראשי
    <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark" fixed='top' >
        <Container fluid>
          <Navbar.Brand href="http://localhost:3000/" >MovieTime  <MdLocalMovies size={30}/> </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
           <Navbar.Collapse id="navbarScroll " >
            <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
            >
            <Nav.Link href="/">Kids</Nav.Link>
            <Nav.Link href="/">VIP</Nav.Link>
            <Nav.Link href="/">MovieFeed</Nav.Link>
            <Nav.Link href="/">Complexes</Nav.Link>
            <Nav.Link href="/">Conferences ַ& Events</Nav.Link>

          </Nav>

          <Form className="d-flex">

          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}
   


