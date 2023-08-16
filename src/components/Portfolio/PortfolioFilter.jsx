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
    <ul className="flex flex-col xl:flex-row items-center justify-end gap-4 mb-4 w-full xl:w-8/12">
      <li
        onClick={() => handleFilterChange('all')}
        className={`w-full sm:w-6/12 md:w-7/12 lg:w-5/12 xl:w-6/12 cursor-pointer rounded-sm py-1 px-4 border border-orange-400 text-center text-black dark:text-white transition-all diration-200 hover:bg-orange-400 hover:text-white ${
          activeFilter === 'all' ? 'bg-orange-400 text-white' : 'bg-transparent'
        }`}
      >
        {t('portfolio.portfolio-filter.all')}
      </li>
      <li
        onClick={() => handleFilterChange('educational')}
        className={`w-full sm:w-6/12 md:w-7/12 lg:w-5/12 xl:w-6/12  cursor-pointer rounded-sm py-1 px-4 border  border-orange-400 text-center text-black dark:text-white transition-all diration-200 hover:bg-orange-400 hover:text-white ${
          activeFilter === 'educational' ? 'bg-orange-400 text-white' : 'bg-transparent'
        }`}
      >
        {t('portfolio.portfolio-filter.educational')}
      </li>
      <li
        onClick={() => handleFilterChange('commercial')}
        className={`w-full sm:w-6/12 md:w-7/12 lg:w-5/12 xl:w-6/12  cursor-pointer rounded-sm py-1 px-4 border  border-orange-400 text-center text-black dark:text-white transition-all diration-200 hover:bg-orange-400 hover:text-white ${
          activeFilter === 'commercial' ? 'bg-orange-400 text-white' : 'bg-transparent'
        }`}
      >
        {t('portfolio.portfolio-filter.commercial')}
      </li>
    </ul>
  );
}