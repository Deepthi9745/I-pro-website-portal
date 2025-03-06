import React from 'react';
import './Allheader.css';
import { faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import blueimagelogo from '../../Images/I-Pro logo with white BG.jpg';
import { FaMapMarkerAlt } from "react-icons/fa";


const Header: React.FC = () => {
  return (
    <header className="Allheader">
      <FaMapMarkerAlt className="iconsaddress" />
      <div className="contact-info">
        080 23414133 <br />
      </div>
      <div className="available">( Available 24 X 7 )</div>
      <a href="tel:+916361278922" className="call-icon">
        <FontAwesomeIcon className='icon2' icon={faPhone} />
        <div className="callback">Call back</div>
      </a>

      <div className="vertical-line"></div>
      <hr className="horizontal-lineall" />
      <nav className="nav-menu">
        <a href="/" className='allHome'>Home</a>
        <div className="vertical-line2"></div>
        <a href="/health-insurance" className='healthinsurance'>Health Insurance</a>
        <div className="vertical-line3"></div>
        <a href="/motor-insurance" className='Motorinsurance'>Motor Insurance</a>
        <div className="vertical-line4"></div>
        <a href="/corporate-insurance" className='corporateinsurance'>Corporate Insurance</a>
        <div className="vertical-line5"></div>
        <a href="/renewals" className='allrenewals'>Renewals</a>
        <div className="vertical-line6"></div>
        <a href="/claim2" className='allclaim'>Claim</a>
        <div className="vertical-line7"></div>
        <a href="/support2" className='allsupport'>Support</a>
        <div className="vertical-line8"></div>
        <a href="/login2" className='alllogin'>Login</a>
        <FontAwesomeIcon className='user' icon={faUser} />
        <img src={blueimagelogo} className='blueimage' alt="Logo" />
      </nav>
    </header>
  );
};

export default Header;
