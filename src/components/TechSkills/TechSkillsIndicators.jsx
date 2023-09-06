import React from 'react';
import dbTechSkills from '../../db/techskills.json';
import TechSkills from './TechSkills'; // Импортируем компонент TechSkills
import AnimateElements from 'components/Utility/AnimateElements';

export default function TechSkillsIndicators() {
  return (
    <AnimateElements>
      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-6 md:gap-4">
        {dbTechSkills.map(skill => (
          <TechSkills skill={skill.techskill} key={skill.techskill.id} />
        ))}
      </ul>
    </AnimateElements>
  );
}
