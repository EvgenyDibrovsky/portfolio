import PageTitle from 'components/Utility/PageTitle';
import SubTitle from 'components/Utility/SubTitle';
import { useTranslation } from 'react-i18next';
import { BsPerson } from 'react-icons/bs';
import WorkingСonditions from 'components/WorkingСonditions/WorkingСonditions';
import MetaTags from 'components/MetaTags/MetaTags';
import WrapperTitle from 'components/Utility/WrapperTitle';
export default function CooperationPage() {
  const { t } = useTranslation();
  return (
    <>
      <MetaTags metaTitle={t('cooperation-page.meta-title')} metaDescription={t('cooperation-page.meta-description')} />
      <WrapperTitle>
        <PageTitle icon={<BsPerson />} title={t('cooperation-page.title')} />
        <SubTitle subTitle={t('cooperation-page.sub-title')} />
      </WrapperTitle>
      <WorkingСonditions />
    </>
  );
}
