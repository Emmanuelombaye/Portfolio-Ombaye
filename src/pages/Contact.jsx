import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className='min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24'>
      <motion.h2
        className='text-4xl font-bold text-cyan-400 mb-6'
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Get in Touch
      </motion.h2>

      <motion.form
        className='w-full max-w-lg bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-700'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <input type='text' placeholder='Your Name' className='w-full p-3 mb-4 rounded-md bg-gray-800 text-white border border-gray-700 focus:border-cyan-400 outline-none' />
        <input type='email' placeholder='Your Email' className='w-full p-3 mb-4 rounded-md bg-gray-800 text-white border border-gray-700 focus:border-cyan-400 outline-none' />
        <textarea placeholder='Your Message' rows='5' className='w-full p-3 mb-4 rounded-md bg-gray-800 text-white border border-gray-700 focus:border-cyan-400 outline-none'></textarea>
        <button type='submit' className='w-full py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-md transition'>Send Message</button>
      </motion.form>
    </section>
  );
};

export default Contact;
