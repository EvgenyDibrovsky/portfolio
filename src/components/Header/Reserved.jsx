import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Reserved({ closeHeader }) {
  const { t } = useTranslation();
  return (
    <div>
      <div className="mb-2 text-center">
        <Link to="/regulations-edweb" onClick={closeHeader} className="text-sm  text-black dark:text-textColorDark duration-200 hover:underline hover:text-sky-500  dark:hover:text-sky-500 ">
          {t('regulations-edweb.title')}
        </Link>
      </div>
      <p className="text-xs text-center text-black dark:text-textColorDark">{t('footer.rights-reserved')}</p>
    </div>
  );
}
