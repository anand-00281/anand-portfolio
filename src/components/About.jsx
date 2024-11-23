import React from "react";
import { motion } from "framer-motion";
import { EDUCATION } from "../contants";
import AboutImage from '../assets/about.png'

import {
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiMongodb,
  DiGithubBadge,
  DiSass,
} from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const About = () => {
  return (
    <div className="max-w-[1300px] mx-auto flex flex-col p-4" id="about">
      <div className="md:hidden mb-5 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6 flex flex-wrap gap-4 text-4xl justify-center">
        <DiHtml5 className="text-orange-600" />
        <DiCss3 className="text-blue-500" />
        <DiSass className="text-pink-600" />
        <DiJavascript1 className="text-yellow-500" />
        <SiTailwindcss className="text-blue-400" />
        <DiReact className="text-purple-600" />
        <DiNodejsSmall className="text-green-500" />
        <DiGithubBadge className="text-slate-400" />
        <DiMongodb className="text-green-600" />
      </div>

      <h2 className="mb-8 text-white text-center text-3xl lg:text-4xl font-bold">
        About Me
      </h2>
      <div className="flex flex-col md:flex-row md:justify-between">
        <motion.div 
          className="md:max-w-[48%] w-full flex-col md:flex-row"
          initial={{ opacity: 0, x: -50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <p className="text-lg md:text-xl text-gray-400">
            Hi! I'm Anand Sanodiya, a passionate Frontend Developer with a keen
            interest in building responsive and dynamic web applications.
            Currently pursuing a Bachelor of Technology in Computer Science
            Engineering with a specialization in the Internet of Things at G.H.
            Raisoni College of Engineering, Nagpur, I have consistently
            maintained a CGPA of 8.75.
          </p>
          <p className="text-lg md:text-xl text-gray-400 mt-8">
            I specialize in libraries and framework technologies, with hands-on
            experience in tools like Node.js, Express.js, and React.js. My
            journey as a self-taught developer has been marked by a strong
            dedication to continuous learning, problem-solving, and
            adaptability. I love tackling challenges and have completed 100+
            coding challenges and 5+ projects that focus on optimizing user
            experience and accessibility. My portfolio showcases a variety of
            projects, from simple web clones to dynamic, fully responsive
            applications.
          </p>
          <p className="text-lg md:text-xl text-gray-400 mt-8">
            Beyond coding, I am a firm believer in teamwork and collaboration,
            having participated in hackathons and technical workshops to enhance
            my skills. My goal is to continue refining my expertise while
            keeping up with the latest trends in web development and IoT.
          </p>
        </motion.div>
        <motion.div 
          className="flex justify-center mt-4 md:mt-0 md:max-w-[60%]"
          initial={{ opacity: 0, scale: 0.8 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <img src={AboutImage} alt="" className="max-w-full h-full justify-center text-center items-center rounded-lg md:h-[600px]" />
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center w-full max-w-[800px] mx-auto">
        <h2 className="text-2xl md:text-3xl text-white mt-5 p-4 border-b-2 font-medium tracking-tight mb-10 text-center">
          My Education
        </h2>

        <motion.div
          className="space-y-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {EDUCATION.map((education, index) => (
            <motion.div key={index} variants={childVariants} className="border-gray-300">
              <div className="flex flex-col md:flex-row md:justify-center border p-4 rounded-md md:border-2 sm:border-1">
                <p className="text-sm md:text-base text-gray-400 md:w-1/4 mb-2 md:mb-0 text-center">
                  {education.duration}
                </p>
                <div className="w-full md:w-3/4">
                  <div className="max-w-7xl backdrop-blur-3xl items-start text-start justify-start bg-stone-600/10 rounded-lg ">
                    <h2 className="text-lg md:text-xl text-blue-200 mb-1">{education.degree}</h2>
                    <h3 className="text-lg md:text-xl text-slate-100">{education.institution}</h3>
                    <p className="text-xs md:text-sm italic text-gray-400 mt-1">{education.cgpa}</p>
                    <p className="text-gray-400 mt-1">{education.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;