import PageTitle from 'components/Utility/PageTitle';
import SubTitle from 'components/Utility/SubTitle';
import { useTranslation } from 'react-i18next';
import { BsPersonVcard } from 'react-icons/bs';
import CertificatesList from 'components/Certificates/CertificatesList';
import TechSkillsIndicators from 'components/TechSkillsProgressBar/TechSkillsIndicators';
import ProgressLangSkills from 'components/LangSkillsProgressBar/LangSkillsProgressBar';
import MetaTags from 'components/MetaTags/MetaTags';

export default function ResumePage() {
  const { t } = useTranslation();

  return (
    <>
      <MetaTags metaTitle={t('resume-page.meta-title')} metaDescription={t('resume-page.meta-description')} />
      <PageTitle icon={<BsPersonVcard />} title={t('resume-page.title')} />
      <div className="mb-5">
        <SubTitle subTitle={t('resume-page.sub-title-1')} />
        <CertificatesList />
      </div>
      <div className="mb-5">
        <SubTitle subTitle={t('resume-page.sub-title-2')} />
        <TechSkillsIndicators />
      </div>
      <div className="mb-5">
        <SubTitle subTitle={t('resume-page.sub-title-3')} />
        <ProgressLangSkills />
      </div>
      <div className="mb-5">
        <SubTitle subTitle={t('resume-page.sub-title-4')} />
      </div>
      <div className="mb-5">
        <SubTitle subTitle={t('resume-page.sub-title-5')} />
      </div>
      <div className="mb-5">
        <SubTitle subTitle={t('resume-page.sub-title-6')} />
      </div>
    </>
  );
}
