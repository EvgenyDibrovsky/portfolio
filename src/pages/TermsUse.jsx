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
        <h2>{t('term-of-use-page.text-1')}</h2>
        <p>{t('term-of-use-page.text-2')}</p>
        <ul>
          <p>{t('term-of-use-page.text-3')}</p>
          <li>{t('term-of-use-page.text-4')}</li>
          <li>{t('term-of-use-page.text-5')}</li>
          <li>{t('term-of-use-page.text-6')}</li>
          <li>{t('term-of-use-page.text-7')}</li>
        </ul>
        <p>{t('term-of-use-page.text-8')}</p>
      </div>
    </>
  );
}
