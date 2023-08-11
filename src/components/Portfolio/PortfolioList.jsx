import dbPortfolio from '../../db/portfolio.json';
import { useTranslation } from 'react-i18next';
import PortfolioListItem from './PortfolioListItem';

export default function PortfolioList() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language.toUpperCase();

  // Mapping data based on the selected language
  const data = dbPortfolio.map(item => {
    const languageSpecificData = item.portfolio[currentLanguage];
    return {
      ...languageSpecificData,
      id: item.portfolio.id,
      image: item.portfolio.image,
      link: item.portfolio.link,
    };
  });

  if (data.length === 0) {
    return (
      <p className="text-[2rem] text-black dark:text-white text-center">{t('nothing-found')}</p>
    );
  }

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 4xl:grid-cols-6 gap-6">
      {data.map(({ name, description, image, link, technologies, participation }, index) => (
        <PortfolioListItem
          key={index}
          image={image}
          link={link}
          name={name}
          description={description}
          technologies={technologies}
          participation={participation}
        />
      ))}
    </ul>
  );
}
