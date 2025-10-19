import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className='min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24'>
      <motion.h2
        className='text-4xl font-bold text-cyan-400 mb-6'
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className='max-w-3xl text-gray-300 text-lg leading-relaxed'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        I'm Emmanuel, a <span className='text-cyan-400'>Full Stack Developer</span> who loves crafting
        modern, responsive, and dynamic web experiences. I enjoy building visually engaging
        interfaces with clean backend logic. My stack includes React, Node.js, Python, and
        TailwindCSS. I believe design and logic go hand in hand.
      </motion.p>
    </section>
  );
};

export default About;
