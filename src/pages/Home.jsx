import { useTranslation } from 'react-i18next';
import Possibilities from 'components/Possibilities/Possibilities';
import SubTitle from 'components/Utility/SubTitle';
import MetaTags from 'components/MetaTags/MetaTags';
import HeroSection from 'components/HeroSection/HeroSection';

import Container from 'components/Base/Container';
export default function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <MetaTags metaTitle={t('home-page.meta-title')} metaDescription={t('home-page.meta-description')} />
      <HeroSection />
      <Container>
        <div className="inline-block relative mb-6">
          <SubTitle subTitle={t('possibilities.my-capabilities')} />
          <div className="relative after:block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-sky-600 dark:after:bg-sky-600"></div>
        </div>
        <Possibilities />
      </Container>
    </>
  );
}
