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
// import EducationList from 'components/Education/EducationList';
// import ExperienceList from 'components/Experience/ExperienceList';
import { BsFillFilePdfFill } from 'react-icons/bs';
export default function ResumePage() {
  const { t } = useTranslation();

  return (
    <>
      <MetaTags metaTitle={t('resume-page.meta-title')} metaDescription={t('resume-page.meta-description')} />
      <WrapperTitle>
        <PageTitle icon={<BsPersonVcard />} title={t('resume-page.title')} />
        <SubTitle subTitle={t('resume-page.sub-title')} />
      </WrapperTitle>
      <div className="flex items-center gap-4 justify-end mt-5 group">
        <a
          href="/images/resume/yevhen-dibrovsky-resume.pdf"
          className="text-sky-600 hover:underline  dark:text-sky-400 text-[1.2rem] flex items-center gap-4"
          aria-label={t('btn.download-resume')}
          download
        >
          {t('btn.download-resume')}
          <BsFillFilePdfFill className="text-red-600 dark:text-red-500 w-8 h-8 duration-200 group-hover:scale-110" />
        </a>
      </div>
      <div className="my-5">
        <div className="inline-block relative my-5">
          <h3 className="text-black dark:text-white text-[1.25rem] font-semibold">{t('resume-page.sub-title-1')}</h3>
          <div className="relative after:block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-sky-600 dark:after:bg-sky-600"></div>
        </div>
        <CertificatesList />
      </div>
      <div className="my-5">
        <div className="inline-block relative my-5">
          <h3 className="text-black dark:text-white text-[1.25rem] font-semibold">{t('resume-page.sub-title-2')}</h3>
          <div className="relative after:block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-sky-600 dark:after:bg-sky-600"></div>
        </div>
        <TechSkillsIndicators />
      </div>
      <div className="my-5">
        <div className="inline-block relative my-5">
          <h3 className="text-black dark:text-white text-[1.25rem] font-semibold">{t('resume-page.sub-title-3')}</h3>
          <div className="relative after:block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-sky-600 dark:after:bg-sky-600"></div>
        </div>
        <ProgressLangSkills />
      </div>
      <div className="my-5">
        <div className="inline-block relative my-5">
          <h3 className="text-black dark:text-white text-[1.25rem] font-semibold">{t('resume-page.sub-title-4')}</h3>
          <div className="relative after:block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-sky-600 dark:after:bg-sky-600"></div>
        </div>
        <SoftSkills />
      </div>
      {/* <div className="my-5">
        <div className="inline-block relative my-5">
          <h3 className="text-black dark:text-white text-[1.25rem] font-semibold">{t('resume-page.sub-title-5')}</h3>
          <div className="relative after:block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-sky-600 dark:after:bg-sky-600"></div>
        </div>
        <EducationList />
      </div> */}
      {/* <div className="my-5">
        <div className="inline-block relative my-5">
          <h3 className="text-black dark:text-white text-[1.25rem] font-semibold">{t('resume-page.sub-title-6')}</h3>
          <div className="relative after:block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-sky-600 dark:after:bg-sky-600"></div>
        </div>
        <ExperienceList />
      </div> */}
    </>
  );
}
