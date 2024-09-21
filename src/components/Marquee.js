import React from 'react';
import { FaBullhorn } from 'react-icons/fa'; // For the announcement icon
import '../styles/Marquee.css';

const Marquee = () => {
  return (
    <div className="marquee-container">
      <FaBullhorn className="announcement-icon" />
      <div className="marquee-content">
        <p>Welcome to Taskplant. Get 10 points on every referral.</p>
      </div>
    </div>
  );
};

export default Marquee;
