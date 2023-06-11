// NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import classes from "./NavBar.css";

function NavBar() {
    // const styles = {
    //     .navbar {
    //         background-color: #333;
    //         display: flex;
    //       }
          
    //       .navbar a {
    //         color: #fff;
    //         text-decoration: none;
    //         padding: 10px 20px;
    //       }
          
    //       .navbar a:hover {
    //         background-color: #555;
    //       }
          


    
    return (
//         <div className="navbar">
//   <ul className="nav-menu">
//     <li className="nav-item">
//       <a href="#" className="nav-link">Home</a>
//     </li>
//     <li className="nav-item">
//       <a href="#" className="nav-link">About</a>
//     </li>
//     <li className="nav-item">
//       <a href="#" className="nav-link">Services</a>
//     </li>
//     <li className="nav-item">
//       <a href="#" className="nav-link">Contact</a>
//     </li>
//   </ul>
// </div>

<div className="navbar">
  <ul className="nav-menu">
    <li className="nav-item">
      <a href="/" className="nav-link">Home</a>
    </li>
    <li className="nav-item">
      <a href="/about" className="nav-link">About</a>
    </li>
    <li className="nav-item">
      <a href="/Menu" className="nav-link">Menu</a>
    </li>
    <li className="nav-item">
      <a href="/contact" className="nav-link">Contact</a>
    </li>
  </ul>
</div>





        // <nav>
        //     <ul>
        //         <li><Link to="/">Home</Link></li>
        //         <li><Link to="/menu">Menu</Link></li>
        //         <li><Link to="/about">About</Link></li>
        //         <li><Link to="/contact">Contact</Link></li>
        //     </ul>
        // </nav>
    );
}

export default NavBar;






