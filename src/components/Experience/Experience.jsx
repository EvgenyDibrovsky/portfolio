import dbExperience from '../../db/experience.json';
import { useTranslation } from 'react-i18next';
import ExperienceListItem from './ExperienceListItem';

export default function ExperienceList() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language.toUpperCase();

  // Mapping data based on the selected language
  const data = dbExperience.map(item => {
    const languageSpecificData = item.experience[currentLanguage];
    return {
      ...languageSpecificData,
      id: item.experience.id,
      image: item.experience.image,
      link: item.experience.link,
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
          <ExperienceListItem
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
