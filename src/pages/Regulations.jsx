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
          <div className="content-box">
            <Trans i18nKey="regulations-edweb.terms-of-use.descriptionHtml" components={{ h3: <h3 />, br: <br />, ul: <ul />, li: <li /> }} />
          </div>
        </div>
      </div>
    </>
  );
}
