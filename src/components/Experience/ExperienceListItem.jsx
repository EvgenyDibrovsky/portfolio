import { useTranslation } from 'react-i18next';

export default function ExperienceListItem({ id }) {
  const { t } = useTranslation();

  return (
    <li className="w-full flex justify-between h-full border border-colorBorder dark:border-colorBorderDark rounded-md">
      <div className="z-10 h-full flex flex-col gap-2 justify-between p-5 mb-6">
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
