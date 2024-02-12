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
        className="w-full block font-semibold text-black py-4 dark:text-white border-b border-b-colorBorderNavMenu last:border-b-0 text-center group dark:border-b-colorBorderNavMenuDark  duration-200 hover:bg-gradient-to-r hover:bg-orange-400 hover:text-white dark:hover:text-black [&.active]:text-white dark:[&.active]:text-black [&.active]:bg-gradient-to-r [&.active]:bg-orange-400"
      >
        {t(labelKey)}
      </NavLink>
    </>
  );
}
