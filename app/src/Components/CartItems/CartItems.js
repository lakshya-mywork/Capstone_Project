import React, { useContext } from 'react'
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import removeicon from '../Assets/cart_cross_icon.png';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const CartItems = () => {
    const navigate = useNavigate();
    //const {products} = useContext(ShopContext);
    const {getTotalCartAmount,all_product,cartItems,removeFromCart} = useContext(ShopContext);
    
  return (
    <div className='cartitems'>
      <div className='cartitems_heading'>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr/>
      {all_product.map((e) => {
        if(cartItems[e.id] > 0)
        {
            return <div>
            <div className='cartitems_format cartitems_heading'>
                <img src={e.image} alt="" className='carticon_product' />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='cartitems_quantity'>{cartItems[e.id]}</button>
                <p>${e.new_price*cartItems[e.id]}</p>
                <img className='cartitems_remove' src={removeicon} onClick={()=>{removeFromCart(e.id)}} alt=""/>
            </div>
            <hr />
          </div>
        }
        return null;
      })
      }
     <div className='cartitems_down'>
        <div className='cartitems_total'>
            <h3>Total Amount : </h3>
            <h3>${getTotalCartAmount()}</h3>
        </div>
        <Link to="/payment"><button>PROCEED TO CHECKOUT</button></Link>
     </div> 
    </div>
  )
}

export default CartItems
