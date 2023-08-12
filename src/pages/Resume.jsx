import PageTitle from 'components/Utility/PageTitle';
import SubTitle from 'components/Utility/SubTitle';
import { useTranslation } from 'react-i18next';
import { BsPersonVcard } from 'react-icons/bs';

export default function ResumePage() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto h-[calc(100vh-20rem)]">
      <PageTitle icon={<BsPersonVcard className="w-6 h-6" />} title={t('resume-page.title')} />
      <SubTitle subTitle={t('resume-page.sub-title')} />
    </div>
  );
}
