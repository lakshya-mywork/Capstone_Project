import React from 'react'
import './Bestseller.css';
//import data_product from '../Assets/data';
import Item from "../Item/Item";

const Bestseller = (props) => {
 // const {item} = props;
  return (
    <div className='bestseller'>
      <h1>BESTSELLERS</h1>
      <hr />
      <div className='bestseller_item'>
        {props.data.map((item,i) => {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} />
        })}
      </div>
    </div>
  )
}

export default Bestseller
