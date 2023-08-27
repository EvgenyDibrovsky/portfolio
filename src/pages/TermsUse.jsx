import PageTitle from 'components/Utility/PageTitle';
import { useTranslation } from 'react-i18next';
import MetaTags from 'components/MetaTags/MetaTags';
import WrapperTitle from 'components/Utility/WrapperTitle';

export default function TermsUsePage() {
  const { t } = useTranslation();
  return (
    <>
      <MetaTags metaTitle={t('term-of-use-page.meta-title')} metaDescription={t('term-of-use-page.meta-description')} />
      <WrapperTitle>
        <PageTitle title={t('term-of-use-page.title')} />
      </WrapperTitle>
      <div>
        <h2 className="text-black dark:text-white text-[1.25] mb-5">{t('term-of-use-page.text-1')}</h2>
        <p className="text-black dark:text-white">{t('term-of-use-page.text-2')}</p>
        <ul className="text-black dark:text-white list-disc px-5 py-5">
          <p className="text-black dark:text-white">{t('term-of-use-page.text-3')}</p>
          <li className="text-black dark:text-white">{t('term-of-use-page.text-4')}</li>
          <li className="text-black dark:text-white">{t('term-of-use-page.text-5')}</li>
          <li className="text-black dark:text-white">{t('term-of-use-page.text-6')}</li>
          <li className="text-black dark:text-white">{t('term-of-use-page.text-7')}</li>
        </ul>
        <p className="text-black dark:text-white">{t('term-of-use-page.text-8')}</p>
      </div>
    </>
  );
}
