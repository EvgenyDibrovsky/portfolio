import { useTranslation } from 'react-i18next';
import Possibilities from 'components/Possibilities/Possibilities';
import SubTitle from 'components/Utility/SubTitle';
import bgHome from '../image/bg-section-home.jpg';
import MetaTags from 'components/MetaTags/MetaTags';

import Container from 'components/Base/Container';
export default function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <MetaTags metaTitle={t('home-page.meta-title')} metaDescription={t('home-page.meta-description')} />
      <div className="w-full mb-10">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-6/12 ">
            <img src={bgHome} alt="Edweb" className="w-full h-full object-cover" />
          </div>
          <div className="w-full lg:w-6/12 lg:pt-10 lg:px-20">
            <div className="relative flex items-center gap-4 mb-12 after:content-[''] after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:w-full after:h-[2px] after:bg-orange-400 dark:after:bg-orange-400">
              <h1 className="text-[1.5rem] font-semibold text-black dark:text-white">{t('about-me.title')}</h1>
            </div>
            <p className="text-[1.25rem] mb-4 ">{t('about-me.description-1')}</p>
            <p className="text-[1.25rem] mb-4 ">{t('about-me.description-2')}</p>
            <p className="text-[1.25rem] mb-4 ">{t('about-me.description-3')}</p>
            <p className="text-[1.25rem] mb-4 italic">{t('about-me.description-4')}</p>
            <div className="flex flex-col items-end">
              <p className="text-[1.5rem] font-semibold italic">{t('about-me.name')}</p>
              <p className="text-[1.25rem] italic">{t('about-me.web-development')}</p>
            </div>
          </div>
        </div>
      </div>
      <Container>
        <div className="inline-block relative mb-2">
          <SubTitle subTitle={t('possibilities.my-capabilities')} />
          <div className="relative after:block after:content-[''] after:absolute after:bottom-4 after:left-0 after:w-full after:h-[2px] after:bg-orange-400 dark:after:bg-orange-400"></div>
        </div>
        <Possibilities />
      </Container>
    </>
  );
}
