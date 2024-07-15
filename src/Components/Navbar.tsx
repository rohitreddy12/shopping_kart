import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Badge, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import store, { RootState } from '../Store/store';
import './Navbar.css'

const TopNavbar = (): any => {

    const totalItems = useSelector((store:RootState) => store.cart.numberofItems )
  return (
    <>
    <Navbar bg="light" data-bs-theme="light" sticky='top'>
        <Container>
          <Navbar.Brand as={Link} to='/'>Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>  
          </Nav>
          <Link to='/favourites'>
            <FontAwesomeIcon icon={faHeart} style={{color: "#061528",width:'20px',height:'20px',marginBottom:'4px'}} /> 
          </Link>
          <div className="cartIcon">
            <Link to="/cart">
                <Button variant='outlined-dark' style={{width:'min-content'}}><FontAwesomeIcon icon={faCartShopping} style={{color: "#061528",width:'20px',height:'20px'}} /></Button>
                <div className='badgeIcon'><Badge className='custombadgeIcon' bg="success">{totalItems}</Badge></div>
            </Link>
          </div>
          
        </Container>
    </Navbar>
    </>
    
  )
}

export default TopNavbar