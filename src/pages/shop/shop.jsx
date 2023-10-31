import React, {useEffect} from 'react';
import {PRODUCTS} from '../../products';
import {Product} from "./product";
import "./shop.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "../../components/footer/footer";
import footerImage from '../../assets/dblogo.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import yu3 from "../../assets/yu3.jpeg";
import b1 from "../../assets/b1.jpg";
import b2 from "../../assets/b2.jpeg";
import Contact from "../../components/contactus/contact"



export const Shop = () => {
useEffect(()=>{
  AOS.init({duration:3000});
},[])

  return (
    <div className='shop'>

<Container>
      <Row>
        <Col xs={12} md={1}>
       <div className='img'><img src={footerImage} alt="Footer Image" className="footer-image" /></div> 
        </Col>
        <Col xs={12} md={11}>
       <div className='title'><h1>Sinhala Books</h1></div> 
        </Col>
      </Row>
    </Container>




<center>
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block "
          src={b1}
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block "
          src={b2}
          alt="Second slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block "
          src={yu3}
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </center>

<div className='disc'>
<center><h3>"Reading is an Exercise in Empathy </h3>
<h3>An Exercise in walking</h3>
<h3>In Someone else's shoes</h3>
<h3>For a While.</h3>
<h6>-Malorie Blaekman-</h6></center>
</div>



     
  

      
        
        <div className='animation' data-aos="fade-up">
        
      <div className='products'>
        

        {""}
        {PRODUCTS.map((product)=>(
            <Product data={product}/>
        ))}

       </div> 
      </div>
       

      <div className='animation' data-aos="fade-up">
        
        <div className='products'>
          
  
          {""}
          {PRODUCTS.map((product)=>(
              <Product data={product}/>
          ))}
  
         </div> 
        </div>
       
     
      
            
      
     
      <Contact/>
      <Footer/>
      
</div>



   
  )
}


