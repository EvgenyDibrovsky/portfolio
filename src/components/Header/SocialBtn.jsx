import { BsGithub, BsTelegram, BsFacebook, BsLinkedin } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';

export default function SocialBtn() {
  const { t } = useTranslation();

  return (
    <>
      <ul className="list-none flex flex-wrap gap-2 mb-4">
        <li className="cursor-pointer inline-flex justify-center items-center w-8 h-8 border-2 border-transparent bg-bgIcons dark:bg-bgIconsDark focus:outline-none duration-200 leading-[0] text-sm hover:border-b-2 hover:bg-gradient-to-b hover:bg-sky-600 hover:dark:bg-sky-600 hover:dark:text-black hover:text-white dark:text-white ">
          <a href="https://github.com/EvgenyDibrovsky" target="_blank" rel="noopener noreferrer" aria-label={t('social-links.github')}>
            <BsGithub />
          </a>
        </li>
        <li className="cursor-pointer inline-flex justify-center items-center w-8 h-8 border-2 border-transparent bg-bgIcons dark:bg-bgIconsDark focus:outline-none duration-200 leading-[0] text-sm hover:border-b-2 hover:bg-gradient-to-b hover:bg-sky-600 hover:dark:bg-sky-600 hover:dark:text-black hover:text-white dark:text-white">
          <a href="https://t.me/webaltcome" target="_blank" rel="noopener noreferrer" aria-label={t('social-links.telegram')}>
            <BsTelegram />
          </a>
        </li>
        <li className="cursor-pointer inline-flex justify-center items-center w-8 h-8 border-2 border-transparent bg-bgIcons dark:bg-bgIconsDark focus:outline-none duration-200 leading-[0] text-sm hover:border-b-2 hover:bg-gradient-to-b hover:bg-sky-600 hover:dark:bg-sky-600 hover:dark:text-black hover:text-white dark:text-white">
          <a href="https://www.facebook.com/edweb.web.development/" target="_blank" rel="noopener noreferrer" aria-label={t('social-links.facebook')}>
            <BsFacebook />
          </a>
        </li>
        <li className="cursor-pointer inline-flex justify-center items-center w-8 h-8 border-2 border-transparent bg-bgIcons dark:bg-bgIconsDark focus:outline-none duration-200 leading-[0] text-sm hover:border-b-2 hover:bg-gradient-to-b hover:bg-sky-600 hover:dark:bg-sky-600 hover:dark:text-black hover:text-white dark:text-white">
          <a href="https://www.linkedin.com/in/jewgienij-dibrowski/" target="blank" aria-label={t('social-links.linkedin')}>
            <BsLinkedin />
          </a>
        </li>
      </ul>
    </>
  );
}
