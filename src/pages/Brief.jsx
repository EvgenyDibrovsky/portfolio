import PageTitle from 'components/Utility/PageTitle';
import SubTitle from 'components/Utility/SubTitle';
import { useTranslation } from 'react-i18next';
import { BsListCheck } from 'react-icons/bs';
import BriefForm from 'components/BriefForm/BriefForm';
import MetaTags from 'components/MetaTags/MetaTags';
import WrapperTitle from 'components/Utility/WrapperTitle';
export default function BriefPage() {
  const { t } = useTranslation();

  return (
    <>
      <MetaTags metaTitle={t('brief-page.meta-title')} metaDescription={t('brief-page.meta-description')} />
      <WrapperTitle>
        <PageTitle icon={<BsListCheck />} title={t('brief-page.title')} />
        <SubTitle subTitle={t('brief-page.sub-title')} />
      </WrapperTitle>
      <BriefForm />
    </>
  );
}
