import { useTranslation } from 'react-i18next';
import { BsEmojiFrown } from 'react-icons/bs';
import MetaTags from 'components/MetaTags/MetaTags';
import { Link } from 'react-router-dom';

export default function ErrorPage() {
  const { t } = useTranslation();
  return (
    <>
      <MetaTags metaTitle={t('not-found-page.meta-title')} metaDescription={t('not-found-page.meta-description')} />
      <div className="mb-16">
        <p className="text-[8rem] text-center text-gray-500 font-semibold dark:text-white">{t('not-found-page.404')}</p>
        <BsEmojiFrown className="mx-auto text-[10rem] text-orange-400 dark:text-orange-400" />
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-4 mt-10">
        <Link to="./" className="btn">
          {t('btn.back-to-home')}
        </Link>
        <Link to="/contact" className="btn">
          {t('btn.write-message')}
        </Link>
      </div>
    </>
  );
}
