import React from "react"
import "../homepage.css"
import { useNavigate } from "react-router-dom"
import Navg from "../navgbar/navgbar"
import ChatTherapistdisplay from "./chat_therapist"
import { useParams } from 'react-router-dom';


// const headerLinks1 = [
//     { text: "MyBookings  ", url: "http://localhost:3000/bookings/cust/${custid}" },
//     { text: "Meeting  ", url: "http://localhost:3000/videochat" },
//     // { text: "Payments  ", url: "#" },
   
//   ];
const CustHomepage = () =>
 {
  const { custid } = useParams();
    const history = useNavigate();
      
    const handleLogout = () => {

      localStorage.removeItem("customer");
      console.log("Removed");
      history("/");

    };
    const headerLinks1 = [
      { text: "MyBookings  ", url: `http://localhost:3000/bookings/cust/${custid}`},
      { text: "Meeting  ", url: "http://localhost:3000/videochatc" },
      // { text: "Payments  ", url: "#" },
     
    ];

    return (

        <div className="homepage">
            <Navg links={headerLinks1} className="so" onClick={handleLogout}/>
            
            {/* <div className="so" onClick={handleLogout} >Logout</div> */}
          
            {/* <h1>Hello :  {custid}</h1> */}
            <ChatTherapistdisplay  custid= {custid}/>
            
        </div>
    )

}

export default CustHomepage
