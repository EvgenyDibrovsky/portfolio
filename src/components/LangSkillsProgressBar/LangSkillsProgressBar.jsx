import React, { useState, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import '/node_modules/flag-icons/css/flag-icons.min.css';

export default function ProgressLangSkills() {
  const { t } = useTranslation();

  const skills = useMemo(
    () => [
      { value: 40, languageKey: 'english' },
      { value: 70, languageKey: 'polish' },
      { value: 100, languageKey: 'ukrainian' },
      { value: 100, languageKey: 'russian' },
    ],
    []
  );

  // Крючок для определения, когда элемент становится видимым
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentValues, setCurrentValues] = useState(skills.map(d => 0));

  useEffect(() => {
    if (inView) {
      const maxProgressValue = Math.max(...skills.map(skill => skill.value));
      if (Math.max(...currentValues) < maxProgressValue) {
        const timeout = setTimeout(() => {
          setCurrentValues(prevValues => prevValues.map((v, index) => Math.min(v + 1, skills[index].value)));
        }, 20);
        return () => clearTimeout(timeout);
      }
    }
  }, [currentValues, skills, inView]);

  return (
    <ul className="grid grid-cols lg:grid-cols-2 gap-4" ref={ref}>
      <li className="relative h-8 bg-gray-200 w-full rounded-lg px-5">
        <div className="fi fi-us bg-left bg-contain absolute left-0 top-0 h-8 bg-orange-400 rounded-lg" style={{ width: `${currentValues[0]}%` }}>
          <div className="absolute w-full pl-16  top-0 bottom-0 flex justify-between items-center gap-4 px-5 text-black font-medium">
            <div>{t('language-skills.english')}</div>
            <div>{currentValues[0]}%</div>
          </div>
        </div>
      </li>
      <li className="relative h-8 bg-gray-200 w-full rounded-lg px-5">
        <div className="fi fi-pl bg-left bg-contain absolute left-0 top-0 h-8 bg-orange-400 rounded-lg" style={{ width: `${currentValues[1]}%` }}>
          <div className="absolute w-full pl-16 top-0 bottom-0 flex justify-between items-center gap-4 px-5 text-black font-medium">
            <div>{t('language-skills.polish')}</div>
            <div>{currentValues[1]}%</div>
          </div>
        </div>
      </li>
      <li className="relative h-8 bg-gray-200 w-full rounded-lg px-5">
        <div className="fi fi-ua bg-left bg-contain absolute left-0 top-0 h-8 bg-orange-400 rounded-lg" style={{ width: `${currentValues[2]}%` }}>
          <div className="absolute w-full pl-16 top-0 bottom-0 flex justify-between items-center gap-4 px-5 text-black font-medium">
            <div>{t('language-skills.ukrainian')}</div>
            <div>{currentValues[2]}%</div>
          </div>
        </div>
      </li>
      <li className="relative h-8 bg-gray-200 w-full rounded-lg px-5">
        <div className="fi fi-ru bg-left bg-contain absolute left-0 top-0 h-8 bg-orange-400 rounded-lg" style={{ width: `${currentValues[3]}%` }}>
          <div className="absolute w-full pl-16  top-0 bottom-0 flex justify-between items-center gap-4 px-5 text-black font-medium">
            <div>{t('language-skills.russian')}</div>
            <div>{currentValues[3]}%</div>
          </div>
        </div>
      </li>
    </ul>
  );
}
