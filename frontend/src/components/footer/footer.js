
import React from 'react';
import './footer.css'

function Footer(){
  return (

    <footer className='footer'>
      <div className='footer-columns'>
        <div className='footer-column'>
          <h1 className ="text1 spac"> MindKnit</h1>
          <p className="text3 ">Terms and Conditions</p>
          <div className="text4"> Please be sensitive in your interactions. Any kind of misbehaviour will be reported.<div/>
        </div>
      
        <div className='footer-column spac'>
          <h2 className='text3'>Admin Services</h2>
          <p className='text4'>  To register yourself as a therapist, please mail your resume, identification and profile details at sakshi@gmail.com</p>
          <p></p>
        </div>

        <div className='spac'>
          <h2 className='text3'>Contact Us</h2>
          <p className='text4'>Email: mindknit@outlook.com</p>
        </div>
      </div>
      <div className='footer-bottom'>
        <p>&copy; 2023 Example Company. All Rights Reserved.</p>
      </div>
      </div>
    </footer>
  );
}

export default Footer;
