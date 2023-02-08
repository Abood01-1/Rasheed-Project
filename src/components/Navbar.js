import React from "react";
import {
  Nav,
  NavDropdown,
  Container,
  Navbar as NavbarBs,
} from "react-bootstrap";
import "./Navbar.css";

import Logo from "../assets/Logo.jpg";

function Navbar() {
  return (
    <NavbarBs bg='white' className='shadow-sm' expand='lg'>
      <Container>
        <NavbarBs.Brand className='d-flex align-items-end '>
          <img className='me-3' width={70} src={Logo} alt='Logo' />
          <div className='University'>
            <h6>جامعة الرشيد الدولية الخاصة للعلوم والتكنولوجيا</h6>
            <h6>
              Al Rasheed International Private University for Science and
              Technology
            </h6>
          </div>
        </NavbarBs.Brand>
        <NavbarBs.Toggle aria-controls='basic-navbar-nav' />
        <NavbarBs.Collapse id='basic-navbar-nav'>
          <Nav style={{ marginLeft: "auto" }}>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#link'>Link</Nav.Link>
            <NavDropdown
              className='bg-primary rounded fw-bold '
              title='See More'
              id='basic-nav-dropdown'
            >
              <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </NavbarBs.Collapse>
      </Container>
    </NavbarBs>
  );
}

export default Navbar;
