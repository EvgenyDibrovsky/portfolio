import PageTitle from 'components/Utility/PageTitle';
import SubTitle from 'components/Utility/SubTitle';
import { useTranslation } from 'react-i18next';
import PortfolioFilter from 'components/Portfolio/PortfolioFilter';
import PortfolioList from 'components/Portfolio/PortfolioList';
import { BsCardImage } from 'react-icons/bs';
import React, { useState } from 'react';
import MetaTags from 'components/MetaTags/MetaTags';
export default function PortfolioPage() {
  const { t } = useTranslation();
  const [currentFilter, setCurrentFilter] = useState('all');

  const handleFilterChange = filter => {
    setCurrentFilter(filter);
  };

  return (
    <>
      <MetaTags metaTitle={t('portfolio-page.meta-title')} metaDescription={t('portfolio-page.meta-description')} />
      <div className="relative flex flex-col lg:flex-row items-center justify-between  gap-4 mb-8 after:content-[''] after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:w-full after:h-[2px] after:bg-gray-200 dark:after:bg-orange-400 ">
        <PageTitle icon={<BsCardImage />} title={t('portfolio-page.title')} />
        <SubTitle subTitle={t('portfolio-page.sub-title')} />
      </div>
      <div className="flex flex-col xl:flex-row items-center justify-end">
        <PortfolioFilter onFilterChange={handleFilterChange} />
      </div>

      <PortfolioList currentFilter={currentFilter} />
    </>
  );
}
