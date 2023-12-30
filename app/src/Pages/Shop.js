import React, { useContext } from 'react'
import Home from '../Components/Home/Home';
import Bestseller from '../Components/Bestseller/Bestseller';
import NewsLetter from '../Components/NewsLetter/NewsLetter';
//import { useState } from 'react';
//import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';

function Shop() {
  //const [bestSeller, setBestSeller] = useState([]);
  const { data } = useContext(ShopContext);
  
 return (
    <div>
      <Home />
      <Bestseller data={data}/>
      <NewsLetter />
    </div>
  )
}

export default Shop
