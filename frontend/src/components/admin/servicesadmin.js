import React, { useState } from "react"
import "./servicesadmin.css"
import axios from "axios"
import Navg from "../navgbar/navgbar"


const headerLinks1 = [
  
    { text: "Add Therapist", url: "../therapist" },
    { text: "View Therapists", url: "../viewtherapists" },
    { text: "View Customers", url: "../viewcustomers" },
  
   
  ];
const Servicesadmin = () => {

    const [user, setUser] = useState({
        name: "",
        phone: "",
        email: "",
        password: "",
        spec: "",
        qualification: "",
        desc: "",
        experience: "",
        photo:"",

    })


    const handlechange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value

        })
    }



    // const handleclick = () => {


    //     const { name, spec, experience, qualification,photo} = user
    //     if (name && spec && experience && qualification && photo) {
    //         axios.post("http://localhost:9000/therapist", user)

    //             .then(res => alert(res.data.message))
    //     }
    //     else {
    //         alert("Invalid input")
    //     }

    // }
    const handleclick = () => {
        const { name,phone,email,password, spec, experience, qualification, desc } = user;
        const formData = new FormData();
        formData.append('name', name);
        formData.append('phone', phone);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('spec', spec);
        formData.append('experience', experience);
        formData.append('qualification', qualification);
        formData.append('desc', desc);
        formData.append('photo', document.getElementById('photo').files[0]);
    
        if (name && spec && experience && qualification && phone && email && password && desc) {
            axios.post('http://localhost:9000/therapist', formData)
                .then(res => alert(res.data.message))
                .catch(err => console.log(err));
        } else {
            alert('Invalid input');
        }
    };
    return (
        <div>
      <Navg links={headerLinks1} className="" />
            <div className="adminther">
                <h3>Add Therapist</h3>
            <input name="name" value={user.name} onChange={handlechange} placeholder='Name of therapist' className="inpt"></input>
            <input name="phone" value={user.phone} onChange={handlechange} placeholder='Phone Number' className="inpt"></input>
            <input name="email" value={user.email} onChange={handlechange} placeholder='Email Address' className="inpt"></input>
            <input name="password" value={user.password} onChange={handlechange} placeholder='Password' className="inpt"></input>
            <input name="spec" value={user.spec} onChange={handlechange} placeholder='Specification' className="inpt"></input>
            <input name="experience" value={user.experience} onChange={handlechange} placeholder='Experience' className="inpt"></input>
            <input name="qualification" value={user.qualification} onChange={handlechange} placeholder='Qualifications' className="inpt"></input> <br/>
            <input name="desc" value={user.desc} onChange={handlechange} placeholder='Description' className="inpt"></input><br/>
            <label htmlFor="photo">Photo:</label>
            <input type="file" id="photo" name="photo" accept="image/*" /> <br/>
            <button onClick={handleclick} className="btnadd"> Add </button>
            </div>
        </div>
    )
}

export default Servicesadmin



