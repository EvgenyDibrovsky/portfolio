import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NavHeaderItem = ({ to, labelKey, closeHeader }) => {
  const { t } = useTranslation();

  return (
    <NavLink
      to={to}
      onClick={closeHeader}
      className="w-full block font-semibold py-4 duration-200 text-black hover:text-white [&.active]:text-white dark:text-white dark:[&.active]:text-white text-center [&.active]:bg-sky-600 "
    >
      {t(labelKey)}
    </NavLink>
  );
};
export default NavHeaderItem;
