//This is the navigation bar
import React, { useState } from 'react';
import './styles/Navigation.scss'
import animate__animated from 'animate.css';
import Typewriter from 'typewriter-effect'
import { Navbar, Nav, NavDropdown, NavbarBrand } from 'react-bootstrap';

function Navigation() {
  const [show, setShow] = useState(false);
  const showDropdown = (e)=>{
      setShow(!show);
  }
  const hideDropdown = e => {
      setShow(false);
  }

  return (
      
      <Navbar fixed="top" className="navWrapper">
        <Navbar.Brand className="container animate__animated animate__fadeInDown"><h1 class="glitch" data-text="EVASE">EVASE</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="topnav animate__animated animate__fadeInDown">
            <Nav.Link href="#about" bsPrefix="nav-highlight" variant="hightlight">ABOUT</Nav.Link>
            <Nav.Link href="#services" bsPrefix="nav-flat" variant="flat">SERVICES</Nav.Link>
            <NavDropdown 
              title="LEARN"
              id="basic-nav-dropdown" 
              bsPrefix="nav-flat" 
              variant="flat"
              show={ show }
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
            >
              <NavDropdown.Item href="#action/3.1" variant="flat">
                <Typewriter
                          options={{
                              strings: ['Safety'],
                              autoStart: true,
                              pauseFor: 9999999,
                              delay: 50,
                              loop: true,
                          }}
                      />
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <Typewriter
                          options={{
                              strings: ['Cryptocurrency'],
                              autoStart: true,
                              pauseFor: 9999999,
                              delay: 50,
                              loop: true,
                          }}
                      />
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                <Typewriter
                        options={{
                            strings: ['Development'],
                            autoStart: true,
                            pauseFor: 9999999,
                            delay: 50,
                            loop: true,
                        }}
                    />
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                <Typewriter
                          options={{
                              strings: ['Hosting'],
                              autoStart: true,
                              pauseFor: 9999999,
                              delay: 50,
                              loop: true,
                          }}
                      />
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#forums" bsPrefix="nav-flat" variant="flat">FORUMS</Nav.Link>
            <Nav.Link href="#contact" bsPrefix="nav-flat" variant="flat">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
      // <div className="navWrapper">
      //   <div className="topnav animate__animated animate__fadeInDown">
      //       <ul className="parent-nav-btns-wrapper">
      //       <li><a><button>CONTACT</button></a></li> 
      //       <li><a><button>FORUMS</button></a></li>  
      //       <li><a><button>LEARN</button></a></li>
      //       <li><a><button>SERVICES</button></a></li>
      //       <li id="highlight"><a><button>ABOUT</button></a></li>
      //       </ul>
      //       <div class="container">
      //         <h1 class="glitch" data-text="EVASE">EVASE</h1>
      //       </div>
      //   </div>
      // </div>
  )
}

export default Navigation;