import React, { useContext } from 'react'
import './WishlistItems.css';
import { ShopContext } from '../../Context/ShopContext';
import removeicon from '../Assets/cart_cross_icon.png';

const WishlistItems = () => {

    const {all_product,wishlistItems,moveToBag,removeFromWishlist} = useContext(ShopContext);

  return (
    <div className='wishlistitems'>
        <h3>My Wishlist Items </h3>
        {all_product.map((e) => {
        if(wishlistItems[e.id] > 0)
        {
            return <div>
            <div className='wishlist_format'>
                <img src={e.image} alt="" className='wishlist_product' />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button onClick={()=>{moveToBag(e.id); removeFromWishlist(e.id)}} className='moveToBag'>Move To Bag</button>
                <img className='wishlistitems_remove' src={removeicon} onClick={()=>{removeFromWishlist(e.id)}} alt=""/>
            </div>
           
          </div>
        }
        return null;
      })
      }
    </div>
  )
}

export default WishlistItems
