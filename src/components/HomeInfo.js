import React from 'react';
import { FaGift, FaMoneyBillAlt } from 'react-icons/fa'; 
import '../styles/HomeInfo.css'; 

const HomeInfo = () => {
  return (
    <div className="home-info-container">
      <div className="left-section">
        <h2>Home</h2>
      </div>
      <div className="right-section">
        <div className="item red">
          <FaGift className="icon" /> 
          <span>₹500</span>
        </div>
        <div className="item green">
          <FaMoneyBillAlt className="icon" /> 
          <span>₹1000</span>
        </div>
        <div className="item white">
          <FaMoneyBillAlt className="icon" /> 
          <span>₹2000</span>
        </div>
        <div className="item-img">
          <img src="path-to-user-photo.jpg" alt="User" className="user-photo" />
        </div>
      </div>
    </div>
  );
};

export default HomeInfo;
