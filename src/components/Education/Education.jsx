import dbEducation from '../../db/education.json';
import { useTranslation } from 'react-i18next';
import EducationListItem from './EducationListItem';

export default function EducationList() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language.toUpperCase();

  // Mapping data based on the selected language
  const data = dbEducation.map(item => {
    const languageSpecificData = item.education[currentLanguage];
    return {
      ...languageSpecificData,
      id: item.education.id,
      image: item.education.image,
      link: item.education.link,
    };
  });

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
          <EducationListItem
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
