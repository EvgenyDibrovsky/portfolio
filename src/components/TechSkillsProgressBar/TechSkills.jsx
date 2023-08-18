import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import dbTechSkills from '../../db/techskills.json';

export default function ProgressIndicators() {
  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-2">
      {dbTechSkills.map(skill => (
        <li
          key={skill.techskill.id}
          className="w-full sm:w-10/12 md:w-9/12 lg:w-full xxl:w-10/12 2xl:w-7/12 h-auto mx-auto flex flex-col items-center justify-center "
        >
          <div className="relative w-full h-full  flex items-center justify-center">
            <CircularProgressbar
              value={parseInt(skill.techskill.value)}
              styles={buildStyles({
                textSize: '0px', // Устанавливаем размер текста равным 0, чтобы текст не отображался
                pathColor: '#fb923c',
                trailColor: '#ededed',
              })}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-5">
              <p className="text-black dark:text-white font-medium text-center">
                {skill.techskill.label}
              </p>
              <p className="text-black dark:text-white text-center font-bold text-[1.25rem]">
                {skill.techskill.value}%
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
