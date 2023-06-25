/**import React, { useState } from "react"
import "./adminlogin.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import logo from '../images/image4.jpg';

const Adminlogin = ({ setLoginUser }) => {

    const history = useNavigate()

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }


    const login = () => {
        axios.post("http://localhost:9000/adminlogin", user)
            .then(res => {
                alert(res.data.message)
                setLoginUser(res.data.admin)
                if(res.data.admin){
                    console.log("Navigating to home page...")
                    history("/adminhome")
                }else{
                    console.log("Navigating to login page...")
                    history("/adminlogin")
                }
            })
    }

    return (
        <div style={{ backgroundImage:`url(${logo})` }} className="home_img">
        <div className="login">
            <h1>Admin Login</h1>
            <input type="text" name="email" value={user.email}  placeholder="Enter email" onChange={handleChange} ></input>
            <input type="password" name="password" value={user.password} placeholder="Enter password" onChange={handleChange} ></input>
            <div className="button"  onClick={login}>Login</div>
        </div>
        </div>
    )

}

export default Adminlogin
**/

import React, { useState } from "react"
import "./adminlogin.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"
// import Navg from "../navgbar/navgbar";
import Singlenavgbar from "../navgbar/singlenavgbar";

const headerLinks1 = [
  
    // { text: "          ", url: "" },
    // { text: "         ", url: "#" },
    // { text: "          ", url: "" },
   
  ];

const Adminlogin = ({ setLoginUser }) => {

    const history = useNavigate()

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }


    const login = () => {
        axios.post("http://localhost:9000/adminlogin", user)
            .then(res => {
                alert(res.data.message)
                setLoginUser(res.data.admin)
                if(res.data.admin){
                    console.log("Navigating to home page...")
                    history("/adminhome")
                }else{
                    console.log("Navigating to login page...")
                    history("/adminlogin")
                }
            })
    }

    return (
        <div className="mainculo">
              {/* <Navgbar links={headerLinks1} className="" /> */}
      <Singlenavgbar links={headerLinks1} className="" />
        <div className="maloginc">
        <div className="loginimga">
 
        </div>
        <div className="logincu">
            <h1>Admin Login</h1>
            <input type="text" name="email" value={user.email}  placeholder="Enter email" onChange={handleChange} ></input>
            <input type="password" name="password" value={user.password} placeholder="Enter password" onChange={handleChange} ></input>
            <div className="button"  onClick={login}>Login</div>
        </div>
        </div>
        </div>
    )

}

export default Adminlogin


