//This is the navigation bar
import React from 'react';
import './styles/Navigation.scss'
import animate__animated from 'animate.css';

function Navigation() {
    
  return (
      <div className="navWrapper">
        <div className="topnav animate__animated animate__fadeInDown">
            <ul className="parent-nav-btns-wrapper">
            <li><a><button>CONTACT</button></a></li> 
            <li><a><button>BLOG</button></a></li>  
            <li><a><button>LEARN</button></a></li>
            <li><a><button>SERVICES</button></a></li>
            <li id="highlight"><a><button>ABOUT</button></a></li>
            </ul>
            <div class="container">
              <h1 class="glitch" data-text="EVASE">EVASE</h1>
            </div>
        </div>
      </div>
  )
}

export default Navigation;