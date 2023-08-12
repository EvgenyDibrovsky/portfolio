import PageTitle from 'components/Utility/PageTitle';
import SubTitle from 'components/Utility/SubTitle';
import { useTranslation } from 'react-i18next';
import { BsPerson } from 'react-icons/bs';

export default function AboutPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageTitle icon={<BsPerson />} title={t('about-page.title')} />
      <SubTitle subTitle={t('about-page.sub-title')} />
    </>
  );
}
