import React from 'react';
import Allheader from '../../Components/Allheader/Allheader';
import Footer from '../../Components/Footer/Footer';
import './Healthinsurance';
import healthimage from '../../Images/Home Family Sticker by HelloAdamsFamily - Find & Share on GIPHY.gif';


const Healthinsurance :React.FC = () =>{
    return(
        <>
        <div>
            <Allheader/>
        </div>
        <img src={healthimage} className = 'healthimage' />
        <div>
            <Footer />
        </div>
        </>
    );
}
export default Healthinsurance;
