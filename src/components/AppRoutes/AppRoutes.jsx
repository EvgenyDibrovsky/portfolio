// AppRoutes.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Section from '../Base/Section';
import Container from '../Base/Container';
import LoadingPage from '../Base/LoaderPage';

const Home = React.lazy(() => import('../../pages/Home'));
const Cooperation = React.lazy(() => import('../../pages/Сooperation'));
const Resume = React.lazy(() => import('../../pages/Resume'));
const Portfolio = React.lazy(() => import('../../pages/Portfolio'));
const Brief = React.lazy(() => import('../../pages/Brief'));
const Contacts = React.lazy(() => import('../../pages/Contacts'));
const TermsUse = React.lazy(() => import('../../pages/Regulations'));
const NotFound = React.lazy(() => import('../../pages/NotFound'));

const AppRoutes = () => {
  return (
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
  );
};

export default AppRoutes;
