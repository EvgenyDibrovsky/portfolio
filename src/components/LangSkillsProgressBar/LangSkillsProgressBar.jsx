import React, { useState, useEffect } from 'react';
import dbLangSkills from '../../db/langskills.json';
import { useTranslation } from 'react-i18next';

export default function ProgressLangSkills() {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language.toUpperCase();

  const data = dbLangSkills.map(item => {
    const languageSpecificData = item.languageskills[currentLanguage];
    return {
      ...languageSpecificData,
      id: item.languageskills.id,
      maxValue: item.languageskills.value,
    };
  });

  const [currentValues, setCurrentValues] = useState(data.map(d => 0));

  useEffect(() => {
    const maxProgressValue = Math.max(...data.map(item => item.maxValue));
    if (Math.max(...currentValues) < maxProgressValue) {
      const timeout = setTimeout(() => {
        setCurrentValues(prevValues =>
          prevValues.map((v, index) => Math.min(v + 1, data[index].maxValue))
        );
      }, 20);
      return () => clearTimeout(timeout);
    }
  }, [currentValues, data]);

  return (
    <ul className="grid grid-cols lg:grid-cols-2 gap-4">
      {data.map((lang, index) => (
        <li key={lang.id} className="relative h-8 bg-gray-200 w-full rounded-lg px-5">
          <div
            className="absolute left-0 top-0 h-8 bg-green-500 rounded-lg "
            style={{ width: `${currentValues[index]}%` }}
          ></div>

          <div className="absolute top-0 bottom-0 flex items-center gap-4">
            <div className="w-full">{lang.language}</div>
            <div className="w-full">{currentValues[index]}%</div>
          </div>
        </li>
      ))}
    </ul>
  );
}
