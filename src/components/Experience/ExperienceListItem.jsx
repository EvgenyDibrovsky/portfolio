import { useTranslation } from 'react-i18next';

export default function ExperienceListItem({ id }) {
  const { t } = useTranslation();

  return (
    <li className="relative w-full flex justify-between h-full border border-colorBorder dark:border-colorBorderDark rounded-md">
      <div className="z-10 w-full h-full flex flex-col gap-2 p-5">
        <div className="flex items-center gap-3">
          <img src={`${process.env.PUBLIC_URL}${t(`experience.${id}.logo`)}`} alt={t(`experience.${id}.title-description`)} className="absolute top-5 right-5 w-40 h-auto object-cover rounded" />
        </div>

        {['title', 'position', 'responsibilities', 'county', 'period'].map(field => (
          <div key={field}>
            <p className="text-textColor dark:text-white text-[1rem] font-semibold">{t(`experience.${field}`)}</p>
            <p className="text-textColor dark:text-white text-[1rem]">{t(`experience.${id}.${field}-description`)}</p>
          </div>
        ))}
      </div>
    </li>
  );
}
