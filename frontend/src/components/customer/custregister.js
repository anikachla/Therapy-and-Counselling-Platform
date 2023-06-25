import React, {useState} from "react"
import "./custreg.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import logo from '../images/image4.jpg';
import Navg from "../navgbar/navgbar";

const headerLinks1 = [
  
    // { text: "          ", url: "" },
    // { text: "         ", url: "#" },
    // { text: "          ", url: "" },
   
  ];
const CustRegister = () => {

    const history1 = useNavigate()
    const [ user, setUser ] = useState({
        name: "",
        email : "",
        phone: "",
        address1 : "",
        address2 : "",
        city : "",
        state : "",
        country : "",
        pincode : "",
        password : "",
        reEnterPassword : ""
    })

    const handleChange = e => {
        const {name , value} = e.target
        setUser({
            ...user,
            [name] : value
        })
    }
    const register = () =>{
        const {name,email,phone,address1,address2,city,state,country,pincode,password, reEnterPassword} = user
        if(name && email && phone && address1 && address2 && city && state && country && pincode && password && (password === reEnterPassword)){
            axios.post("http://localhost:9000/custregister", user)
            // console.log("yo")
            .then(res => alert(res.data.message))
            history1("/custlogin")
        }
        else{
            alert("Invalid input")
        }

    }
    return (
        
        <div className="maincureg">
      <Navg links={headerLinks1} className="" />
      <div className="maincureg1">
      <div className="regimgc"></div>
        <div className="registercu">
            {console.log("User",user)}
            <h3>Customer Register</h3>
            <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={handleChange} ></input>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={handleChange} ></input>
            <input type="text" name="phone" value={user.phone} placeholder="Your Phone Number" onChange={handleChange} ></input>
            <input type="text" name="address1" value={user.address1} placeholder="Address Line 1" onChange={handleChange} ></input>
            <input type="text" name="address2" value={user.address2} placeholder="Address Line 2" onChange={handleChange} ></input>
            <input type="text" name="city" value={user.city} placeholder="City" onChange={handleChange} ></input>
            <input type="text" name="state" value={user.state} placeholder="State" onChange={handleChange} ></input>
            <input type="text" name="country" value={user.country} placeholder="Country" onChange={handleChange} ></input>
            <input type="text" name="pincode" value={user.pincode} placeholder="Pincode" onChange={handleChange} ></input>
            <input type="password" name="password" value={user.password} placeholder="Your password" onChange={handleChange} ></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter password" onChange={handleChange}></input>
            <div className="button" onClick={register}>Register</div>
            <div className="ancdivr">Already have an account? <a href="/custlogin" className="ancr">Login</a></div>


        </div> 
        </div>
        </div>
    )


}

export default CustRegister