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
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/brief" element={<Brief />} />
              <Route path="/contact" element={<Contacts />} />
              <Route path="/privacy-policy-page" element={<TermsUse />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Container>
        </Section>
        {/* <Footer /> */}
      </div>
    </Router>
  );
};
