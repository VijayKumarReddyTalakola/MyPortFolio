import React from 'react'
import SkillsData from './SkillsData'

const Skills = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="p-4 mx-auto md:p-5 md:mx-20 lg:mx-32 xl:mx-56">
        <div id="skills" className="flex flex-wrap w-full mb-4 flex-col items-center text-center md:mb-10">
          <h1 className="sm:text-4xl text-3xl font-medium mb-2 text-gray-900">
            Skills
          </h1>
          <p data-aos="zoom-in" data-aos-duration="1000" data-aos-once="false" className="text-lg font-medium leading-relaxed text-gray-500 ">
            My Technical Experties
          </p>
        </div>
        <div data-aos="zoom-in" data-aos-duration="1000" data-aos-once="false" className="text-center flex justify-center flex-wrap border-t-gray-200 border-2 shadow-xl gap-4 px-0 py-4 md:p-5 md:gap-7 lg:gap-5 lg:p-5 xl:gap-10 xl:p-9">
          {SkillsData.map((Skill) => {
            return (
              <div data-aos="zoom-in-up" data-aos-duration="1500" data-aos-once="false" key={Skill.id} className="flex flex-col w-20 h-20 items-center justify-center text-center md:w-24 md:h-24 lg:m-3 xl:m-5 ">
                <img src={Skill.image} alt={Skill.name} className="m-2 object-cover w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 transition duration-700 hover:scale-125"/>
                <p>{Skill.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills