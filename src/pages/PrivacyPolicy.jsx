import PageTitle from 'components/Utility/PageTitle';
import { BsInfoCircle } from 'react-icons/bs';

import { useTranslation } from 'react-i18next';
import MetaTags from 'components/MetaTags/MetaTags';
import WrapperTitle from 'components/Utility/WrapperTitle';
import BgAnimation from 'components/BgAnimation/BgAnimation';

export default function TermsUsePage() {
  const { t } = useTranslation();
  return (
    <>
      <MetaTags metaTitle={t('privacy-policy.meta-title')} metaDescription={t('privacy-policy.meta-description')} />
      <WrapperTitle>
        <PageTitle icon={<BsInfoCircle />} title={t('privacy-policy.title')} />
      </WrapperTitle>
      <div className="w-full xl:w-10/12 mx-auto">
        <div className="mb-10 content-box">
          <h3>{t('privacy-policy.content.title_1')}</h3>
          <div dangerouslySetInnerHTML={{ __html: t('privacy-policy.content.description_1') }}></div>

          <h3>{t('privacy-policy.content.title_2')}</h3>
          <ul dangerouslySetInnerHTML={{ __html: t('privacy-policy.content.description_2') }}></ul>

          <h3>{t('privacy-policy.content.title_3')}</h3>
          <h4 className="font-bold text-[1rem] text-black dark:text-white">{t('privacy-policy.content.sub_title_3')}</h4>
          <ul dangerouslySetInnerHTML={{ __html: t('privacy-policy.content.description_3') }}></ul>

          <h3>{t('privacy-policy.content.title_4')}</h3>
          <p dangerouslySetInnerHTML={{ __html: t('privacy-policy.content.description_4') }}></p>

          <h3>{t('privacy-policy.content.title_5')}</h3>
          <p dangerouslySetInnerHTML={{ __html: t('privacy-policy.content.description_5') }}></p>

          <h3>{t('privacy-policy.content.title_6')}</h3>
          <p dangerouslySetInnerHTML={{ __html: t('privacy-policy.content.description_6') }}></p>

          <h3>{t('privacy-policy.content.title_7')}</h3>
          <p dangerouslySetInnerHTML={{ __html: t('privacy-policy.content.description_7') }}></p>

          <h3>{t('privacy-policy.content.title_8')}</h3>
          <p dangerouslySetInnerHTML={{ __html: t('privacy-policy.content.description_8') }}></p>
        </div>
      </div>
      <BgAnimation />
    </>
  );
}
