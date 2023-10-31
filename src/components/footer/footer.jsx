import React from 'react'
import './footer.css'

import facebook from '../../assets/facebook (1).png'
import youtube from '../../assets/youtube.png'
import linkedin from '../../assets/linkedin (1).png'
import insta from '../../assets/instagram.png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import footerImage from '../../assets/dblogo.png';


const Footer = () => {
  return (

   
<div className='back'>
<div>
<Row>
<div className="follow">
        <span>FOLLOW US</span>
        </div>
        <Col xs={12} md={4}>
       
      <center> <img src={footerImage} alt="Footer Image" className="footer-image" /></center> 
        
        </Col>
        
        <Col xs={12} md={4}>
     
      <center>  <h5>DBooks@gmail.com</h5>
<h5>D-Books,</h5>
<h5>No.02,</h5>
<h5>Chilaw,</h5>
<h5>Sri Lanka.</h5>
<h5>+94(0)32 22 25 425</h5></center>
                 
        </Col>
       
        <Col xs={12} md={4}>
       <center> <div className="f-icon">
        <button className="button-f">
      <img className="button-icon" src={facebook} alt="Button Icon" />
    </button>
    <button className="button-f">
      <img className="button-icon" src={insta} alt="Button Icon" />
    </button>
    <button className="button-f">
      <img className="button-icon" src={linkedin} alt="Button Icon" />
    </button>
    <button className="button-f">
      <img className="button-icon" src={youtube} alt="Button Icon" />
    </button>
        </div></center>
        </Col>
     
      </Row>
 

</div>

</div>


  )
}

export default Footer
