import { useTranslation } from 'react-i18next';
import ExperienceistItem from './ExperienceListItem';

export default function Experienceist() {
  const { t } = useTranslation();

  const experienceListData = [{ id: 'id-4' }, { id: 'id-3' }, { id: 'id-2' }, { id: 'id-1' }];

  return (
    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-4">
      {experienceListData.map(data => (
        <ExperienceistItem key={data.id} id={data.id} bgClass={data.bgClass} t={t} />
      ))}
    </ul>
  );
}
