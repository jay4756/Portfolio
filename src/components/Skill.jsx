import React from 'react';
import { FaReact, FaJava, FaPython, FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt } from 'react-icons/fa';
import { SiSpringboot, SiTailwindcss, SiPostman, SiMysql, SiNumpy, SiPandas  } from 'react-icons/si';


const skills = [
  { name: 'React.js', icon: <FaReact className="text-cyan-400" /> },
  { name: 'Java', icon: <FaJava className="text-orange-400" /> },
  { name: 'Spring Boot', icon: <SiSpringboot className="text-green-500" /> },
  { name: 'Python', icon: <FaPython className="text-yellow-400" /> },
  { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-400" /> },
  { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-400" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" /> },
  { name: 'Git', icon: <FaGitAlt className="text-red-500" /> },
  { name: 'Postman', icon: <SiPostman className="text-orange-300" /> },
  {name:'MySQL', icon: <SiMysql  className="text-blue-500" /> },
   {name:'pandas', icon: <SiPandas  className="text-orange-500" /> },
   {name:'numpy', icon:<SiNumpy   className="text-blue-700" /> }
  
];

const Skills = () => (
  <section id="skills" className="mb-12">
    <h2 className="text-2xl font-semibold mb-4">Skills</h2>
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map(({ name, icon }) => (
          <div key={name} className="flex items-center space-x-3">
            <div className="text-2xl">{icon}</div>
            <span className="text-gray-300">{name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;


