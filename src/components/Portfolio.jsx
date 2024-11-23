import React from "react";
import { PROJECTS } from '../contants/index';
import { MdArrowOutward } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";

const Portfolio = () => {
  return (
    <div
      className="max-w-[1200px] min-h-screen mx-auto p-6 md:my-20 flex flex-col"
      id="portfolio"
    >
      <h2 className="mb-8 text-white text-center text-3xl lg:text-4xl font-bold">Projects</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className="group relative overflow-hidden rounded-3xl shadow-lg transition-transform duration-500 hover:scale-105"
          >
            <img
              src={project.image}
              alt={project.name}
              className="md:h-96 h-72 w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-between pb-5 pt-5 text-white opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100">
              <h3 className="mb-2 text-xl text-white font-bold text-center">{project.name}</h3>
              <p className="hidden md:block md:mb-12 md:p-4 md:text-center">{project.description}</p>
              <div className="flex gap-4">
                <a href={project.projectLink} target="_blank" rel="noopener noreferrer" className="text-balance">
                <div className="flex rounded-full items-center px-4 py-2  bg-white justify-center hover:bg-gray-300">
                  <span className="text-black">View site </span>
                  <MdArrowOutward className="text-black ml-2" />
                </div>
              </a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-balance">
                <div className="flex  rounded-full items-center px-4 py-2 bg-white justify-center hover:bg-gray-300">
                  <span className="text-black">View on Github </span>
                  < AiFillGithub className="bg-black text-2xl ml-2" />
                </div>
              </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;