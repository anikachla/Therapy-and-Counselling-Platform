// import React ,{useState} from "react"
// import "./custlogin.css"
// import axios from "axios"
// import { useNavigate } from "react-router-dom"
// import logo from '../images/image4.jpg';
// import Navg from "../navgbar/navgbar";



// const headerLinks1 = [
  
//     { text: "          ", url: "" },
//     { text: "         ", url: "#" },
//     { text: "          ", url: "" },
   
//   ];
// const Custlogin = ({ setLoginUser }) => {
//     const history = useNavigate()

//     const [user, setUser] = useState({
//         email: "",
//         password: "",
     
//     })

//     const handleChange = e => {
//         const { name, value } = e.target
//         setUser({
//             ...user,
//             [name]: value
//         })
//     }


//     const login = () => {
//         axios.post("http://localhost:9000/custlogin", user)
//             .then(res => {
//                 alert(res.data.message)

//                 setLoginUser(res.data.customer)
//                 if(res.data.customer){
//                     console.log("Navigating to home page...")
//                     console.log("CustomerID= "+res.data.customer._id);
//                     history(`/custhome/${res.data.customer._id}`)
//                 }else{
//                     console.log("Navigating to login page...")
//                     history("/custlogin")
//                 }
//             })
//     }
//     return (
//         <div style={{ backgroundImage:`url(${logo})` }} className="home_img">
//               {/* <Navgbar links={headerLinks1} className="" /> */}
//       <Navg links={headerLinks1} className="" />

//         <div className="login">
//             {console.log("User", user)}
//             <h3>Customer Login</h3>
//             <input type="text" name="email" value={user.email} placeholder="Enter email" onChange={handleChange} ></input>
//             <input type="password" name="password" value={user.password} placeholder="Enter password" onChange={handleChange} ></input>
//             <div className="button"  onClick={login}>Login</div>
//             <div>or</div>
//             <div className="button" onClick={() => history("/custregister")}>Register</div>
//         </div>
//         </div>
//     )

// }

// export default Custlogin
import React ,{useState} from "react"
import "./custlogin.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Singlenavgbar from "../navgbar/singlenavgbar";



const headerLinks1 = [
  
    // { text: "          ", url: "" },
    // { text: "         ", url: "#" },
    // { text: "          ", url: "" },
   
  ];
const Custlogin = ({ setLoginUser }) => {
    const history = useNavigate()

    const [user, setUser] = useState({
        email: "",
        password: "",
     
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }


    const login = () => {
        axios.post("http://localhost:9000/custlogin", user)
            .then(res => {
                alert(res.data.message)

                setLoginUser(res.data.customer)
                if(res.data.customer){
                    console.log("Navigating to home page...")
                    console.log("CustomerID= "+res.data.customer._id);
                    history(`/custhome/${res.data.customer._id}`)
                }else{
                    console.log("Navigating to login page...")
                    history("/custlogin")
                }
            })
    }
    return (
        <div className="mainculo">
              {/* <Navgbar links={headerLinks1} className="" /> */}
      <Singlenavgbar links={headerLinks1} className="" />
        <div className="maloginc">
        <div className="loginimgc">
 
        </div>
        <div className="logincu">
            {console.log("User", user)}
            <h3>Customer Login</h3>
            <input type="text" name="email" value={user.email} placeholder="Enter email" onChange={handleChange} ></input>
            <input type="password" name="password" value={user.password} placeholder="Enter password" onChange={handleChange} ></input>
            <div className="button"  onClick={login}>Login</div>
            <div className="ancdiv">Don't have an account? <a href="/custregister" className="anc">Register</a></div>
            {/* <div className="button" onClick={() => history("/custregister")}>Register</div> */}
        </div>
        
        </div>
        </div>
    )

}

export default Custlogin