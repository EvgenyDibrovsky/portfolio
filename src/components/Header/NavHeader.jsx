import NavHeaderItem from './NavHeaderItem'; // Путь к файлу NavHeaderItem.jsx
import { useTranslation } from 'react-i18next';

export default function NavHeader({ closeMenu }) {
  const { t } = useTranslation();

  return (
    <nav className="w-full flex items-center flex-col justify-center">
      <NavHeaderItem to="/" labelKey={t('nav-menu.home')} closeMenu={closeMenu} />
      <NavHeaderItem to="/resume" labelKey={t('nav-menu.resume')} closeMenu={closeMenu} />
      <NavHeaderItem to="/portfolio" labelKey={t('nav-menu.portfolio')} closeMenu={closeMenu} />
      <NavHeaderItem to="/cooperation" labelKey={t('nav-menu.сooperation')} closeMenu={closeMenu} />
      <NavHeaderItem to="/brief" labelKey={t('nav-menu.brief')} closeMenu={closeMenu} />
      <NavHeaderItem to="/contact" labelKey={t('nav-menu.contacts')} closeMenu={closeMenu} />
    </nav>
  );
}
