import { useTranslation } from 'react-i18next';
import AnimateElements from '../Utility/AnimateElements';
import { Link } from 'react-router-dom';
import { BsPencilSquare } from 'react-icons/bs';

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col xl:flex-row xl:gap-8 mb-8 pt-20 md:pt-0 bg-bgHeroSection dark:bg-bgHeroSectionDark">
      <div className="relative xl:w-6/12 w-full h-auto bg-hero-pattern bg-cover bg-center py-20 flex justify-center items-center ">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
        <AnimateElements>
          <ul className="text-white md:text-[1.25rem] xl:text-[1.5rem] flex flex-col gap-5 list-[disc] marker:text-orange-400">
            <li className="z-10 opacity-0 init-animate-5" data-time="0.4s" data-delay="0.2s">
              {t('main-services.service-1')}
            </li>
            <li className="z-10 opacity-0 init-animate-5" data-time="0.6s" data-delay="0.2s">
              {t('main-services.service-2')}
            </li>
            <li className="z-10 opacity-0 init-animate-5" data-time="0.8s" data-delay="0.2s">
              {t('main-services.service-3')}
            </li>
            <li className="z-10 opacity-0 init-animate-5" data-time="1s" data-delay="0.2s">
              {t('main-services.service-4')}
            </li>
            <li className="z-10 opacity-0 init-animate-5" data-time="1.2s" data-delay="0.2s">
              {t('main-services.service-5')}
            </li>
            <li className="z-10 opacity-0 init-animate-5" data-time="1.4s" data-delay="0.2s">
              {t('main-services.service-6')}
            </li>
          </ul>
        </AnimateElements>
      </div>

      <div className="w-full xl:w-6/12 py-12 px-4 xl:px-16 gap-8 flex flex-col justify-center items-center">
        <AnimateElements>
          <div className="relative flex items-center mb-8 after:content-[''] after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:w-full after:h-[2px] after:bg-orange-400 dark:after:bg-orange-400">
            <h1 className="text-[1.25rem] font-semibold text-black dark:text-white">{t('about-me.title')}</h1>
          </div>
          <div className="opacity-0 init-animate-1">
            <p className=" text-black dark:text-white mb-4 ">{t('about-me.description-1')}</p>
            <p className=" text-black dark:text-white mb-4 ">{t('about-me.description-2')}</p>
            <p className=" text-black dark:text-white mb-4 ">{t('about-me.description-3')}</p>
            <p className=" text-black dark:text-white mb-4 italic underline">{t('about-me.description-4')}</p>
          </div>
          <div className="w-full flex flex-col-reverse sm:flex-row xl:flex-col-reverse xxl:flex-row items-center justify-between md:mt-10">
            <div>
              <Link to="/contact" className="btn-hero">
                <BsPencilSquare />
                {t('btn.write-message')}
              </Link>
            </div>

            <div className="flex flex-col items-end mt-5 mb-10 lg:my-0 xl:my-10 xxl:my-0 sm:ml-auto opacity-0 init-animate-1">
              <p className="text-[1.5rem] mr-8 text-sky-700 dark:text-sky-600 font-semibold  font-marck -rotate-[8deg] ">{t('about-me.name')}</p>
              <p className="text-black dark:text-white italic">{t('about-me.web-development')}</p>
            </div>
          </div>
        </AnimateElements>
      </div>
    </div>
  );
}
