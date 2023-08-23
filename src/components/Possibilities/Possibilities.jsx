import { useTranslation } from 'react-i18next';
import { BsCodeSlash, BsBrush, BsGlobeEuropeAfrica, BsRocketTakeoff, BsPeople, BsShieldCheck } from 'react-icons/bs';
export default function Possibilities() {
  const { t } = useTranslation();

  return (
    <>
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <li className="flex flex-col lg:flex-row gap-6">
          <div className="w-10 h-10">
            <BsCodeSlash className="w-10 h-10 text-orange-400" />
          </div>
          <div>
            <h3 className="text-[1rem] lg:text-[1.25rem] font-semibold text-textColor dark:text-white mb-2">{t('possibilities.web-development')}</h3>
            <p className="text-black dark:text-white">{t('possibilities.web-development-description')}</p>
          </div>
        </li>
        <li className="flex flex-col lg:flex-row gap-6">
          <div className="w-10 h-10 mx-auto">
            <BsBrush className="w-10 h-10 text-orange-400" />
          </div>
          <div>
            <h3 className="text-[1rem] lg:text-[1.25rem] font-semibold text-textColor dark:text-white mb-2">{t('possibilities.web-design')}</h3>
            <p className="text-black dark:text-white">{t('possibilities.web-design-description')}</p>
          </div>
        </li>
        <li className="flex flex-col lg:flex-row gap-6">
          <div className="w-10 h-10 mx-auto">
            <BsGlobeEuropeAfrica className="w-10 h-10 text-orange-400" />
          </div>
          <div>
            <h3 className="text-[1rem] lg:text-[1.25rem] font-semibold text-textColor dark:text-white mb-2">{t('possibilities.e-marketing')}</h3>
            <p className="text-black dark:text-white">{t('possibilities.e-marketing-description')}</p>
          </div>
        </li>
        <li className="flex flex-col lg:flex-row gap-6">
          <div className="w-10 h-10 mx-auto">
            <BsRocketTakeoff className="w-10 h-10 text-orange-400" />
          </div>
          <div>
            <h3 className="text-[1rem] lg:text-[1.25rem] font-semibold text-textColor dark:text-white mb-2">{t('possibilities.seo')}</h3>
            <p className="text-black dark:text-white">{t('possibilities.seo-description')}</p>
          </div>
        </li>
        <li className="flex flex-col lg:flex-row gap-6">
          <div className="w-10 h-10 mx-auto">
            <BsPeople className="w-10 h-10 text-orange-400" />
          </div>
          <div>
            <h3 className="text-[1rem] lg:text-[1.25rem] font-semibold text-textColor dark:text-white mb-2">{t('possibilities.site-availability')}</h3>
            <p className="text-black dark:text-white">{t('possibilities.site-availability-description')}</p>
          </div>
        </li>
        <li className="flex flex-col lg:flex-row gap-6">
          <div className="w-12 h-12 mx-auto">
            <BsShieldCheck className="w-12 h-12 text-orange-400" />
          </div>
          <div>
            <h3 className="text-[1rem] lg:text-[1.25rem] font-semibold text-textColor dark:text-white mb-2">{t('possibilities.technical-support')}</h3>
            <p className="text-black dark:text-white">{t('possibilities.technical-support-description')}</p>
          </div>
        </li>
      </ul>
    </>
  );
}
