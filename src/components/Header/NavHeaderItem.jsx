// // NavMenuItem.jsx
// import { NavLink } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';

// export default function NavMenuItem({ to, labelKey, closeHeader }) {
//   const { t } = useTranslation();

//   return (
//     <>
//       <NavLink
//         to={to}
//         onClick={closeHeader}
//         className="w-full block font-semibold py-4 text-black hover:text-white [&.active]:text-white dark:text-white dark:hover:text-white dark:[&.active]:text-black  border-b border-b-colorBorderNavMenu last:border-b-0 text-center group dark:border-b-colorBorderNavMenuDark  duration-200 hover:bg-gradient-to-r hover:bg-orange-400  [&.active]:bg-gradient-to-r [&.active]:bg-orange-400"
//       >
//         {t(labelKey)}
//       </NavLink>
//     </>
//   );
// }
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function NavHeaderItem({ to, labelKey, closeHeader }) {
  const { t } = useTranslation();

  return (
    <NavLink
      to={to}
      onClick={closeHeader}
      className="w-full block font-semibold py-4 duration-200 text-black hover:text-white [&.active]:text-white dark:text-white dark:[&.active]:text-white text-center [&.active]:bg-orange-400 "
    >
      {t(labelKey)}
    </NavLink>
  );
}
