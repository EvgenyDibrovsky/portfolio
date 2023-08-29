import { useTranslation } from 'react-i18next';

export default function EducationListItem({ id, bgClass }) {
  const { t } = useTranslation();

  return (
    <li className="w-full flex justify-between h-full border border-colorBorder dark:border-colorBorderDark rounded-md">
      <div className="z-10 w-full h-full flex flex-col gap-2 justify-between p-5 mb-6">
        {['title', 'faculty', 'speciality', 'form', 'county', 'period'].map(field => (
          <div key={field}>
            <p className="text-textColor dark:text-white text-[1rem] font-semibold">{t(`education.${field}`)}</p>
            <p className="text-textColor dark:text-white text-[1rem]">{t(`education.${id}.${field}-description`)}</p>
          </div>
        ))}
      </div>
      <div className={`hidden sm:block w-full lg:w-[10-rem] h-full clip-education relative ${bgClass} bg-cover bg-left bg-no-repeat`}>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
      </div>
    </li>
  );
}
