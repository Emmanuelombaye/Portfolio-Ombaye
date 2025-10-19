import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className='h-screen flex flex-col justify-center items-center text-center px-6'>
      <motion.h1
        className='text-5xl md:text-6xl font-bold mb-4'
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hello, I'm <span className='text-cyan-400'>Emmanuel</span>
      </motion.h1>

      <motion.p
        className='text-lg md:text-xl text-gray-300 max-w-2xl mb-8'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        A passionate <span className='text-cyan-400'>Full-Stack Developer</span> building
        modern web experiences with creativity and precision.
      </motion.p>

      <motion.a
        href='#projects'
        whileHover={{ scale: 1.1 }}
        className='px-6 py-3 bg-cyan-500 text-black font-semibold rounded-full shadow-md hover:bg-cyan-400 transition'
      >
        View My Work
      </motion.a>
    </section>
  );
};

export default Hero;
