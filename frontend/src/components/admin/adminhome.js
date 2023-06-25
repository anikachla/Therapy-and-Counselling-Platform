
/** 

import React from "react"
import "../homepage.css"
import { useNavigate } from "react-router-dom"
import logo from '../images/image2.png';

const AdminHomepage = () => {
    const history = useNavigate();

    const handleLogout = () => {
      localStorage.removeItem("admin");
      console.log("Removed");
      history("/");
    };

    return (
        <div className="homepage">
            <h1>Hello Admin</h1>
            <img src={logo} alt="Logo" className= "home_img" />
            <div className="button" onClick={handleLogout} >Logout</div>
        </div>
    )

}

export default AdminHomepage
**/

import React from "react"
import { useNavigate } from "react-router-dom"
import Navg from "../navgbar/navgbar";
import "./servicesadmin.css";

const headerLinks1 = [
  
    { text: "Add Therapist", url: "../therapist" },
    { text: "View Therapists", url: "#" },
    { text: "View Customers", url: "#" },
  ,
  ];
const AdminHomepage = () => {
    const history = useNavigate();

    const handleLogout = () => {
      localStorage.removeItem("admin");
      console.log("Removed");
      history("/");
    };

    return (
        <div className="adminhome1">
      <Navg links={headerLinks1} className="" />
      <div className="adminho">
      <h1>Welcome Admin!</h1> 

      </div>
        </div>
    )

}

export default AdminHomepage
