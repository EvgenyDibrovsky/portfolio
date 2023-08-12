import PageTitle from 'components/Utility/PageTitle';
import SubTitle from 'components/Utility/SubTitle';
import { useTranslation } from 'react-i18next';
import { BsHouseDoor } from 'react-icons/bs';

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle icon={<BsHouseDoor />} title={t('home-page.title')} />
      <SubTitle subTitle={t('home-page.sub-title')} />
    </>
  );
}
