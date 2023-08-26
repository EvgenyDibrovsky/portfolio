import PageTitle from 'components/Utility/PageTitle';
import SubTitle from 'components/Utility/SubTitle';
import { useTranslation } from 'react-i18next';
import PortfolioFilter from 'components/Portfolio/PortfolioFilter';
import PortfolioList from 'components/Portfolio/PortfolioList';
import { BsCardImage } from 'react-icons/bs';
import React, { useState } from 'react';
import MetaTags from 'components/MetaTags/MetaTags';
import WrapperTitle from 'components/Utility/WrapperTitle';

export default function PortfolioPage() {
  const { t } = useTranslation();
  const [currentFilter, setCurrentFilter] = useState('all');

  const handleFilterChange = filter => {
    setCurrentFilter(filter);
  };

  return (
    <>
      <MetaTags metaTitle={t('portfolio-page.meta-title')} metaDescription={t('portfolio-page.meta-description')} />
      <WrapperTitle>
        <PageTitle icon={<BsCardImage />} title={t('portfolio-page.title')} />
        <SubTitle subTitle={t('portfolio-page.sub-title')} />
      </WrapperTitle>
      <PortfolioFilter onFilterChange={handleFilterChange} />

      <PortfolioList currentFilter={currentFilter} />
    </>
  );
}
