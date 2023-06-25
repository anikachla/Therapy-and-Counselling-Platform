
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
const Viewcustomers = () =>
 {
  const { custid } = useParams();
    const history = useNavigate();
      
    const handleLogout = () => {

      localStorage.removeItem("customer");
      console.log("Removed");
      history("/");

    };

    const [customer, setcustomer] = useState("");
    useEffect(() => {
        const fetchdata = async () => {
    
            const data = await axios.get("http://localhost:9000/chatcustdisplay");
            setcustomer(data);
        };
        fetchdata();
    }, []);

    return (

        <div className="viethm">
        <Navg links={headerLinks1} className="so" onClick={handleLogout}/>
         <div className="admintherv"> 
        
            <h3>List of Customers</h3>
            <div className="vthetable">
                <table>
                    <tr>
                    <th>#</th>
                            <th>Name</th>
                            <th>Phone No.</th>
                            <th>Email ID</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Country</th>
                            <th>Pincode</th> 
                        {/* <th>Description</th> */}
                    </tr> 
                
                    {customer &&
                    customer?.data.map((customer,index) => (

                        <tr>
                        <td>{index +1}</td>
                        <td> {customer.name}</td>
                        <td> {customer.phone}</td>
                        <td> {customer.email}</td>
                        <td> {customer.city}</td>
                        <td> {customer.state}</td>
                        <td> {customer.country}</td>
                        <td> {customer.pincode}</td>
        
                        {/* <td> {customer.desc}</td>  */}
                       
                    </tr>

                    ))};
                </table>
            </div>
        </div>
        </div>
    
    )

}

export default Viewcustomers;


