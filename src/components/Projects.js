import React from 'react'
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import ProjectsData from "./ProjectsData";

const Projects = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="p-5 mx-auto mt-5 text-center md:mx-10  md:p-0 lg:mx-16 xl:mx-56">
        <div id="projects" className="flex flex-wrap w-full flex-col items-center text-center">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
            Projects
          </h1>
          <p data-aos="zoom-in" data-aos-duration="1000" data-aos-once="false" className="text-lg font-medium leading-relaxed text-gray-500">
            My Works
          </p>
        </div>
        <div className="flex flex-wrap justify-center mt-4 gap-7 p-5 lg:gap-9">
          {ProjectsData.reverse().map((project) => (
            <div data-aos="zoom-in-up" data-aos-duration="1000" data-aos-once="false" key={project.id} className="group relative flex flex-col flex-wrap h-80 w-72 shadow-xl rounded-xl xl:w-[19rem] xl:h-5/6">
              <img src={project.image} alt={project.name} className="h-80 rounded-xl"/>
              <div className="absolute flex flex-col justify-center items-center bottom-0 left-0 right-0 h-0 overflow-hidden group-hover:h-full transition-[height_0.5s] duration-500 bg-darkblue rounded-xl">
                <h3 data-aos="zoom-in-up" data-aos-duration="1000" data-aos-once="false" className="text-2xl font-medium text-white my-2">
                  {project.name}
                </h3>
                <p data-aos="zoom-in-up" data-aos-duration="1000" data-aos-once="false" className="px-2 text-lg text-white">{project.description}</p>
                <div data-aos="zoom-in" data-aos-duration="1000" data-aos-once="false" className="flex gap-7 justify-center items-center my-7 text-2xl">
                  <div className="bg-white rounded-full p-2">
                    <a className="text-darkblue text-xl bg-white" href={project.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                    </a>
                  </div>
                  <div className="bg-white rounded-full p-2">
                  <a className="text-darkblue text-xl bg-white" href={project.demo} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt  className='p-[1px]'/>
                  </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects