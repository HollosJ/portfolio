import React from 'react';
import { FaReact, FaGulp } from 'react-icons/fa';
import {
  SiJavascript,
  SiSass,
  SiCss3,
  SiHtml5,
  SiTailwindcss,
  SiAlpinedotjs,
} from 'react-icons/si';
const mySkills = [
  {
    name: 'HTML',
    icon: <SiHtml5 className="icon" />,
  },
  {
    name: 'CSS',
    icon: <SiCss3 className="icon" />,
  },
  {
    name: 'JavaScript',
    icon: <SiJavascript className="icon" />,
  },
  {
    name: 'Sass',
    icon: <SiSass className="icon" />,
  },
  {
    name: 'Tailwind',
    icon: <SiTailwindcss className="icon" />,
  },
  {
    name: 'Alpine.js',
    icon: <SiAlpinedotjs className="icon" />,
  },
  {
    name: 'React',
    icon: <FaReact className="icon" />,
  },
  {
    name: 'Gulp.js',
    icon: <FaGulp className="icon" />,
  },
];

const Skills = () => {
  return (
    <div className="container max-w-4xl px-2 pb-8 mx-auto md:px-4">
      <h6 className="font-black text-center text-jray">
        My current technical skills:
      </h6>
      <div className="container flex flex-wrap items-center justify-center gap-4 mx-auto mt-4">
        {mySkills.map((skill, key) => {
          return (
            <div
              key={key}
              className="relative flex flex-col items-center text-4xl group display-inline"
            >
              {/* ICON */}
              {skill.icon}

              {/* LABEL */}
              <span className="text-xs transition-opacity select-none label">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
