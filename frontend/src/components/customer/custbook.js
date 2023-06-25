import React from "react"
import "./customer.css"
import { useNavigate } from "react-router-dom"
import Navg from "../navgbar/navgbar"
import ChatTherapistdisplay from "./chat_therapist"
import { useParams } from 'react-router-dom';
import{ useState, useEffect } from 'react';
import axios from 'axios';



// const headerLinks1 = [
//     { text: "MyBookings  ", url: `http://localhost:3000/bookings/cust/${custid}` },
//     { text: "Meeting  ", url: "http://localhost:3000/videochat" },
//     // { text: "Payments  ", url: "#" },
   
//   ];
const Custbook = () =>
 {
    const params = useParams();
  // console.log("frontend: "+params); // This should log an object with the therapistId property
    const { custid, therapistId } = useParams();


    const history = useNavigate();
    console.log("custid == "+custid);
    
   const headerLinks1 = [
    { text: "MyBookings  ", url: `http://localhost:3000/bookings/cust/${custid}` },
    { text: "Meeting  ", url: "http://localhost:3000/videochatc" },
    // { text: "Payments  ", url: "#" },
  ];
      
    const handleLogout = () => {

      localStorage.removeItem("customer");
      console.log("Removed");
      history("/");

    };

    const [mybookings, setmybookings] = useState([]);
    const [therapistNames, setTherapistNames] = useState({});

 
    // useEffect(() => {
    //     const fetchdata = async () => {
    //         const data = await axios.get(`http://localhost:9000/bookings/cust/${custid}`);
    //         setmybookings(data);
    //     };
    //     fetchdata();
    // }, [custid]);

    // useEffect(() => {
    //     console.log("booking data =", mybookings);
    // }, [mybookings]);

    // useEffect(() => {
    //     const fetchBookings = async () => {
    //       try {
    //         const response = await axios.get(`http://localhost:9000/bookings/cust/${custid}`);
    //         setmybookings(response.data);
    //         console.log(mybookings);
    //       } catch (error) {
    //         console.error(error);
    //       }
    //     };
    
    //     fetchBookings();
    //   }, [custid]);


  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get(`http://localhost:9000/bookings/cust/${custid}`);
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
  }, [custid]);
    
 
    

    return (

        // <div className="homepage">
        //     <Navg links={headerLinks1} className="so" onClick={handleLogout}/>
            
        //     <table>
        //             <tr>
        //             <th>#</th>
        //                     <th>Th id</th>
        //                     <th>date </th>
        //                     <th>time</th>
        //                     <th>cust id</th>
                            
        //                 {/* <th>Description</th> */}
        //             </tr> 
                
        //             {mybookings &&
        //             mybookings?.data.map((mybookings,index) => (

        //                 <tr>
        //                 <td>{index +1}</td>
        //                 <td> {mybookings.therapistId}</td>
        //                 <td> {mybookings.date}</td>
        //                 <td> {mybookings.time}</td>
        //                 <td> {mybookings.custid}</td>
                       
        
        //                 {/* <td> {customer.desc}</td>  */}
                       
        //             </tr>

        //             ))};
        //         </table>
        // </div>
        <div className="viethm">
        {/* Render your navigation or other components here */}
        <Navg links={headerLinks1} className="so" onClick={handleLogout}/>
        <div className="admintherv"> 
        <h3>Bookings</h3>
        <div className="vthetablecb">
        <table>
            <tr>
              <th>#</th>
              <th>Therapist Name</th>
              <th>Date</th>
              <th>Time</th>
              {/* <th>Customer ID</th> */}
            </tr>
            {mybookings.map((mybookings, index) => (
            //   <tr>  key={mybookings._id}>
            <tr>
                <td>{index + 1}</td>
                <td>{mybookings.therapistName}</td>
                <td>{mybookings.date}</td>
                <td>{mybookings.time}</td>
                {/* <td>{mybookings.custid}</td> */}
              </tr>
            ))}
        </table>
      </div>
      </div>
      </div>
            
        
    )

}

export default Custbook;
// therapistId: String,
// date: Date,
// time: String,
// custid: String