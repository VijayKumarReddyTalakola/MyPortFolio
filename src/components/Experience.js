import React from "react";
import ExperienceData from "../data/experience";

const Experience = () => {
  return (
    <section className="py-3 px-3 bg-white mt-4 md:mt-7">
      <div className="mx-auto max-w-6xl">
        <div id="experience" className="flex flex-col text-center mb-4 w-full ">
          <h1 className="text-3xl sm:text-4xl font-medium title-font mb-2">
            Experience
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="false"
            className="text-lg mx-auto leading-relaxed font-medium text-dark-orange text-center"
          >
            Professional Experience
          </p>
        </div>

        <div className="flex flex-col md:grid grid-cols-9 mx-auto text-blue-50">
          {ExperienceData?.reverse().map((exp, index) => {
            const isLeft = index % 2 === 0;
            return isLeft ? (
              <div
                key={index}
                className="flex flex-row-reverse md:contents text-start"
              >
                <div
                  data-aos="zoom-in-up"
                  data-aos-duration="1500"
                  data-aos-once="false"
                  className="bg-slate-100 text-gray-700 col-start-1 col-end-5 p-2.5 md:p-4 rounded-lg my-4 ml-auto shadow-md"
                >
                  <h3 className="text-lg md:text-xl font-semibold mb-1">
                    {exp.title}
                  </h3>
                  <div className="flex flex-col md:flex-row md:items-center justify-between font-medium w-full gap-2 mb-2">
                    <h4 className="text-base text-gray-500">{exp.company}</h4>
                    <p className="text-sm md:text-base text-gray-500">
                      {exp.duration}
                    </p>
                  </div>
                  <div className="flex w-fit mx-auto">
                    <ul className="pl-3 md:pl-5 list-disc leading-loose max-w-max text-[15px] text-start md:text-base font-medium">
                      {exp?.description?.map((desc, index) => (
                        <li key={index} className="mb-1 md:mb-2">
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="col-start-5 col-end-6 md:mx-auto relative mr-3 md:mr-10">
                  <div className="h-full w-4 flex items-center justify-center">
                    <div className="h-full w-[3px] bg-dark-orange/50"></div>
                  </div>
                  <div className="w-4 h-4 absolute top-4 rounded-full bg-dark-orange shadow">
                    <div className="h-full w-full bg-dark-orange/30 animate-pulse scale-150 rounded-full"></div>
                  </div>
                </div>
              </div>
            ) : (
              <div key={index} className="flex md:contents text-start">
                <div className="col-start-5 col-end-6 md:mx-auto relative mr-3 md:mr-10">
                  <div className="h-full w-4 flex items-center justify-center">
                    <div className="h-full w-[3px] bg-dark-orange/50"></div>
                  </div>
                  <div className="w-4 h-4 absolute top-4 rounded-full bg-dark-orange shadow">
                    <div className="h-full w-full bg-dark-orange/30 animate-pulse scale-150 rounded-full"></div>
                  </div>
                </div>
                <div
                  data-aos="zoom-in-up"
                  data-aos-duration="1500"
                  data-aos-once="false"
                  className="bg-slate-100 text-gray-700 col-start-6 col-end-10 p-2.5 md:p-4 rounded-lg my-4 mr-auto shadow-md"
                >
                  <h3 className="text-lg md:text-xl font-semibold mb-1">
                    {exp.title}
                  </h3>
                  <div className="flex flex-col md:flex-row md:items-center justify-between text-gray-500 font-medium w-full gap-2 mb-2">
                    <h4 className="text-base text-gray-500">{exp.company}</h4>
                    <p className="text-sm md:text-base text-gray-500">
                      {exp.duration}
                    </p>
                  </div>
                  <div className="flex w-fit mx-auto">
                    <ul className="pl-3 md:pl-5 list-disc leading-loose max-w-max text-[15px] text-start md:text-base font-medium">
                      {exp?.description?.map((desc, index) => (
                        <li key={index} className="mb-1 md:mb-2">
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
