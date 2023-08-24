import { useTranslation } from 'react-i18next';
import { BsGlobe, BsClock, BsBriefcase } from 'react-icons/bs';
export default function WorkingСonditions() {
  const { t } = useTranslation();
  return (
    <>
      <ul className="grid grid-cols-1 lg:grid-cols-3 gap-6 justify-center">
        <li className="flex justify-center items-center gap-4 border border-colorBorder dark:border-colorBorderDark py-10">
          <BsGlobe className="w-8 h-8 text-orange-400" />
          <p className="text-[1rem] lg:text-[1.25rem] font-semibold text-textColor dark:text-white mb-2">{t('working-conditions.freelance')}</p>
        </li>
        <li className="flex justify-center items-center gap-4 border border-colorBorder dark:border-colorBorderDark py-10">
          <BsClock className="w-8 h-8 text-orange-400" />
          <p className="text-[1rem] lg:text-[1.25rem] font-semibold text-textColor dark:text-white mb-2">{t('working-conditions.full-employment')}</p>
        </li>
        <li className="flex justify-center items-center gap-4 border border-colorBorder dark:border-colorBorderDark py-10">
          <BsBriefcase className="w-8 h-8 text-orange-400" />
          <p className="text-[1rem] lg:text-[1.25rem] font-semibold text-textColor dark:text-white mb-2">{t('working-conditions.b2b')}</p>
        </li>
      </ul>
    </>
  );
}
