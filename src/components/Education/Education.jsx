import { useTranslation } from 'react-i18next';

export default function Education() {
  const { t } = useTranslation();

  return (
    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-4">
      <li className="w-full flex justify-between h-full border border-colorBorder dark:border-colorBorderDark rounded-md">
        <div className="z-10 h-full flex flex-col gap-2 justify-between p-5 mb-6">
          <div>
            <p className="text-textColor dark:text-white text-[1rem] font-semibold">{t('education.title')}</p>
            <p className="text-textColor dark:text-white text-[1rem] ">{t('education.id-1.title-description')}</p>
          </div>
          <div>
            <p className="text-textColor dark:text-white text-[1rem] font-semibold">{t('education.faculty')}</p>
            <p className="text-textColor dark:text-white text-[1rem] ">{t('education.id-1.faculty-description')}</p>
          </div>
          <div>
            <p className="text-textColor dark:text-white text-[1rem] font-semibold">{t('education.speciality')}</p>
            <p className="text-textColor dark:text-white text-[1rem] ">{t('education.id-1.speciality-description')}</p>
          </div>
          <div>
            <p className="text-textColor dark:text-white text-[1rem] font-semibold">{t('education.form')}</p>
            <p className="text-textColor dark:text-white text-[1rem] ">{t('education.id-1.form-description')}</p>
          </div>
          <div>
            <p className="text-textColor dark:text-white text-[1rem] font-semibold">{t('education.county')}</p>
            <p className="text-textColor dark:text-white text-[1rem] ">{t('education.id-1.county-description')}</p>
          </div>
          <div>
            <p className="text-textColor dark:text-white text-[1rem] font-semibold">{t('education.period')}</p>
            <p className="text-textColor dark:text-white text-[1rem] ">{t('education.id-1.period-description')}</p>
          </div>
        </div>
        <div className="hidden sm:block w-full lg:w-7/12 h-full clip-education relative bg-education-goit bg-cover bg-right bg-no-repeat">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
        </div>
      </li>
      <li className="w-full flex justify-between h-full border border-colorBorder dark:border-colorBorderDark rounded-md ">
        <div className="z-10 h-full flex flex-col gap-2 justify-between p-5 mb-6">
          <div>
            <p className="text-textColor dark:text-white text-[1rem] font-semibold">{t('education.title')}</p>
            <p className="text-textColor dark:text-white text-[1rem] ">{t('education.id-2.title-description')}</p>
          </div>
          <div>
            <p className="text-textColor dark:text-white text-[1rem] font-semibold">{t('education.faculty')}</p>
            <p className="text-textColor dark:text-white text-[1rem] ">{t('education.id-2.faculty-description')}</p>
          </div>
          <div>
            <p className="text-textColor dark:text-white text-[1rem] font-semibold">{t('education.speciality')}</p>
            <p className="text-textColor dark:text-white text-[1rem] ">{t('education.id-2.speciality-description')}</p>
          </div>
          <div>
            <p className="text-textColor dark:text-white text-[1rem] font-semibold">{t('education.form')}</p>
            <p className="text-textColor dark:text-white text-[1rem] ">{t('education.id-2.form-description')}</p>
          </div>
          <div>
            <p className="text-textColor dark:text-white text-[1rem] font-semibold">{t('education.county')}</p>
            <p className="text-textColor dark:text-white text-[1rem] ">{t('education.id-2.county-description')}</p>
          </div>
          <div>
            <p className="text-textColor dark:text-white text-[1rem] font-semibold">{t('education.period')}</p>
            <p className="text-textColor dark:text-white text-[1rem] ">{t('education.id-2.period-description')}</p>
          </div>
        </div>
        <div className="hidden sm:block w-full lg:w-7/12 h-full clip-education relative bg-education-renoma bg-cover bg-right bg-no-repeat">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
        </div>
      </li>
      <li className="w-full flex justify-between h-full border border-colorBorder dark:border-colorBorderDark rounded-md">
        <div className="z-10 h-full flex flex-col gap-2 justify-between p-5 mb-6">
          <div>
            <p className="text-textColor dark:text-white text-[1rem] font-semibold">{t('education.title')}</p>
            <p className="text-textColor dark:text-white text-[1rem] ">{t('education.id-3.title-description')}</p>
          </div>
          <div>
            <p className="text-textColor dark:text-white text-[1rem] font-semibold">{t('education.faculty')}</p>
            <p className="text-textColor dark:text-white text-[1rem] ">{t('education.id-3.faculty-description')}</p>
          </div>
          <div>
            <p className="text-textColor dark:text-white text-[1rem] font-semibold">{t('education.speciality')}</p>
            <p className="text-textColor dark:text-white text-[1rem] ">{t('education.id-3.speciality-description')}</p>
          </div>
          <div>
            <p className="text-textColor dark:text-white text-[1rem] font-semibold">{t('education.form')}</p>
            <p className="text-textColor dark:text-white text-[1rem] ">{t('education.id-3.form-description')}</p>
          </div>
          <div>
            <p className="text-textColor dark:text-white text-[1rem] font-semibold">{t('education.county')}</p>
            <p className="text-textColor dark:text-white text-[1rem] ">{t('education.id-3.county-description')}</p>
          </div>
          <div>
            <p className="text-textColor dark:text-white text-[1rem] font-semibold">{t('education.period')}</p>
            <p className="text-textColor dark:text-white text-[1rem] ">{t('education.id-3.period-description')}</p>
          </div>
        </div>
        <div className="hidden sm:block w-full lg:w-7/12  h-full clip-education relative bg-education-economic-cybernetics bg-cover bg-right bg-no-repeat">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
        </div>
      </li>
      <li className="w-full flex justify-between h-full border border-colorBorder dark:border-colorBorderDark rounded-md ">
        <div className="z-10 h-full flex flex-col gap-2 justify-between p-5 mb-6">
          <div>
            <p className="text-textColor dark:text-white text-[1rem] font-semibold">{t('education.title')}</p>
            <p className="text-textColor dark:text-white text-[1rem] ">{t('education.id-4.title-description')}</p>
          </div>
          <div>
            <p className="text-textColor dark:text-white text-[1rem] font-semibold">{t('education.faculty')}</p>
            <p className="text-textColor dark:text-white text-[1rem] ">{t('education.id-4.faculty-description')}</p>
          </div>
          <div>
            <p className="text-textColor dark:text-white text-[1rem] font-semibold">{t('education.speciality')}</p>
            <p className="text-textColor dark:text-white text-[1rem] ">{t('education.id-4.speciality-description')}</p>
          </div>
          <div>
            <p className="text-textColor dark:text-white text-[1rem] font-semibold">{t('education.form')}</p>
            <p className="text-textColor dark:text-white text-[1rem] ">{t('education.id-4.form-description')}</p>
          </div>
          <div>
            <p className="text-textColor dark:text-white text-[1rem] font-semibold">{t('education.county')}</p>
            <p className="text-textColor dark:text-white text-[1rem] ">{t('education.id-4.county-description')}</p>
          </div>
          <div>
            <p className="text-textColor dark:text-white text-[1rem] font-semibold">{t('education.period')}</p>
            <p className="text-textColor dark:text-white text-[1rem]">{t('education.id-4.period-description')}</p>
          </div>
        </div>
        <div className="hidden sm:block w-full lg:w-7/12 h-full clip-education relative bg-education-zkr-zntu bg-cover bg-right bg-no-repeat">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
        </div>
      </li>
    </ul>
  );
}
