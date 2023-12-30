import React, { useContext } from 'react';
import './Item.css';
import {Link} from 'react-router-dom';
import whishlist_icon from "../Assets/whishlist_icon.png";
import { ShopContext } from '../../Context/ShopContext';

const Item = (props) => {
  const { addToWishlist } = useContext(ShopContext);
 
  return (
    <div className="item">
        <Link to={`/product/${props.id}`}><img src={props.image} alt="" /></Link>
        <p>{props.name}</p>
        <div className='item_price'>
            <div className='item_new_price'>
                ${props.new_price}
            </div>
            <div className='item_old_price'>
                {props.old_price}
            </div>
            <img onClick={()=>{addToWishlist(props.id)}} src={whishlist_icon} alt=""/>
        </div>
    </div>
  )
}

export default Item;
