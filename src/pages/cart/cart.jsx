import React, { useContext } from 'react';
import {PRODUCTS} from '../../products';
import {ShopContext} from '../../contex/shop-context';
import {CartItem} from './cart-item';
import './cart.css';
import footerImage from '../../assets/dblogo.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useNavigate} from 'react-router-dom';
import Footer from "../../components/footer/footer";

export const Cart = () => {
    const {cartItems, getTotalCartAmount }=useContext(ShopContext);
    const totalAmount = getTotalCartAmount()

const navigate = useNavigate()

  return (
    <div className='cart'>

<Container>
      <Row>
        <Col xs={12} md={1}>
       <div className='img'><img src={footerImage} alt="Footer Image" className="footer-image" /></div> 
        </Col>
        <Col xs={12} md={11}>
       <div className='title'><h1>Cart Items</h1></div> 
        </Col>
      </Row>
    </Container>



        <div className='cartItems'>
            {PRODUCTS.map((product)=>{
                if(cartItems [product.id] !== 0 ){
                    return <CartItem data={product}/>;
                }

            })}
        </div>
        {totalAmount>0 ?(
        <div className='checkout'>
          
            <p>Subtotal: Rs.{totalAmount}</p>
            <button onClick={()=>navigate("/")}>Continue Shopping</button>
            <button onClick={()=>navigate("/checkout")}>Checkout</button>
        </div>
        ) : (
            <h1>Your cart is Empty</h1>
        )};
        
    </div>
       
    
  )
}


