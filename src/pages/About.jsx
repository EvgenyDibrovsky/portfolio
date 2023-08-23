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
      <PageTitle icon={<BsPerson />} title={t('about-page.title')} />
      <SubTitle subTitle={t('about-page.sub-title')} />
      <WorkingСonditions />
    </>
  );
}
