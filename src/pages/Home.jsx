import { useTranslation } from 'react-i18next';
import Possibilities from 'components/Possibilities/Possibilities';
import SubTitle from 'components/Utility/SubTitle';
import MetaTags from 'components/MetaTags/MetaTags';

import Container from 'components/Base/Container';
export default function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <MetaTags metaTitle={t('home-page.meta-title')} metaDescription={t('home-page.meta-description')} />
      <div className="flex flex-col lg:flex-row lg:gap-8 mb-8 bg-bgHeroSection dark:bg-bgHeroSectionDark">
        <div className="lg:w-6/12 w-full h-auto bg-hero-pattern bg-cover py-20 flex justify-center items-center ">
          <ul className="text-white text-[2rem] flex flex-col gap-2">
            <li>Web development</li>
            <li>E-marketing</li>
            <li>Site availability</li>
            <li>Web Design</li>
            <li>SEO</li>
            <li>Technical support</li>
          </ul>
        </div>

        <div className="w-full lg:w-6/12 py-8 px-4 lg:px-16 gap-8 flex flex-col justify-center items-center">
          <div>
            <div className="relative flex items-center mb-8 after:content-[''] after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:w-full after:h-[2px] after:bg-orange-400 dark:after:bg-orange-400">
              <h1 className="text-[1.5rem] font-semibold text-black dark:text-white">{t('about-me.title')}</h1>
            </div>
            <div className="">
              <p className="text-[1.25rem] text-black dark:text-white mb-4 ">{t('about-me.description-1')}</p>
              <p className="text-[1.25rem] text-black dark:text-white mb-4 ">{t('about-me.description-2')}</p>
              <p className="text-[1.25rem] text-black dark:text-whitemb-4 ">{t('about-me.description-3')}</p>
              <p className="text-[1.25rem] text-black dark:text-white mb-4 italic">{t('about-me.description-4')}</p>
            </div>
            <div className="flex flex-col items-end ">
              <p className="text-[1.5rem]  text-black dark:text-white font-semibold italic">{t('about-me.name')}</p>
              <p className="text-[1.25rem]  text-black dark:text-white italic">{t('about-me.web-development')}</p>
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
