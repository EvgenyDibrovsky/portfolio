import PageTitle from 'components/Utility/PageTitle';
import SubTitle from 'components/Utility/SubTitle';
import { useTranslation } from 'react-i18next';
import PortfolioList from 'components/Portfolio/PortfolioList';
import { BsCardImage } from 'react-icons/bs';

export default function PortfolioPage() {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle
        icon={<BsCardImage className="w-6 h-6 text-iconColor dark:text-iconColorDark" />}
        title={t('portfolio-page.title')}
      />
      <SubTitle subTitle={t('portfolio-page.sub-title')} />
      <PortfolioList />
    </>
  );
}
