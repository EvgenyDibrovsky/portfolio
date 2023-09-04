// NavMenuItem.jsx
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function NavMenuItem({ to, labelKey, closeHeader }) {
  const { t } = useTranslation();

  return (
    <>
      <NavLink
        to={to}
        onClick={closeHeader}
        className="w-full block font-semibold text-black py-4 dark:text-white border-b border-b-colorBorderNavMenu last:border-b-0 text-center group dark:border-b-colorBorderNavMenuDark  duration-200 hover:border-r hover:border-r-orange-400 hover:text-orange-400 dark:hover:text-orange-400 [&.active]:text-orange-400 [&.active]:border-r [&.active]:border-r-orange-400 "
      >
        {t(labelKey)}
      </NavLink>
    </>
  );
}
