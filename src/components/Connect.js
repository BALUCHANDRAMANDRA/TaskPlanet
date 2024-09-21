import React from 'react';
import { motion } from 'framer-motion';
import { FaYoutube, FaTelegram, FaWhatsapp, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';
import '../styles/Connect.css';

const connectOptions = [
  <FaYoutube />,
  <FaTelegram />,
  <FaWhatsapp />,
  <FaTwitter />,
  <FaInstagram />,
  <FaFacebook />,
];

const iconVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

const Connect = () => {
  return (
    <div className="connect">
      <h2>Connect With Us</h2>
      <div className="connect-container">
        {connectOptions.map((icon, i) => (
          <motion.div
            className="icon-item"
            key={i}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={iconVariants}
          >
            {icon}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Connect;
