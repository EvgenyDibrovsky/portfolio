import NavHeaderItem from './NavHeaderItem'; // Путь к файлу NavHeaderItem.jsx

import { useTranslation } from 'react-i18next';

export default function NavHeader() {
  const { t } = useTranslation();

  return (
    <nav className="w-full">
      <ul className={'flex items-center flex-col justify-center'}>
        <NavHeaderItem to="/" labelKey={t('nav-menu.home')} />
        <NavHeaderItem to="/about" labelKey={t('nav-menu.about-me')} />
        <NavHeaderItem to="/resume" labelKey={t('nav-menu.resume')} />
        <NavHeaderItem to="/portfolio" labelKey={t('nav-menu.portfolio')} />
        <NavHeaderItem to="/brief" labelKey={t('nav-menu.brief')} />
        <NavHeaderItem to="/contact" labelKey={t('nav-menu.contacts')} />
      </ul>
      <div className="flex md:flex-row-reverse items-center gap-8 ml-10 z-50"></div>
    </nav>
  );
}
