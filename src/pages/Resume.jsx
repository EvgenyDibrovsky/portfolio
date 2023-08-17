import PageTitle from 'components/Utility/PageTitle';
import SubTitle from 'components/Utility/SubTitle';
import { useTranslation } from 'react-i18next';
import { BsPersonVcard } from 'react-icons/bs';
import CertificatesList from 'components/Certificates/CertificatesList';

export default function ResumePage() {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle icon={<BsPersonVcard />} title={t('resume-page.title')} />
      <SubTitle subTitle={t('resume-page.sub-title-1')} />
      <CertificatesList />
      <SubTitle subTitle={t('resume-page.sub-title-2')} />
      <SubTitle subTitle={t('resume-page.sub-title-3')} />
      <SubTitle subTitle={t('resume-page.sub-title-4')} />
    </>
  );
}
