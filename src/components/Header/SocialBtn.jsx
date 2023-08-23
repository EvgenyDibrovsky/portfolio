import { BsGithub, BsTelegram, BsFacebook, BsLinkedin } from 'react-icons/bs';
export default function SocialBtn() {
  return (
    <>
      <ul className="list-none flex flex-wrap gap-2 mb-4">
        <li className="cursor-pointer inline-flex justify-center items-center w-8 h-8 border-2 border-transparent bg-bgIcons dark:bg-bgIconsDark focus:outline-none duration-200 leading-[0] text-sm hover:border-b-2 hover:bg-orange-400 hover:text-white dark:text-white  dark:hover:text-orange-400 ">
          <a href="https://github.com/EvgenyDibrovsky" target="_blank" rel="noopener noreferrer">
            <BsGithub />
          </a>
        </li>
        <li className="cursor-pointer inline-flex justify-center items-center w-8 h-8 border-2 border-transparent bg-bgIcons dark:bg-bgIconsDark focus:outline-none duration-200 leading-[0] text-sm hover:border-b-2 hover:bg-orange-400 hover:text-white dark:text-white dark:hover:text-orange-400 ">
          <a href="https://t.me/webaltcome" target="_blank" rel="noopener noreferrer">
            <BsTelegram />
          </a>
        </li>
        <li className="cursor-pointer inline-flex justify-center items-center w-8 h-8 border-2 border-transparent bg-bgIcons dark:bg-bgIconsDark focus:outline-none duration-200 leading-[0] text-sm hover:border-b-2 hover:bg-orange-400 hover:text-white dark:text-white dark:hover:text-orange-400 ">
          <a href="https://www.facebook.com/edweb.web.development/" target="_blank" rel="noopener noreferrer">
            <BsFacebook />
          </a>
        </li>
        <li className="cursor-pointer inline-flex justify-center items-center w-8 h-8 border-2 border-transparent bg-bgIcons dark:bg-bgIconsDark focus:outline-none duration-200 leading-[0] text-sm hover:border-b-2 hover:bg-orange-400 hover:text-white dark:text-white dark:hover:text-orange-500 ">
          <a href="https://www.linkedin.com/in/jewgienij-dibrowski/" target="blank">
            <BsLinkedin />
          </a>
        </li>
      </ul>
    </>
  );
}
