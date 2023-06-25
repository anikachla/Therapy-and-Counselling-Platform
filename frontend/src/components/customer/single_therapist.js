import React, { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import axios from "axios"
import { Link, Outlet } from 'react-router-dom' // import Outlet from react-router-dom
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { InlineWidget } from "react-calendly";
import 'bootstrap/dist/css/bootstrap.css';
import Navg from "../navgbar/navgbar"
import Calendars from "./book"
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import abstractImage from '../images/abstract1.jpg';
import "./singleth.css"
import 'bootstrap/dist/css/bootstrap.css';
import MyDatePicker from "./show";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Buffer } from 'buffer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Pay from "./book";


// import log from "D:/Anika/VS_code/nodejs_therapy/3login/march11/PRJ_1/frontend/src/components/images/abstract.jpg";

const headerLinks1 = [
  { text: "MyBookings", url: "#" },
  { text: "Calendar", url: "#" },
  { text: "Payments", url: "#" },

];

const styles = {
  backgroundImage: `url(${abstractImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100%',

};



const SingleTherapist = () => {
  const params = useParams();
  // console.log("frontend: "+params); // This should log an object with the therapistId property
  const { custid, therapistId } = useParams();

  console.log("url se mila");
  console.log("custid:: " + custid); console.log("therapistId:: " + therapistId);
  console.log("frontend : " + therapistId); // This should log the therapist ID from the URL

  const [therapist, setTherapist] = useState(null);
  const [error, setError] = useState(null);



  useEffect(() => {



    const fetchData = async () => {
      try {

        const response = await axios.get(`http://localhost:9000/single_therapist/${custid}/${therapistId}`);
        console.log("Response from backend: ", response.data);
        setTherapist(response.data);
      } catch (error) {
        setError(error.message);
        console.log("single_therapist got error\n\n");
        console.log(error.message);
      }
      
    };
    fetchData();
  }, [therapistId]);


  if (error) {
    return <div>{error}</div>;
  }
  if (!therapist) {
    return (<h1> therapist object null </h1>);
  }
  return (
    // <div>
    //  {/* <div style={{ backgroundImage:`url(${abstractImage})`}} className="homeimg">  */}
    //   {/* <img src={} alt="Logo" className= "home_img" /> */}
    //   {/* <div style={styles}> container article text2*/}
    //    <Navg links={headerLinks1} className="" />
    //    <div className="">
    //     <h2>{therapist.name}</h2>
    //     <p>{therapist.spec}</p>
    //     <p>{therapist.experience}</p>
    //     <p>{therapist.qualification}</p> 

    //     </div>

    //     {/* <Calendar /> */}

    //   <div style={{ backgroundImage:`url(${abstractImage})`}} className="homeimg"> </div>
    //   {/* <img src={} alt="Logo" className= "home_img" /> */}
    //   {/* <div style={styles}> */}
    //     {/* <Outlet /> */}
    //     <MyDatePicker/> 
    //   </div>
    <div>
      <Navg links={headerLinks1} className="" />
    <div className="main">
      
      <h1 className="h1">{therapist.name}</h1>
      <div className="img">
        <img
          src={`data:${therapist.photo.contentType};base64,${Buffer.from(
            therapist.photo.data
          ).toString('base64')}`}
          alt="therapist"

        />
      </div>
      <div className="side1">
        <strong>Specialization : </strong>{therapist.spec} <br />
        <strong>Experience : </strong>{therapist.experience} <br />
        <strong>Qualification : </strong>{therapist.qualification} <br />
        <strong>Email ID : </strong>{therapist.email} <br />
      </div>
      <div className="side2">
        <strong>Description : </strong> <br />
        {therapist.desc}
      </div>
      <div className="wa">
        <strong>Contact via Whatsapp : </strong> <br />
        <a className="" href={'https://api.whatsapp.com/send?phone=91' + therapist.phone}><FontAwesomeIcon icon={faWhatsapp} />
        </a>
      </div>
      {/* <div className="datepick">
      <InlineWidget url="https://calendly.com/your_scheduling_page" />
    </div> */}
    <div className="paybut">
    <Link to={`/payment/${custid}/${therapist._id}`} className=" btn btn-success">Book</Link>
    </div>-
    </div>
    </div>

  );
}

export default SingleTherapist;

