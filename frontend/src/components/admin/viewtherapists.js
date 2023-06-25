
import React, { useState,useEffect } from "react"

import "./servicesadmin.css"
import axios from "axios"

import "../homepage.css"
import { useNavigate } from "react-router-dom"
import Navg from "../navgbar/navgbar"
import { useParams } from 'react-router-dom';

import "../customer/customer.css"
import 'bootstrap/dist/css/bootstrap.css';





const headerLinks1 = [
  
    { text: "Add Therapist", url: "../therapist" },
    { text: "View Therapists", url: "../viewtherapists" },
    { text: "View Customers", url: "../viewcustomers" },
   
  ];
const Viewtherapists = () =>
 {
  const { custid } = useParams();
    const history = useNavigate();


      
    const handleLogout = () => {

      localStorage.removeItem("customer");
      console.log("Removed");
      history("/");

    };

    const [therapist, setTherapist] = useState("");
    useEffect(() => {
        const fetchdata = async () => {
    
            const data = await axios.get("http://localhost:9000/chattherapdisplay");
            setTherapist(data);
        };
        fetchdata();
    }, []);

    return (

        <div className="viethm">
        <Navg links={headerLinks1} className="so" onClick={handleLogout}/>
         <div className="admintherv"> 
        
            <h3>List of Therapists</h3>
            <div className="vthetable">
                <table>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Password</th>
                        <th>Phone No.</th>
                        <th>Email ID</th>
                        <th>Specialization</th>
                        <th>Experience</th>
                        <th>Qualifications</th>
                        {/* <th>Description</th> */}
                    </tr> 
                
                    {therapist &&
                    therapist?.data.map((therapist,index) => (

                        <tr>
                        <td>{index +1}</td>
                        <td> {therapist.name}</td>
                        <td> {therapist.password}</td>
                        <td> {therapist.phone}</td>
                        <td> {therapist.email}</td>
                        <td> {therapist.spec}</td>
                        <td> {therapist.experience}</td>
                        <td> {therapist.qualification}</td>
                        {/* <td> {therapist.desc}</td>  */}
                       
                    </tr>

                    ))};
                </table>
            </div>
        </div>
        </div>
    
    )

}

export default Viewtherapists;


