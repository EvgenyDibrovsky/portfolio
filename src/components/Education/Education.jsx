import { useTranslation } from 'react-i18next';

export default function Education() {
  const { t } = useTranslation();

  const educationData = [
    { id: 'id-1', bgClass: 'bg-education-goit' },
    { id: 'id-2', bgClass: 'bg-education-renoma' },
    { id: 'id-3', bgClass: 'bg-education-economic-cybernetics' },
    { id: 'id-4', bgClass: 'bg-education-zkr-zntu' },
  ];

  return (
    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-4">
      {educationData.map(data => (
        <EducationCard key={data.id} id={data.id} bgClass={data.bgClass} t={t} />
      ))}
    </ul>
  );
}

function EducationCard({ id, bgClass, t }) {
  return (
    <li className="w-full flex justify-between h-full border border-colorBorder dark:border-colorBorderDark rounded-md">
      <div className="z-10 h-full flex flex-col gap-2 justify-between p-5 mb-6">
        {['title', 'faculty', 'speciality', 'form', 'county', 'period'].map(field => (
          <div key={field}>
            <p className="text-textColor dark:text-white text-[1rem] font-semibold">{t(`education.${field}`)}</p>
            <p className="text-textColor dark:text-white text-[1rem]">{t(`education.${id}.${field}-description`)}</p>
          </div>
        ))}
      </div>
      <div className={`hidden sm:block w-full lg:w-7/12 h-full clip-education relative ${bgClass} bg-cover bg-right bg-no-repeat`}>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
      </div>
    </li>
  );
}
