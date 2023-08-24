import PageTitle from 'components/Utility/PageTitle';
import SubTitle from 'components/Utility/SubTitle';
import { useTranslation } from 'react-i18next';
import { BsPerson } from 'react-icons/bs';
import WorkingСonditions from 'components/WorkingСonditions/WorkingСonditions';
import MetaTags from 'components/MetaTags/MetaTags';

export default function AboutPage() {
  const { t } = useTranslation();
  return (
    <>
      <MetaTags metaTitle={t('about-page.meta-title')} metaDescription={t('about-page.meta-description')} />
      <div className="relative flex flex-col lg:flex-row items-center justify-between  gap-4 mb-8 after:content-[''] after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:w-full after:h-[2px] after:bg-gray-200 dark:after:bg-orange-400 ">
        <PageTitle icon={<BsPerson />} title={t('about-page.title')} />
        <SubTitle subTitle={t('about-page.sub-title')} />
      </div>
      <WorkingСonditions />
    </>
  );
}
