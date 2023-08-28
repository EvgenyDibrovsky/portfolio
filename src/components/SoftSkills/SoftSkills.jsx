import { useTranslation } from 'react-i18next';
import { BsCheck2Circle } from 'react-icons/bs';
export default function SoftSkills() {
  const { t } = useTranslation();
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
      <li>
        <BsCheck2Circle className="w-12 h-12 text-orange-400 mx-auto mb-2" />
        <p className="text-black dark:text-white text-center">{t('soft-skills.skill-1')}</p>
      </li>
      <li>
        <BsCheck2Circle className="w-12 h-12 text-orange-400 mx-auto mb-2" />
        <p className="text-black dark:text-white text-center">{t('soft-skills.skill-2')}</p>
      </li>
      <li>
        <BsCheck2Circle className="w-12 h-12 text-orange-400 mx-auto mb-2" />
        <p className="text-black dark:text-white text-center">{t('soft-skills.skill-3')}</p>
      </li>
      <li>
        <BsCheck2Circle className="w-12 h-12 text-orange-400 mx-auto mb-2" />
        <p className="text-black dark:text-white text-center">{t('soft-skills.skill-4')}</p>
      </li>
      <li>
        <BsCheck2Circle className="w-12 h-12 text-orange-400 mx-auto mb-2" />
        <p className="text-black dark:text-white text-center">{t('soft-skills.skill-5')}</p>
      </li>
      <li>
        <BsCheck2Circle className="w-12 h-12 text-orange-400 mx-auto mb-2" />
        <p className="text-black dark:text-white text-center">{t('soft-skills.skill-6')}</p>
      </li>
    </ul>
  );
}
