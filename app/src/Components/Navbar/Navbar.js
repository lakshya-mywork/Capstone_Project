import React, { useState } from 'react'
import './Navbar.css';
import logo from '../Assets/bag.png';
import cart_icon from '../Assets/cart_icon.png';
import wishlist_icon from '../Assets/whishlist_icon.png';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
//import SearchBar from '../SearchBar/SearchBar';

function Navbar() {

     const [menu, setMenu] = useState("shop");
     const {getTotalCartItemsCount,getTotalWishlistItemsCount} = useContext(ShopContext);

  return (
    <div className='nav'>
       <div className='nav_logo'>
            <Link to="/"><img src={logo} alt=""/></Link>
            <p>SHOP++</p>
       </div>
       <ul className='nav_menu'>
          <li onClick={() => {setMenu("shop")}}><Link style={{ textDecoration: 'none' }} to="/">Shop</Link>{menu === "shop" ? <hr/> : <></>}</li>
          <li onClick={() => {setMenu("mens")}}><Link style={{ textDecoration: 'none' }} to="/mens">Men</Link>{menu === "mens" ? <hr/> : <></>}</li>
          <li onClick={() => {setMenu("womens")}}><Link style={{ textDecoration: 'none' }} to="/womens">Women</Link>{menu === "womens" ? <hr/> : <></>}</li>
          <li onClick={() => {setMenu("kids")}}><Link style={{ textDecoration: 'none' }} to="/kids">Kids</Link>{menu === "kids" ? <hr/> : <></>}</li>
          <li onClick={() => {setMenu("sale")}}><Link style={{ textDecoration: 'none' }} to="/sale">Sale</Link>{menu === "sale" ? <hr/> : <></>}</li>
       </ul>

       <div className='search'>
       <Link to="/searchbar"><button id="searchInput">Search...</button> 
           </Link>    
       </div>
       
       <div className='nav_login'>

       {localStorage.getItem('auth-token')
        ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace("/");}}>Logout</button>
         :<Link to='/login' style={{textDecoration: 'none'}}><button>Login</button></Link>}

            <Link to="/wishlist"><img src={wishlist_icon} alt=""/></Link>
            <div className="nav_items_count">{getTotalWishlistItemsCount()}</div>
            <Link to="/cart"><img src={cart_icon} alt=""/></Link>
            <div className="nav_items_count">{getTotalCartItemsCount()}</div>
       </div>
       
    </div>
    
    
  )
}

export default Navbar
