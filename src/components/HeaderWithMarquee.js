import React from 'react';
import Marquee from './Marquee';
import Header from './Header';
import '../styles/HeaderWithMarquee.css'; 

const HeaderWithMarquee = () => {
  return (
    <div className="header-with-marquee">
      <div className="marquee-section">
        <Marquee />
      </div>
      <div className="header-section">
        <Header />
      </div>
    </div>
  );
};

export default HeaderWithMarquee;
