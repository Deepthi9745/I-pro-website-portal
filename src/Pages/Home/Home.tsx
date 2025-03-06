import React, { useState } from 'react';
import Header from '../../../src/Components/Header/Header'; 
import Footer from '../../../src/Components/Footer/Footer'; 
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import homeimage from '../../../src/Images/home page 1.png';
import hearthealth from '../../Images/Heart Health.png';
import sedan from '../../Images/Sedan.png';
import scooter from '../../Images/Scooter.png';
import mothershealth from '../../Images/MothersHealth.png';
import parenting from '../../Images/Parenting.png';
import group65 from '../../Images/Group 65.png';
import skyscrapers from '../../Images/Skyscrapers.png';
import delivery from '../../Images/Delivery.png';
import electricwheelchair from '../../Images/Electric Wheelchair.png';
import coronavirus from '../../Images/Coronavirus.png';
import requirement from '../../Images/Requirement.png';
import protect from '../../Images/Protect.png';
import renewal from '../../../src/Images/rene.png';
import support from '../../../src/Images/support.png';
import Claim from '../../../src/Images/claim (2).png';
import instant from '../../../src/Images/instant.png';
import assist from '../../../src/Images/advice.png';
import Peace from '../../../src/Images/peaceofmind.png';
import image1 from '../../../src/Images/image1.png';
import image2 from '../../../src/Images/image2.png';
import image3 from '../../../src/Images/image3.png';
import image4 from '../../../src/Images/image4.png';
import borderimage from '../../../src/Images/borderimage (2).png';
import borderimage2 from '../../../src/Images/boarder2 (2).png';
import borderimage3 from '../../../src/Images/boarder3 (2).png';
import relable from '../../../src/Images/relabale.png';
import userfriendly from '../../../src/Images/userfridly.png';
import icic from '../../../src/Images/icici.jpg';
import hdfc from '../../../src/Images/hdfc.jpg';
import godigit from '../../../src/Images/go digit.jpg';
import SBI from '../../../src/Images/sbi.jpg';
import reliance from '../../../src/Images/reliance.jpg';
import Royal from '../../../src/Images/royal.jpg';
import tataagi from '../../../src/Images/tataaig.jpg';
import iffco from '../../../src/Images/iffco.jpg';
import star from '../../../src/Images/star health.jpg';
import care from '../../../src/Images/care.jpg';
import icicpru from '../../../src/Images/icicipru.jpg';
import tataaia from '../../../src/Images/tataaia.jpg';
import hdfclife from '../../../src/Images/hadfclife.jpg';
import bajaj from '../../../src/Images/bajaj..jpg';
import { FaMapMarkerAlt } from "react-icons/fa";


const Home: React.FC = () => {
  const [quoteType, setQuoteType] = useState('');
  const [selectedBox, setSelectedBox] = useState('');

  const handleQuoteType = (type: string) => {
    if (type === 'health') {
      setQuoteType('Get Health insurance Quote in 2 steps');
    } else if (type === 'car') {
      setQuoteType('Get Car insurance Quote in 2 steps');
    } else if (type === 'scooter') {
      setQuoteType('Get Scooter insurance Quote in 2 steps');
    } else if (type === 'indivial') {
      setQuoteType('Get Indivial health insurance Quote in 2 steps');
    } else if (type === 'family') {
      setQuoteType('Get Family health insurance Quote in 2 steps');
    } else if (type === 'senior') {
      setQuoteType('Get Senior health insurance Quote in 2 steps');
    } else if (type === "Corporate") {
      setQuoteType('Get Corporate Health insurance Quote in 2 steps');
    } else if (type === "commerical") {
      setQuoteType('Get Commercial Vehicle insurance Quote in 2 steps');
    } else if (type === "mis") {
      setQuoteType('Get Miscellaneous Vehicle insurance Quote in 2 steps');
    } else if (type === "criticle") {
      setQuoteType('Get Criticle Illness insurance Quote in 2 steps');
    } 
    setSelectedBox(type);
  };

  return (
    <div>
      <Header />
      <div>
        <div className="Blue-section">
          <div className="paragraphcolor1">
            <p>Secure Your Future with i-pro Infinity</p>
            <div className="heart">
              <FontAwesomeIcon icon={faHeart} style={{ color: 'red', fontSize: '1.5em', marginLeft: '10px' }} />
            </div>
          </div>
          <div className="paragraphcolor2">
            <p>Life is a beautiful journey filled with endless possibilities. Embrace every moment, protect your dreams, and let iPro be the shield that<br></br> safeguards your path to a brighter future.</p>
          </div>
          <div className="white-section"></div>
          <img src={homeimage} alt="homepageLogo" className="homepage" />
        </div>
        
        <div className="gethealth">{quoteType || 'Get Health insurance Quote in 2 steps'}</div>
        <div className="name"><strong>Name:</strong></div>
        <div className="Phone"><strong>Phone:</strong></div>
        <div className="Pincode"><strong>Pincode:</strong></div>

          <div 
            className={`smallwhitebox ${selectedBox === 'health' ? 'selected' : ''}`} 
            onClick={() => handleQuoteType('health')}
          >
            <img src={hearthealth} alt="Heart Health" className="icon" style={{ height: '60px', width: '80px' }}  />
            
          </div>
          <strong><p className='healthtext'>Health </p></strong>
          <div 
            className={`smallwhitebox3 ${selectedBox === 'car' ? 'selected' : ''}`} 
            onClick={() => handleQuoteType('car')}
          >
            <img src={sedan} alt="Sedan Car" className="icon" style={{ height: '60px', width: '60px' }}  />
          </div>
          <strong><p className='cartext'>Car </p></strong>
          <div 
            className={`smallwhitebox2 ${selectedBox === 'scooter' ? 'selected' : ''}`} 
            onClick={() => handleQuoteType('scooter')}
          >
            <img src={scooter} alt="Scooter" className="icon" style={{ height: '60px', width: '90px' }}  />
          </div>
          <strong><p className='scootertext'>Two Wheeler </p></strong>
          <div 
            className={`smallwhitebox4 ${selectedBox === 'indivial' ? 'selected' : ''}`} 
            onClick={() => handleQuoteType('indivial')}
          >
            <img src={mothershealth} alt="indivial" className="icon" style={{ height: '60px', width: '60px' }} />
          </div>
          <strong><p className='indivialtext'>Individual</p></strong>
          <div 
          className={`smallwhitebox5 ${selectedBox === 'family' ? 'selected' : ''}`}
          onClick={() => handleQuoteType('family')}
          >
            <img src={parenting} alt="family" className="icon" style={{ height: '60px', width: '60px' }} />
          </div>
          <strong><p className='familytext'>Family Health</p></strong>
           <div
           className={`smallwhitebox6 ${selectedBox ==='senior' ? 'selected' : ''}`}
          onClick={() =>handleQuoteType('senior')}
          >
            <img src={group65} alt="group65" className="icon" style={{ height: '50px', width: '60px' }}  />
          </div>
          <strong><p className='seniortext'>Senior</p></strong>
          <div
           className={`smallwhitebox7 ${selectedBox ==='Corporate' ? 'selected' : ''}`}
          onClick={() =>handleQuoteType('Corporate')}
          >
            <img src={skyscrapers} alt="group65" className="icon" style={{ height: '60px', width: '80px' }} />
          </div>
          <strong><p className='corparatetext'>Corparate </p></strong>
          <div
           className={`smallwhitebox8 ${selectedBox ==='commerical' ? 'selected' : ''}`}
          onClick={() =>handleQuoteType('commerical')}
          >
            <img src={delivery} alt="commerical" className="icon" style={{ height: '60px', width: '80px' }} />
          </div>
          <strong><p className='commercialtext'>Commercial </p></strong>
          <div
           className={`smallwhitebox9 ${selectedBox ==='mid' ? 'selected' : ''}`}
          onClick={() =>handleQuoteType('mis')}
          >
            <img src={electricwheelchair} alt="mis" className="icon" style={{ height: '60px', width: '100px' }} />
          </div>
          <strong><p className='mistext'>Miscellaneous </p></strong>
          <div
           className={`smallwhitebox10 ${selectedBox ==='criticle' ? 'selected' : ''}`}
          onClick={() =>handleQuoteType('criticle')}
          >
            <img src={coronavirus} alt="criticle" className="icon" style={{ height: '50px', width: '80px' }} />
          </div>
          <strong><p className='criticletext'>Criticle Health </p></strong>
          <div className={`smallwhitebox11 ${selectedBox === '' ? 'selected' : ''}`}
          >
            <img src={requirement} className="icon" style={{ height: '50px', width: '60px' }} />
          </div>
          <strong><p className='claimtext'>Claim </p></strong>
          <div className='smallwhitebox12'>
            <img src={protect} className="icon" style={{ height: '50px', width: '60px' }} />
          </div>
          <strong><p className='renewaltext'>Renewal </p></strong>
        </div>

        <hr className="horizontal-line" />
      <hr className="horizontal-line2" />
      <hr className="horizontal-line3" />
      <hr className="horizontal-line4" />
      
      <div className='text2'><strong>Why choose i-Pro Infinity?</strong></div>
      <Footer />
      <button className='homebotton'>
      Get Quote
    </button>

    <div className='text3'><p>Why choose i-Pro Infinity? Because it offers reliable protection with advanced technology, ensuring your safety at all times. Its user-friendly design makes it easy to set up and use,<br></br> providing a hassle-free experience. With 24/7 support, you can count on us whenever you need assistance. Most importantly, i-Pro Infinity gives you peace of mind, knowing that you're <br></br>always covered. Choose i-Pro Infinity for a safer, worry-free life.</p></div>
    <div className='bold1'><strong>Reliable Protection</strong></div>
    <div className='content'>Trust in our advanced technology to keep you safe. Our state-of-the-<br></br>art systems are designed to detect and respond to threats instantly,<br></br> providing you with the highest level of security. You can count on <br></br>i-Pro Infinity to safeguard your loved ones and valuables around the <br></br>clock.</div>
    <div className='bold2'><strong>User-Friendly</strong></div>
    <div className='content2'>Easy to set up and use, ensuring a hassle-free experience. Our<br></br> intuitive interface and straightforward installation process mean you<br></br> can start protecting what matters most without any technical difficulties.<br></br> Enjoy seamless security solutions designed with you in mind.</div>
    <img src={relable} className='relable'/>
    <img src={userfriendly} className='userfriendly'/>
    <div className='bold3'>24/7 Support</div>
    <div className='bold4'>Peace of Mind</div>
    <div className='bold5'> Instant Policy</div>
    <div className='bold6'>Assistance from Experts</div>
    <div className='bold7'>Best-In-Class Claim Service</div>
    <div className='bold8'>Renewal Management</div>
    <div className='content3'>We're here for you, anytime you need us. Our dedicated support<br></br> team is available around the clock to assist with any questions or <br></br>issues you may encounter. Whether it’s troubleshooting or general<br></br> inquiries, we're just a call or click away</div>
    <div className='content4'>Feel secure knowing i-Pro Infinity has you covered. Our <br></br>comprehensive protection gives you the confidence to live your life<br></br> without worry. Rest easy knowing that your security is in expert<br></br> hands, allowing you to focus on what truly matters.</div>
    <div className='content5'>No more waiting for the physical policies, which used to be lengthy<br></br> and time consuming. Employees can now print or download the <br></br>policy immediately after a successful payment!</div>
    <div className='content6'>Getting into the world of insurance can be complicated, but with the<br></br> presence of Elephant Insurance, no more! We have leading<br></br> insurance experts that can help guide you through the entire<br></br> process, making it a cakewalk!</div>
    <div className='content7'>Things do go wrong! But our experienced and dedicated claims<br></br> experts will help you manage your claims effortlessly.</div>
    <div className='content8'>You will get regular automatic renewal notification and reminders<br></br> before policy expiry, ensuring the policy is renewed on-time, easily<br></br> and quickly!</div>
    <img src={renewal} className='renewal'/>
    <img src={Peace} className='Peace'/>
    <img src={support} className='Support'/>
    <img src={instant} className='instant'/>
    <img src={Claim} className='claim'/>
    <img src={assist} className='assist'/>
    <hr className="horizontal-line5" />
    <p className='heading'><strong>Our exclusive offers. Just for you.</strong></p>
    <div className="gray-section">
    </div>
    <div className="whitebox">
      <div  className ="h1">
      <p>Secure your life with the iPro health<br></br> insurance plan</p>
      
      </div>
      </div>


      <div className="whitebox2">
      </div>
      <div className="whitebox3">
      </div>
      <div className="whitebox4">
      </div>
      <ul className="bullet-points">
        <li>Offering comprehensive coverage</li>
        
        <li>Affordable premiums</li>
      </ul>
     
      <img src={image1} className='image1' alt="support" />
      <ul className="bullet-points2">
      <li>exceptional customer <br></br>support</li>
      <br></br>
      <li>extensive network of <br></br>hospitals</li>
      <br></br>
      <li>hassle-free claims <br></br>processing.</li>
      </ul>


      <div  className ="h2">
      <p>Discover the best motor offers with iPro<br></br> insurance plan</p>
      </div>
      <ul className="bullet-points3">
        <li>featuring competitive rates</li>
        <li>extensive coverage</li>
      </ul>
      <img src={image2} className='image2' alt="support" />
      <ul className="bullet-points4">
      <li>24/7 roadside <br></br>assistance</li>
      <br></br>
      <li>easy claim <br></br>settlements.</li>
      <br></br>
      <li>flexible payment  <br></br>processing.</li>
      </ul>


      <div  className ="h3">
      <p>Experience unparalleled corporate <br></br> solutions with iPro</p>
      </div>
      <ul className="bullet-points5">
        <li>offering tailored insurance packages</li>
        <li>extensive coverage</li>
      </ul>
      <img src={image3} className='image3' alt="support" />
      <ul className="bullet-points6">
      <li>comprehensive risk  <br></br>assessment</li>
      <br></br>
      <li>seamless integration <br></br>with employee<br></br> benefits programs</li>
      <br></br>
      <li>ensuring your   <br></br>business and team  <br></br>are protected and <br></br>supported.</li>
      </ul>

      <div  className ="h4">
      <p>Take advantage of iPro's best offer for <br></br> claims</p>
      </div>
      <ul className="bullet-points7">
        <li>featuring rapid processing</li>
        <li>minimal paperwork, 24/7 support</li>
      </ul>
      <img src={image4} className='image4' alt="support" />
      <ul className="bullet-points8">
      <li>high claim settlement <br></br>ratios</li>
      <br></br>
      <li>ensuring a hassle-free  <br></br>experience when you <br></br>need it most.</li>
      
      </ul>
      <hr className="horizontal-line6" />
      <p className='heading2'><strong>Our Latest Insurance Articles & Videos</strong></p>
      <div className="blueborder">
        <img src={borderimage} className='borderimage'/>
        
      </div>
      <div className="blueborder2">
        <img src={borderimage2} className='borderimage2'/>
      </div>
      <div className="blueborder3">
        <img src={borderimage3} className='borderimage3'/>
      </div>


      <div className='smallbox'></div>
      <div className='smallbox2'></div>
      <div className='smallbox3'></div>
      <div className='smallbox4'></div>
      <div className='smallbox5'></div>
      <div className='smallbox6'></div>
      <div className="bluebox">
        <p className='whitecolor1'>The Importance of Financial Wellness Programs<br></br> for Employee Productivity</p>
        <div className='text1'>
        <p>This article will explore current trends in corporate insurance, focusing on innovative solutions and emerging practices that can benefit employers.</p>
        <br></br>
        <p>
        It will discuss topics like telemedicine, wellness incentives, and digital insurance platforms.</p>
        </div>
      </div>
      <div className="bluebox2">
      <p className='whitecolor1'>Choosing the Right Insurance Plan: A Guide for<br></br> Employers</p>
      <div className='text1'>
        <p>This article will highlight how financial wellness programs can significantly impact employee productivity and overall business performance.</p>
        <br></br>
        <p>It will discuss the benefits of reducing financial stress among employees and promoting better financial habits.</p>
        </div>
      </div>
      <div className="bluebox3">
      <p className='whitecolor1'>Trends in Corporate Insurance: What <br></br>Employers Should Know</p>
      <div className='text1'>
        <p>This guide will help employers navigate the complexities of selecting insurance plans that meet the diverse needs of their<br></br> workforce.</p>
        <br></br>
        <p>
        It will cover key considerations such as coverage options, cost management, and employee satisfaction.</p>
        </div>
      </div>
      <p className='partners'><strong>Collaborates with Private Insurance</strong></p>
      <hr className="horizontal-line6" />
      
    <div className="blue-section2">
        <img  src={bajaj} className='bajaj'/>
    </div>
   
    <div >
        <img  src={icic} className='icici'/>
    </div>

    <div >
        <img  src={hdfc} className='hdfc'/>
    </div>

    
    <div>
        <img  src={godigit} className='godigit'/>
    </div>

    <div >
        <img  src={SBI} className='SBI'/>
    </div>

    <div >
        <img  src={reliance} className='reliance'/>
    </div>

    <div >
        <img  src={Royal} className='Royal'/>
    </div>

    <div >
        <img  src={tataagi} className='tataagi'/>
    </div>

    <div >
        <img  src={iffco} className='iffco'/>
    </div>

    <div>
        <img  src={star} className='star'/>
    </div>

    <div >
        <img  src={care} className='care'/>
    </div>

    <div >
        <img  src={icicpru} className='icicpru'/>
    </div>

    <div >
        <img  src={tataaia} className='tataaia'/>
    </div>

    <div>
        <img  src={hdfclife} className='hdfclife'/>
    </div>
    <p className='feedback' ><strong>Feedback from Our Customers</strong></p>
    <p className='feedbackheading'> Trusted by many, i-Pro Infinity delivers exceptional insurance coverage.</p>

    <div className="skyblue-section">
      <p className='john'>John D., New York</p>
      <p className='john1'>I have been a i-pro healthInsurance customer for <br></br>over five years now. Their plans are affordable<br></br>, and the customer service is exceptional. I recently<br></br> had a medical emergency, and the cashless <br></br>treatment at one of their network hospitals made <br></br>the process stress-free. Highly recommended!</p>
    </div>
    <div className="skyblue-section2">
    <p className='Raj'>Raj P., Texas</p>
    <p className='john1'>The flexibility of i-pro Health’s plans allowed me  <br></br>to tailor a policy that fits my family's needs <br></br>, perfectly. From preventive care to critical illness<br></br> coverage, they have it all. The wellness programs  <br></br>are an added bonus that has helped us stay on <br></br>top of our health."</p>
    </div>
    <div className="skyblue-section3">
    <p className='linda'>Linda S., Florida</p>
    <p className='john1'>I appreciate the transparency and clarity in i-pro   <br></br>health Insurance’s policy details. There are no  <br></br>hidden clauses, and everything is explained <br></br> upfront. Filing a claim was quick and easy, with   <br></br>prompt settlement. I’m very satisfied with their <br></br>service."</p>
    </div>

      </div>
  );
};

export default Home;
