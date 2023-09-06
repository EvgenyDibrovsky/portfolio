import ToggleTheme from './ToggleTheme';
import Foto from './Foto';
import Logo from './Logo';
import LogoMobile from './LogoMobile';
import NavHeader from './NavHeader';
import ToggleLang from './ToggleLang';
import SocialBtn from './SocialBtn';
import Reserved from './Reserved';
import Date from './Date';
import { useState, useEffect, useRef } from 'react';
import { BsCode, BsCodeSlash } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';

export default function Header({ theme, toggleTheme }) {
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef(null);

  const toggleMenu = () => setIsOpen(prevState => !prevState);

  useEffect(() => {
    const handleClickOutside = event => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.classList.add('overflow-y-hidden'); // Изменение здесь
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.body.classList.remove('overflow-y-hidden'); // Изменение здесь
    }

    return () => {
      document.body.classList.remove('overflow-y-hidden'); // Изменение здесь
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const headerClasses = `md:left-0 bg-bgHeader border-r border-colorBorder z-50 w-[16.5rem]  lg:w-[12.5rem] fixed bottom-0 top-0 h-full pt-28 pb-5 md:py-5 flex flex-col justify-between items-center dark:border-colorBorderDark  dark:bg-bgHeaderDark transition-all duration-500 ease-in-out overflow-y-auto scrollbar-w-1 scrollbar scrollbar-rounded-full scrollbar-thumb-orange-400 scrollbar-track-gray-400 ${
    isOpen ? 'left-0' : '-left-[16.5rem]'
  }`;

  return (
    <header ref={headerRef} className={headerClasses}>
      <div className="flex flex-col items-center gap-8 ">
        <div className="hidden md:flex mr-auto pl-5">
          <ToggleTheme theme={theme} toggleTheme={toggleTheme} />
        </div>
        <Date />
        <Foto closeHeader={() => setIsOpen(false)} />
        <NavHeader closeHeader={() => setIsOpen(false)} />
        <ToggleLang closeHeader={() => setIsOpen(false)} />
        <Logo closeHeader={() => setIsOpen(false)} />
        <SocialBtn />
      </div>

      <Reserved closeHeader={() => setIsOpen(false)} />

      <div className="md:hidden border-b border-colorBorder dark:border-b-colorBorderDark bg-bgHeader dark:bg-bgHeaderDark flex justify-between items-center h-20 fixed top-0 left-0 w-full p-5">
        <ToggleTheme theme={theme} toggleTheme={toggleTheme} />
        <div className="w-32">
          <LogoMobile closeHeader={() => setIsOpen(false)} />
        </div>
        <button className="z-50 ml-auto rounded-full text-3xl  duration-200 text-black dark:text-white focus:outline-none" onClick={toggleMenu} title={t('btn.nav-menu')}>
          {isOpen ? <BsCodeSlash /> : <BsCode />}
        </button>
      </div>
    </header>
  );
}
