import React from 'react';
import './navbar.css';
const Navbar = props => {
  return (
  <header className="navbar">
     <nav className="nav">
     <div></div>
       <div className="logo"><a href='#'>Dev Mike</a></div>
       <div className="spacer" />
     <div className="links"> 
      <ul>
        <li><a href = "#">Home</a></li>
        <li><a href = "#">About</a></li>
        <li><a href = "#">Contact</a></li>
        <li><a href = "#">Projects</a></li>
      </ul>
     </div> 
   </nav>
  </header>  
  
 
    
  )
}

export default Navbar;