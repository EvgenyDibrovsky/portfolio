// import { FaRegLightbulb, FaLightbulb } from 'react-icons/fa';
import { BsSun, BsMoon } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';

export default function ToggleTheme({ theme, toggleTheme }) {
  const { t } = useTranslation();

  return (
    <button onClick={toggleTheme} className="mr-auto text-switherTheme transition-all duration-500 text-[1.5rem] dark:text-orange-400" title={t('btn.theme-switcher')}>
      {theme === 'light' ? <BsSun className="duration-1000 hover:rotate-[10deg]" /> : <BsMoon className="duration-1000 hover:rotate-[10deg]" />}
    </button>
  );
}
