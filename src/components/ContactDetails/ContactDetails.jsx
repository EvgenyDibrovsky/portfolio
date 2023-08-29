import { useTranslation } from 'react-i18next';
import { BsPhone, BsEnvelope, BsPinMap } from 'react-icons/bs';
import AnimateElements from 'components/Utility/AnimateElements';

export default function ContactDetails() {
  const { t } = useTranslation();
  return (
    <AnimateElements>
      <ul className="grid grid-cols-1 lg:grid-cols-3 gap-6 justify-center">
        <li className="flex justify-center items-center gap-4 border border-colorBorder dark:border-colorBorderDark py-10 opacity-0 init-animate-1">
          <BsPhone className="w-8 h-8 text-orange-400" />
          <a className="text-[1rem] lg:text-[1.25rem] font-semibold text-textColor dark:text-white mb-2 transition-all duration-200 hover:underline" href={`tel:${t('contact-dedails.phone-number')}`}>
            {t('contact-dedails.phone-number')}
          </a>
        </li>
        <li className="flex justify-center items-center gap-4 border border-colorBorder dark:border-colorBorderDark py-10 opacity-0 init-animate-1">
          <BsEnvelope className="w-8 h-8 text-orange-400" />
          <a className="text-[1rem] lg:text-[1.25rem] font-semibold text-textColor dark:text-white mb-2 duration-200 hover:underline" href={`mailto:${t('contact-dedails.email-address')}`}>
            {t('contact-dedails.email-address')}
          </a>
        </li>
        <li className="flex justify-center items-center gap-4 border border-colorBorder dark:border-colorBorderDark py-10 opacity-0 init-animate-1">
          <BsPinMap className="w-8 h-8 text-orange-400" />
          <p className="text-[1rem] lg:text-[1.25rem] font-semibold text-textColor dark:text-white mb-2">{t('contact-dedails.localization')}</p>
        </li>
      </ul>
    </AnimateElements>
  );
}
