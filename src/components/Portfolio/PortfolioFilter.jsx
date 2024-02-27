import { useTranslation } from 'react-i18next';
import React, { useState, useCallback } from 'react';
import AnimateElements from '../../components/Utility/AnimateElements';

const PortfolioFilter = ({ onFilterChange }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const { t } = useTranslation();

  const handleFilterChange = useCallback(
    filter => {
      setActiveFilter(filter);
      onFilterChange(filter);
    },
    [onFilterChange]
  );

  return (
    <AnimateElements>
      <ul className="flex flex-col lg:flex-row items-center justify-end gap-4 mb-5 w-full xl:w-8/12 2xl:w-6/12 xl:ml-auto opacity-0 init-animate-2" data-time="1.2s" data-delay="0.5s">
        <li onClick={() => handleFilterChange('all')} className={`relative z-10 btn-filter ${activeFilter === 'all' ? 'bg-sky-600 text-white dark:text-white' : 'bg-white dark:bg-neutral-800'}`}>
          {t('portfolio.portfolio-filter.all')}
        </li>
        <li
          onClick={() => handleFilterChange('educational')}
          className={`relative z-10 btn-filter ${activeFilter === 'educational' ? 'bg-sky-600 text-white dark:text-white' : 'bg-white dark:bg-neutral-800'}`}
        >
          {t('portfolio.portfolio-filter.educational')}
        </li>
        <li
          onClick={() => handleFilterChange('commercial')}
          className={`relative z-10 btn-filter  ${activeFilter === 'commercial' ? 'bg-sky-600 text-white dark:text-white' : 'bg-white dark:bg-neutral-800'}`}
        >
          {t('portfolio.portfolio-filter.commercial')}
        </li>
      </ul>
    </AnimateElements>
  );
};
export default PortfolioFilter;
