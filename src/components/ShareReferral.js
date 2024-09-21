import React from 'react';
import { motion } from 'framer-motion';
import { FaLink, FaWhatsapp, FaTelegram, FaFacebook } from 'react-icons/fa';
import '../styles/ShareReferral.css';

const shareOptions = [
  { icon: <FaLink />, label: 'Copy Link' },
  { icon: <FaWhatsapp />, label: 'WhatsApp' },
  { icon: <FaTelegram />, label: 'Telegram' },
  { icon: <FaFacebook />, label: 'Facebook' },
];

const taskVariants = {
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

const ShareReferral = () => {
  return (
    <div className="share-referral">
      <h2>Share Your Referral Link</h2>
      <div className="task-container">
        {shareOptions.map((task, i) => (
          <motion.div
            className="task-item"
            key={task.label}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={taskVariants}
          >
            <div className="icon-container">
              {task.icon}
              <span className="task-label">{task.label}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ShareReferral;
