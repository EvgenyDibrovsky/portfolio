import PageTitle from 'components/Utility/PageTitle';
import SubTitle from 'components/Utility/SubTitle';
import { useTranslation } from 'react-i18next';
import { BsPerson } from 'react-icons/bs';

export default function AboutPage() {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto h-[calc(100vh-20rem)]">
      <PageTitle icon={<BsPerson className="w-6 h-6" />} title={t('about-page.title')} />
      <SubTitle subTitle={t('about-page.sub-title')} />
    </div>
  );
}
