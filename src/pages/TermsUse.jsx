import PageTitle from 'components/Utility/PageTitle';
import { useTranslation } from 'react-i18next';
import MetaTags from 'components/MetaTags/MetaTags';
import WrapperTitle from 'components/Utility/WrapperTitle';

export default function TermsUsePage() {
  const { t } = useTranslation();
  return (
    <>
      <MetaTags metaTitle={t('regulations-edweb.meta-title')} metaDescription={t('regulations-edweb.meta-description')} />
      <WrapperTitle>
        <PageTitle title={t('regulations-edweb.title')} />
      </WrapperTitle>
      <div className="w-full lg:w-10/12 mx-auto">
        <h2 className="text-black dark:text-white text-[1.25] mb-5 italic font-semibold">{t('regulations-edweb.text-1')}</h2>
        <p className="text-black dark:text-white">{t('regulations-edweb.text-2')}</p>
        <ul className="text-black dark:text-white list-disc px-5 py-5">
          <p className="text-black dark:text-white">{t('regulations-edweb.text-3')}</p>
          <li className="text-black dark:text-white">{t('regulations-edweb.text-4')}</li>
          <li className="text-black dark:text-white">{t('regulations-edweb.text-5')}</li>
          <li className="text-black dark:text-white">{t('regulations-edweb.text-6')}</li>
          <li className="text-black dark:text-white">{t('regulations-edweb.text-7')}</li>
        </ul>
        <p className="text-black dark:text-white">{t('regulations-edweb.text-8')}</p>
      </div>
    </>
  );
}
