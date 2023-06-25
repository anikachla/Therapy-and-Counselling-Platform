

import "./singlenav.css"
import React  from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { useState } from "react";
import Calendar from 'react-calendar';
{/* <Header links={headerLinks1} className="my-header" /> */}

function Singlenavgbar(props) {
    const { links, className, onClick} = props;
  // Add a state variable to track whether the popup is open or not
  const [isPopupOpen, setIsPopupOpen] = useState(false);

    return (
      <header className={className}>
        <nav>
        <ul className="main-nav mytxt">
            <li className = "spacer "><Link to="/">MindKnit</Link></li>

             
             {/* <button onClick={onClick} className="so2">Logout </button> */}

        </ul>


        </nav>

      </header>
    );
  }
  export default Singlenavgbar;
  
Singlenavgbar.propTypes = {
    links: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      })
    ).isRequired,
    className: PropTypes.string,
  };
