import React, { useContext, useState, useEffect } from 'react'
import "./Css/Payment.css";
import { ShopContext } from '../Context/ShopContext';
import removeicon from '../Components/Assets/cart_cross_icon.png';
import { Link, useNavigate } from 'react-router-dom';
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js"
import CurrencyFormat from 'react-currency-format';
//import StripeCheckout from "react-stripe-checkout";


function Payment() {
    const {all_product,cartItems,getTotalCartAmount,removeFromCart,getTotalCartItemsCount} = useContext(ShopContext);

    //const stripe = useStripe();
    //const elements = useElements();

    const navigate = useNavigate();
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled,setDisabled] = useState(true);
    //const [clientSecret,setClientSecret] = useState(true);


    const handleSubmit = async (event) =>{
    
      event.preventDefault();
      setProcessing(true);
  
      
    }

    const handleChange = e => {
      setDisabled(e.empty);
      setError(e.error ? e.error.message : "");
    }
    

  //const basket = getDefaultCart;
  return (
    <div className='payment'>
      <div className='payment_container'>
        <h1>
            Checkout (
                <Link to="/cart">{getTotalCartItemsCount()} items</Link>
            )
        </h1>
        {/* Payment section - delivery address */}
        <div className='payment_section'>
            <div className='payment_title'>
                <h3>Delivery Address</h3>
            </div>
            <div className='payment_address'>

            </div>
        </div>

        {/* Payment section - Review Items */}
        <div className='payment_section'>
            <div className='payment_title'>
                <h3>Items</h3>
            </div>  
            <div className='payment_items'>
            {all_product.map((e) => {
        if(cartItems[e.id] > 0)
        {
            return <div>
            <div className='cartitems_format cartitems_heading'>
                <img src={e.image} alt="" className='carticon_product' />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='cartitems_quantity'>{cartItems[e.id]}</button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img className='cartitems_remove' src={removeicon} onClick={()=>{removeFromCart(e.id)}} alt=""/>
            </div>
            
          </div>
        }
        return null;
      })
      }
            </div>         
        </div>
        {/* Payment section - Payment method */}
        <div className='payment_section'>
            <div className='payment_title'>
                <h3>Payment Method</h3>
            </div>
            <div className='payment_details'>
                {/*stripe*/}
                <form onSubmit={handleSubmit}>
                  <CardElement onChange={handleChange}/>
                  <div className='payment_priceContainer'>
                    <CurrencyFormat 
                      renderText={(value) => (
                        <h3>Order Total: {value} </h3>
                      )}
                      decimalScale={2}
                      value={getTotalCartAmount()}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                    />
                    <button disabled={processing || disabled || succeeded}>
                            <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                        </button>
                        
                        {/*Error*/}
                    {error && <div>{error}</div>}
                  </div>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
