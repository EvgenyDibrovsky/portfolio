import { useTranslation } from 'react-i18next';

export default function PortfolioFilter({ onFilterChange }) {
  const { t } = useTranslation();

  return (
    <ul className="flex items-center gap-4 mb-4">
      <li
        onClick={() => onFilterChange('all')}
        className="cursor-pointer py-1 px-4 border border-orange-400 bg-transparent"
      >
        {t('portfolio.portfolio-filter.all')}
      </li>
      <li
        onClick={() => onFilterChange('educational')}
        className="cursor-pointer py-1 px-4 border border-orange-400 bg-transparent"
      >
        {t('portfolio.portfolio-filter.educational')}
      </li>
      <li
        onClick={() => onFilterChange('commercial')}
        className="cursor-pointer py-1 px-4 border border-orange-400 bg-transparent"
      >
        {t('portfolio.portfolio-filter.commercial')}
      </li>
    </ul>
  );
}
