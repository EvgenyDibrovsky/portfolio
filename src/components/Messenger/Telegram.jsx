import { BsTelegram } from 'react-icons/bs';

const Telegram = () => {
  return (
    <>
      <a
        href="https://t.me/edwebdev"
        target="_blank"
        rel="noopener noreferrer"
        className="animate-pulse	fixed z-50 bottom-5 right-5 rounded-full bg-white p-[0rem] shadow-xl duration-200 hover:scale-90"
      >
        <BsTelegram className="w-[2.5rem] h-[2.5rem] text-sky-600" />
      </a>
    </>
  );
};
export default Telegram;
