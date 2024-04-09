import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import { BsToggle2Off, BsToggle2On } from 'react-icons/bs';
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

  const [cookieConsent, setCookieConsent] = useState({
    analytics: true,
  });

  const activateGoogleAnalytics = () => {
    if (!window.gtag) {
      // Your Google Analytics tracking ID
      const GA_TRACKING_ID = 'G-PK70TN2X21';

      // Create script tag
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
      script.async = true;
      document.body.appendChild(script);

      // Initialize Google Analytics
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', GA_TRACKING_ID);
    }
  };
  const updateConsent = type => {
    setCookieConsent(prevState => ({ ...prevState, [type]: !prevState[type] }));
  };

  const handleAccept = () => {
    setCookie('settings', 'cookie', { path: '/' });
    saveLanguagePreference();
    if (cookieConsent.analytics) {
      activateGoogleAnalytics();
    }
    closeModal();
  };

  const handleDecline = () => {
    removeCookie('settings', { path: '/' });
    closeModal();
  };

  const { t } = useTranslation();

  const renderToggleIcon = isEnabled => {
    return <button onClick={() => updateConsent('analytics')}>{isEnabled ? <BsToggle2On className="text-[1.5rem] text-green-600" /> : <BsToggle2Off className="text-[1.5rem] text-red-600" />}</button>;
  };

  const modalClasses = `
    flex items-between justify-between fixed bottom-0 left-0 z-[999] bg-white dark:bg-black sm:border-t lg:border border-neutral-200 dark:border-neutral-600 lg:shadow-md dark:shadow-white
     w-full lg:max-w-[38rem] h-full sm:h-auto py-14 px-5 sm:p-5 transform duration-500 overflow-y-auto scrollbar-w-1 scrollbar scrollbar-rounded-full scrollbar-thumb-orange-400 scrollbar-track-gray-400
    ${isVisible ? 'translate-y-0 lg:-translate-y-5 lg:translate-x-5' : 'translate-y-full'}
  `;

  const modalContent = (
    <div className={modalClasses}>
      <div className="w-full flex flex-col justify-between gap-5 ">
        <div className="cookies-modal-content">
          <p className="text-[1.2rem] text-black dark:text-white font-semibold mb-2">{t('cookies.title')}</p>
          <p className="text-[1rem] sm:text-[0.9rem] text-black dark:text-white" dangerouslySetInnerHTML={{ __html: t('cookies.text') }}></p>
        </div>

        <div className="flex items-center">
          {renderToggleIcon(cookieConsent.analytics)}
          <button className="text-[1rem] text-black dark:text-white ml-2" onClick={() => updateConsent('analytics')}>
            {t('cookies.google-analytics')}
          </button>
        </div>

        <div className="w-full flex flex-col sm:flex-row gap-4 justify-end lg:justify-center">
          <button className="btn-cookies active" onClick={handleAccept} title={t('cookies.btn-accept')}>
            {t('cookies.btn-accept')}
          </button>
          <button className="btn-cookies" onClick={handleDecline} title={t('cookies.btn-no-accept')}>
            {t('cookies.btn-no-accept')}
          </button>
        </div>
      </div>
    </div>
  );
  return (
    <>
      {showModal && ReactDOM.createPortal(modalContent, document.getElementById('modal'))}
      {children}
    </>
  );
}

export const isCookieAccepted = () => {
  return document.cookie.includes('settings=cookie');
};
