import NavHeaderItem from './NavHeaderItem'; // Путь к файлу NavHeaderItem.jsx

import { useTranslation } from 'react-i18next';

export default function NavHeader({ closeMenu }) {
  const { t } = useTranslation();

  return (
    <nav className="w-full ">
      <ul className={'flex items-center flex-col justify-center'}>
        <NavHeaderItem to="/" labelKey={t('nav-menu.home')} closeMenu={closeMenu} />
        <NavHeaderItem to="/about" labelKey={t('nav-menu.about-me')} closeMenu={closeMenu} />
        <NavHeaderItem to="/resume" labelKey={t('nav-menu.resume')} closeMenu={closeMenu} />
        <NavHeaderItem to="/portfolio" labelKey={t('nav-menu.portfolio')} closeMenu={closeMenu} />
        <NavHeaderItem to="/brief" labelKey={t('nav-menu.brief')} closeMenu={closeMenu} />
        <NavHeaderItem to="/contact" labelKey={t('nav-menu.contacts')} closeMenu={closeMenu} />
      </ul>
      <div className="flex md:flex-row-reverse items-center gap-8 ml-10 z-50"></div>
    </nav>
  );
}
