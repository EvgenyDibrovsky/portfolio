import { useTranslation } from 'react-i18next';
import { BsGlobe, BsClock, BsBriefcase } from 'react-icons/bs';
export default function WorkingСonditions() {
  const { t } = useTranslation();
  return (
    <>
      <ul className="grid grid-cols-1 lg:grid-cols-3 gap-6 justify-center">
        <li className="flex justify-start lg:justify-center items-center gap-4 border py-10">
          <div className="w-8 h-8">
            <BsGlobe className="w-8 h-8 text-orange-400" />
          </div>
          <div>
            <h3 className="text-[1rem] lg:text-[1.25rem] font-semibold text-textColor dark:text-white mb-2">{t('working-conditions.freelance')}</h3>
          </div>
        </li>
        <li className="flex justify-start lg:justify-center items-center gap-4 border py-10">
          <div className="w-8 h-8">
            <BsClock className="w-8 h-8 text-orange-400" />
          </div>
          <div>
            <h3 className="text-[1rem] lg:text-[1.25rem] font-semibold text-textColor dark:text-white mb-2">{t('working-conditions.full-employment')}</h3>
          </div>
        </li>
        <li className="flex justify-start lg:justify-center items-center gap-4 border py-10">
          <div className="w-8 h-8">
            <BsBriefcase className="w-8 h-8 text-orange-400" />
          </div>
          <div>
            <h3 className="text-[1rem] lg:text-[1.25rem] font-semibold text-textColor dark:text-white mb-2">{t('working-conditions.b2b')}</h3>
          </div>
        </li>
      </ul>
    </>
  );
}
