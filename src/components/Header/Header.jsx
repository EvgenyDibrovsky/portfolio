import ToggleTheme from './ToggleTheme';
import Foto from './Foto';
import Logo from './Logo';
import NavHeader from './NavHeader';
import ToggleLang from './ToggleLang';
import SocialBtn from './SocialBtn';
import Reserved from './Reserved';
import { useState } from 'react';
import { BsCode, BsCodeSlash } from 'react-icons/bs';

export default function Header({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <header
      className={`${
        isOpen ? 'left-0' : '-left-[12.5rem]'
      } md:left-0 bg-bgHeader border-r border-colorBorder z-50 w-[12.5rem] fixed bottom-0 top-0 h-full pt-28 pb-5 md:py-5 flex flex-col justify-between items-center dark:border-colorBorderDark  dark:bg-bgHeaderDark transition-all duration-300 ease-in-out`}
    >
      <div className="flex flex-col items-center gap-8">
        <div className="hidden md:flex mr-auto pl-5">
          <ToggleTheme theme={theme} toggleTheme={toggleTheme} />
        </div>
        <Foto />
        <NavHeader />
        <ToggleLang />
        <Logo />
        <SocialBtn />
      </div>

      <Reserved />

      <div className="md:hidden border-b border-colorBorder dark:border-b-colorBorderDark bg-bgHeader dark:bg-bgHeaderDark flex justify-between items-center h-20 fixed top-0 left-0 w-full p-5 ">
        <ToggleTheme theme={theme} toggleTheme={toggleTheme} />

        <button
          className="z-50 ml-auto rounded-full text-3xl duration-200 text-black dark:text-white focus:outline-none "
          onClick={toggleMenu}
        >
          {isOpen ? <BsCodeSlash /> : <BsCode />}
        </button>
      </div>
    </header>
  );
}
