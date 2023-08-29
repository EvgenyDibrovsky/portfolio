import PageTitle from 'components/Utility/PageTitle';
import SubTitle from 'components/Utility/SubTitle';
import { useTranslation } from 'react-i18next';
import { BsPersonVcard } from 'react-icons/bs';
import CertificatesList from 'components/Certificates/CertificatesList';
import TechSkillsIndicators from 'components/TechSkills/TechSkillsIndicators';
import ProgressLangSkills from 'components/LangSkillsProgressBar/LangSkillsProgressBar';
import MetaTags from 'components/MetaTags/MetaTags';
import WrapperTitle from 'components/Utility/WrapperTitle';
import SoftSkills from 'components/SoftSkills/SoftSkills';
import EducationList from 'components/Education/EducationList';
import ExperienceList from 'components/Experience/ExperienceList';

export default function ResumePage() {
  const { t } = useTranslation();

  return (
    <>
      <MetaTags metaTitle={t('resume-page.meta-title')} metaDescription={t('resume-page.meta-description')} />

      <WrapperTitle>
        <PageTitle icon={<BsPersonVcard />} title={t('resume-page.title')} />
        <SubTitle subTitle={t('resume-page.sub-title')} />
      </WrapperTitle>

      <div className="my-5">
        <h3 className="text-black dark:text-white text-[1.25rem] font-semibold my-5">{t('resume-page.sub-title-1')}</h3>
        <CertificatesList />
      </div>
      <div className="my-5">
        <h3 className="text-black dark:text-white text-[1.25rem] font-semibold my-5">{t('resume-page.sub-title-2')}</h3>
        <TechSkillsIndicators />
      </div>
      <div className="my-5">
        <h3 className="text-black dark:text-white text-[1.25rem] font-semibold my-5">{t('resume-page.sub-title-3')}</h3>
        <ProgressLangSkills />
      </div>
      <div className="my-5">
        <h3 className="text-black dark:text-white text-[1.25rem] font-semibold my-5">{t('resume-page.sub-title-4')}</h3>
        <SoftSkills />
      </div>
      <div className="my-5">
        <h3 className="text-black dark:text-white text-[1.25rem] font-semibold my-5">{t('resume-page.sub-title-5')}</h3>
        <EducationList />
      </div>
      <div className="my-5">
        <h3 className="text-black dark:text-white text-[1.25rem] font-semibold my-5">{t('resume-page.sub-title-6')}</h3>
        <ExperienceList />
      </div>
    </>
  );
}
