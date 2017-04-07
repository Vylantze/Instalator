'use strict'

import React from 'react';

import {
   Nav,
   Navbar,
   MenuItem,
   NavItem,
   NavDropdown,
} from 'react-bootstrap';

import { LinkContainer } from 'react-router-bootstrap';

export default class Header extends React.Component {
   render() {
   	return (
   		<Navbar>
            <Navbar.Header>
               <Navbar.Brand>
                  Instalator
               </Navbar.Brand>
            </Navbar.Header>
            <Nav>
               <LinkContainer to={{ pathname: '/document_translate'}}>
                  <NavItem eventKey={1} href="document_translate">Document Translate</NavItem>
               </LinkContainer>
               <LinkContainer to={{ pathname: '/my_library'}}>
                  <NavItem eventKey={2}>My Library</NavItem>
               </LinkContainer>
               <LinkContainer to={{ pathname: '/public_library'}}>
                  <NavItem eventKey={3}>Public Library</NavItem>
               </LinkContainer>
               {/*
               
                 <LinkContainer to={{ pathname: '/community'}}>
                    <NavItem eventKey={4}>Community</NavItem>
                 </LinkContainer>
                 <NavItem eventKey={5} href="#">Profile</NavItem>
                  // <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                  //   <MenuItem eventKey={3.1}>Action</MenuItem>
                  //   <MenuItem eventKey={3.2}>Another action</MenuItem>
                  //   <MenuItem eventKey={3.3}>Something else here</MenuItem>
                  //   <MenuItem divider />
                  //   <MenuItem eventKey={3.4}>Separated link</MenuItem>
                  // </NavDropdown>   
               */}
            </Nav>
        </Navbar>
   	);
	}
}

