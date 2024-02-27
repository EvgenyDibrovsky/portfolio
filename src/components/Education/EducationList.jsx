import { useTranslation } from 'react-i18next';
import EducationListItem from './EducationListItem';
import AnimateElements from '../../components/Utility/AnimateElements';

const EducationList = () => {
  const { t } = useTranslation();

  const educationData = [
    { id: 'id-4', bgClass: 'bg-education-goit' },
    { id: 'id-3', bgClass: 'bg-education-renoma' },
    { id: 'id-2', bgClass: 'bg-education-economic-cybernetics' },
    { id: 'id-1', bgClass: 'bg-education-zkr-zntu' },
  ];

  return (
    <AnimateElements>
      <ul className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        {educationData.map(data => (
          <EducationListItem key={data.id} id={data.id} bgClass={data.bgClass} t={t} />
        ))}
      </ul>
    </AnimateElements>
  );
};
export default EducationList;
