import { useTranslation } from 'react-i18next';

export default function PortfolioFilter() {
  const { t } = useTranslation();

  return (
    <ul className="flex items-center gap-4 mb-4">
      <li className="py-1 px-4 border border-orange-400 bg-transparent">
        {t('portfolio.portfolio-filter.full')}
      </li>
      <li className="py-1 px-4 border border-orange-400 bg-transparent">
        {t('portfolio.portfolio-filter.educational')}
      </li>
      <li className="py-1 px-4 border border-orange-400 bg-transparent">
        {t('portfolio.portfolio-filter.commercial')}
      </li>
    </ul>
  );
}
