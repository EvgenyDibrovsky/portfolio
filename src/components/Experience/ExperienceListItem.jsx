import { useTranslation } from 'react-i18next';

export default function ExperienceListItem({ data }) {
  const { t } = useTranslation();

  return (
    <li className="relative w-full flex justify-between h-full p-5  border border-colorBorder dark:border-colorBorderDark rounded-md">
      <div>
        <img src={`${process.env.PUBLIC_URL}${data.logo}`} alt={t(`experience.${data.id}.title-description`)} className="absolute top-5 right-5 w-auto h-6 object-cover rounded" />
      </div>
      <div className="w-full flex flex-col gap-2">
        {['title', 'position', 'responsibilities', 'county', 'period'].map(field => (
          <div key={field}>
            <p className="text-textColor dark:text-white text-[1rem] font-semibold">{t(`experience.${field}`)}</p>
            <p className="text-textColor dark:text-white text-[1rem]">{t(`experience.${data.id}.${field}-description`)}</p>
          </div>
        ))}
      </div>
    </li>
  );
}
