import React from 'react';
import { useTranslation } from 'react-i18next';

export default function ToggleLang() {
  const { i18n } = useTranslation();

  const changeLanguage = language => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <ul className="list-none flex flex-wrap gap-2 ">
        <li
          onClick={() => changeLanguage('en')}
          className={`cursor-pointer inline-flex justify-center items-center w-8 h-8 border-2 border-transparent bg-bgIcons dark:bg-bgIconsDark  focus:outline-none duration-200 leading-[0] text-sm hover:border-b-2 hover:bg-orange-400 hover:text-white dark:text-white dark:hover:bg-orange-400 ${
            i18n.language === 'en' ? ' border-b-orange-400  ' : ''
          }`}
        >
          EN
        </li>
        <li
          onClick={() => changeLanguage('pl')}
          className={`cursor-pointer inline-flex justify-center items-center w-8 h-8 border-2 border-transparent bg-bgIcons dark:bg-bgIconsDark  focus:outline-none duration-200 leading-[0] text-sm hover:border-b-2 hover:bg-orange-400 hover:text-white dark:text-white dark:hover:bg-orange-400 ${
            i18n.language === 'pl' ? 'border-b-orange-400 ' : ''
          }`}
        >
          PL
        </li>
        <li
          onClick={() => changeLanguage('uk')}
          className={`cursor-pointer inline-flex justify-center items-center w-8 h-8 border-2 border-transparent bg-bgIcons dark:bg-bgIconsDark  focus:outline-none duration-200 leading-[0] text-sm hover:border-b-2 hover:bg-orange-400 hover:text-white dark:text-white dark:hover:bg-orange-400 ${
            i18n.language === 'uk' ? 'border-b-orange-400 ' : ''
          }`}
        >
          UK
        </li>
      </ul>
    </div>
  );
}
