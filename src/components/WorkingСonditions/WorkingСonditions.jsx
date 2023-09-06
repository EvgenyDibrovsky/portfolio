import { useTranslation } from 'react-i18next';
import { BsGlobe, BsClock, BsBriefcase } from 'react-icons/bs';
import AnimateElements from 'components/Utility/AnimateElements';

export default function WorkingСonditions() {
  const { t } = useTranslation();
  return (
    <AnimateElements>
      <ul className="grid grid-cols-1 lg:grid-cols-3 gap-6 justify-center">
        <li className="flex justify-center items-center gap-4 lg:flex-col xl:flex-row  shadow-sm shadow-black dark:shadow-white h-20 lg:h-40 opacity-0 init-animate-1">
          <BsGlobe className="w-8 h-8 text-orange-400" />
          <p className="text-[1rem] lg:text-[1.25rem] font-semibold text-textColor dark:text-white">{t('working-conditions.freelance')}</p>
        </li>
        <li className="flex justify-center items-center gap-4 lg:flex-col xl:flex-row shadow-sm shadow-black dark:shadow-white h-20 lg:h-40 opacity-0 init-animate-1">
          <BsClock className="w-8 h-8 text-orange-400" />
          <p className="text-[1rem] lg:text-[1.25rem] font-semibold text-textColor dark:text-white">{t('working-conditions.full-employment')}</p>
        </li>
        <li className="flex justify-center items-center gap-4 lg:flex-col xl:flex-row shadow-sm shadow-black dark:shadow-white h-20 lg:h-40 opacity-0 init-animate-1">
          <BsBriefcase className="w-8 h-8 text-orange-400" />
          <p className="text-[1rem] lg:text-[1.25rem] font-semibold text-textColor dark:text-white">{t('working-conditions.b2b')}</p>
        </li>
      </ul>
    </AnimateElements>
  );
}
