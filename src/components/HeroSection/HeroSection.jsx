import { useTranslation } from 'react-i18next';

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col xl:flex-row xl:gap-8 mb-8 pt-20 md:pt-0 bg-bgHeroSection dark:bg-bgHeroSectionDark">
      <div className="relative xl:w-6/12  w-full h-auto bg-hero-pattern bg-cover bg-center py-20 flex justify-center items-center ">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
        <ul className="z-10 text-white md:text-[1.25rem] xl:text-[1.5rem] flex flex-col gap-2 list-[disc] marker:text-orange-400">
          <li>{t('main-services.service-1')}</li>
          <li>{t('main-services.service-2')}</li>
          <li>{t('main-services.service-3')}</li>
          <li>{t('main-services.service-4')}</li>
          <li>{t('main-services.service-5')}</li>
          <li>{t('main-services.service-6')}</li>
        </ul>
      </div>

      <div className="w-full xl:w-6/12 py-12 px-4 xl:px-16 gap-8 flex flex-col justify-center items-center">
        <div>
          <div className="relative flex items-center mb-8 after:content-[''] after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:w-full after:h-[2px] after:bg-orange-400 dark:after:bg-orange-400">
            <h1 className="text-[1.25rem] font-semibold text-black dark:text-white">{t('about-me.title')}</h1>
          </div>
          <div className="">
            <p className=" text-black dark:text-white mb-4 ">{t('about-me.description-1')}</p>
            <p className=" text-black dark:text-white mb-4 ">{t('about-me.description-2')}</p>
            <p className=" text-black dark:text-white mb-4 ">{t('about-me.description-3')}</p>
            <p className=" text-black dark:text-white mb-4 italic underline">{t('about-me.description-4')}</p>
          </div>
          <div className="flex flex-col items-end ">
            <p className="text-[1.5rem] mr-5  text-sky-700  dark:text-sky-600 font-semibold  font-marck -rotate-[8deg] ">{t('about-me.name')}</p>
            <p className="  text-black dark:text-white italic">{t('about-me.web-development')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
