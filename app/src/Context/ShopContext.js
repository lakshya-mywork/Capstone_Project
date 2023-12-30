import React, { createContext, useEffect, useState } from "react";
import all_product from "../Components/Assets/all_product";
import data from "../Components/Assets/data";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {

  const [products,setProducts] = useState([]);
  
  const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < 300; i++) {
      cart[i] = 0;
    }
    return cart;
  };

  const getDefaultWishlist = () => {
    let wishlist = {};
    for(let ind =0; ind < 300; ind++){
        wishlist[ind] = 0;
    }
    return wishlist;
}

  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [wishlistItems, setWishlistItems] = useState(getDefaultWishlist);

  useEffect(() => {
    fetch('http://localhost:4000/allproducts') 
          .then((res) => res.json()) 
          .then((data) => setProducts(data))

    if(localStorage.getItem("auth-token"))
    {
      fetch('http://localhost:4000/getcart', {
      method: 'POST',
      headers: {
        Accept:'application/form-data',
        'auth-token':`${localStorage.getItem("auth-token")}`,
        'Content-Type':'application/json',
      },
      body: JSON.stringify(),
    })
      .then((resp) => resp.json())
      .then((data) => {setCartItems(data)});
    }

}, [])

const addToWishlist = (itemId) => {
    setWishlistItems((prev) => ({...prev,[itemId]:prev[itemId]+1}));
    if(localStorage.getItem("auth-token"))
    {
      fetch('http://localhost:4000/addtowishlist', {
      method: 'POST',
      headers: {
        Accept:'application/*',
        'auth-token':`${localStorage.getItem("auth-token")}`,
        'Content-Type':'application/json',
      },
      body: {itemId},
    })
      .then((resp) => resp.json())
      .then((data) => {console.log(data)});
    }
}

const removeFromWishlist = (itemId) => {
    setWishlistItems((prev) => ({...prev,[itemId]:prev[itemId]-1}));
    if(localStorage.getItem("auth-token"))
    {
      fetch('http://localhost:4000/removefromwishlist', {
      method: 'POST',
      headers: {
        Accept:'application/form-data',
        'auth-token':`${localStorage.getItem("auth-token")}`,
        'Content-Type':'application/json',
      },
      body: JSON.stringify({"itemId":itemId}),
    })
      .then((resp) => resp.json())
      .then((data) => {console.log(data)});
    } 
}    

const moveToBag = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    //localStorage.setItem('cartItem', cartItems);
    if(localStorage.getItem("auth-token"))
    {
      fetch('http://localhost:4000/addtocart', {
      method: 'POST',
      headers: {
        Accept:'application/form-data',
        'auth-token':`${localStorage.getItem("auth-token")}`,
        'Content-Type':'application/json',
      },
      body: JSON.stringify({"itemId":itemId}),
    })
      .then((resp) => resp.json())
      .then((data) => {console.log(data)});
    }
}

  
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.new_price;
      }
    }
    return totalAmount;
  };

  const getTotalCartItemsCount = () =>{
    let count =0;
    for(const item in cartItems){
        if(cartItems[item]>0)
        {
            count += cartItems[item];
        }
    }
    return count;
}

const getTotalWishlistItemsCount = () =>{
    let count =0;
    for(const item in wishlistItems){
        if(wishlistItems[item]>0)
        {
            count += wishlistItems[item];
        }
    }
    return count;
}

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    //localStorage.setItem('cartItem', cartItems);
    if(localStorage.getItem("auth-token"))
    {
      fetch('http://localhost:4000/addtocart', {
      method: 'POST',
      headers: {
        Accept:'application/form-data',
        'auth-token':`${localStorage.getItem("auth-token")}`,
        'Content-Type':'application/json',
      },
      body: JSON.stringify({"itemId":itemId}),
    })
      .then((resp) => resp.json())
      .then((data) => {console.log(data)});
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if(localStorage.getItem("auth-token"))
    {
      fetch('http://localhost:4000/removefromcart', {
      method: 'POST',
      headers: {
        Accept:'application/form-data',
        'auth-token':`${localStorage.getItem("auth-token")}`,
        'Content-Type':'application/json',
      },
      body: JSON.stringify({"itemId":itemId}),
    })
      .then((resp) => resp.json())
      .then((data) => {console.log(data)});
    } 
  };

  const contextValue = {data,all_product, getTotalWishlistItemsCount,getTotalCartItemsCount,getTotalCartAmount,cartItems,addToCart,removeFromCart,addToWishlist,wishlistItems,moveToBag,removeFromWishlist};
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
