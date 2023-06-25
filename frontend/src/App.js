import React, { useState } from 'react';
import './App.css';
import Homepage from './components/homepage';
import Header from './components/Header/Header';
import CustRegister from './components/customer/custregister';
import Custlogin from './components/customer/custlogin';
import Theraplogin from './components/therapist/theraplogin';
import Adminlogin from './components/admin/adminlogin';
import AdminHomepage from './components/admin/adminhome';
import CustHomepage from './components/customer/custhome';
import TherapHomepage from './components/therapist/theraphome';
import Servicesadmin from './components/admin/servicesadmin';
import ChatTherapistdisplay from './components/customer/chat_therapist';
import SingleTherapist from './components/customer/single_therapist';
import ChatRoom from './pages/index';
import ChatRoomc from './pages/index1';
import RoomPage from './pages/room';
import Pay from './components/customer/book';
import ErrorBoundary from './components/ErrorBoundary';
import Viewcustomers from './components/admin/viewcustomers';
import Viewtherapists from './components/admin/viewtherapists';

//import Bookings from './components/customer/book.js';
import Therapbook from './components/therapist/therapbook';
import Custbook from './components/customer/custbook';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {

  const [user, setLoginUser] = useState({})


  return (
    <div className='App'>
      <ErrorBoundary>
      <Router>
       
        <Routes>
          <Route exact path='/' element={< Homepage />}></Route>
          <Route exact path='/custhome/:custid' element={< CustHomepage />}></Route>
          <Route exact path='/adminhome' element={< AdminHomepage />}></Route>
          <Route exact path='/theraphome/:therapid' element={< TherapHomepage />}></Route>
          <Route exact path='/custlogin' element={< Custlogin setLoginUser={setLoginUser} />}></Route>
          <Route exact path='/custregister' element={< CustRegister />}></Route>
          <Route exact path='/theraplogin' element={< Theraplogin setLoginUser={setLoginUser} />}></Route>
          <Route exact path='/adminlogin' element={< Adminlogin setLoginUser={setLoginUser} />}></Route>

          <Route exact path='/therapist' element={< Servicesadmin />}></Route>

          <Route exact path='/chattherapdisplay' element={< ChatTherapistdisplay />}></Route>
          <Route exact path= '/single_therapist/:custid/:therapistId' element= {< SingleTherapist/>}></Route>
          <Route exact path='/appointments/:therapistId' element = {< SingleTherapist />}> </Route>
          <Route exact path='/room/:roomId' element={<RoomPage/>}></Route>
          <Route exact path='/videochat' element={<ChatRoom/>}></Route>
          <Route exact path='/videochatc' element={<ChatRoomc/>}></Route>
          <Route exact path='/payment/:custid/:therapistId' element={<Pay/>}></Route>
          {/* <Route exact path='/mybookings/cust/:custid/' element={<Mybookings/>}></Route> */}
          
          <Route exact path='/bookings/cust/:custid' element={<Custbook/>}></Route>
          <Route exact path='/bookings/therap/:therapid' element={<Therapbook/>}></Route> 
      
          <Route exact path='/viewtherapists' element={< Viewtherapists />}></Route>
          <Route exact path='/viewcustomers' element={< Viewcustomers />}></Route>
          
          



          
          {/* <Route exact path= '/single_therapist/:therapistId/bookings' element= {< Bookings/>}></Route> */}
 
          {/* <Route path="*">
          <h1>Page Not Found</h1>
        </Route> */}
        </Routes>
    </Router>
    </ErrorBoundary>
      </div>

  );
}

export default App;
