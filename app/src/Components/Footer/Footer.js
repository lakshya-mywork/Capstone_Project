import React from 'react'
import './Footer.css';
import logo from '../Assets/bag.png';
import insta_icon from '../Assets/instagram_icon.png';
import pintester_icon from '../Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';


const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer_logo'>
            <img src={logo} alt="" />
            <p>SHOP++</p>
         </div> 
         <ul className='footer_links'>
            <li>Company</li>
            <li>Products</li>
            <li>T&C</li>
            <li>About</li>
            <li>Contact</li>
         </ul> 
         <div className='footer_social_icon'>
            <div className='footer_icons'>
                <img src={insta_icon} alt="" />
            </div>
            <div className='footer_icons'>
                <img src={pintester_icon} alt="" />
            </div>
            <div className='footer_icons'>
                <img src={whatsapp_icon} alt="" />
            </div>
        </div> 
        <div className='footer_copyright'>
            <hr />
            <p>Copyright @ 2023 - All Rights Reserved</p>
        </div>     
    </div>
  )
}

export default Footer
