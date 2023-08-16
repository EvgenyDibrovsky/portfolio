import PageTitle from 'components/Utility/PageTitle';
import SubTitle from 'components/Utility/SubTitle';
import { useTranslation } from 'react-i18next';
import { BsPersonVcard } from 'react-icons/bs';
import Certificates from 'components/Certificates/Certificates';

export default function ResumePage() {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle icon={<BsPersonVcard />} title={t('resume-page.title')} />
      <SubTitle subTitle={t('resume-page.sub-title')} />
      <Certificates />
    </>
  );
}
