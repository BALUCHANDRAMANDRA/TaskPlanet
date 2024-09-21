import React from 'react';
import '../styles/FooterNav.css';
import { FaHome, FaPlus, FaCog, FaTasks } from 'react-icons/fa';

const FooterNav = () => {
  return (
    <div className="footer-nav">
      <FaHome className="nav-icon" />
      <FaPlus className="nav-icon" />
      <FaCog className="nav-icon" />
      <FaTasks className="nav-icon" />
    </div>
  );
};

export default FooterNav;
