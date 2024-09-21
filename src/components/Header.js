import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="stats">
        <div className="wallet">
          <div className="label">Wallet</div>
          <div className="amount">
            ₹0 <span className="icon">💼</span>
          </div>
        </div>
        <div className="earnings">
          <div className="label">Earnings</div>
          <div className="amount">
            ₹0 <span className="icon">💵</span>
          </div>
        </div>
        <div className="referrals">
          <div className="label">Referrals</div>
          <div className="amount">
            0 <span className="icon">👥</span>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Header;
