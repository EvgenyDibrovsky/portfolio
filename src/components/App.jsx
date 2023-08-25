import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './Header/Header';
// import Footer from './Footer';
import Section from './Base/Section';
import Container from './Base/Container';
import Loading from './Base/LoaderSite';

import Home from '../pages/Home';
import About from '../pages/About';
import Resume from '../pages/Resume';
import Portfolio from '../pages/Portfolio';
import Brief from '../pages/Brief';

import Contacts from '../pages/Contacts';
import TermsUse from '../pages/TermsUse';
import NotFound from '../pages/NotFound';
import { HelmetProvider } from 'react-helmet-async';

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
    <HelmetProvider>
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <Header theme={theme} toggleTheme={toggleTheme} />

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
              path="/about"
              element={
                <Section>
                  <Container>
                    <About />
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
              path="/privacy-policy-page"
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
                <div className="w-full h-screen flex justify-center items-center md:pl-[12.5rem] pt-24 pb-10 md:py-6 bg-bgSection dark:bg-bgSectionDark">
                  <Container>
                    <NotFound />
                  </Container>
                </div>
              }
            />
          </Routes>
        </div>
      </Router>{' '}
    </HelmetProvider>
  );
};
