import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className='bg-black/40 backdrop-blur-md py-6 text-center border-t border-gray-800 text-gray-400'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <p>© 2025 Emmanuel Ombaye. All rights reserved.</p>
      <div className='flex justify-center gap-4 mt-3'>
        <a href='https://github.com/EmmanuelOmbaye' target='_blank' className='hover:text-cyan-400'>GitHub</a>
        <a href='mailto:manuelombaye@gmail.com' className='hover:text-cyan-400'>Email</a>
      </div>
    </motion.footer>
  );
};

export default Footer;
