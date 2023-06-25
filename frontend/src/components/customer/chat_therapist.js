import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import "./customer.css"
import axios from "axios"
import SingleTherapist from './single_therapist'
import 'bootstrap/dist/css/bootstrap.css';
import { Buffer } from 'buffer';
import { Col } from 'react-bootstrap';
import Navg from "../navgbar/navgbar"
// import { useNavigate } from "react-router-dom"

const headerLinks1 = [
    { text: "", url: "" },
    { text: "", url: "http://localhost:3000" },
    { text: "Home", url: "http://localhost:3000" },
   
  ];
const ChatTherapistdisplay = (props) => {


    const [therapist, setTherapist] = useState("");

    useEffect(() => {
        const fetchdata = async () => {

            const data = await axios.get("http://localhost:9000/chattherapdisplay");
            setTherapist(data);
        };
        fetchdata();
    }, []);
    return (
<div className="custh">
     

        <div className="maincrd">
            {therapist &&
                therapist?.data.map((therapist) => (
                    <div class="card" key={therapist._id}>

                        <div class="image">
                            {therapist.photo && (
                                // <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Gfp-missouri-st-louis-clubhouse-pond-and-scenery.jpg/1199px-Gfp-missouri-st-louis-clubhouse-pond-and-scenery.jpg" />
                                <img
                                    src={`data:${therapist.photo.contentType};base64,${Buffer.from(
                                        therapist.photo.data
                                    ).toString('base64')}`}
                                    alt="therapist"

                                />
                            )}
                        </div>
                        <div class="title">
                            <h3>
                                {therapist.name}</h3>
                        </div>
                        <div class="des">
                            <p> <b className="smalle"> Specialization : </b><span className="smaller">{therapist.spec}</span> <br />
                            <b className="smalle">Qualification :</b><span className="smaller"> {therapist.qualification}</span> <br />
                            <b className="smalle">Experience :</b><span className="smaller"> {therapist.experience} </span><br /><br />
                            </p>
                           <Link to={`/single_therapist/${props.custid}/${therapist._id}`} className="btn btn-success">Book Appointment </Link>
                        </div>
                    </div>
                ))}
        </div>
        </div>

    )

}

export default ChatTherapistdisplay;



