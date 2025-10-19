import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      className='fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 text-white shadow-lg'
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className='max-w-6xl mx-auto flex items-center justify-between p-4'>
        <Link to='/' className='text-2xl font-bold tracking-wide text-cyan-400'>
          EM<span className='text-white'>.</span>
        </Link>

        <button onClick={() => setOpen(!open)} className='md:hidden text-2xl'>
          {open ? '?' : '?'}
        </button>

        <ul className={md:flex gap-8 font-medium transition-all duration-500 }>
          {links.map((link, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive ? 'text-cyan-400' : 'hover:text-cyan-300'
                }
                onClick={() => setOpen(false)}
              >
                {link.name}
              </NavLink>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
