import PageTitle from 'components/Utility/PageTitle';
import { useTranslation } from 'react-i18next';
import MetaTags from 'components/MetaTags/MetaTags';
import WrapperTitle from 'components/Utility/WrapperTitle';
import { Trans } from 'react-i18next';

export default function TermsUsePage() {
  const { t } = useTranslation();
  return (
    <>
      <MetaTags metaTitle={t('regulations-edweb.meta-title')} metaDescription={t('regulations-edweb.meta-description')} />
      <WrapperTitle>
        <PageTitle title={t('regulations-edweb.title')} />
      </WrapperTitle>
      <div className="w-full xl:w-10/12 mx-auto">
        <div className="mb-10">
          <h3 className="font-bold text-[1.2rem] text-black dark:text-white my-5">{t('regulations-edweb.terms-of-use.title_1')}</h3>
          <div className="content-box">
            <Trans i18nKey="regulations-edweb.terms-of-use.descriptionHtml_1" components={{ br: <br />, ul: <ul />, li: <li /> }} />
          </div>

          <h3 className="font-bold text-[1.2rem] text-black dark:text-white my-5">{t('regulations-edweb.terms-of-use.title_2')}</h3>
          <div className="content-box">
            <Trans i18nKey="regulations-edweb.terms-of-use.descriptionHtml_2" components={{ br: <br />, ul: <ul />, li: <li /> }} />
          </div>

          <h3 className="font-bold text-[1.2rem] text-black dark:text-white my-5">{t('regulations-edweb.terms-of-use.title_3')}</h3>
          <div className="content-box">
            <Trans i18nKey="regulations-edweb.terms-of-use.descriptionHtml_3" components={{ br: <br />, ul: <ul />, li: <li /> }} />
          </div>

          <h3 className="font-bold text-[1.2rem] text-black dark:text-white my-5">{t('regulations-edweb.terms-of-use.title_4')}</h3>
          <div className="content-box">
            <Trans i18nKey="regulations-edweb.terms-of-use.descriptionHtml_4" components={{ br: <br />, ul: <ul />, li: <li /> }} />
          </div>

          <h3 className="font-bold text-[1.2rem] text-black dark:text-white my-5">{t('regulations-edweb.terms-of-use.title_5')}</h3>
          <div className="content-box">
            <Trans i18nKey="regulations-edweb.terms-of-use.descriptionHtml_5" components={{ br: <br />, ul: <ul />, li: <li /> }} />
          </div>

          <h3 className="font-bold text-[1.2rem] text-black dark:text-white my-5">{t('regulations-edweb.terms-of-use.title_6')}</h3>
          <div className="content-box">
            <Trans i18nKey="regulations-edweb.terms-of-use.descriptionHtml_6" components={{ br: <br />, ul: <ul />, li: <li /> }} />
          </div>

          <h3 className="font-bold text-[1.2rem] text-black dark:text-white my-5">{t('regulations-edweb.terms-of-use.title_7')}</h3>
          <div className="content-box">
            <Trans i18nKey="regulations-edweb.terms-of-use.descriptionHtml_7" components={{ br: <br />, ul: <ul />, li: <li /> }} />
          </div>
        </div>
      </div>
    </>
  );
}
