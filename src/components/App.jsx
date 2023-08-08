import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './Header/Header';
// import Footer from './Footer';
import Section from './Base/Section';
import Container from './Base/Container';
import Loading from './Base/Loader';

import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ResumePage from '../pages/ResumePage';
import PortfolioPage from '../pages/PortfolioPage';
import BriefPage from '../pages/BriefPage';

import ContactPage from '../pages/ContactPage';
import TermsUsePage from '../pages/TermsUsePage';
import NotFoundPage from '../pages/NotFoundPage';

export const App = () => {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    // имитация асинхронной загрузки данных
    setTimeout(() => setLoading(false), 2000);
  }, []);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Router basename={process.env.PUBLIC_URL}>
      {/* <Router> */}
      <div>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <Section>
          <Container>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/resume" element={<ResumePage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/brief" element={<BriefPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/terms-use-page" element={<TermsUsePage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Container>
        </Section>
        {/* <Footer /> */}
      </div>
    </Router>
  );
};
