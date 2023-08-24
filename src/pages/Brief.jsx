import PageTitle from 'components/Utility/PageTitle';
import SubTitle from 'components/Utility/SubTitle';
import { useTranslation } from 'react-i18next';
import { BsListCheck } from 'react-icons/bs';
import BriefForm from 'components/BriefForm/BriefForm';
import MetaTags from 'components/MetaTags/MetaTags';

export default function BriefPage() {
  const { t } = useTranslation();

  return (
    <>
      <MetaTags metaTitle={t('brief-page.meta-title')} metaDescription={t('brief-page.meta-description')} />
      <div className="relative flex flex-col lg:flex-row items-center justify-between  gap-4 mb-8 after:content-[''] after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:w-full after:h-[2px] after:bg-gray-200 dark:after:bg-orange-400 ">
        <PageTitle icon={<BsListCheck />} title={t('brief-page.title')} />
        <SubTitle subTitle={t('brief-page.sub-title')} />
      </div>
      <BriefForm />
    </>
  );
}
