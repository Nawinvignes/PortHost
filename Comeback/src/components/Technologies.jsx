import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiMysql, SiMongodb, SiSpringboot } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { IoLogoCss3, IoLogoHtml5 } from 'react-icons/io';

const Technologies = () => {
  const technologies = [
    {
      icon: <IoLogoHtml5 className="text-6xl text-orange-500" />,
      name: 'HTML5',
      level: 'Advanced',
      color: 'bg-green-500',
    },
    {
      icon: <IoLogoCss3 className="text-6xl text-blue-500" />,
      name: 'CSS3',
      level: 'Advanced',
      color: 'bg-green-500',
    },
    {
      icon: <IoLogoJavascript className="text-6xl text-yellow-300" />,
      name: 'JavaScript',
      level: 'Advanced',
      color: 'bg-green-500',
    },
    {
      icon: <RiReactjsLine className="text-6xl text-cyan-400" />,
      name: 'React',
      level: 'Intermediate',
      color: 'bg-yellow-500',
    },
    {
      icon: <SiSpringboot className="text-6xl" />,
      name: 'Spring Boot',
      level: 'Intermediate',
      color: 'bg-yellow-500',
    },
    {
      icon: <FaNodeJs className="text-6xl text-green-500" />,
      name: 'Node.js',
      level: 'Intermediate',
      color: 'bg-yellow-500',
    },
    {
      icon: <SiMongodb className="text-6xl text-green-600" />,
      name: 'MongoDB',
      level: 'Intermediate',
      color: 'bg-yellow-500',
    },
    {
      icon: <SiMysql className="text-6xl text-blue-200" />,
      name: 'MySQL',
      level: 'intermediate',
      color: 'bg-yellow-500',
    },
  ];

  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="rounded-2xl border-4 border-neutral-800 p-6 flex flex-col items-center text-center"
          >
            {tech.icon}
            <h3 className="mt-4 text-xl">{tech.name}</h3>
            <div className="w-full mt-4">
              <div className="flex justify-between">
                <span>{tech.level}</span>
                <span>
                  {tech.level === 'Advanced'
                    ? '🔵'
                    : tech.level === 'Intermediate'
                    ? '🟡'
                    : '🔴'}
                </span>
              </div>
              <div className="w-full bg-neutral-300 h-2 mt-1 rounded-full">
                <div
                  className={`h-full ${tech.color} rounded-full`}
                  style={{
                    width:
                      tech.level === 'Advanced'
                        ? '100%'
                        : tech.level === 'Intermediate'
                        ? '70%'
                        : '40%',
                  }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
