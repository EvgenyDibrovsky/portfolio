import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

const MODAL_TIMEOUT = 1500;
const MOBILE_MAX_WIDTH = 768;

export default function Cookies({ children }) {
  const [cookies, setCookie, removeCookie] = useCookies(['settings']);
  const { settings } = cookies;

  const [showModal, setShowModal] = useState(!settings);
  const [isVisible, setIsVisible] = useState(false);
  const currentLanguage = i18n.language;

  useEffect(() => {
    if (showModal) {
      setTimeout(() => setIsVisible(true), MODAL_TIMEOUT);
    }
  }, [showModal]);

  const saveLanguagePreference = () => {
    if (currentLanguage && currentLanguage !== 'en') {
      localStorage.setItem('i18nextLng', currentLanguage);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.classList.remove('overflow-y-hidden'); // Изменение здесь
  };

  useEffect(() => {
    if (window.innerWidth < MOBILE_MAX_WIDTH && isVisible) {
      document.body.classList.add('overflow-y-hidden'); // Изменение здесь
    } else {
      document.body.classList.remove('overflow-y-hidden'); // Изменение здесь
    }

    return () => {
      document.body.classList.remove('overflow-y-hidden'); // Изменение здесь
    };
  }, [isVisible]);

  const handleAccept = () => {
    setCookie('settings', 'cookie', { path: '/' });
    saveLanguagePreference();
    closeModal();
  };

  const handleDecline = () => {
    removeCookie('settings', { path: '/' });
    closeModal();
  };

  const { t } = useTranslation();

  const modalClasses = `
    flex items-between justify-between fixed bottom-0 lg:bottom-5 left-0 lg:left-5 z-[999] bg-white dark:bg-black shadow-md-up lg:shadow-md shadow-orange-400 
    dark:shadow-orange-400 border-t lg:border border-t-orange-400 lg:border-orange-400 w-full lg:max-w-[38rem] h-full sm:h-auto py-14 px-5 sm:py-5 sm:px-10 transform transition-transform duration-500 overflow-y-auto scrollbar-w-1 scrollbar scrollbar-rounded-full scrollbar-thumb-orange-400 scrollbar-track-gray-400 rounded-lg
    ${isVisible ? 'translate-y-0' : 'translate-y-full'}
  `;

  const modalContent = (
    <div className={modalClasses}>
      <div className="w-full flex flex-col justify-between gap-5 ">
        <div>
          <p className="text-[1rem] text-black dark:text-white font-semibold mb-2">{t('cookies.title')}</p>
          <p className="text-[0.8rem] sm:text-[0.9rem] text-black dark:text-white">{t('cookies.text')}</p>
        </div>
        <div className="w-full flex flex-col sm:flex-row gap-4 justify-end lg:justify-center">
          <button className="btn" onClick={handleAccept} title={t('cookies.btn-accept')}>
            {t('cookies.btn-accept')}
          </button>
          <button className="btn" onClick={handleDecline} title={t('cookies.btn-no-accept')}>
            {t('cookies.btn-no-accept')}
          </button>
        </div>
      </div>
    </div>
  );
  return (
    <>
      {showModal && ReactDOM.createPortal(modalContent, document.getElementById('modal-root'))}
      {children}
    </>
  );
}

export const isCookieAccepted = () => {
  return document.cookie.includes('settings=cookie');
};
