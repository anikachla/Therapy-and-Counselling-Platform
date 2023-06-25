import React  from 'react';
import { Link } from "react-router-dom";
import "./Header.css"
  
function Header() {
  return (
    <div>
      {/* <h1>My header</h1> */}
{/* 
      <nav className="navbar container ">
      <ul>
       <li> <Link to="/" className="nav-btn special">MindKnit</Link>  </li>
        <li><Link to="/custlogin" className="nav-btn">Customer Login</Link> </li>
        <li><Link to="/theraplogin" className="nav-btn">Therapist Login</Link> </li>  
        
        <li><Link to="/adminlogin" className="nav-btn">Admin Login</Link> </li>   
        </ul>
      </nav> */}
      {/* <h1 class="logo"><Link to="/">Mindknit</Link></h1> */}
      <nav className="">
      <ul class="main-nav mytxt">
          <li class = "spacer "><Link to="/">MindKnit</Link></li>
          <li class = "so"><Link to="/custlogin">Customer Login</Link></li>
          <li class = "so"><Link to="/theraplogin">Therapist Login</Link></li>
          <li class = "so"><Link to="/adminlogin">Admin Login</Link></li>
      </ul>
      </nav>

    </div>
  );
}
export default Header