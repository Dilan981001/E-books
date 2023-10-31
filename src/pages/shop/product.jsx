import React, { useContext } from 'react'
import {ShopContext} from '../../contex/shop-context'
import Carousel from 'react-bootstrap/Carousel';
import "./product.css"
import Card from 'react-bootstrap/Card';

export const Product = (props) => {
    const {id, productName, price, productImage1,productImage2,productImage3} = props.data;
 const {addToCart, cartItems }=useContext(ShopContext);

const cartItemAmount = cartItems[id]

    return (
    
      <Card >
        <Card.Body>

       
        <div className='product'>
         <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={productImage1}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={productImage2}
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={productImage3}
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
  
        
        <div className='dscription'>
            <p><b>{productName}</b></p>
            <p>Rs.{price}</p>
        </div>
        <button className='addToCardBttn' onClick={()=> addToCart(id)}>Add To Cart{cartItemAmount>0 && <> ({cartItemAmount})</>}</button>
        </div>
        </Card.Body>
        </Card>
  

    
  )
}


