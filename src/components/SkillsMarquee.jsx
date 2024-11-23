import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiExpress, SiMongodb } from 'react-icons/si';

const SkillsMarquee = () => {
    return (
        <div className="skills-marquee-container mb-10 py-5 flex flex-col items-center text-white"> {/* Background and text color */}

            <div className="overflow-hidden whitespace-nowrap w-1/2 hidden md:flex"> {/* Hidden on small screens, visible on md and up */}
                <motion.div
                    className="flex space-x-12" // Increased space for smoother transition
                    animate={{ x: ['100%', '-100%'] }} // Horizontal movement
                    transition={{ duration: 10, ease: 'linear', repeat: Infinity }}
                >
                    <span className="text-orange-500"><FaHtml5 size={70} /></span> {/* Increased size */}
                    <span className="text-blue-500"><FaCss3Alt size={70} /></span> {/* Increased size */}
                    <span className="text-yellow-500"><FaJs size={70} /></span> {/* Increased size */}
                    <span className="text-blue-400"><FaReact size={70} /></span> {/* Increased size */}
                    <span className="text-green-500"><FaNodeJs size={70} /></span> {/* Increased size */}
                    <span className="text-gray-400"><SiExpress size={70} /></span> {/* Increased size */}
                    <span className="text-green-600"><SiMongodb size={70} /></span> {/* Increased size */}
                </motion.div>
            </div>
        </div>
    );
};

export default SkillsMarquee; 