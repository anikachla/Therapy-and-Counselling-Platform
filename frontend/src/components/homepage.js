/** 
import React from "react"
import "./homepage.css"
import Header from './Header/Header';
import Footer from "./footer/footer";
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container ,Card, Col, Button} from 'react-bootstrap';  
import img1 from '../components/images/image1.jfif';  
import img2 from '../components/images/c1.png'; 
import img3 from '../components/images/c2.png'; 



import logo from '../components/images/image2.png'; // Tell webpack this JS file uses this image
import mindknit from '../components/images/mindknit.JPG'; // Tell webpack this JS file uses this image
const Homepage = () => {

    return (
        <div>
        <Header />
        <div className="homepage">
           
            <img src={logo} alt="Logo" className= "home_img" />
            <div className="text">
            
           
           
            <span className=" text1  text-center ">
                <p className="text1">.Mindknit.</p>
            </span>
                <div className="text3 sidepad">
                 Choosing the right therapist to help you with your mental and emotional health can be tough. 
                    What you’re seeking help for is, by definition, personal.
                    So, how do you find one  that’s right for you?
                    Mindknit has a range of therapists you can choose from !

                 </div>
                 <div className="box1">
                 </div>

                 <span className=" text1  text-center ">
                  <p className="text2">Why is therapy necessary ?</p>
                 </span>
                
                  <div className="text3 sidepad text-center empty">
                   <p>Therapists guide people through some of the most personal and painful experiences of their lives, helping them overcome depression, live with loss, and stop self-destructive behavior. Hence in these fast changing timesyou should not be embarassed to meet one ! </p>
                 

                  </div>

              
               </div>

            </div>
            <div className="filler">
            <Container className='p4 sidepad2 '>  
            <Col md="30">  
                <Card className="p4">  
                <Card.Img variant="top" className="cim" src={img1} />  
                <Card.Body>  
                    <div className="text3">Take Help</div>  
                    <Card.Text className="text4">  
                      When your anxiety, stress or trauma does not let you focus on your daily activites, and you no longer enjoy the activites you did so fondly, seek help through a therapist . 
                    </Card.Text>  
                   
                </Card.Body>  
                </Card>  

                <Card className="p4">  
                <Card.Img variant="top" className="cim" src={img2} />  
                <Card.Body>  
                    <div className="text3">Inform your loved ones</div>  
                    <Card.Text className="text4">  
                    It's hard to let out what you truly feel for the fear of being judged, but you need to discuss your mental state with your friends or family. Do not suffer in silence. Let it out and feel warmth.
                    </Card.Text>  
                  
                </Card.Body>  
                </Card>  

                <Card className="p4">  
                <Card.Img variant="top" className="cim" src={img3} />  
                <Card.Body>  
                    <div className="text3">Mind spiralling</div>  
                    <Card.Text className="text4">  
                     Your mind may tell you lies or exaggerate situations. Draw the line as soon as you start overthinking . Remember some questions can be left unanswered.
                    </Card.Text>  
                   
                </Card.Body>  
                </Card>  

                
            </Col>  
            </Container> 
            </div>


            <div className="text3  text-center empty down">
            <Footer/>
            </div>
        </div>
            );

}

export default Homepage
anika hello april **/

//christy 8th may
import React from "react"
import "./homepage.css"
import Header from './Header/Header';
import Footer from "./footer/footer";
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container ,Card, Col, Button} from 'react-bootstrap';  
import img1 from '../components/images/image1.jfif';  
import img2 from '../components/images/c1.png'; 
import img3 from '../components/images/c2.png'; 



import logo from '../components/images/image2.png'; // Tell webpack this JS file uses this image
import mindknit from '../components/images/mindknit.JPG'; // Tell webpack this JS file uses this image
const Homepage = () => {

    return (
        <div>
        <Header />
        <div className="homepage">
           
            <img src={logo} alt="Logo" className= "home_imgh" />
            <div className="text">
            
           
           
            <span className=" text1  text-center ">
                <p className="text1">.Mindknit.</p>
            </span>
                <div className="text3 sidepad">
                 Choosing the right therapist to help you with your mental and emotional health can be tough. 
                    What you’re seeking help for is, by definition, personal.
                    So, how do you find one  that’s right for you?
                    Mindknit has a range of therapists you can choose from !

                 </div>
                 <div className="box1">
                 </div>

                 <span className=" text1  text-center ">
                  <p className="text2">Why is therapy necessary ?</p>
                 </span>
                
                  <div className="text3 sidepad text-center empty">
                   <p>Therapists guide people through some of the most personal and painful experiences of their lives, helping them overcome depression, live with loss, and stop self-destructive behavior. Hence in these fast changing timesyou should not be embarassed to meet one ! </p>
                 

                  </div>

              
               </div>

            </div>
            <div className="filler">
            <Container className='up p4 sidepad2 '>  
            <Col md="30">  
                <Card className="p4">  
                <Card.Img variant="top" className="cim" src={img1} />  
                <Card.Body>  
                    <div className="text3">Take Help</div>  
                    <Card.Text className="text4">  
                      When your anxiety, stress or trauma does not let you focus on your daily activites, and you no longer enjoy the activites you did so fondly, seek help through a therapist . 
                    </Card.Text>  
                   
                </Card.Body>  
                </Card>  

                <Card className="p4">  
                <Card.Img variant="top" className="cim" src={img2} />  
                <Card.Body>  
                    <div className="text3">Inform your loved ones</div>  
                    <Card.Text className="text4">  
                    It's hard to let out what you truly feel for the fear of being judged, but you need to discuss your mental state with your friends or family. Do not suffer in silence. Let it out and feel warmth.
                    </Card.Text>  
                  
                </Card.Body>  
                </Card>  

                <Card className="p4">  
                <Card.Img variant="top" className="cim" src={img3} />  
                <Card.Body>  
                    <div className="text3">Mind spiralling</div>  
                    <Card.Text className="text4">  
                     Your mind may tell you lies or exaggerate situations. Draw the line as soon as you start overthinking . Remember some questions can be left unanswered.
                    </Card.Text>  
                   
                </Card.Body>  
                </Card>  

                
            </Col>  
            </Container> 
            </div>
            {/* <div className="teamsemp">
            <h2>Meet the Team</h2>
             <div className="sakshi">

             </div>
            </div> */}

            <div className="text3  text-center empty down">
            <Footer/>
            </div>
        </div>
            );

}

export default Homepage
