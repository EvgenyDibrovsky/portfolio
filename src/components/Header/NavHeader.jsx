import NavHeaderItem from './NavHeaderItem'; // Путь к файлу NavHeaderItem.jsx

import { useTranslation } from 'react-i18next';

export default function NavHeader() {
  const { t } = useTranslation();

  return (
    <nav className="w-full">
      <ul className={'flex items-center flex-col justify-center'}>
        <NavHeaderItem to="/" labelKey="Главная" />
        <NavHeaderItem to="/about" labelKey={t('about-us')} />
        <NavHeaderItem to="/resume" labelKey="Резюме" />
        <NavHeaderItem to="/portfolio" labelKey="Портфолио" />
        <NavHeaderItem to="/brief" labelKey="Бриф" />
        <NavHeaderItem to="/contact" labelKey={t('contacts')} />
      </ul>
      <div className="flex md:flex-row-reverse items-center gap-8 ml-10 z-50"></div>
    </nav>
  );
}
