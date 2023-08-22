import { useTranslation } from 'react-i18next';
import Possibilities from 'components/Possibilities/Possibilities';
import SubTitle from 'components/Utility/SubTitle';
import bgHome from '../image/bg-section-home.jpg';
import PageTitle from 'components/Utility/PageTitle';
import Container from 'components/Base/Container';
export default function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <div className="w-full mb-10">
        <div className="flex flex-col lg:flex-row gap-8 ">
          <div className="w-full lg:w-6/12 ">
            <img src={bgHome} alt="Edweb" className="w-full h-full object-cover" />
          </div>
          <div className="w-full lg:w-6/12 lg:p-20">
            <PageTitle title="Web development" />
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
