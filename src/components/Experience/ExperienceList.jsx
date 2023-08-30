import ExperienceListItem from './ExperienceListItem';
import dbExperience from '../../db/experience.json';
import useCurrentLanguage from '../Hooks/useCurrentLanguage';

export default function ExperienceList() {
  const currentLanguage = useCurrentLanguage();

  const data = dbExperience.map(item => {
    const languageSpecificData = item.experience[currentLanguage];
    return {
      ...languageSpecificData,
      id: item.experience.id,
      logo: item.experience.logo,
    };
  });

  return (
    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-4">
      {data.map(dataItem => (
        <ExperienceListItem key={dataItem.id} data={dataItem} />
      ))}
    </ul>
  );
}
