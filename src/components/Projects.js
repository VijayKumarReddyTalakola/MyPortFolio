import React from 'react'
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import ProjectsData from "./ProjectsData";
import { motion } from "framer-motion";

const Projects = () => {
  return (
  <section className="text-gray-600 body-font">
    <div className="p-5 mx-auto mt-5 text-center md:mx-10  md:p-0 lg:mx-16 xl:mx-56">
      <div id='projects' className="flex flex-wrap w-full flex-col items-center text-center">
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Projects</h1>
        <motion.p 
        initial={{ scale:0}}
        whileInView={{ scale:1}}
        transition={{ duration: 0.7 }}
        className="text-lg font-medium leading-relaxed text-gray-500">My Works</motion.p>
      </div>
      <div className="flex flex-wrap justify-center mt-4 gap-7 p-5 lg:gap-9">
        {ProjectsData.reverse().map((project) => (
          <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          key={project.id} className="group relative flex flex-col flex-wrap h-80 w-64 shadow-xl rounded-xl xl:w-72 hover:scale-110 cursor-pointer transition ease-in-out duration-500 ">
            <img src={project.image} alt={project.name} className='h-80 rounded-xl'/>
            <div className="absolute flex flex-col justify-center items-center bottom-0 left-0 right-0 h-0 overflow-hidden group-hover:h-full transition-[height_0.5s] duration-500 bg-darkblue rounded-xl">
              <motion.h3 
                initial={{ x: 50 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.7 }}
              className='text-2xl font-medium text-white my-2'>{project.name}</motion.h3>
              <p className='px-2 text-lg text-white'>{project.description}</p>
              <motion.div 
              initial={{ scale:0 }}
              whileInView={{ scale:1 }}
              transition={{ duration: 0.7 }}
              className="flex gap-7 justify-center items-center my-7 text-2xl">
                <a className='text-white' href={project.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a className='text-white' href={project.demo} target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /></a>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
</section>
  )
}

export default Projects