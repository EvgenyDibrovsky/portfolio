import PageTitle from 'components/Utility/PageTitle';
import SubTitle from 'components/Utility/SubTitle';
import { useTranslation } from 'react-i18next';
import PortfolioFilter from 'components/Portfolio/PortfolioFilter';
import PortfolioList from 'components/Portfolio/PortfolioList';
import { BsCardImage } from 'react-icons/bs';
import React, { useState } from 'react';

export default function PortfolioPage() {
  const { t } = useTranslation();
  const [currentFilter, setCurrentFilter] = useState('all');

  const handleFilterChange = filter => {
    setCurrentFilter(filter);
  };

  return (
    <>
      <PageTitle icon={<BsCardImage />} title={t('portfolio-page.title')} />
      <div className="flex flex-col xl:flex-row items-center justify-between">
        <SubTitle subTitle={t('portfolio-page.sub-title')} />
        <PortfolioFilter onFilterChange={handleFilterChange} />
      </div>

      <PortfolioList currentFilter={currentFilter} />
    </>
  );
}
