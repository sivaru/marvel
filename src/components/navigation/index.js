import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container } from 'reactstrap';
import { Link } from 'react-router-dom'

import './navigation.scss'

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Container fluid>
        <Navbar color='dark' dark expand='md' fixed='top'>
          <NavbarBrand className='navigation__brand'>
            <div className='navigation__logo' />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem className='navigation__button' onClick={this.toggle}> 
                <Link className='nav-link' to='/'>Characters</Link>
              </NavItem>
              <NavItem className='navigation__button' onClick={this.toggle}> 
                <Link  className='nav-link' to='/comics'>Comics</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    );
  }
}