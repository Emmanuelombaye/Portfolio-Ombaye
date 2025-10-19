import React from 'react';
import { motion } from 'framer-motion';
import projects from '../data/projects';

const Projects = () => {
  return (
    <section id='projects' className='min-h-screen pt-24 px-6'>
      <h2 className='text-4xl font-bold text-center mb-10 text-cyan-400'>Projects</h2>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className='bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-700 hover:border-cyan-400 transition'
          >
            <img src={project.image} alt={project.title} className='w-full h-52 object-cover'/>
            <div className='p-5'>
              <h3 className='text-xl font-semibold mb-2'>{project.title}</h3>
              <p className='text-gray-400 mb-3'>{project.description}</p>
              <a href={project.link} target='_blank' rel='noreferrer' className='text-cyan-400 hover:underline'>View Project ?</a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
