//This is the navigation bar
import React from 'react';
import './styles/Navigation.css'

function Navigation() {
    
  return (
      <div className="navWrapper">
        <div className="topnav">
            <ul className="parent-nav-btns-wrapper">
            <li><a><button>CONTACT</button></a></li> 
            <li><a><button>BLOG</button></a></li>  
            <li><a><button>LEARN</button></a></li>
            <li><a><button>SERVICES</button></a></li>
            <li id="highlight"><a><button>ABOUT</button></a></li>
            </ul>
            <h1>EVASE</h1>
        </div>
      </div>
  )
}

export default Navigation;