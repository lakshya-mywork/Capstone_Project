import React, { useContext } from 'react';
import './ProductDisplay.css';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart,addToWishlist} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
      <div className='productdisplay_left'>
         <div className='productdisplay_image'>
             <img className='productdisplay_main_image' src={product.image} alt="" />
         </div>
      </div>
      <div className='productdisplay_right'>
        <h1>{product.name}</h1>
        <div className='productdisplay_right_rating'>
            {Array(product.rating).fill().map((_, i) => (
                <p>&#9733;</p>
              ))}
        </div>
        <div className='productdisplay_right_price'>
            <div className='productdisplay_right_price_new'>${product.new_price}</div>
            <div className='productdisplay_right_price_old'>{product.old_price ? "$"+product.old_price : ""}</div>
        </div>
        <div className='productdisplay_right_size'>
            <h1>Select Size</h1>
            <div className='productdisplay_right_sizes'>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
            </div>
        </div>
        <div className='productdisplay_buttons'>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <button onClick={()=>{addToWishlist(product.id)}}>ADD TO WHISHLIST</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDisplay
