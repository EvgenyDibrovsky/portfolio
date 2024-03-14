import PageTitle from 'components/Utility/PageTitle';
import SubTitle from 'components/Utility/SubTitle';
import { useTranslation } from 'react-i18next';
import { BsGraphUpArrow } from 'react-icons/bs';
import WorkingСonditions from 'components/WorkingСonditions/WorkingСonditions';
import MetaTags from 'components/MetaTags/MetaTags';
import WrapperTitle from 'components/Utility/WrapperTitle';
import BgAnimation from 'components/BgAnimation/BgAnimation';

export default function CooperationPage() {
  const { t } = useTranslation();
  return (
    <>
      <MetaTags metaTitle={t('cooperation-page.meta-title')} metaDescription={t('cooperation-page.meta-description')} />
      <WrapperTitle>
        <PageTitle icon={<BsGraphUpArrow />} title={t('cooperation-page.title')} />
        <SubTitle subTitle={t('cooperation-page.sub-title')} />
      </WrapperTitle>
      <WorkingСonditions />

      <div className="relative z-10 w-full lg:w-10/12 mx-auto mt-5 mb-10 md:p-8 bg-white/80 dark:bg-neutral-800/80">
        <p className="text-black dark:text-white mb-5" dangerouslySetInnerHTML={{ __html: t('cooperation-page.text-1') }}></p>
        <div className="mb-5">
          <h3 className="text-black dark:text-white text-[1.25rem] font-semibold">{t('cooperation-page.title-2')}</h3>
          <p className="text-black dark:text-white" dangerouslySetInnerHTML={{ __html: t('cooperation-page.text-2') }}></p>
        </div>

        <div className="mb-5">
          <h3 className="text-black dark:text-white text-[1.25rem] font-semibold" dangerouslySetInnerHTML={{ __html: t('cooperation-page.title-3') }}></h3>
          <p className="text-black dark:text-white" dangerouslySetInnerHTML={{ __html: t('cooperation-page.text-3') }}></p>
        </div>
        <div className="mb-5">
          <h3 className="text-black dark:text-white  text-[1.25rem] font-semibold" dangerouslySetInnerHTML={{ __html: t('cooperation-page.title-4') }}></h3>
          <p className="text-black dark:text-white" dangerouslySetInnerHTML={{ __html: t('cooperation-page.text-4') }}></p>
        </div>
        <h4 className="text-black dark:text-white mb-2" dangerouslySetInnerHTML={{ __html: t('cooperation-page.list-title-4') }}></h4>

        <ul className="text-black dark:text-white list-disc px-5 mb-5" dangerouslySetInnerHTML={{ __html: t('cooperation-page.text-list') }}></ul>
        <p className="text-black dark:text-white" dangerouslySetInnerHTML={{ __html: t('cooperation-page.text-3') }}></p>
      </div>
      <BgAnimation />
    </>
  );
}
