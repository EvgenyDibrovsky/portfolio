import PageTitle from 'components/Utility/PageTitle';
import SubTitle from 'components/Utility/SubTitle';
import { useTranslation } from 'react-i18next';
import { BsCardChecklist } from 'react-icons/bs';

export default function BriefPage() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto h-[calc(100vh-20rem)]">
      <PageTitle icon={<BsCardChecklist className="w-6 h-6" />} title={t('brief-page.title')} />
      <SubTitle subTitle={t('brief-page.sub-title')} />
    </div>
  );
}
