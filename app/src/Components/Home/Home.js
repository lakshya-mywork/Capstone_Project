import React from 'react'
import './Home.css';
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
//import girl from '../Assets/girlPhoto.jpg';
import girl from '../Assets/exclusive_image.png'

const Home = () => {
  return (
    <div className='home'>
      <div className='home_left'>
        <h2>EXCITING OFFERS</h2>
        <div>
            <div className='home_hand_icon'>
                <p>New</p>
                <img src={hand_icon} alt=""/>
            </div>
            <p>Collections</p>
            <p>All Time</p>
        </div>
        <div className='home_latest_btn'>
            <div>New Arrivals</div>
            <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className='home_right'>
        <img src={girl} alt="" />
      </div>
    </div>
  )
}

export default Home
