import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './Header/Header';
import Section from './Base/Section';
import Container from './Base/Container';
import Loading from './Base/LoaderSite';
import LoadingPage from './Base/LoaderPage';

import { HelmetProvider } from 'react-helmet-async';
import { isCookieAccepted } from './Cookies/Cookies'; // Замените на правильный путь к вашему Cookies компоненту
import ScrollToTop from './ScrollToTop/ScrollToTop';

const Home = React.lazy(() => import('../pages/Home'));
const Cooperation = React.lazy(() => import('../pages/Сooperation'));
const Resume = React.lazy(() => import('../pages/Resume'));
const Portfolio = React.lazy(() => import('../pages/Portfolio'));
const Brief = React.lazy(() => import('../pages/Brief'));
const Contacts = React.lazy(() => import('../pages/Contacts'));
const TermsUse = React.lazy(() => import('../pages/Regulations'));
const NotFound = React.lazy(() => import('../pages/NotFound'));

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
            <React.Suspense fallback={<LoadingPage />}>
              <Routes>
                <Route
                  path="/"
                  element={
                    <Section customPadding="md:pl-[12.5rem] pb-10">
                      <Home />
                    </Section>
                  }
                />
                <Route
                  path="/cooperation"
                  element={
                    <Section>
                      <Container>
                        <Cooperation />
                      </Container>
                    </Section>
                  }
                />
                <Route
                  path="/resume"
                  element={
                    <Section>
                      <Container>
                        <Resume />
                      </Container>
                    </Section>
                  }
                />
                <Route
                  path="/portfolio"
                  element={
                    <Section>
                      <Container>
                        <Portfolio />
                      </Container>
                    </Section>
                  }
                />
                <Route
                  path="/brief"
                  element={
                    <Section>
                      <Container>
                        <Brief />
                      </Container>
                    </Section>
                  }
                />
                <Route
                  path="/contact"
                  element={
                    <Section>
                      <Container>
                        <Contacts />
                      </Container>
                    </Section>
                  }
                />
                <Route
                  path="/regulations-edweb"
                  element={
                    <Section>
                      <Container>
                        <TermsUse />
                      </Container>
                    </Section>
                  }
                />
                <Route
                  path="*"
                  element={
                    <div className="w-full h-screen flex justify-center items-center md:pl-[12.5rem] pt-24 pb-10 md:py-6">
                      <Container>
                        <NotFound />
                      </Container>
                    </div>
                  }
                />
              </Routes>
            </React.Suspense>
          </div>
        </Router>
      </HelmetProvider>
    </div>
  );
};
