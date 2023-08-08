import { useTranslation } from 'react-i18next';
import { BsPersonPlus, BsPerson } from 'react-icons/bs';

export default function SelectAuthForm({ selectedForm, setSelectedForm }) {
  const { t } = useTranslation();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-4 my-5">
      <button
        onClick={() => setSelectedForm('Login')}
        className={`h-10 flex items-center justify-center rounded-md border transition-all duration-200${
          selectedForm === 'Login'
            ? 'border-btnAuthForm dark:border-orange-400 bg-btnAuthForm dark:bg-orange-400 text-white dark:text-black ' // Удалить запятую
            : 'text-btnAuthForm dark:text-orange-400 border-btnAuthForm dark:border-orange-400 hover:bg-btnAuthForm  dark:hover:bg-orange-400 hover:text-white hover:dark:text-black'
        }`}
      >
        <span className="flex items-center justify-center gap-2">
          <BsPerson />
          {t('login-btn')}
        </span>
      </button>

      <button
        onClick={() => setSelectedForm('Register')}
        className={`h-10 flex items-center justify-center rounded-md border transition-all duration-200${
          selectedForm === 'Register'
            ? 'border-btnAuthForm dark:border-orange-400 bg-btnAuthForm dark:bg-orange-400 text-white dark:text-black ' // Удалить запятую
            : 'text-btnAuthForm dark:text-orange-400 border-btnAuthForm dark:border-orange-400 hover:bg-btnAuthForm  dark:hover:bg-orange-400 hover:text-white hover:dark:text-black'
        }`}
      >
        <span className="flex items-center justify-center gap-2">
          <BsPersonPlus />
          {t('registration')}
        </span>
      </button>
    </div>
  );
}
