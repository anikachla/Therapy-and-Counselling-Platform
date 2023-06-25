
// import React, { useState,useEffect } from "react"


// import axios from "axios"

// import "../homepage.css"
// import { useNavigate } from "react-router-dom"
// import Navg from "../navgbar/navgbar"
// import { useParams } from 'react-router-dom';

// import "../customer/customer.css"
// import 'bootstrap/dist/css/bootstrap.css';





// const headerLinks1 = [
  
//     // { text: "Add Therapist", url: "../therapist" },
//     // { text: "View Therapists", url: "../viewtherapists" },
//     // { text: "View Customers", url: "../viewcustomers" },
   
//   ];
// const Therapbook = () =>
//  {
//   const { custid } = useParams();
//     const history = useNavigate();
      
//     const handleLogout = () => {

//       localStorage.removeItem("customer");
//       console.log("Removed");
//       history("/");

//     };

//     const [booking, setbooking] = useState("");
//     useEffect(() => {
//         const fetchdata = async () => {
    
//             const data = await axios.get("http://localhost:9000/");
//             setbooking(data);
//         };
//         fetchdata();
//     }, []);

//     return (
//         <div></div>

//         // <div className="viethm">
//         // <Navg links={headerLinks1} className="so" onClick={handleLogout}/>
//         //  <div className="admintherv"> 
        
//         //     <h3>List of Customers</h3>
//         //     <div className="vthetable">
//         //         <table>
//         //             <tr>
//         //             <th>#</th>
//         //                     <th>Name</th>
//         //                     <th>Phone No.</th>
//         //                     <th>Email ID</th>
//         //                     <th>City</th>
//         //                     <th>State</th>
//         //                     <th>Country</th>
//         //                     <th>Pincode</th> 
                      
//         //             </tr> 
                
//         //             {customer &&
//         //             customer?.data.map((customer,index) => (

//         //                 <tr>
//         //                 <td>{index +1}</td>
//         //                 <td> {customer.name}</td>
//         //                 <td> {customer.phone}</td>
//         //                 <td> {customer.email}</td>
//         //                 <td> {customer.city}</td>
//         //                 <td> {customer.state}</td>
//         //                 <td> {customer.country}</td>
//         //                 <td> {customer.pincode}</td>
        
                     
                       
//         //             </tr>

//         //             ))};
//         //         </table>
//         //     </div>
//         // </div>
       
    
//     )

// }

import React from "react"
import "./customer.css"
import { useNavigate } from "react-router-dom"
import Navg from "../navgbar/navgbar"

import { useParams } from 'react-router-dom';
import{ useState, useEffect } from 'react';
import axios from 'axios';



// const headerLinks1 = [
//     { text: "MyBookings  ", url: `http://localhost:3000/bookings/cust/${custid}` },
//     { text: "Meeting  ", url: "http://localhost:3000/videochat" },
//     // { text: "Payments  ", url: "#" },
   
//   ];
const Therapbook = () =>
 {
    const params = useParams();
  // console.log("frontend: "+params); // This should log an object with the therapistId property
    const { therapid } = useParams();


    const history = useNavigate();
    console.log("therapid  home== "+therapid);
    
   const headerLinks1 = [
    { text: "MyBookings  ", url: `http://localhost:3000/bookings/therap/${therapid}` },
    { text: "Meeting  ", url: "http://localhost:3000/videochat" },
    // { text: "Payments  ", url: "#" },
  ];
      
    const handleLogout = () => {

      localStorage.removeItem("customer");
      console.log("Removed");
      history("/");

    };

    const [mybookings, setmybookings] = useState([]);
    const [therapistNames, setTherapistNames] = useState({});

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get(`http://localhost:9000/bookings/therap/${therapid}`);
        if (Array.isArray(response.data)) {
          setmybookings(response.data);
        } else {
          setmybookings([]);
        }
      } catch (error) {
        console.error(error);
        setmybookings([]);
      }
    };

    fetchBookings();
  }, [therapid]);
    
 
    

    return (

        <div className="viethm">
        {/* Render your navigation or other components here */}
        <Navg links={headerLinks1} className="so" onClick={handleLogout}/>
        <div className="admintherv"> 
        <h3>Bookings</h3>
        <div className="vthetablecb">
        <table>
            <tr>
              <th>#</th>
              <th>Customer Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Email</th>
              {/* <th>Customer ID</th> */}
            </tr>
            <tr>
              <td>1</td>
              <td>Sakshi Chougule</td>
              <td>14th May 2023</td>
              <td>10:00 AM</td>
              <td>sakshich02@gmail.com</td>
            </tr>
        </table>
      </div>
      </div>
      </div>
            
        
    )


  }
// therapistId: String,
// date: Date,
// time: String,
// custid: String

export default Therapbook;
            

// </tr>
// {mybookings.map((mybookings, index) => (
// //   <tr>  key={mybookings._id}>
// <tr>
//     <td>{index + 1}</td>
//     <td>{mybookings.customerName}</td>
//     <td>{mybookings.date}</td>
//     <td>{mybookings.time}</td>
//     {/* <td>{mybookings.customerEmail}</td> */}
//     {/* <td>{mybookings.custid}</td> */}
//     <td>sakshich02@gmail.com</td>
//   </tr>
