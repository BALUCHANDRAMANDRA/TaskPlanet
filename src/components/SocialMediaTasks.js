import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube, FaTelegram, FaLinkedin, FaBell } from 'react-icons/fa';
import '../styles/SocialMediaTasks.css';

const taskVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5
    }
  })
};

const tasks = [
  { icon: <FaInstagram />, label: 'Instagram', notifications: 3, className: 'instagram' },
  { icon: <FaFacebook />, label: 'Facebook', notifications: 5, className: 'facebook' },
  { icon: <FaTwitter />, label: 'X', notifications: 2, className: 'twitter' },
  { icon: <FaYoutube />, label: 'YouTube', notifications: 0, className: 'youtube' },
  { icon: <FaTelegram />, label: 'Telegram', notifications: 1, className: 'telegram' },
  { icon: <FaLinkedin />, label: 'LinkedIn', notifications: 4, className: 'linkedin' }
];
const SocialMediaTasks = () => {
  return (
    <div className="social-media-tasks">
      <h2>Social Media Tasks</h2>
      <div className="task-container">
        {tasks.map((task, i) => (
          <motion.div
            className={`task-item ${task.className}`} 
            key={task.label}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={taskVariants}
          >
            <div className="notification-badge">
              <FaBell />
              {task.notifications > 0 && (
                <span className="notification-count">{task.notifications}</span>
              )}
            </div>
            <div className="icon-container">
              {task.icon} <span>{task.label}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default SocialMediaTasks;
