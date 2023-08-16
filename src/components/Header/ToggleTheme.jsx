// import { FaRegLightbulb, FaLightbulb } from 'react-icons/fa';
import { BsSun, BsMoon } from 'react-icons/bs';

export default function ToggleTheme({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="mr-auto text-switherTheme transition-all duration-500 text-[1.5rem] dark:text-orange-400"
    >
      {theme === 'light' ? <BsSun /> : <BsMoon />}
    </button>
  );
}