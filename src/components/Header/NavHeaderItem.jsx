// NavMenuItem.jsx
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function NavMenuItem({ to, labelKey }) {
  const { t } = useTranslation();

  return (
    <li className="w-full border-b border-r  border-b-colorBorderNavMenu border-r-transparent last:border-b-0 text-center hover:border-r-orange-400 group dark:border-b-colorBorderNavMenuDark">
      <Link
        to={to}
        className="block font-semibold text-black py-4 dark:text-white duration-200  group-hover:text-orange-400 hover:dark:text-orange-400"
      >
        {t(labelKey)}
      </Link>
    </li>
  );
}
