import PageTitle from 'components/Utility/PageTitle';
import SubTitle from 'components/Utility/SubTitle';
import { useTranslation } from 'react-i18next';
import PortfolioList from 'components/Portfolio/PortfolioList';
export default function PortfolioPage() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto h-[calc(100vh-20rem)]">
      <PageTitle title={t('portfolio-page.title')} />
      <SubTitle subTitle={t('portfolio-page.sub-title')} />
      <PortfolioList />
    </div>
  );
}
