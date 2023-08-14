import PageTitle from 'components/Utility/PageTitle';
import SubTitle from 'components/Utility/SubTitle';
import { useTranslation } from 'react-i18next';
import PortfolioFilter from 'components/Portfolio/PortfolioFilter';
import PortfolioList from 'components/Portfolio/PortfolioList';
import { BsCardImage } from 'react-icons/bs';

export default function PortfolioPage() {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle icon={<BsCardImage />} title={t('portfolio-page.title')} />
      <SubTitle subTitle={t('portfolio-page.sub-title')} />
      <PortfolioFilter />
      <PortfolioList />
    </>
  );
}
