import { useTranslation } from "react-i18next";
import { BsCodeSlash, BsBrush, BsGlobeEuropeAfrica, BsRocketTakeoff, BsPeople, BsShieldCheck } from "react-icons/bs";
import AnimateElements from "../Utility/AnimateElements";

export default function Possibilities() {
  const { t } = useTranslation();

  return (
    <>
      <AnimateElements>
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-6">
          <li className="flex flex-col lg:flex-row gap-4 opacity-0 init-animate-1">
            <div className="flex items-center gap-5 lg:gap-0 w-full lg:w-10 lg:h-10 mx-auto lg:mx-0">
              <BsCodeSlash className="w-auto sm:w-10 h-10 text-orange-400" />
              <h3 className="lg:hidden text-[1rem] lg:text-[1.25rem] font-semibold text-textColor dark:text-white">{t("possibilities.web-development")}</h3>
            </div>
            <div>
              <h3 className="hidden lg:block text-[1rem] lg:text-[1.25rem] font-semibold text-textColor dark:text-white mb-2">{t("possibilities.web-development")}</h3>
              <p className="text-black dark:text-white">{t("possibilities.web-development-description")}</p>
            </div>
          </li>

          <li className="flex flex-col lg:flex-row gap-4 opacity-0 init-animate-1">
            <div className="flex items-center gap-5 lg:gap-0 w-full lg:w-10 lg:h-10 mx-auto lg:mx-0">
              <BsBrush className="w-auto sm:w-10 h-10 text-orange-400" />
              <h3 className="lg:hidden text-[1rem] lg:text-[1.25rem] font-semibold text-textColor dark:text-white">{t("possibilities.web-design")}</h3>
            </div>
            <div>
              <h3 className="hidden lg:block text-[1rem] lg:text-[1.25rem] font-semibold text-textColor dark:text-white mb-2">{t("possibilities.web-design")}</h3>
              <p className="text-black dark:text-white">{t("possibilities.web-design-description")}</p>
            </div>
          </li>

          <li className="flex flex-col lg:flex-row gap-4 opacity-0 init-animate-1">
            <div className="flex items-center gap-5 lg:gap-0 w-full lg:w-10 lg:h-10 mx-auto lg:mx-0">
              <BsGlobeEuropeAfrica className="w-auto sm:w-10 h-10 text-orange-400" />
              <h3 className="lg:hidden text-[1rem] lg:text-[1.25rem] font-semibold text-textColor dark:text-white">{t("possibilities.e-marketing")}</h3>
            </div>
            <div>
              <h3 className="hidden lg:block text-[1rem] lg:text-[1.25rem] font-semibold text-textColor dark:text-white mb-2">{t("possibilities.e-marketing")}</h3>
              <p className="text-black dark:text-white">{t("possibilities.e-marketing-description")}</p>
            </div>
          </li>

          <li className="flex flex-col lg:flex-row gap-4 opacity-0 init-animate-1">
            <div className="flex items-center gap-5 lg:gap-0 w-full lg:w-10 lg:h-10 mx-auto lg:mx-0">
              <BsRocketTakeoff className="w-auto sm:w-10 h-10 text-orange-400" />
              <h3 className="lg:hidden text-[1rem] lg:text-[1.25rem] font-semibold text-textColor dark:text-white">{t("possibilities.seo")}</h3>
            </div>
            <div>
              <h3 className="hidden lg:block text-[1rem] lg:text-[1.25rem] font-semibold text-textColor dark:text-white mb-2">{t("possibilities.seo")}</h3>
              <p className="text-black dark:text-white">{t("possibilities.seo-description")}</p>
            </div>
          </li>

          <li className="flex flex-col lg:flex-row gap-4 opacity-0 init-animate-1">
            <div className="flex items-center gap-5 lg:gap-0 w-full lg:w-10 lg:h-10 mx-auto lg:mx-0">
              <BsPeople className="w-auto sm:w-10 h-10 text-orange-400" />
              <h3 className="lg:hidden text-[1rem] lg:text-[1.25rem] font-semibold text-textColor dark:text-white">{t("possibilities.site-availability")}</h3>
            </div>
            <div>
              <h3 className="hidden lg:block text-[1rem] lg:text-[1.25rem] font-semibold text-textColor dark:text-white mb-2">{t("possibilities.site-availability")}</h3>
              <p className="text-black dark:text-white">{t("possibilities.site-availability-description")}</p>
            </div>
          </li>

          <li className="flex flex-col lg:flex-row gap-4 opacity-0 init-animate-1">
            <div className="flex items-center gap-5 lg:gap-0 w-full lg:w-10 lg:h-10 mx-auto lg:mx-0">
              <BsShieldCheck className="w-auto sm:w-10 h-10 text-orange-400" />
              <h3 className="lg:hidden text-[1rem] lg:text-[1.25rem] font-semibold text-textColor dark:text-white">{t("possibilities.technical-support")}</h3>
            </div>
            <div>
              <h3 className="hidden lg:block text-[1rem] lg:text-[1.25rem] font-semibold text-textColor dark:text-white mb-2">{t("possibilities.technical-support")}</h3>
              <p className="text-black dark:text-white">{t("possibilities.technical-support-description")}</p>
            </div>
          </li>
        </ul>
      </AnimateElements>
    </>
  );
}
