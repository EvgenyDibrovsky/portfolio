import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function ToggleLang({ closeHeader }) {
  const { i18n } = useTranslation();
  const availableLanguages = ['en', 'pl', 'uk', 'ru'];

  const getShortLanguageCode = lang => (lang ? lang.split('-')[0] : '');

  const [currentLanguage, setCurrentLanguage] = useState(getShortLanguageCode(i18n.language));

  useEffect(() => {
    const handleLanguageChange = lang => {
      setCurrentLanguage(getShortLanguageCode(lang));
    };

    i18n.on('languageChanged', handleLanguageChange);
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  const changeLanguage = language => {
    i18n.changeLanguage(language);
    closeHeader && closeHeader();
  };

  return (
    <>
      <ul className="list-none flex flex-wrap gap-2">
        {availableLanguages.map(lang => (
          <li
            key={lang}
            onClick={() => changeLanguage(lang)}
            className={`cursor-pointer inline-flex justify-center items-center w-8 h-8 border-2 border-transparent bg-bgIcons dark:bg-bgIconsDark  focus:outline-none duration-200 leading-[0] text-sm hover:border-b-2 hover:bg-gradient-to-t hover:bg-sky-600 hover:dark:text-black hover:text-white dark:text-white dark:hover:bg-sky-600 ${
              currentLanguage === lang ? 'border-b-sky-600' : ''
            }`}
          >
            {lang.toUpperCase()}
          </li>
        ))}
      </ul>
    </>
  );
}
