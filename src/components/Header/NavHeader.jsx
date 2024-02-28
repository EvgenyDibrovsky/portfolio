import NavHeaderItem from './NavHeaderItem'; // Путь к файлу NavHeaderItem.jsx
import { useTranslation } from 'react-i18next';

const NavHeader = ({ closeHeader }) => {
  const { t } = useTranslation();

  return (
    <nav className="w-full flex items-center flex-col justify-center">
      <ul className="main-menu w-full list-none p-0 m-0">
        <li>
          <NavHeaderItem to="/" labelKey={t('nav-menu.home')} closeHeader={closeHeader} />
        </li>
        <li>
          <NavHeaderItem to="/resume" labelKey={t('nav-menu.resume')} closeHeader={closeHeader} />
        </li>
        <li>
          <NavHeaderItem to="/portfolio" labelKey={t('nav-menu.portfolio')} closeHeader={closeHeader} />
        </li>
        <li>
          <NavHeaderItem to="/cooperation" labelKey={t('nav-menu.сooperation')} closeHeader={closeHeader} />
        </li>
        <li>
          <NavHeaderItem to="/brief" labelKey={t('nav-menu.brief')} closeHeader={closeHeader} />
        </li>
        <li>
          <NavHeaderItem to="/contact" labelKey={t('nav-menu.contacts')} closeHeader={closeHeader} />
        </li>
      </ul>
    </nav>
  );
};
export default NavHeader;
