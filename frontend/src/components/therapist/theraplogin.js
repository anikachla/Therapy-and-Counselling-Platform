

// import React,{useState} from "react"
// import "./theraplogin.css"
// import axios from "axios"
// import { useNavigate } from "react-router-dom"
// import logo from '../images/image4.jpg';
// import Navg from "../navgbar/navgbar"


// const headerLinks1 = [
    
//     { text: "", url: "#" },
//     { text: "", url: "#" },
//     { text: "Home", url: "http://localhost:3000" },
   
//   ];

// const Theraplogin = ({ setLoginUser }) => {
//     const history = useNavigate()

//     const [user, setUser] = useState({
//         email: "",
//         password: ""
//     })

//     const handleChange = e => {
//         const { name, value } = e.target
//         setUser({
//             ...user,
//             [name]: value
//         })
//     }


//     const login = () => {
//         axios.post("http://localhost:9000/theraplogin", user)
//             .then(res => {
//                 alert(res.data.message)
//                 setLoginUser(res.data.therapist)
//                 if(res.data.therapist)
//                 {
//                     console.log("Navigating to home page...")
//                     history(`/theraphome/${res.data.therapist._id}`)
//                 }
//                 else
//                 {
//                     console.log("Navigating to login page...")
//                     history("/theraplogin")
//                 }
//             })
//     }
//     return (
//         <div style={{ backgroundImage:`url(${logo})` }} className="home_img">
//       <Navg links={headerLinks1} className="" />
       
//         <div className="login">
//             {console.log("User", user)}
//             <h1>Therapist Login</h1>
//             <input type="text" name="email" value={user.email} placeholder="Enter email" onChange={handleChange} ></input>
//             <input type="password" name="password" value={user.password} placeholder="Enter password" onChange={handleChange} ></input>
//             <div className="button" onClick={login}>Login</div>
//         </div>
//         </div>
//     )

// }

// export default Theraplogin



import React,{useState} from "react"
import "./theraplogin.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import "../customer/custlogin.css"
import Singlenavgbar from "../navgbar/singlenavgbar"


const headerLinks1 = [
    
    // { text: "", url: "#" },
    // { text: "", url: "#" },
    // { text: "Home", url: "http://localhost:3000" },
   
  ];

const Theraplogin = ({ setLoginUser }) => {
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
        axios.post("http://localhost:9000/theraplogin", user)
            .then(res => {
                alert(res.data.message)
                setLoginUser(res.data.therapist)
                if(res.data.therapist)
                {
                    console.log("Navigating to home page...")
                    history(`/theraphome/${res.data.therapist._id}`)
                }
                else
                {
                    console.log("Navigating to login page...")
                    history("/theraplogin")
                }
            })
    }
    return (
        <div className="mainculo">
      <Singlenavgbar links={headerLinks1} className="" />
      <div className="maloginc">
        <div className="loginimgt">
 
        </div>
        <div className="logincu">
            {console.log("User", user)}
            <h1>Therapist Login</h1>
            <input type="text" name="email" value={user.email} placeholder="Enter email" onChange={handleChange} ></input>
            <input type="password" name="password" value={user.password} placeholder="Enter password" onChange={handleChange} ></input>
            <div className="button" onClick={login}>Login</div>
        </div>
        </div>
        </div>
    )

}

export default Theraplogin
