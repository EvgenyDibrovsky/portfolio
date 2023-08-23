import PageTitle from 'components/Utility/PageTitle';
import { useTranslation } from 'react-i18next';
import { BsEmojiFrown } from 'react-icons/bs';
import MetaTags from 'components/MetaTags/MetaTags';
export default function ErrorPage() {
  const { t } = useTranslation();
  return (
    <>
      <MetaTags metaTitle={t('not-found-page.meta-title')} metaDescription={t('not-found-page.meta-description')} />
      <PageTitle title={t('not-found-page.title')} />
      <div className="pt-5">
        <p className="text-[8rem] text-center text-black font-semibold dark:text-white">{t('not-found-page.404')}</p>
        <BsEmojiFrown className="mx-auto my-5 text-[20rem] text-orange-400 dark:text-orange-400" />
      </div>
    </>
  );
}
