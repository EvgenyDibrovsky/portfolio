import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import AnimateElements from 'components/Utility/AnimateElements';
export default function PortfolioFilter({ onFilterChange }) {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('all');

  const handleFilterChange = filter => {
    onFilterChange(filter);
    setActiveFilter(filter);
  };

  return (
    <AnimateElements>
      <ul className="flex flex-col lg:flex-row items-center justify-end gap-4 mb-4 w-full xl:w-8/12 2xl:w-6/12 xl:ml-auto opacity-0 init-animate-2" data-time="1.2s" data-delay="0.5s">
        <li onClick={() => handleFilterChange('all')} className={`btn-filter ${activeFilter === 'all' ? 'bg-orange-400 text-white dark:text-black' : 'bg-transparent'}`}>
          {t('portfolio.portfolio-filter.all')}
        </li>
        <li onClick={() => handleFilterChange('educational')} className={`btn-filter ${activeFilter === 'educational' ? 'bg-orange-400 text-white dark:text-black' : 'bg-transparent'}`}>
          {t('portfolio.portfolio-filter.educational')}
        </li>
        <li onClick={() => handleFilterChange('commercial')} className={`btn-filter  ${activeFilter === 'commercial' ? 'bg-orange-400 text-white dark:text-black' : 'bg-transparent'}`}>
          {t('portfolio.portfolio-filter.commercial')}
        </li>
      </ul>
    </AnimateElements>
  );
}
