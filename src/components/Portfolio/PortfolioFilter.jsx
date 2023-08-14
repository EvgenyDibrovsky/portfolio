import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export default function PortfolioFilter({ onFilterChange }) {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('all'); // инициализируем начальное состояние

  const handleFilterChange = filter => {
    onFilterChange(filter);
    setActiveFilter(filter); // устанавливаем новое активное значение при клике
  };

  return (
    <ul className="flex flex-col lg:flex-row items-center gap-4 mb-4">
      <li
        onClick={() => handleFilterChange('all')}
        className={`cursor-pointer py-1 px-4 border border-orange-400 text-black dark:text-white transition-all diration-200 ${
          activeFilter === 'all' ? 'bg-orange-400 text-white' : 'bg-transparent'
        }`}
      >
        {t('portfolio.portfolio-filter.all')}
      </li>
      <li
        onClick={() => handleFilterChange('educational')}
        className={`cursor-pointer py-1 px-4 border  border-orange-400 text-black dark:text-white transition-all diration-200 ${
          activeFilter === 'educational' ? 'bg-orange-400 text-white' : 'bg-transparent'
        }`}
      >
        {t('portfolio.portfolio-filter.educational')}
      </li>
      <li
        onClick={() => handleFilterChange('commercial')}
        className={`cursor-pointer py-1 px-4 border  border-orange-400 text-black dark:text-white transition-all diration-200 ${
          activeFilter === 'commercial' ? 'bg-orange-400 text-white' : 'bg-transparent'
        }`}
      >
        {t('portfolio.portfolio-filter.commercial')}
      </li>
    </ul>
  );
}
