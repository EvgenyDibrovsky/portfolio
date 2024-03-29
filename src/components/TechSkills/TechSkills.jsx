import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useInView } from 'react-intersection-observer';

const TechSkills = ({ skill }) => {
  const [progressValue, setProgressValue] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        setProgressValue(parseInt(skill.value));
      }, 50);
    }
  }, [inView, skill.value]);

  return (
    <li
      className="relative z-10 bg-white dark:bg-neutral-800 rounded-full w-full sm:w-10/12 md:w-9/12 lg:w-full xxl:w-10/12 2xl:w-7/12 h-auto mx-auto flex flex-col items-center justify-center duration-300 hover:scale-110 opacity-0 init-animate-1"
      ref={ref}
    >
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <CircularProgressbar
          value={progressValue}
          styles={buildStyles({
            textSize: '0px',
            pathColor: '#20a34d',
            trailColor: '#ededed',
            pathTransitionDuration: 1.5,
          })}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-5">
          <p className="text-black dark:text-white font-bold text-center text-[0.9rem]">{skill.label}</p>
          <p className="text-green-600 dark:text-green-600 text-center  text-[1.25rem]">{skill.value}%</p>
        </div>
      </div>
    </li>
  );
};
export default TechSkills;
