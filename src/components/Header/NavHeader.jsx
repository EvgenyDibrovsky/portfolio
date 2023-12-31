import NavHeaderItem from './NavHeaderItem'; // Путь к файлу NavHeaderItem.jsx
import { useTranslation } from 'react-i18next';

export default function NavHeader({ closeHeader }) {
  const { t } = useTranslation();

  return (
    <nav className="w-full flex items-center flex-col justify-center">
      <NavHeaderItem to="/" labelKey={t('nav-menu.home')} closeHeader={closeHeader} />
      <NavHeaderItem to="/resume" labelKey={t('nav-menu.resume')} closeHeader={closeHeader} />
      <NavHeaderItem to="/portfolio" labelKey={t('nav-menu.portfolio')} closeHeader={closeHeader} />
      <NavHeaderItem to="/cooperation" labelKey={t('nav-menu.сooperation')} closeHeader={closeHeader} />
      <NavHeaderItem to="/brief" labelKey={t('nav-menu.brief')} closeHeader={closeHeader} />
      <NavHeaderItem to="/contact" labelKey={t('nav-menu.contacts')} closeHeader={closeHeader} />
    </nav>
  );
}
