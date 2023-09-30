import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header/Header';
import Loading from './Base/LoaderSite';
import { HelmetProvider } from 'react-helmet-async';
import { isCookieAccepted } from './Cookies/Cookies'; // Замените на правильный путь к вашему Cookies компоненту
import ScrollToTop from './ScrollToTop/ScrollToTop';
import AppRoutes from '../components/AppRoutes/AppRoutes';

export const App = () => {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('theme') || 'light';
    } catch (error) {
      console.error('Не удалось получить тему из localStorage:', error);
      return 'light'; // Значение по умолчанию
    }
  });

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';

    if (isCookieAccepted()) {
      try {
        localStorage.setItem('theme', newTheme);
        setTheme(newTheme);
      } catch (error) {
        console.error('Не удалось обновить тему в localStorage:', error);
      }
    } else {
      setTheme(newTheme);
    }
  };

  useEffect(() => {
    // имитация асинхронной загрузки данных
    setTimeout(() => setLoading(false), 1000);
  }, []);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className={`${loading ? '' : 'lg:bg-body-white lg:dark:bg-body-dark'} min-h-screen font-Poppins bg-bgSection dark:bg-bgSectionDark bg-cover bg-center bg-no-repeat`}>
      <HelmetProvider>
        {/* <Router basename={process.env.PUBLIC_URL}> */}
        <Router>
          <ScrollToTop />
          <div>
            <Header theme={theme} toggleTheme={toggleTheme} />
            <AppRoutes />
          </div>
        </Router>
      </HelmetProvider>
    </div>
  );
};
