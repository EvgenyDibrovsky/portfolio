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

      <div className="relative flex flex-col lg:flex-row items-center justify-between  gap-4 mb-8 after:content-[''] after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:w-full after:h-[2px] after:bg-gray-200 dark:after:bg-orange-400 ">
        <PageTitle icon={<BsPersonVcard />} title={t('resume-page.title')} />
        <SubTitle subTitle={t('resume-page.sub-title')} />
      </div>

      <div className="my-5">
        <h3 className="text-black dark:text-white my-5">{t('resume-page.sub-title-1')}</h3>
        <CertificatesList />
      </div>
      <div className="my-5">
        <h3 className="text-black dark:text-white my-5">{t('resume-page.sub-title-2')}</h3>
        <TechSkillsIndicators />
      </div>
      <div className="my-5">
        <h3 className="text-black dark:text-white my-5">{t('resume-page.sub-title-3')}</h3>
        <ProgressLangSkills />
      </div>
      <div className="my-5">
        <h3 className="text-black dark:text-white my-5">{t('resume-page.sub-title-4')}</h3>
      </div>
      <div className="my-5">
        <h3 className="text-black dark:text-white my-5">{t('resume-page.sub-title-5')}</h3>
      </div>
      <div className="my-5">
        <h3 className="text-black dark:text-white my-5">{t('resume-page.sub-title-6')}</h3>
      </div>
    </>
  );
}
