import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

const TimeoutModal = 1500;

export default function Cookies({ children }) {
  const [cookies, setCookie, removeCookie] = useCookies(['settings']);
  const { settings } = cookies;

  const [showModal, setShowModal] = useState(!settings);
  const [isVisible, setIsVisible] = useState(false);
  const currentLanguage = i18n.language;

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => setIsVisible(true), TimeoutModal);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showModal]);

  const saveLanguagePreference = () => {
    if (currentLanguage && currentLanguage !== 'en') {
      localStorage.setItem('i18nextLng', currentLanguage);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

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
    flex items-between justify-between fixed bottom-0 left-0 z-[999] bg-white dark:bg-black shadow-md-up shadow-orange-400 
    dark:shadow-orange-400 border-t border-t-orange-400 w-full h-full sm:h-auto pt-20 pb-10 sm:py-10 px-10 transform transition-transform duration-500 overflow-y-auto scrollbar-w-1 scrollbar scrollbar-rounded-full scrollbar-thumb-orange-400 scrollbar-track-gray-400
    ${isVisible ? 'translate-y-0' : 'translate-y-full'}
  `;

  return (
    <>
      {showModal && (
        <div className={modalClasses}>
          <div className="w-full flex flex-col lg:flex-row justify-between gap-10">
            <div className="w-full lg:w-9/12 xl:w-10/12 flex flex-col gap-4">
              <p className="text-[1.25rem] text-black dark:text-white font-semibold">{t('cookies.title')}</p>
              <p className="text-[1rem] text-black dark:text-white">{t('cookies.text')}</p>
            </div>
            <div className="w-full lg:w-3/12 xl:w-2/12 flex justify-center items-end flex-col sm:flex-row lg:flex-col gap-4">
              <button className="btn" onClick={handleAccept}>
                {t('cookies.btn-accept')}
              </button>
              <button className="btn" onClick={handleDecline}>
                {t('cookies.btn-no-accept')}
              </button>
            </div>
          </div>
        </div>
      )}
      {children}
    </>
  );
}

export const isCookieAccepted = () => {
  return document.cookie.includes('settings=cookie');
};
