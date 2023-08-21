import { useTranslation } from 'react-i18next';

export default function Possibilities() {
  const { t } = useTranslation();

  return (
    <ul className="grid grid-cols-2 gap-4">
      <li className="flex gap-4">
        <div>
          <h3 className="text-[1rem] lg:text-[1.25rem] font-semibold text-textColor dark:text-white mb-2">{t('possibilities.web-development')}</h3>
          <p className="text-black dark:text-white">{t('possibilities.web-development-description')}</p>
        </div>
      </li>
      <li className="flex gap-4">
        <div>
          <h3 className="text-[1rem] lg:text-[1.25rem] font-semibold text-textColor dark:text-white mb-2">{t('possibilities.web-design')}</h3>
          <p className="text-black dark:text-white">{t('possibilities.web-design-description')}</p>
        </div>
      </li>
      <li className="flex gap-4">
        <div>
          <h3 className="text-[1rem] lg:text-[1.25rem] font-semibold text-textColor dark:text-white mb-2">{t('possibilities.e-marketing')}</h3>
          <p className="text-black dark:text-white">{t('possibilities.e-marketing-description')}</p>
        </div>
      </li>
      <li className="flex gap-4">
        <div>
          <h3 className="text-[1rem] lg:text-[1.25rem] font-semibold text-textColor dark:text-white mb-2">{t('possibilities.seo')}</h3>
          <p className="text-black dark:text-white">{t('possibilities.seo-description')}</p>
        </div>
      </li>
      <li className="flex gap-4">
        <div>
          <h3 className="text-[1rem] lg:text-[1.25rem] font-semibold text-textColor dark:text-white mb-2">{t('possibilities.site-availability')}</h3>
          <p className="text-black dark:text-white">{t('possibilities.site-availability-description')}</p>
        </div>
      </li>
      <li className="flex gap-4">
        <div>
          <h3 className="text-[1rem] lg:text-[1.25rem] font-semibold text-textColor dark:text-white mb-2">{t('possibilities.technical-support')}</h3>
          <p className="text-black dark:text-white">{t('possibilities.technical-support-description')}</p>
        </div>
      </li>
    </ul>
  );
}
