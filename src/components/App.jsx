import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header/Header';
import Loading from './Base/LoaderSite';
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './ScrollToTop/ScrollToTop';
import AppRoutes from '../components/AppRoutes/AppRoutes';
import Telegram from './Messenger/Telegram';

export const App = () => {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('theme') || 'light';
    } catch (error) {
      console.error('Не удалось получить тему из localStorage:', error);
      return 'light';
    }
  });

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    try {
      localStorage.setItem('theme', newTheme);
      setTheme(newTheme);
    } catch (error) {
      console.error('Не удалось обновить тему в localStorage:', error);
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
    <div className={`${loading ? '' : 'lg:bg-white lg:dark:bg-neutral-800'} min-h-screen font-Poppins bg-bgSection dark:bg-bgSectionDark bg-cover bg-center bg-no-repeat`}>
      <HelmetProvider>
        <Router basename={process.env.PUBLIC_URL}>
          <ScrollToTop />
          <Telegram />
          <div>
            <Header theme={theme} toggleTheme={toggleTheme} />
            <AppRoutes />
          </div>
        </Router>
      </HelmetProvider>
    </div>
  );
};
