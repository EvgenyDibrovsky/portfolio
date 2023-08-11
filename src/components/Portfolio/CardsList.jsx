import dbPortfolio from '../../db/portfolio.json';
import { useTranslation } from 'react-i18next';
import CardsListItem from './CardsListItem';

export default function CardsList() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language.toUpperCase();

  // Фильтрация данных на основе выбранного языка
  const data = dbPortfolio.map(item => item.project[currentLanguage]);

  if (data.length === 0) {
    return (
      <p className="text-[2rem] text-black dark:text-white text-center">
        {t('nothing-found')}
      </p>
    );
  }

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 4xl:grid-cols-6 gap-6">
      {data.map(
        (
          { name, description, image, link, technologies, participation },
          index
        ) => (
          <CardsListItem
            key={index}
            image={image}
            name={name}
            description={description}
            link={link}
            technologies={technologies}
            participation={participation}
          />
        )
      )}
    </ul>
  );
}
