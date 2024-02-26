import React, { useState, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import AnimateElements from '../../components/Utility/AnimateElements';

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
    <AnimateElements>
      <ul className="grid grid-cols lg:grid-cols-2 gap-4" ref={ref}>
        <li className="relative z-10 h-8 bg-gray-200 w-full rounded-lg px-5 opacity-0 init-animate-1">
          <div className="absolute left-0 top-0 h-8 bg-sky-600 rounded-lg" style={{ width: `${currentValues[0]}%` }}>
            <div className="absolute w-full top-0 bottom-0 flex justify-between items-center gap-4 px-5 text-white font-medium">
              <div className="hidden sm:block">{t('language-skills.english')}</div>
              <div className="block sm:hidden">{t('language-skills.en')}</div>
              <div className="ml-auto">{currentValues[0]}%</div>
            </div>
          </div>
        </li>
        <li className="relative z-10 h-8 bg-gray-200 w-full rounded-lg px-5 opacity-0 init-animate-1">
          <div className="absolute left-0 top-0 h-8 bg-sky-600 rounded-lg" style={{ width: `${currentValues[1]}%` }}>
            <div className="absolute w-full top-0 bottom-0 flex justify-between items-center gap-4 px-5 text-white font-medium">
              <div className="hidden sm:block">{t('language-skills.polish')}</div>
              <div className="block sm:hidden">{t('language-skills.pl')}</div>
              <div className="ml-auto">{currentValues[1]}%</div>
            </div>
          </div>
        </li>
        <li className="relative z-10 h-8 bg-gray-200 w-full rounded-lg px-5 opacity-0 init-animate-1">
          <div className=" absolute left-0 top-0 h-8 bg-sky-600 rounded-lg" style={{ width: `${currentValues[2]}%` }}>
            <div className="absolute w-full top-0 bottom-0 flex justify-between items-center gap-4 px-5 text-white font-medium">
              <div className="hidden sm:block">{t('language-skills.ukrainian')}</div>
              <div className="block sm:hidden">{t('language-skills.uk')}</div>
              <div className="ml-auto">{currentValues[2]}%</div>
            </div>
          </div>
        </li>
        <li className="relative z-10 h-8 bg-gray-200 w-full rounded-lg px-5 opacity-0 init-animate-1">
          <div className=" absolute left-0 top-0 h-8 bg-sky-600 rounded-lg" style={{ width: `${currentValues[3]}%` }}>
            <div className="absolute w-full top-0 bottom-0 flex justify-between items-center gap-4 px-5 text-white font-medium">
              <div className="hidden sm:block">{t('language-skills.russian')}</div>
              <div className="block sm:hidden">{t('language-skills.ru')}</div>
              <div className="ml-auto">{currentValues[3]}%</div>
            </div>
          </div>
        </li>
      </ul>
    </AnimateElements>
  );
}
