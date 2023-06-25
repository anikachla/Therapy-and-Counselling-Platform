

import "./navgbar.css"
import React  from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { useState } from "react";
import Calendar from 'react-calendar';
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from "react-router-dom"

{/* <Header links={headerLinks1} className="my-header" /> */}

function Navgbar(props) {
    const { links, className, onClick} = props;
  // Add a state variable to track whether the popup is open or not

  const history = useNavigate();
  const handleLogout = () => {

    localStorage.removeItem("customer");
    console.log("Removed");
    history("/");

  };
  const goBack = () => {
    window.history.back();
  };

    return (
      <header className={className}>
        <nav>
        <ul className="main-nav mytxt">
            <li className = "spacer "><Link to="/">MindKnit</Link></li>
{/* 
             {links.map((link) => (
            <li className="so">
              <Link
                to={link.url}
                // If the link text is "Calendar", set the popup to open when the button is clicked
                onClick={() => {
                  if (link.text === "Return") {
                 
                  
                   }
                }}
              >
                {link.text}
              </Link>
            </li>
          ))} */}

          {links.map((link) => (
            <li className="so" key={link.url}>
              {link.text === 'Return' ? (
                <button onClick={goBack} className="logoutt">{link.text}</button>
              ) : (
                <Link to={link.url}>{link.text}</Link>
              )}
            </li>
          ))}
                


             <button onClick={handleLogout} className="logoutt">Logout </button>

              
        </ul>


        </nav>

         {/* Render the popup if isPopupOpen is true */}
      {/* {isPopupOpen && (
        <div className="popup">
              <Calendar />
          <button onClick={() => setIsPopupOpen(false)}>Close</button>
        </div>
      )} */}
      {/* Render the modal if isModalOpen is true */}
      
      </header>
    );
  }
  export default Navgbar
  
Navgbar.propTypes = {
    links: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      })
    ).isRequired,
    className: PropTypes.string,
  };
