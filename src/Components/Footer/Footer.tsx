import React, { useState } from 'react';
import grayiprologo from '../../../src/Images/grayiprologo.jpeg';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import IRDA from '../../../src/Images/IRDA.jpg';
import address from '../../../src/Images/address.png';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function Footer () {
  
return(
  
    <div className='footer'>
        <p className='footertext'>i-pro infinity insurance company Ltd. is one pf the leading private sector general insurance <br></br>Company in india offering insurance coverage for health,motor,home ,student, travel and more.</p>
  <p className='footertext2'>i-pro under license with IRDA'  </p>
    <img src={grayiprologo} className='graylogo'/>
 
  
      <div className="icons-container">
        <FaMapMarkerAlt className="iconsaddress" />
        <p className='address'>#18, 3rd Cross, RMV 2nd State, 4th Block<br></br> MLA Layout , Sanjaynagar,<br></br> Bengaluru-94</p>
      </div>
      
      <div className="icons-container">
        <FaEnvelope className="iconsemail" />
        <p className='email'>Suresh@iproinfinity.com</p>
      </div>
      <a href="tel:+916361278922" className="phone-link">
      <FontAwesomeIcon className='icon3'icon={faPhone} />
        <p className='phonetext'>6361278922</p>
      </a>


      <img src={IRDA} className='IRDA'></img>
      <p className='groupcompanies '> Group Companies</p>
      <p className='Product'>Products </p>
      <p className='Service '>Service</p>
      <p className='Legal'> Legal</p>
      <p className='AboutUs'> About Us</p>
      <img src={address} className='address2'/>
      <p className='LocateUs'>LocateUs</p>
         <div className="social-icons">
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="icons instagram" />
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="icons linkedin" />
      </a>
      <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp className="icons whatsapp" />
      </a>
      <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
        <FaYoutube className="icons youtube" />
      </a>
      <a href="mailto:someone@example.com" target="_blank" rel="noopener noreferrer">
        <FaEnvelope className="icons envelope" />
      </a>
    </div>
    </div>
    
    
)
}

export default Footer;
