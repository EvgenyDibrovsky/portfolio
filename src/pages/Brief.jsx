import PageTitle from 'components/Utility/PageTitle';
import SubTitle from 'components/Utility/SubTitle';
import { useTranslation } from 'react-i18next';
import { BsListCheck } from 'react-icons/bs';

export default function BriefPage() {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle icon={<BsListCheck />} title={t('brief-page.title')} />
      <SubTitle subTitle={t('brief-page.sub-title')} />
    </>
  );
}
