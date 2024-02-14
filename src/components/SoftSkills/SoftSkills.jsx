import { useTranslation } from "react-i18next";
import { BsCheck2Circle } from "react-icons/bs";
import AnimateElements from "../../components/Utility/AnimateElements";

export default function SoftSkills() {
  const { t } = useTranslation();
  return (
    <AnimateElements>
      <ul className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
        <li className="opacity-0 init-animate-1" data-time="0.4s" data-delay="0.5s">
          <BsCheck2Circle className="w-12 h-12 text-green-500 mx-auto mb-2" />
          <p className="text-black dark:text-white text-center">{t("soft-skills.skill-1")}</p>
        </li>
        <li className="opacity-0 init-animate-1" data-time="0.8s" data-delay="0.5s">
          <BsCheck2Circle className="w-12 h-12 text-green-500 mx-auto mb-2" />
          <p className="text-black dark:text-white text-center">{t("soft-skills.skill-2")}</p>
        </li>
        <li className="opacity-0 init-animate-1" data-time="1.2s" data-delay="0.5s">
          <BsCheck2Circle className="w-12 h-12 text-green-500 mx-auto mb-2" />
          <p className="text-black dark:text-white text-center">{t("soft-skills.skill-3")}</p>
        </li>
        <li className="opacity-0 init-animate-1" data-time="1.6s" data-delay="0.5s">
          <BsCheck2Circle className="w-12 h-12 text-green-500 mx-auto mb-2" />
          <p className="text-black dark:text-white text-center">{t("soft-skills.skill-4")}</p>
        </li>
        <li className="opacity-0 init-animate-1" data-time="2s" data-delay="0.5s">
          <BsCheck2Circle className="w-12 h-12 text-green-500 mx-auto mb-2" />
          <p className="text-black dark:text-white text-center">{t("soft-skills.skill-5")}</p>
        </li>
        <li className="opacity-0 init-animate-1" data-time="2.4s" data-delay="0.5s">
          <BsCheck2Circle className="w-12 h-12 text-green-500 mx-auto mb-2" />
          <p className="text-black dark:text-white text-center">{t("soft-skills.skill-6")}</p>
        </li>
      </ul>
    </AnimateElements>
  );
}
