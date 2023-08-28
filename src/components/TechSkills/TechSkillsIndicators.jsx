import React from 'react';
import dbTechSkills from '../../db/techskills.json';
import TechSkills from './TechSkills'; // Импортируем компонент TechSkills

export default function TechSkillsIndicators() {
  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-2">
      {dbTechSkills.map(skill => (
        <TechSkills skill={skill.techskill} key={skill.techskill.id} />
      ))}
    </ul>
  );
}
